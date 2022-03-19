// import logo from './logo.svg';
import "./App.css";
// import Cerousel from './component/Cerousel';
import Navbar from "./component/Navbar";
import Trusted from "./component/Trusted";
import Work from "./component/Work";
import Casestudy from "./component/Casestudy";
import img1 from "./component/assets/casestudy/watch.jpg";
import img2 from "./component/assets/casestudy/man.jpg";
import img3 from "./component/assets/old_person.jpg";
import Require from "./component/Require";
import Our_team from "./component/Our_team";


function App() {
  return (
    <>
      <Navbar />
      <Trusted />
      <Work />
      {/* <Cerousel /> */}
      <Casestudy
        imgsrc={img1}
        heading="CASE STUDY"
        title="Consetetur Sadipscing"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
      />
      <div className="reverse">
        <Casestudy
          imgsrc={img2}
          heading="CASE STUDY"
          title="Eiusmod Tempor Incididunt"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
        />
      </div>
      <Require />
      <Casestudy
        imgsrc={img3}
        heading="SUCCESS STORY"
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco exaliquip exea commodo proident.
        
        Oupsum dolor
        Creative Director of Company"
      />
      <Our_team />
    </>
  );
}

export default App;
