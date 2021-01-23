import React, { Fragment, useState, useMemo, useCallback } from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import { useSelector, useDispatch, } from "react-redux";
import { getAccounts, createAccount } from "../../redux/Account/action";
import differenceBy from "lodash/differenceBy";
import { mydata } from "../../data/dummyTableData";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Form,
  FormGroup,
  Label,
  Input,
  
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";


const customStyles = {
  rows: {
    style: {
    borderTop: '0',
    borderRight: '1px solid #f2f4ff', // override the row height
    }
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

const Account = () => {


 
  const handleEdit = () => {
    if (
      window.confirm(
        `Are you sure you want to delete:\r ${selectedRows.map(
          (r) => r.name
        )}?`
      )
    ) {
     //setToggleCleared(!toggleCleared);
     // setData(differenceBy(data, selectedRows, "name"));
      toast.success("Successfully Deleted !");
    }
  };




  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  
  const accounts = useSelector(state => state.Account.accounts)



  //console.log(territories.data)
  //const terri = territories.data;
  
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAccounts());
  }, [])



  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);
 

 

  return (
    <Fragment>
      <Breadcrumb parent="Table" title="Accounts" />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>

          
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Accounts Table</h5>
               
              </CardHeader>
              
              <CardBody>
                <Col sm='5' md={{ size: 5, offset: 7 }}>
                <FormGroup className=" mb-2">
                        
                        <InputGroup className="pill-input-group">
                          
                          <Input
                            className="form-control"
                            type="text"
                            aria-label="Amount (to the nearest dollar)"
                            placeholder="search by name"
                          />
                          <InputGroupAddon addonType="append">
                            <InputGroupText>
                              <i className="icofont icofont-stock-search"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                      </FormGroup></Col>
              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">SystemStatus</th>
                      
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
                      <th scope="col">LastDateModified</th>
                      <th scope="col">CreatedOn</th>
                      <th scope="col">Owner</th>
                      <th scope="col"></th>
                    </tr>
                  </thead><tbody>
                  {( accounts !== undefined) ? accounts.map((account, index) =>(
                  <tr key={account.id}>
                  <td >{account.name}</td>
                  <td>{account.systemStatus}</td>
                  
                  <td>{account.phone1}</td>
                  <td>{account.email}</td>
                  <td>{account.lastDateModified}</td>
                  <td>{account.createdOn}</td>
                  <td>{account.owner}</td>
                  <td>

        <span onClick= {()=>handleEdit(account.id)} >
          <i
            className="fa fa-pencil"
            style={{
              width: 35,
              fontSize: 16,
              padding: 11,
              color: "rgb(40, 167, 69)",
            }}
          ></i>
          
          </span>


                        </td>
                </tr>
                  )) :  <tr>
                  <td>
                        No location added yet</td>
                </tr>
                  }
 
                 </tbody>
                </Table>
                <Pagination aria-label="...">
                  <ul className="pagination pagination-primary mb-2">
                    <PaginationItem disabled>
                      <PaginationLink>Previous</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#javascript">
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#javascript">Next</PaginationLink>
                    </PaginationItem>
                  </ul>
                </Pagination>
              </div>

               
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Account;
