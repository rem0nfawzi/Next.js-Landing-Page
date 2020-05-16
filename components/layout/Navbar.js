import { Link, animateScroll as scroll } from 'react-scroll';
import Head from 'next/head';

class Navbar extends React.Component {
  state = {
    scrolledNav: false,
    scrolledOffset: 0,
    scrollingDown: false,
    showMenu: false,
    smallScreen: false
  };
  detectScrollDirection = () => {
    let down = false;
    if (window.pageYOffset > this.state.scrolledOffset) {
      down = true;
    } else {
      down = false;
    }
    this.setState({
      scrollingDown: down
    });

    setTimeout(() => {
      this.setState({
        scrolledOffset: window.pageYOffset
      });
    });
  };
  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 250) {
        this.setState({
          scrolledNav: true
        });
      } else {
        this.setState({
          scrolledNav: false
        });
      }
      this.detectScrollDirection();
    });

    if (window.innerWidth <= 980) {
      this.setState({
        smallScreen: true
      });
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 980) {
        this.setState({
          smallScreen: true
        });
      } else {
        this.setState({
          smallScreen: false
        });
      }
    });
  }
  toggleMenu = () => {
    if (this.state.smallScreen) {
      this.setState({
        showMenu: !this.state.showMenu
      });
      document.body.classList.toggle('hide');
    }
  };

  render() {
    return (
      <div className='nav-wrapper'>
        <Head>
          <link rel='stylesheet' href='static/css/navbar.css' />
        </Head>
        <nav
          id='nav'
          className={`${
            this.state.scrollingDown &&
            !(this.state.showMenu && this.state.smallScreen)
              ? 'down'
              : ''
          } ${this.state.scrolledNav ? 'scrolled' : ''} ${
            this.state.smallScreen && this.state.showMenu ? 'scrolled' : ''
          }`}
        >
          <div className='container'>
            <div className='content'>
              <div className='logo'>
                <Link to='header' smooth={true} duration={500}>
                  <h1>anda</h1>
                </Link>
              </div>

              <ul
                className={
                  this.state.smallScreen && this.state.showMenu
                    ? 'show links'
                    : 'links'
                }
              >
                <li>
                  <Link
                    activeClass='active'
                    to='header'
                    spy={true}
                    smooth='easeInOutQuad'
                    duration={2500}
                    onClick={this.toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='about'
                    spy={true}
                    smooth='easeInOutQuad'
                    duration={2500}
                    onClick={this.toggleMenu}
                  >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='works'
                    spy={true}
                    smooth='easeInOutQuad'
                    duration={2500}
                    onClick={this.toggleMenu}
                  >
                    works
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='services'
                    spy={true}
                    smooth='easeInOutQuad'
                    duration={2500}
                    onClick={this.toggleMenu}
                  >
                    services
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='products'
                    spy={true}
                    smooth='easeInOutQuad'
                    duration={2500}
                    onClick={this.toggleMenu}
                  >
                    products
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='packages'
                    spy={true}
                    smooth='easeInOutQuad'
                    duration={2500}
                    onClick={this.toggleMenu}
                  >
                    packages
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='blog'
                    spy={true}
                    smooth='easeInOutQuad'
                    duration={2500}
                    onClick={this.toggleMenu}
                  >
                    blog
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass='active'
                    to='contact'
                    spy={true}
                    smooth='easeInOutQuad'
                    duration={2500}
                    onClick={this.toggleMenu}
                  >
                    contact
                  </Link>
                </li>
              </ul>
              <div id='bars' onClick={this.toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
              </div>
            </div>
          </div>
          <style jsx>{`
            .nav-wrapper {
              position: relative;
            }
            #nav {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              border-bottom: 1px solid #0b0f14;
              z-index: 5;
              transition: all 0.2s linear;
            }
            #nav.white {
              background-color: #fff;
            }
            #nav .content {
              height: 90px;
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-between;
            }
            #nav .content .logo {
              cursor: pointer;
            }
            #nav .content .logo h1 {
              color: #ffe63c;
              text-transform: uppercase;
              font-family: Exo_Black;
              font-size: 30px;
            }
            #nav .content ul {
              display: flex;
            }
            #nav .content ul li {
              padding-left: 5px;
              padding-right: 5px;
            }
            #nav .content ul li:last-of-type {
              padding-right: 0;
            }

            #nav.scrolled {
              position: fixed;
              background-color: #fff;
              border-bottom: 0;
              box-shadow: 0 0px 2px #4d4d4d;
            }

            #nav.scrolled .content .logo h1 {
              color: #000;
            }
            #nav.down {
              transform: translateY(-90px);
            }

            #nav #bars {
              width: 60px;
              height: 25px;
              cursor: pointer;
              position: relative;
              display: none;
            }
            #nav #bars .bar {
              display: block;
              width: 100%;
              height: 1px;
              background-color: #fff;
              position: absolute;
            }
            #nav.scrolled #bars .bar {
              background-color: #000;
            }
            #nav #bars .bar:first-of-type {
              top: 0;
            }
            #nav #bars .bar:nth-of-type(2) {
              top: 12.5px;
              left: 0;
              right: 0;
              margin-left: auto;
              margin-right: auto;
              transition: all 0.1s ease-in-out;
            }
            #nav #bars .bar:last-of-type {
              bottom: 0;
            }
            #nav #bars:hover .bar:nth-of-type(2) {
              width: 80%;
            }

            @media (max-width: 980px) {
              #nav #bars {
                display: block;
              }
              #nav {
                border-bottom: 0;
              }

              #nav .content ul {
                position: absolute;
                top: 90px;
                left: 0;
                right: 0;
                background-color: #fff;
                height: 100vh;
                overflow-y: scroll;
                display: none;
                border-top: 1px solid #eee;
              }
              #nav .content ul.show {
                display: block;
              }
              #nav .content ul li {
                padding: 0;
              }
            }
          `}</style>
          <style jsx global>
            {`
              body.hide {
                overflow: hidden;
              }
            `}
          </style>
        </nav>
      </div>
    );
  }
}

export default Navbar;
