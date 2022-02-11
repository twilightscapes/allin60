
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
import SamFlynn from "../../static/assets/sam-flynn.svg"
import CluGuy from "../../static/assets/clu.svg"
import TronGuy from "../../static/assets/tron.svg"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
import QuoraStand from "../../static/assets/quora-ass.svg"
import KevinFlynn from "../../static/assets/kevin-flynn.svg"
// import TronChick from "../../static/assets/tron-chick1.svg"

const CustomBox = styled.div`

`

const Panel1 = () => (
<CustomBox style={{}}>
    
{/* */}
<div id="homestart" style={{display:'',  padding:'0', outline:'0px solid yellow', height:'100vh', width:'100vw', position:'relative', overflow:''}}>

{/* <div style={{position:'absolute', right:'20vh', top:'0', width:'300px', height:'200px', background:'red', color:'#fff'}}>DAMN</div> */}

{/* Panel Video */}
<div className="vidbox" style={{position:'absolute', height:'100vh', width:'100vw', bottom:'0', zIndex:''}}>
<div className="video-background">
<div className="video-foreground">
<ReactPlayer
        style={{opacity:'.4',}}
         className='youtubehide'
         url="https://www.youtube.com/embed/c_V1iD6F1kk"
         width="100%"
         height="100%"
         config={{
          youtube: {
            playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:16, end:27, loop:1  }
           },
         }}
         loop
         playing
         playsinline
//              playIcon={
//                <button aria-label="Click To Play" className="clickplay1" style={{position:'relative', zIndex:'5', top:'0', right:'0', left:'0', border:'0px solid red', width:'100%', height:'100vh', background:'#ccc', color:'#fff', fontSize:'18px', display:'grid', placeContent:'center', padding:'0' }}>


// <div style={{padding:'0 0 0 45vh'}}>
//              Click To Play
//      <ImPlay style={{margin:'0 auto', width:'', fontSize:'60px', border:'0px solid blue'}} />
//              </div>

//              </button>
         
//             }
//                light="../../static/assets/default-og-image.jpg"
         />
</div>
</div>
</div>
{/* Panel Video */}

{/* Panel Content */}
<div className="nextbutt" style={{display:'flex', flexDiection:'column', justifyContent:'center', color:'#ccc', height:'',}}>
          <button className="actionJackson tronText" style={{display:'flex', justifyContent:'center', zIndex:'25', filter:'drop-shadow(2px 2px 2px #000)', height:'', borderRadius:'200px',fontSize:'3vw', padding:'5%', background:'rgba(3, 212, 212, 0.1)' }}><Link to="/#gridintro" style={{color:'#37f8f8', textDecoration:'none',filter:'drop-shadow(2px 2px 2px #fff)',}}><span style={{fontFamily:'TRON',}}>in</span> <span style={{fontSize:'140%'}}>60</span> <span style={{fontFamily:'TRON',}}>seconds</span> <br /><div className="" style={{fontSize:'80%', fontFamily:'inherit',  textDecoration:'underline', color:'#fff'}}>Enter The Grid</div></Link></button>
          </div>

          <h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', zIndex:'2', position:'absolute', top:'0', marginTop:'', width:'100%', padding:'0 30%', opacity:'.6'}}>
        <div className="TRON" style={{fontWeight:'normal', zIndex:'', fontFamily:'TronType'}}>TRON</div>
             {/* <div className="TRON" style={{fposition:'relative',fontWeight:'bold', fontSize:'70%', padding:'0', margin:'6% 0 0 -24%', textAlign:'center'}}>in</div>

        <div className="tronText" style={{position:'relative', fontWeight:'bold', fontSize:'100%', margin:'-24% -40% 0 0', textAlign:'center'}}>60</div>
      
      <div className="TRON" style={{position:'relative', fontSize:'40%', textAlign:'right', margin:'-3% 10% 0 0',}}>seconds</div> */}
      </h1>
          


      <div id="characters " className="" style={{position:'absolute', zIndex:'2', width:'', height:'100%', top:'0', background:'none', filter:'none', boxShadow:'none', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
    
    {/* <div className="frontdrop" style={{background:'rgba(2, 83, 83, 0.219)', backdropFilter:'blur(0px)', filter:'saturate(40%) contrast(200%)'}}></div> */}
    
    {/* <div className="TRON tronText" style={{position:'absolute',  width:'100vw', height:'', right:'', top:'45vh', zIndex:'6', fontSize:'clamp(1.6rem, 6vw, 4rem)', textAlign:'center', justifyContent:'center', lineSpacing:'50px', opacity:'.7'}}>
    
      Characters <div style={{fontSize:'150%', paddingTop:'20px'}}>
        <div style={{fontSize:'40%', margin:'-20px -20px 0 0'}}>of</div> TRON</div>
      </div> */}


      
    
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh', 
     padding:'', display:'flex', justifyContent:'center', border:'0px solid red',}}>
             <Link state={{modal: true}} to="/sam-flynn/">
    <SamFlynn className="character" style={{height:'100vh', width:'90%', margin:'0 0 0 0',}} /></Link>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
     padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
    <Link state={{modal: true}} to="/quorra/">
      <QuoraStand className="character" style={{height:'100%', width:'85%', margin:'0 0 0 10%', right:'', zIndex:'5'}} /></Link>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
     padding:' 0', display:'flex', justifyContent:'center',}}>
<Link state={{modal: true}} to="/kevin-flynn/">
    <KevinFlynn className="character" style={{position:'relative', height:'100%', width:'130%', zIndex:'', margin:'0 0 0 -10%'}} /></Link>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
    display:'flex', flexDiection:'column', justifyContent:'center',
    padding:'5% 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
      <Link state={{modal: true}} to="/tron/">
    <TronGuy className="character" style={{height:'100%', width:'85%', margin:'0 0 0 0', transform: 'scaleX(-1)'}} /></Link>
    </div>
    
    <div srl_exclude="true" id="mylink15" className="donation2" style={{position:'relative', transform:'', maxWidth:'', height:'100vh', 
    // background:'rgba(6, 70, 90, 0.6)', 
    padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
    <Link state={{modal: true}} to="/clu/">
    <CluGuy className="character evil" style={{height:'100%', width:'100%', margin:'0 0 0 -20%',}} />
    </Link>
    </div>
    
    
    </div>



{/* Panel Content */}
</div>

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
export default Panel1