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
    accounts:[],
    pageNumber: 0,
    pageSize: 0,
    totalResult: 0,
    totalPages:0


  };

  export default (state = initial_state, action) => {
    switch(action.type) {
        case "ACCOUNT_LOADING":
              return {
                ...state,
                loading: true,
                errorMsg: ""
              };
        case "ACCOUNT_LOAD_FAIL":
            return {
            ...state,
              loading: false,
              errorMsg: "something went wrong"
            };
        
        case "GET_ACCOUNTS":
            return {...state, loading: false, 
              accounts: action.payload.data,
               pageNumber:action.payload.pageNumber,
                pageSize: action.payload.pageSize, 
                totalResult: action.payload.totalResult,
                totalPages: action.payload.totalPages
                
              };
            case "SEARCH_ACCOUNTS":
                return {...state, loading: false, 
                  accounts: action.payload.data, 
                  pageNumber:action.payload.pageNumber, 
                  pageSize: action.payload.pageSize, 
                  totalResult: action.payload.totalResult,
                  totalPages: action.payload.totalPages
                  
                };
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

