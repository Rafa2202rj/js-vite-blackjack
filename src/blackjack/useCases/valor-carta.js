/**
 * Obtiene el valor de la carta
 * @param {String} carta 
 * @returns {Numero} Devuelve el valor de la carta seleccionada por pedirCarta() 
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}