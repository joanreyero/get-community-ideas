import React, { useEffect, useState } from "react";

const Message = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, props.delay);
  }, [props.delay]);

  return visible ? <div>{props.message.body}</div> : <div />;
};

export default Message;