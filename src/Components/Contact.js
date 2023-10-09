import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='flex flex-col gap-12 items-center'>
        <h1 className='capitalize text-5xl font-black text-black mt-20 text-center'>feel free to contact us</h1>
        
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.899618047696!2d77.40889787556367!3d23.210328609295022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c439600b8356b%3A0x493910a1d23c2d9d!2sHostel%20no.%204%20MANIT%20Bhopal!5e0!3m2!1sen!2sin!4v1694614944922!5m2!1sen!2sin"
            width="90%"
            height="300"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <div className='min-h-full w-full flex justify-center items-center'>
          <form action="https://formspree.io/f/xleylgrv" method='POST' className='contact-form flex flex-col items-center gap-8 border-2 border-gray-300 p-5 w-1/2 min-h-96 transition-all duration-500 hover:scale-105'>
            <input className='border border-gray-500 rounded text-sm p-3 focus:outline-1 focus:outline-gray-500 w-full' type="text" name='name' placeholder='Username' autoComplete='off' required />
            <input className='border border-gray-500 rounded text-sm p-3 focus:outline-1 focus:outline-gray-500 w-full' type="email" name='email' placeholder='Email Id' autoComplete='off' required />
            <textarea className='border border-gray-500 rounded text-sm p-3 focus:outline-1 focus:outline-gray-500 w-full' name="message" id="" cols="30" rows="6" required placeholder='Type Your Message Here'></textarea>
            <input className='mx-2 py-2 my-2  bg-violet-500 px-6  text-lg w-fit  hover:bg-violet-600 hover:scale-95 transition-all  hover:text-white duration-500 shadow-md  shadow-black opacity-90  capitalize ' type="submit" value="SEND" />

          </form>
        </div>
      </div>
    </>
  )
}

export default Contact