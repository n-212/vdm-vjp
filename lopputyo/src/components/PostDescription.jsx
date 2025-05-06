import { Box, Text } from "@chakra-ui/react";

const PostDescription = ({ username, caption, likes }) => (
  <Box px={4}>
    <Text textStyle="data" mb={1}>{likes} likes</Text>
    <Text>
      <Text as="span" textStyle="data">{username} </Text>
      {caption}
    </Text>
  </Box>
);


export default PostDescription