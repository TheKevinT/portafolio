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

      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
            <Header title={<span><strong>Mi portafolio</strong></span>}>
                <Navigation>
                    <Link to="/about">SOBRE MI</Link>
                    <Link to="/resume">CURRÍCULUM</Link>
                    <Link to="/certificate">CERTIFICACIONES</Link>
                    <Link to="/projects">PROYECTOS</Link>
                    <Link to="/contact">CONTACTO</Link>
                </Navigation>
            </Header>
            <Drawer title="Acerca de ">
                <Navigation>
                    <Link to="/about">SOBRE MI</Link>
                    <Link to="/resume">CURRÍCULUM</Link>
                    <Link to="/certificate">CERTIFICACIONES</Link>
                    <Link to="/projects">PROYECTOS</Link>
                    <Link to="/contact">CONTACTO</Link>
                </Navigation>
            </Drawer>
            <Content>
              <div className="page-content"/>
                <Main/>

            </Content>
        </Layout>
       </div>

    </div>
  );
}

export default App;
