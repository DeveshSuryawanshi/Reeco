import styled from "styled-components"

export default function OrderDetails() {
  return (
    <Container>
        <DetailsBox>
            <Heading>Supplier</Heading>
            <Content>East Coast fruits & vegetables</Content>
        </DetailsBox>
        <DetailsBox>
            <Heading>Shipping date</Heading>
            <Content>Thu,Feb 10</Content>
        </DetailsBox>
        <DetailsBox>
            <Heading>Total</Heading>
            <Content>$15,028.3</Content>
        </DetailsBox>
        <DetailsBox>
            <Heading>Category</Heading>
            <Content></Content>
        </DetailsBox>
        <DetailsBox>
            <Heading>Department</Heading>
            <Content>300-444-678</Content>
        </DetailsBox>
        <DetailsBox id="last-container">
            <Heading>Status</Heading>
            <Content>Awaiting your approvel</Content>
        </DetailsBox>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid lightgray 1px;
  border-radius: 10px;
  padding: 20px;
  margin: 40px 0px;
  background-color: white;

  #last-container{
    border-right: none;
  }
`

const DetailsBox = styled.div`
    padding: 0px 20px;
    text-align: start;
    border-right: solid lightgray 1px;
    width: 100%;
    height: 80px;
`

const Heading = styled.p`
    font-size: 13px;
    color: gray;
    font-weight: 500;
    margin-bottom: 5px;
`

const Content = styled.div`
    font-weight: 700;
`
