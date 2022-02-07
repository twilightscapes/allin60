import React from "react"
import { graphql, Link } from "gatsby"
// import Img from 'gatsby-image'
//  import { GatsbyImage } from 'gatsby-plugin-image'
// import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
// import GalleryMenu from "../components/galleryMenu"
import { StaticImage } from "gatsby-plugin-image"
// import ShareSocial from '../../components/share' 
import { RiSendPlane2Line } from "react-icons/ri"
// import TwilightLogo from "../../static/assets/TSidebarHover.svg"

import { Helmet } from "react-helmet"
// import LightCycleBattle from "../../static/assets/light-cycle-battle.svg"
// import LightCycleRear from "../../static/assets/light-cycle-rear.svg"
import LightCycle from "../../static/assets/light-cycle.svg"
import TronChick from "../../static/assets/tron-chick1.svg"
// import PrayingMantis from "../../static/assets/yoga-master.svg"
import SamFly from "../../static/assets/sam-fly.svg"
// import GridLines from "../../static/assets/off-the-grid.mp4"
import QuoraStrike from "../../static/assets/quora-strike.svg"
import LoveSignal from "../../static/assets/love-signal.svg"

import { AiOutlineAudioMuted } from "react-icons/ai"
// import TechBG from "../../static/assets/tech-bg.mp4"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { FaHandPointDown } from "react-icons/fa"
// import CommentBox from "../components/commentbox"
// import ShareSocial from '../components/share' 
// import GoBack from "../components/goBack"
// import ScrollAnimation from 'react-animate-on-scroll'
import ReactPlayer from 'react-player/lazy'
// import Newsignup from "./contact-page"
// import TestIT from "../components/test"
const TestPage = ({data}) => (
  
<>



<Helmet>
  <body className="homepage" />
</Helmet>
<Seo
      title={`TRON in 60 Seconds - Movies in 60 Seconds`}
      description={`TRON in 60 Seconds - Enter The Grid`}
      image={'https://twilightscapes.com/promo-about-todd.jpg'}
    />



<ReactPlayer
          className='playerpp'
          url="https://www.youtube.com/embed/S5S6s5dZXNM"
          // url={[
          //   iframeUrl,
          //   Suggestion1,
          //   Suggestion2,
          //   Suggestion3
          // ]}
          width="200px"
          height=""
          style={{bottom:'-145px', position:'absolute', zIndex:'1', display:'flex', width:'100%', justifyContent:'center', margin:'0 auto', right:'42%'}}
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:0, start:5,  }
            },
          }}
          loop
          playing
          playsinline
          playIcon={
            <button aria-label="Click To Play" className="clickplays" style={{position:'absolute', display:'flex', justifyContent:'center', zIndex:'0', top:'-100px', border:'0px  solid red', width:'100vw', height:'', background:'transparent', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItems:'center', paddingTop:'0', borderRadius:'12px' , }}>
          
        <div className="" style={{position:'absolute', top:'-125px', zIndex:'0', textAlign:'center', animation:'fadeIn 3s', display:'flex', justifyContent:'center', width:'100%', marginBottom:''}}>
          
      
          {/* <div className="" style={{fontSize:'14px', fontWeight:'', padding:'0 0 0 .3rem',}}>Click For Audio</div> */}

          <div style={{fontSize:'70%', position:'absolute', bottom:'-25px', textAlign:'center', background:'#000', padding:'5px 25px'}}>Sound recommended for maximum effect</div>
          <div className="popped actionJackson" style={{pozition:'absolute', display:'flex', alignSelf:'center', justifyContent:'center', width:'auto', margin:'0 auto 0 auto', fontWeight:'bold', padding:'30px 100px', fontSize:'3vw', color:'#fff', borderRadius:'200px', border:'0px solid #fff', filter:'drop-shadow(2px 2px 2px #000)'}}><AiOutlineAudioMuted style={{margin:'5px 1rem 0 auto', fontSize:'40px', filter:'drop-shadow(2px 2px 2px #000)'}} /><div className="tronText TRON" style={{fontSize:'1.5vw', fontWeight:'', padding:'0 0 0 .3rem', filter:'drop-shadow(2px 2px 2px #000)'}}> Enter the GRID</div></div><br />
          
          </div>
          </button>}
   
            light="../assets/transparent.png"
          />




  <div className="sliderholder" style={{display:'flex', justifyContent:'center', width:'100vw', height:'100vh', overflow:'hidden', position:'relative', padding:' 0',

  //  aspectRatio: '16 / 9'
}}>



      
      {/* <video controls autoPlay muted loop style={{zIndex:'-1', width:'100VW', height:'100vh', objectFit: 'cover'}}>
      <source src={TechBG} type="video/mp4" />
    </video> */}
      <div className="frontdrop"></div>
      

  <div className="vidbox" style={{position:'relative', maxHeight:'100vh', zIndex:'-1'}}>
