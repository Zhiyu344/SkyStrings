// ==============================
// Languages list
// ==============================

const langLabel = {
    "en": {
        "de": "German",
        "en": "English",
        "es": "Spanish",
        "fr": "French",
        "id": "Indonesian",
        "it": "Italian",
        "ja": "Japanese",
        "ko": "Korean",
        "pt": "Portuguese",
        "ru": "Russian",
        "th": "Thai",
        "vi": "Vietnamese",
        "zh-hans": "Simplified Chinese",
        "zh-hant": "Traditional Chinese"
    },

    "de": {
        "de": "Deutsch",
        "en": "Englisch",
        "es": "Spanisch",
        "fr": "Französisch",
        "id": "Indonesisch",
        "it": "Italienisch",
        "ja": "Japanisch",
        "ko": "Koreanisch",
        "pt": "Portugiesisch",
        "ru": "Russisch",
        "th": "Thailändisch",
        "vi": "Vietnamesisch",
        "zh-hans": "Vereinfachtes Chinesisch",
        "zh-hant": "Traditionelles Chinesisch"
    },

    "es": {
        "de": "Alemán",
        "en": "Inglés",
        "es": "Español",
        "fr": "Francés",
        "id": "Indonesio",
        "it": "Italiano",
        "ja": "Japonés",
        "ko": "Coreano",
        "pt": "Portugués",
        "ru": "Ruso",
        "th": "Tailandés",
        "vi": "Vietnamita",
        "zh-hans": "Chino Simplificado",
        "zh-hant": "Chino Tradicional"
    },

    "fr": {
        "de": "Allemand",
        "en": "Anglais",
        "es": "Espagnol",
        "fr": "Français",
        "id": "Indonésien",
        "it": "Italien",
        "ja": "Japonais",
        "ko": "Coréen",
        "pt": "Portugais",
        "ru": "Russe",
        "th": "Thaï",
        "vi": "Vietnamien",
        "zh-hans": "Chinois Simplifié",
        "zh-hant": "Chinois Traditionnel"
    },

    "id": {
        "de": "Bahasa Jerman",
        "en": "Bahasa Inggris",
        "es": "Bahasa Spanyol",
        "fr": "Bahasa Prancis",
        "id": "Bahasa Indonesia",
        "it": "Bahasa Italia",
        "ja": "Bahasa Jepang",
        "ko": "Bahasa Korea",
        "pt": "Bahasa Portugis",
        "ru": "Bahasa Rusia",
        "th": "Bahasa Thailand",
        "vi": "Bahasa Vietnam",
        "zh-hans": "Bahasa Tiongkok Sederhana",
        "zh-hant": "Bahasa Tiongkok Tradisional"
    },

    "it": {
        "de": "Tedesco",
        "en": "Inglese",
        "es": "Spagnolo",
        "fr": "Francese",
        "id": "Indonesiano",
        "it": "Italiano",
        "ja": "Giapponese",
        "ko": "Coreano",
        "pt": "Portoghese",
        "ru": "Russo",
        "th": "Thailandese",
        "vi": "Vietnamita",
        "zh-hans": "Cinese Semplificato",
        "zh-hant": "Cinese Tradizionale"
    },

    "ja": {
        "de": "ドイツ語",
        "en": "英語",
        "es": "スペイン語",
        "fr": "フランス語",
        "id": "インドネシア語",
        "it": "イタリア語",
        "ja": "日本語",
        "ko": "韓国語",
        "pt": "ポルトガル語",
        "ru": "ロシア語",
        "th": "タイ",
        "vi": "ベトナム語",
        "zh-hans": "簡体字中国語",
        "zh-hant": "繁体字中国語"
    },

    "ko": {
        "de": "독일어",
        "en": "영어",
        "es": "스페인어",
        "fr": "프랑스어",
        "id": "인도네시아어",
        "it": "이탈리아어",
        "ja": "일본어",
        "ko": "한국어",
        "pt": "포르투갈어",
        "ru": "러시아어",
        "th": "태국어",
        "vi": "베트남어",
        "zh-hans": "중국어 간체",
        "zh-hant": "중국어 번체"
    },

    "pt": {
        "de": "Alemão",
        "en": "Inglês",
        "es": "Espanhol",
        "fr": "Francês",
        "id": "Indonésio",
        "it": "Italiano",
        "ja": "Japonês",
        "ko": "Coreano",
        "pt": "Português",
        "ru": "Russo",
        "th": "Tailandês",
        "vi": "Vietnamita",
        "zh-hans": "Chinês Simplificado",
        "zh-hant": "Chinês Tradicional"
    },

    "ru": {
        "de": "Немецкий",
        "en": "Английский",
        "es": "Испанский",
        "fr": "Французский",
        "id": "Индонезийский",
        "it": "Итальянский",
        "ja": "Японский",
        "ko": "Корейский",
        "pt": "Португальский",
        "ru": "Русский",
        "th": "Тайский",
        "vi": "Вьетнамский",
        "zh-hans": "Китайский упрощенный",
        "zh-hant": "Китайский традиционный"
    },

    "th": {
        "de": "ภาษาเยอรมัน",
        "en": "ภาษาอังกฤษ",
        "es": "ภาษาสเปน",
        "fr": "ภาษาฝรั่งเศส",
        "id": "ภาษาอินโดนีเซีย",
        "it": "ภาษาอิตาลี",
        "ja": "ภาษาญี่ปุ่น",
        "ko": "ภาษาเกาหลี",
        "pt": "ภาษาโปรตุเกส",
        "ru": "ภาษารัสเซีย",
        "th": "ภาษาไทย",
        "vi": "ภาษาเวียดนาม",
        "zh-hans": "ภาษาจีนตัวย่อ",
        "zh-hant": "ภาษาจีนตัวเต็ม"
    },

    "vi": {
        "de": "Tiếng Đức",
        "en": "Tiếng Anh",
        "es": "Tiếng Tây Ban Nha",
        "fr": "Tiếng Pháp",
        "id": "Tiếng Indonesia",
        "it": "Tiếng Ý",
        "ja": "Tiếng Nhật",
        "ko": "Tiếng Hàn",
        "pt": "Tiếng Bồ Đào Nha",
        "ru": "Tiếng Nga",
        "th": "Tiếng Thái",
        "vi": "Tiếng Việt",
        "zh-hans": "Tiếng Trung Giản Thể",
        "zh-hant": "Tiếng Trung Phồn Thể"
    },

    "zh": {
        "de": "德语",
        "en": "英语",
        "es": "西班牙语",
        "fr": "法语",
        "id": "印度尼西亚语",
        "it": "意大利语",
        "ja": "日语",
        "ko": "韩语",
        "pt": "葡萄牙语",
        "ru": "俄语",
        "th": "泰语",
        "vi": "越南语",
        "zh-hans": "简体中文",
        "zh-hant": "繁体中文"
    }
};


