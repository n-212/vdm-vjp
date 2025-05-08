import { Text, Heading, Link, Box} from "@chakra-ui/react"
import InfoCircle from "../components/infocircle"
import InfoBar from "../components/infobar"


export default function AboutPage() {
    return(
    <>

        <Box w="100vw" minH="100vh" m={0} p={0}>
            
        <InfoBar text="Mistä on kyse?" bg="rgb(152,182,202)" color="black" size={220}></InfoBar>
        <InfoCircle color="#ADD1E0" size={50} fontSize={10} title="Kuplassa"/>
            

        <InfoCircle color="rgb(152,182,202)" size={380} title="Mitä somekuplat ovat ja miksi ne ovat vaarallisia?" 
        text="
        Somekuplilla tarkoitetaan sosiaalisen median ilmiötä, jossa käyttäjä altistuu pääosin oman maailmankuvansa mukaiselle sisällölle.
        Algoritmit näyttävät meille enimmäkseen sellaista sisältöä, jota olemme aiemmin katsoneet, tykänneet tai jakaneet. 
        Näin muodostuu 'kupla', jossa samanmieliset näkemykset vahvistuvat ja vastakkaiset näkökulmat jäävät helposti piiloon.

        Tämä on ongelmallista, koska se voi johtaa yksipuoliseen ajatteluun, vahvistaa ennakkoluuloja ja lisätä yhteiskunnallista 
        polarisaatiota. Kun ihmiset elävät eri kuplissa, yhteinen ymmärrys vähenee ja keskustelu vaikeutuu.
        "
        />



        <InfoCircle color="#ADD1E0" size={180} title="Kenelle?" text=
        "15–19-vuotiaille lukiolaisille, jotka käyttävät aktiivisesti sosiaalista mediaa"/>

        <InfoCircle color="#CEDFE6" size={320} title="KUPLASSA" text=
        "Kampanjamme tavoitteena on lisätä tietoisuutta somekuplista ja niiden vaikutuksesta mielipiteisiin – erityisesti nuorten keskuudessa. Haluamme herättää kriittistä ajattelua ja keskustelua siitä, miten somen algoritmit voivat huomaamattamme ohjata ajatteluamme."/>

        <InfoCircle color="rgb(152,182,202)" size={200} title="Miten päästä somekuplasta ulos?" text=""/>

        <InfoCircle color="rgb(152,182,202)" size={240} title="Hae tietoa eri lähteistä" text="
        Käytä eri medioita: uutislehtiä, tutkimuksia, podcasteja, dokumentteja. 
        Algoritmit tarjoavat usein tuttua ja turvallista, mutta oman haun avulla voit löytää uusia näkökulmia."/>

        <InfoCircle color="rgb(152,182,202)" size={240} title="Sekoita algoritmia" text="
        Klikkaa ja tykkää joskus sellaisesta sisällöstä, joka ei kuulu normaaliin kiinnostuksen kohteeseesi. 
        Näin algoritmi ei 'lukitse' sinua yhteen kuplaan, 
        vaan esittää monipuolisempaa sisältöä."/>

        <InfoCircle color="rgb(152,182,202)" size={240} title="Etsi eriäviä mielipiteitä" text="
        Tarkoituksena ei ole ärsyyntyä tai väitellä, vaan ymmärtää, miten muut ajattelevat. 
        Seuraa tilejä ja medioita, jotka edustavat erilaisia näkökulmia kuin omasi – poliittisesti, kulttuurisesti tai 
        maailmankuvallisesti."/>

        <InfoCircle color="rgb(152,182,202)" size={240} title="Kyseenalaista oma kupla" text="
        Kun huomaat ajattelevasi 'tämähän on itsestään selvää', pysähdy miettimään – onko se varmasti 
        niin? Voisiko joku ajatella tästä toisin ja miksi?"/>

        <InfoCircle color="rgb(152,182,202)" size={40}/>

        <InfoCircle color="rgb(152,182,202)" size={40}/>

        </Box>

    </>


    )
}