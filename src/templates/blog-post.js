/** @jsx jsx */
// import React from "react"

import React, { useState, useRef } from "react";

import Controls from "../components/Controls";


import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
// import CommentBox from "../components/commentbox"
// import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import Countdown from 'react-countdown'
// import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
// import { AiOutlineAudioMuted } from "react-icons/ai"
import { Footer } from "../components/footer"
// import { SRLWrapper } from "simple-react-lightbox"
// import {CopyToClipboard} from 'react-copy-to-clipboard'
import ReactPlayer from 'react-player/lazy'

// import YouTubed from "../pages/youtube"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
// import ShareSocial from '../components/share' 
import GoBack from "../components/goBack"
import { ImPlay } from "react-icons/im"
// import TimeAgo from 'react-timeago'
import styled from "styled-components"
const CustomBox = styled.div`

.MuiSlider-root {
  color:#ff00000 !important;
}

.wrap-element {
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
  aspect-ratio: 16 / 9;
  z-index:0;
  max-width:100%;
  max-height:75vh !important;
}
.wrap-element iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 300%; 
  left: -100%; 
  border: 0;
  overflow:hidden;
}


@media (max-width: 48em) {
  .wrap-element {
    padding-bottom: 0;
    height:300px;
    overflow:visible;
    border:0px solid red;
  }
}

@media (min-width: 1100px) {
.pagination{display:; position:relative; top:-175px; z-index:;}
}

@media (min-width: 1100px) {
  .pagination{display:; position:relative; top:-175px; z-index:;}
  }


`
const Pagination = props => (
  <div className="pagination -post">
    <ul className="" style={{display:'flex',}}>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        <li>
          <Link  to= {props.previous.frontmatter.slug + "/"} rel="prev">
            <p
              style={{
                color: "inherit",
              }}
            >
              <span className="icon -left">
                <RiArrowLeftLine />
              </span>{" "}
              Previous
            </p>
            <span className="page-title">
              {props.previous.frontmatter.title}
            </span>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li>
          <Link  to={props.next.frontmatter.slug + "/"} rel="next">
            <p
              style={{
                color: "inherit",
              }}
            >
              Next{" "}
              <span className="icon -right">
                <RiArrowRightLine />
              </span>
            </p>
            <span className="page-title">{props.next.frontmatter.title}</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)







const Post = ({ data, pageContext }) => {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark


  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  
    const UnderlayImage = frontmatter.underlayImage
    ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    : ""


    // const NftLink = frontmatter.nftlink
    // const NftRedeem = frontmatter.nftredeem
    // const NftDrop = frontmatter.nftdrop



  const Svg = frontmatter.svgImage
  // const svgZindex = frontmatter.svgzindex

// function AddSvg(){
  
//   return (
//     <object className="" id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'', top:'', left:'0', right:'0', bottom:'0', overflow:'', border:'0px solid red', zIndex:'', width:'100vw', height:'', background:'transparent', objectFit:'contain'   }} alt="animated content" title="animated content" >You need a new browser</object>
//   )
// }


// const IsNft = frontmatter.isnftforsale
const ShowOriginal = frontmatter.youtubeshoworiginal
// const ShareThis = frontmatter.shareable
// const Comments = frontmatter.comments

const YouTubeStart = frontmatter.youtubestart
const YouTubeEnd = frontmatter.youtubeend
const YouTubeMute = frontmatter.youtubemute
const YouTubeControls = frontmatter.youtubecontrols
const YouTubeAutostart = frontmatter.youtubeautostart

// const Suggestion1 = frontmatter.youtubersuggestion1
// const Suggestion2 = frontmatter.youtubersuggestion2
// const Suggestion3 = frontmatter.youtubersuggestion3





function Iframer2() {
  const iframeUrl2 = "https://www.youtube.com/embed/" + frontmatter.youtuber
  return (


<ReactPlayer
        className='react-player '
        url={iframeUrl2}
        width="100%"
        height="100%"
        style={{zIndex:''}}
        playing
        playsinline
        config={{
          youtube: {
            playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:0  }
          },
        }}
        playIcon={
          <button aria-label="Click To Play" className="clickplay" style={{position:'relative', zIndex:'', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
            
    
    
    
      <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
        <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
    
        <span className="headline" style={{fontWeight:'bold', padding:'0 0 0 0',}}>Click To Play</span>
        
        </div>
        </button>}
    
    
    
          light="../assets/transparent.png"
        /> 




  )
}



const svgUrl = frontmatter.svgImage.publicURL
  
    const iframeUrl = "https://www.youtube.com/embed/" + frontmatter.youtuber


  // const YouTube2 = frontmatter.youtuber2
  // const AudioStart = frontmatter.audiostart
  // const AudioEnd = frontmatter.audioend

  

  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }



  const { siteUrl } = useSiteMetadata()
  const { iconimage } = useSiteMetadata()


  const [state, setState] = useState({
    playing: true,
    controls: true,
    light: true,
    muted: false,
    loop: true,
  });

  // const playerRef = useRef(null);
  const controlsRef = useRef(null);

  const {
    playing,
    controls,
    light,
    muted,
    loop,
    playbackRate,
    pip,
    played,
    seeking,
    volume,
  } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  

  return (
    
    <Layout className="page">
<CustomBox style={{}}>
<Helmet>
  <body className="blogpost" style={{background:''}} />
  {/* <script src="https://unpkg.com/embeddable-nfts/dist/nft-card.min.js"></script> */}
</Helmet>

      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        
        image={ siteUrl + getSrc(frontmatter.featuredImage) }

        article={true}
      />



{/* <Seo
          title={`Welcome to the GRID`}
          description={`I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world I thought I'd never see.`}
          image={'https://allin60.com/tronin60.jpg'}
        /> */}


{/* <div className='player-wrapper intro' style={{position:'relative', bottom:'0', zIndex:'', height:'100vh', maxHeight:'', overflow:'', filter: 'drop-shadow(0 0 20px #000)',  }}> */}


<div className="contact" style={{position:'fixed', bottom:'10px', zIndex:'1',  left:'0', right:'0', display:'flex', justifyContent:'center', width:'200px', margin:'0 auto'}}>
  <Link state={{modal: true}}  to="/contact/" className="navbar-item  button fire" style={{margin:'1rem 2rem 0 2rem', textDecoration:'none'}}>Contact Me</Link>
</div>


<div className="wrap-element">

{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{ width:'100vw', position:'absolute', top:'0', zIndex:'-2',  border:'0px solid red !important', paddingBottom:'',}}
            />

          ) : (
          ""
          )}
    

