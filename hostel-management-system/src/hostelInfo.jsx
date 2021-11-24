import React from "react";
import MaterialIcon from "react-google-material-icons";
import { Link, useLocation } from "react-router-dom";
import "./hostelInfo.css";

const HostelInfo = ({id})  => {
	const url = useLocation();
	return (
		<React.Fragment>

			<div className="navbar">
				<div style={{ flexGrow: "1", justifyContent: "center" }}>
					<Link to="/">
						<button title="Back" className="backbutton">
							<MaterialIcon icon="arrow_back" size={40} />
						</button>
					</Link>
				</div>
				<Link className="link" to={`/${id}/student`}>
					<h2
						style={
							url.pathname === `/${id}/student`
								? {
										borderBottomStyle: "solid",
										borderBottomColor: "#2A9D8F",
										color: "#2A9D8F",
										width: "fit-content",
								  }
								: null
						}
					>
						Student
					</h2>
				</Link>
				<Link className="link" to={`/${id}/employee`}>
					<h2
						style={
							url.pathname === `/${id}/employee`
								? {
										borderBottomStyle: "solid",
										borderBottomColor: "#2A9D8F",
										color: "#2A9D8F",
										width: "fit-content",
								  }
								: null
						}
					>
						Employee
					</h2>
				</Link>
				<Link className="link" to={`/${id}/equipment`}>
					<h2
						style={
							url.pathname === `/${id}/equipment`
								? {
										borderBottomStyle: "solid",
										borderBottomColor: "#2A9D8F",
										color: "#2A9D8F",
										width: "fit-content",
								  }
								: null
						}
					>
						Equipment
					</h2>
				</Link>
			</div>
		</React.Fragment>
	);
};

const Students = ({ hostel }) => {
	return (
		<React.Fragment>
		<h1>{hostel.HostelName}</h1>
		</React.Fragment>
	);
};
const Employee = ({ hostel }) => {
	
	return (
		<React.Fragment>
		
		</React.Fragment>
	);
};
const Equipment = ({ hostel }) => {
	
	return (
		<React.Fragment>
		
		</React.Fragment>
	);
};


export { HostelInfo, Students, Employee, Equipment };
