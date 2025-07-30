import React from 'react'
import { PhoneIcon, UserIcon } from "@heroicons/react/24/outline";

function DevelopedBy() {
  return (
    <div className="w-full flex justify-center px-4 mt-4">
      <div className="relative flex items-center justify-between w-full max-w-3xl px-6 py-4 rounded-full bg-gradient-to-r from-red-500 via-pink-600 to-red-500 text-white shadow-2xl border border-white/20 animate-fade-in-down">
        
        {/* Glowing animated blood drop */}
        <div className="absolute -left-4 -top-4 animate-bounce">
          <div className="w-6 h-6 bg-red-600 rounded-full shadow-lg border-2 border-white"></div>
        </div>

        {/* User Name */}
        <div className="flex items-center gap-2">
          <UserIcon className="h-6 w-6 text-white animate-fade-in-left" />
          <span className="text-lg font-bold tracking-wide animate-fade-in-left delay-200">
            Zaki Ur Rehman
          </span>
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-2">
          <PhoneIcon className="h-6 w-6 text-white animate-fade-in-right" />
          <span className="text-sm font-semibold animate-fade-in-right delay-300">
            0303-7055259
          </span>
        </div>
      </div>
    </div>
  )
}

export default DevelopedBy
