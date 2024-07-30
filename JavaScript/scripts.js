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


document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as barras de habilidades
    const skillBars = document.querySelectorAll('.skill-bar-inner');

    // Configura o observador de interseção
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const skillBar = entry.target;
            const percentage = skillBar.getAttribute('data-percentage');

            if (entry.isIntersecting) {
                // Define a largura da barra de habilidades para iniciar a animação
                skillBar.style.width = percentage;

                // Adiciona um ouvinte de evento para a transição
                skillBar.addEventListener('transitionend', () => {
                    // Exibe a porcentagem ao final da transição
                    skillBar.querySelector('.skill-bar-percentage').style.opacity = 1;
                });
            } else {
                // Reseta a largura da barra de habilidades
                skillBar.style.width = '0';
                // Esconde a porcentagem
                skillBar.querySelector('.skill-bar-percentage').style.opacity = 0;
            }
        });
    }, {
        threshold: 0.1 // Percentual do elemento visível na tela para ativar a observação
    });

    // Observa cada barra de habilidade
    skillBars.forEach(skillBar => {
        // Inicializa a largura como 0 para garantir que a animação só ocorra quando visível
        skillBar.style.width = '0';
        skillBar.querySelector('.skill-bar-percentage').style.opacity = 0;
        observer.observe(skillBar);
    });
});

$(document).ready(function() {
    $('#toggleButton').on('click', function() {
        $('#contentSection').toggleClass('expanded');
        if ($('#contentSection').hasClass('expanded')) {
            $('#toggleButton').text('Ver menos');
        } else {
            $('#toggleButton').text('Ver mais');
        }
    });
});
