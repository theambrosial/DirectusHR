import React, { Component } from "react";

import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm, AvField } from "availity-reactstrap-validation";

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import profileImg from "../../assets/images/profile-img.png";

class IndustryFunction extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

              handleInputChange(event) {
     event.persist()
        let key = event.target.name
        let value = event.target.value
        this.props.onChange(key, value);
  }

    render() {
        return (
            <React.Fragment>


<p style={{ fontWeight: "500", }}> Select Industry</p>

          <Row>

          <Col sm={12} md={12} lg={12}>

          <select className="form-control" name="intrested_industries" onChange={this.handleInputChange.bind(this)}>
     <option value="Select Industry">Select Industry</option>
<option value="IT-Software / Software Services">IT-Software / Software Services</option>
<option value="BPO / Call Centre / ITES">BPO / Call Centre / ITES</option>
<option value="Automobile / Auto Anciliary / Auto Components">Automobile / Auto Anciliary / Auto Components</option>
<option value="Construction / Engineering / Cement / Metals">Construction / Engineering / Cement / Metals</option>
<option value="Banking">Banking</option>
<option value="Financial Services / Broking">Financial Services / Broking</option>
<option value="Accounting / Finance">Accounting / Finance</option>
<option value="Advertising / PR / MR">Advertising / PR / MR</option>
<option value="Event Management">Event Management</option>
<option value="Agriculture / Dairy">Agriculture / Dairy</option>
<option value="Animation / Gaming">Animation / Gaming</option>
<option value="Architecture / Interior Design">Architecture / Interior Design</option>
<option value="Aviation / Aerospace Firms">Aviation / Aerospace Firms</option>
<option value="Brewery / Distillery">Brewery / Distillery</option>
<option value="Broadcasting">Broadcasting</option>
<option value="Ceramics / Sanitary ware / Tiles">Ceramics / Sanitary ware / Tiles</option>
<option value="Chemicals / PetroChemical / Plastic / Rubber">Chemicals / PetroChemical / Plastic / Rubber</option>
<option value="Consumer Electronics / Appliances / Durables">Consumer Electronics / Appliances / Durables</option>
<option value="Courier / Transportation / Freight / Warehousing">Courier / Transportation / Freight / Warehousing</option>
<option value="Education / Teaching / Training">Education / Teaching / Training</option>
<option value="Electricals / Switchgears">Electricals / Switchgears</option>
<option value="Export / Import">Export / Import</option>
<option value="Facility Management">Facility Management</option>
<option value="Fertilizers / Pesticides">Fertilizers / Pesticides</option>
<option value="FMCG / Foods / Beverage">FMCG / Foods / Beverage</option>
<option value="Food Processing">Food Processing</option>
<option value="Fresher / Trainee / Entry Level">Fresher / Trainee / Entry Level</option>
<option value="Gems / Jewellery">Gems / Jewellery</option>
<option value="Glass / Glassware">Glass / Glassware</option>
<option value="Government / Defence">Government / Defence</option>
<option value="Air Conditioning / Heat Ventilation">Air Conditioning / Heat Ventilation</option>
<option value="Industrial Products">Industrial Products</option>
<option value="Heavy Machinery">Heavy Machinery</option>
<option value="Insurance">Insurance</option>
<option value="Iron and Steel">Iron and Steel</option>
<option value="IT-Hardware &amp; Networking">IT-Hardware &amp; Networking</option>
<option value="KPO">KPO</option>
<option value="Research / Analytics">Research / Analytics</option>
<option value="Legal">Legal</option>
<option value="Media / Internet">Media / Internet</option>
<option value="Internet / Ecommerce">Internet / Ecommerce</option>
<option value="Entertainment">Entertainment</option>
<option value="Leather">Leather</option>
<option value="Medical / Healthcare / Hospitals">Medical / Healthcare / Hospitals</option>
<option value="Medical Devices / Equipments">Medical Devices / Equipments</option>
<option value="Mining / Quarrying">Mining / Quarrying</option>
<option value="NGO / Social Services / Regulators / Industry Associations">NGO / Social Services / Regulators / Industry Associations</option>
<option value="Office Equipment / Automation">Office Equipment / Automation</option>
<option value="Oil and Gas / Energy / Power / Infrastructure">Oil and Gas / Energy / Power / Infrastructure</option>
<option value="Pulp and Paper">Pulp and Paper</option>
<option value="Pharma / Biotech / Clinical Research">Pharma / Biotech / Clinical Research</option>
<option value="Printing / Packaging">Printing / Packaging</option>
<option value="Publishing">Publishing</option>
<option value="Real Estate / Property">Real Estate / Property</option>
<option value="Recruitment / Staffing">Recruitment / Staffing</option>
<option value="Retail / Wholesale">Retail / Wholesale</option>
<option value="Security / Law Enforcement">Security / Law Enforcement</option>
<option value="Semiconductors / Electronics">Semiconductors / Electronics</option>
<option value="Shipping / Marine">Shipping / Marine</option>
<option value="Shipping / Marine">Shipping / Marine</option>
<option value="Strategy / Management Consulting Firms">Strategy / Management Consulting Firms</option>
<option value="Sugar">Sugar</option>
<option value="Telecom / ISP">Telecom / ISP</option>
<option value="Textiles / Garments / Accessories">Textiles / Garments / Accessories</option>
<option value="Travel / Hotels / Restaurants / Airlines / Railways">Travel / Hotels / Restaurants / Airlines / Railways</option>
<option value="Tyres">Tyres</option>
<option value="Water Treatment / Waste Management">Water Treatment / Waste Management</option>
<option value="Wellness / Fitness / Sports / Beauty">Wellness / Fitness / Sports / Beauty</option>
<option value="Others">Others</option>
                     </select>
          </Col>

          </Row>
          <p style={{ fontWeight: "500",marginTop:"10px", }}> Select Function</p>

          <Row>

                    <Col sm={12} md={12} lg={12}>

                     <select className="form-control" name="intrested_function" onChange={this.handleInputChange.bind(this)}>
    <option value="Select Function">Select Function</option>
<option value="Sales, Retail, Business Development">Sales, Retail, Business Development</option>
<option value="IT Software - Application Programming, Maintenance">IT Software - Application Programming, Maintenance</option>
<option value="ITES, BPO, KPO, LPO, Customer Service, Operations">ITES, BPO, KPO, LPO, Customer Service, Operations</option>
<option value="Production, Manufacturing, Maintenance">Production, Manufacturing, Maintenance</option>
<option value="Accounts, Finance, Tax, Company Secretary, Audit">Accounts, Finance, Tax, Company Secretary, Audit</option>
<option value="Analytics &amp; Business Intelligence">Analytics &amp; Business Intelligence</option>
<option value="Architecture, Interior Design">Architecture, Interior Design</option>
<option value="Beauty / Fitness / Spa Services">Beauty / Fitness / Spa Services</option>
<option value="CSR &amp; Sustainability">CSR &amp; Sustainability</option>
<option value="Defence Forces, Security Services">Defence Forces, Security Services</option>
<option value="Design, Creative, User Experience">Design, Creative, User Experience</option>
<option value="Engineering Design, R&amp;D">Engineering Design, R&amp;D</option>
<option value="Executive Assistant/ Personal Assistant">Executive Assistant/ Personal Assistant</option>
<option value="Front Office">Front Office</option>
<option value="Data Entry">Data Entry</option>
<option value="Export, Import, Merchandising">Export, Import, Merchandising</option>
<option value="Fashion Designing, Merchandising">Fashion Designing, Merchandising</option>
<option value="Hotels, Restaurants">Hotels, Restaurants</option>
<option value="HR, Recruitment, IR">HR, Recruitment, IR</option>
<option value="Administration">Administration</option>
<option value="Financial Services, Investments">Financial Services, Investments</option>
<option value="Banking">Banking</option>
<option value="Insurance">Insurance</option>
<option value="IT Hardware, Technical Support, Telecom Engineering">IT Hardware, Technical Support, Telecom Engineering</option>
<option value="IT Software - Client/Server Programming">IT Software - Client/Server Programming</option>
<option value="IT Software - eCommerce, Internet Technologies">IT Software - eCommerce, Internet Technologies</option>
<option value="IT Software - Mainframe">IT Software - Mainframe</option>
<option value="IT Software - Middleware">IT Software - Middleware</option>
<option value="IT Software - Mobile">IT Software - Mobile</option>
<option value="IT Software - Other">IT Software - Other</option>
<option value="IT Software - System Programming">IT Software - System Programming</option>
<option value="IT Software - Telecom Software">IT Software - Telecom Software</option>
<option value="IT Software - DBA, Datawarehousing">IT Software - DBA, Datawarehousing</option>
<option value="IT Software - Embedded, EDA, VLSI, ASIC, Chip Design">IT Software - Embedded, EDA, VLSI, ASIC, Chip Design</option>
<option value="IT Software - ERP, CRM">IT Software - ERP, CRM</option>
<option value="IT Software - Network Administration, Security">IT Software - Network Administration, Security</option>
<option value="IT Software - QA &amp; Testing">IT Software - QA &amp; Testing</option>
<option value="IT Software - Systems, EDP, MIS">IT Software - Systems, EDP, MIS</option>
<option value="Journalism, Editing, Content">Journalism, Editing, Content</option>
<option value="Legal, Regulatory, Intellectual Property">Legal, Regulatory, Intellectual Property</option>
<option value="Marketing, Advertising, MR, PR, Media Planning">Marketing, Advertising, MR, PR, Media Planning</option>
<option value="Medical, Healthcare">Medical, Healthcare</option>
<option value="R&amp;D, Pharmaceuticals, Biotechnology">R&amp;D, Pharmaceuticals, Biotechnology</option>
<option value="Packaging">Packaging</option>
<option value="Self Employed, Entrepreneur, Independent Consultant">Self Employed, Entrepreneur, Independent Consultant</option>
<option value="Shipping">Shipping</option>
<option value="Construction, Site Engineering, Project Management">Construction, Site Engineering, Project Management</option>
<option value="Strategy, Management Consulting, Corporate Planning">Strategy, Management Consulting, Corporate Planning</option>
<option value="Supply Chain, Logistics, Purchase, Materials">Supply Chain, Logistics, Purchase, Materials</option>
<option value="Teaching, Education, Training, Counselling">Teaching, Education, Training, Counselling</option>
<option value="Top Management">Top Management</option>
<option value="Travel, Tours, Ticketing, Airlines">Travel, Tours, Ticketing, Airlines</option>
<option value="TV, Films, Production, Broadcasting">TV, Films, Production, Broadcasting</option>
<option value="Others">Others</option>
                     </select>


</Col>
          </Row>
            </React.Fragment>
        );
    }
}

export default IndustryFunction;
