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
            upvoteClick: true,
            downvoteClick: true,
        }
    }

    updateCart(id) {
        if (!this.props.cartItems.includes(this.props.props.id)) {
            this.props.add(this.props.props.id)
        }

    }

    upvote() {
        this.props.props.upvotes = this.props.props.upvotes + 1
        if (!this.state.downvoteClick) {
            this.props.props.downvotes = this.props.props.downvotes - 1
        }
        this.setState({ upvoteClick: false });
        this.setState({ downvoteClick: true });
    }

    downvote() {
        this.props.props.downvotes = this.props.props.downvotes + 1
        if (!this.state.upvoteClick) {
            this.props.props.upvotes = this.props.props.upvotes - 1
        }
        this.setState({ upvoteClick: true });
        this.setState({ downvoteClick: false });
    }

    showMap(mapPicture, location) {
        var newWindow = window.open("", "pictureViewer",
            "location=no, directories=no, fullscreen=no, " +
            "menubar=no, status=no, toolbar=no, width=800px" +
            + ", height=100px" + ", scrollbars=no");
        newWindow.document.writeln("<html>");
        newWindow.document.writeln("<body style='margin: 0 0 0 0;'>");
        newWindow.document.writeln("<a href='javascript:window.close();'>");
        newWindow.document.writeln("<img src='" + mapPicture +
            "' alt='Click to close' width=600px height=400px/>");
        newWindow.document.writeln("</a>");
        newWindow.document.writeln("<p>Location: " + location + "</p>")
        newWindow.document.writeln("</body></html>");
        newWindow.document.close();

    }

    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <h2 class="col-md-12 col-lg-12">{this.props.props.name}</h2>
                    </Row>
                    <Row className="justify-content-md-center">
                        <label>By <a class="col-md-12 col-lg-12" rel="noopener noreferrer" href={this.props.props.authorBooksURL} target="_blank">{this.props.props.author}</a></label>

                    </Row>
                </Container>
                <span className="brmedium"></span>
                <Container>
                    <Row>
                        <Col class="col-md-4 col-lg-4">
                            <button className="maroonBtn" onClick={this.showMap.bind(this, this.props.props.mapPicture, this.props.props.location)}>Show Map</button>
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
                        <Col class="col-md-4 col-lg-4">
                            <Row>
                                <button disabled={this.props.cartItems.includes(this.props.props.id)} onClick={this.updateCart.bind(this, this.props.props.id)}>Add to Cart</button>
                            </Row>
                            <Row>
                                <button className="greyBtn" onClick={() => {
                                    window.open(this.props.props.amazonlink)
                                }}>Buy @ Amazon</button>
                            </Row>
                            <span className="brlarge"></span>
                            <Row>
                                <button className="maroonBtn" disabled={!this.state.upvoteClick} onClick={this.upvote.bind(this)}>Upvote: {this.props.props.upvotes}</button>
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
