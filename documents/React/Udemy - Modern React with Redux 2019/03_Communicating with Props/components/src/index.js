import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?{" "}
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          content="You are good man!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today a 2:00AM"
          avatar={faker.image.avatar()}
          content="He is awesome!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Brad"
          timeAgo="Yesterday at 5:00PM"
          avatar={faker.image.avatar()}
          content="Best teacher!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
