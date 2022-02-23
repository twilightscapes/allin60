/** @jsx jsx */
// import React from "react"

import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from 'react-player/lazy'
import Controls from "../components/Controls";
import screenful from "screenfull";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { jsx } from "theme-ui"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { GatsbyImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import CommentBox from "../components/commentbox"
// import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Countdown from 'react-countdown'
import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5"
import { AiOutlineAudioMuted } from "react-icons/ai"
import { Footer } from "../components/footer"
// import { SRLWrapper } from "simple-react-lightbox"
import {CopyToClipboard} from 'react-copy-to-clipboard'
// import ReactPlayer from 'react-player/lazy'
import YouTubed from "../pages/youtube"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import ShareSocial from '../components/share' 
import GoBack from "../components/goBack"
import { ImPlay } from "react-icons/im"
import TimeAgo from 'react-timeago'
import styled from "styled-components"
// import InnerImageZoom from 'react-inner-image-zoom'
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
const CustomBox = styled.div`
@media (max-width: 48rem) {
  .home-posts{flex-direction:column !important; width:90% !important; margin:0 auto !important;}
}
`


const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    width: "100%",
    height:'100%',
    position: "absolute",
    top:'0',
    border:'0px solid yellow',
    "&:hover": {
      "& $controlsWrapper": {
        visibility: "visible",
      },
    },
  },

  controlsWrapper: {
    visibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topControls: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(2),
  },
  middleControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomWrapper: {
    display: "flex",
    flexDirection: "column",

    // background: "rgba(0,0,0,0.6)",
    // height: 60,
    padding: theme.spacing(2),
  },

  bottomControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // height:40,
  },

  button: {
    margin: theme.spacing(1),
  },
  controlIcons: {
    color: "#777",

    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },

  bottomIcons: {
    color: "#999",
    "&:hover": {
      color: "#fff",
    },
  },

  volumeSlider: {
    width: 100,
  },
}));

const PrettoSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;


// const options = {
//   settings: {
//     autoplaySpeed: 3000,
//     // boxShadow: '0px 0px 20px #fff',
//     disableKeyboardControls: false,
//     disablePanzoom: false,
//     disableWheelControls: false,
//     hideControlsAfter: false,
//     lightboxTransitionSpeed: 0.3,
//     lightboxTransitionTimingFunction: 'linear',
//     // overlayColor: 'rgba(185, 7, 230, 0.5)',
//     slideAnimationType: 'slide',
//     slideSpringValues: [300, 50],
//     slideTransitionSpeed: 0.6,
//     slideTransitionTimingFunction: 'linear',
//     usingPreact: false
//   },
//   buttons: {
//     backgroundColor: 'rgba(30,30,36,0.8)',
//     iconColor: 'rgba(255, 255, 255, 0.8)',
//     iconPadding: '10px',
//     showAutoplayButton: true,
//     showCloseButton: true,
//     showDownloadButton: true,
//     showFullscreenButton: true,
//     showNextButton: true,
//     showPrevButton: true,
//     showThumbnailsButton: true,
//     size: '40px'
//   },
//   caption: {
// captionAlignment: 'start',
// captionColor: '#FFFFFF',
// captionContainerPadding: '20px 12% 30px 12%',
// captionFontFamily: 'inherit',
// captionFontSize: 'inherit',
// captionFontStyle: 'inherit',
// captionFontWeight: 'inherit',
// captionTextTransform: 'inherit',
// showCaption: true
//   },
//   thumbnails: {
//     showThumbnails: true,
//     thumbnailsAlignment: 'center',
//     thumbnailsContainerBackgroundColor: 'transparent',
//     thumbnailsContainerPadding: '0',
//     thumbnailsGap: '0 1px',
//     thumbnailsIconColor: '#ffffff',
//     thumbnailsOpacity: 0.4,
//     thumbnailsPosition: 'bottom',
//     thumbnailsSize: ['100px', '80px']
//   },
//   progressBar: {
//     backgroundColor: '#f2f2f2',
//     fillColor: '#000000',
//     height: '3px',
//     showProgressBar: true
//   },
// };

