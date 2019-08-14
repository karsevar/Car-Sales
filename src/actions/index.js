export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = feature => {
    // console.log(feature);
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = feature => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}

export const UPDATE_PRICE = 'UPDATE_PRICE';

export const updateAdditionalPrice = feature => {
    return {
        type: UPDATE_PRICE,
        payload: feature
    }
}

export const MINUS_PRICE = 'MINUS_PRICE';

export const minusAdditionalPrice = feature => {
    return {
        type: MINUS_PRICE,
        payload: feature
    }
}