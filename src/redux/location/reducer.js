const locationInit ={
    'id' : '',
   'name': '',
  'description': '',

  'street1' :'',
  'Street2': '',
  'City': '',
  'postCode' :'',
  'countryId': '',

  'longitude':'', 
  'latitude': '',
  'accountId' :'',
}
const initial_state = {
    loading: false,
    location: locationInit,
    errorMsg: "",
    locations:[]
  };

  export default (state = initial_state, action) => {
    switch(action.type) {
        case "LOCATION_LOADING":
              return {
                ...state,
                loading: true,
                errorMsg: ""
              };
        case "LIST_USERS":
            return {...state, loading: false, users: action.payload};
        case "GET_LOCATIONS":
            return {...state, loading: false, locations: action.payload};
        case "ADD_TO_LOCATIONS" :
                return { 
                   ...state,
                   locations:[...state.locations, action.payload]
              }
        case "SET_LOCATION":
            return {...state.location, id: action.payload};
        case "CREATE_LOCATION":
           
            return {...state, location: action.payload};
        default:
            return state;
        }
};

