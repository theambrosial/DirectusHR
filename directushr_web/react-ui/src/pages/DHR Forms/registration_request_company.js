import React, { Component } from "react";

import { Row, Col, Card, CardBody, FormGroup, Button, CardTitle, CardSubtitle } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { withRouter, Link } from 'react-router-dom';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import CountryContactNumber from '../OtherComponents/contact_number';
import AddressHome from '../OtherComponents/address_home';
import IndustryFunction from '../OtherComponents/industry_function';
// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/brands/logo.jpg";

import ClientRecruiterRequest from '../OtherComponents/client_recruiter_request';

class RegistrationRequest extends Component {
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

    event.preventDefault();
  }



  render() {

const overflowBody = {
overflowX: "hidden",
};

const logoImage ={
marginTop: "20px",
};

const cardBody ={
marginTop: "50px",
};




    return (
      <React.Fragment>
 <div className="">
        </div>
        <div className="" style={cardBody}>
          <div className="container">
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="overflow-hidden">
                  <div className="bg-soft-primary">
                    <Row>
                      <Col className="col-7">
                        <div className="text-primary p-4">
                          <h5 className="text-primary">Welcome to DirectUs HR!</h5>
                          <p>Please Fill Below Form For Registration Request.</p>
                        </div>
                      </Col>
                      <Col className="col-5 align-self-end">
                        <img src={profile} alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>
                  <CardBody className="pt-0">
                    <div>

                                <Link to="/">
                                    <div className="">
                                        <span className="">
                                        <center>

                                            <img src={logo} alt="" style={logoImage}/>
                                        </center>
                                        </span>
                                    </div>
                                </Link>

                    </div>
                    <div className="p-2">

                      <ClientRecruiterRequest user_role = 'Client' />
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">

                </div>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RegistrationRequest;
