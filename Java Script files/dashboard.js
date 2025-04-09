// Set dynamic last login time
window.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const formatted = now.toLocaleString('en-GB'); // e.g., 05/04/2025, 21:54:30
    const lastLoginEl = document.getElementById('last-login');

    if (lastLoginEl) {
        lastLoginEl.textContent = `Last Login: ${formatted}`;
    }
});