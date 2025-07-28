import React, { useState } from "react";
import InputField from "../components/InputField";
import { bloodGroups } from "../constant/blood_group";

function Donate() {
  const [stepper, SetStepper] = useState(3);
  const [selectBlood,setSelectBlood] = useState(1)
  return (
    <div className="border-2 border-green-900 h-screen flex justify-center items-center">
      <div className="border-2 h-[500px] w-[400px] rounded-[30px] p-4 overflow-y-auto">
        <div className="text-center text-[23px] mt-2">
          <strong>Enter Your Details</strong>
        </div>

        {stepper === 1 ? (
          <div>
            <div className="mt-4">
              <label htmlFor="name" className="block text-[17px] ml-2 font-semibold">
                Name:
              </label>
              <InputField
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="border-2 h-[40px] w-full pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px]"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="number" className="block text-[17px] ml-2 font-semibold">
                Mobile Number:
              </label>
              <InputField
                type="number"
                id="number"
                name="number"
                placeholder="0300 xxxxxxx"
                className="border-2 h-[40px] w-full pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px]"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="block text-[17px] ml-2 font-semibold">
                E-mail:
              </label>
              <InputField
                type="text"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="border-2 h-[40px] w-full pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px]"
              />
            </div>
          </div>
        ) : stepper === 2 ? (
          <div>
            <div className="mt-4">
              <label htmlFor="province" className="block text-[17px] ml-2 font-semibold">
                Province:
              </label>
              <select
                name="province"
                id="province"
                className="border-2 h-[40px] w-full pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px]"
              >
                <option value="punjab">Punjab</option>
                <option value="sindh">Sindh</option>
                <option value="balochistan">Balochistan</option>
                <option value="kpk">Khyber Pakhtunkhwa</option>
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="district" className="block text-[17px] ml-2 font-semibold">
                District:
              </label>
              <select
                name="district"
                id="district"
                className="border-2 h-[40px] w-full pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px]"
              >
                <option value="punjab">Punjab</option>
                <option value="sindh">Sindh</option>
                <option value="balochistan">Balochistan</option>
                <option value="kpk">Khyber Pakhtunkhwa</option>
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="location" className="block text-[17px] ml-2 font-semibold">
                Your Current Location:
              </label>
              <InputField
                type="text"
                id="location"
                name="location"
                placeholder="Township Butt Chowk Mateen Avenue 404Z"
                className="border-2 h-[40px] w-full pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px]"
              />
            </div>          
          </div>
        ) : stepper === 3 ? (
          <div className="mt-4">
            <div className="flex flex-wrap gap-5 justify-evenly w-full mt-2">
              {bloodGroups.map((item) => (
                <div className={`border-2 h-[80px] w-[80px]  `} key={item.id}>
                  <img src={item.path} alt={item.name} />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex justify-between items-center w-full mt-10 px-4 py-2">
          <button
            onClick={() => SetStepper(stepper > 1 ? stepper - 1 : 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow"
          >
            Previous
          </button>

          <button
            onClick={() => SetStepper(stepper < 3 ? stepper + 1 : 3)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Donate;
