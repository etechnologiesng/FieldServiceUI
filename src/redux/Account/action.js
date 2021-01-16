import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
export const getUsers = () => {
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


export const getAccount = (id) => {
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



export const setAccount = accountId => {
    return {
        type: 'SET_ACCOUNT',
        payload: accountId
    }
}

export const createAccount = accountObj => {
    return (dispatch) => {


        dispatch({
            type: "ACCOUNT_LOADING"
          });
        axios.post('https://localhost:5001/api/Account', accountObj)
        .then(response => {

           // console.log(response.data)
            //dispatch(setAccount(response.data))
            accountObj.id = response.data;
            console.log(accountObj)
            dispatch({
                type: 'CREATE_ACCOUNT',
                payload: accountObj
            });
            toast.success("Account Created succesfully!!! !", {
                position: toast.POSITION.TOP_RIGHT,
              });

        })
        .catch(error => {
            
            console.log(error);
            dispatch({
                type: "POKEMON_LIST_FAIL",
              })
              toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        });
    }
}