import React from "react";
import MaterialIcon from "react-google-material-icons";
import { Link, useLocation } from 'react-router-dom';
import './hostelInfo.css'
import equipmentData from './data-json-file/equipment.json';
import employeeData from './data-json-file/employee.json';
import studentData from './data-json-file/student.json';


const HostelInfo = ({ hostel }) => {

    const url = useLocation();
    console.log(hostel);

    return <>
        <div className="navbar">
            <div style={{ flexGrow: '1', justifyContent: 'center' }}>
                <Link to="/"><button title="Back" className="backbutton"><MaterialIcon icon="arrow_back" size={40} /></button></Link>
            </div>
            <Link className="link" to={`/hostel-info/students/${hostel}`} > <h2 style={url.pathname === `/hostel-info/students/${hostel}` ? { borderBottomStyle: 'solid', borderBottomColor: '#2A9D8F', color: "#2A9D8F", width: 'fit-content' } : null}>Student </h2></Link>
            <Link className="link" to={`/hostel-info/employee/${hostel}`}> <h2 style={url.pathname === `/hostel-info/employee/${hostel}` ? { borderBottomStyle: 'solid', borderBottomColor: '#2A9D8F', color: "#2A9D8F", width: 'fit-content' } : null}>Employee </h2></Link>
            <Link className="link" to={`/hostel-info/equipment/${hostel}`}><h2 style={url.pathname === `/hostel-info/equipment/${hostel}` ? { borderBottomStyle: 'solid', borderBottomColor: '#2A9D8F', color: "#2A9D8F", width: 'fit-content' } : null}>Equipment</h2> </Link>
        </div>
    </>
}


const Students = ({ hostel }) => {


    const student = Object.keys(studentData[hostel]).map((item) => item);

    return <React.Fragment>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    {Object.keys(studentData[hostel][0]).map((item, index) => <th key={index} style={item === "Address" ? { width: "30%" } : null}>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {student.map((item, index) => {
                    return <tr key={index} style={Number(item) % 2 ? { backgroundColor: '#2A9D8F50' } : null}>
                        <td>{index + 1}</td>
                        {Object.keys(studentData[hostel][item]).map((i, index) => <td key={index}>{studentData[hostel][item][i]}</td>)}
                    </tr>;
                })}
            </tbody>
        </table>
    </React.Fragment>;
}

const Employee = ({ hostel }) => {

    const employee = Object.keys(employeeData[hostel]).map((item) => item);

    return <React.Fragment>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    {Object.keys(employeeData[hostel][0]).map((item, index) => <th key={index} style={item === "Address" ? { width: "30%" } : null}>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {employee.map((item, index) => {
                    return <tr key={index} style={Number(item) % 2 ? { backgroundColor: '#2A9D8F50' } : null}>
                        <td>{index + 1}</td>
                        {Object.keys(employeeData[hostel][item]).map((i, index) => <td key={index}>{employeeData[hostel][item][i]}</td>)}
                    </tr>;
                })}
            </tbody>
        </table>
    </React.Fragment>
}

const Equipment = ({ hostel }) => {

    const equipment = Object.keys(equipmentData[hostel]).map((item) => item);

    return <React.Fragment>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    {Object.keys(equipmentData[hostel][0]).map((item, index) => <th key={index} style={item === "Address" ? { width: "30%" } : null}>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {equipment.map((item, index) => {
                    return <tr key={index} style={Number(item) % 2 ? { backgroundColor: '#2A9D8F50' } : null}>
                        <td>{index + 1}</td>
                        {Object.keys(equipmentData[hostel][item]).map((i, index) => <td key={index}>{equipmentData[hostel][item][i]}</td>)}
                    </tr>;
                })}
            </tbody>
        </table>
    </React.Fragment>
}

export { HostelInfo, Students, Employee, Equipment };