"""Fetch each distro's own icon from its official site.

usage: python3 -I fetch_icons.py <list.tsv>... <download_dir>
Writes <download_dir>/<key>.<ext> and <download_dir>/manifest.tsv (key, source url).
Prefers apple-touch-icon (big), then the largest <link rel=icon>, then SVG, then /favicon.ico.
"""
import sys, re, os, ssl, html
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen
from concurrent.futures import ThreadPoolExecutor

*lists, out = sys.argv[1:]
os.makedirs(out, exist_ok=True)
UA = 'Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0'
CTX = ssl.create_default_context()
LAX = ssl._create_unverified_context()   # some small distro sites have broken chains; we only read images


def key(url):
    u = urlparse(url)
    path = re.sub(r'/(index\.(html?|php))?$', '', u.path, flags=re.I).rstrip('/')
    k = (u.hostname or '').removeprefix('www.') + path
    return re.sub(r'[^a-z0-9]+', '-', k.lower()).strip('-')


def get(url, limit=3_000_000):
    for ctx in (CTX, LAX):
        try:
            with urlopen(Request(url, headers={'User-Agent': UA, 'Accept': '*/*'}), timeout=12, context=ctx) as r:
                return r.geturl(), r.headers.get('Content-Type', ''), r.read(limit)
        except ssl.SSLError:
            continue
        except Exception:
            return None
    return None


def candidates(base, page):
    found = []
    for tag in re.findall(r'<link\b[^>]*>', page, re.I):
        rel = re.search(r'rel\s*=\s*["\']?([^"\'>]+)', tag, re.I)
        href = re.search(r'href\s*=\s*["\']?([^"\'\s>]+)', tag, re.I)
        if not rel or not href or 'icon' not in rel.group(1).lower() or 'mask' in rel.group(1).lower():
            continue
        sizes = re.search(r'sizes\s*=\s*["\']?(\d+)', tag, re.I)
        size = int(sizes.group(1)) if sizes else 0
        h = html.unescape(href.group(1))
        if h.startswith('data:'):
            continue
        score = size
        if 'apple-touch' in rel.group(1).lower():
            score = max(score, 180)
        if h.lower().split('?')[0].endswith('.svg'):
            score = max(score, 150)
        found.append((score, urljoin(base, h)))
    found.sort(key=lambda x: -x[0])
    return [u for _, u in found] + [urljoin(base, '/apple-touch-icon.png'), urljoin(base, '/favicon.ico')]


def ext_for(ctype, url):
    c = ctype.lower()
    for k, e in (('svg', 'svg'), ('png', 'png'), ('icon', 'ico'), ('ico', 'ico'), ('jpeg', 'jpg'), ('jpg', 'jpg'), ('webp', 'webp'), ('gif', 'gif')):
        if k in c:
            return e
    m = re.search(r'\.(svg|png|ico|jpe?g|webp|gif)(\?|$)', url.lower())
    return m.group(1).replace('jpeg', 'jpg') if m else None


def one(row):
    fam, name, url = row
    k = key(url)
    page = get(url, 1_500_000)
    base = page[0] if page else url
    text = page[2].decode('utf-8', 'replace') if page else ''
    for c in candidates(base, text)[:6]:
        r = get(c)
        if not r or len(r[2]) < 100:
            continue
        e = ext_for(r[1], c)
        if not e or (e == 'svg' and b'<svg' not in r[2][:4000].lower()):
            continue
        if e != 'svg' and r[2][:15].lstrip().lower().startswith((b'<!doctype', b'<html')):
            continue
        with open(os.path.join(out, k + '.' + e), 'wb') as f:
            f.write(r[2])
        return k, c
    return k, ''


rows = []
for l in lists:
    for line in open(l, encoding='utf-8'):
        p = line.rstrip('\n').split('\t')
        if len(p) == 3:
            rows.append(p)
with ThreadPoolExecutor(8) as ex:
    res = list(ex.map(one, rows))
with open(os.path.join(out, 'manifest.tsv'), 'w') as f:
    for k, src in res:
        f.write(k + '\t' + src + '\n')
print('got', sum(1 for _, s in res if s), 'of', len(res))
