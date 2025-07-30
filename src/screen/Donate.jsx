import React, { useState } from "react";
import InputField from "../components/InputField";
import { bloodGroups } from "../constant/blood_group";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


function Donate() {
  const yupSchema = yup
    .object({
      name: yup
        .string()
        .required("Enter Your Name")
        .min(2, "Your name must be 2 characters"),
      email: yup.string().required("Enter Your Email").email(),
      number: yup
        .string()
        .required("Enter Your Mobile Number")
        .matches(/^03[0-9]{9}$/,'Enter a Valid Number'),
      province: yup.string().required("Enter Your Province").notOneOf([''],'Select a correct Province'),
      district: yup.string().required("Enter Your District").notOneOf([''],'Select a correct District'),
      location: yup
        .string()
        .required("Enter Your Location")
        .min(3, "Enter a valid Location"),
      selectBloodGroup: yup.string().required("Please Enter Your Blood Group"),
    })
    .required();
  const [stepper, setStepper] = useState(1);
  const [selectedBlood, setSelectedBlood] = useState();
  const [showSubmitButton,setShowSubmitButton] = useState(false)
  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema), mode: "onChange" });

  const nextStepper = async () => {
    if (stepper === 1) {
       let isValid = await trigger(["name", "email", "number"]);
      if(isValid){
        setStepper((prev) => prev + 1)
      }
    }
    if(stepper ===2){
      let isValid = await trigger(['province','district','location'])
      if(isValid){
              setStepper((prev) => prev + 1)
      }
    }
  };

  const prevStepper = () => {
    if (stepper > 1) {
      setStepper((prev) => prev - 1);
    }
  };

  const userSelectedBlood = (item) => {
    setSelectedBlood(item.id);
    setValue("selectBloodGroup", item.id, { shouldValidate: true });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border-2 border-green-900 w-[400px] min-h-[400px] rounded-[30px] p-6 flex flex-col justify-between bg-white shadow-lg">
        <div className="text-center text-[23px] mb-4">
          <strong>Enter Your Details</strong>
        </div>

        <div className="flex-grow overflow-y-auto space-y-4">
          {stepper === 1 && (
            <div>
              <div>
                <label
                  htmlFor="name"
                  className="text-[17px] ml-2 font-semibold"
                >
                  Name:
                </label>
                <InputField
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  className={`border-2 h-[35px] w-full pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px]  ${errors?.name?.message ? " border-2 border-red-700 " : ""}  `}
                  {...register("name")}
                />
                <div className=" h-[25px]   ">
                  {errors && (
                    <div className=" text-red-700 ">
                      {errors?.name?.message}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[17px] ml-2 font-semibold"
                >
                  E-mail:
                </label>
                <InputField
                  type="text"
                  id="email"
                  name="email"

                  placeholder="example@gmail.com"
                  {...register("email")}
                  className={`border-2 h-[35px] w-full pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px]  ${errors?.email?.message ? " border-2 border-red-700 " : ""}  `}
                />
                <div className=" h-[25px] ">
                  {errors && (
                    <div className=" text-red-700 ">
                      {errors?.email?.message}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="number"
                  className="text-[17px] ml-2 font-semibold"
                >
                  Mobile Number:
                </label>
                <InputField
                  type="number"
                  id="number"
                  name="number"
                  placeholder="0300 xxxxxxx"
                  {...register("number")}
                  className={`border-2 h-[35px] w-full pl-2 border-gray-500 focus:border-gray-600 outline-none rounded-[20px] ${errors?.number?.message ? " border-2 border-red-700 " : ""}  `}
                />
                <div className=" h-[25px] ">
                  {errors && (
                    <div className=" text-red-700 ">
                      {errors?.number?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {stepper === 2 && (
            <div className="">
              <div>
                <label
                  htmlFor="province"
                  className="block text-lg font-semibold text-gray-700 ml-1"
                >
                  Province
                </label>
                <select
                  name="province"
                  id="province"
                  {...register("province")}
                  className="border-2 h-[40px] w-full pl-2 border-gray-400 focus:border-gray-600 outline-none rounded-[20px]"
                >
                  <option value=''>Select Your Province</option>
                  <option value="punjab">Punjab</option>
                  <option value="sindh">Sindh</option>
                  <option value="balochistan">Balochistan</option>
                  <option value="kpk">Khyber Pakhtunkhwa</option>
                </select>
                 <div className=" h-[25px] ">
                  {errors && (
                    <div className=" text-red-700 ">
                      {errors?.province?.message}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="district"
                  className="block text-lg font-semibold text-gray-700 ml-1"
                >
                  District
                </label>
                <select
                  name="district"
                  id="district"
                  className="w-full px-4 py-2 border-2 border-gray-400 focus:border-gray-600 outline-none rounded-[20px] text-gray-700"
                  {...register("district")}
                >
                  <option value=''>Select Your District</option>
                  <option value="punjab">Punjab</option>
                  <option value="sindh">Sindh</option>
                  <option value="balochistan">Balochistan</option>
                  <option value="kpk">Khyber Pakhtunkhwa</option>
                </select>
                 <div className=" h-[25px] ">
                  {errors && (
                    <div className=" text-red-700 ">
                      {errors?.district?.message}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-lg font-semibold text-gray-700 ml-1"
                >
                  Your Current Location:
                </label>
                <InputField
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Township Butt Chowk Mateen Avenue 404Z"
                  {...register("location")}
                  className="border-2 h-[40px] w-full pl-2 border-gray-400 focus:border-gray-600 outline-none rounded-[20px]"
                />
                 <div className=" h-[25px] ">
                  {errors && (
                    <div className=" text-red-700 ">
                      {errors?.location?.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {stepper === 3 && (
            <div className="space-y-4">
              <div className="text-lg font-semibold text-gray-800 text-center">
                Select Your Blood Group
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {bloodGroups.map((item) => (
                  <div
                    key={item.id}
                    className={` rounded-xl h-[90px] w-[90px] flex items-center justify-center hover:border-green-500 transition cursor-pointer ${selectedBlood === item.id ? "border-2 border-green-600 " : " border-2 border-gray-300 "} `}
                    onClick={() => userSelectedBlood(item)}
                  >
                    <img
                      src={item.path}
                      alt={item.name}
                      className=" h-full w-full rounded-xl "
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevStepper}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow disabled:opacity-50"
            disabled={stepper === 1}
          >
            Previous
          </button>

          {stepper < 3 ? (
            <button
              onClick={nextStepper}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow disabled:opacity-50"
            >
              Next
            </button>
          ) : (
            <input
              type="button"
              value=" Submit "
              disabled={selectedBlood?false:true}
              className={`bg-green-600  text-white font-semibold py-2 px-6 rounded-lg shadow disabled:opacity-50 cursor-pointer  ${!selectedBlood?" cursor-not-allowed ":"hover:bg-green-700"} `}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Donate;
