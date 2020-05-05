import React, { Component } from "react";

import { Row, Col, Card, CardBody, FormGroup, Button, CardTitle, CardSubtitle } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import CountryContactNumber from '../OtherComponents/contact_number';
import AddressHome from '../OtherComponents/address_home';
import IndustryFunction from '../OtherComponents/industry_function';

class ClientRelationshipTeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    first_name: "",
    last_name: "",
    mobile: "",
    country_code_mobile: "",
    email: "",
    user_role: null,
    is_client: false,
    is_inhouse_rec: false,
    is_outside_rec: false,
    is_client_res_manager: false,
    is_candidate: false,
    };
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

const overflowBody = {
overflowX: "hidden",
};


    return (
      <React.Fragment>
                 <Row>
            <Col sm={0} md={3} lg={3}>
            </Col>
             <Col sm={12} md={6}lg={6}>
             <center>

<h3 style={{padding: "35px",}}>Client Relationship Team Member Add / Edit Page </h3>
 </center>
             </Col>
            </Row>
        <div className="">

          <div className="container-fluid" style={overflowBody}>


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
          <p style={{ fontWeight: "500", }}> Team Member Name</p>


                              <AvField
                    name="member_name"
                    type="text"
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
          <p style={{ fontWeight: "500", }}> Relation With DirectusHR</p>

             <select class="form-control" value={this.state.value} onChange={this.handleChange}>
                <option value="Full Time - On Roll"> Full Time - On Roll </option>
                <option value="Part Time - On Roll">Part Time - On Roll </option>
                <option value="Work From Home - On Roll">  Work From Home - On Roll</option>
                <option value="Full Time - Off Rolls">  Full Time - Off Rolls</option>
                <option value="Part Time - Off Rolls"> Part Time - Off Rolls </option>
                <option value="Work From Home - Off Rolls">Work From Home - Off Rolls </option>
                <option value="Internship">Internship </option>
                <option value="Short Term Contract"> Short Term Contract</option>

                     </select>
          </Col>

          </Row>



                                        <Row>

          <Col sm={6} md={6} lg={6}>
          <p style={{ fontWeight: "500", }}> Reporting Manager</p>

             <select class="form-control" value={this.state.value} onChange={this.handleChange}>
                <option value="a"> Member a </option>
                <option value="b"> Member b </option>

                     </select>
          </Col>

          <Col sm={6} md={6} lg={6}>

          </Col>

          </Row>

        <Row>
                    <Col sm={12} md={12} lg={12}>
                              <p style={{ fontWeight: "500", }}></p>

                                          <AvField
                        name="member_office_location"
                        className="form-control"
                        label="Team Member Office Location"
                        type="textarea"
                        errorMessage="Invalid Email"
                        validate={{
                          required: { value: true }
                        }}
                      />

          </Col>

          </Row>


                                                  <Row>

          <Col sm={6} md={6} lg={6}>

                                        <AvField
                    name="office_pincode"
                    type="number"
                    label="Team Member Office Pincode"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                    maxLength: { value: 6, errorMessage: "Max 6 chars." },
                     pattern: {
                            value: "^[0-9]+$",
                          }
                     }}
                    />

          </Col>

          <Col sm={6} md={6} lg={6}>
                                        <AvField
                    name="bank_name"
                    type="text"
                    label="Bank Name"
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

                                                      <Row>

          <Col sm={6} md={6} lg={6}>

                                        <AvField
                    name="acc_number"
                    type="text"
                    label="Account Number"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                    maxLength: { value: 20, errorMessage: "Max 20 chars." },
                     pattern: {
                            value: "^[0-9]+$",
                          }
                     }}
                    />

          </Col>

          <Col sm={6} md={6} lg={6}>
                                        <AvField
                    name="ifsc_code"
                    type="text"
                    label="IFSC Code"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                     }}
                    />
          </Col>

          </Row>


                                                                <Row>

          <Col sm={6} md={6} lg={6}>

                                        <AvField
                    name="pan_number"
                    type="text"
                    label="PAN Number"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                     }}
                    />

          </Col>

          <Col sm={6} md={6} lg={6}>
                                        <AvField
                    name="contact_number"
                    type="text"
                    label="Contact Number"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                    maxLength: { value: 10, errorMessage: "Max 10 chars." },
                     pattern: {
                            value: "^[0-9]+$",
                          }
                     }}
                    />
          </Col>

          </Row>

                                                                          <Row>

          <Col sm={6} md={6} lg={6}>

                                        <AvField
                    name="dhr_email_id"
                    type="text"
                    label="DirectusHR Email ID"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                    email: { value: true }
                     }}
                    />

          </Col>

          <Col sm={6} md={6} lg={6}>
                                        <AvField
                    name="personal_email_id"
                    type="text"
                    label="Personal Email ID"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                    email: { value: true }
                     }}
                    />
          </Col>

          </Row>

           <Row>

          <Col sm={6} md={6} lg={6}>

                                        <AvField
                    name="emergency_contact_name"
                    type="text"
                    label="Emergency Contact Name"
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
                    name="emergency_contact_number"
                    type="text"
                    label="Emergency Contact Number"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                    maxLength: { value: 10, errorMessage: "Max 10 chars." },
                     pattern: {
                            value: "^[0-9]+$",
                          }
                     }}
                    />
          </Col>

          </Row>

                     <Row>

          <Col sm={6} md={6} lg={6}>

                                        <AvField
                    name="total_experience"
                    type="text"
                    label="Total Experience"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                    maxLength: { value: 2, errorMessage: "Max 2 chars." },
                     pattern: {
                            value: "^[0-9]+$",
                          }
                     }}
                    />

          </Col>

          <Col sm={6} md={6} lg={6}>
                                        <AvField
                    name="fixed_salary"
                    type="text"
                    label="Fixed Salary"
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                    maxLength: { value: 7, errorMessage: "Max 7 chars." },
                     pattern: {
                            value: "^[0-9]+$",
                          }
                     }}
                    />
          </Col>

          </Row>

                  <Row>
                    <Col sm={12} md={12} lg={12}>

                                          <AvField
                        name="member_home_location"
                        className="form-control"
                        label="Team Member Home Location"
                        type="textarea"
                        errorMessage="Above field is Required."
                        validate={{
                          required: { value: true }
                        }}
                      />

          </Col>

          </Row>

                               <Row>

          <Col sm={6} md={6} lg={6}>

                                        <AvField
                    name="member_home_pincode"
                    type="number"
                    label="Team Member Home Pincode"
                    errorMessage="Above field is Required."
                     validate={{
                    required: {value:true},
                    maxLength: { value: 6, errorMessage: "Max 6 chars." },
                     pattern: {
                            value: "^[0-9]+$",
                          }
                     }}
                    />

          </Col>


          </Row>





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

export default ClientRelationshipTeamForm;
