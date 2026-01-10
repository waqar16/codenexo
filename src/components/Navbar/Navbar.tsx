"use client"
import HamburgerSvg from '@/constants/svg/Hamburger.svg'
import Image from 'next/image'
import React from 'react'
import BubbleMenu from '../BubbleMenu';
import CardNav from '../CardNav';
import logo from './logo-main.png';
import StaggeredMenu from '../StaggeredMenu';

// const items = [
//   {
//     label: 'Home',
//     href: '#',
//     ariaLabel: 'Home',
//     rotation: -8,
//     hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
//   },
//   {
//     label: 'About',
//     href: '#',
//     ariaLabel: 'About',
//     rotation: 8,
//     hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
//   },
//   {
//     label: 'Portfolio',
//     href: '#',
//     ariaLabel: 'Portfolio',
//     rotation: 8,
//     hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
//   },
//   {
//     label: 'Team',
//     href: '#',
//     ariaLabel: 'Team',
//     rotation: 8,
//     hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
//   },
//   {
//     label: 'Contact',
//     href: '#',
//     ariaLabel: 'Contact',
//     rotation: -8,
//     hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
//   }
// ];

// const items = [
//     {
//       label: "About",
//       bgColor: "#0D0716",
//       textColor: "#fff",
//       links: [
//         { label: "Team", ariaLabel: "About Team",href:'#' },
//         { label: "Company", ariaLabel: "About Company" ,href:'#'},
//         { label: "Careers", ariaLabel: "About Careers",href:'#' }
//       ]
//     },
//     {
//       label: "Portfolio", 
//       bgColor: "#170D27",
//       textColor: "#fff",
//       links: [
//         { label: "Featured", ariaLabel: "Featured Projects",href:'#' },
//         { label: "Case Studies", ariaLabel: "Project Case Studies",href:'#' }
//       ]
//     },
//     {
//       label: "Contact",
//       bgColor: "#271E37", 
//       textColor: "#fff",
//       links: [
//         { label: "Reach Us", ariaLabel: "Reach us",href:'#' },
//         { label: "Email", ariaLabel: "Email us",href:'#' },
//         { label: "Twitter", ariaLabel: "Twitter",href:'#' },
//         { label: "LinkedIn", ariaLabel: "LinkedIn" ,href:'#'},
//       ]
//     }
//   ];
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];
const Navbar = () => {
  return (
    <StaggeredMenu
      isFixed={true}
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      openMenuButtonColor="black"
      changeMenuColorOnOpen={true}
      colors={['#ffb43bff', '#f39c12']}
      logoUrl="/path-to-your-logo.svg"
      accentColor="#f39c12"
      onMenuOpen={() => console.log('Menu opened')}
      onMenuClose={() => console.log('Menu closed')}
    />
    // <BubbleMenu
    //   logo={<span style={{ fontWeight: 700,color:'#f39c12' }}>CodeNexo</span>}
    //   items={items}
    //   menuAriaLabel="Toggle navigation"
    //   menuBg="#ffffff"
    //   menuContentColor="#111111"
    //   useFixedPosition={false}
    //   animationEase="back.out(1.5)"
    //   animationDuration={0.5}
    //   staggerDelay={0.12}
    // /> 
    //  <CardNav
    //   logo={'/codenexo-logo.jpg'}
    //   logoAlt="Company Logo"
    //   items={items} 
    //   menuColor="#000"
    //   buttonBgColor="#111"
    //   buttonTextColor="#fff"
    //   ease="power3.out"
    // />
    // <div className='flex flex-row items-center justify-between w-full  h-[10vh] relative  px-8 py-2'>

    // <img 
    //         src="/codenexo-logo.jpg" 
    //         alt="Globe icon"
    //         className='w-16 h-auto'

    //       />

    //       <HamburgerSvg/>
    // </div>
  )
}

export default Navbar