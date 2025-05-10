import { Text, Heading, Link, Box} from "@chakra-ui/react"
import InfoCircle from "../components/Infocircle"
import InfoBar from "../components/Infobar"
import { Global } from "@emotion/react";
import { useNavigate } from 'react-router-dom';
import ContactsBox from "../components/ContactsBox";


export default function AboutPage() {
  const navigate = useNavigate();
    return(
    <>

        <Global styles={{
        // Targets body.chakra-ui-light only on this page
        '.chakra-ui-light': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '340vh',
          margin: 0,
          padding: 0,
          backgroundColor: 'white'
        }, 

        '#root': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '340vh',
            margin: 0,
            padding: 0,
            backgroundColor: 'white'

        }
      }}/>

        <Box w="100vw" minh="340vh" bg="#F6F3F0" display="flex" justifyContent="center" alignItems="center" overflow="hidden" m={0} p={0}> 

        <Box w="100vw" minH="340vh" position="relative" m={0} p={0} overflow="hidden" maxW="1000px" bg="#F6F3F0">

        <img
        src="/kuplassa_logo.png"
        alt="Logo"
        style={{
        position: "absolute",
        top: "0.5%",
        left: "4%",
        width: "70px",
        height: "auto"
        }}
/>
            

            <Box position="absolute" top="0%" left="30%">
            <InfoBar text="Mistä on kyse?" bg="rgb(152,182,202)" color="black" size={220}></InfoBar>
            </Box>
    
            <Box position="absolute" top="4%" left="5%" transform="rotate(0deg)">
            <InfoCircle color="#CEDFE6" size={210} fontSize={11} title="KUPLASSA" text=
            "Kampanjamme tavoitteena on lisätä tietoisuutta somekuplista ja niiden vaikutuksesta mielipiteisiin – erityisesti nuorten keskuudessa. Haluamme herättää kriittistä ajattelua ja keskustelua siitä, miten somen algoritmit voivat huomaamattamme ohjata ajatteluamme."/>
            </Box>
    
            <Box position="absolute" top="5%" left="68%" transform="rotate(0deg)">
            <InfoCircle color="rgb(152,182,202)" size={49}/>
            
            </Box>
    
            <Box position="absolute" top="10%" left="79%" transform="rotate(0deg)">
            <InfoCircle color="#ADD1E0" size={37}/>
            
            </Box>
    
            <Box position="absolute" top="13%" left="27%" transform="rotate(0deg)">
            <InfoCircle color="#ADD1E0" size={240} fontSize={11} title="Mitä somekuplat ovat?" text=
            "Somekuplilla tarkoitetaan sosiaalisen median ilmiötä, jossa käyttäjä altistuu pääosin oman maailmankuvansa mukaiselle sisällölle. Algoritmit näyttävät meille enimmäkseen sellaista sisältöä, jota olemme aiemmin katsoneet, tykänneet tai jakaneet. Näin muodostuu 'kupla', jossa samanmieliset näkemykset vahvistuvat ja vastakkaiset näkökulmat jäävät helposti piiloon."/>
            </Box>
    
            <Box position="absolute" top="20%" left="4%" transform="rotate(0deg)">
            <InfoCircle color="#CEDFE6" size={44}/>
            
            </Box>
    
            <Box position="absolute" top="16%" left="7%" transform="rotate(0deg)">
            <InfoCircle color="#CEDFE6" size={59}/>
            
            </Box>
    
    
            <Box position="absolute" top="23%" left="2%" transform="rotate(1deg)">
            <InfoCircle color="rgb(152,182,202)" size={220} fontSize={12} title="Miksi ne ovat vaarallisia?" 
            text="
            Ilmiö on vaarallinen, koska se voi johtaa yksipuoliseen ajatteluun, vahvistaa ennakkoluuloja ja lisätä yhteiskunnallista 
            polarisaatiota. Kun ihmiset elävät eri kuplissa, yhteinen ymmärrys vähenee ja keskustelu vaikeutuu.
            "
            />
            </Box>
    
            <Box position="absolute" top="27%" left="77%" transform="rotate(0deg)">
            <InfoCircle color="#ADD1E0" size={53}/>
            
            </Box>
    
            <Box position="absolute" top="35%" left="15%" transform="rotate(0deg)">
            <InfoCircle color="rgb(152,182,202)" size={23}/>
            
            </Box>
    
            <Box position="absolute" top="33%" left="35%" transform="rotate(-1deg)">
            <InfoCircle color="#CEDFE6" size={180} fontSize={14} title="Kenelle kampanja on suunnattu?" text=
            "15–19-vuotiaille lukiolaisille, jotka käyttävät aktiivisesti sosiaalista mediaa"/>
            </Box>
    
            <Box position="absolute" top="40%" left="15%" transform="rotate(0deg)">
            <InfoCircle color="#ADD1E0" size={55}/>
            
            </Box>
    
            <Box position="absolute" top="42%" left="58%" transform="rotate(0deg)">
            <InfoCircle color="#CEDFE6" size={45}/>
            
            </Box>
    
            <Box position="absolute" top="44%" left="50%" transform="translateX(-50%)">
            <InfoBar text="Miten päästä somekuplasta ulos?" bg="rgb(152,182,202)" color="black" size={280}></InfoBar>
            </Box>
    
            
    
            <Box position="absolute" top="49%" left="5%" transform="rotate(1deg)">
            <InfoCircle color="#ADD1E0" size={200} fontSize={12} title="Hae tietoa eri lähteistä" text="
            Käytä eri medioita: uutislehtiä, tutkimuksia, podcasteja, dokumentteja. 
            Algoritmit tarjoavat usein tuttua ja turvallista, mutta oman haun avulla voit löytää uusia näkökulmia."/>
            </Box>
    
            <Box position="absolute" top="51%" left="78%" transform="rotate(0deg)">
            <InfoCircle color="#ADD1E0" size={40}/>
            </Box>
    
            <Box position="absolute" top="53%" left="65%" transform="rotate(0deg)">
            <InfoCircle color="#CEDFE6" size={65}/>
            </Box>
    
    
            <Box position="absolute" top="60%" left="5%" transform="rotate(-2deg)">
            <InfoCircle color="#CEDFE6" size={240} fontSize={14} title="Sekoita algoritmia" text="
            Klikkaa ja tykkää joskus sellaisesta sisällöstä, joka ei kuulu normaaliin kiinnostuksen kohteeseesi. 
            Näin algoritmi ei 'lukitse' sinua yhteen kuplaan, 
            vaan esittää monipuolisempaa sisältöä."/>
            </Box>
    
            <Box position="absolute" top="60%" left="75%" transform="rotate(0deg)">
            <InfoCircle color="#ADD1E0" size={65}/>
            </Box>
    
    
            <Box position="absolute" top="73%" left="5%" transform="rotate(2deg)">
    
            <InfoCircle color="#ADD1E0" size={260} fontSize={14} title="Etsi eriäviä mielipiteitä" text="
            Tarkoituksena ei ole ärsyyntyä tai väitellä, vaan ymmärtää, miten muut ajattelevat. 
            Seuraa tilejä ja medioita, jotka edustavat erilaisia näkökulmia kuin omasi – poliittisesti, kulttuurisesti tai 
            maailmankuvallisesti."/>
            
            </Box>
    
            <Box position="absolute" top="86%" left="35%" transform="rotate(0deg)">
    
            <InfoCircle color="#CEDFE6" size={200} fontSize={12} title="Kyseenalaista oma kupla" text="
            Kun huomaat ajattelevasi 'tämähän on itsestään selvää', pysähdy miettimään – onko se varmasti 
            niin? Voisiko joku ajatella tästä toisin ja miksi?"/>
            
            </Box>
    
            <Box position="absolute" top="70%" left="77%" transform="rotate(0deg)">
            <InfoCircle color="#CEDFE6" size={60}/>
            
            </Box>
    
            <Box position="absolute" top="87%" left="20%" transform="rotate(0deg)">
            <InfoCircle color="rgb(152,182,202)" size={40}/>
            
            </Box>
    
            <Box position="absolute" top="93%" left="12%" transform="rotate(0deg)">
            <InfoCircle color="#ADD1E0" size={60}/>
            
            </Box>
    
            <Box position="absolute" top="95%" left="50%" transform="translateX(-50%)" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>   
            <InfoBar text="Takaisin pääsivulle" bg="rgb(152,182,202)" color="black" size={220}></InfoBar>
            </Box> 

            <Box position="absolute" top="100.3%" left="50%" transform="translateX(-50%)">
            <ContactsBox></ContactsBox>
            </Box>
    
            </Box>


        </Box>

        

    </>


    )
}