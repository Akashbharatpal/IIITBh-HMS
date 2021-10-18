import React from 'react';
import './header.css';
import MaterialIcon from 'react-google-material-icons';
import { useState } from 'react';



function HostelForm({ cancel, submit }) {

    const [floor, setFloor] = useState(0);

    const floorRoom = []
    for (let i = 0; i <= floor; i++) {
        floorRoom.length = 0;
        for (let i = 0; i <= floor && i <= 8; i++) {
            floorRoom.push(i);
        }
    }

    const floorItems = floorRoom.map((item, index) => {
        return <div style={{ marginBottom: '10px' }}>
            <label htmlFor="Hostel-warden">Floor no. {item}:</label>
            <input className='hostel-form-input' min={1} max={99} type="number" width='40px' />
        </div>
    })


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
                <input className='hostel-form-input' type="number" min={0} max={8} value={0 > floor ? 0 : floor <= 8 ? floor : 8} onChange={(e) => { setFloor(e.target.value); }} />
            </div>

            {floor > 8 ? <div style={{ border: 'none', backgroundColor: '#E76F51', color: 'white', borderRadius: '20px', textAlign: 'center' }}>Cannot have more than 8 floors</div> : null}

            {floor < 0 ? <div style={{ border: 'none', backgroundColor: '#E76F51', color: 'white', borderRadius: '20px', textAlign: 'center' }}>Cannot take negative value</div> : null}

            <label>Number of Rooms present in each floor:</label>

            {floorItems}

            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <button type='submit' className='submit-button' onClick={submit}>Submit</button>
            </div>
        </form>
        <div className='backdrop' onClick={cancel}></div>
    </React.Fragment>
}


export default HostelForm