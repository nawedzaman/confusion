import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dishdetail from './DishDetailComponent';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
      selectedDishComments: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish, selectedDishComments: dish.comments });
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className='col-12 col-md-5 my-1'>
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width='100%' src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='row'>{menu}</div>
        <Dishdetail
          dish={this.state.selectedDish}
          comments={this.state.selectedDishComments}
        />
      </div>
    );
  }
}

export default Menu;