// Seleciona os elementos do DOM
const menuToggle = document.getElementById('menu-toggle'); // Botão de alternância do menu hamburger
const menu = document.getElementById('menu'); // Menu de navegação
const darkModeButton = document.getElementById('dark-mode'); // Botão para ativar o modo escuro
const lightModeButton = document.getElementById('light-mode'); // Botão para ativar o modo claro
const autoModeButton = document.getElementById('auto-mode'); // Botão para ativar o modo automático

// Adiciona evento de clique para o botão do menu hamburger
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna a classe 'active' no menu para exibir ou ocultar
    menuToggle.classList.toggle('active'); // Alterna a classe 'active' no botão do menu hamburger para animação
});

document.addEventListener("DOMContentLoaded", function() {
    const text = "Sou Ewerton Desenvolvedor."; // Texto para digitar
    const typingText = document.getElementById("typing-text"); // Elemento onde o texto será exibido
    let index = 0; // Índice inicial para a animação de digitação
    let isAdding = true; // Flag para adicionar ou remover caracteres

    // Função para simular a digitação
    function type() {
        typingText.innerHTML = text.substring(0, index) + "<span class='caret'></span>"; // Atualiza o texto exibido com um cursor
        if (isAdding) {
            if (index < text.length) {
                index++; // Adiciona caracteres até o final do texto
            } else {
                isAdding = false;
                setTimeout(type, 2000); // Pausa de 2 segundos ao terminar de digitar
                return;
            }
        } else {
            if (index > 0) {
                index--; // Remove caracteres para o efeito de digitação inversa
            } else {
                isAdding = true;
            }
        }
        setTimeout(type, isAdding ? 100 : 100); // Define a velocidade de digitação
    }

    type(); // Inicia a animação de digitação
});

