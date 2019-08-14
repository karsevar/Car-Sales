export const ADD_FEATURE = 'ADD_FEATURE';

export const addFeature = feature => {
    // console.log(feature);
    console.log( {
        type: ADD_FEATURE,
        payload: feature
    })
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = feature => {
    // console.log(feature);
    console.log( {
        type: REMOVE_FEATURE
    })
}