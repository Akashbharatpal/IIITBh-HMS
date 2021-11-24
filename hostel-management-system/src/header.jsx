import React from 'react';
import logo from './images/IIITBh-Logo.png';
import MaterialIcon from 'react-google-material-icons';
import { useState } from 'react';
import './header.css';
import {HostelForm, StudentForm, EmployeeForm, EquipmentForm} from "./Form"
import { Link, useLocation } from "react-router-dom";


const Header = ({hostel, id, color})=>{
    const url =useLocation().pathname;
    const [formH, setFormH] = useState(false);
    const [formS, setFormS] = useState(false);
    const [formEmp, setFormEmp] = useState(false);
    const [formEquip, setFormEquip] = useState(false);
    // const [sideNav,setNav] = useState(false);
    const page = url.substr(url.lastIndexOf("/")+1,url.length-1);
    
    return (
        <React.Fragment>
            <div style={{display:"flex",borderBottomStyle: 'solid',justifyContent:"space-evenly", borderBottomWidth: '2px',borderBottomColor: url==="/"?'lightgray':color}}>

            <div className='container' style={{
                flexGrow:"4"
            }}>
                <div style={{display:"flex",justifyContent:"space-evenly",flexGrow:"0.5"}}>
                    <button className="hostel-button" onClick={()=>{openNav()}}><MaterialIcon icon="menu" size={36}></MaterialIcon></button>
                </div>
                {url==="/" &&
                <img src={logo} alt="logo" width='50px' height='auto'/>
                }
                    <h1 style={{fontSize:"2.5em",flexGrow:"1", fontFamily:"Poppins-Light",color:"#264653"}} >{hostel?hostel:"Hostel Management System"}</h1>
            
                {url==="/"?<div style={{flexGrow:"6"}}></div>:<div style={{display:'flex',justifyContent:'space-evenly',flexGrow:"6",height:"100%"}}>
                    <Link className="links" style={url === `/${id}/student`?{borderBottomStyle: "solid", color: color, borderBottomColor:color
                                }:null} to={`/${id}/student`}>
					<h2>
						Student
					</h2>
				</Link>
				<Link className="links" style={url === `/${id}/employee`?{borderBottomStyle: "solid",borderBottomColor:color}:null} to={`/${id}/employee`}>
					<h2
						style={
                            url === `/${id}/employee`
                            ? {
                                color: color,
                                width: "fit-content",
                            }
                            : null
						}
                        >
						Employee
					</h2>
				</Link>
				<Link className="links" style={url === `/${id}/equipment`?{borderBottomStyle: "solid",borderBottomColor:color}:null} to={`/${id}/equipment`}>
					<h2
						style={
                            url === `/${id}/equipment`
                            ? {
                                color: color,
                                width: "fit-content",
                            }
                            : null
                            }
                            >
						Equipment
					</h2>
				</Link>
                </div>
                }
            </div>
                <div className="container" style={{ flexGrow: '1', justifyContent: 'space-evenly' }}>
                    <button className='hostel-button' title={`Add ${url==="/"?"Hostel":page}`} onClick={()=>
                        {switch (page){
                            case "student":
                                setFormS(true);
                                break;
                                case "employee":
                                    setFormEmp(true);
                                    break;
                                    case "equipment":
                                setFormEquip(true);
                                break;
                                default:
                                setFormH(true);
                                break;
                            } 
                        }}><MaterialIcon icon="add" size={36} /></button>
                    
                </div>
            </div>
            {formH && <HostelForm cancel={()=>setFormH(false)}/>}
            {formS && <StudentForm cancel={()=>setFormS(false)}/>}
            {formEmp && <EmployeeForm cancel={()=>setFormEmp(false)}/>}
            {formEquip && <EquipmentForm cancel={()=>setFormEquip(false)}/>}

            <div id="mySidenav" className="sidenav" role="menu"> </div>
            <div id="drop" className="drop" onClick={()=>closeNav()}></div>
        </React.Fragment>
    );

    function openNav() {
        document.getElementById("mySidenav").style.width = "400px";
        document.getElementById("drop").style.width = "100%";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("drop").style.width = "0";
    }
}


export default Header;