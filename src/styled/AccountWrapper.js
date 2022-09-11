import styled from "styled-components";
import { Colors } from "./globalStylesVariables"; 

export const AccountWrapper = styled.div`
    .account {
         height: 100vh;
         margin: 10px;
         * {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
         }           
         
         @media(min-width: 600px){
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-template-rows: 3fr 1fr;
         }

        .avatar {
            width: 170px;
            .image {
                width: 170px;
                height: 170px;
                border-radius: 50%;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
            .img_uploads {
                display: flex;
                justify-content: center;
                align-items: center;
                input {
                    display: none;
                }
                label {
                    font-size: 3rem;
                    color: ${Colors.primeryColor};
                    cursor: pointer;
                    &:hover {
                        color: ${Colors.primaryColorHover};
                    }
                }
                button {
                    border: none;
                    background-color: transparent;
                    font-size: 1rem;
                    cursor: pointer;
                    color: #2c6e49;
                    &:disabled {
                        color: #aaaa;
                    }
                }
            }
            @media(min-width: 600px) {
                grid-column: 1;
                grid-row: 1;
                align-self: start;
            }
        }
        .about_me {
            max-width: 600px;
            color: #4c956c;
            @media(min-width: 600px) {
                grid-column: 2;
                grid-row: 1;
                align-self: start;
            }
        }
        .create_group {          
            div {
                margin: auto;
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
            } 
            @media(min-width: 600px) {
                grid-column: span 2;
                grid-row: 2;                
            }
        }  
    }
           
`;