<div className="video-background">
    <div className="video-foreground">
      
      <iframe title="Video about Tron in 60 seconds" className="" width="100%" height="350" src="https://www.youtube.com/embed/LltRzgvyrps?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=LltRzgvyrps" frameBorder="0" allowFullScreen></iframe>
      
    </div>
</div>
</div>


  {/* <TwilightLogo className="bglogo" /> */}

  {/* <video controls autoplay>
      <source src={TechBG} type="video/mp4" />
    </video> */}

  <div className="RArrow">
     <span></span>
    </div>

<SimpleReactLightbox>
      {/* <SRLWrapper options={options} className=""> */}
      {/* <div className="masonry" style={{}}> */}
      <div className="horizontal-scroll-wrapper squares" style={{ width:'100vh', padding:'0', height:''}}>


      {/* <div className="introspacer" style={{height:'140vw'}}></div> */}

      <div id="mylink0" className="donation2" style={{position:'relative', transform:'', height:'50vw',}}>
        
        
        </div>


      

      <div id="mylink9" className="donation2" style={{position:'relative', display:'flex', flexDirection:'column', justifyContent:'center', transform:'', height:'', border:'0px solid red'}}>


      <h1 className="tronText" style={{display:'', alignContent:'center', textAlign:'center', fontSize:'12vw', zIndex:'2', position:'relative', marginTop:'2rem'}}><span className="TRON" style={{fontWeight:'normal',}}>TRON<span style={{fontSize:'60%', paddingLeft:'2rem'}}>:</span></span><br />
      
      <div className="TRON" style={{fontWeight:'normal', fontSize:'20%', padding:'0', margin:'-2% 0 0 0',}}>in</div>
      
      <div className="tronText" style={{fontWeight:'bold', fontSize:'120%', margin:'-8% 0 0 0',}}>60 <span className="TRON" style={{fontSize:'30%'}}>seconds</span></div>
      </h1>

<StaticImage
style={{maxHeight:'80vh', margin:'0 auto' }}
alt="Todd Lambert Web development for photographers" src="../img/memory-disk.png" />
</div>




