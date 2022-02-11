import React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
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

const VideosPage = () => (
  // const NamePage = ({data}) => (
 
  <CustomBox style={{}}>
<Layout className="-page">

<Seo
          title={`Todd Lambert's Favorite Photography`}
          description={`Twilightscapes Favorite Night Photography`}
          image={'https://twilightscapes.com/images/night221.jpg'}
        />




  <div className="horizontal-holder">
  {/* <TwilightLogo className="bglogo" /> */}
{/* <SimpleReactLightbox>
      <SRLWrapper options={options} className=""> */}
 {/* </SRLWrapper></SimpleReactLightbox> */}
<div className="RArrow">
         {/* <span></span> */}
        </div>



      <div className="horizontal-scroll panels" style={{}}>
      <div className="" style={{height:'1px'}}></div>

{/* GRID INTRO */}
  <div id="gridintro" style={{display:'',  padding:'0', outline:'0px solid yellow', height:'100vh', width:'100vw', position:'relative', overflow:'hidden'}}>

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
//                light="../../assets/default-og-image.jpg"
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


    </div>
   
        </div>


      
   </Layout>
   </CustomBox>
)

const options = {
  settings: {
    autoplaySpeed: 4000,
    boxShadow: '0px 0px 20px #000',
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: true,
    hideControlsAfter: false,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'linear',
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    slideAnimationType: 'slide',
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: 'linear',
    usingPreact: false
  },
  buttons: {
    backgroundColor: '#FA02B7',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    size: '40px'
  },
  caption: {
captionAlignment: 'start',
captionColor: '#FFFFFF',
captionContainerPadding: '20px 12% 30px 12%',
captionFontFamily: 'inherit',
captionFontSize: 'inherit',
captionFontStyle: 'inherit',
captionFontWeight: 'inherit',
captionTextTransform: 'inherit',
showCaption: false
  },
  thumbnails: {
    showThumbnails: false,
    thumbnailsAlignment: 'center',
    thumbnailsContainerBackgroundColor: '#111',
    thumbnailsContainerPadding: '0',
    thumbnailsGap: '0 2px',
    thumbnailsIconColor: '#ffffff',
    thumbnailsOpacity: 0.4,
    thumbnailsPosition: 'bottom',
    thumbnailsSize: ['100px', '80px']
  },
  progressBar: {
    backgroundColor: '#000',
    fillColor: '#333',
    height: '3px',
    showProgressBar: true
  },
};
export default VideosPage

// export const VidindexQuery = graphql`
// query fav1Photos {
//   allFile(
//     filter: {relativeDirectory: {eq: "img"}, relativePath: {}}
//     sort: {order: ASC, fields: name}
//   ) {
//     edges {
//       node {
//         name
//         id
//         relativePath
//         childImageSharp {
//           gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
//         }
//       }
//     }
//   }
// }
// `
