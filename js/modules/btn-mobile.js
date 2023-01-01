export default function initMobile(){
    const menuButton = document.querySelector('.btn-menu');
    const listaMenu = document.querySelector('.lista-header-menu')
    menuButton.addEventListener('click', abreMenu)
    function abreMenu(item){
    item.preventDefault()
    menuButton.classList.toggle('ativo')
    listaMenu.classList.toggle('ativo')
    }
}