const Pagination = props => (
  <div className="pagination -post">
    <ul>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        <li>
          <Link to= {props.previous.frontmatter.slug + "/"} rel="prev">
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
          <Link to={props.next.frontmatter.slug + "/"} rel="next">
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


    const NftLink = frontmatter.nftlink
    const NftRedeem = frontmatter.nftredeem
    const NftDrop = frontmatter.nftdrop



  const Svg = frontmatter.svgImage
  // const svgZindex = frontmatter.svgzindex
  if (!Svg) {
    
  }
  else{
    <AddSvg />
  }
function AddSvg(){
  const svgUrl = frontmatter.svgImage.publicURL



  return (
    <object className="" id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'fixed', top:'0', left:'0', right:'0', bottom:'0', overflow:'', border:'0px solid red', zIndex:'', width:'100vw', height:'100%', background:'transparent', objectFit:'contain'   }} alt="animated content" title="animated content" >You need a new browser</object>
  )
}


const IsNft = frontmatter.isnftforsale
const ShowOriginal = frontmatter.youtubeshoworiginal
const ShareThis = frontmatter.shareable
const Comments = frontmatter.comments

const YouTubeStart = frontmatter.youtubestart
const YouTubeEnd = frontmatter.youtubeend
const YouTubeMute = frontmatter.youtubemute
const YouTubeControls = frontmatter.youtubecontrols
const YouTubeAutostart = frontmatter.youtubeautostart

const Suggestion1 = frontmatter.youtubersuggestion1
const Suggestion2 = frontmatter.youtubersuggestion2
const Suggestion3 = frontmatter.youtubersuggestion3


if (Suggestion1) {
  <ShowSuggestion />
}
else{

  
}

function ShowSuggestion() {

  return (
<div style={{}}>
  

  
<div style={{width:'90%', maxWidth:'400px', margin:'85px auto 0 auto', fontSize:'90%', padding:'5px 0 ', border:'4px dotted', borderRadius:'12px', textAlign:'center', position:'relative', }}>
<IoArrowRedoSharp style={{position:'absolute', top:'0', left:'0', fontSize:'60px', transform: 'rotate(-45deg)', }} />
<IoArrowUndoSharp style={{position:'absolute', top:'0', right:'0', fontSize:'60px', transform: 'rotate(45deg)', }} />
  
  
  <span style={{fontSize:'120%', fontWeight:'bold', textTransform:'uppercase'}}>This is interactive!</span> 
<br />

We recommend these alternatives:
<br /><br />
Click to Copy:<br />
<CopyToClipboard text={Suggestion1}>
  <button>{Suggestion1} </button>
</CopyToClipboard><br />


  <CopyToClipboard text={Suggestion2}>
  <button>{Suggestion2} </button>
</CopyToClipboard><br />

<CopyToClipboard text={Suggestion3}>
  <button>{Suggestion3} </button>
</CopyToClipboard><br />

<br />
Add your own in the comments below!

</div>

<span style={{fontSize:'150%'}}></span>
<div className="mobilespace" style={{ border:'0px solid red'}}></div>
</div>
  )
}

const YoutuberSuggestion1 = frontmatter.youtubersuggestion1
// const YoutuberSuggestion2 = frontmatter.youtubersuggestion2
// const YoutuberSuggestion3 = frontmatter.youtubersuggestion3
const iframeUrl = "https://www.youtube.com/embed/" + frontmatter.youtuber + ""
  const YouTube = frontmatter.youtuber



  if (!YoutuberSuggestion1) {
    <IframeSuggestions />
  }
  else{
  
    
  }





  function IframeSuggestions() {
    
    return (
      <div>
              <ReactPlayer
              className='react-player'
              url={iframeUrl}
              // url={[
              //   iframeUrl,
              //   YoutuberSuggestion1,
              //   YoutuberSuggestion2,
              //   YoutuberSuggestion3
              // ]}
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { showinfo:0, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
                },
              }}
              loop
              playing
              playsinline
              playIcon={
                <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', bottom:'0', border:'2px solid red', width:'100vw', height:'100vh', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'columh', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
    
            <div className="" style={{ textAlign:'center', animation:'fadeIn 3s'}}>
              
    
              <div style={{position:'relative', maxWidth:'100vw', margin:'10% 0', zIndex:'', display:'flex', justifyContent:'center', background:'transparent !important',}}>
      <img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
    </div>
          
              <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
      <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
              </div>
              </button>}
                light="../assets/transparent.png"
              />

              
