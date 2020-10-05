import React from 'react';
//importar para las rutas
import { Switch, Route } from 'react-router-dom';

//importar los componentes 
import LandingPage from '../home/landingpage';
import Aboutme from '../about/aboutme';
import Resume from '../curriculum/resume';
import Contact from '../contact/contact';
import Projects from '../projects/projects'; 
import Certificate from '../certificate/certificate';


const Main = () =>(
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/certificate" component={Certificate}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/about" component={Aboutme}/>
        <Route path="/contact" component={Contact}/>
    </Switch>

)

export default Main;