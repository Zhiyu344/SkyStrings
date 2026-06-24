# SkyStrings
<div>
    <h3>
        <a href="README.md">English</a>
        <span> • </span>
        <a href="README_zh.md">中文</a>
    </h3>
</div>

一个《Sky光·遇》本地化文本多语言对照查询工具。支持按关键词检索原文，并同步展示多种语言的对应译文。

## 功能特性
- **关键词搜索**：按关键词匹配原文文本，自动过滤文本中的标签符号，实现精准查询
- **多语言对照**：支持双语或三语对照模式，可在设置中灵活切换
- **界面国际化**：已适配游戏内全部 14 种语言，默认根据浏览器语言自动加载
- **状态持久化**：语言偏好与对照模式自动保存在浏览器本地，刷新页面后无需重新设置
- **结果排序**：搜索结果按文本长度升序排列，词语匹配优先于句子展示

## 在线预览
https://skystrings.frifun.top/

## 快速开始
### 克隆仓库
```bash
git clone https://github.com/Zhiyu344/SkyString.git
cd SkyString
```

### 本地运行

出于浏览器安全策略，直接以 `file://` 方式打开 `index.html` 会导致 `fetch` 请求被拦截，语言数据无法加载。建议通过本地服务器运行：

```bash
python3 -m http.server 8000
```

启动后访问 `http://localhost:8000` 即可。

同时，你也可以使用 VS Code 的 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 扩展运行，效果相同。

## 项目结构

```
.
├── index.html           # 页面结构
├── css/
│   └── style.css        # 样式
├── js/
│   ├── app.js           # 核心逻辑：数据加载、搜索、渲染
│   └── i18n.js          # 界面多语言文案
└── data/
    └── *.strings        # 各语言文本数据文件
```

## 技术栈
原生 JavaScript、HTML、CSS 实现，无第三方框架或构建工具依赖，可直接在浏览器中运行。

## 数据来源声明
项目中 `data/` 目录下的 `.strings` 文件提取自《Sky 光·遇》Steam 版客户端的本地化资源，版权归 [https://thatgamecompany.com](thatgamecompany) 所有。本项目仅用于学习与个人查询用途，不附带任何游戏资源的再分发授权；如有侵权或需要下架，请通过 Issue 联系。

## 贡献
欢迎通过 Issue 或 Pull Request 提出建议与改进。提交 PR 前，请确保改动经过本地测试。

## 许可证
本项目基于 [MIT License](LICENSE) 开源。