<div id="mylink27" className="donation2" style={{position:'relative', transform:'', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>
      
      <div className="">
 <div style={{fontSize:'clamp(.7rem, 2.5vw, 2.6rem)', lineHeight:'140%', position:'absolute', left:'0', top:'8%', width:'90%'}}>


 <h2 className="tronText TRON" style={{fontSize:'150%', paddingLeft:'2rem'}}>The Grid  <span className="neonText" style={{fontSize:'80%'}}>A digital frontier</span>.</h2>


<blockquote className="tronText" style={{lineHeight:'170%'}}>I tried to picture clusters of information as they moved through the computer. What did they look like? Ships? Motorcycles? Were the circuits like freeways? I kept dreaming of a world<br />I thought I'd never see.</blockquote>
</div>

{/* <StaticImage
style={{maxHeight:'90vh', position:'absolute', right:'0', bottom:'0' }}
data-sal="slide-up"
data-sal-duration="1000"
data-sal-delay="5"
data-sal-easing="ease"
alt="Todd Lambert Web development for photographers" src="../img/light-cycle.png" /> */}

<LightCycle style={{maxHeight:'75vh', position:'absolute', right:'0', bottom:'0', zIndex:'-1' }} />

</div>


</div>

          {/* <div className="intropanel">
            <AnchorLink 
className="txtshadow"
style={{
  cursor:'pointer',
  width:'50%',
  margin:'0 auto'

}} 
to="#mylink" title="Coming Soon" />
          </div> */}


<div id="" className="" style={{position:'relative', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>
      {/* <div className="frontdrop"></div> */}
      {/* <ReactPlayer
          className='youtubehide1'
          style={{margin:'0 0 0 0', position:'absolute', top:'', zIndex:'-1', background:'transparent'}}
          url="https://www.youtube.com/embed/LltRzgvyrps"
          width="100vw"
          height="100vh"
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, loop:1  }
            },
          }}
          loop
          playing
          playsinline
          /> */}

<div className="vidbox" style={{position:'relative', maxHeight:'100vh', zIndex:'-1'}}>
<div className="video-background">
    <div className="video-foreground">
      
      <iframe title="Video about Tron in 60 seconds" className="" width="100%" height="350" src="https://www.youtube.com/embed/LltRzgvyrps?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=LltRzgvyrps" frameBorder="0" allowFullScreen></iframe>
      
    </div>
</div>
</div>

{/* <video autoPlay muted loop style={{zIndex:'-1', width:'100%', height:'100%', objectFit: 'cover'}}>
        <source src={TechBG} type="video/mp4" />
      </video> */}
  
{/* <PrayingMantis style={{position:'absolute', bottom:'0', zIndex:'2', maxHeight:'20vw'}} /> */}




  {/* <video autoPlay muted loop style={{zIndex:'-1', width:'100%', height:'100%', objectFit: 'cover'}}>
        <source src={TechBG} type="video/mp4" />
      </video> */}
  {/* lorem lorem lorem ipsum lorem ipsum dolar sellum todos ipsum lorem */}
  </div>







          


          
      {/* {data.allFile.edges.map(edge => {
      return <GatsbyImage
      image={edge.node.childImageSharp.gatsbyImageData}
      srl_gallery_image="true"
      alt={edge.node.name}
      key={edge.node.id}
    />
    })} */}






{/* <div id="mylink27" className="donation" style={{position:'relative', transform:'', height:'70vh', background:'none', filter:'none', boxShadow:'none',}}> */}
{/* <StaticImage
style={{maxHeight:'90vh'}}
data-sal="slide-up"
data-sal-duration="1000"
data-sal-delay="5"
data-sal-easing="ease"
alt="Todd Lambert Web development for photographers" src="../img/tron-chick1.png" /> */}

{/* <div style={{position:'absolute', padding:'2rem', width:'60%'}}>My disk is everything. It's the master key, the golden ticket. The way out, man.</div> */}
{/* <div id="mylink27" className="donation" style={{position:'relative', transform:'', width:'100vw', height:'100vh', background:'none', filter:'none', boxShadow:'none',}}>

<ReactPlayer
          className='youtubehide'
          style={{margin:'-2.5rem 0 0 0', zIndex:'-1', top:'0'}}
          url="https://www.youtube.com/embed/0qk_Hi5ArKE"
          width="100vw"
          height="100vh"
          
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:67, end:122, loop:1  }
            },
          }}
          loop
          playing
          playsinline
          />

<div className="blocker" style={{display:'none', position:'absolute', zindex:'1', paddingTop:'1rem', width:'60%', padding:'1rem', fontSize:'clamp(.7rem, 3vw, 3.2rem)', left:'4vw', lineHeight:'100%'}}>
  
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
<p className="tronText" style={{fontSize:'180%', textAlign:''}}>Proceed to games.</p>
</div>
<TronChick style={{maxHeight:'100vh', maxWidth:'90%', position:'absolute', right:'0', bottom:'-5vh',  }} />

</div> */}




<div id="" className="" style={{position:'relative', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>
      {/* <div className="frontdrop"></div> */}
      <ReactPlayer
          className='youtubehide'
          style={{margin:'0 0 0 0', position:'absolute', top:'-5vh', zIndex:'-1', background:'transparent'}}
          // url="https://www.youtube.com/embed/QsDJIZwzjVA"
          url="https://www.youtube.com/embed/LD7XTybXwx0"
          width="100vw"
          height="100vh"
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:130, end:182, loop:1  }
            },
          }}
          loop
          playing
          playsinline
          />


</div>



<div id="" className="" style={{position:'relative', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>
      {/* <div className="frontdrop"></div> */}
      
<Link state={{modal: true}} to="/contact/">
<TronChick className="tronchick" style={{maxHeight:'100vh', maxWidth:'100%', position:'absolute', right:'-0', bottom:'0vh',  }} />
</Link>

<div className="" style={{display:'', position:'absolute', zindex:'3', paddingTop:'1rem', width:'60%', padding:'2rem 1rem 1rem 1rem', fontSize:'clamp(.7rem, 3vw, 3.2rem)', left:'4vw', lineHeight:'100%'}}>
  
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
  <p className="tronText TRON" style={{fontSize:'110%', textAlign:''}}>Proceed to games.</p>
  </div>

</div>



<div id="" className="" style={{position:'relative', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>
      {/* <div className="frontdrop"></div> */}
      <ReactPlayer
          className='youtubehide'
          style={{margin:'0 0 0 0', position:'absolute', top:'-5vh', zIndex:'-1', background:'transparent'}}
          // url="https://www.youtube.com/embed/QsDJIZwzjVA"
          url="https://www.youtube.com/embed/YyoKXfBQgXw"
          width="100vw"
          height="100vh"
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:54, end:82, loop:1  }
            },
          }}
          loop
          playing
          playsinline
          />
{/* <Link state={{modal: true}} to="/about-twilightscapes/">
<StaticImage
style={{maxHeight:'100vh', maxWidth:'100%', position:'absolute', right:'0', bottom:'0',  }}
alt="Todd Lambert Web development for photographers" src="../img/tron-fights2.png" />
</Link> */}
</div>





<div id="" className="" style={{position:'relative', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>
      {/* <div className="frontdrop"></div> */}
      <ReactPlayer
          className='youtubehide'
          style={{margin:'0 0 0 0', position:'absolute', top:'-5vh', zIndex:'-1', background:'transparent'}}
          // url="https://www.youtube.com/embed/QsDJIZwzjVA"
          url="https://www.youtube.com/embed/YyoKXfBQgXw"
          width="100vw"
          height="100vh"
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:204, end:221, loop:1  }
            },
          }}
          loop
          playing
          playsinline
          />
