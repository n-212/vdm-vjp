import { Flex, Avatar, Text, Spacer, IconButton } from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";

const PostHeader = ({ username, avatarUrl }) => (
  <Flex align="center" p={2}>
    <Avatar src={avatarUrl} size="sm" />
    <Text textStyle="data" ml={3}>{username}</Text>
    <Spacer />
    {/*Turhia buttoneita ei varmaan kannata olla liikaa*/}
    {/*<IconButton
      variant="ghost"
      icon={<FiMoreHorizontal size="24px"/>}
      aria-label="Options"
    />*/}
  </Flex>
);

export default PostHeader