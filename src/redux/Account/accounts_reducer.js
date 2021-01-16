
const DefaultState = {
    loading: false,
    accounts: [],
    errorMsg: "",
    //accounts:[]
  };

const accountsReducer = (state = DefaultState, action) => {
    switch(action.type) {
        case "ACCOUNTS_LOADING":
              return {
                ...state,
                loading: true,
                errorMsg: ""
              };
        case "GET_ACCOUNTS":
            return {...state, loading: false, accounts: action.payload};
        case "SET_ACCOUNT":
            return {...state, id: action.payload};
        case "CREATE_ACCOUNT":
            const accountCreate = state.accounts.concat(action.payload);
            return {...state, accountCreate};
        default:
            return state;
        }
}

export default accountsReducer;