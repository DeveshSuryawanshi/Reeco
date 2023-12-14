import styled from "styled-components"
import OrderHeader from "../Components/OrderHeader"
import OrderDetails from "../Components/OrderDetails"
import ProductList from "../Components/ProductList"


export default function HomePage() {
  return (
    <Container> 
      <OrderHeader/>
      <Wrapper>
        <OrderDetails/>
        <ProductList/>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  max-width: 100%;
  background-color: #f9fbfd;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 85%;
  margin: auto;
`