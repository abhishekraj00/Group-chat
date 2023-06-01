import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../context/ChatProvider";
import Alluser from "../components/miscellaneous/Alluser";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex justifyContent={"space-around"}>
        <Box p="4">{user && <MyChats />}</Box>

        <Box p="4">{user && <Chatbox />}</Box>
      </Flex>
    </div>
  );
};

export default Chatpage;
