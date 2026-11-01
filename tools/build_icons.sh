#!/bin/sh
# Rebuild img/d/*.webp and js/icons.js from each distro's official site.
# Run from the repository root. Downloads go to a temporary folder.
# Afterwards, look over img/d: a site may serve its host's or theme's icon
# instead of the distro's; add that key to tools/icon-skip.txt and run again.
set -e
tmp=$(mktemp -d)
node -e '
eval(require("fs").readFileSync("js/handlelink.js", "utf8") + ";global.L = links");
const F = {2:"debian",3:"arch",4:"gentoo",5:"fedora",6:"suse",7:"slackware",8:"bsd",9:"other"};
for (const l of ["regular", "eol"]) {
  const out = [];
  for (const k in F) for (const e of L[l][k]) out.push(F[k] + "\t" + e.name + "\t" + e.url);
  require("fs").writeFileSync(process.argv[1] + "/" + l + ".tsv", out.join("\n") + "\n");
}' "$tmp"
python3 -I tools/fetch_icons.py "$tmp/regular.tsv" "$tmp/eol.tsv" "$tmp/dl"
rm -f img/d/*.webp
python3 -I tools/convert_icons.py "$tmp/dl" img/d tools/icon-skip.txt js/icons.js
rm -rf "$tmp"
