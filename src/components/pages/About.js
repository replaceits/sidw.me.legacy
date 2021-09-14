import React from 'react';

import {AiFillCloseCircle} from 'react-icons/ai';
import {BsCaretDownFill, BsArrowReturnLeft} from 'react-icons/bs';
import {DiJqueryLogo, DiLess, DiHtml5, DiCss3, DiJavascript1} from 'react-icons/di';
import {FaJira, FaTrello, FaSlack, FaGithub, FaFigma} from 'react-icons/fa';
import {GoLocation} from 'react-icons/go';

import './About.scss';

function About() {
  const [lookToggle, setLookToggle] = React.useState(false); //window.localStorage.getItem('look-at-sidebar-seen') === 'true');

  const close = () => {
    setLookToggle(true);
    window.localStorage.setItem('look-at-sidebar-seen', 'true');
  };

  return (
    <div className='page page-about'>
      <div className='slide title-slide'>
        <h1 className='title'>Sidney Williams</h1>
        <BsCaretDownFill className='down-icon' />
      </div>

      <div className='slide darken-bg'>
        <p className='description'>
          I'm a full stack web developer with multiple years of experience in
        </p>

        <ul className='experience-icons nostyle'>
          <li>
            <DiJavascript1 className='icon' />
            Javascript
          </li>
          <li>
            <DiHtml5 className='icon' />
            HTML
          </li>
          <li>
            <DiCss3 className='icon' />
            CSS
          </li>
          <li>
            <DiJqueryLogo className='icon' />
            JQuery
          </li>
          <li>
            <DiLess className='icon' />
            LESS
          </li>
        </ul>
      </div>

      <div className='slide'>
        <p>
          <GoLocation /> Located in Charlottesville Virginia
          <br />
          <br />
          Experience working remotely with
        </p>

        <ul className='experience-icons nostyle'>
          <li>
            <FaJira className='icon' />
            Jira
          </li>
          <li>
            <FaTrello className='icon' />
            Trello
          </li>
          <li>
            <FaSlack className='icon' />
            Slack
          </li>
          <li>
            <FaGithub className='icon' />
            Github
          </li>
          <li>
            <FaFigma className='icon' />
            Figma
          </li>
        </ul>
      </div>

      <div className={`look-at-wrapper ${lookToggle ? 'closed' : ''}`}>
          Take a look at my other pages!
          <BsArrowReturnLeft className='down-left-icon' />
          <AiFillCloseCircle className='close-icon' onClick={close} />
        </div>
    </div>
  );
}

export default About;
