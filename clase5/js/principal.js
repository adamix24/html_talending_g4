
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    var link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'css/main.css';
    document.head.appendChild(link2);


    var container = document.createElement('div');
    container.className = 'container';

    container.innerHTML = document.body.innerHTML;
    document.body.innerHTML = '';
    document.body.appendChild(container);

    var menu = ` <!-- Navegación -->
    <header>
        <div class="container nav-container">
            <div class="logo">
                <div class="logo-icon">
                    <i class="fas fa-fist-raised"></i>
                </div>
                <div class="logo-text">Record of <span>Ragnarok</span></div>
            </div>
            
            <div class="menu-toggle" id="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
            
            <nav>
                <ul id="nav-menu">
                    <li><a href="index.html" class="active">Inicio</a></li>
                    <li><a href="protagonistas.html">Protagonistas</a></li>
                    <li><a href="batallas.html">Batallas</a></li>
                    <li><a href="tecnicas.html">Técnicas</a></li>
                    <li><a href="acerca.html">Acerca de</a></li>
                </ul>
            </nav>
        </div>
    </header>`;

    document.body.insertAdjacentHTML('afterbegin', menu);



    // Menú móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Efecto smooth scroll para el botón
    document.querySelector('.btn').addEventListener('click', function(e) {
        if(this.getAttribute('href') === '#sinopsis') {
            e.preventDefault();
            document.querySelector('#sinopsis').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });