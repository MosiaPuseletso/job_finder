export default (saveJob = [], action) => {
    switch(action.type){
        case 'CREATE':
            return [action.payload];
        case 'FETCH':
            return [action.payload];
        default:
            return saveJob;
    }
}