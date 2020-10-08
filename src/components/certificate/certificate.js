import React, { Component, Fragment } from 'react';

import Certi  from '../../assets/img_certificate/dataCerti'


class Certificate extends Component{

    render(){
        return(
            <Fragment>
                <div className="col-md-12">
                    <h2 className="tittle-certificate">Cursos y Certificaciones</h2>

                    {
                        Certi.map((certi, i)=>{

                            return (
                                <div key={i} className="container">
                                    <h4>{certi.title}</h4>
                                      <img className="img-thumbnail"   src = {certi.img}  alt="certificado"/>
                                      <hr/>
                                </div>
                              
                            )

                        })

                    }

                </div>
        
            </Fragment>

         
        )
    }



}


export default Certificate;