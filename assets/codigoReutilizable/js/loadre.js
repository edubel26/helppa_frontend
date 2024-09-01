class loader extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
            <header id="loader" class="loader"> 
                <div class="loader__contenedor">
                    <img class="loader__logo" src="../assets/img/logo.png" alt="loader logo">
                    <img class="loader__logo__nombre" src="../assets/img/nombre.png" alt="loader logo nombre">
                    <img class="loader__gif" src="../assets/img/perroCarga.gif" alt="loader gif">    
                </div>
            </header>
        `;
    }
}


window.customElements.define("loader-carga", loader)

