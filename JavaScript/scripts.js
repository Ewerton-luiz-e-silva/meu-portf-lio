// Seleciona os elementos do DOM
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const darkModeButton = document.getElementById('dark-mode');
const lightModeButton = document.getElementById('light-mode');
const autoModeButton = document.getElementById('auto-mode');

// Adiciona evento de clique para o botão do menu hamburger
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Função para ativar o modo escuro
const activateDarkMode = () => {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
};

// Função para ativar o modo claro
const activateLightMode = () => {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
};

// Função para ativar o modo automático
const activateAutoMode = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
        activateLightMode();
    } else {
        activateDarkMode();
    }
};

// Adiciona eventos de clique para os botões de troca de cor
darkModeButton.addEventListener('click', activateDarkMode);
lightModeButton.addEventListener('click', activateLightMode);
autoModeButton.addEventListener('click', activateAutoMode);

// Ativa o modo automático ao carregar a página
window.addEventListener('load', activateAutoMode);


