import * as React from "react"
import { Layout } from "../components/layout"

import GoBack from "../components/goBack"
import SamFlynn from "../../static/assets/sam-flynn.svg"













export default function SamPage() {
   return (


    
    <Layout className="thanks-page">

{/* <Seo title={`Content License Agreement Here`} /> */}
{/* <Seo image="/default-og-image.jpg"/> */}



 
<section className="outer section section--gradient">
      <div className="container" style={{padding: '2rem 10%'}}>

      <div className="mobile"><GoBack /></div>
      
      <SamFlynn className="character" style={{maxHeight:'30vh',  margin:'0 0 0 0',}} />

<h1>Sam Flynn</h1>
<ul>
<li>Actor: Garrett Hedlund</li>
{/* <li>User: Alan Bradley</li> */}
<li>Allies: Quorra, Kevin Flynn, Alan Bradley</li>
<li>Jarvis, Rinzler, Black Guard, Clu</li>
</ul>
<blockquote>
Born in 1983, Sam is the son of Kevin Flynn and Jordan Canas. He was deeply affected by the loss of his mother in an auto accident so early in his life and then by the mysterious disappearance of his father in 1989. Sam refuses to have anything to do with ENCOM, the computer company once headed by his father. For many years, Sam has chosen to retreat from the public eye and focus his time on daring feats and extreme sports. Will Sam be the one to unlock the mystery of his father's disappearance?
      </blockquote>
      
      
      <GoBack />
          </div>


          



    </section>
    
    
    </Layout>

  )
}
