import React, { Component } from "react";
import LibraryBooks from '../data/LibraryBooks.json'
import Navigation from "./Navigation"
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from "react-bootstrap/Modal" //Need to import this into the bookdetail button
import { DesktopWindowsTwoTone } from "@material-ui/icons"
import './BookPreview.css';

class BookPreview extends Component {


    constructor(props) {
        super(props);
        this.state = {
            showMap: false,
            upvoteClick: true,
            downvoteClick: true
        }
    }

    updateCart(id) {
        //add current book ID to cart
        this.props.add(this.props.props.id)
    }

    upvote() {
        //increase upvotes by one
        this.props.props.upvotes = this.props.props.upvotes + 1
        if (!this.state.downvoteClick) {
            this.props.props.downvotes = this.props.props.downvotes - 1
        }
        this.setState({ upvoteClick: false });
        this.setState({ downvoteClick: true });
    }

    downvote() {
        //increase down4votes by one
        this.props.props.downvotes = this.props.props.downvotes + 1
        if (!this.state.upvoteClick) {
            this.props.props.upvotes = this.props.props.upvotes - 1
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
                <Container>
                    <Row className="justify-content-md-center">
                        {/* <button onClick={() => console.log(this.props.props.src)}>PRINT AUTHOR URL</button> */}
                        <h2 class="col-md-7 col-lg-7">{this.props.props.name}</h2>
                        <a class="col-md-5 col-lg-5" rel="noopener noreferrer" href={this.props.props.authorBooksURL} target="_blank">{this.props.props.author}</a>
                    </Row>
                </Container>
                <span className="brmedium"></span>
                <Container>
                    <Row>
                        <Col class="col-md-2 col-lg-2">
                            <button className="maroonBtn" onClick={this.showMap.bind(this)}>Show Map</button>
                            <Modal show={this.state.showMap}>
                                <Modal.Header>
                                    <Modal.Title>Location: {this.props.props.location}</Modal.Title>
                                </Modal.Header>
                                <img src={this.props.props.mapPicture} alt={this.props.props.alt}>IMAGE</img>
                                <button onClick={this.hideMap.bind(this)}>Hide Image</button>
                            </Modal>
                            <span className="brxlarge"></span>
                            <table className="table-striped table-bordered">
                                <tr>
                                    <td className="heading">Publisher:</td>
                                    <td>{this.props.props.publisher}</td>
                                </tr>
                                <tr>
                                    <td className="heading">ISBN-10:</td>
                                    <td>{this.props.props.isbn10}</td>
                                </tr>
                                <tr>
                                    <td className="heading">ISBN-13:</td>
                                    <td>{this.props.props.isbn13}</td>
                                </tr>
                            </table>
                        </Col>
                        <Col class="col-md-4 col-lg-4">
                            <img className="coverPic" src={this.props.props.src}>
                            </img>
                        </Col>
                        <Col class="col-md-2 col-lg-2">
                            <Row>
                                <button className="maroonBtn" onClick={this.updateCart.bind(this, this.props.props.id)}>Add to Cart</button>
                            </Row>
                            <Row>
                                <button className="greyBtn" onClick={() => {
                                    //TODO: Test with Usman for parsing props
                                    console.log("Opening amazon link")
                                    window.open(this.props.props.amazonlink)
                                }}>Buy on Amazon</button>
                            </Row>
                            <span className="brlarge"></span>
                            <Row>
                                <button disabled={!this.state.upvoteClick} onClick={this.upvote.bind(this)}>Upvote: {this.props.props.upvotes}</button>
                            </Row>
                            <Row>
                                <button disabled={!this.state.downvoteClick} onClick={this.downvote.bind(this)}>Downvote: {this.props.props.downvotes}</button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BookPreview;
