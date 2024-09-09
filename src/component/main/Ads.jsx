import React from 'react'
import "./ads.css";
export default function Ads({src, title, web}) {
  return (
    <div className='adsRow'>
        <div className=''>
            <img className='adsstyle' src={src} width="120px" />
            <div className="addinfo">
                <h5>{title}</h5>
                <h6>{web}</h6>
            </div>
        </div>
      
    </div>
  )
}
