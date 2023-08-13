import React from 'react'

function Header() {
  return (
    <div className='flex w-full h-10 bg-red-500'>
      <div><h4>Acortador</h4></div>
      <div className='pr-[0px]'><button>$ 0</button></div>
      <div><button>Logoff</button></div>
    </div>
  )
}

export default Header