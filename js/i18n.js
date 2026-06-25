const uiText = {
    "en": {
        settingsBtn: "⚙ Settings",
        uiLangLabel: "UI Language: ",
        modeLabel: "Comparison Mode: ",
        select1: "Bilingual",
        select2: "Trilingual",
        sourceLabel: "Source: ",
        targetLabel: "Target: ",
        searchPlaceholder: "Enter keyword...",
        resultId: "ID: ",
        resultSource: "Source: "
    },

    "de": {
        settingsBtn: "⚙ Einstellungen",
        uiLangLabel: "Benutzeroberflächensprache: ",
        modeLabel: "Vergleichsmodus: ",
        select1: "Zweisprachig",
        select2: "Dreisprachig",
        sourceLabel: "Quelle: ",
        targetLabel: "Ziel: ",
        searchPlaceholder: "Schlüsselwort eingeben...",
        resultId: "ID: ",
        resultSource: "Quelle: "
    },

    "es": {
        settingsBtn: "⚙ Configuración",
        uiLangLabel: "Idioma de la interfaz: ",
        modeLabel: "Modo de comparación: ",
        select1: "Bilingüe",
        select2: "Trilingüe",
        sourceLabel: "Fuente: ",
        targetLabel: "Destino: ",
        searchPlaceholder: "Ingrese palabra clave...",
        resultId: "ID: ",
        resultSource: "Fuente: "
    },

    "fr": {
        settingsBtn: "⚙ Paramètres",
        uiLangLabel: "Langue de l'interface : ",
        modeLabel: "Mode de comparaison : ",
        select1: "Bilingue",
        select2: "Trilingue",
        sourceLabel: "Source : ",
        targetLabel: "Cible : ",
        searchPlaceholder: "Entrez un mot-clé...",
        resultId: "ID : ",
        resultSource: "Source : "
    },

    "id": {
        settingsBtn: "⚙ Pengaturan",
        uiLangLabel: "Bahasa UI: ",
        modeLabel: "Mode Perbandingan: ",
        select1: "Dwibahasa",
        select2: "Tribahasa",
        sourceLabel: "Sumber: ",
        targetLabel: "Tujuan: ",
        searchPlaceholder: "Masukkan kata kunci...",
        resultId: "ID: ",
        resultSource: "Sumber: "
    },

    "it": {
        settingsBtn: "⚙ Impostazioni",
        uiLangLabel: "Lingua dell'interfaccia: ",
        modeLabel: "Modalità di confronto: ",
        select1: "Bilingue",
        select2: "Trilingue",
        sourceLabel: "Fonte: ",
        targetLabel: "Destinazione: ",
        searchPlaceholder: "Inserisci parola chiave...",
        resultId: "ID: ",
        resultSource: "Fonte: "
    },

    "ja": {
        settingsBtn: "⚙ 設定",
        uiLangLabel: "UI 言語：",
        modeLabel: "比較モード：",
        select1: "二言語",
        select2: "三言語",
        sourceLabel: "ソース：",
        targetLabel: "ターゲット：",
        searchPlaceholder: "キーワードを入力...",
        resultId: "ID：",
        resultSource: "ソース："
    },

    "ko": {
        settingsBtn: "⚙ 설정",
        uiLangLabel: "UI 언어: ",
        modeLabel: "비교 모드: ",
        select1: "이중 언어",
        select2: "삼중 언어",
        sourceLabel: "출처: ",
        targetLabel: "대상: ",
        searchPlaceholder: "키워드를 입력하세요...",
        resultId: "ID: ",
        resultSource: "출처: "
    },

    "pt": {
        settingsBtn: "⚙ Configurações",
        uiLangLabel: "Idioma da interface: ",
        modeLabel: "Modo de comparação: ",
        select1: "Bilíngue",
        select2: "Trilíngue",
        sourceLabel: "Fonte: ",
        targetLabel: "Destino: ",
        searchPlaceholder: "Digite a palavra-chave...",
        resultId: "ID: ",
        resultSource: "Fonte: "
    },

    "ru": {
        settingsBtn: "⚙ Настройки",
        uiLangLabel: "Язык интерфейса: ",
        modeLabel: "Режим сравнения: ",
        select1: "Двуязычный",
        select2: "Трёхязычный",
        sourceLabel: "Источник: ",
        targetLabel: "Цель: ",
        searchPlaceholder: "Введите ключевое слово...",
        resultId: "ID: ",
        resultSource: "Источник: "
    },

    "th": {
        settingsBtn: "⚙ ตั้งค่า",
        uiLangLabel: "ภาษาอินเตอร์เฟซ: ",
        modeLabel: "โหมดการเปรียบเทียบ: ",
        select1: "สองภาษา",
        select2: "สามภาษา",
        sourceLabel: "แหล่งที่มา: ",
        targetLabel: "เป้าหมาย: ",
        searchPlaceholder: "ป้อนคำหลัก...",
        resultId: "ID: ",
        resultSource: "แหล่งที่มา: "
    },

    "vi": {
        settingsBtn: "⚙ Cài đặt",
        uiLangLabel: "Ngôn ngữ giao diện: ",
        modeLabel: "Chế độ so sánh: ",
        select1: "Hai ngôn ngữ",
        select2: "Ba ngôn ngữ",
        sourceLabel: "Nguồn: ",
        targetLabel: "Mục tiêu: ",
        searchPlaceholder: "Nhập từ khóa...",
        resultId: "ID: ",
        resultSource: "Nguồn: "
    },

    "zh": {
        settingsBtn: "⚙ 设置",
        uiLangLabel: "界面语言：",
        modeLabel: "比较模式：",
        select1: "双语",
        select2: "三语",
        sourceLabel: "源语言：",
        targetLabel: "目标语言：",
        searchPlaceholder: "请输入关键词...",
        resultId: "ID: ",
        resultSource: "原文: "
    }
};

function applyUiText() {
    const t = uiText[uiLanguage];

    const uiLangLabelText = document.getElementById("uiLangLabel");
    const sourceLabelText = document.getElementById("sourceLabel");
    const settingsBtnText = document.getElementById("settingsBtn");
    const modeLabelText = document.getElementById("modeLabel");

    if (uiLangLabelText) uiLangLabelText.textContent = t.uiLangLabel;
    if (sourceLabelText) sourceLabelText.textContent = t.sourceLabel;
    if (settingsBtnText) settingsBtnText.textContent = t.settingsBtn;
    if (modeLabelText) modeLabelText.textContent = t.modeLabel;

    const modeSelect = document.getElementById("modeSelect");
    if (modeSelect && modeSelect.options.length >= 2) {
        modeSelect.options[0].textContent = t.select1;
        modeSelect.options[1].textContent = t.select2;
    }

    searchInput.placeholder = t.searchPlaceholder;
}

if (uiLangSelect) {
    uiLangSelect.value = uiLanguage;

    uiLangSelect.addEventListener("change", () => {
        uiLanguage = uiLangSelect.value;
        localStorage.setItem("uiLanguage", uiLanguage);
        initLanguageSelectors(); // Refresh the dropdown language name
        applyUiText();           // Refresh other interface text
        handleSearch();          // Re-render search results
    });
}
