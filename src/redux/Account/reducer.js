const accountInit ={
  'id':null,
  "firstname":'',
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
          case "ADD_TO_CONTACTS" :
              return {...state, 
                account: {...state.account, contacts:[...state.account.contacts, action.payload]}
               // contacts:[...state.account.contacts, action.payload]
                };
            case "ADD_TO_LOCATIONS" :
                  return {...state, 
                    account: {...state.account, locations:[...state.account.locations, action.payload]}
                   // contacts:[...state.account.contacts, action.payload]
                    };
          case "UPDATE_CONTACT" : 

              const index = state.account.contacts.findIndex(contact => contact.id === action.payload.id)
               const newContacts = [...state.account.contacts]

               newContacts[index] = action.payload

               console.log(newContacts[index])

             return { 
              ...state, account:{...state.account,
              contacts: newContacts }
             };
             case "UPDATE_LOCATION" : 

             const indexx = state.account.locations.findIndex(location => location.id === action.payload.id)
              const newLocations = [...state.account.locations]

              newLocations[indexx] = action.payload

              console.log(newLocations[indexx])

            return { 
             ...state, account:{...state.account,
             locations: newLocations }
            };
             case "UPDATE_ACCOUNT" : 

              

             return { 
              ...state, account:action.payload
             };
          
            
        case "GET_ACCOUNT":
                return {...state, loading: false, account: action.payload, contacts: action.payload.contacts};
          case "DELETE_CONTACT":
            const filteredContacts = state.account.contacts.filter(contact => contact.id !== action.payload);
            return { 
              ...state, account:{...state.account,
              contacts: filteredContacts }//reassingning todos to new array
             };
             case "DELETE_LOCATION":
              const filteredLocations = state.account.locations.filter(location => location.id !== action.payload);
                  return { 
                    ...state, account:{...state.account,
                    locations: filteredLocations }
                   };
    
        case "CREATE_ACCOUNT":
            
            return {...state, account: action.payload};
        default:
            return state;
        }
};

