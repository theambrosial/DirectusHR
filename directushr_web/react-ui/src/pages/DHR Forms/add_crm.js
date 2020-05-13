import React, { Component } from 'react';
import { Button, Row, Col, Container, Label } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

export default class add_crm extends Component {
    constructor(props){
        super(props);
        this.state = {
            all_managers            : [],
            relation_dhr            : "full time on roll",
            manager                 : "",
            member_name             : "",
            address_line            : "",
            pincode                 : "",
            bank_name               : "",
            account_number          : "",
            ifsc_code               : "",
            pan_number              : "",
            mobile                  : "",
            email                   : "",
            personal_email          : "",
            emergency_contact_name  : "",
            emergency_contact_number: "",
            total_experience        : "",
            fixed_salary            : "",
            member_home_location    : "",
            home_pincode            : ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelectChange = (e) => {
        return this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        const body = this.state;
        const user_id = {}
        const office_location = {}
        const home_location = {}
        const taxation_details_id = {}
        delete body["all_managers"]
        
        const { member_name, mobile, email, manager, ...remainingBody } = body;

        const reporting_manager_id = manager

        if(member_name.split(" ").length > 1){
            user_id["first_name"] = member_name.split(" ")[0]
            user_id["last_name"] = member_name.split(" ")[1]
        }else{
            user_id["first_name"] = member_name
        }

        user_id["mobile"] = mobile
        user_id["email"] = email

        // making object for office_location
        const { address_line, pincode, ...left_body } = remainingBody;

        office_location["address_line"] = address_line
        office_location["zip_code"] = pincode

        // making object for home_location
        const { member_home_location, home_pincode, ...last_body } = left_body;

        if(member_home_location !== "") home_location["address_line"] = member_home_location
        if(home_pincode !== "") home_location["zip_code"] = home_pincode
        

        // making object for taxation_details_id
        const { bank_name, account_number, ifsc_code, pan_number, ...last } = last_body;
        taxation_details_id["bank_name"] = bank_name
        taxation_details_id["account_number"] = account_number
        taxation_details_id["ifsc_code"] = ifsc_code
        taxation_details_id["pan_number"] = pan_number

        // check for blank values in last
        if(last["total_experience"] === ""){
            delete last["total_experience"]
        }else if(last["fixes_salary"] === ""){
            delete last["fixed_salary"]
        }

        return this.createCRM({ user_id, reporting_manager_id, office_location, home_location, taxation_details_id, ...last})

    }

    createCRM = (data) => {
        const endpoint = "/crm/create/"
        const lookUpOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token c18b9261150513ceb2d7960aee869ba48165aac5"
            },
            body: JSON.stringify(data)
        }        

        fetch(endpoint, lookUpOptions)
        .then(res => {
            if(res.status > 400){
                return console.log(res.json())
            }else{
                return console.log(res.json())
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    load_managers = () => {
        const lookups = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token c18b9261150513ceb2d7960aee869ba48165aac5"
            }
        }

        fetch("/crm/list/", lookups)
        .then(res => {
            if(res.status > 400){
                return console.log("Something went wrong")
            }
            return res.json()
        })
        .then(res => {
            console.log("response list", res)
            return this.setState({
                all_managers : res
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.load_managers()
    }

    render() {
        const relations = [
            { value: "Full Time - On Roll", label: "Full Time - On Roll"},
            { value: "Part Time - On Roll", label: "Part Time - On Roll"},
            { value: "Work From Home - On Roll", label: "Work From Home - On Roll"},
            { value: "Full Time - Off Rolls", label: "Full Time - Off Rolls"},
            { value: "Part Time - Off Rolls", label: "Part Time - Off Rolls"},
            { value: "Work From Home - Off Rolls", label: "Work From Home - Off Rolls"},
            { value: "Internship", label: "Internship"},
            { value: "Short Term Contract", label: "Short Term Contract"}
        ]

        const { 
            relation_dhr, 
            manager, 
            member_name, 
            address_line, 
            pincode, 
            bank_name, 
            account_number, 
            ifsc_code, 
            pan_number, 
            mobile, 
            email, 
            personal_email,
            emergency_contact_name,
            emergency_contact_number,
            total_experience,
            fixed_salary,
            home_location,
            home_pincode,
            all_managers
        } = this.state

        return (
            <Container>
                <center>
                    <h1 className="p-5 text-primary">Add Client Relationship Manager (CRM)</h1>
                </center>
                <Row>
                    <Col className="bg-white p-5 mb-4" sm={12} md={{ size: 10, offset: 1 }}>
                        <h6 className='pb-4'>Please Enter Appropriate Details Below</h6>
                        <div>
                            <AvForm onSubmit={this.handleSubmit}>
                                <Row form>
                                    <Col md={6}>
                                        <AvField 
                                            name="member_name"
                                            label="Team Member Name"
                                            type="text"
                                            placeholder="Name of Team Member"
                                            errorMessage="Invalid Member Name"
                                            validate={{
                                                required: true,
                                                pattern: {
                                                    value: "^[a-zA-Z ]*$",
                                                    errorMessage: "Only alphabets and space is allowed."
                                                }
                                            }}
                                            value={member_name}
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <AvField
                                            type="select" 
                                            name="relation_dhr"
                                            label="Relation With Farintsol"
                                            onChange={this.handleSelectChange}
                                            helpMessage="Relation of the member with Farintsol"
                                            required
                                        >
                                            {
                                                relations.map( elem => <option key={elem.value} value={elem.value}>{elem.label}</option>)
                                            }
                                        </AvField>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={6}>
                                        <AvField
                                            type="select" 
                                            name="manager"
                                            label="Reporting Manager"
                                            onChange={this.handleSelectChange}
                                            helpMessage="Reporting manager in Farintsol"
                                            required
                                        >
                                            {
                                                all_managers.map( elem => <option key={elem.id} value={elem.id}>{elem.name}</option>)
                                            }
                                        </AvField>
                                    </Col>
                                    <Col md={5}>
                                        <AvField
                                            name="pincode"
                                            label="Team Member Office Pincode"
                                            type="text"
                                            minLength="6"
                                            maxLength="6"
                                            onChange={this.handleChange}
                                            value={pincode}
                                            errorMessage="Enter a valid pincode"
                                            required
                                            placeholder="Pincode"
                                            validate={{
                                                number: true
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={12}>
                                        <AvField 
                                            name="address_line"
                                            label="Team Member Office Location"
                                            type="text"
                                            onChange={this.handleChange}
                                            value={address_line}
                                            placeholder="Office Address"
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={8}>
                                        <AvField 
                                            type="text"
                                            name="bank_name"
                                            label="Bank Name"
                                            value={bank_name}
                                            placeholder="Bank Name"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={8}>
                                        <AvField 
                                            name="account_number"
                                            label="Account Number"
                                            type="text"
                                            value={account_number}
                                            onChange={this.handleChange}
                                            placeholder="Account Number"
                                            maxLength="20"
                                            required
                                            validate={{
                                                number: true
                                            }}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <AvField 
                                            name="ifsc_code"
                                            label="IFSC Code"
                                            type="text"
                                            value={ifsc_code}
                                            onChange={this.handleChange}
                                            placeholder="IFSC Code"
                                            required
                                            validate={{
                                                pattern: { value: "[A-Z0-9]" }
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md="6">
                                        <AvField 
                                            type="text"
                                            label="PAN Number"
                                            name="pan_number"
                                            value={pan_number}
                                            placeholder="PAN"
                                            onChange={this.handleChange}
                                            required
                                            maxLength="10"
                                            validate={{
                                                pattern:{ value:"[A-Z]{5}[0-9]{4}[A-Z]{1}" },
                                            }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <AvField 
                                            type="text"
                                            label="Contact Number"
                                            name="mobile"
                                            value={mobile}
                                            placeholder="Contact No."
                                            onChange={this.handleChange}
                                            maxLength="10"
                                            required
                                            validate={{
                                                number: true
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md="6">
                                        <AvField 
                                            label="Farintsol Email ID"
                                            name="email"
                                            type="email"
                                            value={email}
                                            placeholder="Professional Email ID"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </Col>
                                    <Col md="6">
                                        <AvField 
                                            label="Personal Email ID"
                                            name="personal_email"
                                            type="email"
                                            value={personal_email}
                                            placeholder="Personal Email ID"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md="6">
                                        <AvField 
                                            name="emergency_contact_name"
                                            label="Emergency Contact Name"
                                            type="text"
                                            value={emergency_contact_name}
                                            placeholder="Emergency Contact name"
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </Col>
                                    <Col md="6">
                                        <AvField 
                                            type="text"
                                            label="Emergency Contact Number"
                                            name="emergency_contact_number"
                                            value={emergency_contact_number}
                                            placeholder="Emergency Contact No."
                                            onChange={this.handleChange}
                                            maxLength="10"
                                            required
                                            validate={{
                                                number: true
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={3}>
                                        <AvField 
                                            name="total_experience"
                                            label="Total experience"
                                            type="number"
                                            value={total_experience}
                                            placeholder="Total Experience"
                                            onChange={this.handleChange}
                                            errorMessage="Enter from 0 to 50 only"
                                            max="50"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <AvField 
                                            label="Fixed Salary"
                                            name="fixed_salary"
                                            type="number"
                                            value={fixed_salary}
                                            placeholder="Salary"
                                            onChange={this.handleChange}
                                            errorMessage="Enter from 0 to 50,00,000 only"
                                            max="5000000"
                                        />
                                    </Col>
                                    <Col md={5}>
                                        <AvField
                                            name="home_pincode"
                                            label="Team Member Home Pincode"
                                            type="text"
                                            minLength="6"
                                            maxLength="6"
                                            onChange={this.handleChange}
                                            value={home_pincode}
                                            errorMessage="Enter a valid pincode"
                                            placeholder="Pincode"
                                            validate={{
                                                number: true
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md="12">
                                        <AvField 
                                            name="home_location"
                                            label="Team Member Home Location"
                                            type="text"
                                            onChange={this.handleChange}
                                            value={home_location}
                                            placeholder="Home Address"
                                        />
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <Button 
                                        type="submit" 
                                        outline  
                                        color="btn btn-success"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </AvForm> 
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}