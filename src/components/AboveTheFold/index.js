import AboutMe from '../AboutMe';
import MainProposal from '../MainProposal';

import me from '../../images/me.webp';
import doodle1 from '../../images/doodle-1.png';
import doodle2 from '../../images/doodle-2.png';

import './index.scss';

const AboveTheFold = () => {
  return (
    <section className="container">
      <div className="row justify-content-between">
        <div className="col-12 col-lg-6 col-xl-6">
          <MainProposal />
        </div>
        <div className="col-12 col-lg-6 d-none d-lg-block">
          <img src={doodle1} alt="" className="doodle doodle-1" />
          <img src={doodle2} alt="" className="doodle doodle-2" />
          <img src={doodle2} alt="" className="doodle doodle-3" />
          <img src={doodle2} alt="" className="doodle doodle-4" />
          <img src={me} alt="" className="me" width="560px" height="560px" />
        </div>
      </div>
      <AboutMe />
    </section>
  );
};

export default AboveTheFold;
