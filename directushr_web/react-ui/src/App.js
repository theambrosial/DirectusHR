import React, { Component } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

// layouts
import VerticalLayout from "./components/VerticalLayout/";
import HorizontalLayout from "./components/HorizontalLayout/";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./assets/scss/theme.scss";

// Import Firebase Configuration file
import { initFirebaseBackend } from "./helpers/authUtils";

const firebaseConfig = {
	apiKey: "AIzaSyDwh0Fwn_lGtf4Km1s1fvx_yAASmm1-vzg",
	authDomain: "",
	databaseURL: "https://carobaar-62f6e.firebaseio.com",
	projectId: "carobaar-62f6e",
	storageBucket: "carobaar-62f6e.appspot.com",
	messagingSenderId: "",
	appId: "",
	measurementId: ""
};

// init firebase backend
initFirebaseBackend(firebaseConfig);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.getLayout = this.getLayout.bind(this);
	}

	/**
	 * Returns the layout
	 */
	getLayout = () => {
		let layoutCls = VerticalLayout;

		switch (this.props.layout.layoutType) {
			case "horizontal":
				layoutCls = HorizontalLayout;
				break;
			default:
				layoutCls = VerticalLayout;
				break;
		}
		return layoutCls;
	};

	render() {
		const Layout = this.getLayout();

		return (
			<React.Fragment>
				<Router>
					<Switch>
						{publicRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={NonAuthLayout}
								component={route.component}
								key={idx}
								isAuthProtected={false}
							/>
						))}

						{authProtectedRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								layout={Layout}
								component={route.component}
								key={idx}
								isAuthProtected={false}
							/>
						))}
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		layout: state.Layout
	};
};

export default connect(mapStateToProps, null)(App);
