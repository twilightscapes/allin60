
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
// import SamFlynn from "../../static/assets/sam-flynn.png"
// import CluGuy from "../../static/assets/clu.png"
// import TronGuy from "../../static/assets/tron.png"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
// import QuoraStand from "../../static/assets/quora-ass.png"
// import KevinFlynn from "../../static/assets/kevin-flynn.png"
// import TronChick from "../../static/assets/tron-chick1.svg"


const CustomBox = styled.div`
.frontbg iframe{
  opacity:.4;
}
`

const Panel1 = () => (
<CustomBox style={{}}>

{/* GRID INTRO */}
<div id="" style={{display:'',  padding:'0', outline:'0px solid yellow', height:'100vh', width:'100vw', position:'relative', overflow:'inherit'}}>

{/* <div style={{position:'absolute', right:'20vh', top:'0', width:'300px', height:'200px', background:'red', color:'#fff'}}>DAMN</div> */}

{/* Panel Video */}
<div className="vidbox" style={{position:'absolute', height:'100vh', width:'100vw', bottom:'0', zIndex:''}}>
<div className="video-background">
<div className="video-foreground">
{/* c_V1iD6F1kk */}
{/* nJ38P5elTkg */}

<ReactPlayer
         className='youtubehide frontbg'
         url="https://www.youtube.com/embed/c_V1iD6F1kk"
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
             playIcon={
               <button aria-label="Click To Play" className="clickplay1" style={{position:'relative', zIndex:'5', bottom:'0', right:'', left:'', border:'0px solid red', width:'100vw', height:'100vh', background:'transparent', color:'#fff', fontSize:'18px', display:'grid', placeContent:'center', padding:'0' }}>


{/* <div style={{textAlign:'center', position:'', top:'0', zIndex:'40'}}>
     <ImPlay style={{padding:'0 0 0 0', display:'flex', justifyContent:'center', fontSize:'60px', border:'0px solid blue',}} />
</div>     */}

             </button>
         
            }
               light="assets/Front-Loader.svg"
         />
</div>
</div>
</div>
{/* Panel Video */}

{/* Panel Content */}









<h1 className="tronText" style={{display:'grid', placeContent:'center', textAlign:'center', fontSize:'14vw', position:'absolute', top:'0', marginTop:'', width:'100%', padding:'0 30%', opacity:'1', zIndex:'-1'}}>
        <div className="TRON" style={{fontWeight:'normal', fontFamily:'TronType'}}>TRON</div>
      </h1>


 


 <div id="characters" className="characters" style={{position:'relative', zIndex:'0', width:'', height:'', top:'', background:'none', filter:'none', boxShadow:'none', padding:'10vh 0 0 0', zIndex:''}}>
    
<div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', zIndex:'-1' }}>

    <div id="" className="" style={{position:'relative', display:'flex', justifyContent:'center', border:'0px solid red',}}>
             <Link state={{modal: true}} to="/sam-flynn/" title="Sam Flynn"  aria-label="Sam Flynn">
    {/* <SamFlynn className="character" style={{height:'100vh', width:'90%', margin:'0 0 0 0',}} /> */}
    <StaticImage className="character"
style={{height:'80vh', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/sam-flynn.png" />
    </Link>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
     padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
    <Link state={{modal: true}} to="/quorra/" title="Quorra" aria-label="Quorra">
      {/* <QuoraStand className="character" style={{height:'100%', width:'85%', margin:'0 0 0 10%', right:'', zIndex:''}} /> */}
      <StaticImage className="character"
style={{height:'80vh', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/quora-ass.png" />
      </Link>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
     padding:' 0', display:'flex', justifyContent:'center',}}>
<Link state={{modal: true}} to="/kevin-flynn/" title="Kevin Flynn" aria-label="Kevin Flynn">
    {/* <KevinFlynn className="character" style={{position:'relative', height:'100%', width:'130%', zIndex:'', margin:'0 0 0 -16%'}} /> */}
    <StaticImage className="character"
style={{height:'80vh', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/kevin-flynn.png" />
    </Link>
    </div>
    
    <div id="" className="" style={{position:'relative', transform:'', maxWidth:'', height:'100vh',
    display:'flex', flexDiection:'column', justifyContent:'center',
    padding:'0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
      <Link state={{modal: true}} to="/tron/" title="Tron" aria-label="Tron">
    {/* <TronGuy className="character" style={{height:'100%', width:'100%', margin:'0 0 0 0', transform: 'scaleX(-1)'}} /> */}
    <StaticImage className="character"
style={{height:'80vh', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/tron.png" />
    </Link>
    </div>
    
    <div srl_exclude="true" id="mylink15" className="donation2" style={{position:'relative', transform:'', maxWidth:'', height:'100vh', 
    // background:'rgba(6, 70, 90, 0.6)', 
    padding:' 0', display:'flex', justifyContent:'center', border:'0px solid red',}}>
    <Link state={{modal: true}} to="/clu/" title="Clu" aria-label="Clu">
    {/* <CluGuy className="character evil" style={{height:'100%', width:'100%', margin:'0 0 0 -20%',}} /> */}
    <StaticImage className="character"
style={{height:'80vh', width:'', margin:'0 0 0 0',}}
alt="Todd Lambert Web development for photographers" src="../../static/assets/clu.png" />
    </Link>
    </div>
    

    {/* <div className="frontbutt" style={{ zIndex:'2', display:'flex', flexDiection:'column', justifyContent:'center', color:'#ccc', height:'300px', marginTop:'45vh', position:'absolute', border:'1px solid red',}}>
        <button className="actionJackson tronText" style={{display:'flex', justifyContent:'center', filter:'drop-shadow(2px 2px 2px #000)', height:'auto', borderRadius:'',fontSize:'3vw', padding:'', background:'rgba(3, 212, 212, 0.1)', zIndex:'4' }}>
             <Link to="/#gridintro" style={{color:'#37f8f8', textDecoration:'none',filter:'drop-shadow(2px 2px 2px #fff)',}}><span style={{fontFamily:'TRON',}}>in</span><br /><span style={{fontSize:'140%'}}>60</span> <span style={{fontFamily:'TRON',}}>seconds</span> <br /><div className="" style={{fontSize:'80%', fontFamily:'inherit',  textDecoration:'underline', color:'#fff'}}>Enter The Grid</div></Link>
        </button>
    </div> */}
</div>

    </div> 
    

       
    





    {/* <div style={{fontSize:'clamp(.7rem, 2.5vw, 2.6rem)', lineHeight:'140%', paddingTop:'1rem' }}>

<h2 className="tronText TRON" style={{fontSize:'clamp(14px, 3.5vw, 4.6rem)', lineHeight:'150%', margin:'0 0 2rem 0', textAlign:'center'}}>The Grid  <span className="neonText" style={{fontSize:'80%'}}>A digital frontier</span>.</h2>

<div className="tronText" style={{lineHeight:'200%',fontSize:'clamp(1rem, 2.2vw, 3rem)', padding:'0 8%'}}>I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see.</div>
<div style={{display:'grid', placeContent:'', position:'absolute', zIndex:'1', right:'', bottom:'', width:'', margin:'50px 0 0 10vw',}}>

  

<button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'', filter:'drop-shadow(2px 2px 2px #000)', height:'', borderRadius:'200px',fontSize:'clamp(14px, 3vw, 4rem)', padding:'3% 5%', width:'150%' }}><Link to="/#proceed" style={{color:'#37f8f8'}}>I GOT IN</Link></button>
</div>


<LightCycle className="character TronType" style={{maxWidth:'100%', position:'relative', right:'0', bottom:'8%', zIndex:'0' }} />

</div>
 */}

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
export default Panel1