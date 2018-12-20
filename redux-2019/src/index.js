import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./components/CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="John Doe"
                avatar={faker.image.avatar()}
                comment={faker.lorem.sentence()}
                postTime="5.00 PM"
            />
            <CommentDetail
                author="Jane Doe"
                avatar={faker.image.avatar()}
                comment={faker.lorem.sentence()}
                postTime="5.05 PM"
            />
            <CommentDetail
                author="Jill Doe"
                avatar={faker.image.avatar()}
                comment={faker.lorem.sentence()}
                postTime="6.10 PM"
            />
            <CommentDetail
                author="Kevin Doe"
                avatar={faker.image.avatar()}
                comment={faker.lorem.sentence()}
                postTime="6.20 PM"
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
