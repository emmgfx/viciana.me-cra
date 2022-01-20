import { Link } from 'react-scroll';

import './index.scss';

const Header = () => {
  return (
    <header id="top">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <span className="logo mb-4 mb-md-0">
          Josep <span className="accent">Viciana</span>
        </span>
        <nav>
          <ul className="d-flex list-unstyled">
            <li>
              <Link to="top" href="#top">
                About me
              </Link>
            </li>
            <li>
              <Link to="companies" href="#companies">
                Work
              </Link>
            </li>
            <li>
              <Link to="get-in-touch" href="#get-in-touch">
                Get in touch
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