// ==============================
// Detect UI language
// ==============================

function detectUiLanguage() {
    const saved = localStorage.getItem("uiLanguage");
    if (saved === "en" || saved === "de" || saved === "zh" || saved === "ja") {
        return saved;
    }

    const browserLangs = navigator.languages || [navigator.language] || ["en"];
    for (const lang of browserLangs) {
        const code = lang.toLowerCase();
        if (code.startsWith("en")) return "en";
        if (code.startsWith("de")) return "de";
        if (code.startsWith("ja")) return "ja";
        if (code.startsWith("zh")) return "zh";
    }
    return "en";
}

let uiLanguage = detectUiLanguage();

const languages = Object.keys(langLabel.en);

// ==============================
// Comparison mode
// ==============================

let comparisonMode = parseInt(localStorage.getItem("comparisonMode") || "2", 10);

// ==============================
// UI language selector (optional, only if present in HTML)
// ==============================

const uiLangSelect = document.getElementById("uiLangSelect");

if (uiLangSelect) {
    uiLangSelect.value = uiLanguage;
}

// ==============================
// Settings panel elements (optional, only if present in HTML)
// ==============================

const settingsBtn = document.getElementById("settingsBtn");
const settingsPanel = document.getElementById("settingsPanel");
const modeSelect = document.getElementById("modeSelect");

