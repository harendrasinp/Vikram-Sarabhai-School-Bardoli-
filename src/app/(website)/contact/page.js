"use client"
import{ useEffect } from 'react'
import { phoneNumbers} from '@/data/contactData';
import {GetContacUsThunk,GetPhonesNoThunk} from "@/redux/thunkAPI/ContactThunk"
import { useDispatch, useSelector } from 'react-redux';
const Contact = () => {
  const {loading,message,error,responseData}=useSelector((state)=>state.ContactUs)  
  const {phoneNo}=useSelector((state)=>state.ContactUs.phones)  
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(GetContacUsThunk())
      dispatch(GetPhonesNoThunk())
  },[])
  return (
    <div>
      <div className="bg-BlueNavyColor text-center py-2 text-orange-300">
        <h1 className="text-2xl font-bold text-center">Contact Us</h1>
        <p className="text-center mt-1">Feel free to reach out to us for any inquiries or information.</p>
      </div>
      <div className="w-full flex flex-col gap-4 p-5">

        <div className="w-full md:flex justify-center items-center gap-2">
          <aside className="w-full h-79 bg-violet-50 p-4 text-gray-800">
            <h1 className="text-center bg-gray-800 text-orange-300 p-2 mb-4">OUR ADDRESS</h1>
            <div className='flex flex-col gap-8'>
                  <h2 className="text-lg font-bold">Address: <span className='font-normal'>{responseData?.data?.Address}</span></h2>
                  <h2 className="text-lg font-bold">Office Phone: <span className='font-normal'>{responseData?.data?.OfficePhone}</span></h2>
                  <h2 className="text-lg font-bold">Email: <span className='font-normal'>{responseData?.data?.Email}</span></h2>
            </div>
          </aside>

          <main className="w-full bg-violet-50 p-4">
            <h1 className="text-center bg-gray-800 text-orange-300 p-2">FIND US ON MAP</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3352111542044!2d73.10783289999999!3d21.139054099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be067738e1c54d5%3A0x3ec160a450bba34c!2sVikram%20Sarabhai%20School%20Bardoli!5e0!3m2!1sen!2sin!4v1788784431431!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-61"
            ></iframe>
          </main>
        </div>


        <div className="w-full col-span-12 bg-violet-50 p-2">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border border-gray-300 p-2">OFFICES NAMES</th>
                <th className="border border-gray-300 p-2">PHONE NUMBERS</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-center">
              {phoneNo?.map((data, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{data.OfficeName}</td>
                  <td className="border border-gray-300 p-2">{data.ContactNumber}</td>
                </tr>
              ))}
            </tbody> 
          </table>
        </div>
      </div>
    </div>
  )
}

export default Contact
