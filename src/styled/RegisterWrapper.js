import styled from "styled-components";
import { Colors } from "./globalStylesVariables/colors";
import './globalStylesVariables/globalStyles.css';

export const RegisterWrapper = styled.div`
    color: #d68c45;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .container {
        padding: 1rem;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
        .sign-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h2 {
                font-size: 1.5rem;
            }
            p {
               span {
                    margin: 4px;
                    padding: 3px;
                    * {
                        color: ${Colors.primeryColor};
                        text-decoration: inherit;
                        &:hover {
                            color: #2c6e49;
                            text-decoration: underline;
                        }
                    }
               }
            }
        }
        hr {
            margin: 2rem;
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            button {
                background-color: ${Colors.primeryColor};
                cursor: pointer;
                border: none;
                color: white;
                font-size: 16px;
                border-radius: 5px;
                padding: 8px  12px;
                margin-top: 20px;
                &:hover {
                    background-color: ${Colors.primaryColorHover};
                }
            }
            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 10px;
                input {
                    padding: 0 30px;
                    margin: 10px;
                }
            }                             
        }
    }   
`;