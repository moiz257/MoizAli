import Navbar from '@/components/navbar'
import MyWork from '@/components/myWork'
import React from 'react'

const page = () => {
  return (
      <main>
        <Navbar name='MY WORKS' size='text-[18vw]'/>
        <MyWork/>
      </main>
  )
}

export default page