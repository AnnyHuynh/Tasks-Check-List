import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      direction: e.direction,
    });
  }

  render() {
    const { direction } = this.state;

    return (
      <Carousel
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/cal-background.jpeg"
            alt="First slide"
          />
          <Carousel.Caption style={{marginBottom: "420px", fontWeight: "bolder"}}>
            <div style={{fontSize: "60px", fontFamily: "Times New Roman, Times, serif", color: "#d46b08", padding:"100px", backgroundColor: "rgba(255, 255, 255, 0.6)", borderRadius: "5px"}}>Accounting Month-End Tasks</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/cal-background5.jpeg"
            alt="Third slide"
          />
            <Carousel.Caption style={{marginBottom: "420px", fontWeight: "bolder"}}>
            <div style={{fontSize: "60px", fontFamily: "Times New Roman, Times, serif", color: "#d46b08", padding:"100px", backgroundColor: "rgba(255, 255, 255, 0.6)", borderRadius: "5px"}}>Accounting Month-End Tasks</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/cal-background6.jpeg"
            alt="Third slide"
          />
            <Carousel.Caption style={{marginBottom: "420px", fontWeight: "bolder"}}>
            <div style={{fontSize: "60px", fontFamily: "Times New Roman, Times, serif", color: "#d46b08", padding:"100px", backgroundColor: "rgba(255, 255, 255, 0.6)", borderRadius: "5px"}}>Accounting Month-End Tasks</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Home;
