# SkyStrings
<div>
    <h3>
        <a href="README.md">English</a>
        <span> • </span>
        <a href="README_zh.md">中文</a>
    </h3>
</div>

A multilingual reference tool for querying localized texts from *Sky: Children of the Light*. Supports keyword‑based search against the original source strings, and displays corresponding translations in multiple languages simultaneously.

## Features

- **Keyword search** – matches against original‑text content, automatically ignoring markup tags within strings.
- **Multilingual side‑by‑side view** – supports dual‑language or triple‑language modes, switchable in settings.
- **UI localization** – the interface is already translated into all 14 languages supported in‑game; defaults to your browser’s language setting.
- **State persistence** – language preferences and comparison mode are saved locally and restored automatically on page refresh.
- **Result sorting** – search results are ordered by text length, with word‑level matches appearing before sentence‑level ones.

## Live Demo
https://skystrings.frifun.top

## Quick Start
### Clone the repository

```bash
git clone https://github.com/Zhiyu344/SkyStrings.git
cd SkyStrings
```

### Run locally
Due to browser security policies, opening `index.html` directly via the `file://` protocol will block `fetch` requests, preventing language data from loading. It is recommended to serve the project through a local HTTP server:

```bash
python3 -m http.server 8000
```

After starting the server, visit `http://localhost:8000` in your browser.

Alternatively, you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code, which works the same way.

## Project Structure
```
.
├── index.html           # Page structure
├── css/
│   └── style.css        # Styles
├── js/
│   ├── app.js           # Core logic: data loading, search, rendering
│   └── i18n.js          # UI translation strings
└── data/
    └── *.strings        # Text data files for each language
```

## Technology Stack
Built with vanilla JavaScript, HTML, and CSS – no third‑party frameworks or build tools required, runs directly in the browser.

## Data Source Attribution
The `.strings` files under the `data/` directory are extracted from the localized resources of the Steam version of *Sky: Children of the Light*, and their copyright belongs to thatgamecompany. This project is intended solely for learning and personal reference purposes, and does not convey any redistribution rights for game assets. If you believe this constitutes copyright infringement or require takedown, please contact us via Issues.

## Contributing
Issues and Pull Requests are welcome. Before submitting a PR, please ensure your changes have been tested locally.

## License
This project is open‑sourced under the [MIT License](https://opensource.org/licenses/MIT).
