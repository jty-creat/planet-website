// 星空背景（用于页面1和页面2）
function initStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    
    // 创建星星粒子
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 3000;
    
    const posArray = new Float32Array(particlesCnt * 3);
    const colorArray = new Float32Array(particlesCnt * 3);
    
    for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 2000;
        colorArray[i] = Math.random() * 0.5 + 0.5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 1.2,
        transparent: true,
        opacity: 0.9,
        vertexColors: true,
        blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 1;
    
    // 动画循环
    function animate() {
        requestAnimationFrame(animate);

        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // 窗口大小调整
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// 3D月球模型（用于页面2）
function initMoon() {
    const container = document.getElementById('moon-container');
    if (!container) return;
    
    // 创建场景
    const scene = new THREE.Scene();
    scene.background = null; // 透明背景
    // 创建相机
    const camera = new THREE.PerspectiveCamera(
        75, 
        container.clientWidth / container.clientHeight, 
        0.1, 
        1000
    );
    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ 
        // 启用抗锯齿
        antialias: true,
        alpha: true // 启用透明背景
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    
    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    // 添加平行光
    scene.add(ambientLight);
    // 添加平行光
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    // 设置平行光位置
    directionalLight.position.set(5, 3, 5);
    // 将平行光添加到场景中
    scene.add(directionalLight);
    
    // 创建月球
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    
    // 加载月球纹理
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/moon_1024.jpg');
    const bumpMap = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/moon_bump.jpg');
    
    const material = new THREE.MeshPhongMaterial({
        map: moonTexture,
        bumpMap: bumpMap,
        bumpScale: 0.1,
        specular: new THREE.Color(0x333333),
        // 设置高光强度
        shininess: 10,
        transparent: false, // 禁用透明度
        opacity: 1.0 // 完全不透明
        

    });
    
    const moon = new THREE.Mesh(geometry, material);
    scene.add(moon);
    
    camera.position.z = 5;
    
    // 动画循环
    function animate() {
        requestAnimationFrame(animate);
        
        moon.rotation.y += 0.01;
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // 窗口大小调整
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// 更新初始化函数
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('stars-container')) {
        initStars();
    }
    if (document.getElementById('moon-container')) {
        initMoon();
    }
});

