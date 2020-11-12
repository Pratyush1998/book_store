import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = theme => ({
    content: {
        display: 'flex',
        flexDirection: 'row'
    },
    description: {
        padding: '5%',
        width: '100%',
        textAlign: 'left'
    },
    image: {
        padding: '5%',
        width: '30%',
        maxHeight: '30%'
    },
    deleteBtn: {
        padding: '20%',
        marginLeft: '20%',
        marginRight: '20%'
    }
});

class CartItem extends Component {

    constructor(props) {
        super(props);
    }
    delete(id) {
        console.log("Exexcuting delete in CartItem")
        this.props.delete(id);
    }
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.content}>
                <CardMedia className={classes.image}
                    component="img"
                    alt={this.props.name}
                    image={this.props.image}
                />
                <CardContent className={classes.description}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.name}
                    </Typography>
                </CardContent>
                <IconButton aria-label="delete" onClick={this.delete.bind(this, this.props.id)}>
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </Card>
        );
    }
}

export default withStyles(useStyles)(CartItem)