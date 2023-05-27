import Carousel from 'react-bootstrap/Carousel';
import PropTypes from "prop-types";

export const Profile = (props) => {
 const {
  fullName,bio,profession
 }= props.info;
 const styleProfession={color:"green", fontFamily:"cursive", fontSize:"50px" }
 const StyleBio ={color:"red",border:"1px solid yellow" };
  return (
  <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/photo-1537210249814-b9a10a161ae4.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          {props.children}
          <h3><strong>{`My name is: ${fullName}`}</strong></h3>
          <p style={StyleBio}>{`My bio: ${bio}`}</p>
          <p style={styleProfession}>{`My profession is: ${profession}`}</p>
          <button onClick={() => props.alertFunction(fullName)}>
            who is using this
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/photo-1537210249814-b9a10a161ae4.webp"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel> 
  </div>
  )
}
Profile.defaultProps = {
  fullName: "USER",
  bio: "Nothing",
  profession: "battal"
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};