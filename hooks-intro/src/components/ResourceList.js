import React from "react";
import useResources from "./useResources";

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
