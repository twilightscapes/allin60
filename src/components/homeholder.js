
import * as React from "react"
import styled from "styled-components"
import Panel1 from "./panel1"
import Panel2 from "./panel2"
import Panel3 from "./panel3"
import Panel4 from "./panel4"
import Panel5 from "./panel5"
import Panel6 from "./panel6"
import Panel7 from "./panel7"
import Panel8 from "./panel8"
import Panel9 from "./panel9"
import Panel10 from "./panel10"
import Panel11 from "./panel11"
import Panel12 from "./panel12"
import Panel13 from "./panel13"

const CustomBox = styled.div`

`

const HomeHolder = () => (
<CustomBox style={{}}>




<div className="horizontal-holder">
<div className="RArrow">{/* <span></span> */}</div>
<div className="horizontal-scroll panels" style={{}}>
<div className="" style={{height:'1px'}}></div>

<Panel1 />
<Panel2 />
<Panel3 />
<Panel4 />
<Panel5 />
<Panel6 />
<Panel7 />
<Panel8 />
<Panel9 />
<Panel10 />
<Panel11 />
<Panel12 />
<Panel13 />
</div>
</div>
</CustomBox>
)
export default HomeHolder