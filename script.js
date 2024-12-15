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
});
