import React, { Fragment , useState } from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import { useSelector, useDispatch, } from "react-redux"
import {  createWorkOrder } from "../../redux/workorder/action";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Contact from "../contact/contacts"
import Location from "../location/locations"
import SelectSearch from 'react-select-search';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select'
import {  getTerritories } from "../../redux/common/territory/action";

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
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
const CreateWorkOrder = (props) => {
  let params = useParams();
 
  const workOrderInit ={
    "workOrderTypeId": "",
    "workOrderType": "",
    "relatedAgreementId": "",
    "relatedWorkOrderId": "",
    "bookingSummary": "",
    "followupInstruction": "",
    "ownerId": "",
    "name": "",
    "taxable": false,
    "salesTaxId": "",
    "sourceInformation": "",
    "serviceAccountId": "",
    "serviceAccount": "",
    "billingAccountId": "",
    "published": false,
    "id": null
  }
  const dispatch = useDispatch();
  const id = params.id;
  const workordertypes = useSelector(state => state.WorkOrder.workOrderTypes)
  const { register, handleSubmit, errors } = useForm();
  const [primarycolorTab, setprimarycolorTab] = useState("1");
    const [workOrder, setWorkOrder] = useState(workOrderInit)
  //console.log(workOrder);
  const [options, setOptions] = useState([
    { value: '3790530A-5D86-41C6-1032-08D8A0F0E4D6', label: 'Chocolate' },
    { value: '3790530A-5D86-41C6-1032-08D8A0F0E2D6', label: 'Strawberry' },
    { value: '3790530A-5D86-41C6-1032-08D8A0F6E4D6', label: 'Vanilla' }
  ])


  const handleInputChange = (event) => {
  const { name, value } = event.target
  setWorkOrder({ ...workOrder, [name]: value })

    console.log(workOrder);
  }
  // 1
  //const currentUser = useSelector(state => state.currentUser)
  
  const handleChange = (nameValue) => {

    var newValue = document.getElementsByName(nameValue); 
  
    console.log(newValue[0].value);
    console.log(nameValue);
    setWorkOrder({ ...workOrder, [nameValue]: newValue[0].value })
    console.log(workOrder);
  
  };
  const handleSelectChange = (inputValue, actionMeta) => {
   // setWorkOrder({ ...workOrder, relatedAgreementId: inputValue.value })
    console.group('Input Changed');
   // handleChange(name, inputValue);
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };


  const onSubmit = (data) => {
    if (data !== "") {
      dispatch(createWorkOrder(workOrder));
    //  setAccountId({ ...account, id: value })
   // accountState = useSelector(state => state.Account.account)
  //  console.log(accountState);
    } else {
     // console.log(errors)
      errors.showMessages();
    }
  };
  React.useEffect(() => {

 }, [])

  return (
    <Fragment>
      <Breadcrumb parent="Service / WorkOrder" title="Create WorkOrder" />
      <Container fluid={true}>
        <div className="edit-profile">
          <Row>
            
            <Col xl="9">
              <div className="card theme-form needs-validation"  >
                
                <CardBody>
                
                <Nav style={{'marginBottom' :'60px'}} className="nav-primary" tabs>
                  <NavItem>
                    <NavLink
                      href="#javascript"
                      className={primarycolorTab === "1" ? "active" : ""}
                      onClick={() => setprimarycolorTab("1")}
                    >
                      <i className="icofont icofont-ui-home"></i>WorkOrder
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#javascript"
                      className={primarycolorTab === "2" ? "active" : ""}
                      onClick={() => setprimarycolorTab("2")}
                    >
                      <i className="icofont icofont-man-in-glasses"></i>Resource Requirement
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#javascript"
                      className={primarycolorTab === "3" ? "active" : ""}
                      onClick={() => setprimarycolorTab("3")}
                    >
                      <i className="icofont icofont-contacts"></i>Incidents
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={primarycolorTab}>
                <TabPane className="fade show" tabId="1">
                <Form onSubmit= {handleSubmit(onSubmit)}  >
                  <Row>
                    <Col lg="6">
        
                    <FormGroup className=" m-form__group">
                        <Label>Related Agreement</Label>
                        
                        <Select
                        name="relatedAgreementId"
                        onInputChange={()=>handleChange("relatedAgreementId")}
                        placeholder="Search..."
                       // onInputChange = {()=>handleChange("relatedAgreementId")}
                        //value = {workOrder.relatedAgreementId}
        isClearable
       // onChange={handleSearchChange}
        
        options={options}
      />
                      </FormGroup>
                      
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Service Account</Label>
                        <Select
                        name="serviceAccountId"
                        onInputChange={()=>handleChange("serviceAccountId")}
                        placeholder="Search..."
                       // onInputChange = {()=>handleChange("serviceAccountId")}
                        //value = {workOrder.relatedAgreementId}
        isClearable
       // onChange={handleSearchChange}
        
        options={options}
      />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Billing Account</Label>
                        <Select
                        name="billingAccountId"
                        onInputChange={()=>handleChange("billingAccountId")}
                        placeholder="Default: Same as service Account"
                       // onInputChange = {()=>handleChange("serviceAccountId")}
                        //value = {workOrder.relatedAgreementId}
        isClearable
       // onChange={handleSearchChange}
        
        options={options}
      />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>WorkOrder Type</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-work"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                          type="select"
                          onChange={handleInputChange}
                          className="form-control"
                          name="workOrderTypeId"
                          innerRef={register({ required: true })}
                        >
                          <option value="0">--Select--</option>
                          {workordertypes.map((workordertype, index) => 
                           (
                          <option key={workordertype.id} value={workordertype.id}>{workordertype.name}</option>
                          ))}
                        </Input>
                        <span style={{color:'red'}}>{errors.workOrderTypeId && "Workorder type is required"}</span>
                        </InputGroup>
                      </FormGroup>
                      
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Name</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-phone"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            className="form-control"
                            type="text"
                            placeholder="Workorder name"
                            value={workOrder.name}
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
                        <Label>Related Work order</Label>
                        
                         
                          <Select
                        name="relatedWorkOrderId"
                        onInputChange={()=>handleChange("relatedWorkOrderId")}
                        placeholder="Search..."
                       // onInputChange = {()=>handleChange("serviceAccountId")}
                        //value = {workOrder.relatedAgreementId}
        isClearable
       // onChange={handleSearchChange}
        
        options={options}
      />
                           <span style={{color:'red'}}>{errors.email && "Email is required"}</span>
                        
                      </FormGroup>
                     
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Taxable</Label>
                        
                         
                          <Input
                            className="form-control"
                            type="select"
                            
                             value={workOrder.taxable}
                            onChange={handleInputChange}
                            name = "taxable"></Input>
                       
                       
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                    <FormGroup className=" m-form__group">
                        <Label>Sales Tax</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                         
                          <i className="icofont icofont-location-pin"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                         
                          type='select'
                          className="form-control"
                          name="salesTaxId"
                          
                          onChange={handleInputChange}
                          
                         
                        >
                          <option value="0">--Select--</option>
                         
                        </Input>
                        </InputGroup>
                        
                      </FormGroup>
                      
                    </Col>


                    
                    
                    <div className="col-md-6">
                      <div className="form-group mb-0">
                        <Label className="form-label">followupInstruction</Label>
                        <Input
                          type="textarea"
                          rows="4"
                          placeholder="Enter Brief description of Account"
                          value={workOrder.followupInstruction}
                          onChange={handleInputChange}
                          name = "followupinstruction"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="form-group mb-0">
                        <Label className="form-label">Booking Summary</Label>
                        <Input
                          type="textarea"
                          rows="4"
                          placeholder="Enter Brief description of Account"
                          value={workOrder.bookingSummary}
                          onChange={handleInputChange}
                          name = "bookingSummary"
                        />
                      </div>
                    </div>
                  </Row>
                  
                  </Form>
                  <div className="text-right card-footer"><button class="btn btn-primary" type="submit">Save</button></div>
                  </TabPane>
                  <TabPane tabId="2">fdd</TabPane>

                  
                  </TabContent>
                </CardBody>
               
              </div>
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




export default CreateWorkOrder;
