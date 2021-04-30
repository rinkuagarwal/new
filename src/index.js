import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Header from './Header';
import Footer from './Footer';
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
  function Loop(){
    var rows=["hello","A"]
    var element=[]
    for (let index = 0; index < rows.length; index++) {
      element.push(rows[index]);
       
      
    }
    return (element)
  }
  //--------------------------------------
  class MyHeader extends React.Component{//css
    render(){
      const mystyle={
        color:'white',
        backgroundColor:'blue',
        padding:"60px"

      };
      return(
        <div>
          <h1 style={mystyle}>Hello,here i m</h1>
        </div>
      );
    }
  }
  //----------------------------------------------
  class MyApp extends React.Component{ //using props
    render(){
      return <h1>I am in {this.props.brand}</h1>
    }
  }
  const myelement=<MyApp brand="IBM" />
  //----------------------------------------
  function Name(){
    return(
      <h1>I am reading a novel called {this.props.novel}</h1>
    )
  }
 //---------------------------------------
 //create a variable app and send it to home component
//  class Home extends React.Component{
//    render(){
//     var app="fan"
//      return(
//        <h1>we have {app} in the house</h1>
//      )
//    }
//  }
 //or
 class Home extends React.Component{
  render(){
    return (
    <h1>this is the {this.props.data}</h1>
    )
  }
 }
//  //class Data extends React.Component{
//    render(){
//      const app="people";
//      return(
//        <div>
//          <h2>who is in the home?</h2>
//          <Home data={app}/>
//        </div>
//      )
//    }
//  }
 //------------props in constructor----------
 class Data extends React.Component{
   constructor(props){
   super(props);
   }
   render(){
     return <h1>I m a {this.props.model}</h1>
  
   }
 }
 
// ReactDOM.render(<Data model='mustey' />,
//     document.getElementById('root')//return the reslt value
//   );
  //-------------------------------------showing header and footer using two component in two different files called footer and header
  function Show(){
    return(
      <div>
        <Header />
        <br></br>
        <Footer />
      </div>
    )
  }
  // ReactDOM.render(<Show />,
  //     document.getElementById('root')//return the reslt valu
  //   )
    //-------------------------------
    class App extends React.Component{
      like(){
        alert('liked')
      }
      dislike(){
        alert('disliked')
      }
     render(){
       return(
         <div>
           <h1>Destination u like or dislike</h1>
           <ol>
             <li>Paris<button onClick={this.like}>like</button><button onClick={this.dislike}>dislike</button></li>
             <li>Goa<button onClick={this.like}>like</button><button onClick={this.dislike}>Dislike</button></li>
           </ol>
         </div>
       )
     }
    }
    // ReactDOM.render(<App />,
    //   document.getElementById('root')//return the reslt valu
    // )

//---------------------------------------------
class MyFruit extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Fruit:"mango",
      color:"yellow"
    }
  }
    changeColor=()=>{
      this.setState({color:"green"});
    }
  
  render(){
    return(
      <div>
        <h1>The name of fruit is {this.state.Fruit}</h1>
    <p> {this.state.Fruit} is {this.state.color} color</p>
    <button onClick={this.changeColor}>color change</button>
      </div>
    );
  }
}
// ReactDOM.render(<MyFruit/>,
//   document.getElementById('root')//return the reslt valu
// )
//-------------- lifecycle-----------------------
//---------mount phase
//3 phase
//1. constructor  constructor(props){
//2.getderivedstatefromprops static getDerivedStateFromProps(props, state) {
  //   return {favBook: props.favcol };
  // }
//3.render
//4. componentDidMount() {
//   setTimeout(() => {
//     this.setState({favBook: "abc"})
//   }, 1000)
// }
class Headers extends React.Component{
  constructor(props){
    super(props)
    this.state={favBook:"qwertyu"}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favBook: "abc"})
    }, 1000)
  }
  // static getDerivedStateFromProps(props, state) {
  //   return {favBook: props.favcol };
  // }
  render(){
    return(
    <h1>my favourite book is {this.state.favBook}</h1>
    )
  }
}
// ReactDOM.render(<Headers />,
//   document.getElementById('root')//return the reslt valu
// )

//--------update phase---------------------
class Update extends React.Component{
  constructor(props){
    super(props)
    this.state={favbook:'qwerty'}
  }
  shouldComponentUpdate() {
    return false;
  }
  // changeColor = () => {
  //   this.setState({favbook: "abc"});
  // }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favbook: "abc"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "initial book " + prevState.favbook;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favbook;
  }
  render(){
    return(<div>
    <h1>my favourite book is {this.state.favbook}</h1>
    {/* /* <button type="button" onClick={this.changeColor}>Change name</button> */} 
    <div id="div1"></div>
        <div id="div2"></div>
    </div>
    )
  }
}
// ReactDOM.render(<Update />,
//   document.getElementById('root')//return the reslt valu
// )
//-------------------------unmount phase------------------
class Munt extends React.Component{
  constructor(props){
    super(props)
    this.state={show:'true'}
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}
class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<Munt />,
  document.getElementById('root')//return the reslt valu
)













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


