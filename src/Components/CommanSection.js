import React from 'react'

export default function CommanSection(props) {
  return (
    <div>
        <section className='container-fluid'>
            <div className='row commansection-bg-im'>
               <h2 className='p-5 text-light fs-1'>{props.title}</h2>  
            </div>

        </section>
    </div>
  )
}