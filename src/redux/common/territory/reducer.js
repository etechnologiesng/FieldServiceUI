
const initial_state = {
    loading: false,
    
    errorMsg: "",
    territories:[]
  };

  export default (state = initial_state, action) => {
    switch(action.type) {
        case "TERRITORIES_LOADING":
              return {
                ...state,
                loading: true,
                errorMsg: ""
              };
        
        case "GET_TERRITORIES":
            return {...state, loading: false, territories: action.payload};
       
        default:
            return state;
        }
};
