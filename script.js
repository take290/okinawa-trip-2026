document.addEventListener('DOMContentLoaded', () => {
    // スクロール時のアニメーション処理（Intersection Observer）
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 一度表示されたら監視を終了する場合は以下をコメントアウト解除
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // .day-cardクラスを持つ要素を監視
    document.querySelectorAll('.day-card').forEach(card => {
        observer.observe(card);
    });

    // ヒーロー背景のパララックス効果
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                // スクロール量に応じて背景を下方向にずらす（パララックス）
                heroBg.style.transform = `scale(1.05) translateY(${scrollY * 0.3}px)`;
            }
        });
    }
});