<Link state={{modal: true}} to="/about-twilightscapes/">
<StaticImage
style={{maxHeight:'100vh', maxWidth:'100%', position:'absolute', right:'0', bottom:'0',  }}
alt="Todd Lambert Web development for photographers" src="../img/tron-fights2.png" />
</Link>
</div>




{/* <div id="" className="" style={{position:'relative', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>
      <ReactPlayer
          className='youtubehide'
          style={{margin:'0 0 0 0', position:'absolute', top:'-5vh', zIndex:'-1', background:'transparent'}}
          url="https://www.youtube.com/embed/YyoKXfBQgXw"
          width="100vw"
          height="100vh"
          
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:20, end:50, loop:1  }
            },
          }}
          loop
          playing
          playsinline
          />

</div> */}





{/* <div id="mylink13" className="donation2 masonry1" style={{position:'relative', display:'flex', flexDirection:'column', height:'80vh', border:'none', outline:'none', filter:'none',justifyContent:'start', textAlign:'center'}}>

<div style={{position:'relative', padding:'0rem', margin:'0 auto', width:'100%', fontSize:'clamp(1.6rem, 4vw, 4.2rem)', textAlign:'center', justifyContent:'center'}}>
  Onto the Games Grid
  </div>


  <div className="TRON" style={{position:'relative', padding:'0rem', margin:'0 auto', width:'100%', fontSize:'clamp(1.6rem, 24vw, 24.2rem)', textAlign:'center', justifyContent:'center', color:'red'}}>
  [
  </div>

<StaticImage
style={{maxHeight:'90vh', border:'none', outline:'none', filter:'none', boxShadow:'none'}}
alt="Todd Lambert Web development for photographers" src="../img/discs.png" />
</div> */}




{/* <div id="mylink3" className="donation2" style={{position:'relative',display:'flex', flexDirection:'column', height:'80vh', border:'none', outline:'none', filter:'none',justifyContent:'start', textAlign:'center'}}>


<div style={{position:'absolute', padding:'0rem', margin:'0 auto', width:'100%', fontSize:'clamp(1.6rem, 4vw, 4.2rem)', textAlign:'center', justifyContent:'center'}}>
  Tron fights for the User
  </div>

<StaticImage
style={{maxHeight:'90vh'}}
alt="Todd Lambert Web development for photographers" src="../img/tron-fights.png" />
</div> */}



<div id="" className="" style={{position:'relative', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>
      {/* <div className="frontdrop"></div> */}
      <ReactPlayer
          className='youtubehide'
          style={{margin:'0 0 0 0', position:'absolute', top:'-5vh', zIndex:'-1', background:'transparent'}}
          // url="https://www.youtube.com/embed/QsDJIZwzjVA"
          url="https://www.youtube.com/embed/SqSuRdkglxM"
          width="100vw"
          height="100vh"
          
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:12, end:50, loop:1  }
            },
          }}
          loop
          playing
          playsinline
          />

</div>







