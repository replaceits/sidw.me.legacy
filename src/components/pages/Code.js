
import {SiNetlify, SiReact, SiSass} from 'react-icons/si';

import './Code.scss';

function Code() {
  return (
    <div className='page page-code'>
      <div className='slide'>
        <div className='work'>
          <a className='work-image-wrapper nostyle' href='https://www.cleanlineslawncare.com/'>
            <img 
              className='work-image'
              alt='Clean Lines Lawn Care'
              src='https://s3.us-east-1.amazonaws.com/sidw.me/Screen%20Shot%202021-09-14%20at%204.15.28%20AM.png' 
            />
          </a>
          <div className='work-description'>
            <a
              href='https://www.cleanlineslawncare.com/'
              className='nostyle'
            >
              <h3 className='work-title'>Clean Lines Lawn Care</h3>
            </a>
            <p>
              This is a site I designed and built from the ground up using <SiReact /> React and <SiSass /> Sass.
              <br />
              <br />
              Hosted on <SiNetlify /> Netlify
            </p>
          </div>
        </div>
      </div>

      <div className='slide darken-bg'>
        <div className='work'>
          <div className='work-description'>
            <a
              href='https://laughing-feynman-ddc807.netlify.app/'
              className='nostyle'
            >
              <h3 className='work-title'>Github Battle</h3>
            </a>
            <p>
              An app listing popular languages on github as well as a battle game where you can pin two users up against each other!
              <br />
              <br />
              Built using <SiReact /> React and <SiSass /> Sass.
              <br />
              <br />
              Hosted on <SiNetlify /> Netlify
            </p>
          </div>
          <a className='work-image-wrapper nostyle' href='https://laughing-feynman-ddc807.netlify.app/'>
            <img 
              className='work-image'
              alt='Github Battle'
              src='https://s3.us-east-1.amazonaws.com/sidw.me/Screen%20Shot%202021-09-14%20at%204.49.22%20AM.png' 
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Code;
