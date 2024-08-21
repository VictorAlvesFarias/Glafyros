import React from 'react';
import { useFormContext } from 'react-hook-form';

function Input ({name,label,error,register}:any) {

  return (
    <div className="mb-1 sm:mb-2">
      <label htmlFor={name} className="inline-block mb-1 font-medium">
        {label}
      </label>
      <input
        {...register(name)}
        placeholder=""
        type="text"
        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
      />
      <span className="text-red-600">{error}</span>
    </div>
  );
};

export default Input;
