const accountInit ={
    'id':'',
     'firstname':'',
     'lastname':'',
     'phone1':'',
    'phone2':'',
    'email':'',
    'website':'',
    'description':'',
    'serviceTerritory':'',
    contacts:[],
    locations:[]
  }
const initial_state = {
    loading: false,
    account: accountInit,
    errorMsg: "",
    accounts:[]
  };

  export default (state = initial_state, action) => {
    switch(action.type) {
        case "ACCOUNT_LOADING":
              return {
                ...state,
                loading: true,
                errorMsg: ""
              };
        case "LIST_USERS":
            return {...state, loading: false, users: action.payload};
        case "GET_ACCOUNTS":
            return {...state, loading: false, accounts: action.payload};
        case "GET_ACCOUNT":
                return {...state, loading: false, account: action.payload};
        case "SET_ACCOUNT":
            return {...state.account, id: action.payload};
        case "CREATE_ACCOUNT":
            //const accountCreate = state.accounts.concat(action.payload);
            return {...state, account: action.payload};
        default:
            return state;
        }
};

