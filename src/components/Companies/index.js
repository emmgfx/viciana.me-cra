import { ReactComponent as Parker } from '../../images/logos/parker.svg';
import { ReactComponent as Amazon } from '../../images/logos/amazon.svg';
import { ReactComponent as KEC } from '../../images/logos/kec.svg';
import { ReactComponent as BuzzFeed } from '../../images/logos/buzzfeed.svg';

import './index.scss';

const Companies = () => {
  const logos = [KEC, Parker, Amazon, BuzzFeed];

  return (
    <section id="companies" className="container">
      <h2>02. I’ve worked in projects for...</h2>
      <div className="row align-items-center">
        {logos.map((Logo, index) => {
          return (
            <div
              key={index}
              className="col-6 col-lg-3"
              style={{ '--index': index }}
            >
              <Logo />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Companies;
