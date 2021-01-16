const contactInit ={
    'id':'',
    'firstname':'',
    'lastname':'',
    'phone':'',
    'email':'',
    'accountId':'',
  }
const initial_state = {
    loading: false,
    contact: contactInit,
    errorMsg: "",
    contacts:[]
  };

  export default (state = initial_state, action) => {
    switch(action.type) {
        case "CONTACT_LOADING":
              return {
                ...state,
                loading: true,
                errorMsg: ""
              };
        case "LIST_USERS":
            return {...state, loading: false, users: action.payload};
        case "GET_CONTACTS":
            return {...state, loading: false, contacts: action.payload};
        case "ADD_TO_CONTACTS" :
                return { 
                   ...state,
                   contacts:[...state.contacts, action.payload]
              }
        case "SET_CONTACT":
            return {...state.contact, id: action.payload};
        case "CREATE_CONTACT":
           
            return {...state, contact: action.payload};
        default:
            return state;
        }
};

