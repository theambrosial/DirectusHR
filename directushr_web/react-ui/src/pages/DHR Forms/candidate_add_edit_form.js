import React, { Component } from "react";

import { Row, Col, Card, CardBody, FormGroup, Button, CardTitle, CardSubtitle } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import CountryContactNumber from '../OtherComponents/contact_number';
import AddressHome from '../OtherComponents/address_home';
import IndustryFunction from '../OtherComponents/industry_function';

class candidate_add_edit_form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }



  render() {



    return (
      <React.Fragment>
                 <Row>
            <Col sm={0} md={3} lg={3}>
            </Col>
             <Col sm={12} md={6}lg={6}>
             <center>

<h1 style={{padding: "35px",}}>Upload CV </h1>
 </center>
             </Col>
            </Row>
        <div className="">

          <div className="container-fluid">


            <Row>
            <Col sm={0} md={3} lg={3}>
            </Col>
              <Col sm={12} md={6}lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle style={{paddingBottom: "20px",}}>Please Enter Appropriate Details Below</CardTitle>




                    <AvForm>
                              <Row>

          <Col sm={6} md={6} lg={6}>
                              <AvField
                    name="fname"
                    type="text"
                    label="First Name"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                     pattern: {
                            value: "^[a-zA-Z ]*$",
                            errorMessage: "Only alphabets and space is allowed."
                          }
                     }}
                    />
          </Col>

          <Col sm={6} md={6} lg={6}>
                               <AvField
                    name="lname"
                    type="text"
                    label="Last Name"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                     pattern: {
                            value: "^[a-zA-Z ]*$",
                            errorMessage: "Only alphabets and space is allowed."
                          }
                     }}
                    />
          </Col>

          </Row>

                    <CountryContactNumber />

                                          <AvField
                        name="email"
                        label="E-Mail  "
                        placeholder="Enter Valid Email"
                        type="email"
                        errorMessage="Invalid Email"
                        validate={{
                          required: { value: true },
                          email: { value: true }
                        }}
                      />

                                            <AvField
                    name="CV"
                    type="file"
                    label="Upload CV"
                    errorMessage="Please select a file."
                    validate={{
                    required: {value:true},
                     }}
                    />


<p style={{ fontWeight: "500", }}> Contact Number</p>

                              <Row>

          <Col sm={6} md={6} lg={6}>
                              <AvField
                    name="experience_years"
                    type="number"
                    errorMessage="Above field is Required."
                    placeholder="Years"
                    validate={{
                    required: {value:true},
                          pattern: {
                            value: "^[0-9]+$",
                            errorMessage: "Only numbers are allowed."
                          }
                     }}
                    />
          </Col>

          <Col sm={6} md={6} lg={6}>
                               <AvField
                    name="experience_months"
                    type="number"
                    errorMessage="Above field is Required."
                    placeholder="Months"
                    validate={{
                    required: {value:true},
                             pattern: {
                            value: "^[0-9]+$",
                            errorMessage: "Only numbers are allowed."
                          }
                     }}
                    />
          </Col>

          </Row>
                              <AvField
                    name="designation"
                    type="text"
                    label="Designation"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                     pattern: {
                            value: "^[a-zA-Z ]*$",
                            errorMessage: "Only alphabets and space is allowed."
                          }
                     }}
                    />


                    <p style={{ fontWeight: "500", }}> Curret CTC</p>

                              <Row>

          <Col sm={6} md={6} lg={6}>
                              <AvField
                    name="CTC_lakhs"
                    type="number"
                    errorMessage="Above field is Required."
                    placeholder="Lakhs"
                    validate={{
                    required: {value:true},
                          pattern: {
                            value: "^[0-9]+$",
                            errorMessage: "Only numbers are allowed."
                          }
                     }}
                    />
          </Col>

          <Col sm={6} md={6} lg={6}>
                               <AvField
                    name="CTC_thousands"
                    type="number"
                    errorMessage="Above field is Required."
                    placeholder="Thousands"
                    validate={{
                    required: {value:true},
                             pattern: {
                            value: "^[0-9]+$",
                            errorMessage: "Only numbers are allowed."
                          }
                     }}
                    />
          </Col>

          </Row>

<AddressHome />

<p style={{ marginTop:"10px;" }}></p>

                              <AvField

                    name="reasone_change"
                    type="text"
                    label="Reasone for Change"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                     }}
                    />

<IndustryFunction />

<center>
<Button color="success" outline className="waves-effect waves-light" style={{marginTop: "20px"}}>Submit </Button>
</center>
                    </AvForm>
                  </CardBody>
                </Card>
              </Col>
            </Row>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default candidate_add_edit_form;
