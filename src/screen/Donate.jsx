import React, { useState } from "react";
import InputField from "../components/InputField";
import { bloodGroups } from "../constant/blood_group";

function Donate() {
  const [stepper, SetStepper] = useState(1);
  return (
    <div className=" border-2 border-green-900 flex justify-center items-center ">
      <div className=" border-2 h-[400px] w-[400px] rounded-[30px] ">
        <div className=" text-center text-[23px] mt-2 ">
          <strong> Enter Your Details </strong>
        </div>
        <label htmlFor="name">
          <strong className=" text-[17px] ml-3 ">Name:</strong>
        </label>
        <InputField
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
          className=" border-2 h-[40px] w-full  pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px] mb-3 "
        />

        <label htmlFor="number">
          <strong className=" text-[17px] ml-3  ">Mobile Number:</strong>
        </label>
        <InputField
          type="number"
          id="number"
          name="number"
          placeholder="0300 xxxxxxx"
          className=" border-2 h-[40px] w-full  pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px] mb-3 "
        />

        <label htmlFor="email">
          <strong className=" text-[17px] ml-3 ">E-mail:</strong>
        </label>
        <InputField
          type="text"
          id="email"
          name="email"
          placeholder="example@gmail.com"
          className=" border-2 h-[40px] w-full  pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px] "
        />

        <div className="mb-4">
          <label
            htmlFor="province"
            className="block text-lg font-semibold text-gray-700 mb-2 ml-1"
          >
            Province
          </label>

          <div>
            <select
              name="province"
              id="province"
              className=" border-2 h-[40px] w-full  mt-1 pl-2 border-gray-400 focus:border-gray-600 outline-none rounded-[20px] mb-3 "
            >
              <option value="punjab">Punjab</option>
              <option value="sindh">Sindh</option>
              <option value="balochistan">Balochistan</option>
              <option value="kpk">Khyber Pakhtunkhwa</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="district"
            className="block text-lg font-semibold text-gray-700 mb-2 ml-1"
          >
            District
          </label>

          <div>
            <select
              name="district"
              id="district"
              className="w-full  px-4 py-2 border-2 shadow-sm focus:outline-none border-gray-400 focus:border-gray-600 outline-none rounded-[20PX]  text-gray-700"
            >
              <option value="punjab">Punjab</option>
              <option value="sindh">Sindh</option>
              <option value="balochistan">Balochistan</option>
              <option value="kpk">Khyber Pakhtunkhwa</option>
            </select>
          </div>
        </div>

        <label htmlFor="location">
          <label className="block text-lg font-semibold text-gray-700 mb-2 ml-1  ">
            Your Current Location:
          </label>
        </label>
        <InputField
          type="text"
          id="location"
          name="location"
          placeholder="Township Butt Chowk Mateen Avenue 404Z"
          className=" border-2 h-[40px] w-full  mt-1 pl-2 border-gray-400 focus:border-gray-600 outline-none rounded-[20px] mb-3 "
        />



        <div className=" border-2 border-green-950 flex mt-5 flex-wrap gap-5 justify-evenly w-full  " >
          {
            bloodGroups.map((item)=>(
              <div className=" border-2 h-[90px] w-[90px] " key={item.id} >

                <img src={item.path} alt={item.name} />
              </div>
            ))
          }
        </div>












        <div className="flex justify-between items-center w-full px-4 py-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow">
            Previous
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Donate;
