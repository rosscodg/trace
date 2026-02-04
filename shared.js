/* ===== SHARED JS — Tracely Website ===== */

// Apply saved theme immediately (before page renders)
(function() {
    var saved = localStorage.getItem('theme');
    if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
})();

// Toggle between light and dark theme
function toggleTheme() {
    var html = document.documentElement;
    var currentTheme = html.getAttribute('data-theme');
    var newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Close mobile nav with animation
function closeMobileNav() {
    var mobileNav = document.getElementById('mobileNav');
    if (!mobileNav) return;
    mobileNav.classList.add('closing');
    mobileNav.classList.remove('open');
    setTimeout(function() {
        mobileNav.classList.remove('closing');
    }, 400);
}
