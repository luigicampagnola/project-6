import "./App.css";
import { Component } from "react";
import "tachyons";
import Clarifai from "clarifai";
import Particles from "react-particles-js";
import Logo from "../Components/Logo/Logo";
import ImageLinkForm from "../Components/ImageLinkForm/ImageLinkForm";
import ActorImage from "../Components/ActorImage/ActorImage";
import particlesConfig from "../Components/Particles/ParticlesConfig";
import Instructions from "../Components/Instructions/Intructions";
import Footer from "../Components/Footer/Footer";
import ErrorBoundry from "../Components/ErrorBoundry/ErrorBoundry";
/* import Navigation from "./Components/Navigation/Navigation";
import SignIn from "./Components/SignIn/SignIn";
import Header from "./Components/Header/Hearder"; 
import Register from "./Components/Register/Register";  */

const app = new Clarifai.App({
  apiKey: "812fd1e20128438291b068e79b6ab402",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
      nameDetected: "",
      /*       route: "signin",
      isSignedIn: false, */
    };
  }

  detectedImageHandler = (data) => {
    const detectedImage = data.outputs[0].data.regions[0].data.concepts[0].name;
    const arrImage = detectedImage.split(" ");
    const Name = [];
    arrImage.forEach((word) => {
      if (word.includes(".")) {
        Name.push(word.toUpperCase());
      } else if (word[0] === word[0].toLowerCase()) {
        Name.push(word[0].toUpperCase() + word.substr(1).toLowerCase());
      }
    });

    return Name.join(" ");
  };

  displayName = (actorName) => {
    this.setState({ nameDetected: actorName });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onClickHandler = () => {
    this.setState({ imgUrl: this.state.input });
    app.models
      .predict(Clarifai.CELEBRITY_MODEL, this.state.input)
      .then((response) => this.displayName(this.detectedImageHandler(response)))
      .catch((err) => console.log(err));
  };

  /*   onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({ route: route });
  }; */

  render() {
    return (
      <div>
        <Particles params={particlesConfig} className="particles" />
        {/*         <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} /> */}
        <Logo />
        {/*         {this.state.route === "home" ? (
          <div> */}
        <Instructions />
        <ImageLinkForm
          onClickHandler={this.onClickHandler}
          onInputChange={this.onInputChange}
        />
        <ErrorBoundry>
          <ActorImage
            imgUrl={this.state.imgUrl}
            nameDetected={this.state.nameDetected}
          />
        </ErrorBoundry>
        <Footer className="footer-style" />
      </div>
      /*         ) : this.state.route === "signin" ? (
          <div>
            <Header />
            <SignIn onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <div>
            <Register onRouteChange={this.onRouteChange} />
          </div>
        )}
      </div> */
    );
  }
}

export default App;
