import React from "react"
import * as indexStyles from '../styles/index.module.css'
import vanishingPoint from '../images/vanishing-point.svg'
import flames from '../images/flames.svg'
import curve from '../images/curve.svg'
import logo from '../images/logo.svg'

export default function Home() {
  return (
    <div className={indexStyles.container}>
      <TopBar />
      <SectionImage src={vanishingPoint} alt='many lines moving towards vanishing point'/>
      <SectionImage src={flames} alt='lines curved like untame flames' />
      <SectionImage src={curve} alt='curve in on the roadside' />
    </div>
  );
}

const SectionImage = ({src, alt}) => {
  return (
    <img className={indexStyles.sectionImage} src={src} alt={alt}/>
  );
}

const TopBar = () => {
  return (
    <div className={indexStyles.topBar}>
      <img src={logo} alt='AV Combinator logo'/>
      <NavBar />
    </div>
  );
}

const NavBar = () => {
  return (
  <div className={indexStyles.navBar}>
    <span className={indexStyles.navText}>Home</span>
    <span className={indexStyles.navText}>About Us</span>
    <span className={indexStyles.navText}>Our Team</span>
    <span className={indexStyles.navText}>Contact Us</span>
  </div>
  );
}
