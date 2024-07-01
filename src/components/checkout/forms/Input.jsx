import React, { useState } from 'react'
import classNames from '../../utils/classNames';
const Input = ({ type, placeholder, value='', className, label, name, id, onChange}) => {

  return (
    <div className="relative group">
      <label
        htmlFor="name"
        className={classNames("absolute transition -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900")}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={classNames("block w-full rounded-md border-0 py-2.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", className)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input;