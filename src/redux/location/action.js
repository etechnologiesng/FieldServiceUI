import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
export const getContacts = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/users')
        .then(response => {
            console.log(response);
            dispatch({
                type: 'LIST_USERS',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}


export const getlocation = (id) => {
    return (dispatch) => {
        axios.get('https://localhost:5001/api/Account', {
            params: {
              id: id
            }
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: 'GET_ACCOUNT',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}


export const deleteLocation = (accountId,id) => {
    return (dispatch) => {
        axios.delete('https://localhost:5001/api/Location', {
            params: {
              id: id
            }
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: 'DELETE_LOCATION',
                payload: id
            })

            toast.success("Location succesfully deleted !!! !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        })
        .catch(error => {
            console.log(error);
        });
    }
}


export const addLocation = locationObj => {
   return {
        type: 'ADD_TO_LOCATIONS',
        payload: locationObj

    }

}
export const setLocation = locationId => {
    return {
        type: 'SET_LOCATION',
        payload: locationId
    }
}

export const createLocation = (accountId,locationObj) => {
    return (dispatch) => {


        dispatch({
            type: "LOCATION_LOADING"
          });
          locationObj.accountId = accountId
          console.log(locationObj)
        axios.post('https://localhost:5001/api/Account/'+accountId+'/Location', locationObj)
        .then(response => {

            console.log(response.data)
            dispatch({
                type: 'CREATE_LOCATION',
                payload: locationObj
            });
            //dispatch(setContact(response.data));
            locationObj.id = response.data;
            locationObj.accountId = accountId;
            dispatch(addLocation(locationObj))
            toast.success("Location Created succesfully!!! !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: "POKEMON_LIST_FAIL",
              })
        });
    }
}