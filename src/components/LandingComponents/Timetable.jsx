import React from 'react';
import './Timetable.css'

export default function Timetable() {
  return (
    <div>
      <div className='Timetable'>
        <h1>Let Us Create Your Clash-Free Timetable!</h1>
        <div className='content'>
          <div className='desc'>
            <p>
              Say goodbye to scheduling conflicts and overlapping classes! Our system generates a perfectly optimized timetable tailored to your courses and preferences.
            </p>
            <p>
              Whether you're juggling multiple classes or managing a complex schedule, we ensure that every course fits seamlessly into your week, so you can focus on learning without the hassle of rescheduling.
            </p>
            <p>
              Simply input your courses and constraints, and let us handle the rest. Your perfect timetable is just a few clicks away!
            </p>
          </div>
          <div className='button-container'>
            <button className='find-timetable'>Find Your Timetable</button>
          </div>
        </div>
      </div>
    </div>
  );
}
