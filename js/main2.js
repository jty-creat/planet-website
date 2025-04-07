document.addEventListener('DOMContentLoaded', function() {
    // 返回按钮事件
    document.getElementById('back-btn').addEventListener('click', function() {
        window.location.href = 'main.html';
    });
    
    // 行星数据
    const planets = [
        { name: "SUN", image: "sun.png", link: "sun.html"  },
        { name: "MERCURY", image: "shuibiao.png", link: "shui-murtury.html" },
        { name: "VENUS", image: "jin.png", link: "jin-venus.html" },
        { name: "EARTH", image: "diqiu.png", link: "earth.html" },
        { name: "MOON", image: "moon.png", link: "moon.html" },
        { name: "MARS", image: "huo.png", link: "huo-mars.html" },
        { name: "JUPITER", image: "mu.png", link: "mu-jupiter.html" },
        { name: "SATURN", image: "土3-removebg-preview.png", link: "tu-saturn.html" },
        { name: "URANUS", image: "tianwang.png", link: "tian-uranus.html" },
        { name: "NEPTUNE", image: "haiwang.png", link: "hai-neptune.html" }
    ];
    
    // 创建卡片
    const carousel = document.querySelector('.card-carousel');
    
    planets.forEach(planet => {
        const card = document.createElement('div');
        card.className = 'planet-card';
        
        card.innerHTML = `
            <div class="planet-image">
                <img src="${planet.image}" alt="${planet.name}" loading="lazy">
            </div>
            <div class="planet-name">${planet.name}</div>
        `;
        
        card.addEventListener('click', () => {
            window.location.href = planet.link;
        });
        
        carousel.appendChild(card);
    });
    
    // 轮播功能
    const cards = document.querySelectorAll('.planet-card');
    let cardWidth = cards[0].getBoundingClientRect().width + 40;
    let maxVisibleCards = Math.floor(window.innerWidth / cardWidth);
    let currentIndex = 0;
    
    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }
    
    // 控制按钮
    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel();
    });
    
    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = Math.min(cards.length - maxVisibleCards, currentIndex + 1);
        updateCarousel();
    });
    
    // 预加载图片
    planets.forEach(planet => {
        new Image().src = planet.image;
    });
    
    // 窗口大小调整
    window.addEventListener('resize', () => {
        cardWidth = cards[0].getBoundingClientRect().width + 40;
        maxVisibleCards = Math.floor(window.innerWidth / cardWidth);
        updateCarousel();
    });
});