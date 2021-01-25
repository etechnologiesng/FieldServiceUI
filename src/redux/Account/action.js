import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
export const getAccounts = (pageNumber, pageSize) => {
    return (dispatch) => {

        dispatch({
            type: "ACCOUNT_LOADING"
          })
        axios.get('https://localhost:5001/api/Account', {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize
                }
            })
        .then(response => {
           // console.log(response);
            dispatch({
                type: 'GET_ACCOUNTS',
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: "ACCOUNT_LOAD_FAIL",
              })
              toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_RIGHT,
              });
            console.log(error);
        });
    }
}



export const getAccount = (id) => {

  
    return (dispatch) => {
        dispatch({
            type: "ACCOUNT_LOADING"
          })
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
            dispatch({
                type: "ACCOUNT_LOAD_FAIL",
              })
              toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_RIGHT,
              });
            console.log(error);
        });
    }
}


export const searchAccounts = (query) => {
    
    return (dispatch) => {

        dispatch({
            type: "ACCOUNT_LOADING"
          })
        axios.get('https://localhost:5001/api/Account/Search', {
            params: {
              query: query
            }
        })
        .then(response => {
         //   console.log(response);
            dispatch({
                type: 'SEARCH_ACCOUNTS',
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: "ACCOUNT_LOAD_FAIL",
              })
              toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_RIGHT,
              });
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
                type: "ACCOUNT_LOAD_FAIL",
              })
              toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        });
    }
}