import { Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom'

// Logo on tehty nyt ainoastaan niin, että on exportattu kuva figmasta
// Klikkaamalla logoa päätyy etusivulle

export default function Logo() {
    return(
        <Link to="/">
            <Image objectFit={"cover"} src="/logo.png" width={"100px"} />
        </Link>
    )
}