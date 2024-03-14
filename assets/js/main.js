function toggleMenu() {
    var menuList = document.querySelector('.menu-list');
    menuList.style.display = (menuList.style.display === 'none' || menuList.style.display === '') ? 'flex' : 'none';
    menuList.style.flexDirection = (menuList.style.display === 'none' || menuList.style.display === '') ? 'column' : ''; // Corrigindo a atribuição da direção do flexbox
}