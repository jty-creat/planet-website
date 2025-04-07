// 星空背景
function initStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // 创建星星粒子
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 3000;
    
    const posArray = new Float32Array(particlesCnt * 3);
    const sizeArray = new Float32Array(particlesCnt);
    const colorArray = new Float32Array(particlesCnt * 3);
    
    for (let i = 0; i < particlesCnt; i++) {
        const i3 = i * 3;
        posArray[i3] = (Math.random() - 0.5) * 2000;
        posArray[i3 + 1] = (Math.random() - 0.5) * 2000;
        posArray[i3 + 2] = (Math.random() - 0.5) * 2000;
        
        sizeArray[i] = Math.random() * 1.5 + 0.5;
        
        colorArray[i3] = 0.9;
        colorArray[i3 + 1] = 0.9;
        colorArray[i3 + 2] = 1.0;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizeArray, 1));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 1.2,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9,
        vertexColors: true,
        blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 1;
    
    function animate() {
        requestAnimationFrame(animate);
        particlesMesh.rotation.x += 0.0001;
        particlesMesh.rotation.y += 0.0002;
        renderer.render(scene, camera);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// 初始化函数
document.addEventListener('DOMContentLoaded', function() {
    initStars();
});