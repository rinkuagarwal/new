import React from 'react';
import './style.css';
// function Header(){
//     return(
//         <header className="navbar">Text</header>
//     )
// }
class Header extends React.Component{//css
    render(){
      const mystyle={
        color:'grren',
       fontfamily:"arial",
       height:'15px'
      

      };
      return(
        <div>
          <h1 style={mystyle}>Rinky</h1>
        </div>
      );
    }
  }
export default Header