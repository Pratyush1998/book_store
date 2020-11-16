import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import CheckMark from "./images/checkmark.png";

const useStyles = (theme) => ({
    content: {
        display: "flex",
        flexDirection: "row",
        marginTop: "10%",
    },
    successCard: {
        width: "70%",
        height: "70%",
        marginRight: "5%",
    },
    successContent: {
        paddingTop: "5%",
        paddingBottom: "5%",
        textAlign: "left",
    },
    successAction: {
        display: "flex",
        justifyContent: "center",
        paddingBottom: "10%",
    },
    detailsCard: {
        width: "30%",
        height: "30%",
    },
    detailContent: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
    },
    detailAction: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingBottom: "5%",
    },
});

class Checkout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.content}>
                <div className={classes.successCard}>
                    <Card>
                        <CardContent className={classes.successContent}>
                            <Typography
                                variant="h4"
                                color="textPrimary"
                                style={{ paddingTop: "10%", paddingLeft: "15%" }}
                            >
                                <img
                                    height="50"
                                    width="50"
                                    src={CheckMark}
                                    style={{ marginRight: "2%" }}
                                />
                                Your Order has Been Placed!
              </Typography>
                            <Typography
                                variant="h6"
                                color="textPrimary"
                                style={{ paddingBottom: "10%" }}
                            >
                                We will notify you by email the day your order is ready for
                                pick-up
              </Typography>
                        </CardContent>
                        <CardActions className={classes.successAction}>
                            <div onClick={this.handleHomeButton}>
                                <Button
                                    component={Link}
                                    to="/"
                                    size="large"
                                    style={{
                                        backgroundColor: "#7a003c",
                                        color: "white",
                                        maxWidth: "300px",
                                        maxHeight: "45px",
                                        minWidth: "300px",
                                        minHeight: "45px",
                                        borderRadius: "15em",
                                    }}
                                    aria-label="Home"
                                >
                                    <HomeIcon />
                                </Button>
                            </div>
                        </CardActions>
                    </Card>
                </div>
                <div className={classes.detailsCard} style={{ marginBottom: "100px" }}>
                    <Card>
                        <CardContent className={classes.detailContent}>
                            <Typography
                                variant="h6"
                                style={{
                                    textAlign: "center",
                                    paddingBottom: "10%",
                                    paddingTop: "5%",
                                }}
                            >
                                Order Details
              </Typography>
                            <Typography variant="h7" style={{ padding: "5%" }}>
                                Order#: 457952
              </Typography>
                            <Typography variant="h7" style={{ padding: "5%" }}>
                                Pick-up Deadline: 2020-11-15
              </Typography>
                            <Typography variant="h7" style={{ padding: "5%" }}>
                                Return Date: 2020-12-15
              </Typography>
                        </CardContent>
                        <CardActions className={classes.detailAction}>
                            <div>
                                <Button
                                    component={Link}
                                    to={{ pathname: "/", state: { cancelled: true } }}
                                    exact
                                    size="large"
                                    color="secondary"
                                    variant="contained"
                                >
                                    Cancel Order
                </Button>
                            </div>
                            <div>
                                <Button
                                    component={Link}
                                    to="/cart"
                                    size="large"
                                    style={{
                                        backgroundColor: "#008000",
                                        color: "white",
                                        marginTop: "20%",
                                        width: "100%",
                                    }}
                                    variant="contained"
                                >
                                    Modify Order
                </Button>
                            </div>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(Checkout);
