import { Text, Box} from "@chakra-ui/react"
import InfoCircle from "../components/Infocircle"
import InfoBar from "../components/Infobar"
import { Global } from "@emotion/react";
import { useNavigate } from 'react-router-dom';
import ContactsBox from "../components/ContactsBox";
import PlayerWheel from "../components/PlayerWheel"
import { Image } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import OpenSelect from "../components/OpenSelect";




export default function MainPage() {
  const navigate = useNavigate();
  const {isOpen, onOpen, onClose } = useDisclosure();

    return(
    <>


        <Global styles={{
        // asettaa css, body.chakra-ui-light:lle ja rootille vain tällä sivulla. Laitetaan minHeight 190vh, jotta voidaan käyttää absolute pos. tehokkaasti.
        '.chakra-ui-light': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#F6F3F0',
          margin: 0,
          padding: 0
        },


        '#root': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: 0,
            padding: 0,
            backgroundColor: '#F6F3F0',
            overflow: 'hidden',
            width: "100%"


        }
      }}/>


        <Box w="100vw" minH={{sm: "190vh", lg: "130vh", "2xl": "100vh"}} bg="#F6F3F0" display="flex" justifyContent="center" maxW="1000px"alignItems="center" overflow="hidden" m={0} p={0}>


        <Box w="100vw" minH={{sm: "190vh", lg: "130vh", "2xl": "100vh"}} position="relative" m={0} p={0} overflow="hidden" maxW="1000px" bg="#F6F3F0">


        <Image
          src="/logo.png"
          alt="Logo"
          position="absolute"
          top={{ sm: "0.5%", md: "0.5%", lg: "0.5%", "2xl": "0.5%" }}
          left={{ sm: "4%", md: "4%", lg: "4%", "2xl": "4%" }}
          width={{ sm: "75px", md: "80px", lg: "120px", "2xl": "150px" }}
          height="auto"
          borderRadius="30px"
        />


        <Box
          position="absolute"
          top={{ sm: "0%", md: "0%", lg: "0%", "2xl": "0%" }}
          left={{ sm: "35%", md: "35%", lg: "75%", "2xl": "75%" }}
          onClick={() => navigate('/about')}
          style={{ cursor: 'pointer' }}
        >
          <InfoBar text="Mistä on kyse? Klikkaa!" bg="rgb(152,182,202)" color="black" size={220}></InfoBar>
        </Box>


        <Box
          position="absolute"
          top={{ sm: "10%", md: "10%", lg: "8%", "2xl": "8%" }}
          left={{ sm: "50%", md: "50%", lg: "50%", "2xl": "50%" }}
          transform="translateX(-50%)"
          minW="250px"
        >
          <Text
            fontSize={{ sm: "20px", lg: "26px", "2xl": "30px" }}
            fontWeight='bold'
            color='#222'
            textAlign="center"
          >
            "Älä anna algoritmien päättää puolestasi. Ota ohjat omiin käsiisi."
          </Text>
        </Box>


        <Box
          position="absolute"
          top={{ sm: "22%", md: "22%", lg: "20%", "2xl": "22%" }}
          left={{ sm: "50%", md: "50%", lg: "50%", "2xl": "50%" }}
          transform="translateX(-50%)"
          minW="280px"
        >
          <Text
            fontSize={{ sm: "16px", lg: "20px", "2xl": "22px" }}
            fontWeight='normal'
            textAlign='center'
            color='#222'
          >
            Tutustu kampanjaamme ja testaa, miten somekuplat toimivat – ja lue miten voit päästä niiden ulkopuolelle.
          </Text>
        </Box>


        <Box
          position="absolute"
          top={{ sm: "37%", md: "35%", lg: "31%", "2xl": "33%" }}
          left={{ sm: "50%", md: "50%", lg: "19%", "2xl": "19%" }}
          transform="translateX(-50%)"
        >
          <InfoCircle
            color="rgb(152,182,202)"
            size={{ sm: 340, md:340, lg: 380, "2xl": 380 }}
            fontSize={{ sm: 16, lg: 18 }}
            title="Mitä somekuplat ovat?"
            text="Somekuplilla tarkoitetaan sosiaalisen median ilmiötä, jossa käyttäjä altistuu pääosin oman maailmankuvansa mukaiselle sisällölle. Algoritmit näyttävät meille enimmäkseen sellaista sisältöä, jota olemme aiemmin katsoneet, tykänneet tai jakaneet. Näin muodostuu 'kupla', jossa samanmieliset näkemykset vahvistuvat ja vastakkaiset näkökulmat jäävät helposti piiloon."
          />
        </Box>


        <Box
          position="absolute"
          top={{ sm: "35%", md: "35%", lg: "19%", "2xl": "21%" }}
          left={{ sm: "78%", md: "78%", lg: "80%", "2xl": "80%" }}
          transform="rotate(0deg)"
        >
          <InfoCircle color="#ADD1E0" size={{ sm: 50, lg: 50 }} />
        </Box>


        <Box
          position="absolute"
          top={{ sm: "30%", md: "30%", lg: "15%", "2xl": "15%" }}
          left={{ sm: "84%", md: "84%", lg: "85%", "2xl": "82%" }}
          transform="rotate(0deg)"
        >
          <InfoCircle color="#ADD1E0" size={{ sm: 25, lg: 58 }} />
        </Box>


        <Box
          position="absolute"
          top={{ sm: "31%", md: "31%", lg: "21%", "2xl": "21%" }}
          left={{ sm: "67%", md: "67%", lg: "90%", "2xl": "90%" }}
          transform="rotate(0deg)"
        >
          <InfoCircle color="#ADD1E0" size={{ sm: 13, lg: 17 }} />
        </Box>



        <Box
          position="absolute"
          top={{ sm: "65%", md: "62%", lg: "23%", "2xl": "29%" }}
          left={{ sm: "50%", md: "50%", lg: "79.5%", "2xl": "79%" }}
          transform="translateX(-50%)"
        >
          <PlayerWheel onOpen={onOpen}/>
        </Box>

        <OpenSelect isOpen={isOpen} onClose={onClose}> </OpenSelect>


        <Box
          position="absolute"
          top={{ sm: "100.6%", md: "100.6%", lg: "100.6%", "2xl": "100.6%" }}
          left={{ sm: "50%", md: "50%", lg: "50%", "2xl": "50%" }}
          transform="translateX(-50%)"
        >
          <ContactsBox />
        </Box>


        </Box>
      </Box>
    </>
  )
}