// ==============================
// Data storage
// ==============================

// ID -> text
const dataen = {};

// text -> ID
const reverseIndex = {};


// ==============================
// Parse .strings file
// ==============================

// Convert .strings text to JS object
function parseStrings(content) {
    
    // Store the parsing results
    const result = {};

    // match: "key" = "value";
    const regex = /^"([^"]+)"\s*=\s*"((?:\\"|[^"])*)";$/gm;

    let match;

    while ((match = regex.exec(content)) !== null) {
        const key = match[1];
        const value = match[2];

        result[key] = value;
    }

    return result;
}


// ==============================
// Load single language file
// ==============================

async function loadLanguage(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            console.warn(`Failed to load ${path}: ${response.status}`);
            return {};
        }
        const text = await response.text();
        return parseStrings(text);
    } catch (err) {
        console.warn(`Error loading ${path}:`, err);
        return {};
    }
}

// Expose for debugging
window.loadLanguage = loadLanguage;


// ==============================
// Build reverse index
// ==============================

function buildReverseIndex() {

    // Clear previous index
    for (const lang in dataen) {

        reverseIndex[lang] = {};

        const langData = dataen[lang];

        for (const id in langData) {

            const text = langData[id];

            reverseIndex[lang][text] = id;
        }
    }

    console.log("Reverse index built");
}


// ==============================
// Load all languages
// ==============================

async function loadAllLanguages() {
    console.log("Loading languages...");

    const results = await Promise.all(
        languages.map(async (lang) => {
            const path = `data/${lang}.strings`;
            const data = await loadLanguage(path);
            console.log(`Loaded: ${lang}`);
            return [lang, data];
        })
    );

    for (const [lang, data] of results) {
        dataen[lang] = data;
    }

    buildReverseIndex();
    initLanguageSelectors();
    applyUiText();
    bindEvents();
    console.log("All languages loaded");
}

// ==============================
// Search function
// ==============================

function search(sourceLang, keyword) {

    const results = [];

    const langData = dataen[sourceLang];

    for (const id in langData) {

        const rawText = langData[id];

        // Remove marks
        const text = rawText.replace(/<[^>]+>/g, "");

        if (text.toLowerCase().includes(keyword.toLowerCase())) {

            results.push({
                id,
                sourceText: rawText
            });
        }
    }

    return results;
}

function query(sourceLang, targetLangs, keyword) {
    const matches = search(sourceLang, keyword);

    return matches.map(({ id, sourceText }) => ({
        id,
        source: sourceText,
        targets: Object.fromEntries(
            targetLangs.map(lang => [lang, dataen[lang]?.[id] || null])
        )
    }));
}

// ==============================
// Init language selectors
// ==============================

function getLangLabel(langCode) {
    return langLabel[uiLanguage]?.[langCode] || langCode;
}

// Store the target language select elements
let targetSelects = [];

function initLanguageSelectors() {
    sourceSelect.innerHTML = "";

    for (const lang of languages) {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = getLangLabel(lang);
        sourceSelect.appendChild(option);
    }

    const savedSource = localStorage.getItem("sourceLang");
    sourceSelect.value = (savedSource && languages.includes(savedSource)) ? savedSource : "en";

    renderTargetSelectors();
}

