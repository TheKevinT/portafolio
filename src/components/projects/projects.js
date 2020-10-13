import React, { Component, Fragment } from 'react';
//importar librerias
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

//importar JSON

import DataReact from '../../assets/Data/dataReact.json'
import DataAngular from '../../assets/Data/dataAngular.json'
import DataVue from '../../assets/Data/dataVue.json'
import DataHtmlCss from '../../assets/Data/dataHtmlCss.json'

class Projects extends Component{

    constructor (props){
        super(props);
        this.state = {
            activeTab:0
        };
    }
//para manejar el indice de los tabs
    toggleCategories() {
        if(this.state.activeTab === 0){
            return (
                <Fragment>
                    <div  className="row">
                    {
                                    DataReact.map((DataReact, i) =>{

                        return (
                            <div className="col-md-4" style={{marginBottom:'50px'}} key={i}>
                                            
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                               
                                    <CardTitle style={{color: '#fff', height: '176px',  background: 'url(img_project/react_img.png) center / cover'}}>
                                             {DataReact.title}
                                    </CardTitle> 
                                    <CardText style={{textAlign: 'justify'}}>
                                        {DataReact.description}
                                    </CardText>
                                    <CardActions border>
                                        <Button style={{marginLeft:'20px'}} raised colored> <a className="enlaceCodigo"  href={DataReact.enlace} rel="noopener noreferrer" target="_blank">GITHUB</a></Button>
                                    
                                        <Button style={{marginLeft:'80px'}} raised colored><a className="enlaceCodigo" href={DataReact.demo} rel="noopener noreferrer" target="_blank">LIVE DEMO</a></Button>
                                    </CardActions>
                            
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                            </div>

                        )
                    }
                                        
                     )
                }
                         
                            
                    </div>

                </Fragment>
              
                
            )
    
    
        }else if(this.state.activeTab === 1){
            return (

                <Fragment>
                    <div className="row">
              
                {
                     DataAngular.map((DataAngular, i) =>{

                            return (
                                 <div className="col-md-4" style={{marginBottom:'50px'}} key={i}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                                            
                                    <CardTitle style={{color: '#fff', height: '176px',  background: 'url(img_project/angular.png) center / cover'}}>
                                                            {DataAngular.title}
                                        </CardTitle> 
                                            <CardText style={{textAlign: 'justify'}}>
                                                        {DataAngular.description}
                                             </CardText>
                                             <CardActions border>
                                                <Button style={{marginLeft:'20px'}} raised colored> <a className="enlaceCodigo"  href={DataAngular.enlace} rel="noopener noreferrer" target="_blank">GITHUB</a></Button>
                                                    
                                                <Button style={{marginLeft:'80px'}} raised colored><a className="enlaceCodigo" href={DataAngular.demo} rel="noopener noreferrer" target="_blank">LIVE DEMO</a></Button>
                                                    </CardActions>
                                            
                                            <CardMenu style={{color: '#fff'}}>
                                                    <IconButton name="share" />
                                            </CardMenu>
                                    </Card>
                                </div>

                                )
                         }
                                    
                    )
                }
                     
                </div>
              </Fragment>
            )
    

        }else if(this.state.activeTab === 2){
            return (
                <Fragment>
                    <div className="row">

                       {
                             DataVue.map((DataVue, i) =>{

                                return (
                                        
                                    <div className="col-md-4" style={{marginBottom:'50px'}} key={i}>
                                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                                                
                                            <CardTitle style={{color: '#fff', height: '176px',  background: 'url(img_project/vuejs_img.png) center / cover'}}>
                                                                {DataVue.title}
                                            </CardTitle> 
                                            <CardText style={{textAlign: 'justify'}}>
                                                            {DataVue.description}
                                            </CardText>
                                            <CardActions border>
                                                <Button style={{marginLeft:'20px'}} raised colored> <a className="enlaceCodigo"  href={DataVue.enlace} rel="noopener noreferrer" target="_blank">GITHUB</a></Button>
                                                        
                                                <Button style={{marginLeft:'80px'}} raised colored><a className="enlaceCodigo" href={DataVue.demo} rel="noopener noreferrer" target="_blank">LIVE DEMO</a></Button>
                                            </CardActions>
                                                
                                            <CardMenu style={{color: '#fff'}}>
                                                <IconButton name="share" />
                                            </CardMenu>
       
                                        </Card>
                                     </div>
                                    
                                )
                            }
                                    
                                )
                        }
                     
                </div>
            </Fragment>
            )

        }else if(this.state.activeTab === 3){

           
            return (
                <Fragment>
                    <div className="row">
               
                        {
                            DataHtmlCss.map((DataHtmlCss, i) =>{

                                return (
                                    <div className="col-md-4" style={{marginBottom:'50px'}} key={i}>
                                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} >
                                                
                                            <CardTitle style={{color: '#fff', height: '176px',  background: 'url(img_project/htmlCss_img.png) center / cover'}}>
                                                                {DataHtmlCss.title}
                                            </CardTitle> 
                                            <CardText style={{textAlign: 'justify'}}>
                                                            {DataHtmlCss.description}
                                            </CardText>
                                            <CardActions border>
                                                <Button style={{marginLeft:'20px'}} raised colored> <a className="enlaceCodigo"  href={DataHtmlCss.enlace} rel="noopener noreferrer" target="_blank">GITHUB</a></Button>
                                                        
                                                <Button style={{marginLeft:'80px'}} raised colored><a className="enlaceCodigo" href={DataHtmlCss.demo} rel="noopener noreferrer" target="_blank">LIVE DEMO</a></Button>
                                            </CardActions>
                                                
                                            <CardMenu style={{color: '#fff'}}>
                                                <IconButton name="share" />
                                            </CardMenu>
                                        </Card>
                                    </div>
             
                                    )
                               }
                                    
                            )
                        }
                       
                </div>
              
            </Fragment>
            )
        

        }
    }

   
    render(){
        return(

          <Fragment>
              <div className="category-tabs">
                  <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                      <Tab>React</Tab>
                      <Tab>Angular</Tab>
                      <Tab>VueJS</Tab>
                      <Tab>HTML/CSS/JS</Tab>
                  </Tabs>

       
                    <Grid>
                        <Cell col={12} style={{height:'100%'}}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

              </div>
          </Fragment>
        )
    }



}


export default Projects;