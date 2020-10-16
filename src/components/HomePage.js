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
        <Homepage>
          <navbar className="nav-bar">
            <h2 className="nav-header">Ramen Restaurants</h2>
          </navbar>
        </Homepage>
      )
    }
  }
}


const Homepage = styled.div`
.nav-bar{
  display: flex;
  flex-wrap: wrap;
  height: 12vh;
  position:fixed;
  box-shadow: 1px 5px lightgrey;
  backgroun-color: ghostwhite;
  width:100%;
}

.nav-header{
  font-family: 'Roboto', sans-serif;
  margin-left:4%;
  color: cornflowerblue;
}


`
export default HomePage
