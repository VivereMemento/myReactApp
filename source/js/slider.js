class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.showSlides(),
      4000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  showSlides() {
    var slides = document.querySelectorAll(".slider__item");
    slides.forEach(slide => {
      slide.style.display = "none";
    })

    this.setState(prevState => ({
      slideIndex: prevState.slideIndex + 1
    }))

    if (this.state.slideIndex > slides.length) {
      this.setState({
        slideIndex: 1
      })
    }
    console.log(this.state.slideIndex)
    slides[this.state.slideIndex-1].style.display = "block";
  }

  render() {
    return (
      <div className="slider">
        <ul className="slider__list">
          {
            sliderItems.map((sliderItem, index) => {
              return <li className="slider__item fade" style={this.state.display} key={index}>
                      <img className="slider__img" src={sliderItem}></img>
                    </li>
            })
          }
        </ul>
      </div>
    );
  }
}
