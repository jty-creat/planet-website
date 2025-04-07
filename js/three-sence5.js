// 宇宙背景效果
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('universe-bg');
    if (!container) return;
    
    // 创建星星元素
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.position = 'absolute';
        star.style.opacity = '0.8';
        star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite alternate`;
        container.appendChild(star);
    }
    
    // 创建行星元素
    const colors = ['#ffd1f3', '#d1e3ff', '#d1ffed', '#fff9d1'];
    for (let i = 0; i < 4; i++) {
        const planet = document.createElement('div');
        planet.className = 'planet';
        const size = Math.random() * 150 + 50;
        planet.style.width = `${size}px`;
        planet.style.height = `${size}px`;
        planet.style.left = `${Math.random() * 80 + 10}%`;
        planet.style.top = `${Math.random() * 80 + 10}%`;
        planet.style.background = `radial-gradient(circle, ${colors[i]} 0%, ${colors[(i+1)%4]} 100%)`;
        planet.style.opacity = `${Math.random() * 0.1 + 0.05}`;
        planet.style.position = 'absolute';
        planet.style.borderRadius = '50%';
        planet.style.filter = 'blur(1px)';
        planet.style.zIndex = '-1';
        container.appendChild(planet);
    }
});

// 星星闪烁动画
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0% { opacity: 0.3; }
        100% { opacity: 0.8; }
    }
`;
document.head.appendChild(style);