{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100%', maxHeight:'100%', overflow:'hidden', position:'absolute', top:'0', zIndex:'1',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}






            <object className="" id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', top:'0', left:'', right:'', bottom:'', overflow:'', border:'0px solid red', zIndex:'1', width:'100vw', height:'100%', background:'transparent', objectFit:'contain'   }} alt="animated content" title="animated content" >You need a new browser</object>
    

    


{/* if (!Svg) {
    
  }
  else{
    <AddSvg />
  } */}






{/* {Suggestion1 ? (
            <div style={{position:'absolute', top:'0', zIndex:'1',}}>
            <YouTubed />
            </div>
       
          ) : (
            ""
          )} */}



{/* <div
          onMouseMove={handleMouseMove}
          onMouseLeave={hanldeMouseLeave}
          ref={playerContainerRef}
          className={classes.playerWrapper}
        > */}
          <ReactPlayer
            // ref={playerRef}
            width="100%"
            height="100%"
            url={iframeUrl}
            // url="https://youtu.be/lZzai6at_xA"
            playing={playing}
            controls={true}
            light={false}
            loop={loop}
            muted={muted}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
              },
            }}

          playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'', zIndex:'5', bottom:'0', border:'0px solid red', width:'100vw', height:'100vh', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
  
          <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
            
  
            <div style={{position:'relative', maxWidth:'100vw', margin:'10% 0', zIndex:'', display:'flex', justifyContent:'center', background:'transparent !important',}}>
    <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
  </div>
        
            <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
            </div>
            </button>}
         
          />



<Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          />
        </div>



      {/* </div> */}









{/* {Suggestion1 ? (
            <ShowSuggestion style={{position:'relative', top:'', zIndex:'10',}} />
       
          ) : (
            ""
          )}

{ !YouTube2 ? (
            ""
       
          ) : (
            <Iframer3 />
          )} */}


<div style={{padding:'0 5vw', color:'inherit !important'}}>
      {(previous || next) && <Pagination {...props} />}
      </div>


<article className="blog-post">
        <header style={{height:'60vh', display:'grid', placeContent:'center'}}>
          <section className="article-header" style={{textAlign:'center', margin:'0', height:'auto', color:''}}>
            <h1 className="tronText" style={{fontSize:'7vw'}}>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
            {/* <TimeAgo date={frontmatter.date} style={{color:'#fff !important'}} /> */}
          </section>
        </header>




<br />
      <GoBack />
 <br />








<div style={{padding:'0 0', borderTop:'0px solid', margin:'0 0', textAlign:'center', fontSize:'1.5rem', minWidth:'50%', width:'100%', maxWidth:'', border:'0px solid yellow'}}>


      <div
        className="blog-post-content" style={{ fontSize:'1.1rem', textAlign:'left', width:'100%', maxWidth:'', padding:'10vh 0', margin:'0 auto', color:'inherit !important'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />    
  
 
</div>




        
        


      </article>
  


      <div style={{padding:'0 5vw', color:'inherit !important'}}>
      {(previous || next) && <Pagination {...props} />}
      </div>




      {ShowOriginal ? (
          <div style={{position:'relative', width:'100%', maxWidth:'800px', margin:'0 auto', textAlign:'center', display:'flex', flexDirection:'column', fontSize:'100%', borderRadius:'12px' }}>Click to view original video
<div style={{maxWidth:'90vw', width:'100%', height:'440px', maxHeight:'40vh', padding:'0', position:'relative', bottom:'0', textAlign:'center', border:'0px solid blue', margin:'0 auto', borderRadius:'12px'}}>
  
                    <Iframer2 />
                    
       </div></div>
       
          ) : (
            ""
          )}





      






   




       








      

      

   
   <br />
   <GoBack />
   <br />
   <br />
   </CustomBox>
   <Footer />
    </Layout>




  )
}



export default Post

export const pageQuery = graphql`
  query BlogPostQueryBlogPostQuery($id: String!) {
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        youtuber
        youtuber2
        youtubeshoworiginal
        youtubersuggestion1
        youtubersuggestion2
        youtubersuggestion3
        youtubestart
        youtubeend
        audiostart
        audioend
        youtubemute
        youtubecontrols
        youtubeautostart
        comments
        shareable
        isnftforsale
        nftdrop
        svgzindex
        nftlink
        nftredeem
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        svgImage{
          publicURL
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`