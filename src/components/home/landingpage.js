import React, { Component, Fragment } from 'react';

//importacion de imgaen logo
import Logo from '../../assets/img/inicio.jpg'

//importacion para las grillas
import { Grid, Cell} from 'react-mdl';


class Landing extends Component{

    render(){
        return(
            <Fragment>
                 <div style={{width: '100%', margin: 'auto'}}>
                    <Grid className="landing-grid">

                        <Cell col={12}>

                            <img 
                            src={Logo}  
                            alt="imagen_inicio"
                            className="avatar-img"
                            />

                            <div className="banner-text">
                                <h1>Desarrollador web</h1>
                                <hr/>

                                <p>¡Bienvenido a mi Portafolio!<br/>Mi nombre es Kevin Tipantiza, soy estudiante de la carrera de Ingeniería en Sistemas Informáticos y de Computación.</p>
                                {/* ICONO LINKEDIN*/}
                                
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/kevin-tipantiza-412544126/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                    </a>

                                {/* ICONO GITHUB*/}
                                
                                    <a href="https://github.com/TheKevinT" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square"  aria-hidden="true"/>
                                    </a>


                                    {/* ICONOS FACEBOOK*/}
                                                                    
                                    <a href="https://www.facebook.com/profile.php?id=100004818427468" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-facebook-square"  aria-hidden="true"/>
                                    </a>

                                </div>


                            </div>

                        </Cell>

                    </Grid>

                </div>

            </Fragment>

  
        )
    }



}


export default Landing;