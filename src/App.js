import React, { useState, } from 'react';
import Nav from './component/navbar/Nav';
import Footer from './component/footer/Footer';
import Carousel from './component/body/carousel/Carousel';
import Cardgroup from './component/body/multiDiv/Cardgroup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sourcenews from './component/link-component/Sourcenews';

function App(props) {
  const [region, setRegion] = useState('in');
  function getChangedRegion(data) {
    console.log(data)
    setRegion(data)
  }
  return (
    <Router>
      <Nav getRegion={getChangedRegion} />
      <Switch>
        <Route exact path="/">
        <Carousel region={region} />
        <div className="container">
          <Cardgroup region={region} catagory={'general'} name={'GENERAL'} /><br />
          <Cardgroup region={region} catagory={'business'} name={'BUSINESS'} /><br />
          <Cardgroup region={region} catagory={'entertainment'} name={'ENTERTAINMENT'} /><br />
          <Cardgroup region={region} catagory={'health'} name={'HEALTH'} /><br />
          <Cardgroup region={region} catagory={'science'} name={'SCIENCE'} /><br />
          <Cardgroup region={region} catagory={'sports'} name={'SPORTS'} /><br />
          <Cardgroup region={region} catagory={'technology'} name={'TECHNOLOGY'} /><br />
        </div>
        </Route>
        <Route path="/bbc">
          <Sourcenews source="bbc-news"/>
        </Route>
        <Route path="/al-jazeera-english">
          <Sourcenews source="al-jazeera-english"/>
        </Route>
        <Route path="/search/:key">
          <Sourcenews />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
