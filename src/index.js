import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App'
// import car from './car';
//child to parents means date from app to index
//parent to child means daa from index to app
class Bike extends React.Component{//create inheritance
constructor(){
  super();
  this.state={speed:"1000kmph"}//use in class component only, bike is a component
}
render(){
return <h3> i m a {this.state.speed} bike!</h3>;
}
}
class Car extends React.Component{//create inheritance
  constructor(){
    super();
    this.state={color:'blue'}//use in class component only, car is a component
  }
  render(){
  return <h3> i m a {this.state.color} car!</h3>;
  }
  }
  function Apps(){
    var rows=[];
    for (let index = 0; index < 10; index++) {
      rows.push("hurray \n\n");
      
    }
    return (rows)
  }
ReactDOM.render(<Apps />,
    document.getElementById('root')//return the reslt value
  );




















// function main(a, main()){
//   return(

//   )
// }

// console.warn(main);
// ReactDOM.render(<main />,
//   document.getElementById('root')
// );

// ReactDOM.render(<App />,
//   document.getElementById('root')
// );
// ReactDOM.render(<MyIBM />,
//   document.getElementById('root')
// );
// ReactDOM.render(<Footer />,
//   document.getElementById('root1')
// );


