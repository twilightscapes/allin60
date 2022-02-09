import * as React from "react"
import { Layout } from "../components/layout"

import GoBack from "../components/goBack"
import QuoraAss from "../../static/assets/quora-ass.svg"













export default function QuorraPage() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}



 
<section className="outer section section--gradient">
      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>
      
      <QuoraAss className="character" style={{maxHeight:'30vh',  margin:'0 0 0 0',}} />

<h1>Quorra</h1>
<ul>
<li>Actor: Olivia Wilde</li>
{/* <li>User: Alan Bradley</li> */}
<li>Allies: Kevin Flynn, Sam Flynn, Castor</li>
<li>Clu, Jarvis, Black Guard, Sentries</li>
</ul>
<blockquote>
A program, adept warrior, and confidante of Kevin Flynn's in the TRON System.
      </blockquote>
      
      
      <GoBack />
          </div>


          



    </section>
    
    
    </Layout>

  )
}
