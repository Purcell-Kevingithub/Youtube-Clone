import React from 'react';
import { slide as Menu } from 'react-burger-menu'

class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <Menu className="bm-cross bm-burger-bars-hover" styles={ styles } width={ 300 }>
          <div className="ui segment">
            <a href="/">
              <i className="fa fa-2x fa-youtube" aria-hidden="true" style={{color : 'red' }}></i>
              <i className="fa fa-2x fa-youtube-play" aria-hidden="true" style={{color : 'red' }}></i>
            </a>
          <hr />
            <a className="item" href="/" style={{color: 'black'}}>Home</a>
            <hr />
            <a className="item" href="/" style={{color: 'black'}}>Trending</a>
            <hr />
            <a className="item" href="/" style={{color: 'black'}}>Subscriptions</a>
            <hr />
            <a className="item" href="/" style={{color: 'black'}}>Library</a>
          </div>
        </Menu>
      </div>
    );
  }
}
export default Hamburger;

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    left: '36px',
    top: '26px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'white',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#4ff3d',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block',
    color: '#3ec416',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}