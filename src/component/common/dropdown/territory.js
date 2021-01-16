import React from "react";
import { Container, Row, Col } from "reactstrap";
const Territory = (props) => {
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
                        >
                          <option value="0">--Select--</option>
                          {territories.map((territory, index) => 
                           (
                          <option value={territory.value}>{territory.Label}</option>
                          ))}
                        </Input>
                        </InputGroup>
                      </FormGroup>
  );
};

export default Territory;