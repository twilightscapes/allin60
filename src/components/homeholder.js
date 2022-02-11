
import * as React from "react"
import styled from "styled-components"
import Panel1 from "./panel1"
import Panel2 from "./panel2"
import Panel3 from "./panel3"
import Panel4 from "./panel4"
import Panel5 from "./panel5"

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

</div>
</div>
</CustomBox>
)
export default HomeHolder