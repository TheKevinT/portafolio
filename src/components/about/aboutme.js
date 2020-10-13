import React, { Component, Fragment } from 'react';
import InfoCurri from '../../assets/dataCurri/infoCurri.json'
import DataAboutme from '../../assets/dataCurri/aboutme.json'


class Aboutme extends Component{

    render(){
        return(

            <Fragment> 
               
               <div className="container">
                    <h1 className="tittle-certificate">KEVIN TIPANTIZA</h1>
                    <h4 style={{color:'grey', textAlign:'center'}}>Estudiante de Ingeniería en Sistemas Informáticos y de Computación</h4>
                    <h6 style={{color:'grey', textAlign:'center'}}>DESARROLLADOR WEB</h6>

                {
                      
                        InfoCurri.map((infoCurri, index)=>{
                            return (
                                <Fragment  key={index}>
                                    {infoCurri.descripcion}
                                </Fragment>
                              
                                           

                            )
                        })
                    
                }

                <hr className="featurette-divider"/>
                <div className="row">
                {
                      
                      DataAboutme.map((aboutme, index)=>{
                          return (
                              <Fragment key={index}>
                    
                                        <div className="col-md-6" >
                                                <div className="card animated fadeIn fast border-info" style={{marginBottom:'15px'}}>
                                                    <div className="card-body">
                                                        <h5 className="card-title text-center"><strong>{aboutme.lenguaje}</strong></h5>
                                                        <hr/>
                                                        <p className="card-text text-center" style={{textAlign:'justify'}}>{aboutme.descripcion} </p>
                                                    </div>
                                                </div>         
                                           
                                        </div>

                              </Fragment>
                          

                          )
                      })
                  
                }
                   </div>
                
                </div>

            
            </Fragment>

            


        )
    }



}


export default Aboutme;