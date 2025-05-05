import { Flex, Avatar, Text, Spacer, IconButton } from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";

const PostHeader = ({ username, avatarUrl }) => (
  <Flex align="center" p={4}>
    <Avatar name={username} src={avatarUrl} size="sm" />
    <Text fontWeight="bold" ml={3}>{username}</Text>
    <Spacer />
    <IconButton
      variant="ghost"
      icon={<FiMoreHorizontal />}
      aria-label="Options"
    />
  </Flex>
);

export default PostHeader