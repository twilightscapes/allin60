import * as React from "react"
import { Layout } from "../components/layout"

import GoBack from "../components/goBack"
import TronGuy from "../../static/assets/tron.svg"













export default function TronPage() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}



 
<section className="outer section section--gradient">
      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>
      
      <TronGuy className="character" style={{maxHeight:'30vh',  margin:'0 0 0 0',}} />

<h1>TRON</h1>
<ul>
{/* <li>Actor: Jeff Bridges</li> */}
<li>User: Alan Bradley</li>
<li>Allies: Yori, Kevin Flynn, Dumont</li>
<li>Enemies: Master Control Program, Sark</li>
</ul>
<blockquote>
Tron was a security program created by his user, Alan Bradley, to ensure the Master Control Program (MCP) ? a fully aware program at ENCOM -- was functioning normally, correctly, and within the rules of its programming. Obviously, Tron discovered the MCP was breaking the rules and threatening the system. With the help of program pals Yori and Kevin Flynn, he took on the powerful MCP and won by derezzing him with a virus and returned the digital world to a flourishing, free system.
      </blockquote>
      
      
      <GoBack />
          </div>


          



    </section>
    
    
    </Layout>

  )
}
