import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../App.css';

class Restaurants extends React.Component{

  state = {
    items:[],
    isLoaded:false,
  }

  componentDidMount(){
    fetch('http://starlord.hackerearth.com/TopRamen')
    .then(res => res.json())
    .then(data => {
      this.setState({
        isLoaded:true,
        items:data
      })
    })
  }
  render(){
    let {items, isLoaded} = this.state;
        if (!isLoaded) {
          return <div>Loading....</div>
        } else {
          return (
            <Profile>
              <ul className="rest-list">
                {items.map(item => (
                  <li className="rest-profile">
                    <p className="prof-details"><b>Brand : </b>{item.Brand}</p>
                    <p className="prof-details"><b>Style : </b>{item.Style}</p>
                    <p className="prof-details"><b>Country : </b>{item.Country}</p>
                    <p className="prof-details"><b>Rating : </b>{item.Stars}</p>
                    <p className="prof-details"><b>Variety : </b>{item.Variety}</p>
                    <div className="icon-div">
                      <img className="icons" alt="" src="./icons/comment.svg"/>
                      <img className="icons" alt="" src="./icons/share.svg"/>
                      <img className="icons" alt="" src="./icons/save.svg"/>
                    </div>
                  </li>
                ))}
              </ul>
            </Profile>
          )
        }
  }
}


const Profile = styled.div`
.rest-list{
  width:100%;
  height:100%;
  display:flex;
  flex-wrap:wrap;
  float:left;
  margin-left:auto;
  margin-right:auto;
  list-style-type:none;
}



.rest-profile{
  margin:2%;
  width:20%;
  height:30%;
  border:solid lightgrey;
  border-radius:4%;
}
@media screen and (max-width:900px) {
  .rest-profile{
    width:40%
  }
}

@media screen and (max-width:700px){
  .rest-profile{
    width:70%;
  }
}

@media screen and (min-width:320px) and (max-width:550px){
  .rest-profile{
    width:80%;
  }
}

.icon-div{
  display:flex;
  flex-wrap:wrap;
}

.icons{
  width:10%;
  margin:10%;
}
`

export default Restaurants
