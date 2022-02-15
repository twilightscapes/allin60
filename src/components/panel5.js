
import * as React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
// import { graphql } from "gatsby"
// import { GatsbyImage } from 'gatsby-plugin-image'
// import TwilightLogo from "../../static/assets/logo.svg"
import { StaticImage } from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import ReactPlayer from 'react-player/lazy'
import { ImPlay } from "react-icons/im"
import LightCycle from "../../static/assets/light-cycle.svg"
// import QuoraStrike from "../../static/assets/quora-strike.svg"
// import LoveSignal from "../../static/assets/love-signal.svg"
// import Castor from "../../static/assets/castor.svg"
// import SamFly from "../../static/assets/sam-fly.svg"
import SamFlynn from "../../static/assets/sam-flynn.svg"
import CluGuy from "../../static/assets/clu.svg"
import TronGuy from "../../static/assets/tron.svg"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
import QuoraStand from "../../static/assets/quora-ass.svg"
import KevinFlynn from "../../static/assets/kevin-flynn.svg"
import TronChick from "../../static/assets/tron-chick1.svg"


const CustomBox = styled.div`
.frontbg iframe{
  opacity:.4;
}
`

const Panel5 = () => (
<CustomBox style={{}}>

{/*  */}
<div id="match2" style={{display:'',  padding:'0', outline:'0px solid yellow', height:'100vh', width:'100vw', position:'relative', overflowX:'hidden'}}>

{/* <div style={{position:'absolute', right:'20vh', top:'0', width:'300px', height:'200px', background:'red', color:'#fff'}}>DAMN</div> */}

{/* Panel Video */}
<div className="vidbox" style={{position:'absolute', height:'100vh', width:'100vw', bottom:'0', zIndex:''}}>
<div className="video-background FULL">
<div className="video-foreground">
{/* c_V1iD6F1kk */}
{/* nJ38P5elTkg */}

<ReactPlayer
         className='youtubehide'
         url="https://www.youtube.com/embed/YyoKXfBQgXw"
         width="100%"
         height="100%"
         config={{
           youtube: {
            playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:204, end:221, loop:1  }
           },
         }}
         loop
         playing
         playsinline
             playIcon={
               <button aria-label="Click To Play" className="clickplay1" style={{position:'relative', zIndex:'5', bottom:'0', right:'', left:'', border:'0px solid red', width:'50%', height:'100vh', background:'', color:'#fff', fontSize:'18px', display:'grid', placeContent:'center', padding:'0' }}>


<div style={{textAlign:'center', position:'', top:'0', zIndex:'40'}}>
     <ImPlay style={{padding:'0 0 0 0', display:'flex', justifyContent:'center', fontSize:'60px', border:'0px solid blue',}} />
</div>    

             </button>
         
            }
               light="assets/grid-loader.svg"
         />
</div>
</div>
</div>
{/* Panel Video */}

{/* Panel Content */}





<div className="nextbutt" style={{display:'', flexDiection:'column', justifyContent:'center', color:'#ccc', height:'', position:'relative', left:'5%',}}>

          <button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'2', filter:'drop-shadow(2px 2px 2px #000)', height:'', borderRadius:'200px',fontSize:'2vw', padding:'3% 5%', }}><Link to="/#lightcycles" style={{color:'#37f8f8'}}>LightCycle Grid <span style={{fontSize:'150%'}}>|</span></Link></button>

</div>




<Link state={{modal: true}} to="/about-twilightscapes/">
<StaticImage className="character evil"
style={{maxHeight:'', maxWidth:'', height:'80vh', width:'70%', position:'absolute', left:'44vw', bottom:'0', paddingTop:'0', zIndex:'0', border:'0px solid blue' }}
alt="Todd Lambert Web development for photographers" src="../img/tron-fights2.png" />
</Link>

{/* <Link state={{modal: true}} to="/quorra/">
<TronChick className="tronchick character" style={{maxHeight:'', maxWidth:'', height:'100vh', width:'100%', position:'absolute', left:'30vw', top:'0', paddingTop:'0', zIndex:'0', border:'0px solid blue' }} />
</Link> */}




</div>

{/* Panel Content */}


{/*  */}
{/* Image Gallery */}

  {/* {data.allFile.edges.map(edge => {
  return <GatsbyImage
  image={edge.node.childImageSharp.gatsbyImageData}
  srl_gallery_image="true"
  alt={edge.node.name}
  key={edge.node.id}
/>
})} */}






</CustomBox>
)
export default Panel5