// Dynamically render the target language selectors based on the comparison mode
function renderTargetSelectors() {
    const container = document.getElementById("targetLangContainer");
    container.innerHTML = "";
    targetSelects = [];

    const targetCount = comparisonMode - 1;

    // Read the target language array saved last time
    const savedTargets = JSON.parse(localStorage.getItem("targetLangs") || "[]");
    const defaultTargets = ["zh-hans", "zh-hant"];

    for (let i = 0; i < targetCount; i++) {
        const label = document.createElement("label");

        const span = document.createElement("span");
        span.textContent = uiText[uiLanguage].targetLabel + (targetCount > 1 ? ` ${i + 1}` : "");

        const select = document.createElement("select");
        select.id = `targetLang${i}`;

        for (const lang of languages) {
            const option = document.createElement("option");
            option.value = lang;
            option.textContent = getLangLabel(lang);
            select.appendChild(option);
        }

        // Set the selected value end on saved targets or default targets
        const savedValue = savedTargets[i];
        select.value = (savedValue && languages.includes(savedValue)) ? savedValue : (defaultTargets[i] || languages[0]);

        select.addEventListener("change", () => {
            saveLanguageSelections();
            handleSearch();
        });

        label.appendChild(span);
        label.appendChild(select);
        container.appendChild(label);

        targetSelects.push(select);
    }
}

// ==============================
// Render results
// ==============================

function renderResults(data) {
    resultsDiv.innerHTML = "";
    const t = uiText[uiLanguage];

    for (const item of data) {

        const div = document.createElement("div");
        div.className = "result";

        // ID
        const id = document.createElement("div");
        id.textContent = t.resultId + item.id;

        // Source
        const source = document.createElement("div");
        source.textContent = t.resultSource + item.source;

        div.appendChild(id);
        div.appendChild(source);

        // Targets
        for (const lang in item.targets) {
            const tEl = document.createElement("div");
            tEl.textContent = `${getLangLabel(lang)}: ${item.targets[lang]}`;
            div.appendChild(tEl);
        }

        resultsDiv.appendChild(div);
    }
}


// ==============================
// Save current language selections
// ==============================
 
function saveLanguageSelections() {
    localStorage.setItem("sourceLang", sourceSelect.value);
    localStorage.setItem("targetLangs", JSON.stringify(targetSelects.map(sel => sel.value)));
}


// ==============================
// Handle search
// ==============================

function handleSearch() {
    const keyword = searchInput.value.trim();

    if (!keyword) {
        resultsDiv.innerHTML = "";
        return;
    }

    const sourceLang = sourceSelect.value;
    const targetLangs = targetSelects.map(sel => sel.value); // Get the selected target languages

    // Save the current selections to localStorage
    localStorage.setItem("sourceLang", sourceLang);
    localStorage.setItem("targetLangs", JSON.stringify(targetLangs));

    const result = query(
        sourceLang,
        targetLangs,
        keyword
    );

    // Sort by pure text length
    result.sort((a, b) => {
        const lenA = a.source.replace(/<[^>]+>/g, "").length;
        const lenB = b.source.replace(/<[^>]+>/g, "").length;
        return lenA - lenB;
    });

    renderResults(result);
}

// ==============================
// Bind events
// ==============================

function bindEvents() {

    searchInput.addEventListener("input", handleSearch);

    sourceSelect.addEventListener("change", handleSearch);

    if (settingsBtn && settingsPanel) {
        settingsBtn.addEventListener("click", () => {
            settingsPanel.classList.toggle("hidden");
        });
    }

    if (modeSelect) {
        modeSelect.value = String(comparisonMode);

        modeSelect.addEventListener("change", () => {
            comparisonMode = parseInt(modeSelect.value, 10);
            localStorage.setItem("comparisonMode", String(comparisonMode));
            renderTargetSelectors(); // Re-render target language selectors end on the new comparison mode
            handleSearch();          // Re-render search results with the new target languages
        });
    }
}

// ==============================
// UI Elements
// ==============================

const sourceSelect = document.getElementById("sourceLang");
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

// ==============================
// Bootstrap
// ==============================

loadAllLanguages();
