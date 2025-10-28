// Função para carregar a NAVEGAÇÃO
      function loadNav() {
        fetch("../includes/menu-nav-rodape.html")
          .then((response) => response.text())
          .then((data) => {
            document.getElementById("nav-placeholder").innerHTML = data;

            // --- NOVO: Define a cor sólida para páginas internas ---
            const navbar = document.getElementById("mainNav");
            if (navbar) {
              // Aplica a classe que define o background sólido (#023047)
              navbar.classList.remove("scrolled");
            }

            // Marca o link 'Sobre' como ativo (text-warning)
            const navLinks = navbar.querySelectorAll(".nav-link");
            navLinks.forEach((link) => {
              if (link.getAttribute("href") === "index.html") {
                link.classList.add("text-warning");
                link.classList.remove("text-light");
              }
            });

            initializeNavEvents();
          })
          .catch((error) =>
            console.error("Falha ao carregar a navegação.", error)
          );
      }

      // Função para carregar o RODAPÉ (Sem alteração)
      function loadFooter() {
        fetch("includes/rodape.html")
          .then((response) => response.text())
          .then((data) => {
            document.getElementById("footer-placeholder").innerHTML = data;
          })
          .catch((error) =>
            console.error("Falha ao carregar o rodapé.", error)
          );
      }


      // Função para inicializar os eventos do menu (Sem alteração)
      function initializeNavEvents() {
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");
        const toggleBtn = document.getElementById("toggleBtn");
        const navbar = document.getElementById("mainNav");

        toggleBtn.addEventListener("click", () => {
          sidebar.classList.add("active");
          overlay.classList.add("active");
        });

        overlay.addEventListener("click", () => {
          sidebar.classList.remove("active");
          overlay.classList.remove("active");
        });

        window.addEventListener("scroll", () => {
          if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        });
      }

      // Inicia o carregamento
      document.addEventListener("DOMContentLoaded", () => {
        loadNav();
        loadFooter();
      });

      // NO ARQUIVO contato2.html, no bloco <script>
