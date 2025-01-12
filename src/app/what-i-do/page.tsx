import Navbar from '@/components/navbar'
import ServicesPage from '@/components/service'
import React from 'react'

const page = () => {
    return (
        <main>
            <Navbar name='WHAT I DO' size='text-[19.5vw]'/>
            <ServicesPage/>
        </main>
    )
}

export default page