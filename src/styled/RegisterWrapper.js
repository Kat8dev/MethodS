import styled from "styled-components";
import { Colors } from "./globalStylesVariables";

export const RegisterWrapper = styled.div`
    color: #d68c45;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .container {
        padding: 60px 30px;
        border-radius: 10px;
        box-shadow: 5px 10px 18px #888888;
        .sign-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
        .sign-form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
                        padding: 7px 20px;
                        margin: 10px;
                        border-radius: 5px;
                        border-color: ${Colors.primeryColor};
                        &:focus {
                            outline: none;
                            box-shadow: 0 0 5px${Colors.primeryColor};
                        }
                    }
                } 
            }                  
        }
    }   
`;