import React, { Fragment, useState, useMemo, useCallback } from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import { useSelector, useDispatch, } from "react-redux";
import { getAccount, searchAccounts, getAccounts, createAccount } from "../../redux/Account/action";
import { useParams, useHistory } from "react-router-dom";


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


const Account = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const handleEdit = () => {
    //if (
      //window.confirm(
        //`Are you sure you want to delete:\r ${selectedRows.map(
          //(r) => r.name
        //)}?`
    //  )
   // ) {
     //setToggleCleared(!toggleCleared);
     // setData(differenceBy(data, selectedRows, "name"));
     // toast.success("Successfully Deleted !");


    //}
  };




  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  
  const accounts = useSelector(state => state.Account.accounts);
  const pageNumber = useSelector(state => state.Account.pageNumber);
  const totalResult = useSelector(state => state.Account.totalResult);
  const pageSize = useSelector(state => state.Account.pageSize);
  const totalPages = useSelector(state => state.Account.totalPages);
  const loading =  useSelector(state => state.Account.loading);


  const editAccount = (account) => {
    dispatch(getAccount(account.id));
    history.push(`${process.env.PUBLIC_URL}/account/${account.id}`);
  };
  
  const handleClick = (e, pageNumber, pagesize) => {
   
    console.log(pageNumber)
    console.log(pagesize)
     e.preventDefault()
     dispatch(getAccounts(pageNumber, pagesize))
    

    }
  
  const createPagination= (n, pageSize, pageNumber) => {
    var elements = [];
    for(var i =1; i <= n; i++){
      var p = i;
        elements.push(<PaginationItem key={p} active= {i=== pageNumber}>
         
          <PaginationLink onClick={(e) => handleClick(e, p, pageSize)} href="#" >{p}</PaginationLink>
        </PaginationItem>);
    }
    return elements;
}
  //console.log(accountInits)
   //var accounts = useState(accountInits);
   console.log(accounts)
  //const [search, setSearch] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
       
      //setAccount({ ...account, [name]: value })
     // console.log(account);

     dispatch(searchAccounts(value));
     //setAccounts(accountsInit);
    // setSearch(value);
     console.log(accounts)

    }
  

  React.useEffect(() => {
  //  console.log(accounts)
   // setAccounts([0])
 //  console.log(search)
   //if(search ===''){
  dispatch(getAccounts())
    //else{
  // dispatch(searchAccounts(search));

    //}
   // setAccounts(accountsInit)
    
  }, [])



 // const handleRowSelected = useCallback((state) => {
   // setSelectedRows(state.selectedRows);
  //}, [accounts]);
 

 

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
                            onChange={handleInputChange}
                            name = "search"
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
                      <th scope="col">Status</th>
                      
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
                      
                      <th scope="col">CreatedOn</th>
                      <th scope="col">CreatedBy</th>
                      <th scope="col"></th>
                    </tr>
                  </thead><tbody >


                  {
                  
                  
                  (loading == true) ? (<tr><td >
                  <div className="loader-box text-center">
                    <div className="loader-19"></div>
                  </div>
                </td></tr>):
                  
                  ( accounts.length >0) ? accounts.map((account, index) =>(
                  <tr style={{
                    hover:{background:'black'},
                    cursor:'pointer',
                    
                  }} onDoubleClick={()=> editAccount(account)} key={account.id}>
                  <td >{account.name}</td>
                  <td>{account.systemStatus}</td>
                  
                  <td>{account.phone1}</td>
                  <td>{account.email}</td>
                  
                  <td>{account.createdOn}</td>
                  <td>{account.owner}</td>
                  <td>

        <span onClick= {()=>handleEdit(account.id)} >
          <i
            className="fa fa-pencil"
            style={{
              width: 35,
              fontSize: 16,
              cursor:'pointer',
              color: "rgb(40, 167, 69)",
            }}
          ></i>
          
          </span>


                        </td>
                </tr>
                  )) :  <tr>
                  <td>
                        <div className="text-center">No records found</div></td>
                </tr>
                  }
 
                 </tbody>
                </Table>
                {(accounts.length >0)? (<Pagination className=" mb-2" aria-label="...">
                  <ul className="pagination pagination-primary ">
                
                    <PaginationItem  disabled = {pageNumber ===1} >
                      <PaginationLink onClick={e => handleClick(e, pageNumber-1, pageSize)} href="#">Previous</PaginationLink></PaginationItem>
                     

                  {[...Array(totalPages)].map((page, i) => 
                <PaginationItem active={i+1 === pageNumber} key={i}>
                <PaginationLink onClick={e => handleClick(e, i+1,pageSize )} href="#">
                  {i + 1}
                </PaginationLink>
               </PaginationItem>
            )}
                      <PaginationItem disabled = {pageNumber ===(totalResult/pageSize) || totalResult <= pageSize}>
                      <PaginationLink onClick={e => handleClick(e, pageNumber+1, pageSize)}  href="#">Next</PaginationLink>
                    </PaginationItem>
                  </ul>
                </Pagination>):(<p></p>)}
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
