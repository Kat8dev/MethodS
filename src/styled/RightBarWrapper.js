import styled from "styled-components";
import { Colors } from "./globalStylesVariables/colors";

export const RightBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 2rem;    
    h4 {
        width: 100%;
        margin-bottom: 1rem;
        transition: 0.5s;
        text-align: center;
        cursor: pointer;
        font-size: 1.5rem;
        padding: 0.5rem;
        background-color: ${Colors.primeryColor};
        color: white;
        &:hover {
            background-color: ${Colors.primaryColorHover};
        }
    } {
        margin: 0.5rem;
        color: #aaa;
    }
  
`

export const RightBarHelperWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);  
    border-radius: 5px;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            border: solid 1px #aaaa;
        }
    } 
`