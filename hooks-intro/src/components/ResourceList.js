import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
    const [resources, setResources] = useState([]);

    // const fetchResources = async resource => {
    //     const response = await axios.get(
    //         `https://jsonplaceholder.typicode.com/${resource}`
    //     );

    //     setResources(response.data);
    // };

    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/${resource}`
                );

                setResources(response.data);
            })(resource);

            // ! Above is an  alternate to calling a separate function
            //fetchResources(props.resource);
        },
        [resource]
    );

    return resources;
};

const ResourceList = props => {
    const resources = useResources(props.resource);

    return (
        <ul>
            {resources.map(res => {
                return <li key={res.id}>{res.title}</li>;
            })}
        </ul>
    );
};

export default ResourceList;
