import React from 'react';
import logo from './images/IIITBh-Logo.png';
import MaterialIcon from 'react-google-material-icons';
import './header.css';

function AddHostel() {
    return <React.Fragment>
        <div>this is test</div>
    </React.Fragment>
}

function Header() {
    return (
        <div className='container' style={{
            paddingTop: '1em', borderBottomStyle: 'solid', borderBottomWidth: '2px', borderBottomColor: '#F4A261'
        }}>
            <div className="container" style={{ flexGrow: '2' }}>
                <div style={{ flexGrow: '1', display: 'flex', justifyContent: 'center' }}>
                    <img src={logo} alt="logo" width='100px' height='100%' />
                </div>
                <h1 className="poppins-medium dark-blue" style={{ flexGrow: '2' }}>Hostel Management System</h1>
            </div>
            <div className="container" style={{ flexGrow: '1', justifyContent: 'space-evenly' }}>
                <button className='hostel-button' title="Add Hostel" onClick={AddHostel()}><MaterialIcon icon="add" size={48} /></button>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <input type='text' placeholder='Search' className="search-bar" title="Search bar" />
                    <button className='search-button' title='Search'><MaterialIcon icon="search" size={36} /></button>
                </div>
            </div>
        </div>
    );
}

export default Header;