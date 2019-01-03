import React, { Component } from "react";

export class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        };

        this.imageRef = React.createRef();
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    };

    componentDidMount() {
        // setTimeout(() => {
        //     console.log(this.imageRef.current.clientHeight);
        // }, 0);

        // as images are being fetched, the current obj may not be available immediately
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}

export default ImageCard;
