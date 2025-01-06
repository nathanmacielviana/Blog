    const mobileMenu = document.querySelector('.mobilemenu');
    const navList = document.querySelector('.navlist');

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
