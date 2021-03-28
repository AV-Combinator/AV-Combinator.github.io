import React from "react"
import * as indexStyles from '../styles/index.module.css'
import logo from '../images/logo.svg'
import nehmad from '../images/nehmad.jpeg'
import sun from '../images/sun.jpeg'
import hu from '../images/hu.jpeg'
import niehaus from '../images/niehaus.jpeg'
import lawrence from '../images/lawrence.jpeg'
import linkedin from '../images/linkedin.svg'
import email from '../images/email.svg'

export default function Home() {
  return (
    <div className={indexStyles.container}>
      <div>
        <TopBar />
        <Header>A New Approach to Autonomous Vehicle Safety</Header>
        <Button padding='small'>Read Our White Paper</Button>
      </div>

      <div style={{margin: '400px'}}></div>

      <div>
        <Header>About Us</Header>
        <div className={indexStyles.bodyText}>
          AV Combinator is a safety advisory group that aims to revolutionize the way technologists, policymakers, and consumers think about autonomous vehicle safety. <br /> <br />
          We believe what is needed, yet missing from the current autonomous vehicle ecosystem, is an approach to safety that is both feasible and comprehensive. <br /> <br />
          To address this gap, we have put forth the <em className={indexStyles.link}>Autonomous Vehicle Modular Safety Suite White Paper</em>. <br /> <br /> <br />
          View a summary of our white paper <span className={indexStyles.link}>here</span>. 
        </div>
      </div>

      <div style={{margin: '200px'}}></div>

      <div>
        <Header>Our Team</Header>
        <div className={indexStyles.memberCardList}>
          <MemberCard name='Michael Nehmad' img={nehmad} alt='Michael Nehmad in a suit'/>
          <MemberCard name='Richard Sun' img={sun} alt='Richard Sun smiling'/>
          <MemberCard name='Jenn Hu' img={hu} alt='Jenn Hu in a white top'/>
          <MemberCard name='Julius Niehaus' img={niehaus} alt='Julius Niehaus wearing nice clothes'/>
          <MemberCard name='Troy Lawrence' img={lawrence} alt='Trow Lawrence in a white polo'/>
        </div>
      </div>

      <div style={{margin: '130px'}}></div>

      <div>
        <Header>Contact Us</Header>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div className={indexStyles.bodyText}>
            Submit your queries here and we will get back to you as soon as possible. 
          </div>
          <div>
            <div style={{display: 'flex', flexDirection: 'row', width: '30rem'}}>
              <FormField name='First Name'/>
              <FormField name='Last Name' />
            </div>
            <FormField name='Email' />
            <FormField name='Message' type='long'/>
            <Button padding={'med'}>Submit</Button>
          </div>
        </div>
      </div>


    </div>
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

const Header = ({children}) => {
  return (
    <div className={indexStyles.header}>
      {children}
    </div>
  );
}

const Button = ({padding, children}) => {
  const buttonPadding = padding === 'small' ? indexStyles.padS : indexStyles.padMed;
  return (
    <div className={`${indexStyles.button} ${buttonPadding}`}>
      <span className={indexStyles.buttonText}>{children}</span>
    </div>
  );
}

const MemberCard = ({name, text, img, alt}) => {
  return (
    <div className={indexStyles.memberCard}>
      <img className={indexStyles.memberImage} src={img} alt={alt} />
      <span className={indexStyles.memberName}>{name}</span>
      <div className={indexStyles.memberBody}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu orci, malesuada vel turpis id, porttitor elementum eros. Vivamus non erat venenatis, tempus ante gravida, fermentum sapien. Nam quis ligula sem. Etiam a sollicitudin urna. Fusce eleifend dapibus ipsum. Ut commodo nibh nunc, et bibendum odio scelerisque ut.
      </div>
      <div style={{width: '50%', justifyContent: 'space-evenly', display: 'flex'}}>
        <img src={email} alt='email icon'/>
        <img src={linkedin} alt='Linkedin logo'/>
      </div>
    </div>
  )
}

const FormField = ({name, type}) => {
  const longResponse = type === 'long' ? indexStyles.longResponse : '';
  return (
    <div className={`${indexStyles.formField} ${longResponse}`}>
      <span className={indexStyles.formText}>{name}</span>
    </div>
  )
}
