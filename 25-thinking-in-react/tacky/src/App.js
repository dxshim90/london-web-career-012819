import React, { Component, Fragment } from 'react';
import './assets/App.css';
import Navbar from "./containers/Navbar"
import TopicContainer from "./containers/TopicContainer"
import PinBoard from "./containers/PinBoard"

const pins = [
  {
    image_url: "https://www.goodnet.org/photos/620x0/28588.jpg",
    category: "hiding"
  },
  {
    image_url: "https://www.thesprucepets.com/thmb/GXdLaAsb73pDJozzGvfL4g0l8is=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cats-cuddling-GettyImages-154502253-5887e0e43df78c2ccdb61dc0.jpg",
    category: "playing"
  },
  {
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3aPdEhpHaJUbRRy5Ty5AUivnx3ZYSk3_e74s-SqpvhDTaMvk",
    category: "wat"
  },
  {
    image_url: "https://www.goodnet.org/photos/620x0/28588.jpg",
    category: "hiding"
  },
  {
    image_url: "https://www.thesprucepets.com/thmb/GXdLaAsb73pDJozzGvfL4g0l8is=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cats-cuddling-GettyImages-154502253-5887e0e43df78c2ccdb61dc0.jpg",
    category: "playing"
  },
  {
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3aPdEhpHaJUbRRy5Ty5AUivnx3ZYSk3_e74s-SqpvhDTaMvk",
    category: "wat"
  },
  {
    image_url: "https://www.goodnet.org/photos/620x0/28588.jpg",
    category: "hiding"
  },
  {
    image_url: "https://www.thesprucepets.com/thmb/GXdLaAsb73pDJozzGvfL4g0l8is=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cats-cuddling-GettyImages-154502253-5887e0e43df78c2ccdb61dc0.jpg",
    category: "playing"
  },
  {
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3aPdEhpHaJUbRRy5Ty5AUivnx3ZYSk3_e74s-SqpvhDTaMvk",
    category: "wat"
  },
  {
    image_url: "https://www.goodnet.org/photos/620x0/28588.jpg",
    category: "hiding"
  },
  {
    image_url: "https://www.thesprucepets.com/thmb/GXdLaAsb73pDJozzGvfL4g0l8is=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cats-cuddling-GettyImages-154502253-5887e0e43df78c2ccdb61dc0.jpg",
    category: "playing"
  },
  {
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3aPdEhpHaJUbRRy5Ty5AUivnx3ZYSk3_e74s-SqpvhDTaMvk",
    category: "wat"
  },
]

const topics = [
  {
    image_url: "https://www.goodnet.org/photos/620x0/28588.jpg",
    name: "box cat"
  },
  {
    image_url: "https://www.thesprucepets.com/thmb/GXdLaAsb73pDJozzGvfL4g0l8is=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cats-cuddling-GettyImages-154502253-5887e0e43df78c2ccdb61dc0.jpg",
    name: "cuddly cats"
  },
  {
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3aPdEhpHaJUbRRy5Ty5AUivnx3ZYSk3_e74s-SqpvhDTaMvk",
    name: "blue red cat"
  }
]

class App extends Component {

  state = {
    user: {
      topics: topics,
      username: "Beefy McSteaker"
    },
    searchTerm: "",
    pins: pins
  }

  setSearchTerm = (newInput) => {
    this.setState({
      searchTerm: newInput
    })
  }

  filterPins = () => {
    return this.state.pins.filter(pin => {
      return pin.category.includes(this.state.searchTerm)
    })
  }


  render() {
    return (
      <Fragment>
        <Navbar setSearchTerm={this.setSearchTerm} />
        <TopicContainer topics={this.state.user.topics}/>
        <PinBoard pins={this.filterPins()} />
      </Fragment>
    );
  }
}

export default App;
