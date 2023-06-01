import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import "./styles.css";
import { ChatState } from "../context/ChatProvider";
import SingleChat from "./SingleChat";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <div style={{ width: "900px", height: "550px", backgroundColor: "white" }}>
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </div>
  );
};

export default Chatbox;
