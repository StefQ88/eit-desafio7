document.addEventListener("DOMContentLoaded", () => {

    const styleButton = document.querySelector(".button-style"); //obtengo boton para cambiar estilo

    const stylesheetLink = document.querySelector('link[rel="stylesheet"][href*="css/"]'); //obtengo link activo

    // lista de estilos disponibles
    const styles = [
        "css/estilos.css",
        "css/estilos-urbano.css",
        "css/estilos-futuro.css"
    ]

    let current = 0; // indice que indica estilo actual, comienza en original
    document.getElementById("first-name").focus()

    styleButton.addEventListener("click", () => {
        current = (current + 1) % styles.length; // calcula indice del segundo estilo

        stylesheetLink.setAttribute("href", styles[current])   // Cambia el href del <link> al nuevo archivo CSS

    })

})