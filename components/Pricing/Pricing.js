import React from 'react'
import './pricing.css'
import SecName from '../SecName/SecName'
const Pricing = () => {
  return (
    <>
    <SecName name='PRICING PLANS'/>
      <div className='prices'>
        <div className='item-price item-1'>
          <div className='header-price'>
            <h2>Basic</h2>
            <h4>0$<span>per month</span></h4>
          </div>
          <div className='body-price'>
            <p>CORS enabled for all origins</p>
            <p>100 requests per day</p>
            <p>Up to 10 articles returned per request</p>
            <p>Maximum of 1 request per second</p>
            <p>Email support</p>
            <p>Full article content and pagination</p>
          </div>
          <button>choose</button>
        </div>
        <div className='item-price item-2'>
          <div className='header-price'>
            <h2>Advanced</h2>
            <h4>50$<span>per month</span></h4>
          </div>
          <div className='body-price'>
            <p>CORS enabled for all origins</p>
            <p>1000 requests per day</p>
            <p>Up to 25 articles returned per request</p>
            <p>Maximum of 4 requests per second</p>
            <p>Email support</p>
            <p>Full article content and pagination</p>
          </div>
          <button>choose</button>
        </div>
        <div className='item-price item-3'>
          <div className='header-price'>
            <h2>Professional</h2>
            <h4>100$<span>per month</span></h4>
          </div>
          <div className='body-price'>
            <p>CORS enabled for all origins</p>
            <p>5000 requests per day</p>
            <p>Up to 50 articles returned per request</p>
            <p>Maximum of 6 requests per second</p>
            <p>Email support</p>
            <p>Full article content and pagination</p>
          </div>
          <button>choose</button>
        </div>
      </div>
    </>
  )
}

export default Pricing
