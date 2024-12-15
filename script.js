document.addEventListener('DOMContentLoaded', function() {
    const registerUrl = 'https://f568h.com/register?inviteCode=1j5aUQbP';
    
    // 获取页面元素
    const heroSection = document.querySelector('.hero');
    const registerBtn = document.querySelector('.register-btn');

    // 点击整个页面区域跳转
    if (heroSection) {
        heroSection.addEventListener('click', function() {
            try {
                window.open(registerUrl, '_blank');
            } catch (error) {
                console.error('Error opening register URL:', error);
            }
        });
        heroSection.style.cursor = 'pointer';
    }

    // 点击注册按钮跳转
    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            try {
                e.stopPropagation(); // 阻止事件冒泡
                window.open(registerUrl, '_blank');
            } catch (error) {
                console.error('Error opening register URL:', error);
            }
        });
    }

    // 添加调试日志
    console.log('Script loaded');
    console.log('Hero section:', heroSection);
    console.log('Register button:', registerBtn);
});
