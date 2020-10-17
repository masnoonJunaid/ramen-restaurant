import React from 'react'
import styled from 'styled-components'

class Footer extends React.Component {
  render(){
    return (
      <FooterStyle>
        <ul className="footer-elements">
          <li className="support-text">
              <h2 className="text-color">Get in touch!</h2>
          </li>
          <li className="support-text">
            <h4 className="text-color">Location</h4>
            <p className="text-color">World Wide </p>
          </li>
          <li className="support-text">
              <h4 className="text-color">Contact</h4>
              <p className="text-color">support@TopRamen.com</p>
          </li>
          <li className="support-text">
            <h4 className="text-color">Follow</h4>
            <ul className="social-media">
              <img className="social-img" alt="" src="icons/fb.svg"/>
              <img className="social-img" alt="" src="icons/linkedin.svg"/>
            </ul>
          </li>
        </ul>
      </FooterStyle>
    )
  }
}


const FooterStyle = styled.footer`

*{
  margin:0;
  padding:0;
}

.footer-elements{
  float:left;
  display:flex;
  width:100%;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
  flex-wrap:wrap;
  background-color:cornflowerblue;
  height:15%;
}
.support-text{
  margin:4%;
  list-style-type:none;
}
.social-media{
  float:left;
  display:flex;
  height:30px;
  width:30px;
}

.text-color{
  color:white;
}
`

export default Footer;
