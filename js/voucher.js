// ***********************************************************************************************************
// ***********************************    Función cambiarMensaje()    ****************************************
// * Proposito: Si sale Messi, imprime mensaje de `GANASTE`, si no, el de `PERDISTE`
// * Parametros: - sourceFigurita: ruta de la imagen de la figurita
//               - codigoDescuento: numero aleatorio del 0 al 99999999
function cambiarMensaje(sourceFigurita, codigoDescuento){
    if (sourceFigurita == "../images/figu1.jpg"){
        document.querySelector('h1').textContent="¡FELICIDADES, GANASTE!";
        document.querySelector('h2').textContent=`Tu código de descuento es: ${codigoDescuento} `;
    }
    else{
        document.querySelector('h1').textContent="¡MALA SUERTE, PERDISTE!";
        document.querySelector('h2').textContent="Esta vez no salió Messi, intentalo nuevamente...";
    }
}
// ***********************************************************************************************************


// ***********************************************************************************************************
// ***********************************   Función cambiarFigurita()    ****************************************
// * Proposito: cambiar (la ruta de) las imagenes de las figuritas y el mensaje en pantalla
// * Parametros: - figuritaAleatoria: numero aleatorio que nos permitirá cambiar la ruta de la imagenes
//               - codigoDescuento
function cambiarFigurita(figuritaAleatoria, codigoDescuento){
    let fuente1 = `../images/figu${figuritaAleatoria}.jpg`;
    document.querySelector('.img1').setAttribute('src', fuente1);
    cambiarMensaje(fuente1, codigoDescuento);
}
// ***********************************************************************************************************


// ***********************************************************************************************************
// ***********************************          Función main()        ****************************************
function main(){
    // Numero aleatorio del 1 al 18 que nos permitirá cambiar la ruta de las imagenes
    let numeroAleatorio= Math.floor(Math.random()*18)+1;
    // Codigo de descuento (generado aleatoriamente)
    let codigoAleatorio= Math.floor(Math.random()*99999999);
    cambiarFigurita(numeroAleatorio, codigoAleatorio);

    console.log(0);
}
// ***********************************************************************************************************


// ***********************************************************************************************************
// ***********************************        Programa principal      ****************************************
main();
// ***********************************************************************************************************