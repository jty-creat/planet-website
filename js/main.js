document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const chineseTitle = document.getElementById('chinese-title');
    const exploreBtn = document.getElementById('explore-btn');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 标题内容
    const titles = {
        stargazing: "观星指南",
        telescope: "望远镜",
        astronaut: "太阳系"
    };
    
    // 当前活动部分
    let activeSection = 'stargazing';
    
    // 更新标题和按钮
    function updateContent() {
        // 淡出标题
        chineseTitle.style.opacity = 0;
        
        setTimeout(() => {
            chineseTitle.textContent = titles[activeSection];
            // 淡入标题
            chineseTitle.style.opacity = 1;
            
            // 更新按钮文本
            exploreBtn.textContent = getButtonText(activeSection);
        }, 300);
    }
    
    // 获取按钮文本
    function getButtonText(section) {
        switch(section) {
            case 'stargazing': return "查看观星指南";
            case 'telescope': return "探索望远镜";
            case 'astronaut': return "了解太阳系";
            default: return "开始探索";
        }
    }
    
    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            activeSection = this.dataset.section;
            updateContent();
            
            // 更新活动链接样式
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 探索按钮点击事件
    exploreBtn.addEventListener('click', function() {
        switch(activeSection) {
            case 'stargazing':
                window.location.href = 'page3.html';
                break;
            case 'telescope':
                window.location.href = 'page4.html';
                break;
            case 'astronaut':
                // 跳转到3D-CSS-Solar-System-master\index.html
                window.location.href = './3D-CSS-Solar-System-master/index.html';
                break;
        }
    });
    
    // 初始化
    updateContent();
    document.querySelector(`.nav-link[data-section="${activeSection}"]`).classList.add('active');
});


// 聊天功能
const responses = {
    '地球': '地球是太阳系中由内及外的第三颗行星，已知唯一存在生命的星球。年龄约45.5亿年，赤道半径6,378公里。拥有液态水圈和富氧大气层，自转周期23小时56分，公转周期365.25天。',
    '木星': '木星是太阳系体积最大的气态巨行星，质量是其他行星总和的2.5倍。拥有显著的大红斑风暴和79颗已知卫星，具有强大的磁场和行星环系统。',
    '太阳系': '太阳系是以太阳为中心的恒星系统，包含8大行星、5颗矮行星和众多小天体。直径约287.46亿公里，形成于约45.68亿年前。',
    '火星': '红色行星，地表富含氧化铁，拥有太阳系最大的火山奥林帕斯山和最长的峡谷水手号峡谷。可能存在地下液态水。',
    '金星': '温度最高的行星（平均464℃），自转方向与公转相反，大气层96%是二氧化碳，表面压力是地球的92倍。',
    '水星': '最靠近太阳的行星，昼夜温差最大（-173℃到427℃），表面布满环形山，没有天然卫星。',
    '土星': '拥有显著的行星环系统，密度低于水。第二大行星，拥有82颗卫星，其中泰坦是太阳系唯一拥有浓厚大气层的卫星。',
    '天王星': '冰巨星，自转轴倾斜97.77度，呈现侧向自转。大气含甲烷呈现蓝色，温度-224℃是太阳系最冷行星。',
    '海王星': '风速最快的行星（2100km/h），通过数学预测发现的行星，拥有14颗卫星和暗淡的行星环。',
    '银河系': '直径约10万光年的棒旋星系，包含1000-4000亿颗恒星。太阳系位于猎户臂，距银心2.6万光年。',
    '恒星': '通过核聚变发光的等离子体球体，太阳是距离地球最近的恒星，寿命约100亿年。',
    '黑洞': '时空曲率大到光都无法逃脱的天体，星系中心通常存在超大质量黑洞。',
    '星云': '由气体和尘埃组成的星际云，恒星诞生地，如猎户座大星云。',
    '超新星': '恒星演化末期的大爆发，亮度可短暂超越整个星系，是重元素的主要来源。',
    
    // 天文名词科普
    '星系': '星系是由数十亿到数万亿颗恒星、气体、尘埃及暗物质组成的庞大天体系统。',
    '引力波': '引力波是由于天体质量变动产生的时空波动，曾由LIGO首次探测到。',
    '白矮星': '白矮星是恒星演化过程中，由低至中质量恒星耗尽燃料后的残骸，密度极大。',
    '红巨星': '红巨星是大质量恒星演化到末期，氢燃料耗尽后膨胀的阶段。',
    '行星环': '行星环是围绕行星的碎石和尘埃组成的环状物质，典型的如土星的环系统。',
    '小行星带': '小行星带是位于火星和木星之间的区域，充满了大量的小行星。',
    '火流星': '火流星是进入地球大气层并因摩擦而燃烧发光的小天体。',
    '星座': '星座是人类为了方便识别星空中的恒星群体而人为划定的区域。',
    '恒星谱型': '恒星谱型是根据恒星光谱特征分类的系统，主要有O、B、A、F、G、K、M七类。',
    '电磁波': '电磁波是一种通过电场和磁场的相互作用传播的波动，包括可见光、无线电波等。',
    
    // 正常对话交流
    '你好': '你好！有什么我可以帮你的吗？',
    '谢谢': '不客气！如果有其他问题，随时告诉我。',
    '再见': '再见！希望很快再和你聊天。',
    '对不起': '没关系，别担心！有什么问题我可以帮忙的吗？',
    '不好意思': '没事的，别放在心上！',
    '早安': '早安！今天有新的一天，准备好迎接挑战了吗？',
    '晚安': '晚安！希望你有个甜美的梦。',
    '请': '没问题，请随时提问。',
    '谢谢你': '很高兴能帮到你！',
    '好的': '好的！如果需要进一步帮助，请告诉我。',
    '没关系': '没关系，有什么需要我帮助的，尽管说！',
    '很高兴认识你': '我也很高兴认识你！',
    '怎么了': '你有什么问题吗？我可以帮忙解答。',
    '祝你好运': '谢谢！也祝你好运！',
    '你好吗': '我很好，谢谢！你呢？',
    '加油': '加油！你一定能做得很棒。',
    '有空聊聊': '当然，随时可以聊聊！',
    '你真棒': '谢谢夸奖！你也很棒。',
    '辛苦了': '谢谢关心，不辛苦！我很乐意帮忙。',
    '能帮忙吗': '当然，有什么我可以帮忙的吗？'
};

// 事件监听
document.querySelector('.ai-trigger').addEventListener('click', () => {
    document.querySelector('.chat-container').classList.toggle('active-chat');
});

document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const input = document.getElementById('userInput');
    const messageContainer = document.querySelector('.chat-messages');
    
    if (input.value.trim()) {
        // 用户消息
        const userDiv = document.createElement('div');
        userDiv.className = 'message user-message';
        userDiv.textContent = input.value;
        messageContainer.appendChild(userDiv);
        
        // 机器人回复
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot-message';
        const keyword = Object.keys(responses).find(key => input.value.includes(key));
        botDiv.textContent = keyword ? responses[keyword] : '当前为演示模式，暂不支持此问题';
        messageContainer.appendChild(botDiv);
        
        // 重置输入
        input.value = '';
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}