<div id="" className="" style={{position:'relative', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>
      {/* <div className="frontdrop"></div> */}
      <ReactPlayer
          className='youtubehide'
          style={{margin:'0 0 0 0', position:'absolute', top:'-5vh', zIndex:'-1', background:'transparent'}}
          // url="https://www.youtube.com/embed/QsDJIZwzjVA"
          url="https://www.youtube.com/embed/3TeUWwsG9kI"
          width="100vw"
          height="100vh"
          
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:2, end:120, loop:1  }
            },
          }}
          loop
          playing
          playsinline
          />

</div>







{/* <div srl_exclude="true" id="mylink11" className="donation" style={{position:'relative', transform:'', height:'80vh',}}>

<div style={{position:'absolute', padding:'0rem', margin:'0 auto', width:'100%', fontSize:'clamp(1.6rem, 4vw, 4.2rem)', textAlign:'center', justifyContent:'center'}}>
A Digital Frontier to Reshape the Human Condition


  </div>



<StaticImage
style={{maxHeight:'90vh'}}
alt="Todd Lambert Web development for photographers" src="../img/tron-fights2.png" />
</div> */}










{/* <Link state={{modal: true}} to="/about/">
<div id="mylink8" className="donation2" style={{position:'relative', transform:'', height:'80vh',}}>

<LightCycleRear style={{maxHeight:'80vh', maxWidth:'40%', position:'absolute', right:'80px', bottom:'',  }} />


</div>
</Link> */}



{/* <div id="mylink6" className="donation2" style={{position:'relative', transform:'', height:'80vh',}}>

<LightCycleBattle style={{maxHeight:'100vh', maxWidth:'70%', position:'absolute', right:'80px', bottom:'',  }} />

</div> */}



{/* <div id="mylink7" className="donation" style={{position:'relative', transform:'', height:'80vh',}}>
<StaticImage
style={{maxHeight:'90vh'}}
data-sal="slide-up"
data-sal-duration="1000"
data-sal-delay="5"
data-sal-easing="ease"
alt="Todd Lambert Web development for photographers" src="../img/tron-actionfigure.png" />
</div> */}





<div id="" className="" style={{position:'relative', width:'100vw', height:'', top:'', background:'none', filter:'none', boxShadow:'none', display:'grid', placeContent:'center', alignItems:'center'}}>






<div className="" style={{position:'relative', padding:'0rem', width:'100vw', fontSize:'clamp(.7rem, 3vw, 3.2rem)', top:'3%'}}>
  
<blockquote className="tronText" style={{lineHeight:'170%', position:'', margin:'30% auto 0 auto', maxWidth:'90vw', background:'rgba(0,0,0,0.50)',
  backdropFilter:'blur(4px)'}}>
<p>You promised that we would
  <br />
change the world, together.</p>
<br />
<p className="TRON" style={{fontSize:'70%'}}> You broke your promise...</p>
<br />
<p>I took this system to its maximum potential.</p> 
<br />
<p className="TRON" style={{fontSize:'60%'}}>I created the perfect system!</p>
<br /><br />
</blockquote>
</div>
 
      <Link state={{modal: true}} to="/privacy/">
<StaticImage
style={{maxHeight:'', maxWidth:'100%', position:'absolute', right:'0', bottom:'0', zIndex:'2'  }}
alt="Todd Lambert Web development for photographers" src="../img/clu2.png" />
</Link>

<div className="vidbox" style={{position:'relative', maxHeight:'100vh', zIndex:'-1'}}>
<div className="video-background">
    <div className="video-foreground">
      
      <iframe title="Video about Tron in 60 seconds" className="" width="100%" height="350" src="https://www.youtube.com/embed/LltRzgvyrps?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=LltRzgvyrps" frameBorder="0" allowFullScreen></iframe>
      
    </div>
</div>
</div>

