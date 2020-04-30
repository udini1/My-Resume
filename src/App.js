  import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import history from './history';
import WorkExperiece from './components/WorkExperiece';
import Education from './components/Education';
import SoftwareExperience from './components/SoftwareExperience';
import MilitaryService from './components/MilitaryService';
import Languages from './components/Languages';
import AboutMe from './components/AboutMe';
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>

          <Route exact path="/" component={()=>{
            return <MainPage history={history}/>
          }}
          />

          <Route exact path="/aboutMe" component={()=>{
            return <AboutMe history={history}/>
          }}
          />

          <Route exact path='/WorkExperience' component={()=>{
            return <WorkExperiece history={history}/>
          }}
          />

          <Route exact path='/Education' component={()=>{
            return <Education/>
          }}
          />


          <Route exact path='/SoftwareExperience' component={()=>{
            return <SoftwareExperience/>
          }}
          />

          <Route exact path='/MilitaryService' component={()=>{
            return <MilitaryService/>
          }}
          />

          <Route exact path='/Languages' component={()=>{
            return <Languages/>
          }}
          />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
