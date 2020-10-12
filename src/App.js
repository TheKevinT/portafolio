import React from 'react';
import './App.css';
//importar
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/Routes/main';
//importar Link para Router
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/"><strong>MI PORTAFOLIO</strong></Link>} scroll>
                <Navigation>
                    <Link to="/about">ACERCA DE MI</Link>
                    <Link to="/resume">CURRÍCULUM</Link>
                    <Link to="/certificate">CERTIFICACIONES</Link>
                    <Link to="/projects">PROYECTOS</Link>
                    <Link to="/contact">CONTACTO</Link>
                </Navigation>
            </Header>
            <Drawer  title={<Link style={{textDecoration:'none', color:'black'}} to="/"><strong>MI PORTAFOLIO</strong></Link>}>
                <Navigation>
                    <Link to="/about">SOBRE MI</Link>
                    <Link to="/resume">CURRÍCULUM</Link>
                    <Link to="/certificate">CERTIFICACIONES</Link>
                    <Link to="/projects">PROYECTOS</Link>
                    <Link to="/contact">CONTACTO</Link>
                </Navigation>
            </Drawer>
            <Content>
             
                <Main/>

            </Content>
        </Layout>
       </div>

    </div>
  );
}

export default App;
