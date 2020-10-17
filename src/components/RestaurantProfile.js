import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
  display:flex;
  flex-wrap:wrap;
  float:left;
  margin-ledt:auto;
  margin-right:auto;
  align-item:center;
  list-style-type:none;
}
.rest-profile{
  margin:2%;
  width:20%;
  height:25%;
  border:solid lightgrey;
  border-radius:10px;
}
`

export default Restaurants
