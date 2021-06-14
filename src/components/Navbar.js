import logo from '../images/Marvel_Logo.svg';

function Navbar(props) {
    return (
      <header
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          left: "0",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          color: "white",
          backgroundImage: `url(' https://i.pinimg.com/originals/e4/07/5a/e4075aad0546397583b7e53b4d07b216.jpg  ')`,
        }}
      >
        <img
          style={{ borderRadius: "5px", width: "250px", height: "150px" }}
          alt="icon"
          src={logo}
        ></img>
        <div>
          <h1>Marvel Memory-Card Game</h1>
          <h3>
            Get points by clicking on an image but don't click on any more than
            once!
          </h3>
        </div>
  
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#b61d1d",
            color: "white",
            width: "180px",
            height: "150px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: 'large'
          }}
        >
          <p style={{paddingTop: "20px"}}>Current Score: {props.currentScore}</p>
          <p>Best Score: {props.bestScore}</p>
        </div>
      </header>
    );
}

export default Navbar;