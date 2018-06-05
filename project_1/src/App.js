import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFile from '@fortawesome/fontawesome-free-solid/faFile'
import faNode from '@fortawesome/fontawesome-free-brands/faNode'
import faGoogleDrive from '@fortawesome/fontawesome-free-brands/faGoogleDrive'
import faJava from '@fortawesome/fontawesome-free-brands/faJava'
import faJs from '@fortawesome/fontawesome-free-brands/faJs'
import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5'
import faReact from '@fortawesome/fontawesome-free-brands/faReact'
import faAngular from '@fortawesome/fontawesome-free-brands/faAngular'
import faGrunt from '@fortawesome/fontawesome-free-brands/faGrunt'
import faPhp from '@fortawesome/fontawesome-free-brands/faPhp'
import ContactForm from './ContactForm';

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="Dkw">
          {Header}
          {Nav}
          {SectionWorksDone}
          {SectionResume}
          {SectionWorkLanguages}
          {SectionUniversity}
          {SectionContact}
          {Footer}
      </div>
    );
  }
}
// Header Area
const Header = (
    <header className="Dkw-header row">
        <h1 className="Dkw-title">DKW.in</h1>
    </header>
)
//FluidImage
function FluidImage(prop) {
    if(prop.href){
        return(<a href={prop.href} target="_blank"><img className={"img-fluid"} src={prop.src} alt={prop.alt}></img></a>)
    }else{
        return(<img className={"img-fluid"} src={prop.src} alt={prop.alt}></img>)
    }
}
// Navigator Area
const DkmNavSeparator = (<div className="Dkw-nav-separator"></div>)
function DkmNavItem(props) {
    return (
        <li className="nav-item">
            <a className="nav-link active" href={props.href}>{props.text}</a>
        </li>
    )
}
const NavSiteMenu = (
    <div className="Dkw-nav-menu col-7 offset-1">
        <ul className="nav row justify-content-center">
            <DkmNavItem text="Home" href="#"/>
            <DkmNavItem text="Works Done" href="#s-works-done"/>
            <DkmNavItem text="Resume" href="#s-resume"/>
            <DkmNavItem text="Work Languages" href="#s-work-languages"/>
            <DkmNavItem text="University" href="#s-university"/>
            <DkmNavItem text="Contact" href="#s-contact"/>
        </ul>
    </div>
)
const NavSiteDescription = (
    <div className="Dkw-nav-site-description text-center col-md-3 offset-md-1">
        William Portfolio
    </div>
)
const Nav = (
    <div id="s-home" className="row Dkw-nav">
        {NavSiteMenu}
        {NavSiteDescription}
    </div>
)

// Section Generics
function SectionHeader(props) {
    return (
        <div className="Dkm-section-header col-11 row justify-content-center">
            <div className={"col-12"}>{props.title}</div>
            <div className={"Dkm-section-header-line col-10"}></div>
            <div className={"col-12 Dkm-section-header-description "}>{props.description}</div>
        </div>
    )
}
// Section Works Done
function Section(prop) {
    return (
        <section id={prop.id} className="row justify-content-center">
            <SectionHeader title={prop.title} description={prop.description}/>
            {prop.content}
        </section>
    )
}
const SectionWorksDoneContent = (
    <div className={"container row"}>
        <div className={"col-9"}><FluidImage src={"images/github-logo.png"} alt="GitHub" href="http://github.com/darkwolf66"/></div>
        <div className={"col-3"}><FluidImage src={"images/dc.png"} alt="DreamCraft" href="https://playdreamcraft.com.br"/></div>
    </div>
)

const SectionWorksDone = (
    <Section
        id={"s-works-done"}
        title={"Works Done"}
        description={"Here you can find my greatest efforts, my main project I am currently working on and some projects on github"}
        content={SectionWorksDoneContent}
    />
)

const SectionResumeContent = (
    <div className={"container row justify-content-center"}>
        <div className={"col-3 resume-fa"}>
            <a href="google.com" className={"a-fa"} target="_blank">
                <FontAwesomeIcon icon={faFile}/>
                <div className={"col-12 text-center resume-fa-desc"}>Download</div>
            </a>
        </div>
        <div className={"col-3 resume-fa"}>
            <a href="google.com" className={"a-fa"} target="_blank">
                <FontAwesomeIcon icon={faGoogleDrive}/>
                <div className={"col-12 text-center resume-fa-desc"}>GoogleDrive</div>
            </a>
        </div>
    </div>
)
const SectionResume = (
    <Section
        id={"s-resume"}
        title={"Resume"}
        description={"If are you interested you can read my resume downloading or opening on GoogleDocs"}
        content={SectionResumeContent}
    />
)

function BrandItem(prop) {
    var classes = prop.col+" brand-fa";
    return (
        <div className={classes}>
            <FontAwesomeIcon icon={prop.fa}/>
            <div className={"col-12 text-center resume-fa-desc"}>{prop.description}</div>
        </div>
    )
}

const SectionWorkLanguagesContent = (
    <div className={"container row justify-content-center"}>
        <BrandItem col={"col-3"} fa={faNode} description={"Node.js"}/>
        <BrandItem col={"col-3"} fa={faJava} description={"Java"}/>
        <BrandItem col={"col-3"} fa={faJs} description={"JavaScript"}/>
        <BrandItem col={"col-3"} fa={faHtml5} description={"Html5"}/>
        <BrandItem col={"col-3"} fa={faReact} description={"React.js"}/>
        <BrandItem col={"col-3"} fa={faAngular} description={"Angular"}/>
        <BrandItem col={"col-3"} fa={faGrunt} description={"Grunt"}/>
        <BrandItem col={"col-3"} fa={faPhp} description={"PHP"}/>
    </div>
)
const SectionWorkLanguages = (
    <Section
        id={"s-work-languages"}
        title={"Work Languages"}
        description={"The following are the languages and technologies I work with"}
        content={SectionWorkLanguagesContent}
    />
)
const SectionUniversityContent = (
    <div className={"container row justify-content-center"}>
        <div className={"col-6"}>
            <FluidImage src={"images/uergs.png"}/>
        </div>
    </div>
)
const SectionUniversity = (
    <Section
        id={"s-university"}
        title={"University"}
        description={"I am currently studying computer engineering at the State University of Rio Grande do Sul"}
        content={SectionUniversityContent}
    />
)
const SectionContactContent = (
    <div className={"container row justify-content-center"}>
        <ContactForm />
    </div>
)
const SectionContact = (
    <Section
        id={"s-contact"}
        title={"Contact"}
        description={"If you are interested in contacting me please use the form below"}
        content={SectionContactContent}
    />
)
const Footer = (
    <footer className={"row justify-content-center"}>
        <div className={"col-4"}>
            Design by William - Copyright 2018 - All rights reserved to William Moraes
        </div>
    </footer>
)
export default App;
