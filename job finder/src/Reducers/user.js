export default (user = [], action) => {
    switch(action.type){
        case 'FETCH':
            return [action.payload];
        case 'CREATE':
            return [action.payload];
        case 'CLEAR':
            return [action.payload];
        default:
            return user;
    }
}