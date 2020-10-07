import React, { Component, Fragment } from 'react';
//importar librerias
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

//importar JSON

import DataReact from '../../assets/Data/dataReact.json'
import DataAngular from '../../assets/Data/dataAngular.json'
import DataVue from '../../assets/Data/dataVue.json'

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
                    <div  className="projects-grid">
                    {
                                    DataReact.map((DataReact, i) =>{

                                        return (
                                            
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} key={i}>
                               
                                    <CardTitle style={{color: '#fff', height: '176px',  background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}>
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
                <div  className="projects-grid">
                {
                                DataAngular.map((DataAngular, i) =>{

                                    return (
                                        
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} key={i}>
                           
                                <CardTitle style={{color: '#fff', height: '176px',  background: 'url(https://tecnoinfluencia.com/images/skill/angular.png) center / cover'}}>
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
                <div  className="projects-grid">
                {
                                DataVue.map((DataVue, i) =>{

                                    return (
                                        
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}} key={i}>
                           
                                <CardTitle style={{color: '#fff', height: '176px',  background: 'url(https://www.log2e.com/wp-content/uploads/2019/01/vuejs_tutorial.png) center / cover'}}>
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

                                    )
                                }
                                    
                                )
            }
                     
                        
                </div>

            </Fragment>
            )

        }else if(this.state.activeTab === 3){
            return (
                <div>
                    <h1>HTML/CSS.....</h1>
    
                </div>
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
                      <Tab>HTML/CSS</Tab>
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