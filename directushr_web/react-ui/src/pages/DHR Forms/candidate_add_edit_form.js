import React, { Component } from "react";

import { Row, Col, Card, CardBody, FormGroup, Button, CardTitle, CardSubtitle } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import CountryContactNumber from '../OtherComponents/contact_number';
import AddressHome from '../OtherComponents/address_home';
import IndustryFunction from '../OtherComponents/industry_function';
import cookie from 'react-cookies'

class candidate_add_edit_form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
   this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


   createCandidate(data){
      const endpoint = '/api/add_candidate/'
      const csrfToken = cookie.load('csrftoken')
      const token = cookie.load('token')
      if (csrfToken !== undefined) {
          let lookupOptions = {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrfToken,
                  'token': token
              },
              body: JSON.stringify(data),
              credentials: 'include'
          }

          fetch(endpoint, lookupOptions)
          .then(function(response){
              return response.json()
          }).then(function(responseData){
              console.log(responseData)

              if(responseData.id){
                  alert("Thank You for Interest, DirectusHR Team Will Get in Touch with you");
              }else{
              alert("Something Went Wrong Try Again");
              }
          }).catch(function(error){
              console.log("error", error)
              alert("An error occured, please try again later.")
          })

      }

  }

   createCandidateUser(data){

      const endpoint = '/api/registration_request/'
      const csrfToken = cookie.load('csrftoken')
        let thisComp = this
      if (csrfToken !== undefined) {
          let lookupOptions = {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrfToken,
              },
              body: JSON.stringify(data),
              credentials: 'include'
          }

          fetch(endpoint, lookupOptions)
          .then(function(response){
              return response.json()
          }).then(function(responseData){
               if(responseData.first_name){
                    data["user_id"] = responseData.id;
                    let data2 = data
                    thisComp.createCandidate(data2);
              }else{

                  let err="Attention:";
                  if(responseData.mobile[0]){
                        err=err+"\nUser With This Concat No. Is Already Registered With Us";
                  }
                  if(responseData.email[0]){
                        err=err+"\nUser With This Email ID Is Already Registered With Us";
                  }
                  alert(err);
              }
          }).catch(function(error){
              console.log("error", error)
              alert("An error occured, please try again later.")
          })

      }

  }




  handleInputChange(event) {
     event.persist()
        let key = event.target.name
        let value = event.target.value
        this.setState({
            [key]: value
        })
  }

    onChange(key, value) {
        this.setState({
            [key]: value
        })
  }


  handleSubmit(event) {
    event.persist()

 if ("country_code_mobile" in this.state){
     if(this.state["country_code_mobile"]===''){
        alert("please select valid country code")
     }else{

         if ("country" in this.state){
             if(this.state["country"]===''){
                alert("please select valid Country")
             }else{
                 this.setState({
                ['user_role']: 'Candidate',
                ['is_candidate']: true,
                })
             let data = this.state
             this.createCandidateUser(data)

                }
             }else{
                alert("please select valid Country")
             }


     }

}else{
alert("please select valid country code")
}

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
              <Col sm={12} md={6} lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle style={{paddingBottom: "20px",}}>Please Enter Appropriate Details Below</CardTitle>


<AvForm className="form-horizontal" onValidSubmit={this.handleSubmit}>

                              <Row>

          <Col sm={6} md={6} lg={6}>
                              <AvField
                    name="first_name"
                    type="text"
                    label="First Name"
                    errorMessage="Above field is Required."
                    onChange={this.handleInputChange}
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
                    name="last_name"
                    type="text"
                    label="Last Name"
                    onChange={this.handleInputChange}
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

                    <CountryContactNumber onChange={this.onChange.bind(this)} />

                                          <AvField
                        name="email"
                        label="E-Mail  "
                        placeholder="Enter Valid Email"
                        type="email"
                        onChange={this.handleInputChange}
                        errorMessage="Invalid Email"
                        validate={{
                          required: { value: true },
                          email: { value: true }
                        }}
                      />

                                            <AvField
                    name="candidate_cv"
                    type="file"
                    label="Upload CV"

                    errorMessage="Please select a file."
                    validate={{
                    required: {value:true},
                     }}
                    />


<p style={{ fontWeight: "500", }}> Total Experience</p>

                              <Row>

          <Col sm={6} md={6} lg={6}>
                              <AvField
                    name="total_experience_years"
                    type="number"
                    errorMessage="Above field is Required."
                    placeholder="Years"
                    onChange={this.handleInputChange}
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
                    name="total_experience_month"
                    type="number"
                    errorMessage="Above field is Required."
                    placeholder="Months"
                    onChange={this.handleInputChange}
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
                    name="current_designation"
                    type="text"
                    label="Designation"
                    errorMessage="Above field is Required."
                    onChange={this.handleInputChange}
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
                    name="current_fixed_salary_lakhs"
                    type="number"
                    errorMessage="Above field is Required."
                    placeholder="Lakhs"
                    onChange={this.handleInputChange}
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
                    name="current_fixed_salary_thousand"
                    type="number"
                    errorMessage="Above field is Required."
                    placeholder="Thousands"
                    onChange={this.handleInputChange}
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

<AddressHome onChange={this.onChange.bind(this)} />

<p style={{ marginTop:"10px" }}></p>

                              <AvField

                    name="reason_for_change"
                    type="text"
                    label="Reasone for Change"
                    onChange={this.handleInputChange}
                    errorMessage="Above field is Required."
                    validate={{
                    required: {value:true},
                     }}
                    />

<IndustryFunction onChange={this.onChange.bind(this)} />

<center>
<Button color="success" type="submit" outline className="waves-effect waves-light" style={{marginTop: "20px"}}>Submit </Button>
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
