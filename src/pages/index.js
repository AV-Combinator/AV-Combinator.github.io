import React from "react"
import * as indexStyles from '../styles/index.module.css'
import { Link } from "react-scroll"
import useWindowDimensions from '../utils/useWindowDimensions'

// import icons used in webpages
import logo from '../assets/logo.svg'
import linkedinIcon from '../assets/linkedin.svg'
import emailIcon from '../assets/email.svg'

// import user profile images
import nehmad from '../assets/nehmad.jpeg'
import sun from '../assets/sun.jpeg'
import hu from '../assets/hu.jpeg'

// import white paper document
import whitePaper from "../assets/AV Combinator MSS White Paper.pdf"


const memberData = [
  {
    name: 'Michael Nehmad',
    img: nehmad,
    alt: 'Michael Nehmad in a suit',
    text: "Michael is a mobility enthusiast passionate about reshaping cities of the future through transportation innovations - cars, scooters, bikes, AVs, or anything else that has yet to be invented to get you from A-to-B. He is pursuing his MBA at Stanford, and has previously worked at Honda's Open Innovation Lab and Argo AI.",
    linkedin: "https://www.linkedin.com/in/michael-nehmad-6489b248/",
    email: "mnehmad808@gmail.com"
  },
  {
    name: 'Richard Sun',
    img: sun,
    alt: 'Richard Sun smiling',
    text: 'Richard is passionate about the intersection of infrastructure and technology. His previous experience includes urban innovation and technology (Sidewalk Labs), public transit planning & funding (New Jersey TRANSIT), and general management &  strategy (McKinsey & Company).',
    linkedin: "https://linkedin.com/in/richardsun",
    email: "richardmsun@gmail.com"
  },
  {
    name: 'Jenn Hu',
    img: hu,
    alt: 'Jenn Hu in a white top.',
    text: "Jenn is a public-interest technologist working in the intersection of policy and technology. She will graduate from Stanford University with a MS in Management Science & Engineering and a BA in International Relations.",
    linkedin: 'https://www.linkedin.com/in/jenn-hu98/',
    email: 'zhenqi.hu98@gmail.com'
  }
]



export default function Home() {
  let { width } = useWindowDimensions();
  let [isSmallScreen, setSmallScreen] = React.useState(false)
  let widthRem = width/10;
  if (widthRem < 109.8) {
    if (!isSmallScreen)
      setSmallScreen(true)
  } else {
    if (isSmallScreen)
      setSmallScreen(false)
  }
  let homeStyle = isSmallScreen ? indexStyles.homeSmall : indexStyles.home;
  let aboutStyle = isSmallScreen ? indexStyles.aboutSmall : indexStyles.about;
  let contactStyle = isSmallScreen ? indexStyles.contactSmall : indexStyles.contact;
  return (
    <div>
      <TopBar isSmallScreen={isSmallScreen}/>
        <Section id='home' className={`${indexStyles.container} ${homeStyle}`} >
          <h1>A New Approach to Autonomous Vehicle Safety</h1>
          <Button 
            padding='small'
            onClick={() => document.getElementById('white-paper').click()}>
              Read Our White Paper
          </Button>
        </Section>

        <Section id='about-us' className={`${indexStyles.container} ${aboutStyle}`} >
          <h1>About Us</h1>
          <div className={`${indexStyles.bodyText} ${indexStyles.text}`}>
            AV Combinator is a safety advisory group that aims to revolutionize the way technologists, policymakers, and consumers think about autonomous vehicle safety. <br /> <br />
            We believe what is needed, yet missing from the current autonomous vehicle ecosystem, is an approach to safety that is both feasible and comprehensive. <br /> <br />
            To address this gap, we have put forth the <em><a id='white-paper' href={whitePaper}>Autonomous Vehicle Modular Safety Suite White Paper</a></em>. <br /> <br /> <br />
            View a summary of our white paper <a href='https://google.com'>here</a>. 
          </div>
        </Section>

        <Section id='our-team' className={indexStyles.container}>
          <h1>Our Team</h1>
          <div className={`${indexStyles.memberCardList} ${indexStyles.row}`}>
            {memberData.map((member) => <MemberCard {...member} />)}
          </div>
        </Section>

        <Section id='contact-us' className={`${indexStyles.container} ${contactStyle}`} >
          <h1>Contact Us</h1>
          <div className={`${indexStyles.contactSection} ${indexStyles.row}`}>
            <div className={`${indexStyles.contactText} ${indexStyles.text}`}>
              Submit your queries here and we will get back to you as soon as possible. 
            </div>
            <ContactForm />
          </div>
        </Section>

      </div>
  );
}

