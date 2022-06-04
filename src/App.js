
import React from 'react'
import image from './constant/Image'


class App extends React.Component{
constructor(){
  super()
  this.state ={
    firstDice: {},
    secondDice: {}

  }
  this.handleRandomAttack = this.handleRandomAttack.bind(this)
}
handleRandomAttack(){
  let randomFirst = Math.ceil(Math.random() * 6);
  let randomSecond = Math.ceil(Math.random() * 6);
  console.log(randomFirst)
  console.log(randomSecond)
  this.setState({firstDice:{ image: image[`dice${randomFirst}`],
  power: randomFirst
},
  secondDice: {image: image[`dice${randomSecond}`],
  power: randomSecond
}
})

}

  render(){
  return (
    <div>
      <h1>player-1{this.state.firstDice.power > this.state.secondDice.power ?"wins" : 'lost'}</h1>
      <h1>player-2{this.state.firstDice.power > this.state.secondDice.power ?"wins" : 'lost'}</h1>
      
      <img src={this.state.firstDice.image} width="200px" alt='' />
      <br/>
      <img src={this.state.secondDice.image} width="200px" alt=''/>


      <button onClick={this.handleRandomAttack}>shake</button>

    </div>
  );
  }
}

export default App;
