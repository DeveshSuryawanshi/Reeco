import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
//Chakra Ui Modal imports
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
import EditModal from "./EditModal";

export default function ProductCard({ data, getProductID }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleApprove = () => {
    const newData = { status: "Approved" };
    getProductID(newData, data.id);
  };

  const Missing = (onClose) => {
    const newData = { status: "Missing" };
    getProductID(newData, data.id);
    onClose();
  };

  const MissingUrgent = (onClose) => {
    const newData = { status: "Missing-Urgent" };
    getProductID(newData, data.id);
    onClose();
  };

  return (
    <Container>
      <ProductName>
        <img src={data.img} alt="error" width={60} />
        <p>{data.title}</p>
      </ProductName>
      <Brand>{data.brand}</Brand>
      <Price>${data.price}/ 6*1LB</Price>
      <Quantity>{data.quantity} * 6 x 1LB</Quantity>
      <Total>{data.total}</Total>
      <Status>
        {data.status !== null && data.status === "Missing" ? (
          <ShowStatus style={{ backgroundColor: "#ED8936" }}>
            {data.status}
          </ShowStatus>
        ) : data.status==="Missing-Urgent"?(
          <ShowStatus style={{ backgroundColor: "#E53E3E" }}>
            {data.status}
          </ShowStatus>
        ):data.status === null ? (
          <ShowStatus >
            {data.status}
          </ShowStatus>
        ):(
          <ShowStatus style={{ backgroundColor: "#68D391" }}>
            {data.status}
          </ShowStatus>

        )}
        <ButtonsWrapper>
          <FaCheck size={20} className="icon" onClick={handleApprove} />
          <RxCross2 size={20} className="icon" onClick={onOpen} />

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Missing product</ModalHeader>
              <ModalCloseButton />
              <ModalBody>is '{data.title}...'urgent?</ModalBody>
              <ModalFooter>
                <Button
                  bg={"#1e633f"}
                  color={"white"}
                  mr={3}
                  onClick={() => Missing(onClose)}
                >
                  No
                </Button>
                <Button variant="ghost" onClick={() => MissingUrgent(onClose)}>
                  Yes
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <EditModal data={data} getProductID={getProductID}/>
        </ButtonsWrapper>
      </Status>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  border-bottom: solid lightgray 2px;
`;
const ProductName = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    text-align: left;
    font-size: 14px;
  }
`;
const Brand = styled.div`
  width: 120px;
  text-align: start;
  font-size: 15px;
`;
const Price = styled.div`
  width: 120px;
  text-align: start;
  font-size: 15px;
`;
const Quantity = styled.div`
  width: 120px;
  text-align: start;
  font-size: 15px;
`;
const Total = styled.div`
  width: 120px;
  text-align: start;
  font-size: 15px;
`;
const Status = styled.div`
  width: 330px;
  text-align: start;
  font-size: 15px;
  background-color: #f9fbfd;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShowStatus = styled.div`
  padding: 5px 15px;
  border-radius: 30px;
  color: white;
  margin-left: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-right: 20px;
  color: gray;

  .icon:hover {
    cursor: pointer;
  }
`;

