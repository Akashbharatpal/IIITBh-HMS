import React from "react";
import MaterialIcon from "react-google-material-icons";
import "./hostelInfo.css";

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


export { Students, Employee, Equipment };
