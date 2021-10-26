import React from 'react';
import './header.css';
import MaterialIcon from 'react-google-material-icons';
import { useState } from 'react';

// const color = ["#264653", "#2A9D8F", "#E9C46A", "#F4A261", "#E76F51"];

function HostelForm({ cancel, submit }) {


    let rooms = [];
    const floorRoom = [];

    const [hostelData, setHostelData] = useState({
        hostelName: "", warden: "", caretaker: "", noOfFloor: Number, noOfRooms: []
    })

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setHostelData({ ...hostelData, [name]: value });
        if ([name] === `noOfRooms`) {
            setHostelData({ ...hostelData, [name]: rooms });
        }
    }

    let i = 0;
    do {
        floorRoom.push(i);
        i++;
    }
    while (i <= hostelData.noOfFloor && i <= 8) {


        const floorItems = floorRoom.map((item, index) => {
            return <div style={{ marginBottom: '10px' }}>
                <label htmlFor={`noOfRooms${item}`}>Floor no. {item}:</label>
                <input key={index} className='hostel-form-input' onChange={(e) => { rooms.splice(index, 1, e.target.value) }} value={rooms[index]} id={`noOfRooms${item}`} name={`noOfRooms`} min={1} max={99}
                    type="number" />
            </div>
        })


        return <React.Fragment>
            <form className='hostel-form'>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <button style={{ border: 'none', color: '#264653', background: 'none' }} onClick={cancel}><MaterialIcon icon='close' size={30} /></button>
                </div>
                <div style={{ margin: '10px 0px' }}>
                    <label htmlFor="Hostel-Name">Hostel Name:
                        <input className='hostel-form-input' id="Hostel-Name" autoComplete="off" value={hostelData.hostelName} onChange={handleInputs} type="text" />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="Hostel-warden">Hostel Warden:</label>
                    <input className='hostel-form-input' name="warden" id="warden" value={hostelData.warden} autoComplete="off" onChange={handleInputs} type="text" />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="Hostel-caretaker">Hostel Caretaker:</label>
                    <input className='hostel-form-input' autoComplete="off" name="caretaker" id="Hostel-caretaker" value={hostelData.caretaker} onChange={handleInputs} type="text" />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="Hostel-floor">No of Floors:</label>
                    <input className='hostel-form-input' id="Hostel-floor" autoComplete="off" name="noOfFloor" value={hostelData.noOfFloor >= 0 ? hostelData.noOfFloor < 8 ? hostelData.noOfFloor : 8 : ""} onChange={handleInputs} type="number" min={0} max={10} />
                </div>

                {hostelData.noOfFloor > 8 ? <div style={{ border: 'none', backgroundColor: '#E76F51', color: 'white', borderRadius: '20px', textAlign: 'center' }}>Cannot have more than 8 floors</div> : null}

                {hostelData.noOfFloor < 0 ? <div style={{ border: 'none', backgroundColor: '#E76F51', color: 'white', borderRadius: '20px', textAlign: 'center' }}>Cannot take negative value</div> : null}

                <label>Number of Rooms present in each floor:</label>

                {floorItems}

                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <button type='submit' className='submit-button' >Submit</button>
                </div>
            </form>
            <div className='backdrop' onClick={cancel}></div>
        </React.Fragment>
    }
}

export default HostelForm