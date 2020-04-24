import React, { Component } from 'react';

import { Row, Col, CardBody, Card, Alert } from "reactstrap";

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// actions
import { loginUser,apiError } from '../../store/actions';

// import images
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/brands/logo.jpg";

class Login extends Component {


    constructor(props) {
        super(props);
        this.state = {}

        // handleValidSubmit
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
    }

    // handleValidSubmit
    handleValidSubmit(event, values) {
        this.props.loginUser(values, this.props.history);
        alert(values.email);
        alert(values.password);
        alert(this.props.history);
    }

    componentDidMount()
    {
        this.props.apiError("");
    }

    render() {

const logoImage ={
width: "200px",
marginLeft: "40px",
borderRadius: "0%",
roundedCircle: '0%',
marginTop: "40px",
};

const cardBody = {
};

const formField = {
marginTop: "80px",
};

const cardAllign = {
marginTop: "20px",
};
        return (
            <React.Fragment>

                <div className="">
                    <div className="container" style={cardAllign}>
                        <Row className="">
                        <Col md={4} lg={4} xl={4}>

                        <h3>DirectusHR Intro</h3>


                        </Col>


                        <Col md={4} lg={4} xl={4}>

                        <h3> Why Use DirectusHR Recruitment </h3>
                        <br />
                        <h3>Benefits 1 </h3><h3>Benefits 1 </h3>

                        </Col>

                            <Col md={6} lg={6} xl={4}>
                                <Card className="overflow-hidden">
                                   {/* <div className="bg-soft-primary">
                                        <Row>
                                            <Col className="col-7">
                                                <div className="text-primary p-4">
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    <p>Sign in to continue.</p>
                                                </div>
                                            </Col>
                                            <Col className="col-5 align-self-end">
                                                <img src={profile} alt="" className="img-fluid" />
                                            </Col>
                                        </Row>
                                    </div> */}
                                    <CardBody className="pt-0" style={cardBody}>
                                        <div>

                                            <Link to="/">
                                                <div className="avatar-md profile-user-wid mb-4">
                                                    <span className="">
                                                        <img src={logo} alt="" style={logoImage}/>
                                                    </span>
                                                </div>
                                            </Link>


                                        </div>
                                        <div className="p-2" style={formField}>

                                            <AvForm className="form-horizontal" onValidSubmit={this.handleValidSubmit}>

                                                {this.props.error && this.props.error ? <Alert color="danger">{this.props.error}</Alert> : null}

                                                <div className="form-group">
                                                    <AvField name="email" label="Email" value="admin@directushr.com" className="form-control" placeholder="Enter email" type="email" required />
                                                </div>

                                                <div className="form-group">
                                                    <AvField name="password" label="Password" value="123456" type="password" required placeholder="Enter Password" />
                                                </div>

                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                                </div>

                                                <div className="mt-3">
                                                    <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Log In</button>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <Link to="/forget-password" className="text-muted"><i className="mdi mdi-lock mr-1"></i> Forgot your password?</Link>
                                                </div>
                                            </AvForm>

                                                 <div className="mt-4 text-center">
                                                    <Link to="/candidate_add_edit_form" className="text-muted"><i className="mdi mdi-account mr-1"></i> Request For Company Registration</Link>
                                                </div>

                                                  <div className="mt-4 text-center">
                                                    <Link to="/candidate_add_edit_form" className="text-muted"><i className="mdi mdi-account mr-1"></i> Request For Recruiter Registration</Link>
                                                </div>

                                                 <div className="mt-4 text-center">
                                                    <Link to="/candidate_add_edit_form" className=""><i className="mdi mdi-account mr-1"></i> Register As Candidate</Link>
                                                </div>


                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center">
                                    <p>Create Account - <Link to="register" className="font-weight-medium text-primary"> Signup now </Link> </p>
                                    <p>© {new Date().getFullYear()} DirectUs HR. Crafted with <i className="mdi mdi-heart text-danger"></i> by Farintsol.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { error } = state.Login;
    return { error };
}

export default withRouter(connect(mapStatetoProps, { loginUser,apiError })(Login));

