import React from "react";

const ImageList = props => {
    const images = props.images.map(({ id, urls, description }) => {
        return (
            // <img
            //     key={image.id}
            //     src={image.urls.regular}
            //     alt={image.description}
            // />

            // Alternate by using destructured args
            <img key={id} src={urls.regular} alt={description} />
        );
    });

    return <div>{images}</div>;
};

export default ImageList;
