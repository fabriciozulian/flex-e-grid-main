const botaoMenu = document.querySelector(".cabecalho__menu")

botaoMenu.addEventListener("click", (e) => {
    document.querySelector(".menu-lateral").classList.toggle('menu-lateral--ativo');
});