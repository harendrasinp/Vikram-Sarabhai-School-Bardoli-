"use client";
import { useEffect } from "react";
import { GetContacUsThunk, GetPhonesNoThunk } from "@/redux/thunkAPI/ContactThunk";
import { useDispatch, useSelector } from "react-redux";
import { MapPin, Phone, Mail, Building2, PhoneCall } from "lucide-react";

const Contact = () => {
  const { loading, message, error, responseData } = useSelector((state) => state.ContactUs);
  const { phoneNo } = useSelector((state) => state.ContactUs?.phones || {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetContacUsThunk());
    dispatch(GetPhonesNoThunk());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-12 px-4 shadow-md text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-amber-400">
          Contact Us
        </h1>
        <p className="text-slate-300 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Feel free to reach out to us for any inquiries, assistance, or information. We are here to help!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
        
        {/* Top Section: Address Card & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
            <div className="bg-slate-800 px-6 py-4 border-b border-slate-700">
              <h2 className="text-lg font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-400" />
                Our Address
              </h2>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col gap-6 justify-center">
              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Address</h3>
                  <p className="text-slate-800 font-medium text-base mt-1">
                    {responseData?.data?.Address || "Loading Address..."}
                  </p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Office Phone</h3>
                  <p className="text-slate-800 font-medium text-base mt-1">
                    {responseData?.data?.OfficePhone || "Loading Phone..."}
                  </p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Email Address</h3>
                  <p className="text-slate-800 font-medium text-base mt-1">
                    {responseData?.data?.Email || "Loading Email..."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col min-h-[350px]">
            <div className="bg-slate-800 px-6 py-4 border-b border-slate-700">
              <h2 className="text-lg font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                Find Us On Map
              </h2>
            </div>
            <div className="w-full flex-grow relative min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3352111542044!2d73.10783289999999!3d21.139054099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be067738e1c54d5%3A0x3ec160a450bba34c!2sVikram%20Sarabhai%20School%20Bardoli!5e0!3m2!1sen!2sin!4v1788784431431!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Directory Table Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
            <h2 className="text-lg font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-amber-400" />
              Office Phone Directory
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 text-xs md:text-sm uppercase tracking-wider">
                  <th className="p-4 md:px-6 md:py-4 font-semibold">Office Name</th>
                  <th className="p-4 md:px-6 md:py-4 font-semibold">Contact Number</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 text-sm md:text-base">
                {phoneNo && phoneNo.length > 0 ? (
                  phoneNo.map((data, index) => (
                    <tr
                      key={index}
                      className="hover:bg-slate-50 transition-colors duration-150"
                    >
                      <td className="p-4 md:px-6 md:py-4 font-medium text-slate-900">
                        {data.OfficeName}
                      </td>
                      <td className="p-4 md:px-6 md:py-4 text-slate-600 font-mono">
                        {data.ContactNumber}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="2"
                      className="p-6 text-center text-slate-500 font-medium"
                    >
                      No contact numbers available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;