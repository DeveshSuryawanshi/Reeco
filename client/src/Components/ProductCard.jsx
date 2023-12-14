import styled from 'styled-components'

export default function ProductCard() {
  return (
    <Container>
        <ProductName>
            <img src="https://drive.google.com/drive/folders/1yGWs1hFkMS0NxPGGyLIX9j5YgKSaMzuB" alt="error" />
            <p>Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid</p>
        </ProductName>
        <Brand></Brand>
        <Price></Price>
        <Quantity></Quantity>
        <Total></Total>
        <Status></Status>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
`
const ProductName = styled.div`
    width: 350px;
`
const Brand = styled.div`
    width: 120px;
    text-align: start;
`
const Price = styled.div`
    width: 120px;
    text-align: start;
`
const Quantity = styled.div`
    width: 120px;
    text-align: start;
`
const Total = styled.div`
    width: 120px;
    text-align: start;
`
const Status = styled.div`
    width: 120px;
    text-align: start;
`