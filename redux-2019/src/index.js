import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import ApprovalCard from "./components/ApprovalCard";
import CommentDetail from "./components/CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="John Doe"
                    avatar={faker.image.avatar()}
                    comment={faker.lorem.sentence()}
                    postTime="5.00 PM"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane Doe"
                    avatar={faker.image.avatar()}
                    comment={faker.lorem.sentence()}
                    postTime="5.05 PM"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jill Doe"
                    avatar={faker.image.avatar()}
                    comment={faker.lorem.sentence()}
                    postTime="6.10 PM"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Kevin Doe"
                    avatar={faker.image.avatar()}
                    comment={faker.lorem.sentence()}
                    postTime="6.20 PM"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
