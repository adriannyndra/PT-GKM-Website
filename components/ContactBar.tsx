import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactBar = () => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <div className="max-w-[1366px] w-full text-center">

        <ul className="flex flex-wrap justify-center gap-4 text-xs h-[30px] text-white">
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-gray-600 dark:text-gray-300" />
            grahasindo@outlook.com
          </li>
          <li className="flex items-center gap-2">
            <FaPhone className="text-gray-600 dark:text-gray-300" />
            +62-031-501-5771
          </li>
          <li className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-600 dark:text-gray-300" />
            Jl. Pucang Anom VII No. 52, Kec. Gubeng, Kota Surabaya
          </li>
        </ul>

      </div>
    </div>
  );
}

export default ContactBar;
