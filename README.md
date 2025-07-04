# 科技感靜態網頁

這是一個使用 HTML, CSS, 和 JavaScript 構建的具有科技感風格的靜態網頁模板。設計用於展示項目、功能或作為一個簡單的技術主題登陸頁面。

## 特點

*   **響應式設計**: 適應不同屏幕尺寸。
*   **科技感美學**: 深色主題，亮藍色強調，以及簡潔的線條。
*   **平滑滾動**: 使用 JavaScript 實現導航鏈接的平滑滾動。
*   **活動鏈接高亮**: 滾動時，導航欄會高亮顯示當前視圖中的區域。
*   **易於定制**: 可以輕鬆修改內容、圖片和樣式。

## 文件結構

```
.
├── index.html         # HTML 結構
├── style.css          # CSS 樣式
├── script.js          # JavaScript 交互
├── placeholder-icon.svg # 功能區塊的佔位符圖標
├── placeholder-bg.jpg   # Hero 區域的佔位符背景 (SVG 格式)
└── README.md          # 項目說明
```

## 如何本地運行

1.  克隆或下載此倉庫。
2.  直接在瀏覽器中打開 `index.html` 文件即可預覽。

## 如何部署到 GitHub Pages

1.  **創建一個新的 GitHub 倉庫** (如果還沒有的話)。
2.  **將項目文件推送到該倉庫**:
    ```bash
    # 如果是全新的項目，先初始化 git
    # git init
    # git branch -M main

    # 添加遠程倉庫 (如果還沒有)
    # git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

    # 添加文件並提交
    git add .
    git commit -m "Initial commit: Add website files"

    # 推送到 main 分支
    git push -u origin main
    ```
    (請將 `YOUR_USERNAME` 和 `YOUR_REPOSITORY_NAME` 替换為您的 GitHub 用戶名和倉庫名。)
3.  **啟用 GitHub Pages**:
    *   進入您的 GitHub 倉庫頁面。
    *   點擊 "Settings" (設置)。
    *   在左側導航欄中，選擇 "Pages"。
    *   在 "Build and deployment" 下的 "Source" 部分，選擇 "Deploy from a branch"。
    *   在 "Branch" 部分，選擇 `main` 分支 (或者您推送代碼的分支)，並選擇 `/(root)` 文件夾。
    *   點擊 "Save"。
4.  GitHub Pages 會在幾分鐘內構建並部署您的網站。部署完成後，您將在同一頁面上看到網站的 URL (通常是 `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`)。

## 定制

*   **內容**: 直接修改 `index.html` 中的文本和圖片路徑。
*   **樣式**: 在 `style.css` 中調整顏色、字體、佈局等。
    *   考慮替換 `placeholder-icon.svg` 和 `placeholder-bg.jpg` 為您自己的圖片資源。
*   **交互**: 在 `script.js` 中修改或添加 JavaScript 功能。

## 預覽截圖 (佔位)

(您可以在這裡添加一張網站的截圖)

---

這個項目旨在提供一個快速啟動的科技感網頁模板。隨意使用和修改！
