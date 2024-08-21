import React from 'react'

function Button({submit,children}:any) {
  return (
    <button
        onClick={submit}
        type="submit"
        className="inline-flex items-center text-white justify-center w-full bg-gradient-to-r from-violet-600 to-indigo-600 h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    >
    {children}
  </button>
  )
}

export default Button