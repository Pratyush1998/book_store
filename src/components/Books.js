import React, { Component } from "react";
import LibraryBooks from '../data/LibraryBooks.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "./All.css";
class Books extends Component {


  constructor(props) {
    super(props);
    this.state = {Engineering: true, Science: true, History: true, Economics: true}
  }

  //flip the low state
  flipEngineering() {this.setState({Engineering: !this.state.Engineering}); }
  flipScience() {this.setState({Science: !this.state.Science}); }
  flipHistory() {this.setState({History: !this.state.History}); }
  flipEconomics() {this.setState({Economics: !this.state.Economics}); }

  add(id) {
    this.props.add(id)
  }

  remove(id) {
    this.props.remove(id)
  }
  render() {
    var result;

    var searchQuery = this.props.items.searchField;
    console.log(searchQuery);
    if(searchQuery === "") {
      result = LibraryBooks;
    }
    else {
      result = LibraryBooks;
      console.log(result);
      result = result.filter(x => x.department.toUpperCase().includes(searchQuery.toUpperCase()) || x.name.toUpperCase().includes(searchQuery.toUpperCase()));
      console.log(result);
    }
     if (!this.state.Engineering) result = result.filter(x => !x.department.includes('Engineering') || x.name.includes('Engineering'));
     if (!this.state.Science) result = result.filter(x => !x.department.includes('Science') || x.name.includes('Science'));
     if (!this.state.History) result = result.filter(x => !x.department.includes('History') || x.name.includes('History'));
     if (!this.state.Economics) result = result.filter(x => !x.department.includes('Economics') || x.name.includes('Economics'));
      
    
    return (
      <div>
              <Container>
                    <Row>
                        <Col><input type="checkbox" checked={this.state.Engineering} onChange={this.flipEngineering.bind(this)}/>
                        <label for="low">Engineering</label></Col>
                        <Col><input type="checkbox" checked={this.state.Science} onChange={this.flipScience.bind(this)}/>
                        <label for="medium">Science</label></Col>
                        <Col><input type="checkbox" checked={this.state.History} onChange={this.flipHistory.bind(this)}/>
                        <label for="high">History</label></Col>
                        <Col><input type="checkbox" checked={this.state.Economics} onChange={this.flipEconomics.bind(this)}/>
                        <label for="critical">Economics</label></Col>
                    </Row>
             </Container>
        <br />
        <Container>
          <Row>
            {result.map((props, index) => {
              if (this.props.items.cartItems.includes(props.id)) {
                return (
                  <Col xs={6} md={4}>
                    <div className="bookGrid columns">
                      <div className="images">
                        <Image src={props.src} alt={props.alt} rounded />
                      </div>
                      <p>{props.name}</p>

                      <div class="top">
                        <button class="detailsButton">More Details</button>
                      </div>

                      <div class="middle">
                        <button class="reserveButton" onClick={this.remove.bind(this, props.id)}>Remove From Cart</button>
                      </div>
                    </div>
                  </Col>
                )
              }
              else {
                return (
                  <Col xs={6} md={4}>
                    <div className="bookGrid columns">
                      <div className="images">
                        <Image src={props.src} alt={props.alt} rounded />
                      </div>
                      <p>{props.name}</p>

                      <div class="top">
                        <button class="detailsButton">More Details</button>
                      </div>

                      <div class="middle">
                        <button class="reserveButton" onClick={this.add.bind(this, props.id)}>Add To Cart</button>
                      </div>

                    </div>
                  </Col>
                )
              }
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Books;
