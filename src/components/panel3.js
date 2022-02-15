
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
// import LightCycle from "../../static/assets/light-cycle.svg"
// import QuoraStrike from "../../static/assets/quora-strike.svg"
// import LoveSignal from "../../static/assets/love-signal.svg"
// import Castor from "../../static/assets/castor.svg"
// import SamFly from "../../static/assets/sam-fly.svg"
// import SamFlynn from "../../static/assets/sam-flynn.svg"
// import CluGuy from "../../static/assets/clu.svg"
// import TronGuy from "../../static/assets/tron.svg"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
// import QuoraStand from "../../static/assets/quora-ass.svg"
// import KevinFlynn from "../../static/assets/kevin-flynn.svg"
import TronChick from "../../static/assets/tron-chick1.svg"


const CustomBox = styled.div`
.frontbg iframe{
  opacity:.4;
}
`

const Panel2 = () => (
<CustomBox style={{}}>

{/*  */}
<div id="proceed" style={{display:'',  padding:'0', outline:'0px solid yellow', height:'100vh', width:'100vw', position:'relative', overflowX:'hidden'}}>

{/* <div style={{position:'absolute', right:'20vh', top:'0', width:'300px', height:'200px', background:'red', color:'#fff'}}>DAMN</div> */}

{/* Panel Video */}
<div className="vidbox" style={{position:'absolute', height:'100vh', width:'100vw', bottom:'0', zIndex:''}}>
<div className="video-background">
<div className="video-foreground">
{/* c_V1iD6F1kk */}
{/* nJ38P5elTkg */}

<ReactPlayer
         className='youtubehide'
         url="https://www.youtube.com/embed/Y7EZBP9j7h0"
         width="100%"
         height="100%"
         config={{
           youtube: {
            playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:40, end:60, loop:1  }
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

    <div style={{fontSize:'clamp(.7rem, 2.5vw, 2.6rem)', lineHeight:'140%', paddingTop:'1rem'}}>


    <Link state={{modal: true}} to="/quorra/">
<TronChick className="tronchick character" style={{maxHeight:'', maxWidth:'', height:'100vh', width:'100%', position:'absolute', left:'30vw', top:'0', paddingTop:'0', zIndex:'0', border:'0px solid blue' }} />
</Link>



<div className="" style={{display:'', position:'relative', zindex:'3',   width:'60vw', height:'100%', padding:'4vh 1rem 1rem 1rem', fontSize:'clamp(.7rem, 3vw, 3.2rem)', left:'5vw', lineHeight:'100%',textShadow:'0 2px 7px #000',}}>
  
  <p>You will receive an identity disk.</p>
  
  <p>Everything you do or learn</p>
  
  <p>will be imprinted on this disk.</p>
  <br />
  <p>If you lose your disk or fail to</p>
  
  <p>follow commands, you will be</p>
  
  <p>subject to immediate de-resolution.</p>
  <br />
  <p>Mirroring complete. Disk Activated.</p>
  
  <br />

  {/* <p className="TRON txtshadow tronText actionJackson" style={{fontSize:'60%', textAlign:'', width:'50%',}}>
  <Link className="" style={{cursor:'pointer', margin:'0 auto', padding:'2rem 0', textDecoration:'none', textShadow:'3px 3px 6px rgb(0, 162, 184)'}} to="/#games" title="Proceed to Games Grid">

    Proceed to games.</Link>
    </p> */}

  </div>







  


  <div className="nextbutt" style={{display:'', flexDiection:'column', justifyContent:'center', color:'#ccc', height:'', position:'absolute', left:'5%',}}>
    <button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'', filter:'drop-shadow(2px 2px 2px #000)', height:'', borderRadius:'200px',fontSize:'clamp(14px, 3vw, 4rem)', padding:'5% 0', width:'130%' }}><Link to="/#discgrid" style={{color:'#37f8f8'}}>Proceed To Games</Link></button>
</div>


</div>


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
export default Panel2