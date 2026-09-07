import React from 'react'
import { motion } from 'framer-motion';
import { Phone,Mail } from "lucide-react";
const Marque = () => {
    return (
        <div className="w-full flex items-center justify-center  overflow-hidden">
            <motion.h1
                initial={{ x: "100vw" }}
                animate={{ x: "-100vw" }}
                transition={{
                    duration:25,
                    ease: "linear",
                    repeat: Infinity,

                }}
                className="whitespace-nowrap text-[0.8rem] text-gray-800 flex items-center justify-center gap-2"
            >
                <Phone className="w-5 h-5 text-orange-300" />
                <span className=" text-BlueNavyColor" >+91 12345 67890, +91 12345 67890</span>
                <Mail className="w-5 h-5 text-orange-300" />
                <span className=" text-BlueNavyColor" >info@Vks.com</span>
            </motion.h1>
        </div>
    )
}

export default Marque