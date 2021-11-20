import React from "react"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nama: "Tyo",
      umur: 110
      }
  }
  
  biji = () => {
    this.setState({
      nama : "erik",
      umur : 5000
    })
  } 
  
 render(){
    return(
    <div >
      <h1>{this.state.nama}</h1>
      <h5>{this.state.umur}  </h5>
      <button onClick={this.biji}>Tonjok disini</button>
    </div>
    )
  }
}

export default App 