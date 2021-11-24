import React, { useState } from "react";
import "./header.css";
import MaterialIcon from "react-google-material-icons";
import Data from "./data.json";
import axios from "axios";
import {v1 as uuidvi} from "uuid";


const color = ["#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"];

function HostelForm({ cancel }) {
	const [data, setData] = useState(Data);
	const floorRoom = [];
	const [hostelName, setHostelName] = useState("");
	const [warden, setWarden] = useState("");
	const [caretaker, setCaretaker] = useState("");
	const [noOfFloor, setFloor] = useState(0);
	const [rooms, setRoom] = useState([]);

	let i = 0;
	do {
		floorRoom.push(i);
		i++;
	} while (i <= noOfFloor && i <= 8);

	const addHostel = () => {
	const newData = {
		"id":uuidvi(),
		"HostelName": hostelName,
		"Warden": warden,
		"Caretaker": caretaker,
		"NoOfFloor": noOfFloor,
		"FloorRoom": rooms,
		"Color":color[Math.floor(Math.random()*4)],
		"Student": [],
		"Employee": [],
		"Equipment": [],
	};
	
	let tempData = [...data, newData];
	setData(tempData);
	
	setHostelName("");
	setWarden("");
	setCaretaker("");
	setFloor(0);
	setRoom("");
	
	postData(tempData);
	

};

	const postData = (posts) => {
		const url = "http://localhost:8000/write";
		axios.post(url, posts).then((response) => {
			// console.log(response);
		});
	};

	const hostelRoom = (i) => (e) => {
		const value = e.target.value;
		let newRoom = [...rooms];
		newRoom[i] = value;
		setRoom(newRoom);
	};

	{
		const floorItems = floorRoom.map((item, index) => {
			return (
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor={`noOfRooms${item}`}>Floor no. {item}:</label>
					<input
						key={index}
						className="hostel-form-input"
						onChange={hostelRoom(index)}
						value={rooms[index]}
						min={1}
						max={99}
						type="number"
					/>
				</div>
			);
		});

		//main form

		return (
			<React.Fragment>
				<form method="POST" className="hostel-form">
					{/* cancel button */}
					<div style={{ display: "flex", justifyContent: "end" }}>
						<button
							style={{ border: "none", color: "#264653", background: "none" }}
							onClick={cancel}
						>
							<MaterialIcon icon="close" size={30} />
						</button>
					</div>

					{/* Input of hostel Name */}
					<div style={{ margin: "10px 0px" }}>
						<label htmlFor="Hostel-Name">
							Hostel Name:
							<input
								className="hostel-form-input"
								autoComplete="off"
								value={hostelName}
								onChange={(e) => setHostelName(e.target.value)}
								type="text"
								required
							/>
						</label>
					</div>

					{/* Input for warden */}
					<div style={{ marginBottom: "10px" }}>
						<label htmlFor="Hostel-warden">Hostel Warden:</label>
						<input
							className="hostel-form-input"
							value={warden}
							autoComplete="off"
							onChange={(e) => setWarden(e.target.value)}
							type="text"
						/>
					</div>

					{/* Input for caretaker */}
					<div style={{ marginBottom: "10px" }}>
						<label htmlFor="Hostel-caretaker">Hostel Caretaker:</label>
						<input
							className="hostel-form-input"
							autoComplete="off"
							value={caretaker}
							onChange={(e) => setCaretaker(e.target.value)}
							type="text"
						/>
					</div>

					{/* Input for no of floor */}
					<div style={{ marginBottom: "10px",display:"flex",justifyContent:'left'}}>
						<label htmlFor="Hostel-floor" style={{flexGrow:"2"}}>No of Floors:</label>
						<div style={{ display: "flex", justifyContent: "space-evenly", flexGrow:'1' }}>
							<button style={{flexGrow:"1",outline:"none",border:'none',backgroundColor:"#E76F51",borderRadius:"50px",color:"#264653"}}
								onClick={(e) => {
									e.preventDefault();
									if (noOfFloor) {
										setFloor(noOfFloor - 1);
									}
								}}
							>
								<MaterialIcon icon="remove" size={36} />
							</button>
							<h3 style={{flexGrow:'3',textAlign:'center'}}>{noOfFloor}</h3>
							<button style={{flexGrow:"1",outline:"none",border:'none',backgroundColor:"#E76F51",borderRadius:"50px",color:"#264653"}}
								onClick={(e) => {
									e.preventDefault();
									if (noOfFloor < 8) {
										setFloor(noOfFloor + 1);
									}
								}}
							>
								<MaterialIcon icon="add" size={36} />
							</button>
						</div>
					</div>

					<label>Number of Rooms present in each floor:</label>

					{floorItems}

					<div style={{ display: "flex", justifyContent: "end" }}>
						<button type="submit" onClick={()=>{window.location.reload(false);addHostel();cancel()}} className="submit-button">
							Submit
						</button>
					</div>
				</form>
				<div className="backdrop" onClick={cancel}></div>
			</React.Fragment>
		);
	}
}

const StudentForm = ({cancel})=>{

return <>
    <form className="hostel-form">

    </form>
    <dir className="backdrop" onClick={cancel}></dir>
    </>
}
const EmployeeForm = ({cancel})=>{

    return <>
    <form className="hostel-form">

    </form>
    <dir className="backdrop" onClick={cancel}></dir>
    </>
    }
const EquipmentForm = ({cancel})=>{
    
return <>
<form className="hostel-form">

</form>
<dir className="backdrop" onClick={cancel}></dir>
</>
}

export { HostelForm, StudentForm, EmployeeForm, EquipmentForm };