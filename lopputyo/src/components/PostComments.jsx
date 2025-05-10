import { Box, Text, Stack } from "@chakra-ui/react"

export function PostComments({ comments }) {
  return (
    <Box px={3} pt={2}>
        <Text color="gray.500" mb={1}>View all comments...</Text>
        <Stack spacing={1}>
        {comments.map((comment, index) => (
        
        <Text key={index}>
          <Text as="span" textStyle={"data"} mr={2}>{comment.user}</Text>
          {comment.text}
        </Text>

        
      ))}
      </Stack>
    </Box>
  )
}

export default PostComments;