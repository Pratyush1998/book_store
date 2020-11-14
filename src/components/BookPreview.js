import React, { Component } from "react";
import LibraryBooks from '../data/LibraryBooks.json'
import Navigation from "./Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Modal from "react-bootstrap/Modal"; //Need to import this into the bookdetail button
import { DesktopWindowsTwoTone } from "@material-ui/icons";

class BookPreview extends Component {


    constructor(props) {
        super(props);
        this.state = {
            showMap: false,
            upvoteClick: true,
            downvoteClick: true
        }
    }

    // close() {

    // }

    updateCart(id) {
        //add current book ID to cart
        Navigation.add(this.props.id)
    }

    upvote() {
        //increase upvotes by one
        this.props.upvotes = this.props.upvotes + 1
        if(!this.state.downvoteClick){
            this.props.downvotes = this.props.downvotes - 1 
        }
        this.setState({ upvoteClick: false });
        this.setState({ downvoteClick: true });
    }

    downvote() {
        //increase down4votes by one
        this.props.downvotes = this.props.downvotes + 1
        if(!this.state.upvoteClick){
            this.props.upvotes = this.props.upvotes - 1 
        }
        this.setState({ upvoteClick: true });
        this.setState({ downvoteClick: false });
    }

    showMap() {
        this.setState({ showMap: true });
    }

    hideMap() {
        this.setState({ showMap: false });
    }

    render() {
        return (
            <div>
                <Container class="justify-content-md-center">
                    <Row>
                        <button onClick={() => console.log(this.props)}>PRINT PROPS</button>
                        <button class="col-md-1 col-lg-1" onClick={this.close.bind(this)}>Close</button>
                        <h2 class="col-md-3 col-lg-3">{this.props.name}</h2>
                        <label class="col-md-2 col-lg-2">By</label>
                        <a class="col-md-4 col-lg-4" href={"www.amazon.ca"}>{this.props.author}</a> {/*TODO: link to page with books by author */}
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col class="col-md-2 col-lg-2">
                            <button onClick={this.showMap.bind(this)}>Show Map</button>
                            <Modal show={this.state.showMap}>
                                <img src={this.props.mapPicture}></img>
                                <label>Location: {this.props.location}</label>
                                <button onClick={this.hideMap.bind(this)}>Hide Image</button>
                            </Modal>
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
                                <button onClick={this.updateCart.bind(this)}>Add to Cart</button>
                            </Row>
                            <Row>
                                <button onClick={() => {
                                    //TODO: Test with Usman for parsing props
                                    console.log("Opening amazon link")
                                    console.log(this.props.amazonlink)
                                    window.open(this.props.amazonlink)}}>Buy on Amazon</button>
                            </Row>
                            <Row>
                                <button onClick={this.upvote.bind(this)}>Upvote: {this.props.upvotes}</button>
                            </Row>
                            <Row>
                                <button onClick={this.downvote.bind(this)}>Downvote: {this.props.downvotes}</button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BookPreview;