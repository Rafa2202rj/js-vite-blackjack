// Esta función me permite tomar una carta

/**
 * Esta funcion pide una Carta al Deck 
 * @param {Array<Sting>} deck 
 * @returns {String} Devuelve la ultima carta del Deck
 */ 

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}