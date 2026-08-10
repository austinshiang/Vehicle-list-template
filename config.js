/**
 * 車行專屬設定檔 (config.js)
 * 請將此檔案與 index.html 放置於同一個資料夾目錄下
 */
window.SHOP_CONFIG = {
    // 1. 車行名稱（顯示於網頁標題與頂端 Header）
    shopName: "豆豆豆包車業",
    
    // 2. Google Apps Script 資料庫 API 網址
    apiUrl: "https://script.google.com/macros/s/AKfycbyHsAqGx0fo7xv3AatE3aRSBkUqUHbn3zo1WwTSdNu2QJw2kvH5F8flo86KfAt4i6CP/exec",
    
    // 3. 主要品牌 Logo 圖片網址
    logoUrl: "https://storage.moegirl.org.cn/moegirl/commons/0/0d/%E8%B1%86%E5%8C%85AI.png",
    
    // 4. 鎖屏認證頁面的輪播 Logo 網址（可設定 1~3 張）
    lockLogos: [
        "https://storage.moegirl.org.cn/moegirl/commons/0/0d/%E8%B1%86%E5%8C%85AI.png"
    ],
    
    // 5. 背景浮水印圖片網址
    watermarkUrl: "https://images.1111.com.tw/oad/117197616.jpg",
    
    // 6. 頁尾顯示版權宣告文字
    footerText: "© 姜駒車業. All Rights Reserved. 整合系統 v5.7",

    // 7. 預設解鎖密碼（當 Google 試算表中沒有設定 CONFIG_PASSWORD 時使用）
    defaultPasscode: "8888"
};
