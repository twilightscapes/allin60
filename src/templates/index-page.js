import React from "react"
import { graphql, Link } from "gatsby"
// import Img from 'gatsby-image'
//  import { GatsbyImage } from 'gatsby-plugin-image'
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
// import GalleryMenu from "../components/galleryMenu"
import { StaticImage } from "gatsby-plugin-image"
// import ShareSocial from '../components/share' 
// import { RiArrowRightSLine } from "react-icons/ri"
// import { RiSendPlane2Line } from "react-icons/ri"
// import TwilightLogo from "../../static/assets/TSidebarHover.svg"
// import { ImPlay } from "react-icons/im"
import { Helmet } from "react-helmet"
import { getSrc } from "gatsby-plugin-image"
// import TwilightLogo from "../../static/assets/TSidebarHover.svg"
import BlogListHome from "../components/blog-list-home"
import Newsignup from "../components/newssign"
// import BlogListHome from "../components/blog-list-home"
// import LightCycleBattle from "../../static/assets/light-cycle-battle.svg"
// import LightCycleRear from "../../static/assets/light-cycle-rear.svg"
// import LightCycle from "../../static/assets/light-cycle.svg"
// import TronChick from "../../static/assets/tron-chick1.svg"
// import PrayingMantis from "../../static/assets/yoga-master.svg"
// import SamFly from "../../static/assets/sam-fly.svg"
// import SamFlynn from "../../static/assets/sam-flynn.svg"
// import CluGuy from "../../static/assets/clu.svg"
// import TronGuy from "../../static/assets/tron.svg"
// import MCP from "../../static/assets/mcp.svg"
// import McpEffects from "../../static/assets/mcp-effects.svg"
// import QuoraStand from "../../static/assets/quora-ass.svg"
// import KevinFlynn from "../../static/assets/kevin-flynn.svg"
// import GridLines from "../../static/assets/off-the-grid.mp4"
// import QuoraStrike from "../../static/assets/quora-strike.svg"
// import LoveSignal from "../../static/assets/love-signal.svg"
// import Castor from "../../static/assets/castor.svg"
import App from "../pages/App"
import GridLoader from "../../static/assets/FrontLoader.svg"
import TheGrid from "../../static/assets/The-Grid-Intro.svg"
import BackgroundImage from 'gatsby-background-image'
// import InstallDiscount from "../components/install-discount"
// import { AiOutlineAudioMuted } from "react-icons/ai"
// import TechBG from "../../static/assets/tech-bg.mp4"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { FaHandPointDown } from "react-icons/fa"
// import CommentBox from "../components/commentbox"
// import GoBack from "../components/goBack"
// import ScrollAnimation from 'react-animate-on-scroll'
// import ReactPlayer from 'react-player/lazy'
import { useSiteMetadata } from "../hooks/use-site-metadata"
// import Newsignup from "./contact-page"
// import TestIT from "../components/test"
// import HomeHolder from "../components/homeholder"


// import loadable from '@loadable/component'
import Panel1 from '../components/panel1'

  // const Panel1 = loadable(() => import('../components/panel1'))
  // const Panel2 = loadable(() => import('../components/panel2'), {
  //   fallback: <div>Loading...</div>,
  // })
  // const Panel3 = loadable(() => import('../components/panel3'), {
  //   fallback: <div>Loading...</div>,
  // })
  // const Panel4 = loadable(() => import('../components/panel4'), {
  //   fallback: <div>Loading...</div>,
  // })
  // const Panel5 = loadable(() => import('../components/panel5'))
  // const Panel6 = loadable(() => import('../components/panel6'))
  // const Panel7 = loadable(() => import('../components/panel7'))
  // const Panel8 = loadable(() => import('../components/panel8'))
  // const Panel9 = loadable(() => import('../components/panel9'))
  // const Panel10 = loadable(() => import('../components/panel10'))
  // const Panel11 = loadable(() => import('../components/panel11'))
  // const Panel12 = loadable(() => import('../components/panel12'))
  // const Panel13 = loadable(() => import('../components/panel13'))

  
  // const BackgroundSection = ({ className }) => {
  //   const data = useStaticQuery(
  //     graphql`
  //       query {
  //         desktop: file(relativePath: { eq: "curtains.jpg" }) {
  //           childImageSharp {
  //             fluid(quality: 90, maxWidth: 1920) {
  //               ...GatsbyImageSharpFluid_withWebp
  //             }
  //           }
  //         }
  //       }
  //     `
  //   )


import TimeAgo from 'react-timeago'
import Countdown from 'react-countdown'

export const pageQuery = graphql`
  query HomeQuery($id: String! ) {
    
    
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        showfooter
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
        showFeature
        showPosts
        showInfo
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
        svgzindex
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        svgImage{
          relativePath
        }
      }
    }



      desktop: file(relativePath: { eq: "curtains.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }


    

    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            nftdrop
  
            
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`









  // const Panel2 = loadable(() => import('../components/panel2'), {
//   fallback: <div>Loading...</div>,
// })


const ViewIt = () => <span>TRON - All In 60 Seconds - VIEW NOW!</span>
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <ViewIt />;
  } else {
    return (
       <span>
       TRON - All In {seconds} Seconds
      </span> 
    )
  }
}


