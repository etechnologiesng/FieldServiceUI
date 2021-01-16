import React, { Fragment, useEffect, useState } from "react";
import { getContact, createContact } from "../../redux/contact/action";
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
  const contacts = useSelector(state => state.Contact.contacts)
  console.log(contacts)
  const account = useSelector(state => state.Account.account)
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
console.log(accountState)
const [contact, setContact] = useState(contactInit);
//const [accountId, setaccountId] = useState(account.id);
  // eslint-disable-next-line
//  const [searchValue, setsearchValue] = useState("");
 // const [users, setUsers] = useState([]);
  //const db = firebase.firestore();

 // useEffect(() => {
   // const unsubscribe = db.collection("contactApp").onSnapshot((snapshot) => {
    //  const getUser = snapshot.docs.map((doc) => ({
    //    id: doc.id,
     //   ...doc.data(),pm 
   //   }));
     // setUsers(getUser);
   // });
   // return () => unsubscribe();
    // eslint-disable-next-line
 // }, []);
 const dispatch = useDispatch();
 const { register, handleSubmit, errors } = useForm();
 const onSubmit = (data) => {
  if (data !== "") {
   // console.log(props.accountId);
   dispatch(createContact(accountState.id, contact));
  //  setAccountId({ ...account, id: value })
  createaccountcontacttoggle();
  } else {
    console.log(errors)
    errors.showMessages();
  }
};
 const [createaccountcontact, setcreateaccountcontact] = useState(false);
 //const [createaccountcontact, setcreateaccountcontact] = useState(false);
 //const createaccountcontacttoggleClose = () => setcreateaccountcontact(!createaccountcontact);
 const createaccountcontacttoggle = () =>{

  
    setcreateaccountcontact(!createaccountcontact)};
 
   // const deleteUser = (userId) => {
   // deletedUser(userId);
 // };
//const [account, setContact] = useState({});
 const handleInputChange = (event) => {
  const { name, value } = event.target
     
    setContact({ ...contact, [name]: value })
    console.log(contact);
  }
  
 // const redirectUrl = () => {
  //  history.push(`${process.env.PUBLIC_URL}/appnew/new-contact`);
 // };

 // const editContact = (user) => {
   // history.push(`${process.env.PUBLIC_URL}/appnew/edit-contact/${user.id}`);
 //};
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
                      <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                      </tr>
                    </thead>
                    
                    {(contacts.length > 0) ? (
                      <tbody>
                        {contacts.map((contact, index) => {
                          return (
                      <tr key={index}>
                        <td>
                          
                          {contact.firstname}
                          
                        </td>
                        <td>{contact.lastname}</td>
                        <td>
                         
                          {contact.email}
                        </td>
                        <td>{contact.phone}</td>
                        <td className="text-right">
                          <Button color="primary btn-pill" size="sm">
                            <i className="fa fa-pencil"></i> Edit
                          </Button>
                         
                          <Button color="danger btn-pill" size="sm">
                            <i className="fa fa-trash"></i> Delete
                          </Button>
                        </td>
                      </tr>
                      );
                    })} </tbody>
                          ) : (
                            <tbody>
                              <tr>
                                <td>
                                      No contact added yet</td>
                              </tr>
                          </tbody>)
                        }
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
