import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

  // Render Dish
 function RenderDish ({dish}) {
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
  function RenderComments ({comments}) {
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
                          --{comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
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

  const  Dishdetail = (props) => {
  if (props.dish != null)
    return (
      <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-5 my-1'>
          <RenderDish dish={props.dish}/>
        </div>
        <div className='col-12 col-md-5 my-1'>
          <RenderComments comments={props.dish.comments} /> 
        </div>
      </div>
      </div>
    );
    else return <div></div>;
  }

export default Dishdetail;