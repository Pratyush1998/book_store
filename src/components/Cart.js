import React, { Component } from "react";
import LibraryBooks from '../data/LibraryBooks.json';
import CartItem from './CartItem.js';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = theme => ({
  content: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '5%'
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    width: '100%'
  },
  item: {
    marginTop: '5%',
    marginBottom: '5%',
    width: '100%',
    height: '100%'
  },
  checkoutBtns: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginLeft: '10%',
    marginBottom: '5%'
  },
  checkoutBtnTop: {
    position: 'relative',
    top: '0%',
  },
  checkoutBtnBottom: {
    position: 'relative',
    bottom: '0%'
  },
  title: {
    alignText: "left",
    paddingTop: "5%"
  }

});

class Cart extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(id) {
    console.log("executing delete in cart.js")
    this.props.action(id);
  }

  render() {
    const { classes } = this.props;
    console.log(this.props.items)
    return (
      <div>
        <h1 className={classes.content}> Cart Items ({this.props.items.cartItems.length})</h1>
        <div className={classes.content}>
          <div className={classes.items}>
            {LibraryBooks.filter(el => this.props.items.cartItems.includes(el.id)).map(el => <div className={classes.item}><CartItem key={el.id} id={el.id} delete={this.delete} image={el.src} name={el.name} /></div>)}
          </div>
          <div className={classes.checkoutBtns}>
            <Button className={classes.checkoutBtnTop} variant="contained" size='large' style={{ backgroundColor: "#7a003c", color: 'white' }} component={Link} to="/checkout">Checkout</Button>
            <Button className={classes.checkoutBtnBottom} variant="contained" size='large' style={{ backgroundColor: "#7a003c", color: 'white' }} component={Link} to="/checkout"> Checkout</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Cart);
