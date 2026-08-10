/**
 * 車行專屬設定檔 (config.js)
 * 請將此檔案與 index.html 放置於同一個資料夾目錄下
 */
window.SHOP_CONFIG = {
    // 1. 車行名稱（顯示於網頁標題與頂端 Header）
    shopName: "模範車業",
    
    // 2. Google Apps Script 資料庫 API 網址
    apiUrl: "https://script.google.com/macros/s/AKfycbw0GFMdyUxeOt-iiGzRNJOK6AudfOMD7DkUTcr_1z65YGhsoymaJjdTEYXKIJOrMbKa/exec",
    
    // 3. 主要品牌 Logo 圖片網址
    logoUrl: "./logo1.png",
    
    // 4. 鎖屏認證頁面的輪播 Logo 網址（可設定 1~3 張）
    lockLogos: [
        "./logo1.png"
    ],
    
    // 5. 背景浮水印圖片網址
    watermarkUrl: "https://images.1111.com.tw/oad/117197616.jpg",
    
    // 6. 頁尾顯示版權宣告文字
    footerText: "© 賺錢車業. All Rights Reserved. 整合系統 v5.7",

    // 7. 預設解鎖密碼（當 Google 試算表中沒有設定 CONFIG_PASSWORD 時使用）
    defaultPasscode: "168888"
};
