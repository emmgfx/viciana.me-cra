import Header from './components/Header';
import AboveTheFold from './components/AboveTheFold';
import Companies from './components/Companies';
import Articles from './components/Articles';
import GetInTouch from './components/GetInTouch';
import Backgrounds from './components/Backgrounds';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';
import './styles.scss';

const App = () => {
  return (
    <>
      <Backgrounds />
      <Header />
      <AboveTheFold />
      <Companies />
      <Articles />
      <GetInTouch />
    </>
  );
};

export default App;
