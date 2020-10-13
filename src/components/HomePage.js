import React from 'react'
import styled from 'styled-components';

class HomePage extends React.Component{

  state = {
    items:[],
    isLoaded:false
  }

  componentDidMount(){
    fetch('http://starlord.hackerearth.com/TopRamen')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        items:json
      })
    })
  }
  render(){

    let { isLoaded, items } = this.state;

    if(!isLoaded){
      return<div>Loading...</div>
    }
    else{
      return (
        <div>
          <h1>Hello from HomePage</h1>
          <ul>
            {items.map(item =>(
              <p>Brand: {item.Brand}</p>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default HomePage
