import React from 'react' 
import ScrollStack, { ScrollStackItem } from '../ScrollStack'
import MagicBento from '../MagicBento'
const ServicesSection = () => {
  return ( 
<div className='flex flex-col items-center w-full mt-8'>
  <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl leading-tight'>Services</h1>
  <MagicBento
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="245, 241, 25"
/>
</div>
  )
}

export default ServicesSection
