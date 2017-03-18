class App extends React.Component {
  render() {
    return (
      <div className="accordion__wrap">
        {
          BUTTONS.map((btn, index) => {
            return <Button label={btn} key={index} />;
          })
        }
      </div>
    )
  }
}

const BUTTONS = [
                  "Основы языка и как на нем правильно говорить",
                  "Функции",
                  "Обработка ошибок и отладка",
                  "Объекты и массивы",
                  "События"
                ];

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: {maxHeight: 0},
      classActive: ""
    }
  }

  handleClick() {
    let items = document.querySelectorAll('.accordion__contant');
    // let activeItem = document.querySelectorAll('.accordion__btn');
    //
    // activeItem.forEach(item => {
    //   if (item.classList.contains('active')) {
    //     item.classList.remove('active');
    //   }
    // })

    items.forEach(item => {
      let displaySwitch = (this.state.height.maxHeight === 0) ? item.scrollHeight + "px" : 0;
      let activeSwitch = (this.state.classActive==="") ? "active" : "";

      this.setState({
          height: {maxHeight: displaySwitch},
          classActive: activeSwitch
        });
    });
  }

  render() {
    let active = this.state.classActive;
    return (
      <div className="accordion__item">
        <div className={[active, "accordion__btn"].join(' ')} onClick={this.handleClick.bind(this)}>{this.props.label}</div>
        <div className="accordion__contant" style={this.state.height}>
          <p className="accordion__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam soluta fugiat sed est voluptatibus officiis vitae harum, illum, minima, porro mollitia molestias. Autem officiis dolores similique sunt nulla, porro maxime.</p>
        </div>
      </div>
    )
  }
}



if(document.querySelector('#accordion')) {
  ReactDOM.render(
    <App />,
    document.getElementById('accordion')
  )
}
