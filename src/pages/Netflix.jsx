import React from 'react'
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase.config'

export default function Netflix() {
  const handleSignOut = async () => {
      try {
        const data = await signOut(firebaseAuth)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <div>
      <h1>Netflix</h1>
      <div><button className='bg-red-600 text-white text-xl px-5 py-1' onClick={handleSignOut} >Sign out</button></div>
    </div>
  )
}
