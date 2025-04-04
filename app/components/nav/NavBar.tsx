import React from 'react'
import Search from '../search/Search'
import ButtonGame from '../defaults/ButtonGame'

export default function NavBar() {
  return (<>
  <header className='flex justify-between items-center'>

  <Search/>

  <div className="flex gap-4 items-center justify-center h-full">
  <ButtonGame disabled={false} link="/login" text="Login" />
  <ButtonGame link="/signup" text="Sign Up" />
</div>

  </header>
  </>
  )
}
