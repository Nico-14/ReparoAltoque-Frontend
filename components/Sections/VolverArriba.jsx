import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

export default class VolverArriba extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bottom: "-20%",
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 1000) {
                this.setState({
                    bottom: "2%",
                });
            } else {
                this.setState({
                    bottom: "-20%",
                });
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", () => {
            if (window.scrollY >= 1000) {
                this.setState({
                    bottom: "2%",
                });
            } else {
                this.setState({
                    bottom: "-20%",
                });
            }
        });
    }

    backToTheTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    render() {
        return (
            <button
                type="button"
                className="btn btn-warning"
                style={{
                    position: "fixed",
                    bottom: this.state.bottom,
                    left: "2%",
                    zIndex: "40",
                }}
                onClick={() => this.backToTheTop()}
            >
                <span className="btn-inner--icon">
                    <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" />
                </span>
            </button>
        );
    }
}
