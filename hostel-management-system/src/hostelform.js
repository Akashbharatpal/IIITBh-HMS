import React from 'react';
import './header.css';
import MaterialIcon from 'react-google-material-icons';
import { useState } from 'react';



function HostelForm({ cancel, submit }) {

    const [floor, setFloor] = useState(0);

    // const rowItem = () => {  { return <Floor /> } }

    return <React.Fragment>
        <form className='hostel-form'>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <button style={{ border: 'none', color: '#264653', background: 'none' }} onClick={cancel}><MaterialIcon icon='close' size={30} /></button>
            </div>
            <div style={{ margin: '10px 0px' }}>
                <label htmlFor="Hostel-Name">Hostel Name:</label>
                <input className='hostel-form-input' type="text" />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="Hostel-warden">Hostel Warden:</label>
                <input className='hostel-form-input' type="text" />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="Hostel-caretaker">Hostel Caretaker:</label>
                <input className='hostel-form-input' type="text" />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="Hostel-floor">No of Floors:</label>
                <input className='hostel-form-input' type="number" min={0} value={floor} onChange={(e) => { setFloor(e.target.value); }} />
            </div>
            <label>Number of Rooms present in each floor:</label>
            <Floor />
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <button type='submit' className='submit-button' onClick={submit}>Submit</button>
            </div>
        </form>
        <div className='backdrop' onClick={cancel}></div>
    </React.Fragment>
}

const Floor = ({ f }) => {
    return <React.Fragment>
        <div style={{ marginBottom: '10px' }}>
            <label htmlFor="Hostel-warden">Floor no. {f}:</label>
            <input className='hostel-form-input' min={1} type="number" />
        </div>
    </React.Fragment>
}

export default HostelForm