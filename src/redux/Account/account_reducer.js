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
  };

  const DefaultState = {
    loading: false,
    account: accountInit,
    errorMsg: "",
    //accounts:[]
  };


  const accountReducer = (state = DefaultState, action) => {
    switch(action.type) {
        case "ACCOUNT_LOADING":
              return {
                ...state,
                loading: true,
                errorMsg: ""
              };        
        case "GET_ACCOUNT":
            return {...state, loading: false, account: action.payload};
        case "SET_ACCOUNTID":
            return {...state, id: action.payload};
        case "CREATE_ACCOUNT":
            const accountCreate = state.account.concat(action.payload);
            return {...state, accountCreate};
        default:
            return state;
        }
}

export default accountReducer;