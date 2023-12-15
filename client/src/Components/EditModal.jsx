import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";

export default function EditModal({data, getProductID}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [reason, setReason] = useState(null);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = () =>{
    if(price!=="" && quantity!==""){
      const newData = {price,quantity, status:"Quantity and Price updated"}
      getProductID(newData,data.id)
    }else if(price!==""){
      const newData = {price, status: "Price updated"}
      getProductID(newData,data.id)
    }else{
      const newData = {quantity, status: "Quantity updated"}
      getProductID(newData,data.id)
    }
  }

  return (
    <div>
      <EditButton onClick={onOpen}>Edit</EditButton>
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent padding={5}>
          <ModalHeader pb={0} fontSize={15}>{data.title}...</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BrandName>{data.brand}</BrandName>
            <Wrapper>
              <Image src={data.img} alt="error"/>
              <Content>
                <PriceContainer>
                  <Price>Price ($)</Price>
                  <div>
                    <Input type="text" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
                    <span className="span">/ 6 * 1LB</span>
                  </div>
                </PriceContainer>
                <QuantityContainer>
                  <Quantity>Quantity</Quantity>
                  <InputContainer>
                    <FaMinus className="logo"/>
                    <Input type="text" placeholder="Quantity" onChange={((e)=>setQuantity(e.target.value))}/>
                    <FaPlus className="logo"/>
                    <span className="span">x 6 * 1LB</span>
                  </InputContainer>
                </QuantityContainer>
                <TotalContainer>
                  <Total>Total</Total>
                  <TotalNumber>${data.total}</TotalNumber>
                </TotalContainer>
              </Content>
            </Wrapper>
            <ReasonContainer>
              <Heading>Choose reason <span>(optional)</span></Heading>
              <ReasonsWrapper>
               <Reason style={{backgroundColor: reason==="Missing-Product" ? "#1e633f" : null, color: reason==="Missing-Product" ? "white" : null}} onClick={()=>setReason("Missing-Product")}>Missing product</Reason>
               <Reason style={{backgroundColor: reason==="Quantity-is-not-the-same" ? "#1e633f" : null, color: reason==="Quantity-is-not-the-same" ? "white" : null}} onClick={()=>setReason("Quantity-is-not-the-same")}>Quantity is not the same</Reason>
               <Reason style={{backgroundColor: reason==="Price-is-not-the-same" ? "#1e633f" : null, color: reason==="Price-is-not-the-same" ? "white" : null}} onClick={()=>setReason("Price-is-not-the-same")}>Price is not the same</Reason>
               <Reason style={{backgroundColor: reason==="Other" ? "#1e633f" : null, color: reason==="Other" ? "white" : null}} onClick={()=>setReason("Other")}>Other</Reason>
              </ReasonsWrapper>
            </ReasonContainer>
          </ModalBody>
          <ModalFooter>
            <Button color={"green"} variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={handleSubmit}>Send</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

const EditButton = styled.button``;

const BrandName = styled.p`
   font-size: 15px;
   color: gray;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 150px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  gap: 20px;
  width: 60%;

  .span{
    margin-left: 10px;
    color: gray;
  }
`

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

const TotalContainer = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
`

const Price = styled.p`
  color: gray;
`
const Quantity = styled.p`
  color: gray;
`
const Total = styled.p`
  color: gray;
`

const Input = styled.input`
  border: solid lightgray 1px;
  border-radius: 5px;
  width: 80px;
  height: 35px;
  margin-right: 10px;
  margin-left: 10px;
  padding: 10px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  .logo{
    font-size: 20px;
    color: white;
    background-color: #68D391;
    border-radius: 50px;
  }
`
const TotalNumber = styled.p`
  color: gray;
`

const ReasonContainer = styled.div`
  
`

const Heading = styled.p`
  font-weight: 700;

  span{
    font-size: 10px;
    color: gray;
  }
`

const ReasonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`

const Reason = styled.div`
  padding: 5px 10px;
  border: solid lightgray 1px;
  border-radius: 50px;
  font-size: 12px;
  cursor: pointer;
`
