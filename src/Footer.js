import React from 'react';
// function Footer(){
//     return(
//         <Footer>
//       <h2>I am footer component</h2>
//       </Footer>
//     )
//   }
class Footer extends React.Component{//css
  render(){
    const mystyle={
      color:'red',
      height:'36px',
      fontfamily:'arial'

    };
    return(
      <div>
        <h1 style={mystyle}>RCEW</h1>
      </div>
    );
  }
}
  export default Footer