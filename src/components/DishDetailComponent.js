import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

class Dishdetail extends Component {
  // Render Dish
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  // Render Comments
  renderComments(comments) {
    if (comments != null)
      return (
        <div>
          <ul className='list-unstyled pl-1'>
            <h4>Comments</h4>

            {comments.map((comment) => {
              return (
                <>
                  <li>
                    <div>
                      <p>{comment.comment}</p>
                      <p>
                        <span>
                          --{comment.author} , {comment.date}
                        </span>
                      </p>
                    </div>
                  </li>
                  <hr />
                </>
              );
            })}
          </ul>
        </div>
      );
    else return <div></div>;
  }

  render() {
    return (
      <div className='row'>
        <div className='col-12 col-md-5 my-1'>
          {this.renderDish(this.props.dish)}
        </div>
        <div className='col-12 col-md-5 my-1'>
          {this.renderComments(this.props.comments)}
        </div>
      </div>
    );
  }
}

export default Dishdetail;