// ***********************************************************************************************************
// ***********************************   Función cambiarMensaje()    ****************************************
// * Proposito de la funcion: Cambiar el mensaje en pantalla según sea el caso (Ganador/Perdedor)
// * Parametros: - sourceFigurita: fuente de la figurita en cuestion, será el condicional del `if`
//               - codigoDescuento: numero aleatorio del 0 al 99999999 (por el momento no tiene utilidad)
function cambiarMensaje(sourceFigurita, codigoDescuento){
    // Condicional que cambia el mensaje que se ve por pantalla según corresponda
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
// * Proposito de la funcion: cambiar (la ruta de) las imagenes de las figuritas y el mensaje en pantalla
// * Parametros: - figuritaAleatoria: numero aleatorio que nos permitirá cambiar la ruta de las imagenes
//               - codigoDescuento: numero aleatorio del 0 al 99999999 (por el momento no tiene utilidad)
function cambiarFigurita(figuritaAleatoria, codigoDescuento){
    let fuente1 = `../images/figu${figuritaAleatoria}.jpg`;
    document.querySelector('.img1').setAttribute('src', fuente1);
    cambiarMensaje(fuente1, codigoDescuento);
}
// ***********************************************************************************************************


// ***********************************************************************************************************
// ***********************************          Función main()        ****************************************
// * Proposito de la funcion: Función principal. No tiene parámetros
function main(){
    // Variable con número aleatorio (1-18) para pasarla como parámetro para el llamado de la funcion (figuritaAleatoria)
    let numeroAleatorio= Math.floor(Math.random()*18)+1;
    // Variable con código de descuento aleatorio para pasarla como parámetro para el llamado de la funcion (codigoDescuento)
    let codigoAleatorio= Math.floor(Math.random()*99999999);
    // Llamado a la función
    cambiarFigurita(numeroAleatorio, codigoAleatorio);
}
// ***********************************************************************************************************


// ***********************************************************************************************************
// ***********************************        Programa principal      ****************************************
main();
// ***********************************************************************************************************