{/* <iframe style={{position:'relative', display:'grid', placeContent:'center', alignSelf:'center'}} title="Video about Tron in 60 seconds" className="" width="100%" height="350" src="https://www.youtube.com/embed/LltRzgvyrps?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=LltRzgvyrps" frameBorder="0" allowFullScreen></iframe> */}

      

  </div>

  



  <div id="" className="" style={{position:'relative', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>
      {/* <div className="frontdrop"></div> */}
      {/* <ReactPlayer
          className='youtubehide'
          style={{margin:'0 0 0 0', position:'absolute', top:'-5vh', zIndex:'-1', background:'transparent'}}
          // url="https://www.youtube.com/embed/QsDJIZwzjVA"
          url="https://www.youtube.com/embed/LD7XTybXwx0"
          width="100vw"
          height="100vh"
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:130, end:182, loop:1  }
            },
          }}
          loop
          playing
          playsinline
          /> */}

{/* <ReactPlayer
          className='youtubehide1'
          style={{margin:'0 0 0 0', position:'relative', top:'-5vh', background:'transparent', zIndex:'-1', width:'100%', height:'100%', objectFit: 'cover'}}
          // url="https://www.youtube.com/embed/QsDJIZwzjVA"
          url="https://www.youtube.com/embed/LltRzgvyrps"
          width="100vw"
          height="100vh"
          
          config={{
            youtube: {
              playerVars: { showinfo:0, autoplay:1, controls:0, mute:1, start:2, end:120, loop:1  }
            },
          }}
          loop
          playing
          playsinline
          /> */}

<div className="vidbox" style={{position:'relative', maxHeight:'100vh', zIndex:'-1'}}>
<div className="video-background">
    <div className="video-foreground">
      
      <iframe title="Video about Tron in 60 seconds" className="" width="100%" height="350" src="https://www.youtube.com/embed/LltRzgvyrps?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=LltRzgvyrps" frameBorder="0" allowFullScreen></iframe>
      
    </div>
</div>
</div>

{/* <iframe title="Video about Tron in 60 seconds" className="" width="100%" height="350" src="https://www.youtube.com/embed/LltRzgvyrps?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=LltRzgvyrps" frameBorder="0" allowFullScreen></iframe> */}

      {/* <div className="frontdrop"></div> */}
<QuoraStrike style={{maxHeight:'100vh', maxWidth:'90%', position:'absolute', right:'0', bottom:'0',  }} />

</div>





  <div id="mylink27" className="donation2" style={{position:'relative', transform:'', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>



      {/* <div className="frontdrop"></div> */}


{/* <StaticImage
style={{maxHeight:'90vh', position:'absolute', zIndex:'2'}}
alt="Todd Lambert Web development for photographers" src="../img/sam-fly.png" /> */}

<div style={{position:'relative', zIndex:'3', fontSize:'200%', textAlign:'center'}}>You can't steal something that's designed to be given away free.</div>


<Link state={{modal: true}} to="/privacy/">
<SamFly style={{height:'100vh', maxWidth:'100%', position:'relative', right:'4vw', top:'0',  }} />
</Link>

</div>












<div id="mylink27" className="donation2" style={{position:'relative', transform:'', width:'100vw', height:'100vh', top:'', background:'none', filter:'none', boxShadow:'none',}}>

<LoveSignal style={{maxHeight:'100vh', maxWidth:'100%', position:'absolute', right:'', bottom:'',  }} />
  
<Link state={{modal: true}} to="/clu/">
<StaticImage
style={{maxHeight:'100vh', width:'50%', zIndex:'2', position:'absolute', right:'0', bottom:'0'}}
alt="Todd Lambert Web development for photographers" src="../img/clu2.png" />
</Link>
<div style={{position:'absolute', padding:'0rem', width:'60%', fontSize:'clamp(.7rem, 3vw, 3.2rem)', top:'3%'}}>
  



{/* <p>You promised that we would change the world, together.</p>
<p className="tronText"> You broke your promise...</p>

<p>I took this system to its maximum potential.</p> 

<p className="tronText">I created the perfect system!</p> */}





</div>

<div className="vidbox" style={{position:'relative', maxHeight:'100vh', zIndex:'-1'}}>
<div className="video-background">
    <div className="video-foreground">
      
      <iframe title="Video about Tron in 60 seconds" className="" width="100%" height="350" src="https://www.youtube.com/embed/LltRzgvyrps?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=LltRzgvyrps" frameBorder="0" allowFullScreen></iframe>
      
    </div>
</div>
</div>

{/* <iframe title="Video about Tron in 60 seconds" className="" width="100%" height="350" src="https://www.youtube.com/embed/LltRzgvyrps?controls=0&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=LltRzgvyrps" frameBorder="0" allowFullScreen></iframe> */}

      {/* <LoveSignal style={{maxHeight:'80vh', maxWidth:'50%', position:'absolute', right:'30px', bottom:'',  }} /> */}

  {/* lorem lorem lorem ipsum lorem ipsum dolar sellum todos ipsum lorem */}
  </div>




{/* <div id="mylink30" className="donation2" style={{position:'relative', transform:'', height:'80vh',}}>
        

<video autoPlay muted loop style={{position:'', zIndex:'-1', width:'100%', height:'100%', objectFit: 'cover'}}>
        <source src={TechBG} type="video/mp4" />
      </video>

        <StaticImage
        style={{maxHeight:'90vh', zIndex:'2'}}
        alt="Todd Lambert Web development for photographers" src="../img/tron-end.png" />

<EndMcp style={{maxHeight:'100vh', maxWidth:'60%', position:'absolute', right:'80px', bottom:'',  }} />
        </div> */}






















        <div className="TRON tronText" style={{position:'absolute', padding:'0rem', margin:'0 auto', width:'100vw', height:'', right:'', top:'', fontSize:'clamp(1.6rem, 8vw, 5.2rem)', textAlign:'center', justifyContent:'center'}}>
  Characters
  </div>

<div className=" blocker2 masonry22 row" style={{position:'relative', transform:'', width:'100vw', height:'100vh', display:'flex', justifyContent:'center' }}>

<div srl_exclude="true" id="mylink18" className="donation2" style={{position:'relative', transform:'', height:'80vh', 
// background:'rgba(6, 70, 90, 0.6)', 
padding:'2rem'}}>
<StaticImage
style={{maxHeight:'90vh',}}
alt="Todd Lambert Web development for photographers" src="../img/sam-nomask.png" />
</div>

<div srl_exclude="true" id="mylink16" className="donation2" style={{position:'relative', transform:'', height:'80vh',
//  background:'rgba(6, 70, 90, 0.6)', 
 padding:'2rem 0 0 0'}}>
<StaticImage
style={{maxHeight:'90vh'}}
alt="Todd Lambert Web development for photographers" src="../img/quora-ass.png" />
</div>

<div srl_exclude="true" id="mylink16" className="donation2" style={{position:'relative', transform:'', height:'80vh',
//  background:'rgba(6, 70, 90, 0.6)', 
 padding:'2rem 0 0 0'}}>
<StaticImage
style={{maxHeight:'90vh'}}
alt="Todd Lambert Web development for photographers" src="../img/kevin-flynn.png" />
</div>

<div srl_exclude="true" id="mylink14" className="donation2" style={{position:'relative', transform:'', height:'80vh',
//  background:'rgba(8, 40, 49, 0.6)', 
 padding:'2rem 3rem'}}>
<StaticImage
style={{maxHeight:'90vh'}}
alt="Todd Lambert Web development for photographers" src="../img/tronsuit1.png" />
</div>



<div srl_exclude="true" id="mylink15" className="donation2" style={{position:'relative', transform:'', height:'80vh', 
// background:'rgba(6, 70, 90, 0.6)', 
padding:'2rem 0 0 0'}}>

<Link state={{modal: true}} to="/privacy/">
<StaticImage
style={{maxHeight:'90vh'}}
alt="Todd Lambert Web development for photographers" src="../img/clu.png" />
</Link>
</div>

</div>



<div className="neonText" style={{position:'absolute', zIndex:'2', padding:'0rem', margin:'1rem auto', width:'100%', fontSize:'clamp(1.6rem, 4vw, 4.2rem)', textAlign:'center', justifyContent:'center', left:'0', right:'0'}}>
  Bonus Scene
  </div>
        <div srl_exclude="true" id="mylink21" className="donation2" style={{position:'relative', transform:'', height:'80vh',}}>
<StaticImage
style={{maxHeight:'70vh', paddingTop:'1rem'}}
alt="Todd Lambert Web development for photographers" src="../img/mcp.png" />
</div>




 
 <div className="flexbutt1 splitRow noexit print" style={{margin:'',
position:'relative', justifyContent:'center' }}>

<h3 className="TRON tronText" style={{ columnSpan:'all',position:'relative', textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)',}}>Brought to you by:</h3>
    
<div className="row" style={{padding:'2rem', gap:'2rem'}}>

    <div className="flexcheek1 splitRow network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'center'}}>
    <a className="noexit" href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/urban-fetish-button.jpg" alt="Todd Lambert Night photos" style={{borderRadius:'8px'}}  /></a>
    <br />
    Take a walk on the wild side and follow along as Todd Lambert goes in search of the creepiest, freakiest, spookiest abandoned and desolate locations he can find. 
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://urbanfetish.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>UrbanFetish.com</a></div>
    </div>


<div className="flexcheek1 splitRow network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'center',}}>
    <a className="noexit" href="https://toddlambert.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/toddlambert-promo-banner.png" alt="Todd Lambert is an independent artist, creator, design, developer and generally a unicorn" style={{borderRadius:'8px'}}  /></a>
    <br />
    Todd Lambert excels in design, development, marketing, conceptual photography and online strategy that bring results. Learn more about Todd and maybe hire him to help you?
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://toddlambert.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>ToddLambert.com</a></div>
    </div>



<div className="flexcheek1 splitRow network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'center',}}>
    <a className="noexit" href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>
    <StaticImage src="../../static/assets/twilightscapes-button.jpg" alt="Todd Lambert Night photos"  /></a>
    <br />
    Experience a new style of landscape photography all through the eyes of Todd Lambert. Explore the unusual and see the night like you&apos;ve never seen it before.
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://twilightscapes.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>Twilightscapes.com</a></div>
    </div>

    
    {/* <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
    <a className="noexit" href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit'}}>
    <StaticImage src="../../static/assets/vidsock-promo.jpg" alt="Todd builds Web Apps"  style={{borderRadius:'8px'}} /></a>
    <br />
Todd sells exceptionally fast and well-built multimedia web apps called VidSocks. They are a complete website solution that costs nothing to run and get top ranks in Google!
    <br /><br />
    <div style={{textAlign:'center',}}><a className="post-card button " href="https://vidsocks.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'inherit',}}>VidSocks.com</a></div>
    </div> */}
</div>
</div>



<div id="mylink" className="donation2" style={{display:'none', position:'relative', transform:'', height:'80vh',}}>
{/* <Link to="/contact"> */}

<div className="" style={{position:'relative', top:'0', margin:'0', padding:'0 0',  width:'50%', zIndex:'1', textAlign:'', borderRadius:'12px', textDecoration:'none'}}>

  {/* <Newsignup /> */}


  <div className="wrapper" style={{textAlign:'center'}}>
 
        <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              <input type="text" name="name" placeholder="Name" required />
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
          </p>
          {/* <p>
            <label>
              <input type="text" name="subject" placeholder="Subject" required />
            </label>
          </p> */}
          <p>
            <label>
              <textarea name="message" placeholder="Your Message" required></textarea>
            </label>
          </p>
          <p className="text-align-right" style={{marginRight:'60px', color:'#fff'}}>
            <button
              className="button"
              
              type="submit"
            >
              Send Message{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form>
        <br />
        I'd love to hear from you. I am currently available for work.
      </div>


 
  </div>
  
{/* </Link> */}
</div>

    </div>
    {/* </SRLWrapper> */}
    </SimpleReactLightbox>
        </div>
         {/* <GalleryMenu /> */}
         {/* <ShareSocial /> */}
         {/* <div className="spacer66" /> */}

         {/* <br />
<h1 className="neonText" style={{textAlign:'center', fontSize:'clamp(1.3rem, 1.1vw + 1.5rem, 3rem)', color:'#fff'}}>Test Page <br /><span style={{fontSize:'50%'}}>testing grounds</span></h1>
<br /> */}


{/* <StaticImage
data-sal="zoom-in"
data-sal-duration="2000"
data-sal-delay="5"
data-sal-easing="ease"
alt="Todd Lambert Web development for photographers" src="../img/interactive-photo-banner-alien-egg-farm.jpg" /> */}

 {/* <ShareSocial /> */}
 {/* <TestIT /> */}

{/* <br /><br />
<GoBack /> */}
    
{/* 
<p style={{textAlign:'center', fontSize:'clamp(.8rem, 1.4rem, 2rem)', fontWeight:'bold', maxWidth:'700px', margin:'3rem  auto 0 auto'}}>Do you have comments?</p> */}




{/* <ScrollAnimation animateIn="bounce" duration={1} animateOnce={false} animatePreScroll={false} >
<FaHandPointDown className="bounce" style={{fontSize:'80px', textAlign:'center', width:'100%', margin:'1rem auto'}} />
</ScrollAnimation>

<div style={{padding:'5vh 5vw', borderTop:'0px solid', marginTop:'3rem'}}>
    <CommentBox />
    </div> */}

</>

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

export default TestPage

export const testQuery = graphql`
query testPhotos2 {
  allFile(
    filter: {relativeDirectory: {eq: "route66"}, relativePath: {}}
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
