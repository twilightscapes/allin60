import * as React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/seo"
import Panel4 from "../components/panel1"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"
const CustomBox = styled.div`




@media (max-width: 48em) {

}

@media (min-width: 1100px) {

}

@media (min-width: 1100px) {

  }


`
    // const Panel13 = loadable(() => import('../components/panel13'))






export default function Projects() {
   return (

    <CustomBox>
    
    <Layout className="thanks-page">

<Seo
          title={`All In 60 Seconds - Current Projects`}
          description={`Archive of all projects`}
          image={'https://allin60.com/allin60seconds.jpg'}
        />




<div className="horizontal-holder" style={{position:'relative',}}>
{/* <div className="RArrow"><span></span></div> */}


<div className="horizontal-scroll panels sitegrad movingBG" style={{}}>



<div className="" style={{height:'1px'}}></div>


<Panel4 />


<article className="" style={{alignItems: 'center', justifyContent:'center', width:'100%', position:'relative',}}>


<a href="https://tron.allin60.com/">
<StaticImage className=""
alt="Todd Lambert Web development for photographers" src="../../static/assets/tronin60.jpg" />
</a>
<div class="post-content"><div style={{display:'flex', alignSelf:'center', position:'absolute', bottom:'66px',}}><div className="countdown" style={{display:'flex', justifyContent:'center', maxWidth:'600px', margin:'0px auto', color:'rgb(255, 255, 255)', textAlign:'center', padding:'1rem', fontSize:'200%', borderRadius:'12px', border:'0px solid rgb(17, 17, 17)', textShadow:'rgb(0, 0, 0) 1px 2px 0px'}}></div></div>

<h2 class="title">
  <a href="https://tron.allin60.com/">
    Boom
    </a>
</h2>

    <p style={{minWidth:'20vw', position:'relative', textAign:'center',}}><time>2 hours ago</time></p>

    </div>
</article>


   
</div>
</div>

          




    
    
    </Layout>
    </CustomBox>
  )
}
