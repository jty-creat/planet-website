document.addEventListener('DOMContentLoaded', function() {
    // 返回按钮事件
    document.getElementById('back-btn').addEventListener('click', function() {
        window.location.href = 'page4.html';
    });
    
    // 从URL参数获取望远镜类型
    const params = new URLSearchParams(window.location.search);
    const telescopeType = params.get('type');
    
    // 根据不同类型加载不同内容
    if (telescopeType) {
        loadTelescopeData(telescopeType);
    }
});

function loadTelescopeData(type) {
    // 望远镜数据 - 实际应用中可以从API获取
    const telescopes = {
        'reflector': {
            eng: 'REFLECTOR',
            chn: '反射式望远镜',
            desc: '反射式望远镜使用曲面镜收集和聚焦光线。它们非常适合观测深空天体，如星系和星云，因为没有色差问题且口径可以做得很大。牛顿式望远镜是最常见的反射式望远镜设计，使用抛物面主镜和平面副镜将光线反射到镜筒侧面的目镜中。',
            image: 'images/telescopes/reflector.png',
            info: [
                { title: '放大倍数', value: '50-500倍' },
                { title: '最佳观测', value: '深空天体' },
                { title: '维护难度', value: '中等' }
            ]
        },
        // 其他望远镜类型数据...
    };
    
    const data = telescopes[type];
    if (data) {
        document.querySelector('.eng-title').textContent = data.eng;
        document.querySelector('.chn-title').textContent = data.chn;
        document.querySelector('.description-section h6').textContent = data.desc;
        document.querySelector('.telescope-image').src = data.image;
        
        const infoItems = document.querySelectorAll('.info-item');
        data.info.forEach((item, index) => {
            if (infoItems[index]) {
                infoItems[index].querySelector('h4').textContent = item.title;
                infoItems[index].querySelector('h6').textContent = item.value;
            }
        });
    }
}