const HomePage = ({ data }) => {





  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, excerpt } = markdownRemark
  // const Image = frontmatter.featuredImage
  //   ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
  //   : ""

    // const SecondaryImage = frontmatter.secondaryImage
    // ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    // : ""
  
    // const UnderlayImage = frontmatter.underlayImage
    // ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    // : ""

    // const { iconimage } = useSiteMetadata()

    const imageData = data.desktop.childImageSharp.fluid
    const { siteUrl } = useSiteMetadata()

    // const YouTubeStart = frontmatter.youtubestart
    // const YouTubeEnd = frontmatter.youtubeend
    // const YouTubeMute = frontmatter.youtubemute
    // const YouTubeControls = frontmatter.youtubecontrols
    // const YouTubeAutostart = frontmatter.youtubeautostart

    // const ShowFeature = frontmatter.showFeature
    // const ShowInfo = frontmatter.showInfo
    // const ShowPosts = frontmatter.showPosts

    




 

  
  return (

    <Layout>
    <Helmet>
  <body className="homepage" style={{background:'#111'}} />
</Helmet>
{/* <Seo
          title={`VidSock - Video Multimedia NFT Platform`}
          description={`Create, display and market your NFTs with VidSock`}
          image={'https://vidsock.com/default-og-image.jpg'}
        /> */}
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
  //       image={photoUrl}
  //  photoUrl

   image={ siteUrl + getSrc(frontmatter.featuredImage) }
/>
      




{/* VIDEO URLS */}



{/* uCf3Q43fC_4 cool train */}


{/* Gg-RA_O16F4  CONTENDER - blue vert lines*/}
{/* c_V1iD6F1kk  CONTENDER - cool animated interface*/}
{/* naD-VHWSoZM  CONTENDER - spiral interface crash*/}
{/* J-FkR8L2X5E */}
{/* /Im7slkFMtI8  CONTENDER - COOL blue power lines*/}
{/* oMXdaALcpew  CONTENDER - circuit board*/}
{/* JzRUbdqa_hU CONTENDER - circuit board 2*/}
{/* Zvsfrz2jD7w  CONTENDER - circuit board 3*/}
{/* 5jlOX5z7yVo */}
{/* S5S6s5dZXNM  default */}



{/* <HomeHolder /> */}

<div className="horizontal-holder" style={{position:'relative',}}>
<div className="RArrow">{/* <span></span> */}</div>


<div className="horizontal-scroll panels sitegrad movingBG" style={{}}>



<div className="" style={{height:'1px'}}></div>




{/* <GridLoader /> */}


{/* <div id="homestart"><Panel1 /></div> */}

<BackgroundImage
      Tag="section"
      className=""
      fluid={imageData}
      backgroundColor={`#111`}
     >



<div className="donation2" style={{display:'grid',
  placeContent:'center', width:'100vw', height:'100vh', justifyContent:'center', position:'relative', background:'rgba(0,0,0,0.50)', webkitBackdropFilter:'blur(10px)', backdropFilter:'blur(14px)'}}>

  <h1 className="tronText " style={{fontSize:'9vw', padding:'3vh 8vw 20vh 8vw', position:'', top:'', border:'0px solid', diplay:'grid', placeContent:'center', maxWidth:'80vw'}}><div className="lineOne">What Can You Do</div> <div className="lineTwo">In 60 Seconds?</div></h1>
</div>
</BackgroundImage>

<article className="" style={{alignItems: 'center', justifyContent:'center', width:'100%', position:'relative',}}>


<a href="https://tron.allin60.com/">
<StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/tronin60.jpg" />
</a>
<div class="post-content"><div style={{display:'flex', alignSelf:'center', position:'absolute', bottom:'66px',}}><div className="countdown" style={{display:'flex', justifyContent:'center', maxWidth:'600px', margin:'0px auto', color:'rgb(255, 255, 255)', textAlign:'center', padding:'1rem', fontSize:'200%', borderRadius:'12px', border:'0px solid rgb(17, 17, 17)', textShadow:'rgb(0, 0, 0) 1px 2px 0px'}}></div></div>

<h2 class="title">
  <a href="https://tron.allin60.com/">
    <Countdown date={Date.now() + 10000} renderer={renderer} precision={0} intervalDelay={0} zeroPadTime={0}></Countdown>
    </a>
</h2>

    <p style={{minWidth:'20vw', position:'relative', textAign:'center',}}><time>2 hours ago</time></p>

    </div>
</article>

{/* <TheGrid /> */}
<BlogListHome data={posts} />


<div className="pagination" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'50vh', background:''}}>
   <Link to="/posts/2/" title="View Archives">
    <div style={{ background:'rgba(0,0,0,0.70)', width:'80vw', position:'relative', top:'', margin:'0 auto', padding:'0 10%', zIndex:'1', textAlign:'', borderRadius:'12px', textDecoration:'none'}}>
    <h1 className="txtFlyIn">All In 60 Seconds - View More</h1>
    
    </div>
</Link>
</div>


<div className="donation2" style={{ width:'100vw', height:'100vh'}}>
{/* <Link to="/contact"> */}
<div style={{position:'relative', top:'', margin:'0', padding:'15% 20%',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px', textDecoration:'none'}}>
  <Newsignup />
  </div>
{/* </Link> */}
</div>

        
</div>

</div>

    </Layout>
  )
}

export default HomePage
  

