import { Text, Heading, Link, Box} from "@chakra-ui/react"
import InfoCircle from "../components/Infocircle"
import InfoBar from "../components/InfoBar"
import { Global } from "@emotion/react";
import { useNavigate } from 'react-router-dom';
import ContactsBox from "../components/ContactsBox";
import { Image } from "@chakra-ui/react";


export default function AboutPage() {
  const navigate = useNavigate();
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
          padding: 0,
          backgroundColor: '#F6F3F0',
        },


        '#root': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: 0,
            padding: 0,
            backgroundColor: '#F6F3F0',
            width: "100%"
        }
      }}/>


        <Box w="100vw" minh="450vh" bg="#F6F3F0" display="flex" justifyContent="center" maxW={"1000px"} alignItems="center" overflow="hidden" m={0} p={0}>


        <Box w="100vw" minH="450vh" position="relative" m={0} p={0} overflow="hidden" maxW="1000px" bg="#F6F3F0">


        <Image
          src="/kuplassa_logo.png"
          alt="Logo"
          position="absolute"
          top={{ sm: "0.5%", md: "0.5%", lg: "0.5%", "2xl": "0.5%" }}
          left={{ sm: "4%", md: "4%", lg: "4%", "2xl": "4%" }}
          width={{ sm: "85px", md: "130px", lg: "150px", "2xl": "150px" }}
          height="auto"
        />


        <Box position="absolute" top={{ sm: "4%", md: "4%", lg: "1%", "2xl": "3%" }} left={{ sm: "5%", md: "30%", lg: "25%", "2xl": "25%" }} transform="rotate(0deg)">
          <InfoCircle color="#CEDFE6" size={{ sm: 250, md: 280, lg: 300, "2xl": 400 }} fontSize={{ sm: 14, md: 16, lg: 17, "2xl": 20 }} title="KUPLASSA" text=
            "Kampanjamme tavoitteena on lisätä tietoisuutta somekuplista ja niiden vaikutuksesta mielipiteisiin – erityisesti nuorten keskuudessa. Haluamme herättää kriittistä ajattelua ja keskustelua siitä, miten somen algoritmit voivat huomaamattamme ohjata ajatteluamme."
          />
        </Box>


        <Box position="absolute" top={{ sm: "1%", md: "1%", lg: "1%", "2xl": "1%" }} left={{ sm: "50%", md: "50%", lg: "85%", "2xl": "85%" }} transform="rotate(0deg)">
          <InfoCircle color="#CEDFE6" size={{ sm: 67, md: 67, lg: 67, "2xl": 67 }} />
        </Box>


        <Box position="absolute" top={{ sm: "5%", md: "5%", lg: "5%", "2xl": "5%" }} left={{ sm: "79%", md: "79%", lg: "90%", "2xl": "90%" }} transform="rotate(0deg)">
          <InfoCircle color="rgb(152,182,202)" size={{ sm: 49, md: 49, lg: 49, "2xl": 49 }} />
        </Box>


        <Box position="absolute" top={{ sm: "10%", md: "10%", lg: "10%", "2xl": "10%" }} left={{ sm: "82%", md: "82%", lg: "79%", "2xl": "79%" }} transform="rotate(0deg)">
          <InfoCircle color="#ADD1E0" size={{ sm: 37, md: 37, lg: 37, "2xl": 37 }} />
        </Box>


        <Box position="absolute" top={{ sm: "14.5%", md: "14.5%", lg: "14%", "2xl": "14%" }} left={{ sm: "24%", md: "45%", lg: "40%", "2xl": "40%" }} transform="rotate(0deg)">
          <InfoCircle color="#ADD1E0" size={{ sm: 260, md: 300, lg: 320, "2xl": 390 }} fontSize={{ sm: 14, md: 16, lg: 17, "2xl": 20 }} title="Mitä somekuplat ovat?" text=
            "Somekuplilla tarkoitetaan sosiaalisen median ilmiötä, jossa käyttäjä altistuu pääosin oman maailmankuvansa mukaiselle sisällölle. Näin muodostuu 'kupla', jossa samanmieliset näkemykset vahvistuvat ja vastakkaiset näkökulmat jäävät helposti piiloon."
          />
        </Box>    


        <Box position="absolute" top={{ sm: "20%", md: "20%", lg: "20%", "2xl": "20%" }} left={{ sm: "4%", md: "4%", lg: "4%", "2xl": "4%" }} transform="rotate(0deg)">
          <InfoCircle color="#CEDFE6" size={{ sm: 69, md: 69, lg: 75, "2xl": 75 }} />
        </Box>


        <Box position="absolute" top={{ sm: "16%", md: "16%", lg: "16%", "2xl": "16%" }} left={{ sm: "7%", md: "7%", lg: "7%", "2xl": "7%" }} transform="rotate(0deg)">
          <InfoCircle color="#CEDFE6" size={{ sm: 59, md: 59, lg: 59, "2xl": 59 }} />
        </Box>


        <Box position="absolute" top={{ sm: "25%", md: "25%", lg: "23%", "2xl": "23%" }} left={{ sm: "2%", md: "7%", lg: "2%", "2xl": "2%" }} transform="rotate(1deg)">
          <InfoCircle color="rgb(152,182,202)" size={{ sm: 270, md: 290, lg: 330, "2xl": 400 }} fontSize={{ sm: 14, md: 16, lg: 18, "2xl": 20 }} title="Miksi ne ovat vaarallisia?"
            text="
            Ilmiö on vaarallinen, koska se voi johtaa yksipuoliseen ajatteluun, vahvistaa ennakkoluuloja ja lisätä yhteiskunnallista
            polarisaatiota. Kun ihmiset elävät eri kuplissa, yhteinen ymmärrys vähenee ja keskustelu vaikeutuu.
            "
          />
        </Box>


        <Box position="absolute" top={{ sm: "27%", md: "27%", lg: "27%", "2xl": "27%" }} left={{ sm: "83%", md: "83%", lg: "83%", "2xl": "83%" }} transform="rotate(0deg)">
          <InfoCircle color="#ADD1E0" size={{ sm: 53, md: 53, lg: 53, "2xl": 53 }} />            
        </Box>


        <Box position="absolute" top={{ sm: "37%", md: "37%", lg: "41%", "2xl": "41%" }} left={{ sm: "15%", md: "15%", lg: "15%", "2xl": "15%" }} transform="rotate(0deg)">
          <InfoCircle color="rgb(152,182,202)" size={{ sm: 23, md: 23, lg: 55, "2xl": 55 }} />
        </Box>


        <Box position="absolute" top={{ sm: "35.5%", md: "35.5%", lg: "31%", "2xl": "31%" }} left={{ sm: "35%", md: "35%", lg: "47%", "2xl": "47%" }} transform="rotate(-1deg)">
          <InfoCircle color="#CEDFE6" size={{ sm: 200, md: 240, lg: 250, "2xl": 350 }} fontSize={{ sm: 16, md: 18, lg: 20, "2xl": 24 }} title="Kenelle kampanja on suunnattu?" text=
            "15–19-vuotiaille lukiolaisille, jotka käyttävät aktiivisesti sosiaalista mediaa"
          />
        </Box>


        <Box position="absolute" top={{ sm: "43%", md: "43%", lg: "47%", "2xl": "47%" }} left={{ sm: "15%", md: "15%", lg: "15%", "2xl": "15%" }} transform="rotate(0deg)">
          <InfoCircle color="#ADD1E0" size={{ sm: 55, md: 55, lg: 79, "2xl": 79 }} />
        </Box>


        <Box position="absolute" top={{ sm: "44%", md: "44%", lg: "52%", "2xl": "52%" }} left={{ sm: "58%", md: "58%", lg: "58%", "2xl": "58%" }} transform="rotate(0deg)">
          <InfoCircle color="#CEDFE6" size={{ sm: 45, md: 45, lg: 85, "2xl": 85 }} />
        </Box>


        <Box position="absolute" top={{ sm: "46%", md: "46%", lg: "44%", "2xl": "44%" }} left={{ sm: "50%", md: "50%", lg: "50%", "2xl": "50%" }} transform="translateX(-50%)">
          <InfoBar text="Miten päästä somekuplasta ulos?" bg="rgb(152,182,202)" color="black" size={280}></InfoBar>
        </Box>


        <Box position="absolute" top={{ sm: "51%", md: "51%", lg: "50%", "2xl": "50%" }} left={{ sm: "5%", md: "15%", lg: "15%", "2xl": "15%" }} transform="rotate(1deg)">
          <InfoCircle color="#ADD1E0" size={{ sm: 240, md: 280, lg: 310, "2xl": 380 }} fontSize={{ sm: 14, md: 16, lg: 18, "2xl": 20 }} title="Hae tietoa eri lähteistä" text="
            Käytä eri medioita: uutislehtiä, tutkimuksia, podcasteja, dokumentteja.
            Algoritmit tarjoavat usein tuttua ja turvallista, mutta oman haun avulla voit löytää uusia näkökulmia."
          />
        </Box>


        <Box position="absolute" top={{ sm: "51%", md: "51%", lg: "47%", "2xl": "47%" }} left={{ sm: "78%", md: "78%", lg: "78%", "2xl": "78%" }} transform="rotate(0deg)">
          <InfoCircle color="#ADD1E0" size={{ sm: 35, md: 35, lg: 100, "2xl": 100 }} />
        </Box>


        <Box position="absolute" top={{ sm: "62%", md: "62%", lg: "58%", "2xl": "58%" }} left={{ sm: "5%", md: "40%", lg: "55%", "2xl": "55%" }} transform="rotate(-2deg)">
          <InfoCircle color="#CEDFE6" size={{ sm: 240, md: 280, lg: 300, "2xl": 400 }} fontSize={{ sm: 14, md: 16, lg: 18, "2xl": 20 }} title="Sekoita algoritmia" text="
            Klikkaa ja tykkää joskus sellaisesta sisällöstä, joka ei kuulu normaaliin kiinnostuksen kohteeseesi.
            Näin algoritmi ei 'lukitse' sinua yhteen kuplaan,
            vaan esittää monipuolisempaa sisältöä."
          />
        </Box>


        <Box position="absolute" top={{ sm: "60%", md: "60%", lg: "53%", "2xl": "53%" }} left={{ sm: "75%", md: "75%", lg: "75%", "2xl": "75%" }} transform="rotate(0deg)">
          <InfoCircle color="#ADD1E0" size={{ sm: 62, md: 62, lg: 85, "2xl": 85 }} />
        </Box>


        <Box position="absolute" top={{ sm: "73%", md: "72%", lg: "66%", "2xl": "66%" }} left={{ sm: "5%", md: "12%", lg: "5%", "2xl": "5%" }} transform="rotate(2deg)">
          <InfoCircle color="#ADD1E0" size={{ sm: 260, md: 300, lg: 340, "2xl": 390 }} fontSize={{ sm: 14, md: 16, lg: 18, "2xl": 20 }} title="Etsi eriäviä mielipiteitä" text="
            Tarkoituksena ei ole ärsyyntyä tai väitellä, vaan ymmärtää, miten muut ajattelevat.
            Seuraa tilejä ja medioita, jotka edustavat erilaisia näkökulmia kuin omasi – poliittisesti, kulttuurisesti tai
            maailmankuvallisesti."
          />
        </Box>


        <Box position="absolute" top={{ sm: "83%", md: "81%", lg: "77%", "2xl": "77%" }} left={{ sm: "35%", md: "45%", lg: "45%", "2xl": "45%" }} transform="rotate(0deg)">
          <InfoCircle color="#CEDFE6" size={{ sm: 240, md: 280, lg: 300, "2xl": 400 }} fontSize={{ sm: 14, md: 16, lg: 18, "2xl": 20 }} title="Kyseenalaista oma kupla" text="
            Kun huomaat ajattelevasi 'tämähän on itsestään selvää', pysähdy miettimään – onko se varmasti
            niin? Voisiko joku ajatella tästä toisin ja miksi?"
          />
        </Box>


        <Box position="absolute" top={{ sm: "70%", md: "70%", lg: "74%", "2xl": "74%" }} left={{ sm: "77%", md: "77%", lg: "77%", "2xl": "77%" }} transform="rotate(0deg)">
          <InfoCircle color="#CEDFE6" size={{ sm: 75, md: 75, lg: 100, "2xl": 100 }} />
        </Box>


        <Box position="absolute" top={{ sm: "85%", md: "85%", lg: "85%", "2xl": "85%" }} left={{ sm: "15%", md: "15%", lg: "20%", "2xl": "20%" }} transform="rotate(0deg)">
          <InfoCircle color="rgb(152,182,202)" size={{ sm: 63, md: 63, lg: 100, "2xl": 100 }} />
        </Box>


        <Box position="absolute" top={{ sm: "90%", md: "90%", lg: "90%", "2xl": "90%" }} left={{ sm: "12%", md: "12%", lg: "12%", "2xl": "12%" }} transform="rotate(0deg)">
          <InfoCircle color="#ADD1E0" size={{ sm: 55, md: 55, lg: 75, "2xl": 75 }} />
        </Box>


        <Box position="absolute" top={{ sm: "93%", md: "93%", lg: "92%", "2xl": "92%" }} left={{ sm: "50%", md: "50%", lg: "50%", "2xl": "50%" }} transform="translateX(-50%)" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>  
          <InfoBar text="Takaisin pääsivulle" bg="rgb(152,182,202)" color="black" size={220}></InfoBar>
        </Box>


        <Box position="absolute" top={{ sm: "100%", md: "100%", lg: "100%", "2xl": "100%" }} left={{ sm: "50%", md: "50%", lg: "50%", "2xl": "50%" }} transform="translateX(-50%)">
          <ContactsBox></ContactsBox>
        </Box>


        </Box>
      </Box>
    </>
    )
}
