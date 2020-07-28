import React from 'react';
import DateNow from './component/DateNow';

 
class Toggle extends React.Component {
  
    state = { 
      person : {
    fullName : "Taher Marzouk"
    ,bio :"hello I am taher "
    
  },
  show: true,
  time : new Date(), }

  toggle = () => this.setState((currentState) => ({show: !currentState.show})) ;
  



  render() {
    return(
    <div >
      <button onClick={this.toggle}>
          
        </button>    
    {this.state.show  && <div style={{marginLeft:'200px'}}><img  src = "ava.png" alt = "hello" /><br/>{this.state.person.fullName}<br/>{this.state.person.bio}<br/>{this.state.person.profession}</div>}
    <DateNow/>
    </div>);
  
  }
  }


  export default Toggle;
