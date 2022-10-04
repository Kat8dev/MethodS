import styled from "styled-components";
import './globalStylesVariables/globalStyles.css';
import { Colors } from "./globalStylesVariables/colors";

export const EventsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 22rem;
    
    .header {  
        display: flex;
        flex-direction: column;
        h2 {
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
        }
    }  
    .event_card {
        &:hover {
            background-color: #C6EBC5;
        }
        transition: 0.5s;
        margin: 0.5rem;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
       
        padding: 2rem 1rem;
        border-top: 0.2rem solid #ef476f;
        font-size: 1rem;
        *{
            margin: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-weight: 200;
        }
        span {
            font-size: 0.8rem;
            font-weight: bold;
        }
    }
    @media(min-width: 35rem) {
             
    }
`