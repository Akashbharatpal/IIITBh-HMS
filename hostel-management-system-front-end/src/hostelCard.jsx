import React from "react";
import Draggable from 'react-draggable'
import './hostelcard.css'
import hostelData from './data-json-file/hostel.json'
import { Link } from 'react-router-dom'


const HostelCard = () => {
    return <React.Fragment>
        <div className="first" style={{ display: "grid", gridTemplateColumns: 'auto auto auto auto', justifyContent: "space-evenly", gridTemplateRows: 'auto auto', alignItems: 'center', height: '830px' }}>

            {hostelData.map((Item) => {
                return <>
                    <Draggable bounds="container">
                        <div className='card'>
                            <Link to={`/hostel-info/students/${Item.hostelName}`} className="link">
                                <div style={{ width: '100%', height: '100%', display: "flex", flexDirection: 'column' }}>
                                    <div style={{ backgroundColor: Item.color, display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: '1' }}>
                                        <h1 style={{ color: 'white' }}>{Item.hostelName}</h1>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', flexGrow: '2' }}>
                                        <h3><strong>Warden:</strong> <u>{Item.warden}</u></h3>
                                        <h3><strong>Caretaker:</strong> <u>{Item.caretaker}</u></h3>
                                        <h3><strong>Number of Floors:</strong> <u>{Item.noOfFloor}</u></h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Draggable>
                </>
            })}
        </div>
    </React.Fragment>
}


export default HostelCard;