import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";

export default function OrderHeader() {
  return (
    <Container>
      <SubHeader1>
        Orders <FaChevronRight size={10} />{" "}
        <span className>Order 32457ABC</span>
      </SubHeader1>
      <SubHeader2>
        <OrderId>Order 32457ABC</OrderId>
        <OrderButtons>
          <BackBtn>Back</BackBtn>
          <ApproveBtn>Approve order</ApproveBtn>
        </OrderButtons>
      </SubHeader2>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const SubHeader1 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    text-decoration: underline;
  }
`;
const SubHeader2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const OrderId = styled.div`
  font-size: 22px;
  font-weight: 700;
`;
const OrderButtons = styled.div`
  display: flex;
  gap: 30px;
`;
const BackBtn = styled.button`
  padding: 0px 30px;
  height: 40px;
  border-radius: 50px;
  border: solid #1e633f 1px;
  color: #1e633f;
  font-weight: 600;
`;
const ApproveBtn = styled.button`
  padding: 0px 30px;
  height: 40px;
  border-radius: 50px;
  background-color: #1e633f;
  color: white;
  font-weight: 600;
`;
