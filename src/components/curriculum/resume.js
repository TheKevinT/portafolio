import React, { Component, Fragment } from 'react';
import { Grid, Cell , ProgressBar } from 'react-mdl'
import Logo from '../../assets/img/inicio.jpg'
import dataRef from '../../assets/dataCurri/referencias.json'
import dataCerti from '../../assets/img_certificate/dataCerti'
import infoCurri from '../../assets/dataCurri/infoCurri.json'
import DataTecnico from '../../assets/dataCurri/tecni.json'
import DataProf from '../../assets/dataCurri/prof.json'



class Resume extends Component{

    render(){
        return(
            <Fragment>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img className="curri-img"  src={Logo} alt="imagen" />
    
                        </div>
                        <h2>Kevin Fabricio Tipantiza Toapanta</h2>
                        <h4 style={{color:'grey'}}>PROGRAMADOR</h4>
                        <hr style={{borderTop:'3px solid #2C5364', width:'50%'}}/>

                        <h4><strong>CONTÁCTAME</strong></h4>
                        <div className="container-fluid">
                            <p><i className="fa fa-map-marker icon" aria-hidden="true"/>El beaterio, barrio Carlos Franco Méndez</p>
                            <p><i className="fa fa-phone-square icon" aria-hidden="true"/>(+593) 0997476784</p>
                            <p><i className="fa fa-envelope-square icon" aria-hidden="true"/>kevintipantiza@gmail.com</p>
                        </div>
                     

                        <hr style={{borderTop:'3px solid #2C5364', width:'50%'}}/>
                        <h4><strong>REDES SOCIALES</strong></h4>
                        {/* ICONO LINKEDIN*/}
                                
                        <div className=" container-fluid red-social">
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

                        <hr style={{borderTop:'3px solid #2C5364', width:'50%'}}/>
                        <h4><strong>REFERENCIAS PERSONALES</strong></h4>
                        {
                            dataRef.map((dataRef, index)=>{
                                return(
                                    <div className="container-fluid" key={index}>
                                        <b>{dataRef.nombre}</b>
                                        <p>Rol: {dataRef.rol}</p>
                                        <p>Teléfono: {dataRef.telf}</p>
                                        <p>Correo Electrónico: {dataRef.correo}</p>     
                                    </div>
                                )
                            })

                        }

                         <hr style={{borderTop:'3px solid #2C5364', width:'50%'}}/>

                        <h4><strong>CURSOS Y CERTIFICACIONES</strong></h4>
                        {
                            dataCerti.map((dataCerti, index)=>{
                                return(
                                    <div className="container-fluid" key={index}>
                                        <p>{dataCerti.title}</p>   
                                    </div>
                                )
                            })

                        }

                    </Cell>
                  
                     <Cell className="resume-right-col" col={8}>

                     <div className="container-fluid">
                   
                        <h3><i className="fa fa-user icon-cur"/>PERFIL</h3>
                            {
                                infoCurri.map((infoCurri, index)=>{
                                    return (
                                    <div className="container" key={index} >
                                        <p style={{textAlign:'justify'}}>{infoCurri.descripcion}</p>
                                    </div>

                                    )
                                })
                            }
                            
                            <hr style={{borderTop:'3px solid #e22947', width:'100%'}}/>

                    
                          <h3><i className="fa fa-university icon-cur" />EDUCACIÓN</h3>
                            <Grid>

                                {
                                     infoCurri.map((infoCurri, index)=>{

                                        return(
                                            <Fragment key={index}>
                                                   <Cell col={4}>
                                                       <p >{infoCurri.anio}</p>
                                                      
                                                    </Cell>
                                                   
                                                    <Cell col={8}>
                                                        <h4 style={{marginTop:'0px'}}>{infoCurri.nombre}</h4>
                                                        <p>{infoCurri.diploma}</p>
                                                        <p>{infoCurri.lugar}</p>
                                                        <hr style={{borderTop:'2px solid #e22947', width:'60%'}}/>
                                                    </Cell>
                                                    

                                            </Fragment>
                                        
                                        )
                                     })

                                }
                               
                            </Grid>
                      
                        <h3><i className="fa fa-user-plus icon-cur"/>HABILIDADES</h3>

                        <h4>Técnico</h4>
                        <hr style={{borderTop:'2px solid #e22947', width:'50%'}}/>
                        <Grid>
                      
                        {
                                     DataTecnico.map((dataTecnico, index)=>{

                                        return(
                                        <Fragment key={index}>
                                            <Cell col={12}>
                                               
                                                <div style={{display:'flex'}}>
                                                    {dataTecnico.tecnico}

                                                    
                                                    <ProgressBar
                                                    style={{ marginLeft:'auto', width:'65%'}}
                                                    progress={dataTecnico.progress}
                                                    ></ProgressBar>

                                                  
                                                 
                                                </div>
                                                
                                            </Cell>

                                        </Fragment>
                                        )
                                     })

                        }
                        
                        </Grid>
                        <h4>Profesional</h4>

                        <hr style={{borderTop:'2px solid #e22947', width:'50%'}}/>

                        <Grid>
                        

                            {
                                DataProf.map((dataProf, index)=>{
                                    return(
                                        <Fragment key={index}>
                                            <Cell col={12}>

                                            <p>{dataProf.profesional}</p>


                                            </Cell>
                                        
                                        

                                        </Fragment>

                                    )
                                })
                            }
                           
                        </Grid>

                        
                            <div style={{marginBottom:'15px'}} className="col-md-12">
                          
                                   <div className="col text-center">
                                        <a
                                            className="btn btn-primary btn-lg"
                                            href="curriculum/Curriculum_Tipantiza_Kevin.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "white" }}
                                        >
                                            <i className="mr-2"></i>
                                                Descargar Currículum
                                        </a>
                                    </div>
                            </div>
                             
                      </div>
                    </Cell>

                </Grid>

               

            </Fragment>

        
        )
    }



}


export default Resume;