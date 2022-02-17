import * as React from "react"
import { Layout } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import GoBack from "../components/goBack"
// import CluGuy from "../../static/assets/clu.svg"



import loadable from '@loadable/component'
import Panel11 from '../components/panel11'


// const Panel2 = loadable(() => import('../components/panel2'), {
//       fallback: <div>Loading...</div>,
//     })
//     const Panel3 = loadable(() => import('../components/panel3'), {
//       fallback: <div>Loading...</div>,
//     })
//     const Panel4 = loadable(() => import('../components/panel4'), {
//       fallback: <div>Loading...</div>,
//     })
//     const Panel5 = loadable(() => import('../components/panel5'))
//     const Panel6 = loadable(() => import('../components/panel6'))
//     const Panel7 = loadable(() => import('../components/panel7'))
//     const Panel8 = loadable(() => import('../components/panel8'))
//     const Panel9 = loadable(() => import('../components/panel9'))
//     const Panel10 = loadable(() => import('../components/panel10'))
    // const Panel11 = loadable(() => import('../components/panel11'), {
    //   fallback: <div>Loading...</div>,
    // })
    const Panel12 = loadable(() => import('../components/panel12'), {
      fallback: <div>Loading...</div>,
    })
    const Panel13 = loadable(() => import('../components/panel13'), {
      fallback: <div>Loading...</div>,
    })






export default function StoryLine() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}



<div className="horizontal-holder" style={{overflow:''}}>
<div className="RArrow">{/* <span></span> */}</div>
<div className="horizontal-scroll panels" style={{}}>
<div className="" style={{height:'1px'}}></div>

{/* <div id="gridintro"><Panel2 /></div>

<div id="proceed"><Panel3 /></div> */}

{/* <div id="discgrid"><Panel4 /></div>

<div id="match2"><Panel5 /></div> */}

{/* <div id="lightcycles"><Panel6 /></div>

<div id="lightcycles2"><Panel7 /></div> */}

{/* <div id="quorra"><Panel8 /></div>

<div id="endofline"><Panel9 /></div>


<div id="samfly"><Panel10 /></div> */}



<Panel11 id="conflict" />
<Panel12 id="storyline" />
<Panel13 id="endofgrid" />
  
  </div>
</div>
      
   


          




    
    
    </Layout>

  )
}
