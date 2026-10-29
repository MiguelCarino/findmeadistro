// i18n — Find Me a Distro dictionaries (fleet convention, see Password/i18n.js).
// English source strings ARE the keys, so a missing entry falls back to
// English. Locale comes from carino-lang.js (window.CarinoLang.current);
// this script is deferred and loaded after it, so CarinoLang exists by
// DOMContentLoaded, and we re-apply on the fleet 'carino:langchange' event.
// Distro and family names (Debian, Arch, SUSE …) stay as they are.

const I18N = {
    es: {
        // Page title (browser tab)
        'Find Me a Distro — A Random Linux or BSD Distro to Try': 'Find Me a Distro — Una distro Linux o BSD al azar para probar',
        'Late shift.': 'Turno nocturno.',
        'Good morning.': 'Buenos días.',
        'Good afternoon.': 'Buenas tardes.',
        'Good evening.': 'Buenas noches.',
        'More': 'Más',
        // Navbar actions
        'Copy link': 'Copiar enlace',
        'Start over': 'Empezar de nuevo',
        'Link copied': 'Enlace copiado',
        // Hero
        'Find a Linux or BSD distro': 'Encuentra una distro Linux o BSD',
        'you have not tried yet.': 'que aún no has probado.',
        'How it works': 'Cómo funciona',
        'Pick a family, or all of them.': 'Elige una familia, o todas.',
        'Choose whether discontinued projects count.': 'Decide si cuentan los proyectos descontinuados.',
        'Get one distro from that pool, picked at random. It is not matched to you.': 'Recibe una distro de ese grupo, elegida al azar. No está elegida para ti.',
        'Start': 'Empezar',
        // Choices
        'Which family?': '¿Qué familia?',
        'All': 'Todas',
        'Other': 'Otras',
        'Discontinued projects?': '¿Proyectos descontinuados?',
        'Leave them out': 'Dejarlos fuera',
        'Include them': 'Incluirlos',
        'Only them': 'Solo esos',
        'Pick a distro': 'Elegir una distro',
        '{n} distro in this pool': '{n} distro en este grupo',
        '{n} distros in this pool': '{n} distros en este grupo',
        // Result
        '{family} family': 'Familia {family}',
        'Discontinued': 'Descontinuada',
        'A random pick from all families — pick again for another.': 'Elegida al azar entre todas las familias. Vuelve a elegir para ver otra.',
        'A random pick from the {family} family — pick again for another.': 'Elegida al azar de la familia {family}. Vuelve a elegir para ver otra.',
        'This project is discontinued, so its site may be an archive.': 'Este proyecto está descontinuado, así que su sitio puede ser un archivo.',
        'Visit its site': 'Visitar su sitio',
        'Pick again': 'Elegir otra',
        'Your answers stay in this link and this browser. Nothing is sent anywhere.': 'Tus respuestas se quedan en este enlace y en este navegador. No se envía nada a ningún sitio.',
        // Footer
        'Suggest a distro': 'Sugerir una distro',
        'Upstream project': 'Proyecto original',
        'Fork of Find Me A Linux Distro by KripC': 'Fork de Find Me A Linux Distro de KripC',
    },
    'pt-BR': {
        'Find Me a Distro — A Random Linux or BSD Distro to Try': 'Find Me a Distro — Uma distro Linux ou BSD aleatória para experimentar',
        'Late shift.': 'Turno da madrugada.',
        'Good morning.': 'Bom dia.',
        'Good afternoon.': 'Boa tarde.',
        'Good evening.': 'Boa noite.',
        'More': 'Mais',
        'Copy link': 'Copiar link',
        'Start over': 'Recomeçar',
        'Link copied': 'Link copiado',
        'Find a Linux or BSD distro': 'Encontre uma distro Linux ou BSD',
        'you have not tried yet.': 'que você ainda não testou.',
        'How it works': 'Como funciona',
        'Pick a family, or all of them.': 'Escolha uma família, ou todas.',
        'Choose whether discontinued projects count.': 'Decida se projetos descontinuados entram.',
        'Get one distro from that pool, picked at random. It is not matched to you.': 'Receba uma distro desse grupo, sorteada. Ela não foi escolhida para você.',
        'Start': 'Começar',
        'Which family?': 'Qual família?',
        'All': 'Todas',
        'Other': 'Outras',
        'Discontinued projects?': 'Projetos descontinuados?',
        'Leave them out': 'Deixar de fora',
        'Include them': 'Incluir',
        'Only them': 'Só eles',
        'Pick a distro': 'Sortear uma distro',
        '{n} distro in this pool': '{n} distro neste grupo',
        '{n} distros in this pool': '{n} distros neste grupo',
        '{family} family': 'Família {family}',
        'Discontinued': 'Descontinuada',
        'A random pick from all families — pick again for another.': 'Sorteada entre todas as famílias. Sorteie de novo para ver outra.',
        'A random pick from the {family} family — pick again for another.': 'Sorteada da família {family}. Sorteie de novo para ver outra.',
        'This project is discontinued, so its site may be an archive.': 'Este projeto foi descontinuado, então o site pode ser um arquivo.',
        'Visit its site': 'Abrir o site',
        'Pick again': 'Sortear outra',
        'Your answers stay in this link and this browser. Nothing is sent anywhere.': 'Suas respostas ficam neste link e neste navegador. Nada é enviado para lugar nenhum.',
        'Suggest a distro': 'Sugerir uma distro',
        'Upstream project': 'Projeto original',
        'Fork of Find Me A Linux Distro by KripC': 'Fork do Find Me A Linux Distro de KripC',
    },
    ja: {
        'Find Me a Distro — A Random Linux or BSD Distro to Try': 'Find Me a Distro — 試すLinux・BSDディストロをランダムに1つ',
        'Late shift.': '夜勤ですね。',
        'Good morning.': 'おはようございます。',
        'Good afternoon.': 'こんにちは。',
        'Good evening.': 'こんばんは。',
        'More': 'その他',
        'Copy link': 'リンクをコピー',
        'Start over': '最初から',
        'Link copied': 'リンクをコピーしました',
        'Find a Linux or BSD distro': 'まだ試していない',
        'you have not tried yet.': 'Linux・BSDディストロを探す。',
        'How it works': '使い方',
        'Pick a family, or all of them.': 'ファミリーを1つ、またはすべてを選びます。',
        'Choose whether discontinued projects count.': '開発終了したプロジェクトを含めるか選びます。',
        'Get one distro from that pool, picked at random. It is not matched to you.': 'その中からディストロを1つランダムに選びます。あなたに合わせた結果ではありません。',
        'Start': 'はじめる',
        'Which family?': 'どのファミリー？',
        'All': 'すべて',
        'Other': 'その他',
        'Discontinued projects?': '開発終了したプロジェクトは？',
        'Leave them out': '含めない',
        'Include them': '含める',
        'Only them': 'それだけ',
        'Pick a distro': 'ディストロを選ぶ',
        '{n} distro in this pool': '対象：{n}件',
        '{n} distros in this pool': '対象：{n}件',
        '{family} family': '{family}系',
        'Discontinued': '開発終了',
        'A random pick from all families — pick again for another.': 'すべてのファミリーからランダムに選びました。もう一度選ぶと別のものが出ます。',
        'A random pick from the {family} family — pick again for another.': '{family}系からランダムに選びました。もう一度選ぶと別のものが出ます。',
        'This project is discontinued, so its site may be an archive.': 'このプロジェクトは開発終了しているため、サイトはアーカイブの場合があります。',
        'Visit its site': 'サイトを開く',
        'Pick again': 'もう一度選ぶ',
        'Your answers stay in this link and this browser. Nothing is sent anywhere.': '回答はこのリンクとこのブラウザの中だけにあります。どこにも送信されません。',
        'Suggest a distro': 'ディストロを提案',
        'Upstream project': '元のプロジェクト',
        'Fork of Find Me A Linux Distro by KripC': 'KripC による Find Me A Linux Distro のフォーク',
    },
    ru: {
        'Find Me a Distro — A Random Linux or BSD Distro to Try': 'Find Me a Distro — случайный дистрибутив Linux или BSD, чтобы попробовать',
        'Late shift.': 'Ночная смена.',
        'Good morning.': 'Доброе утро.',
        'Good afternoon.': 'Добрый день.',
        'Good evening.': 'Добрый вечер.',
        'More': 'Ещё',
        'Copy link': 'Копировать ссылку',
        'Start over': 'Начать заново',
        'Link copied': 'Ссылка скопирована',
        'Find a Linux or BSD distro': 'Найдите дистрибутив Linux или BSD,',
        'you have not tried yet.': 'который вы ещё не пробовали.',
        'How it works': 'Как это работает',
        'Pick a family, or all of them.': 'Выберите семейство или все сразу.',
        'Choose whether discontinued projects count.': 'Решите, учитывать ли закрытые проекты.',
        'Get one distro from that pool, picked at random. It is not matched to you.': 'Получите один дистрибутив из этого набора, выбранный случайно. Он не подобран под вас.',
        'Start': 'Начать',
        'Which family?': 'Какое семейство?',
        'All': 'Все',
        'Other': 'Другие',
        'Discontinued projects?': 'Закрытые проекты?',
        'Leave them out': 'Не включать',
        'Include them': 'Включить',
        'Only them': 'Только их',
        'Pick a distro': 'Выбрать дистрибутив',
        '{n} distro in this pool': 'Дистрибутивов в наборе: {n}',
        '{n} distros in this pool': 'Дистрибутивов в наборе: {n}',
        '{family} family': 'Семейство {family}',
        'Discontinued': 'Закрыт',
        'A random pick from all families — pick again for another.': 'Случайный выбор из всех семейств. Выберите ещё раз, чтобы получить другой.',
        'A random pick from the {family} family — pick again for another.': 'Случайный выбор из семейства {family}. Выберите ещё раз, чтобы получить другой.',
        'This project is discontinued, so its site may be an archive.': 'Проект закрыт, поэтому его сайт может быть архивом.',
        'Visit its site': 'Открыть сайт',
        'Pick again': 'Выбрать снова',
        'Your answers stay in this link and this browser. Nothing is sent anywhere.': 'Ваши ответы остаются в этой ссылке и в этом браузере. Ничего никуда не отправляется.',
        'Suggest a distro': 'Предложить дистрибутив',
        'Upstream project': 'Исходный проект',
        'Fork of Find Me A Linux Distro by KripC': 'Форк Find Me A Linux Distro от KripC',
    },
};

function currentFleetLang() { return (window.CarinoLang && window.CarinoLang.current) || 'en'; }

function t(key) {
    const dict = I18N[currentFleetLang()];
    return (dict && dict[key]) || key;
}

// Static markup: elements carrying data-i18n use their original English text
// as the key (captured on first pass, whitespace-normalized; locale switches
// stay reversible). The result card and pool count are painted by js/app.js,
// which re-renders on the same event.
function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        if (!el.dataset.i18nKey) el.dataset.i18nKey = el.textContent.trim().replace(/\s+/g, ' ');
        el.textContent = t(el.dataset.i18nKey);
    });
}

// The tab title, keyed by its English text the same way.
let titleKey = '';
function applyI18n() {
    document.documentElement.lang = currentFleetLang();
    if (!titleKey) titleKey = document.title.trim();
    document.title = t(titleKey);
    applyStaticI18n();
}

document.addEventListener('DOMContentLoaded', applyI18n);
window.addEventListener('carino:langchange', applyI18n);
