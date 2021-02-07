import React, { Fragment, useEffect, useState } from "react";
import { updateContact, editContact, deleteContact, createContact } from "../../redux/Account/action";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch, } from "react-redux"
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Media,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
const Contact = (props) => {
  const contacts = useSelector(state => state.Account.account.contacts)
  //console.log(contacts)
 //// const account = useSelector(state => state.Account.account)
 // const [contact, setContact] = useState(contactInit);
 // const history = useHistory();
 const contactInit ={
  'id':null,
  "firstname":'',
  'lastname':'',
  'phone':'',
  'email':''
}
const accountState = useSelector(state => state.Account.account)
//console.log(accountState)
const [contact, setContact] = useState(contactInit);
const [editContact, setEditContact] = useState(false);

  useEffect(() => {
  
  }, []);
 const dispatch = useDispatch();
 const handleDelete = (id) => {
  if (
    window.confirm(
      `Are you sure you want to delete?`
    )
  ) {
    dispatch(deleteContact(accountState.id, id));
   // toast.success("Successfully Deleted !");
  }
};

const handleEdit = (contact) => {
  
 // setContact(contact)
  dispatch(updateContact(accountState.id,contact));
   // toast.success("Successfully Deleted !");
  
};



 const { register, handleSubmit, errors } = useForm();
 const onSubmit = (data) => {
  if (data !== "") {
   
   if(editContact === true){
     dispatch(updateContact(accountState.id, contact))
   }else{
     setEditContact(false)
   dispatch(createContact(accountState.id, contact));
   }
  //createaccountcontacttoggle();
  } else {
    console.log(errors)
    errors.showMessages();
  }
};
 const [createaccountcontact, setcreateaccountcontact] = useState(false);
 //const [createaccountcontact, setcreateaccountcontact] = useState(false);
 //const createaccountcontacttoggleClose = () => setcreateaccountcontact(!createaccountcontact);
 const createaccountcontacttoggle = () =>{
  setEditContact(false)
  setContact(contactInit);
    setcreateaccountcontact(!createaccountcontact)
  
  
  };



  const editaccountcontacttoggle = (contactObj) =>{
 
    setEditContact(true)

    console.log(contactObj);
    setContact(contactObj)
  
    setcreateaccountcontact(!createaccountcontact)
  
  
  };

 const handleInputChange = (event) => {
  const { name, value } = event.target
     
    setContact({ ...contact, [name]: value })
    console.log(contact);
  }
 
  return (
    <Fragment>

  
              <Card className="theme-form">
                <CardHeader>
                  <h5 className="card-title mb-0">Account's Contacts</h5>
                  <div className="card-options">
                    <a className="card-options-collapse" href="#javascript">
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a className="card-options-remove" href="#javascript">
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </CardHeader>
                <CardBody>
                <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap">
                    <thead>
                      <tr><th>Action</th>
                        <th>Name</th>
                       
                        <th>Email</th>
                        <th>Phone</th>
                        
                      </tr>
                    </thead>
                    
                    
                      <tbody>
                        { (contacts.length > 0) ? contacts.map((contact, index) => 
                          (
                      <tr key={index}>
                          <td>

<span style={{
                    
                    cursor:'pointer',
                    
                  }} onClick= {()=>handleDelete(contact.id)} >
<i
className="fa fa-trash"
style={{ width: 35, fontSize: 16,  color: "#e4566e" }}
></i>
</span>
<span style={{
                    
                    cursor:'pointer',
                    
                  }} onClick= {()=>editaccountcontacttoggle(contact)} >
<i
className="fa fa-pencil"
style={{
width: 35,
fontSize: 16,

color: "rgb(40, 167, 69)",
}}
></i>

</span>


</td>
                        <td>
                          
                          {contact.firstname} {contact.lastname}
                          
                        </td>
                        
                        <td>
                         
                          {contact.email}
                        </td>
                        <td>{contact.phone}</td>
                      
                      </tr>
                          )
                    ):  (
                      
                        <tr>
                          <td>
                                No contact added yet</td>
                        </tr>
                    )} 
                    </tbody>
                         
                  </table>
                </div>
                </CardBody>
                <CardFooter className="text-right">
                  <button disabled = {accountState.id === ''} className="btn btn-primary" onClick={createaccountcontacttoggle}>
                    Add Contact
                  </button>

                  <Modal
                  isOpen={createaccountcontact}
                  toggle={createaccountcontacttoggle}
                >
                  <ModalHeader toggle={createaccountcontacttoggle}>
                    New Contact
                  </ModalHeader>
                  <ModalBody>
                  <Form onSubmit= {handleSubmit(onSubmit)} className="card theme-form needs-validation" >
                
                
                  <Row>
                  <Col lg="12">
                    <FormGroup className=" m-form__group">
                        <Label>First Name</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-card"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="Enter contact firstname"
                            value = {contact.firstname}
                            onChange={handleInputChange}
                            name = "firstname"
                            innerRef={register({ required: true })}
                          />
                          <span style={{color:'red'}}>{errors.firstname && "First name is required"}</span>
                        </InputGroup>
                      </FormGroup>
                      </Col>
                      <Col lg="12">
                    
                    <FormGroup className=" m-form__group">
                        <Label>Last Name</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-card"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="Enter contact lastname"
                            innerRef={register({ required: true })}
                            onChange={handleInputChange}
                            name = "lastname"
                            value ={contact.lastname}
                          />
                          <span style={{color:'red'}}>{errors.lastname && "Last name is required"}</span>
                        </InputGroup>
                      </FormGroup>
                      </Col>
                      <Col lg="12">
                    
                    <FormGroup className=" m-form__group">
                        <Label>Phone</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-phone"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="Enter contact phone number"
                            innerRef={register({ required: true })}
                            onChange={handleInputChange}
                            name = "phone"
                            value = {contact.phone}
                          />
                          <span style={{color:'red'}}>{errors.phone && "Phone is required"}</span>
                        </InputGroup>
                      </FormGroup>
                      </Col>
                    
                   
                    
                      <Col lg="12">
                    <FormGroup className=" m-form__group">
                        <Label>Email</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-email"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="e.g info@fieldwork.com"
                            innerRef={register({ required: true })}
                            onChange={handleInputChange}
                            name = "email"
                            value = {contact.email}
                          />
                          <span style={{color:'red'}}>{errors.email && "Email is required"}</span>
                        </InputGroup>
                      </FormGroup>
                     
                    </Col>
                   
                  </Row>
                
                <ModalFooter>
                    <Button color="secondary" onClick={createaccountcontacttoggle}>
                      Close
                    </Button>
                    <Button color="primary" type='submit' >
                      Save
                    </Button>
                  </ModalFooter>
              </Form>
                  </ModalBody>
                  
                </Modal>

                </CardFooter>
              </Card>
            
              </Fragment>
  );
};

export default Contact;
