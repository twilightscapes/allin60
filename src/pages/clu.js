import * as React from "react"
import { Layout } from "../components/layout"

import GoBack from "../components/goBack"
import CluGuy from "../../static/assets/clu.svg"













export default function CluePage() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}



 
<section className="outer section section--gradient">
      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>
      
      <CluGuy className="character evil" style={{maxHeight:'30vh',  margin:'0 0 0 0',}} />

<h1>CLU</h1>
<ul>
<li>Actor: Jeff Bridges</li>
<li>User: Kevin Flynn</li>
<li>Allies: Jarvis, Rinzler, Black Guard, Sentries</li>
<li>Enemies: Programs defying system rules</li>
</ul>
<blockquote>
Clu was originally a search program created by Kevin Flynn to explore inside the ENCOM mainframe for proof he created ENCOM's most-popular games. Clu was found and destroyed by the Master Control Program. Flynn created another program named CLU after returning from the Grid with a more specific task in mind.
      </blockquote>
      
      
      <GoBack />
          </div>


          



    </section>
    
    
    </Layout>

  )
}
