import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch, } from "react-redux"
import {  getTerritories } from "../../../redux/common/territory/action";
import {
 
  Row,
  Col,
 
  FormGroup,
  Label,
  Input,
 
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  
  
} from "reactstrap";
const Territory = (props) => {
  const { register, handleSubmit, errors } = useForm();
  //const [territories, setterritories] = useState([]);

  const territories = useSelector(state => state.Territory.territories)
  //console.log(territories.data)
  //const terri = territories.data;
  console.log(territories);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getTerritories());
  }, [])

  return (
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
                          name="serviceTerritoryId"
                          innerRef={register({ required: true })}
                        >
                          <option value="0">--Select--</option>
                          {territories.map((territory, index) => 
                           (
                          <option key={territory.id} value={territory.id}>{territory.name}</option>
                          ))}
                        </Input>
                        </InputGroup>
                        <span style={{color:'red'}}>{errors.name && "Name is required"}</span>
                      </FormGroup>
  );
};

export default Territory;