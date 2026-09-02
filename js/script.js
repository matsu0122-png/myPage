/* ========================================================================
   ポートフォリオサイト用 JavaScript
   ハンバーガーメニュー / スムーススクロール
   ======================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initHamburgerMenu();
  initSmoothScroll();
  initBackToTop();
});

/* ------------------------------------------------------------------------
   ハンバーガーメニュー（スマートフォン用）
   ------------------------------------------------------------------------ */
function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("nav-menu");

  if (!hamburgerBtn || !navMenu) return;

  const closeMenu = () => {
    navMenu.classList.remove("is-open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    hamburgerBtn.setAttribute("aria-label", "メニューを開く");
  };

  const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle("is-open");
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
    hamburgerBtn.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);

  // メニュー内のリンクをクリックしたら自動的に閉じる
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Escキーでメニューを閉じる（キーボード操作対応）
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

/* ------------------------------------------------------------------------
   スムーススクロール（ナビゲーションリンク用）
   ------------------------------------------------------------------------ */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      targetEl.setAttribute("tabindex", "-1");
      targetEl.focus({ preventScroll: true });
    });
  });
}

/* ------------------------------------------------------------------------
   フッターの「ページ上部へ戻る」ボタン
   ------------------------------------------------------------------------ */
function initBackToTop() {
  const topBtn = document.getElementById("topBtn");
  if (!topBtn) return;

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
