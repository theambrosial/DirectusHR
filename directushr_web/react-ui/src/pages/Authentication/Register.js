import React, { Component } from "react";
import { Row, Col, CardBody, Card, Alert } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import { registerUser,apiError,registerUserFailed } from "../../store/actions";

// Redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import images
import profileImg from "../../assets/images/profile-img.png";
import logoImg from "../../assets/images/brands/logo.jpg";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  // handleValidSubmit
  handleValidSubmit(event, values) {
    this.props.registerUser(values);
  }

    componentDidMount()
    {
        this.props.apiError("");
        this.props.registerUserFailed("");
    }

  render() {
  const logoImage ={
width: "200px",
marginLeft: "20%",
borderRadius: "0%",
roundedCircle: '0%',
marginTop: "40px",
};
const cardAllign = {
marginTop: "20px",
};

const formField = {
marginTop: "80px",
};
    return (
      <React.Fragment>

        <div className="">
          <div className="container" style={cardAllign}>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="overflow-hidden">
                  <div className="bg-soft-primary">
                    <Row>
                      <Col className="col-7">
                        <div className="text-primary p-4">
                          <h5 className="text-primary"> Register</h5>

                        </div>
                      </Col>
                      <Col className="col-5 align-self-end">
                        <img src={profileImg} alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>
                  <CardBody className="pt-0">
                    <div>
                                            <Link to="/">
                                                <div className="">
                                                    <span className="">
                                                        <img src={logoImg} alt="" style={logoImage}/>
                                                    </span>
                                                </div>
                                            </Link>
                    </div>
                    <div className="p-2">
                      <AvForm
                        className="form-horizontal"
                        onValidSubmit={this.handleValidSubmit}
                      >
                        {this.props.user && this.props.user ? (
                          <Alert color="success">
                            Register User Successfully
                          </Alert>
                        ) : null}
                        {this.props.registrationError &&
                          this.props.registrationError ? (
                            <Alert color="danger">
                              {this.props.registrationError}
                            </Alert>
                          ) : null}

                        <div className="form-group">
                          <AvField
                            name="email"
                            label="Email"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <AvField
                            name="username"
                            label="Username"
                            type="text"
                            required
                            placeholder="Enter username"
                          />
                        </div>
                        <div className="form-group">
                          <AvField
                            name="password"
                            label="Password"
                            type="password"
                            required
                            placeholder="Enter Password"
                          />
                        </div>

                        <div className="mt-4">
                          <button
                            className="btn btn-primary btn-block waves-effect waves-light"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>

                        <div   className="mt-4 text-center">

                        </div>
                      </AvForm>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    Already have an account ?{" "}
                    <Link
                      to="/login"
                      className="font-weight-medium text-primary"
                    >
                      {" "}
                      Login
                    </Link>{" "}
                  </p>
                  <p>
                    © {new Date().getFullYear()} DirectUs HR. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by Farintsol
                  </p>
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
  const { user, registrationError, loading } = state.Account;
  return { user, registrationError, loading };
};

export default connect(mapStatetoProps, { registerUser,apiError,registerUserFailed })(Register);
