import React, { Component } from "react";
import LibraryBooks from '../data/LibraryBooks.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { DesktopWindowsTwoTone } from "@material-ui/icons";

class BookPreview extends Component {


    constructor(props) {
        super(props);
        this.state = { show: true }
    }

    updateCart(id){
        //add current book ID to cart
    }

    upvote(){
        //increase upvotes by one
        this.props.upvotes = this.props.upvotes + 1 
    }

    downvote(){
        //increase down4votes by one
        this.props.downvotes = this.props.downvotes + 1 
    }

    openAmazonLink(){
        window.open(this.props.amazonlink); 
    }

    render() {
        return (
            <div>
                <Container class="justify-content-md-center">
                    <Row>
                        <button class="col-md-1 col-lg-1">CLose</button>
                        <h2 class="col-md-3 col-lg-3">{this.props.name}</h2>
                        <label class="col-md-2 col-lg-2">By</label>
                        <a class="col-md-4 col-lg-4" href={"www.amazon.ca"}>{this.props.author}</a> {/*TODO: link to page with books by author */}
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col class="col-md-2 col-lg-2">
                            <button>Show Map</button>
                            <table>
                                <tr>
                                    <td>Publisher:</td>
                                    <td>{this.props.publisher}</td>
                                </tr>
                                <tr>
                                    <td>ISBN-10:</td>
                                    <td>{this.props.isbn10}</td>
                                </tr>
                                <tr>
                                    <td>ISBN-13:</td>
                                    <td>{this.props.isbn13}</td>
                                </tr>
                            </table>
                        </Col>
                        <Col class="col-md-4 col-lg-4">
                            <img src={this.props.src}>
                            </img>
                        </Col>
                        <Col class="col-md-2 col-lg-2">
                            <Row>
                                <button>Add to Cart</button>
                            </Row>
                            <Row>
                                <button>Buy on Amazon</button>
                            </Row>
                            <Row>
                                <button>Upvote</button>
                                <label>{this.props.upvotes}</label>
                            </Row>
                            <Row>
                                <button>Downvote</button>
                                <label>{this.props.downvotes}</label>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BookPreview;
