import React, { Component } from 'react'
import './navbarstyle.css'
import { Link, withRouter } from 'react-router-dom'
import { Menuitem } from './Menuitem'
import ReactCurvedText from 'react-curved-text';

export class Navbar extends Component {


state ={clicked : false}
handleclick = () =>{
    this.setState({clicked : !this.state.clicked})
}



buttonhandleclick = () =>{
    this.props.history.push('/signup')
}    
  render() {
    return (
        <nav className='navBar'>
        
        <ReactCurvedText width='384'
                  height='117'
                  cx='142'
                  cy='100'
                  rx='165'
                  ry='31'
                  startOffset='85'
                  reversed={true}
                  text='Streamio'
                  textProps={{className:"logo",   "style": {"fontSize": "40"}}}
                  textPathProps={{ "fill": "#FF0000"}}
                  tspanProps={null}
                  ellipseProps={{ "fill": "none", "stroke": "none" }}
                  svgProps={null} />
        
        <div className='menu-icons' onClick={this.handleclick}>
            <i className={this.state.clicked?
                "fa-solid fa-circle-xmark" :"fa-solid fa-bars"
            }>
                
            </i>
        </div>
        <ul className={this.state.clicked ? 
            "navbaritem active": "navbaritem"
        }>
        

            {Menuitem.map((item,index)=>{
                return(
                    <li key = {index}>
                        <Link className={item.cName} activeClassName="active" to={item.url}>
                        <i className={item.icon}></i>
                        {item.title}
                        </Link>
                    </li>
                )


            }
            
            )}

            
            
        </ul>




    </nav>
    )
  }
}

export default Navbar
