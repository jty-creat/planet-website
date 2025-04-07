document.addEventListener('DOMContentLoaded', function() {
    // 返回按钮事件
    document.getElementById('back-btn').addEventListener('click', function() {
        window.location.href = 'main.html';
    });
    
    // 创建宇宙背景元素
    createUniverseBackground();
    
    // 望远镜数据
    const telescopes = [
        { 
            id: "card1",
            name: "REFLECTOR", 
            image: "反射式-removebg-preview.png",
            description: "反射式望远镜使用曲面镜收集和聚焦光线。它们非常适合观测深空天体，如星系和星云。",
            link: "page5.html"
        },
        { 
            id: "card2",
            name: "REFRACTOR", 
            image: "折射3-removebg-preview.png",
            description: "折射式望远镜使用透镜来弯曲(折射)光线。它们提供高对比度的清晰图像。",
            link: "page6.html"
        },
        { 
            id: "card3",
            name: "CATADIOPTRIC", 
            image: "折反射-removebg-preview.png",
            description: "折反射望远镜结合了透镜和反射镜的设计，兼具两者的优点。",
            link: "page7.html"
        },
        { 
            id: "card4",
            name: "DOBSONIAN", 
            image: "道布森5-removebg-preview (1).png",
            description: "道布森望远镜是一种简单、稳定且经济的反射望远镜架台系统。",
            link: "page8.html"
        },
        { 
            id: "card5",
            name: "SOLAR", 
            image: "太阳望远镜-removebg-preview.png",
            description: "太阳望远镜专门设计用于安全观测太阳，显示太阳表面细节。",
            link: "page9.html"
        }
    ];
    
    // 创建卡片
    const container = document.querySelector('.card-container');
    
    telescopes.forEach(telescope => {
        const card = document.createElement('div');
        card.className = 'telescope-card';
        card.id = telescope.id;
        
        card.innerHTML = `
            <div class="card-content">
                <div class="card-title" data-link="${telescope.link}">${telescope.name}</div>
                <div class="card-description">${telescope.description}</div>
            </div>
            <div class="telescope-image">
                <img src="${telescope.image}" alt="${telescope.name}" loading="lazy">
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // 为望远镜名称添加点击事件
    document.querySelectorAll('.card-title').forEach(title => {
        title.addEventListener('click', function() {
            // 获取点击的标题对应的链接
            window.location.href = this.getAttribute('data-link');
        });
    });
    
    // 预加载图片
    telescopes.forEach(telescope => {
        new Image().src = telescope.image;
    });
});

// 创建宇宙背景元素（星星和行星）
function createUniverseBackground() {
    const bg = document.getElementById('universe-bg');
    
    // 创建星星
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        bg.appendChild(star);
    }
    
    // 创建行星
    const colors = ['#ffd1f3', '#d1e3ff', '#d1ffed', '#fff9d1'];
    for (let i = 0; i < 6; i++) {
        const planet = document.createElement('div');
        planet.className = 'planet';
        const size = Math.random() * 200 + 50;
        planet.style.width = `${size}px`;
        planet.style.height = `${size}px`;
        planet.style.left = `${Math.random() * 80 + 10}%`;
        planet.style.top = `${Math.random() * 80 + 10}%`;
        planet.style.background = `radial-gradient(circle, ${colors[i%4]} 0%, ${colors[(i+1)%4]} 100%)`;
        planet.style.opacity = `${Math.random() * 0.1 + 0.05}`;
        bg.appendChild(planet);
    }
}