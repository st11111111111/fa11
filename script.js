document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const registerBtn = document.querySelector('.register-btn');

    // 滚动到注册表单
    registerBtn.addEventListener('click', function() {
        registerForm.scrollIntoView({ behavior: 'smooth' });
    });

    // 处理表单提交
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(registerForm);
        
        // 构建URL
        const baseUrl = 'https://f568h.com/register';
        const params = new URLSearchParams(formData);
        
        // 跳转到注册页面
        window.open(`${baseUrl}?${params.toString()}`, '_blank');
    });

    // 添加输入验证
    const inputs = registerForm.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = this.value ? 'rgba(255, 215, 0, 0.5)' : 'rgba(255, 215, 0, 0.3)';
        });
    });

    // 获取整个hero区域
    const heroSection = document.querySelector('.hero');
    
    // 添加点击事件
    heroSection.addEventListener('click', function() {
        window.open('https://f568h.com/register?inviteCode=1j5aUQbP', '_blank');
    });

    // 为了避免重复触发，阻止注册按钮的事件冒泡
    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // 添加鼠标样式
    heroSection.style.cursor = 'pointer';
});
