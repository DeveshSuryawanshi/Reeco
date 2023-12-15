import styled from "styled-components";
import { PiPrinterLight } from "react-icons/pi";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getProduct, updateProduct } from "../Redux/ProductReducer/action";

export default function ProductList() {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((store) => {
    return {
      products: store.ProductReducer.products,
      isLoading: store.ProductReducer.isLoading,
    };
  });

  const getProductID = (newData,ID) => {
    dispatch(updateProduct(newData,ID));
  }

  useEffect(()=>{
    dispatch(getProduct());
  },[dispatch])

  return (
    <Container>
      <Header>
        <Input type="search" placeholder="Search..." />
        <BtnWrapper>
          <AddItemButton>Add item</AddItemButton>
          <PiPrinterLight size={30} color="#1e633f" />
        </BtnWrapper>
      </Header>
      <ListContainer>
        <ListHeader>
          <ProductName>Product name</ProductName>
          <Brand>Brand</Brand>
          <Price>Price</Price>
          <Quantity>Quantity</Quantity>
          <Total>Total</Total>
          <Status>Status</Status>
        </ListHeader>
        <ListContent>
          {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#1e633f"
              size="xl"
              m={10}
            />
          ) : (
            products?.map((el, i) => {
              return <ProductCard key={i} data={el} getProductID={getProductID} />;
            })
          )}
        </ListContent>
      </ListContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  border: solid lightgray 1px;
  border-radius: 10px;
`;

const Header = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
`;

const Input = styled.input`
  width: 400px;
  padding-left: 15px;
  border-radius: 50px;
  border: solid lightgray 1px;
  height: 40px;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const AddItemButton = styled.button`
  padding: 0px 30px;
  height: 40px;
  border-radius: 50px;
  border: solid #1e633f 1px;
  color: #1e633f;
  font-weight: 600;
`;

const ListContainer = styled.div`
  width: 90%;
  margin: auto;
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  border: solid lightgray 1px;
  border-radius: 10px 10px 0px 0px;
  height: 50px;
  color: gray;
  font-size: larger;
`;

const ProductName = styled.p`
  width: 350px;
`;
const Brand = styled.p`
  width: 120px;
  text-align: start;
`;
const Price = styled.p`
  width: 120px;
  text-align: start;
`;
const Quantity = styled.p`
  width: 120px;
  text-align: start;
`;
const Total = styled.p`
  width: 120px;
  text-align: start;
`;
const Status = styled.p`
  text-align: start;
  margin-left: 20px;
`;

const ListContent = styled.div``;
