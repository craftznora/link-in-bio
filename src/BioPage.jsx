import React from 'react';
import image from './img/profile.png';
import './index.css';

const BioPage = () => {
  return (
    <div className='container'>
      <header>
        <img src={image}/>
      <h1>Sathmin Januth</h1>
      </header>
      <ul>
        <li>
          <a href="https://sathminjanuth.me/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA/ElEQVRIS+2V4Q2CQAyFYQNHcAQdwQ10A91AJ9ENdAPdQDbQERzBDfQ9Qkk9uKMF+WNs0hCO8r6Wa488G9nykfUzD2CCZI5wXlfwpyU5K0DEl5VogevimwBmvg4ETRBLBXsIbyPZnrC+SVXSBaAwASnb4eEhFpACWMRFl1WwmobFANxM6RjLXjKGnXUJg9sAMwRd4ewcr7GzCv1SCBgiTl3OBiF3gWgAM77Bp960g3hC5vAH1zXgjHsZpIGM8jOVg6gBqX73ArnZ3PToWfTyKlbxjaaJtelvAsJq26oc9In+gI/G5ETz2BCr+1qtWWJc/+Reo9H1w+klql96A0i0KRkm4YYCAAAAAElFTkSuQmCC"/>
            Official Website
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@thecodebase">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABD0lEQVRIS+2VYQ3CQAyFmQNwAA5AAeAAHOAAHBAUIIHgAAfgAByAA3AA/ZYrOcpy3bLt35o0t93avutre8t6LUvWcvxeB+AybCkai8dCdCraj1QDsYe8CtZH2N/JynMuMQDBzyGoezLHYCLfbxbgIBurupGD/0nWpQXg9LOGAKBoZAHusjFMAHCivWOj7tRoYAGeDv9ar00A8pLN7eMivx2P2JZuIptUzWoDbAOAtq493x9AGYoIxpwQPFWvLztx2h7APNDCvHhS2EVX8Srj7AXnO0PGsP0UmaLRIU1I4aDBKbPQhEDnxWbAOxStRQFD9cJLgTJUqnB/FCWDXKr+cOKW1Bs1mXFVgMr0dQAuZR9BcygZ+5oPugAAAABJRU5ErkJggg=="/>
            The Code Base
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sathminjanuth">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABgklEQVRIS8WVjU3DMBCF2w3oBtkAmIAyATABZQOYoGUC2IBsABtQJgAmIBvABvR9lS+yTufGqVT1pFNin/Xe/drTyYFlemD8ydEIzhTZtfRK2qQoT4Jo/7S3lvJ9lHb+TBTBvQ4tpRHgUEbvdKDND3kCvP3cE9xwz/XzZQtP8CLDYsjNzE5qLqW3UiJH3qQ3JYJXGch9JGttfiTDaToHwUw6l74nm+1tlz6CH+01Dr3T+iF5lptoBEABpF55zXpcT/DrDgJIuHhP4fEUINIAae55Tl5NYPlcJYIc5DmRRHUrEvy79BhIlDrLdUReTcDwALCLgO55co5VE1iKALA2NCyLLuq86hoAZoMDySKht/oSHZ0EgZ/6UQQ2TP10JhI6iAI3Lj0siwRcE3gVCen6lkJ4IYUguq9whKi34ucgynWBr7jdysKlFxIQLh2zrxCdDWZIwCZ3EYUbK4DjPRPeS+lFow7ckHNpqSYGQs47KV3lG2HUkxkVFK93ytHe5CHHqu0b5XZMGaE3IAUAAAAASUVORK5CYII="/>
            Instagram
          </a>
        </li>
        <li>
          <a href="https://discord.com/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABZklEQVRIS92V603DUAyF2w1gA9igTECZANigTFA6QcsEsAFsAExAmQA2aDaAEXq+yrkyxreJIvVPLVl5+HHsY99kPDqwjA+cf3T8ABNReCP9lr4FOqd6Rl+kTY3qjKITOd9Lr6UAICRYJwBn9g4bRSwiUAZA8seBw7+zjkp4BKD6jZTrEPlV0LmU604iwErvlkMyu5gnT1UEoPqW16E4VH+adcC2vCZZCahRVrNBUxMpyob7ICdapqsPB0TiKymbw0IQ64U46P4zA6qnCy+02g7sWfczM3Imbu0+W4xi9zPI+C+tKpkvgMovDIDuiPVS5uABfuQRuSYR7V4mNEDdp3QunQaAwk4XQBLX61WvDvZtT6Qjdp4CxC1qjB6C+S7BNUowiv3drmwSNgRbu33/TjLJcJ6ZM0kYZjn6gSD8v1zyte754DG7ndR+OFTDygLAyu0T/CbmVxJ3AXTk7G8+/l9mfy4qnlsQEkgZNw0oTAAAAABJRU5ErkJggg=="/>
            Discord
          </a>
        </li>
        <li>
          <a href="https://github.com/craftznora">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABt0lEQVRIS7WV0VHDQAxEkw6gA9NB6MBUAFRA6AAqIFQAHRAqACqAVAAd4A6gBPZ5Tpm1cBz7I5rROLlbaaU9+TyfHdjmB84/20dwpAIW8qvyrEpBv3p+yd/k66EihwhqBT6UxEM5Gm3e7yLaRbBSwN1E+R6Fv80xfQQ3pfKJ+Vs4cl17YCa40OZLAbzq+Sw/ly/l6I5jlWGQh26JxS7lxLaWCT61xqFi3jKHjQVBkDRl3bsGc9xH4NWzTxVUM8ayrMi0zh08aWFp2c70+2NMdmHo8Mew2+JconcB6gJixk9HJg+Yx29lcoJvIauCniJPEGQF2txOQItxmEiDRFOM6YtJ2uZ2Ap+gziSMZHEFGsWc5A64FpiGMN5KRnWMLQVCorDeQ44xpfqQah8JOOIoLmIg6R1TNmgTIPr727nWf8j8RUPzOiUmRyNnAltsfpMJYNzYREMqo0Ja7twxZc8lJR/W6brvsluV6qk6J40kPAPna369tOu7rus4cF44fCOH0C1fDyTn4nMZB79oC4HRuZL/q0xrQUBCZMkFDHbglXIGTenE1yGu5ZxPp2oH7fsmJ1Wm/z04wR8HGFkZKFNq2QAAAABJRU5ErkJggg=="/>
            GitHub
          </a>
        </li>
      </ul>
    </div>
  )
}

export default BioPage;