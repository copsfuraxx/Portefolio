import React from "react";
import "./App.module.scss";
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";
import Overlay from "./components/Overlay";

// google analytics
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-179589074-1"; // tracking id
ReactGA.initialize(TRACKING_ID);

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showOverlay: true,
		};
	}

	handleShowOverlay = () => {
		this.setState({ showOverlay: false });
	};

	componentDidMount() {
		this.autoshowOverlay = setTimeout(
			function () {
				this.handleShowOverlay();
			}.bind(this),
			3000
		);
	}

	render() {
		return (
			<div>
				<Overlay active={this.state.showOverlay} marginTop='150px'>
					<BrowserRouter>
						<BaseLayout />
					</BrowserRouter>
				</Overlay>
			</div>
		);
	}
}