const TopBar = ({isSmallScreen}) => {
  return (
    <header className={`${indexStyles.topBar} ${indexStyles.row}`}>
      <img src={logo} alt='AV Combinator logo'/>
      <nav>
        {isSmallScreen ? 
        <NavMenu /> :
        <NavBar className={`${indexStyles.navBar} ${indexStyles.row}`}/>}
      </nav>
    </header>
  );
}

const NavMenu = () => {
  return (
    <div className={indexStyles.navMenu}>
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <NavBar className={indexStyles.navMenuItems}/>
    </div>
  );
}

const NavBarItem = ({name, id}) => {
  const textStyle = `${indexStyles.text} ${indexStyles.navText}`
  return (
    <Link
      className={textStyle}
      activeClass={`${textStyle} ${indexStyles.link}`}
      to={id}
      spy={true}
      smooth={true}
      duration={500}>
        {name}
    </Link>
  );
}

const NavBar = ({className}) => {
  return (
    <ul className={className}>
      <li><NavBarItem id='home' name='Home' /></li>
      <li><NavBarItem id='about-us' name='About Us' /></li>
      <li><NavBarItem id='our-team' name='Our Team' /></li>
      <li><NavBarItem id='contact-us' name='Contact Us' /></li>
    </ul>
  );
}

const Section = ({id, className, children}) => {
  return(
    <section id={id} className={className}>
      {children}
    </section>
  );
}

const Button = ({padding, onClick, children}) => {
  const buttonPadding = padding === 'small' ? indexStyles.padS : indexStyles.padMed;
  return (
    <div 
      role='button'
      className={`${indexStyles.button} ${buttonPadding}`}
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}>
        <span className={indexStyles.text}>{children}</span>
    </div>
  );
}

const MemberCard = ({name, text, img, alt, linkedin, email}) => {
  return (
    <div className={indexStyles.memberCard}>
      <img className={indexStyles.memberImage} src={img} alt={alt} />
      <span className={`${indexStyles.memberName} ${indexStyles.text}`}>{name}</span>
      <div className={`${indexStyles.memberBody} ${indexStyles.text}`}>{text}</div>
      <div className={indexStyles.socialIcons}>
        <a href={`mailto:${email}`}><img src={emailIcon} alt='email icon'/></a>
        <a href={linkedin}><img src={linkedinIcon} alt='Linkedin logo'/></a>
      </div>
    </div>
  )
}

const FormField = ({name, type}) => {
  return (
    type === 'long' ?
      <textarea 
        className={`${indexStyles.formField} ${indexStyles.text} ${indexStyles.long}`} 
        placeholder={name}/> :
      <input 
        className={`${indexStyles.formField} ${indexStyles.text}`} 
        type='text' 
        placeholder={name}/>  
  )
}

const ContactForm = () => {
  return (
    <form className={indexStyles.form}>
      <div className={indexStyles.row}>
        <FormField name='First Name'/>
        <FormField name='Last Name' />
      </div>
      <div className={indexStyles.row}>
        <FormField name='Email' />
      </div>
      <FormField name='Message' type='long'/>
      <Button 
        padding={'med'} 
        onClick={() => console.log('submit')}>
          Submit
      </Button>
    </form>
  );
}




