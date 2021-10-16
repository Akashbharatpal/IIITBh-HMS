import React from "react";
import Draggable from 'react-draggable';
import './calendar.css';
import MaterialIcon from 'react-google-material-icons';
import { useState } from 'react';
function Calendar() {

    let [year, setYear] = useState(2021);

    // const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    // isLeapYear = (year) => {
    //     return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
    // }

    // getFebDays = (year) => {
    //     return isLeapYear(year) ? 29 : 28
    // }

    return (
        <React.Fragment>
            <Draggable>
                <div className='calendar'>
                    <div className='calendar-head'>
                        <div className='month'><h2>October</h2></div>
                        <div className='year'>
                            <button className='year-button' onClick={() => setYear(--year)}><MaterialIcon icon='arrow_back_ios_new' /></button>
                            <div className='year-value'><h2>{year}</h2></div>
                            <button className='year-button' onClick={() => setYear(++year)}><MaterialIcon icon='arrow_forward_ios' /></button>
                        </div>
                    </div>
                    <div className='week-day'>
                        <h3>Sun</h3>
                        <h3>Mon</h3>
                        <h3>Tue</h3>
                        <h3>Wed</h3>
                        <h3>Thu</h3>
                        <h3>Fri</h3>
                        <h3>Sat</h3>
                    </div>
                    <div className='calendar-body'>

                    </div>
                </div>
            </Draggable>
        </React.Fragment>
    );
}

export default Calendar;