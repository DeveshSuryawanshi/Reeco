import styled from "styled-components";
import { Link } from "react-router-dom";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
//User popover
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Link to={"/"} className="link">
          <Logo>Reeco</Logo>
        </Link>

        <Link className="link">
          <PageLink>Store</PageLink>
        </Link>

        <Link className="link">
          <PageLink>Orders</PageLink>
        </Link>

        <Link className="link">
          <PageLink>Analytics</PageLink>
        </Link>
      </Wrapper>
      <Wrapper>
        <PiShoppingCartLight size={30} color="white" />
        <Popover>
          <PopoverTrigger>
            <UserProfile>
              Hello, James <FaChevronDown color="white" />
            </UserProfile>
          </PopoverTrigger>
          <PopoverContent mr={10} >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverImage
              src="https://bit.ly/dan-abramov"
              alt="James Bond"
            />
            <PopoverHeader>James Bond</PopoverHeader>
            <PopoverBody>
              Are you sure you want to have that milkshake?
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 60px;
  background-color: #1e633f;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .link {
    text-decoration: none;
    margin: 0px;
  }
`;

const Logo = styled.div`
  color: white;
  font-size: 30px;
  margin-right: 40px;
`;

const PageLink = styled.p`
  padding: 10px;
  color: white;
  font-size: 17px;
  margin: 0px;
  width: 100px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 5px;
  margin-left: 50px;
`;


const PopoverImage = styled.img`
  border-radius: 50%;
  width: 70px;
  margin: auto;
  margin-top: 20px;
;
`