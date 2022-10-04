import styled from "styled-components";
import { Colors } from "./globalStylesVariables/colors";

export const CreateEWrapper = styled.div`
    min-height: 100vh;
    .form_div {
        h2 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        -webkit-box-shadow: 0px 0px 20px -9px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 20px -9px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 20px -9px rgba(0,0,0,0.75);
        padding: 3rem;
        margin: 1rem;
        form {
             display: flex;
             flex-direction: column;
             gap: 2rem;
             * {
                width: 100%;
             }
             button {
                margin-top: 1rem;
                background-color: ${Colors.primeryColor};
                border: none;
                padding: 8px;
                border-radius: 1.2rem;
                font-size: 1rem;
                letter-spacing: 0.5rem;
                font-weight: 900;
                color: white;
                transition: 0.5s;
                &:hover {
                    background-color: ${Colors.primaryColorHover};
                }
             }
             .mapbox {
                
             }
        }       
    }
    @media(min-width: 400px) {
        form {
            width: 300px;
        }
    }
`