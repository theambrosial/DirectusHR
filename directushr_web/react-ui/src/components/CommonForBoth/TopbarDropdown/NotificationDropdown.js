import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";

//Import images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

import cookie from 'react-cookies'

class NotificationDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
        notifs : []
    };
    this.toggle = this.toggle.bind(this);
  }

  loadNotifications(){
      const endpoint = '/api/registration_request/'
      let thisComp = this
      let lookupOptions = {
          method: "GET",
          headers: {
              'Content-Type': 'application/json'
          }
      }

      const csrfToken = cookie.load('csrftoken')
      if (csrfToken !== undefined) {
          lookupOptions['credentials'] = 'include'
          lookupOptions['headers']['X-CSRFToken'] = csrfToken
       }

      fetch(endpoint, lookupOptions)
      .then(function(response){
          if (response.status == 404){
              console.log('Page not found')
          }
          return response.json()
      }).then(function(responseData){

          if (responseData){
            thisComp.setState({
                 notifs : responseData
            })
            console.log("responseData")
            console.log(responseData)
          } else {

          }
      }).catch(function(error){
          console.log("error", error)
      })
  }

  componentDidMount(){

        this.loadNotifications()
    }




  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu
    }));
  }

  render() {
  const {notifs} = this.state
    return (

      <React.Fragment>

        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}
          className="dropdown d-inline-block"
          tag="li">

          <DropdownToggle
            className="btn header-item noti-icon waves-effect"
            tag="button" id="page-header-notifications-dropdown">
            <i className="bx bx-bell bx-tada"></i>
            <span className="badge badge-danger badge-pill">{notifs !== undefined ? notifs.length : 0}</span>
          </DropdownToggle>

          <DropdownMenu className="dropdown-menu dropdown-menu-lg p-0" right>
            <div className="p-3">
              <Row className="align-items-center">
                <Col>
                  <h6 className="m-0"> Notifications </h6>
                </Col>
                <div className="col-auto">
                  <a href="#!" className="small"> View All</a>
                </div>
              </Row>
            </div>

            <SimpleBar style={{ height: "230px" }}>


            {notifs !== undefined ? notifs.map((notifItem, index)=>{
                return(


                             <Link to="" className="text-reset notification-item">
                <div className="media">
                  <img src={avatar3} className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                  <div className="media-body">
                    {notifItem.is_client ? <h6 className="mt-0 mb-1">Company Registration Request</h6> : [(notifItem.is_outside_rec ? <h6 className="mt-0 mb-1">Freelance Recruiters Request</h6> : <h6 className="mt-0 mb-1">New Candidate has uploaded a CV</h6> )] }
                    <div className="font-size-12 text-muted">
                      {notifItem.is_candidate ? <p className="mb-1">{notifItem.first_name} {notifItem.last_name} has uploaded...</p>  : <p className="mb-1">{notifItem.first_name} {notifItem.last_name} has requested...</p>  }
                      <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                    </div>
                  </div>
                </div>
              </Link>

                )

            }):

                          <Link to="" className="text-reset notification-item">
                <div className="media">
                  <div className="avatar-xs mr-3">

                  </div>
                  <div className="media-body">
                    <h6 className="mt-0 mb-1">Nothing Here</h6>
                  </div>
                </div>
              </Link>

            }



            </SimpleBar>
            <div className="p-2 border-top">
              <Link
                className="btn btn-sm btn-link font-size-14 btn-block text-center"
                to="#"
              >
                {" "}
                View all{" "}
              </Link>
            </div>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}
export default NotificationDropdown;
