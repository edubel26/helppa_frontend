class footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
                
                <footer class="footer__container"> 
                    <div class="footer_div1">
                        <div class="box">
                            <figure>
                                <a href="#">
                                    <img src="/assets/img/logo.png" alt="logo HelpPaws">
                                    <img src="/assets/img/nombre.png" alt="nombre logo helpPaws">
                                </a>
                            </figure>
                        </div>
                        <div class="box">
                            <h2>Creadores: </h2>
                            <h3 class="strong__box">Documentación:</h3>
                            <p>
                                Heydy Vargas, heidiardilavargas47@gmail.com,
                            </p>
                            <h3 class="strong__box">Diseñador web:</h3>
                            <p> 
                                Cliff Tique, cliff.tique@gmail.com,
                            </p>
                            <h3 class="strong__box">Desarrollador full stack:</h3>
                            <p>
                                Eduard Beltrán, beltran502@hotmail.com.
                            </p>
                        </div>
                        <div class="box">
                            <h2>Síguenos: </h2>
                            <div class="redes__sociales">
                                <a target="_blank" href="https://github.com/edubel26" class="bx bxl-github"></a>
                                <a target="_blank" href="https://www.linkedin.com/in/eduard-beltran-6638b2272/" class="bx bxl-linkedin-square"></a>
                            </div>
                            <h2 >Conocimientos en:</h2>
                            <div class="redes__sociales">
                                <i title="CSS3" class='bx bxl-css3'></i>
                                <i title="HTML5" class='bx bxl-html5' ></i>
                                <i title="JS" class='bx bxl-javascript' ></i>
                                <br />
                                <i title="Mongodb" class='bx bxl-mongodb'></i>
                                <i title="Json" class='bx bxs-file-json'></i>
                            </div>
                        </div>
                    </div>
                    <div class="footer_div2">
                        <small>Copyright &copy; 2023 <b>HelpPaws</b> - Todos los Derechos Reservados.</small>

                    </div>
                </footer> 

        `;
    }
}

window.customElements.define("footer-pie", footer)

