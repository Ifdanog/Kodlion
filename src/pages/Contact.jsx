import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { motion as m } from 'framer-motion'

function Contact() {
  const center = [7.7891, 5.5052]
  return (
    <div className="h-screen flex justify-center items-center">
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }}  className='block md:grid grid-cols-7 gap-8 bg-black w-3/4 shadow-xl mx-auto my-20 p-0 md:p-10'>
        <form className="col-span-3 p-10 md:p-0">
          <div>
            <label htmlFor="name" className='text-white text-xs poppins leading-5 py-2'>Name</label>
            <input type="text" name='name' className='w-full mt-2 py-2 px-4 poppins text-sm outline-0' />
          </div>
          <div className='mt-4'>
            <label htmlFor="email" className='text-white text-xs poppins leading-5 py-2'>Email</label>
            <input type="email" name='email' className='w-full mt-2 py-2 px-4 poppins text-sm outline-0' />
          </div>
          <div className='mt-4'>
            <label htmlFor="message" className='text-white text-xs poppins leading-5 py-2'>Message</label>
            <textarea type="text" name='message' className='w-full h-56 mt-2 py-2 px-4 poppins text-sm outline-0'></textarea>
          </div>
        </form>
        <div className="col-span-4">
          <MapContainer className='w-full h-[20rem]' center={center} zoom={13} scrollWheelZoom={false}>
            <TileLayer className='w-full h-full'
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={{lat: 44, lng: 44}}>
              <Popup>Hello World</Popup>
            </Marker>
          </MapContainer>
        </div>
    </m.div>
      </div>
  )
}

export default Contact