</div>

    )

  }

  function Iframer() {
    const iframeUrl = "https://www.youtube.com/embed/" + frontmatter.youtuber

    return (


<>
      


      


<div
          onMouseMove={handleMouseMove}
          onMouseLeave={hanldeMouseLeave}
          ref={playerContainerRef}
          className={classes.playerWrapper}
          style={{position:'absolute', zIndex:'1', width:'100vw', height:'100%', display:'block'}}
        >
<Controls
            ref={controlsRef}
            onSeek={handleSeekChange}
            onSeekMouseDown={handleSeekMouseDown}
            onSeekMouseUp={handleSeekMouseUp}
            onDuration={handleDuration}
            onRewind={handleRewind}
            onPlayPause={handlePlayPause}
            onFastForward={handleFastForward}
            playing={playing}
            played={played}
            elapsedTime={elapsedTime}
            totalDuration={totalDuration}
            onMute={hanldeMute}
            muted={muted}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekDown={handleVolumeSeekDown}
            onChangeDispayFormat={handleDisplayFormat}
            playbackRate={playbackRate}
            onPlaybackRateChange={handlePlaybackRate}
            onToggleFullScreen={toggleFullScreen}
            volume={volume}
            onBookmark={addBookmark}
          />

          </div>



        <ReactPlayer
          className='react-player youtubehide'
          url={iframeUrl}
          width='100%'
          height='100%'
          playing={playing}
          muted={muted}
          loop={true}
          config={{
          youtube: {
            playerVars: {
              showinfo:0,
              // autoplay:YouTubeAutostart,
              controls:0,
              // mute:1, 
              start:YouTubeStart,
              end:YouTubeEnd,
              loop:1,  
              rel:0,
            }
           },
          }}
        />

        
        
        


</>




//  <div>
//               <ReactPlayer
//               className='react-player66'
//               url={iframeUrl}
//               // url={[
//               //   iframeUrl,
//               //   Suggestion1,
//               //   Suggestion2,
//               //   Suggestion3
//               // ]}
//               width="100%"
//               height="100%"
//               config={{
//                 youtube: {
//                   playerVars: { showinfo:0, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
//                 },
//               }}
//               loop
//               playing
//               playsinline
//     //           playIcon={
//     //             <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'#111', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>
    
//     //         <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'', margin:'0 auto'}}>
              
    
//     //           <div style={{position:'relative', maxWidth:'', margin:'0 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>

//     //           <object className="" id="vidsock-logo" data={iconimage} type="image/svg+xml" style={{ overflow:'hidden', border:'0px solid red', zIndex:'0', width:'30vw', maxWidth:'', height:'auto', background:'transparent'  }} alt="animated content" title="animated content" >You need a new browser</object>



//     // </div>
//     //       <br />
//     //           <div className="button" style={{width:'', margin:'0 auto', fontWeight:'bold', padding:'0 1rem', fontSize:'2rem',  borderRadius:'12px', border:'1px solid #333',filter:'drop-shadow(2px 2px 2px #000)'}}><span style={{filter:'drop-shadow(2px 2px 2px #000)'}}>Click To Play</span></div>
      
//     //           </div>
//     //           </button>}
//     //             light="../assets/transparent.png"
//               />
// </div>

    )
  }






  function Iframer2() {
    const iframeUrl2 = "https://www.youtube.com/embed/" + frontmatter.youtuber
    return (

<div>
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
</div>



    )
  }

  const YouTube2 = frontmatter.youtuber2
  const AudioStart = frontmatter.audiostart
  const AudioEnd = frontmatter.audioend

  function Iframer3() {
    const iframeUrl3 = "https://www.youtube.com/embed/" + frontmatter.youtuber2
    return (

<ReactPlayer
          className='react-audio'
          url={iframeUrl3}
          // url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          width="100%"
          height="150px"
          style={{marginTop:'0', position:'relative'}}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, start:AudioStart, end:AudioEnd, mute:0,  }
            },
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'relative', zIndex:'', top:'', border:'0px  solid red', width:'100vw', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px'}}>
          
        <div className="" style={{position:'relative', top:'-50px', zIndex:'', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'auto', marginBottom:''}}>
          
      
          {/* <div className="" style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem',}}>Click For Audio</div> */}

          <div className="popped" style={{display:'flex', width:'', margin:'0 auto', fontWeight:'bold', padding:'.5rem', fontSize:'2rem', background:'linear-gradient(180deg, #777 30%, #333 80%)', borderRadius:'12px', border:'1px solid #333', filter:'drop-shadow(2px 2px 2px #000)'}}><AiOutlineAudioMuted style={{margin:'0 auto', fontSize:'20px', filter:'drop-shadow(2px 2px 2px #000)'}} /><div style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}>Click To Play Music Track</div></div>
          
          </div>
          </button>}
   
            light="../assets/transparent.png"
          />
     




    )
  }





  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }



  const { siteUrl } = useSiteMetadata()


