import React from 'react'
import styled from 'styled-components';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class HomePage extends React.Component{

  state = {
    items:[],
    isLoaded:false,
    query:'',
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

  updateQuery = (query) => {
    this.setState({ query: query.trim()})
  }


  render(){
    let showingRestaurant;
    let { isLoaded, items, query } = this.state;

    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingRestaurant = this.state.items.filter((rest) => match.test(rest.Country))
    } else {
      showingRestaurant = this.state.items
    }
      return (
        <Homepage>
          <div className="search-bar">
              <img className="search-icon" alt=""  src='./icons/search.svg'/>
              <input
                className="search-input"
                type = "text"
                placeholder="Search with Country"
                onChange={event => {this.updateQuery(event.target.value)}}
              />
          </div>
          <div>
            <ul className="rest-list">
              {showingRestaurant.map(item => (
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
export default HomePage
