import React ,{Component}  from 'react';
import {Card,Row,Col,Label,Button,CardBody,CardImg,CardTitle,CardText,BreadcrumbItem,Breadcrumb,Modal,ModalBody,ModalHeader} from 'reactstrap';
import {LocalForm,Control,Errors} from "react-redux-form"
import { Link } from "react-router-dom";

const maxLength= (len) => (val) => !(val) || (val.length <= len);
const minLength=(len)=>(val)=> (val) && (val.length >= len);


class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalShow: false
        }
        console.log("con" +this.state.isModalShow);
        this.toggleModal=this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({isModalShow: !this.state.isModalShow});
        console.log("toggle model :" + this.state.isModalShow);
    }
    handleSubmit(values){
    console.log("submited");
    console.log("Comment equal: " + JSON.stringify(values));
    alert("Comment Here: " + JSON.stringify(values));
        
    }

    render(){
    return (
        <div>
            <Button
             onClick={this.toggleModal} size="lg" outline>
                <span className="fa fa-pencil mr-1"> Submit Comment</span>
            </Button>
            <Modal isOpen={this.state.isModalShow} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)} >
                        <div className="form-group">
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </div   >
                        <div className="form-group">
                            <Label htmlFor="auther">Your Name</Label>
                            <Control.text model=".auther" id="auther" name="auther" className="form-control" 
                             validators={{
                                minLength : minLength(2) , maxLength : maxLength(15)
                             }}/>
                             <Errors 
                            model=".auther"
                            show="touched"
                            className="text-danger"
                            messages={{
                                minLength:"Must be greater then 2 letter",
                                maxLength:"Must not be less then 15 letter",
                            }}/>
                        </div>
                        <div className="form-group">
                            <Label htmlFor="textarea">Comment</Label>
                            <Control.textarea model=".textarea" id="textarea" name="textarea"
                             className="form-control" rows='6' />
                        </div>
                        <div className="form-group">
                            <Button type="submit" color="primary">Submit</Button>
                        </div>                                       
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
    );
}

}


    function RenderDish({dish}){
        return(
                <div className="col-12 col-md-6 my-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div> 
            );
        
    }
    function RenderComment({comments})
    {
        if (comments !=null){
        return(
            <>
            <div className="col-12 col-md-6 my-1">
                <h4>Comments</h4>
                {comments.map( comment =>( 
                        <ul className="list-unstyled">
                            <p>{comment.comment}</p>
                            <p>---{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </ul>
                        
                ))} 
                <CommentForm />   
            </div>
            
            </>

            
            );
        }
    }        
    const DishDetails =(props) => 
    {         
        //destructure object                
        //const {dish} =props ;
        if (props.dish !=null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link> </BreadcrumbItem>
                            <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3 className="text-center">{props.dish.name}</h3>
                            <hr />  
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish}/>
                        <RenderComment comments= {props.comments} />
                    </div>
                </div>
            );
        }
        else
            return(<div></div>);
    }




export default DishDetails;