// 
const Completionist = () => <div style={{minWidth:'50%', width:'100%', maxWidth:'100vw', }}>
  { NftRedeem ? (
      // ""
      <a href={NftRedeem} style={{fontSize:'1.4rem', display:'flex', alignSelf:'center', justifySelf:'center', width:'', maxWidth:'400px',  margin:'10px auto',  textAlign:'center', justifyContent:'center', border:'1px solid', borderRadius:'12px', color:'green', textShadow:'1px 1px 0px #666',}}>REDEEM UNLOCKABLE CONTENT</a>
      ) : (
        ""
      )}
<blockquote>Ohh Year!</blockquote>
  </div>
// 

const { iconimage } = useSiteMetadata()




const classes = useStyles();
  const [showControls, setShowControls] = useState(false);
  // const [count, setCount] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
  const [bookmarks, setBookmarks] = useState([]);
  const [state, setState] = useState({
    pip: false,
    playing: true,
    controls: false,
    light: false,

    muted: true,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1,
    loop: false,
    seeking: false,
  });

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsRef = useRef(null);
  const canvasRef = useRef(null);
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

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleProgress = (changeState) => {
    if (count > 3) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }
    if (controlsRef.current.style.visibility == "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    console.log({ newValue });
    setState({ ...state, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    console.log({ value: e.target });
    setState({ ...state, seeking: false });
    // console.log(sliderRef.current.value)
    playerRef.current.seekTo(newValue / 100, "fraction");
  };

  const handleDuration = (duration) => {
    setState({ ...state, duration });
  };

  const handleVolumeSeekDown = (e, newValue) => {
    setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
  };
  const handleVolumeChange = (e, newValue) => {
    // console.log(newValue);
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const toggleFullScreen = () => {
    screenful.toggle(playerContainerRef.current);
  };

  const handleMouseMove = () => {
    console.log("mousemove");
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const hanldeMouseLeave = () => {
    controlsRef.current.style.visibility = "hidden";
    count = 0;
  };

  const handleDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat == "normal" ? "remaining" : "normal"
    );
  };

  const handlePlaybackRate = (rate) => {
    setState({ ...state, playbackRate: rate });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const addBookmark = () => {
    const canvas = canvasRef.current;
    canvas.width = 160;
    canvas.height = 90;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      playerRef.current.getInternalPlayer(),
      0,
      0,
      canvas.width,
      canvas.height
    );
    const dataUri = canvas.toDataURL();
    canvas.width = 0;
    canvas.height = 0;
    const bookmarksCopy = [...bookmarks];
    bookmarksCopy.push({
      time: playerRef.current.getCurrentTime(),
      display: format(playerRef.current.getCurrentTime()),
      image: dataUri,
    });
    setBookmarks(bookmarksCopy);
  };

  const currentTime =
    playerRef && playerRef.current
      ? playerRef.current.getCurrentTime()
      : "00:00";

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
  const elapsedTime =
    timeDisplayFormat == "normal"
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;

  const totalDuration = format(duration);

  

  return (
    
    <Layout className="page">
<CustomBox style={{}}>
<Helmet>
  <body className="blogpost" style={{background:'#111'}} />
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


  
{/* <div className="video-background1" style={{position:'absolute', top:'0', right:'0', left:'0', zIndex:'0', height:'100vh', overflow:'hidden', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}> */}



<div className='player-wrapper intro' style={{position:'relative', top:'0', zIndex:'', height:'', maxHeight:'', overflow:'', filter: 'drop-shadow(0 0 20px #000)' }}>



<div className="vidbox" style={{position:'absolute', height:'', width:'100vw', top:'0', zIndex:''}}>
<div className="video-background">
<div className="video-foreground">




<div style={{ overflow:'', position:'absolute', top:'0', zIndex:'-2', }}>


{Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{ width:'100vw', position:'relative', top:'0', zIndex:'',  border:'0px solid red !important', paddingBottom:''}}
            />
            // <InnerImageZoom src={getSrc(Image)} />


            
            
          ) : (

       ""
            // <StaticImage src="../../assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'60vh', position:'absolute', zIndex:'0', bottom:'',border:'0px solid !important', objectFit:'contain',}} />
  
          )}
    

       
</div>






 











{/* {Svg2 ? (
            <AddSvg2 />
       
          ) : (
            ""
          )} */}

  {/* {OverlayImage ? (
            <GatsbyImage
              image={OverlayImage}
              alt={frontmatter.title + " - image"}
              className="layer2"
              style={{height:'100vh', zIndex:'1', postion:'absolute', bottom:'0', left:'0', objectFit:'contain' }}
            />
          ) : (
            ""
          )} */}









{ !YouTube ? (
            ""
       
          ) : (
            
            <Iframer />
          )}


{Suggestion1 ? (
            <div style={{position:'absolute', top:'0', zIndex:'',}}>
            <YouTubed />
            </div>
       
          ) : (
            ""
          )}




{UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100%', overflow:'hidden', position:'absolute', bottom:'0', zIndex:'',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )}

{Svg ? (
  <div style={{position:'absolute', bottom:'0', zIndex:'', maxHeight:'100%',}}>
            <AddSvg />
       </div>
          ) : (
            ""
          )}


</div>
</div>
</div>

      </div>





{/* <br />
<br /> */}




{Suggestion1 ? (
            <ShowSuggestion style={{position:'absolute', top:'40px', zIndex:'10',}} />
       
          ) : (
            ""
          )}

{ !YouTube2 ? (
            ""
       
          ) : (
            <Iframer3 />
          )}




<article className="blog-post">
        <header>
          <section className="article-header" style={{textAlign:'center', margin:'0 4%', height:'auto', color:''}}>
            <h1 className="tronText" style={{fontSize:'7vw'}}>{frontmatter.title}</h1>
            {/* <time sx={{color: "muted"}}>{frontmatter.date}</time> */}
            {/* <TimeAgo date={frontmatter.date} style={{color:'#fff !important'}} /> */}
          </section>
        </header>




<br />
      <GoBack />
 <br />




<div className="home-posts" style={{clear:'both', display:'',  justifyContent:'space-around', textAlign:'left', width:'90vw', margin:'0 auto', height:'', maxHeight:'', border:'0px solid blue'}}>



<div style={{padding:'0 0', borderTop:'0px solid', margin:'0 0', textAlign:'center', fontSize:'1.5rem', minWidth:'50%', width:'100%', maxWidth:'', border:'0px solid yellow'}}>

{/* {IsNft ? (
            <strong style={{padding:'2rem 1rem'}}>Artist's Notes:</strong>
       
          ) : (
            ""
          )} */}

{/* 
<SRLWrapper options={options} className=""> */}
      <div
        className="blog-post-content" style={{ padding:'0 ', fontSize:'1.1rem', textAlign:'left', width:'100%', maxWidth:'', padding:'10vh 0', margin:'0 auto', color:'inherit !important'}}
        dangerouslySetInnerHTML={{ __html: html }}
      />    
      {/* </SRLWrapper>   */}
     
     <br /><br />
 
</div>



{IsNft ? (

        <div style={{minWidth:'50%', width:'100%', maxWidth:'1000px', maxHeight:'', position:'relative', right:'0', border:'0px solid red', margin:'0 auto'}}>
            {/* <NFTDetails /> */}
            

  



{NftLink ? (
//  <div className='NFTiframer-wrapper' style={{position:'relative', top:'0', zIndex:'0', width:'100%', maxWidth:'60vw', margin:'0 auto', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)', background:'#fff', borderRadius:'12px' }}>

//  <iframe title="VidSock" id="youtube2" className="blog-video1" width="100%" height="400" src={NftLink} frameBorder="0" playsInline  style={{position:'absolute', top:'0', left:'0', right:'0', zIndex:'0', width:'100%', height:'100%', minHeight:'40vh', borderRadius:'12px'  }} />
//  </div>

<strong>This is an NFT</strong>
       
          ) : (
            ""
          )}







       

       { NftDrop ? (

         
            <div className="countdown" style={{display:'flex', alignSelf:'center', fontSize:'540%', textAlign:'center', textShadow:'1px 1px 0px #000', flexDirection:'column' }}>
              <Countdown date={Date.now() + 10000}>
  {/* <Countdown date={NftDrop} > */}
  {/* <Countdown daysInHours date={NftDrop} > */}
<Completionist />
  </Countdown>



  


</div>


       
          ) : (
""
       

          )}

</div>


          ) : (
            ""
          )}


       


 </div>




 <br />
<br />
<br />

      {/* <object data="/art/boatswains-blunder" width="100%" height="1000"></object> */}



      <br />
<br />
<br />
 {ShowOriginal ? (
          <div style={{position:'relative', width:'100%', maxWidth:'800px', margin:'0 auto', textAlign:'center', display:'flex', flexDirection:'column', fontSize:'100%', borderRadius:'12px' }}>Click to view original video
<div style={{maxWidth:'90vw', width:'100%', height:'440px', maxHeight:'40vh', padding:'0', position:'relative', bottom:'0', textAlign:'center', border:'0px solid blue', margin:'0 auto', borderRadius:'12px'}}>
  
                    <Iframer2 />
                    
       </div></div>
       
          ) : (
            ""
          )}
        
        


      </article>
  


      <div style={{padding:'0 5vw', color:'inherit !important'}}>
      {(previous || next) && <Pagination {...props} />}
      </div>





{/* <Countdown
    // date={Date.now() + 10000}
    date='2022-02-21T04:02:03'
    intervalDelay={0}
    precision={3}
    renderer={props => <div>{props.total}</div>}
  /> */}


      






   




       







{ShareThis ? (
<div style={{width:'100%', padding:'0', margin:'0 auto'}}>


  
                    <ShareSocial />
    
       </div>
       
          ) : (
            ""
          )}

<br />

{Suggestion1 ? (
            <div style={{padding:'1vh 5vw', borderTop:'0px solid', marginTop:'3rem', textAlign:'center', fontSize:'1.5rem'}}>
            {/* Find a good one? Post your link Below and then Share it Above.  */}
      
           </div>
       
          ) : (
            ""
          )}


{Comments ? (
<div style={{width:'80%', padding:'0', margin:'0 auto'}}>
  
<CommentBox />
    
       </div>
       
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