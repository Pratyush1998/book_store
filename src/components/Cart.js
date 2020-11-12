import React, { Component } from "react";
import LibraryBooks from '../data/LibraryBooks.json'
import CartItem from './CartItem.js'
import { withStyles } from "@material-ui/core";

const useStyles = theme => ({
  items: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
  },
  item: {
    marginTop: '5%',
    marginBottom: '5%',
    width: '65%',
    height: '100%'
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
    return (
      <div className={classes.items}>
        {LibraryBooks.filter(el => this.props.items.includes(el.id)).map(el => <div className={classes.item}><CartItem key={el.id} id={el.id} delete={this.delete} image={el.src} name={el.name} /></div>)}
      </div>
    );
  }
}
export default withStyles(useStyles)(Cart);
