import React, { Fragment, useEffect, useState } from "react";
import { updateLocation, editContact, deleteLocation, createLocation } from "../../redux/Account/action";
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
const Location = (props) => {
  const locations = useSelector(state => state.Account.account.locations)
 
 const locationInit ={
 
  "name": "",
  "description": "",
  
  "street1": "",
  "street2": "",
  "city": "",
  "postCode": "",
  "countryId": "",
  "longitude": 0,
  "latitude": 0,
  "country":"",

  "accountId": ""
}
const accountState = useSelector(state => state.Account.account)

const [location, setLocation] = useState(locationInit);
const [editLocation, setEditLocation] = useState(false);

  useEffect(() => {
    setLocation(locationInit)
  }, []);
 const dispatch = useDispatch();
 const handleDelete = (id) => {
  if (
    window.confirm(
      `Are you sure you want to delete?`
    )
  ) {
    dispatch(deleteLocation(accountState.id, id));
   // toast.success("Successfully Deleted !");
  }
};

const handleEdit = (location) => {
  
 // setContact(contact)
  dispatch(updateLocation(accountState.id,location));
   // toast.success("Successfully Deleted !");
  
};



 const { register, handleSubmit, errors } = useForm();
 const onSubmit = (data) => {
  if (data !== "") {
   
   if(editLocation === true){
     dispatch(updateLocation(accountState.id, location))
   }else{
     setEditLocation(false)
   dispatch(createLocation(accountState.id, location));
   }

  } else {
    console.log(errors)
    errors.showMessages();
  }
};
 const [createaccountlocation, setcreateaccountlocation] = useState(false);

 const createaccountlocationtoggle = () =>{
  setEditLocation(false)
  setLocation(locationInit);
  setcreateaccountlocation(!createaccountlocation) 
  
  };
  const editaccountlocationtoggle = (locationObj) =>{
 
    setEditLocation(true)

    //console.log(locationObj);
    setLocation(locationObj)
  
    setcreateaccountlocation(!createaccountlocation)
  
  
  };
 
 const handleInputChange = (event) => {
  const { name, value } = event.target
     
    setLocation({ ...location, [name]: value })
    console.log(location);
  }

 //};
  return (
    <Fragment>

  
              <Card className="theme-form">
                <CardHeader>
                  <h5 className="card-title mb-0">Account's Locations</h5>
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
                        <th>City</th>
                        <th>Country</th>
                        
                      </tr>
                    </thead> 
                    <tbody>
                        { (locations.length > 0) ? locations.map((location, index) => 
                          (
                      <tr key={index}>
                        <td>

                        <span onClick= {()=>handleDelete(location.id)} >
          <i
            className="fa fa-trash"
            style={{ width: 35, fontSize: 16,  color: "#e4566e" }}
          ></i>
        </span>
        <span onClick= {()=>editaccountlocationtoggle(location)}  >
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

                          {location.name}
                          
                        </td>
                        <td>{location.city}</td>
                        <td>
                         Nigeria
                          
                        </td>
                       
                        
                      </tr>
                          )
                          ):  (
                            
                              <tr>
                                <td>
                                      No location added yet</td>
                              </tr>
                          )} 
                          </tbody>
                  </table>
                </div>
                </CardBody>
                <CardFooter className="text-right">
                  <button disabled = {accountState.id === ''} className="btn btn-primary" onClick={createaccountlocationtoggle}>
                    Add Location
                  </button>

                  <Modal
                  isOpen={createaccountlocation}
                  toggle={createaccountlocationtoggle}
                  size="lg"
                >
                  <ModalHeader toggle={createaccountlocationtoggle} >
                    New Location
                  </ModalHeader>
                  <ModalBody>
                  <Form onSubmit= {handleSubmit(onSubmit)} className="card theme-form needs-validation"  >
                
                <CardBody>
                  <Row>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Location Name</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-card"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="e.g HeadOffice"
                            value={location.name}
                            onChange={handleInputChange}
                            name = "name"
                            innerRef={register({ required: true })}
                          />
                          <span style={{color:'red'}}>{errors.name && "Name is required"}</span>
                        </InputGroup>
                      </FormGroup>
                      
                    </Col>

                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Country</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-location-pin"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                          type="select"
                          value={location.countryId}
                          className="form-control"
                          name="countryId"
                          onChange={handleInputChange}
                        >
                          <option value="0">--Select--</option>
                          <option value="FC647164-B384-49DA-F2B8-08D8A06F56A7">Nigeria</option>
                          
                        </Input>
                        </InputGroup>
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Street 1</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-card"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="Enter street 1"
                            value={location.street1}
                            onChange={handleInputChange}
                            name = "street1"
                            innerRef={register({ required: true })}
                          />
                          <span style={{color:'red'}}>{errors.street1 && "Street 1 is required"}</span>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Street 2</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-phone"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="Enter Street 2"
                            value={location.street2}
                            onChange={handleInputChange}
                            name = "street2"
                           
                          />
                         
                        </InputGroup>
                      </FormGroup>
                      
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>City</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-phone"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="Enter City"
                            value={location.city}
                            onChange={handleInputChange}
                            name = "city"
                            innerRef={register({ required: true })}
                          />
                        </InputGroup>
                        <span style={{color:'red'}}>{errors.city && "City is required"}</span>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>PostCode</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-email"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="Enter Postcode"
                            value={location.postCode}
                            onChange={handleInputChange}
                            name = "postCode"
                            innerRef={register({ required: true })}
                            
                          />
                           <span style={{color:'red'}}>{errors.postCode && "PostCode is required"}</span>
                        </InputGroup>
                      </FormGroup>
                     
                    </Col>
                    
                  
                    
                    
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <Label className="form-label">Description</Label>
                        <Input
                          type="textarea"
                          rows="3"
                          placeholder="Enter Brief description of the Location"
                          value={location.description}
                          onChange={handleInputChange}
                          name = "description"
                        />
                      </div>
                    </div>
                  </Row>
                </CardBody>
               
                
                <ModalFooter>
                    <Button color="secondary" onClick={createaccountlocationtoggle}>
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

export default Location;
