import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core";


const useStyles = theme => ({
    content: {
        display: 'flex',
        flexDirection: 'row'
    }
});

class CartItem extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.content}>
                <CardMedia
                    component="img"
                    alt={this.props.name}
                    image={this.props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.name}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(useStyles)(CartItem)