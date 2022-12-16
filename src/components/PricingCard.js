import React from 'react'
import { Link } from 'react-router-dom'
import "./PricingCardStyle.css"

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className="card-container">
            <div className="card">
                <h3>-BASIC-</h3>
                <span className='bar'></span>
                <p className='btc'>$100</p>
                <p>- 3 Days -</p>
                <p>- 3 pages -</p>
                <p>- 3 Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
                 
            </div>
            <div className="card">
                <h3>-BUSINESS-</h3>
                <span className='bar'></span>
                <p className='btc'>$100</p>
                <p>- 3 Days -</p>
                <p>- 3 pages -</p>
                <p>- 3 Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
                 
            </div>
             <div className="card">
                <h3>-BUSINESS-</h3>
                <span className='bar'></span>
                <p className='btc'>$100</p>
                <p>- 3 Days -</p>
                <p>- 3 pages -</p>
                <p>- 3 Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
                 
            </div>
        </div>
    </div>
  )
}

export default PricingCard