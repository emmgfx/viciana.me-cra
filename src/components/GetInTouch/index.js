import './index.scss';

import { ReactComponent as Wordpress } from '../../images/icon-wordpress.svg';
import { ReactComponent as StackOverflow } from '../../images/icon-stack-overflow.svg';
import { ReactComponent as GitHub } from '../../images/icon-github.svg';
import { ReactComponent as LinkedIn } from '../../images/icon-linkedin.svg';

const GetInTouch = () => {
  return (
    <section id="get-in-touch" className="container text-center">
      <h2>04. Get in touch</h2>
      <p>
        Fortunately, it's been a long time since I quit social media, so you
        could have some troubles contacting me through Twitter, Instagram or any
        other. If you want to contact me, the best options are to write me a{' '}
        <a target="_blank" href="https://t.me/emmgfx" rel="noreferrer noopener">
          Telegram
        </a>{' '}
        or an email to{' '}
        <a
          href="mailto: josep@viciana.me"
          target="_blank"
          rel="noreferrer noopener"
        >
          josep@viciana.me
        </a>
        .
      </p>
      <div className="social d-flex align-items-center justify-content-center">
        <a
          title="Wordpress"
          href="https://www.emm-gfx.net/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Wordpress />
        </a>
        <a
          title="GitHub"
          href="https://github.com/emmgfx"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHub />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/emmgfx/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedIn />
        </a>
        <a
          title="Stack Overflow"
          href="https://stackoverflow.com/users/1378408/emmgfx"
          target="_blank"
          rel="noreferrer noopener"
        >
          <StackOverflow />
        </a>
      </div>
    </section>
  );
};

export default GetInTouch;
