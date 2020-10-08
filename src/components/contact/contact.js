import React, { Component, Fragment } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Logo from '../../assets/img/inicio.jpg'



class Contact extends Component{

    render(){
        return(
            <Fragment>
                <div className="contact-body">
                    <Grid className="contact-grid">
                        <Cell col={6}>
                            <h2>Kevin Tipantiza</h2>
                            <img src={Logo} alt="imagen" style={{ height:'250px'}}/>
                            <p style={{width:'75%', margin:'auto', paddingTop:'1em', textAlign:'justify'}}>
                            Soy estudiante de la carrera de Ingeniería en Sistemas Informáticos y de Computación de la Escuela Politécnica Nacional (Quito-Ecuador),  apasionado por aprender y con experiencia en el desarrollo Web. He participado en el desarrollo de software para varias secciones de la carrera. Me considero un líder nato y con la capacidad para adaptarse y trabajar en equipo</p>
                            
                        </Cell>
                        <Cell col={6}>
                           <h2>Contáctame</h2>
                           <hr/>
                           <div className="contact-list">
                            <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                            <i className="fa fa-phone-square" aria-hidden="true"/>
                                            (+593) 0997476784
                                        </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                            <i className="fa fa-envelope-square" aria-hidden="true"/>
                                            kevintipantiza@gmail.com
                                        </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                            Kevin Tipantiza
                                        </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                            <i className="fa fa-facebook-square" aria-hidden="true"/>
                                            Kevin Tipantiza
                                        </ListItemContent>
                                    </ListItem>
                            </List>
                           </div>

                           


                        </Cell>

                    </Grid>

                </div>

            </Fragment>
        )
    }



}


export default Contact;