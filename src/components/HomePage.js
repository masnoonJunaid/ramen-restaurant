import React from 'react'
import styled from 'styled-components';

class HomePage extends React.Component{

  state = {
    items:[],
    isLoaded:false,
    query:'',
  }

  render(){

    let { isLoaded, items } = this.state;
      return (
        <Homepage>
          <div className="search-bar">
              <img className="search-icon" alt=""  src='./icons/search.svg'/>
              <input className="search-input" type = "text" placeholder="Search"
              />
          </div>
        </Homepage>
      )

  }
}


const Homepage = styled.div`
.search-bar{
margin-left:auto;
margin-right:auto;
width:60%;
margin-top:2%;
height:8vh;
background-color:cornflowerblue;
border-radius:18px;
display:flex;
}

.search-icon{
  width:20%;
}
.search-input{
  width:60%;
  border:lightgrey solid;
  font-family:'Roboto', sans-serif;
  text-align:center;
  font-size:100%;
}

`
export default HomePage
