import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

export const AddButton = styled.button`
  width: 64px;
  height: 64px;
  font-size: 4rem;
  backgound-color: white;   
  border: none; 
  color: #4c956c;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:hover {
    color: #2c6e49;
  }
`;

const Btn = ({onClick}) => {
  return (
    <>
      <AddButton onClick={onClick}><AiOutlinePlus/></AddButton>
    </>
  )
}

export default Btn;


