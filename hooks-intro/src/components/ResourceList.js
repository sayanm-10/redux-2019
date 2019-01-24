import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = props => {
    const [resources, setResources] = useState([]);

    const fetchResources = async resource => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`
        );

        setResources(response.data);
    };

    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/${resource}`
                );

                setResources(response.data);
            })(props.resource);

            // ! Alternate to calling a separate function
            //fetchResources(props.resource);
        },
        [props.resource]
    );

    return <div>{resources.length}</div>;
};

export default ResourceList;
