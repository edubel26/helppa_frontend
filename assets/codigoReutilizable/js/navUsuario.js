class menuNuv extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
            <header class="nav__header">
                <nav class="nav">
                    <a class="nav__logo" href="index.html">
                        <img class="nav__logo__name" src="/public/assets/img/nombre.png" alt="Logo en nombre">
                    </a>
                    <button class="abrirMenu" id="abrir">
                        <svg class="abrirMenu" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 14.5H27"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 2H27"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 27H27"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <ul class="nav__ul " id="nav">
                        <button class="cerrarMenu" id="cerrar">
                            <svg class="cerrarMenu" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                                <path d="M27 2L2 27"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 2L27 27"  stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <li class="nav__li selcted"><a href="/public/vistaUsuario/index.html">Menu de inicio</a></li>
                        <li class="nav__li"><a href="perfilUsario.html">Mi perfil</a></li>
                        <li class="nav__li"><a href="/public/index.html">Salir</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

window.customElements.define("menu-nuv", menuNuv)