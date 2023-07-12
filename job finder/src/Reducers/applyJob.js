export default (applyJob = [], action) => {
    switch(action.type){
        case 'CREATE':
            return [action.payload];
        default:
            return applyJob;
    }
}