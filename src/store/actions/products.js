// managing state with the help of redux


export const TOGGLE_FAV = 'TOGGLE_FAV';

export const toggleFav = id => {
    return { type: TOGGLE_FAV, productId: id };
};