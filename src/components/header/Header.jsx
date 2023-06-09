import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns'

const Header = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ])

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className='header'>
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights Bookings</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
        <p className="headerDesc">Get rewarded for your travels unlock instant savings of 10% or more with a free Booking.com account.</p>
        <button className='headerBtn'>Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input type="text"
              placeholder='where are you going ?'
              className='headerSearchInput'
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
              {
                `${format(date[0].startDate, "MM/dd/yyyy")} 
              to 
              ${format(date[0].startDate, "MM/dd/yyyy")}`
              }
            </span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className='optionText'>Adult</span>
                <div className="optionCounter">
                  <button disabled={options.adult <= 1} onClick={() => handleOptions('adult', "d")} className='optionCounterButton'>-</button>
                  <span className='optionCounterNumber'>{options.adult}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions('adult', "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className='optionText'>Children</span>
                <div className="optionCounter">
                  <button disabled={options.children <= 0} className='optionCounterButton' onClick={() => handleOptions('children', "d")}>-</button>
                  <span className='optionCounterNumber'>{options.children}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions('children', "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className='optionText'>Room</span>
                <div className="optionCounter">
                  <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOptions("room", "d")}>-</button>
                  <span className='optionCounterNumber'>{options.room}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions("room", "i")}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
