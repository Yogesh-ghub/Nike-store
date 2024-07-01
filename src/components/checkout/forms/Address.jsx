import React, { useState } from 'react'
import Input from './Input'

const Address = () => {
    const [address, setAddress] = useState({
        name: '',
        mobile: '',
        email: '',
        country: '',
        streetAddress: '',
        city: '',
        region: '',
        postalCode: ''
    })

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }

  return (
    <form className='w-[50%] mt-[90px]'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <Input className={'sm:col-span-3'} type="text" placeholder="Name" value={address.name} name="name" label="Name" id="name" onChange={handleChange} />
              <Input className={'sm:col-span-3'} type="number" placeholder="" value={address.mobile} name="mobile" label="Mobile no." id="number" onChange={handleChange} />
                <Input className={'sm:col-span-4'} type="email" placeholder="Email" value={address.email} name="email" label="Email" id="email" onChange={handleChange} />
                <Input className={'col-span-full'} type="text" placeholder="Street Address" value={address.streetAddress} name="streetAddress" label="Street Address" id="streetAddress" onChange={handleChange} />
                <Input className={'sm:col-span-2 sm:col-start-1'} type="text" placeholder="City" value={address.city} name="city" label="City" id="city" onChange={handleChange} />
                <Input className={'sm:col-span-2'} type="text" placeholder="State / Province" value={address.region} name="region" label="State / Province" id="region" onChange={handleChange} />
                

            </div>
        </div>
        <button type="button" className="button-theme py-4 bg-theme-cart text-white">Save Address</button>
      </div>
    </form>

  )
}

export default Address