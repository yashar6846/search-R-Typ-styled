import React from 'react'
import { Wrapper, Row, Header, Image } from "./components/styled/index"
import owl from './images/owl.svg'
const App = () => {
    return(
     <div>
       <Wrapper>
         <Row>
           <Header>Joker</Header>
           <Image src={owl} alt="Baykus" />
         </Row>
        <h1>baykos</h1>
        </Wrapper>
     </div>
    )
}

export default App
