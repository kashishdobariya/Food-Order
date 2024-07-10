import React from 'react'

export default function Footer() {
  return (
    <div>
       <section className='container-fluid mt-5'>
         <div className='row bg-color'>
           <div className='col-lg-3 col-md-6 col-sm-12'> 
           <img src='/assets/img/res-logo.png' alt='' className='w-25 mt-5 ms-5'></img>
            <h5 className='ms-5'>Tasty Treat</h5>
            <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
           <div className='col-lg-3 col-md-6 col-sm-12'>
              <h2 className='mt-5'>Delivery Time</h2>
              <h4 className='mt-5'>Sunday-Thursday</h4>
              <h5>10:00am - 11:00pm </h5>
              <h4 className='mt-5'>Friday-Saturday</h4>
              <h5>Off Day</h5>
           </div>
           <div className='col-lg-3 col-md-6 col-sm-12'>
             <h2 className='mt-5'>Contact</h2>
             <h6 className='mt-3'>Location:Xyz, varachha-395006, Surat.</h6>
             <h5 className='mt-5'>Phone: 7648936497</h5>
             <h5 className='mt-4'>Email: demo.xyz@gmail.com</h5>
           </div>
           <div className='col-lg-3 col-md-6 col-sm-12'>
             <h2 className='mt-4'>Newslatter</h2>
              <h6>Subscribe our Newslatter</h6>
              <input type='email' name='email' placeholder='Enter Your Email'className='p-2 mt-4 bg-color'></input>
           </div>
           </div>
            <div className='row bg-color'>
                <div className=''>
                     <p className='mt-5 text-danger'>Copyright - 2022, Website made by Mahibur Rahman,All Rights Reservrd.</p>
                </div>

            </div>
       </section>
      
    </div>
  )
}