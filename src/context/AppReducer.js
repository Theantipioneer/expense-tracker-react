export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION': 
            return {
        // argument 1
            ...state,
        // argument 2
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        };

        case 'ADD_TRANSACTION':

            return {
                ...state,
        // A reducer returns an object thats why we see an object here. In this case, the new state is a list. 
                transactions: [action.payload, ...state.transactions]
        }
    default:
        return state;
    };
}