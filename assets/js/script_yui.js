document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    const headerButton = document.querySelector(".header-button");
    const closeButton = document.querySelector(".close-button");

    // ハンバーガーメニューを開く
    headerButton.addEventListener("click", function () {
        overlay.style.display = "block";
        // ばつ印を表示する
        closeButton.style.display = "block";
        // 三本線を非表示にする
        headerButton.style.display = "none";
        
    });

    // ハンバーガーメニューを閉じる
    closeButton.addEventListener("click", function () {
        overlay.style.display = "none";
        // ばつ印を非表示にする
        closeButton.style.display = "none";
        // 三本線を表示する
        headerButton.style.display = "block";
    });
});