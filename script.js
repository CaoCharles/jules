document.addEventListener('DOMContentLoaded', () => {
    // 平滑滾動
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 考慮到固定導航欄的高度
                    behavior: 'smooth'
                });
                // 點擊後立即更新 active 狀態 (可選)
                // updateActiveLink(targetId);
            }
        });
    });

    // 滾動時高亮活動導航鏈接
    const sections = document.querySelectorAll('main section');
    const headerHeight = document.querySelector('header').offsetHeight;

    function updateActiveLink() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50; // 偏移量調整
            if (window.scrollY >= sectionTop) {
                currentSectionId = '#' + section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSectionId) {
                link.classList.add('active');
            }
        });

        // 如果滾動到頂部，且沒有特定 section 匹配，則高亮 "首頁"
        if (window.scrollY < sections[0].offsetTop - headerHeight - 50 && currentSectionId === '') {
             const homeLink = document.querySelector('nav ul li a[href="#home"]');
             if (homeLink) homeLink.classList.add('active');
        }
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink); // 初始加載時也執行一次

    // 可以在這裡添加更多交互，例如：
    // - 元素進入視圖時的動畫
    // - 更複雜的表單驗證
});
