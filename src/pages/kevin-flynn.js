import * as React from "react"
import { Layout } from "../components/layout"

import GoBack from "../components/goBack"
import KevinFlynn from "../../static/assets/kevin-flynn.svg"













export default function KevinPage() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}



 
<section className="outer3 section3 section--gradient">
      {/* <div className="container" style={{padding: '2rem 10%'}}> */}

      <div className="mobile"><GoBack /></div>
      
      <KevinFlynn className="character" style={{maxHeight:'30vh',  margin:'0 0 0 0',}} />

<h1>Kevin Flynn</h1>
<ul>
<li>Actor: Jeff Bridges</li>
{/* <li>User: Alan Bradley</li> */}
<li>Allies: Quorra, Sam Flynn</li>
<li>Jarvis, Rinzler, Black Guard, all of Clu's faithful</li>
</ul>
<blockquote>
A brilliant game designer, Kevin Flynn left ENCOM after being fired by Ed Dillinger who claimed to have created several of Flynn's games. When Flynn broke into the company to prove Dillinger a thief, he became the first human-being to enter the astonishing digital world of the Grid. He returned from the virtual world triumphant over Dillinger, married Jordan Canas, and had a son, Sam. Flynn claimed he made an incredible discovery that was going to revolutionize the world, but he mysteriously disappeared in 1989 before revealing his secret. There have been rumors of Flynn sightings over the years, but no concrete proof. An organization known as Flynn Lives has been investigating his whereabouts for years. Where IS Kevin Flynn?
      </blockquote>
      
      
      <GoBack />
          {/* </div> */}


          



    </section>
    
    
    </Layout>

  )
}
