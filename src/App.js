import './App.css';
import Menu from './components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES, Dishes } from './shared/dishes';
import { Component } from 'react';
import { render } from '@testing-library/react';
class App extends Component {

  constructor(props) {
    super (props);

    this.state = {
      dishes: DISHES
    };
  }


  render() {
    return (
      <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
    </div>
    );
  }
}
export default App;