import { Avatar } from "@chakra-ui/react"

export default function PostHeader({ username, avatarUrl }) {
  return (
    <>
    <Avatar name={username} src={avatarUrl} />
    </>
  )
}