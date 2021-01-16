import React, { Fragment , useState } from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import { useSelector, useDispatch, } from "react-redux"
import { getAccount, createAccount } from "../../redux/Account/action";
import { useForm } from "react-hook-form";
import Contact from "../contact/contacts"
import Location from "../location/locations"

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
} from "reactstrap";
const CreateAccount = (props) => {
  const { useReducer } = React
  const accountInit ={
   'id':null,
   "firstname":'',
   'lastname':'',
   'phone1':'',
   'phone2':'',
   'email':'',
   'website':'',
   'description':'',
   'serviceTerritory':'',
   contacts:[],
   locations:[]

  } 

  //const store = configureStore({ reducer: Account })


  //console.log(store.getState())
 // const [state, dispatchs] = useReducer(RootReducer, initialState)

  //const accountState = useSelector(state => state.Account.account)
  //console.log(accountState);
  const { register, handleSubmit, errors } = useForm();
  const [account, setAccount] = useState(accountInit);
  //const [accountid, setAccountId] = useState()
  
  
  const handleInputChange = (event) => {
  const { name, value } = event.target
     
    setAccount({ ...account, [name]: value })
   // console.log(account);
  }
  // 1
  //const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data !== "") {
      dispatch(createAccount(account));
    //  setAccountId({ ...account, id: value })
   // accountState = useSelector(state => state.Account.account)
  //  console.log(accountState);
    } else {
      console.log(errors)
      errors.showMessages();
    }
  };
  //React.useEffect(() => {
    
  // if(account.id !== null){
   //  dispatch(getAccount(account.id))


  // }
 //}, [account.id])

  return (
    <Fragment>
      <Breadcrumb parent="Service / Account" title="Create Account" />
      <Container fluid={true}>
        <div className="edit-profile">
          <Row>
            
            <Col xl="7">
              <Form onSubmit= {handleSubmit(onSubmit)} className="card theme-form needs-validation"  >
                <CardHeader>
                  <h5 className="card-title mb-0">Basic Information</h5>
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
                  <Row>
                    <Col lg="6">
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
                            placeholder="e.g FieldWork"
                            value={account.firstname}
                            onChange={handleInputChange}
                            name = "firstname"
                            innerRef={register({ required: true })}
                          />
                          <span style={{color:'red'}}>{errors.firstname && "First name is required"}</span>
                        </InputGroup>
                      </FormGroup>
                      
                    </Col>
                    <Col lg="6">
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
                            placeholder="e.g Limited"
                            value={account.lastname}
                            onChange={handleInputChange}
                            name = "lastname"
                            innerRef={register({ required: true })}
                          />
                          <span style={{color:'red'}}>{errors.lastname && "Last name is required"}</span>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Phone 1</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-phone"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="+123..."
                            value={account.phone1}
                            onChange={handleInputChange}
                            name = "phone1"
                            innerRef={register({ required: true })}
                          />
                          <span style={{color:'red'}}>{errors.phone1 && "Last name is required"}</span>
                        </InputGroup>
                      </FormGroup>
                      
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Phone 2</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-phone"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="+123..."
                            value={account.phone2}
                            onChange={handleInputChange}
                            name = "phone2"
                          />
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
                            value={account.email}
                            onChange={handleInputChange}
                            name = "email"
                            innerRef={register({ required: true })}
                            
                          />
                           <span style={{color:'red'}}>{errors.email && "Email is required"}</span>
                        </InputGroup>
                      </FormGroup>
                     
                    </Col>
                    <Col lg="12">
                    <FormGroup className=" m-form__group">
                        <Label>Website</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-web"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="e.g www..."
                            value={account.website}
                            onChange={handleInputChange}
                            name = "website"
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Service Territory</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-location-pin"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                          type="select"
                          name="select"
                          className="form-control"
                        >
                          <option value="0">--Select--</option>
                          <option value="1">Lagos</option>
                          <option value="2">Canada</option>
                          <option value="3">Usa</option>
                          <option value="4">Aus</option>
                        </Input>
                        </InputGroup>
                      </FormGroup>
                      
                    </Col>
                    
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <Label className="form-label">Description</Label>
                        <Input
                          type="textarea"
                          rows="4"
                          placeholder="Enter Brief description of Account"
                          value={account.description}
                          onChange={handleInputChange}
                          name = "description"
                        />
                      </div>
                    </div>
                  </Row>
                </CardBody>
                <CardFooter className="text-right">
                  <button className="btn btn-primary" type="submit">
                    Save
                  </button>
                </CardFooter>
              </Form>
            </Col>
            <Col xl="5">
              <Contact />
           
           
              <Location/>
              </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5>Add projects And Upload</h5>
                  <div className="card-options">
                    <a
                      className="card-options-collapse"
                      href="#javascript"
                      data-toggle="card-collapse"
                    >
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a
                      className="card-options-remove"
                      href="#javascript"
                      data-toggle="card-remove"
                    >
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </CardHeader>
                
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};




export default CreateAccount;
