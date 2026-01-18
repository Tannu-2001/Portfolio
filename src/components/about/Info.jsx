import React from 'react'

const Info = () => {
  return (
    <div className='about_info grid'>
        <div className='about_box'>
            <i class='bx bx-award about_icon'></i>
            <h3 className='about_title'>Projects</h3>
            <span className='about_subtitle'>3 Projects Completed</span>
        </div>
        <div className='about_box'>
            <i class='bx bxs-graduation'></i>
            <h3 className='about_title'>MCA</h3>
            <span className='about_subtitle'>Ranchi University</span>
        </div>
        <div className='about_box'>
            <i class='bx bxs-graduation'></i>
            <h3 className='about_title'>BCA</h3>
            <span className='about_subtitle'>Ranchi University</span>
        </div>
    </div>
  )
}

export default Info