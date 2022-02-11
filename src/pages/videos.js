import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
// import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'
// import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import styled from "styled-components"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import TwilightLogo from "../../static/assets/logo.svg"
// import GalleryMenu from "../components/galleryMenu"
import { StaticImage } from "gatsby-plugin-image"
// import ShareSocial from '../../components/share' 
// import Newsignup from "../../components/newssign"
import ReactPlayer from 'react-player/lazy'
import LightCycle from "../../static/assets/light-cycle.svg"
import { ImPlay } from "react-icons/im"

const CustomBox = styled.div`

.horizontal-holder{
  position:relative;
  height:100vh;
  overflow:hidden;
}

.horizontal-scroll{
  position: relative;
  display: block;
  width: calc(100% + 1px);
  max-height: 100vw;
  margin:0 auto 0 auto;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
  transform: rotate(-90deg) translateY(-100%);
  transform-origin: right top;
  transition: transform .2s;
  scroll-padding: 0 5%;
  overscroll-behavior: contain;
  scroll-snap-type: y mandatory;
}

.horizontal-scroll > * {
  display: block;
  padding: 0;
  transform: rotate(90deg);
  transform-origin: right top;
  scroll-snap-align: center;
  overscroll-behavior: contain;
}

.panels > * {
  width: auto;
  text-align:center;
  height: 80%;
  margin: 0 0 100% 0;
}

.horizontal-scroll  img{
  cursor:zoom-in !important; 
  object-fit: contain !important;
  max-height: 100vh ;
 }


@media (max-width: 48rem) {
  .panels > * {
  height: 20%;
  margin: 0 0 100% 0;
  }

   .horizontal-scroll  img, .horizontal-holder{
    max-height: 100vh !important;
  }

  .horizontal-scroll{
    width: calc(150% + 1px);
    transform: rotate(-90deg) translateY(-150%);
  }

  

  .video-background {
    /* background: #000; */
    /* position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 0;  */
    position: relative;
      padding-bottom: 56.25%; 
      padding-top: 25px; 
      width: 300%; 
      left: -200%;
      margin-top:-25vh; 
      
  }


}

 .introspacer{
  width:100%;
  height:100vh;
}


.youtubehide iframe{
  z-index:-1 !important;
  position:relative !important;
  top:-26px;
}


`




const VideosPage = ({data}) => (
 
  <CustomBox style={{}}>
{/* <Layout className="thanks-page"> */}

<Seo
          title={`Todd Lambert's Favorite Photography`}
          description={`Twilightscapes Favorite Night Photography`}
          image={'https://twilightscapes.com/images/night221.jpg'}
        />
  {/* <GalleryMenu /> */}




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

      


      <div style={{display:'',  padding:'0', outline:'0px solid yellow', height:'100vh', width:'100vw', position:'relative', overflow:'hidden'}}>


      








    {/* <div style={{position:'absolute', right:'20vh', top:'0', width:'300px', height:'200px', background:'red', color:'#fff'}}>DAMN</div> */}


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
             playIcon={
               <button aria-label="Click To Play" className="clickplay" style={{position:'relative', zIndex:'15', top:'0', border:'0px solid red', width:'', height:'', background:'#111', color:'#fff', fontSize:'18px', }}>







           <div className="" style={{ textAlign:'center', border:'1px solid red', background:'red', width:'100vw', height:'110vh', top:'-10%'}}>
             <div style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem', margin:'200px 0 0 0'}}>Click To Play</div>
     <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
             </div>



    


             </button>
             
            
            
            
            
            
            }
               light="../../static/assets/default-og-image.jpg"

             />



    
   </div>
</div>
</div>




<div style={{fontSize:'clamp(.7rem, 2.5vw, 2.6rem)', lineHeight:'140%', }}>
<h2 className="tronText TRON" style={{fontSize:'clamp(14px, 3.5vw, 4.6rem)', lineHeight:'150%', margin:'2rem', textAlign:'center'}}>The Grid  <span className="neonText" style={{fontSize:'80%'}}>A digital frontier</span>.</h2>


<div className="tronText" style={{lineHeight:'200%',fontSize:'clamp(1.2rem, 2.2vw, 3rem)', padding:'0 8%'}}>I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see.</div>
<div style={{display:'grid', placeContent:'center', position:'absolute', zIndex:'1', right:'', bottom:'', width:'100%', margin:'50px 0 0 0',}}>
         <button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'25', filter:'drop-shadow(2px 2px 2px #000)', height:'', borderRadius:'200px',fontSize:'clamp(14px, 3vw, 4rem)', padding:'3% 5%', width:'150%' }}><Link to="/#proceed" style={{color:'#37f8f8'}}>I GOT IN</Link></button>
         </div>
</div>

<LightCycle className="character TronType" style={{maxWidth:'90%', position:'relative', right:'0', bottom:'0', zIndex:'0' }} />

    </div>






{/*  */}
{/*  */}

    <div style={{display:'',  padding:'0', outline:'0px solid yellow', height:'100vh', width:'100vw', position:'relative', overflow:'hidden'}}>



<div style={{fontSize:'clamp(.7rem, 2.5vw, 2.6rem)', lineHeight:'140%', }}>
<h2 className="tronText TRON" style={{fontSize:'clamp(14px, 3.5vw, 4.6rem)', lineHeight:'150%', margin:'2rem', textAlign:'center'}}>The Grid  <span className="neonText" style={{fontSize:'80%'}}>A digital frontier</span>.</h2>


<div className="tronText" style={{lineHeight:'200%',fontSize:'clamp(1.3rem, 2.5vw, 3.6rem)', padding:'0 8%'}}>I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see.</div>

</div>

<div className="vidbox" style={{position:'absolute', height:'100vh', width:'100vw', bottom:'0', zIndex:'-1'}}>
<div className="video-background">
<div className="video-foreground">

<ReactPlayer
       className='youtubehide'
       url="https://www.youtube.com/embed/nJ38P5elTkg"
       width="100vw"
       height="100vh"
       config={{
         youtube: {
           playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:20, end:120, loop:1  }
         },
       }}
       loop
       playing
       playsinline
//         playIcon={
//           <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>

//       <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
//         <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
// <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
//         </div>
//         </button>}
//           light="../../static/assets/default-og-image.jpg"

       />
</div>
</div>
</div>

<div style={{display:'flex', flexDiection:'column', justifyContent:'center', color:'#ccc', height:'100%', position:'absolute', right:'20vw', bottom:'0'}}>
   <button className="actionJackson TRON tronText" style={{display:'flex', justifyContent:'center', zIndex:'25', filter:'drop-shadow(2px 2px 2px #000)', height:'', borderRadius:'200px',fontSize:'3vw', padding:'35px 50px', }}><Link to="/#proceed" style={{color:'#37f8f8'}}>I GOT IN</Link></button>
   </div>

<LightCycle className="character TronType" style={{maxWidth:'90%', position:'relative', right:'0', bottom:'1vh', zIndex:'1' }} />

<div style={{position:'absolute', right:'20vh', bottom:'0', width:'300px', height:'200px', background:'red', color:'#fff'}}>DAMN</div>
</div>







    



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


      
   {/* </Layout> */}
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

export const VidindexQuery = graphql`
query fav1Photos {
  allFile(
    filter: {relativeDirectory: {eq: "img"}, relativePath: {}}
    sort: {order: ASC, fields: name}
  ) {
    edges {
      node {
        name
        id
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
}
`
