import axios from 'axios';


export const getTerritories = () => {
    return (dispatch) => {

        dispatch({
            type: "TERRITORIES_LOADING"
          });
        axios.get('https://localhost:5001/api/Common/Territories')
        .then(response => {
            console.log(response);
            dispatch({
                type: 'GET_TERRITORIES',
                payload: response.data.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}
