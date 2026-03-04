document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Scroll reveal for .day cards ---------- */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.day').forEach(el => observer.observe(el));

    /* ---------- Hero parallax ---------- */
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            if (y < window.innerHeight) {
                heroBg.style.transform = `scale(1.08) translateY(${y * 0.25}px)`;
            }
        }, { passive: true });
    }

    /* ---------- Navbar-like header shrink (optional) ---------- */
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            hero.classList.toggle('scrolled', window.scrollY > 80);
        }, { passive: true });
    }
});
