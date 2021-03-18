import axios from 'axios';
import { identity } from 'lodash';
import { ToastContainer, toast } from "react-toastify";






 export const addLocation = locationObj => {
    return {
         type: 'ADD_TO_LOCATIONS',
         payload: locationObj
 
     }
 
 }


 export const deleteContact = (accountId,id) => {
    return (dispatch) => {
        axios.delete('https://localhost:5001/api/Account/'+accountId+'/Contact', {
            params: {
              contactId: id
            }
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: 'DELETE_CONTACT',
                payload: id
            })

            toast.success("Contact succesfully deleted !!! !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        })
        .catch(error => {
            //console.log(error);
            toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        });
    }
}

export const deleteLocation = (accountId,id) => {
    return (dispatch) => {
        axios.delete('https://localhost:5001/api/Account/'+accountId+'/Location', {
            params: {
              contactId: id
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
            //console.log(error);
            toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        });
    }
}

export const updateContact = (accountId,contactObj) => {
    return (dispatch) => {
        axios.put('https://localhost:5001/api/Account/'+accountId+'/Contact', contactObj)
            
        .then(response => {
            console.log(response);
            dispatch({
                type: 'UPDATE_CONTACT',
                payload: contactObj
            })

            toast.success("Contact succesfully updated !!! !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        })
        .catch(error => {
            //console.log(error);
            toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        });
    }
}
export const updateLocation = (accountId,locationObj) => {
    return (dispatch) => {
        axios.put('https://localhost:5001/api/Account/'+accountId+'/Location', locationObj)
            
        .then(response => {
            console.log(response);
            dispatch({
                type: 'UPDATE_LOCATION',
                payload: locationObj
            })

            toast.success("Location succesfully updated !!! !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        })
        .catch(error => {
            //console.log(error);
            toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        });
    }
}

export const createLocation = (accountId,locationObj) => {
    return (dispatch) => {


        dispatch({
            type: "ACCOUNT_LOADING"
          });
          locationObj.accountId = accountId
        axios.post('https://localhost:5001/api/Account/'+accountId+'/Location', locationObj)
        .then(response => {

            
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
                type: "ACCOUNT_LOAD_FAIL",
              })
        });
    }
}


 export const createContact = (accountId,contactObj) => {
    return (dispatch) => {


        dispatch({
            type: "ACCOUNT_LOADING"
          });
        contactObj.accountId = accountId
        axios.post('https://localhost:5001/api/Account/'+accountId+'/Contact', contactObj)
        .then(response => {

            
            //dispatch(setContact(response.data));
            contactObj.id = response.data;
            contactObj.accountId = accountId;
           // dispatch(addContact(contactObj))
            toast.success("Contact Created succesfully!!! !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: "ACCOUNT_LOAD_FAIL",
              })
        });
    }
}
export const getWorkOrders = (pageNumber, pageSize) => {
    return (dispatch) => {

        dispatch({
            type: "WORKORDER_LOADING"
          })
        axios.get('https://localhost:5001/api/WorkOrder', {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize
                }
            })
        .then(response => {
           // console.log(response);
            dispatch({
                type: 'GET_WORKORDERS',
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: "WORKORDER_LOAD_FAIL",
              })
              toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_RIGHT,
              });
            console.log(error);
        });
    }
}



export const getWorOrder = (id) => {

  
    return (dispatch) => {
        dispatch({
            type: "WORKORDER_LOADING"
          })
        axios.get('https://localhost:5001/api/WorkOrder/'+id)
        .then(response => {
            
            dispatch({
                type: 'GET_WORKORDER',
                payload: response.data
            })

           
        })
        .catch(error => {
            dispatch({
                type: "WORKORDER_LOAD_FAIL",
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

export const createWorkOrder = workOrderObj => {
    return (dispatch) => {


        dispatch({
            type: "WORKORDER_LOADING"
          });
        axios.post('https://localhost:5001/api/WorkOrder', workOrderObj)
        .then(response => {

           // console.log(response.data)
            //dispatch(setAccount(response.data))
            workOrderObj.id = response.data;
           // console.log(accountObj)
            dispatch({
                type: 'CREATE_WORKORDER',
                payload: workOrderObj
            });
            toast.success("WorkOrder Created succesfully!!! !", {
                position: toast.POSITION.TOP_RIGHT,
              });

        })
        .catch(error => {
            
            console.log(error);
            dispatch({
                type: "WORKORDER_LOAD_FAIL",
              })
              toast.error("Something went wrong !", {
                position: toast.POSITION.TOP_RIGHT,
              });
        });
    }
}



export const editAccount = (id, accountObj) => {
    return (dispatch) => {

      accountObj.id = id
        dispatch({
            type: "ACCOUNT_LOADING"
          });
        axios.put('https://localhost:5001/api/Account/'+id, accountObj)
        .then(response => {

            dispatch({
                type: 'UPDATE_ACCOUNT',
                payload: accountObj
            });
            toast.success("Account updated succesfully!!! !", {
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
