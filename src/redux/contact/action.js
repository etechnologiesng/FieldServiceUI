import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
export const getAccountContacts = (accountContacts) => {
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


export const getContact = (id) => {
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


export const addContact = contactObj => {
   return {
        type: 'ADD_TO_CONTACTS',
        payload: contactObj

    }

}
export const setContact = contactId => {
    return {
        type: 'SET_CONTACT',
        payload: contactId
    }
}

export const createContact = (accountId,contactObj) => {
    return (dispatch) => {


        dispatch({
            type: "CONTACT_LOADING"
          });
        contactObj.accountId = accountId
        axios.post('https://localhost:5001/api/Account/'+accountId+'/Contact', contactObj)
        .then(response => {

            console.log(response.data)
            dispatch({
                type: 'CREATE_CONTACT',
                payload: contactObj
            });
            //dispatch(setContact(response.data));
            contactObj.id = response.data;
            contactObj.accountId = accountId;
            dispatch(addContact(contactObj))
            toast.success("Contact Created succesfully!!! !", {
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