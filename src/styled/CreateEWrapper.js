import styled from "styled-components";
import { Colors } from "../styled/globalStylesVariables";

export const CreateEWrapper = styled.div`
    height: 100vh;
    color: ${Colors.inputLabelColor};
    div {
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
    }
    .form_div {
        form {
             display: flex;
             flex-direction: column;
             label {
                margin: 0;
                letter-spacing: 1px;
             }
             input {
                margin-top: 30px;
                outline: 0;
                border-width: 0 0 2px;
                &:focus {
                    border-color: black;
                }
             }
             button {
                margin-top: 40px;
                background-color: ${Colors.primeryColor};
                border: none;
                padding: 8px;
                border-radius: 1.2rem;
                font-size: 1rem;
                letter-spacing: 0.5rem;
                font-weight: 900;
                color: white;
                &:hover {
                    background-color: ${Colors.primaryColorHover};
                }
             }
        }       
    }
`