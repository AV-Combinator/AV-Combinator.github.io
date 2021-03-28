import React from "react"
import * as indexStyles from '../styles/index.module.css'
import vanishingPoint from '../images/vanishing-point.svg'
import flames from '../images/flames.svg'
import curve from '../images/curve.svg'

export default function Home() {
  return (
    <div className={indexStyles.container}>
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
