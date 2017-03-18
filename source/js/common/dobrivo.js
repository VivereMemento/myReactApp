class App extends React.Component {
    render() {
        return (
          <div>
            <Header />
            <Promo />
          </div>
        );
    }
}

// HEADER

class Header extends React.Component {
    render() {
      return (
        <header className="header">
          <Slider />
          <div className="container">
            <div className="header__top">
              <Logo />
              <Menu />
              <Language />
            </div>
            <div className="header__bottom">
              <Navigation />
            </div>
            <div className="heading-wrap">
              <h1 className="heading">
                <span className="heading_mods heading_mods-1">Органическое</span>
                <span className="heading_mods heading_mods-2">нано-удобрение</span>
                <span className="heading_mods heading_mods-3">Добриво</span>
              </h1>
            </div>
          </div>
        </header>
      );
    }
}

// SLIDER
const sliderItems = [
  "assets/img/slide-1.jpg",
  "assets/img/slide-2.jpg",
  "assets/img/slide-3.jpg"
]
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "assets/img/slide-1.jpg",
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

    this.setState(prevState => ({
      slideIndex: prevState.slideIndex + 1
    }))

    this.setState({
      path: sliderItems[this.state.slideIndex]
    })

    console.log(this.state.slideIndex)
    if (this.state.slideIndex >= sliderItems.length - 1) {
      this.setState({
        slideIndex: -1
      })
    }
  }

  render() {
    return (
      <div className="slider">
        <ul className="slider__list">
          <li className="slider__item fade">
            <img className="slider__img" src={this.state.path}></img>
          </li>
        </ul>
      </div>
    );
  }
}
//
class Logo extends React.Component {
    render() {
      return (
        <div className="logo">
          <a href="#" className="logo__link">
            <img className="logo__img" src="assets/img/logo.png" alt="Dobrivo"></img>
          </a>
        </div>
      );
    }
}


const menuItems = ["Оплата и доставка", "Новости", "Справочник", "Сертификаты"];
class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
          {
            menuItems.map((menuItem, index) => {
              return <li className="menu__item" key={index}>
                        <a href="#" className="menu__link">{menuItem}</a>
                    </li>
            })
          }
      </ul>
    );
  }
}

const langItems = ["RU", "UA", "ENG"];
class Language extends React.Component {

  render() {
    return (
      <div className="language">
        <a href="#" className="language__link language__link_mods">RU</a>
      <ul className="language__list">
          {
            langItems.map((langItem, index) => {
              return <li className="language__item" key={index}>
                      <a href="#" className="language__link">{langItem}</a>
                    </li>
            })
          }
        </ul>
      </div>
    );
  }
}

// Header__bottom
const navItems = [
                  "Нано-удобрение",
                  "Биодизель",
                  "Силко",
                  "Интернет-магазин",
                  "Вопросы-ответы",
                  "Контакты",
                  "Корзина"
                ]
class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          {
            navItems.map((navItem, index) => {
              let bascket = (navItem == "Корзина") ? "nav__link_mods" : "";
              return <li className="nav__item" key={index}>
                      <a href="#" className={["nav__link", bascket].join(" ")}>{navItem}</a>
                    </li>
            })
          }
        </ul>
      </nav>
    );
  }
}

/**************************************************
                      PROMO
***************************************************/

class Promo extends React.Component {
  render() {
    return (
      <section className="promo">
        <div className="container">
          <PromoLeft />
          <PromoRight />
        </div>
      </section>
    );
  }
}
const statisticItems = [
  {title:"Прирост урожая", subtitle: "в сравнении с химическими удобрениями", percent: "30%-250%"},
  {title:"Экономия", subtitle: "химических удобрений в хозяействе", percent: "до 70%"},
  {title:"Рост корней", subtitle: "системы сравнений при использовании", percent: "в 3-10раз"},
]
class PromoLeft extends React.Component {
  render() {
    return (
      <div className="promo__left">
        <div className="promo__statistic">
          <figure className="promo__img-wrap">
            <img className="promo__img" src="assets/img/bottle.png"></img>
          </figure>
          <ul className="promo__statistic-list">
              {
                statisticItems.map((statisticItem, index) =>{
                  return <li className="promo__statistic-item" key={index}>
                          <span className="promo__statistic-title">{statisticItem.title}</span>
                          <span className="promo__statistic-subtitle">{statisticItem.subtitle}</span>
                          <span className="promo__statistic-percent">{statisticItem.percent}</span>
                        </li>
                })
              }
          </ul>
          <div className="promo__learn">
            <div className="promo__learn-left">
              <span className="promo__learn-text">Хотите</span>
              <span className="promo__learn-text">трали-вали</span>
              <span className="promo__learn-text">ла-лала?</span>
            </div>
            <div className="promo__learn-right">
              <h2 className="promo__learn-title">
                <span className="promo__learn-title_mods">Узнайте</span>
                о нагро больше!
              </h2>
              <a href="#" className="promo__learn-btn">Узнать больше</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PromoRight extends React.Component {
  render() {
    return (
      <div className="promo__right">
        <Form />
      </div>
    );
  }
}

/**************************************************
                      FORM
***************************************************/

class Form extends React.Component {
  render() {
    return (
      <div className="form-wrap">
        <form className="form" action="" method="GET">
          <div className="form__heading-wrap">
            <h3 className="form__heading">Посчитайте прибыль</h3>
          </div>
          <div className="form__subheading-wrap">
            <span className="form__subheading">Добриво эффективнее химии</span>
          </div>
          <div className="form__input-wrap">
            <label className="form__label">Выбери культуру</label>
            <select className="form__input form__select" size="1" multiple="">
              <option value="">Пшеница</option>
              <option value="">Рожь</option>
              <option value="">Гречка</option>
            </select>
          </div>
          <div className="form__input-wrap">
            <label className="form__label">Урожайность ц/та</label>
            <input className="form__input required" type="text" title="Введите, пожалуйста, число"></input>
          </div>
          <div className="form__input-wrap">
            <label className="form__label">Стoимость хим. удобрения грн/га</label>
            <input className="form__input required" type="text" title="Введите, пожалуйста, число"></input>
          </div>
          <div className="form__input-wrap">
            <label className="form__label">Посевная площадь га</label>
            <input className="form__input required" type="email" title="Введите, пожалуйста, число"></input>
          </div>
        </form>
        <div className="form__promo">
          <span className="form__promo-title">Прибыль от Добриво</span>
          <span className="form__promo-count">50 000</span>
          <span className="form__promo-money">грн</span>
        </div>
      </div>
    );
  }
}

if(document.querySelector('#dobrivo')) {
  ReactDOM.render(
    <App />,
    document.getElementById('dobrivo')
  )
}

/**************************************************
                    VALIDATION
***************************************************/
$(document).ready(function() {
  $('form').validate();

  $.validator.addClassRules({
    form__input: {
      required: true,
      digits: true,
      maxlength: 5
    }
  });
});
