function toggleMenu() {
    var menuList = document.querySelector('.menu-list');
    menuList.style.display = (menuList.style.display === 'none' || menuList.style.display === '') ? 'flex' : 'none';
    menuList.style.flex-direction( menuList.style.flex-direction === '') ? 'column': '';
    
}