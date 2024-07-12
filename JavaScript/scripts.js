
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

document.addEventListener("DOMContentLoaded", function() {
    const text = "Olá,Sou Ewerton Desenvolvedor em Ascensão. ";
    const typingText = document.getElementById("typing-text");
    let index = 0;
    let isAdding = true;

    function type() {
        typingText.innerHTML = text.substring(0, index) + "<span class='caret'></span>";
        if (isAdding) {
            if (index < text.length) {
                index++;
            } else {
                isAdding = false;
                setTimeout(type, 2000); // Pausa de 2 segundos ao terminar de digitar
                return;
            }
        } else {
            if (index > 0) {
                index--;
            } else {
                isAdding = true;
            }
        }
        setTimeout(type, isAdding ? 100 : 50); // Aumentar e diminuir a velocidade
    }

    type();
});
