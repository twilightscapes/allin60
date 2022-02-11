
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


const CustomBox = styled.div`

`

const Panel3 = () => (
<CustomBox style={{}}>

{/* GRID INTRO */}
<div id="gridintro" style={{display:'',  padding:'0', outline:'0px solid yellow', height:'100vh', width:'100vw', position:'relative', overflow:''}}>

{/* <div style={{position:'absolute', right:'20vh', top:'0', width:'300px', height:'200px', background:'red', color:'#fff'}}>DAMN</div> */}

{/* Panel Video */}
<div className="vidbox" style={{position:'absolute', height:'100vh', width:'100vw', bottom:'0', zIndex:''}}>
<div className="video-background">
<div className="video-foreground">
<ReactPlayer
         className='youtubehide'
         url="https://www.youtube.com/embed/nJ38P5elTkg"
         width="100%"
         height="100%"
         config={{
           youtube: {
             playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:20, end:120, loop:1  }
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
<div style={{fontSize:'clamp(.7rem, 2.5vw, 2.6rem)', lineHeight:'140%', }}>
<h2 className="tronText TRON" style={{fontSize:'clamp(14px, 3.5vw, 4.6rem)', lineHeight:'150%', margin:'2rem', textAlign:'center'}}>The Grid  <span className="neonText" style={{fontSize:'80%'}}>A digital frontier</span>.</h2>

<div className="tronText" style={{lineHeight:'200%',fontSize:'clamp(1rem, 2.2vw, 3rem)', padding:'0 8%'}}>I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see.</div>
<div style={{display:'grid', placeContent:'', position:'absolute', zIndex:'1', right:'', bottom:'', width:'', margin:'50px 0 0 10vw',}}>

<button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'25', filter:'drop-shadow(2px 2px 2px #000)', height:'', borderRadius:'200px',fontSize:'clamp(14px, 3vw, 4rem)', padding:'3% 5%', width:'150%' }}><Link to="/#proceed" style={{color:'#37f8f8'}}>I GOT IN</Link></button>
</div>
</div>

<LightCycle className="character TronType" style={{maxWidth:'100%', position:'relative', right:'0', bottom:'5%', zIndex:'0' }} />
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
export default Panel3