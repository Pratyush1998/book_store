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
    width: '50%',
    height: '50%'
  }
});

class Cart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.items}>
        {LibraryBooks.filter(el => this.props.items.includes(el.id)).map(el => <div className={classes.item}><CartItem image={el.src} name={el.name} /></div>)}
      </div>
    );
  }
}
export default withStyles(useStyles)(Cart);
