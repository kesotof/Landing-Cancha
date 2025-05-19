document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenuItems = document.getElementById('mobile-menu-items');

    if (hamburgerMenu && mobileMenuItems) {
        hamburgerMenu.addEventListener('click', function() {
            mobileMenuItems.classList.toggle('active');
            const icon = hamburgerMenu.querySelector('.material-symbols-outlined');
            if (icon) {
                if (mobileMenuItems.classList.contains('active')) {
                    icon.textContent = 'close';
                } else {
                    icon.textContent = 'menu';
                }
            }
        });
    }

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const hrefAttribute = this.getAttribute('href');
            if (hrefAttribute && hrefAttribute.length > 1) {
                const targetElement = document.querySelector(hrefAttribute);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    if (mobileMenuItems && mobileMenuItems.classList.contains('active')) {
                        mobileMenuItems.classList.remove('active');
                         const icon = hamburgerMenu.querySelector('.material-symbols-outlined');
                         if(icon) icon.textContent = 'menu';
                    }
                }
            }
        });
    });

    const mainNavbar = document.getElementById('mainNavbar');
    if (mainNavbar) {
        const scrollThreshold = 50; 
        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollThreshold) {
                mainNavbar.classList.add('scrolled');
            } else {
                mainNavbar.classList.remove('scrolled');
            }
        });
    }
});