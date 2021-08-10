//import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./examples/ApprovalCard";

/*this is first example -ApprovalCard ve CommentDeails*/
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4> Warning! </h4>
                    Are you sure you want to do this ?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    time="Yesterday at 5:00 PM"
                    blog="Cool!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    time="Today at 5:00 PM"
                    blog="very Cool!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    time="Today at 1:00 PM"
                    blog="super Cool!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
