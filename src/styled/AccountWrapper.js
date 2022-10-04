import styled from "styled-components";
import { Colors } from "./globalStylesVariables/colors"; 

export const AccountWrapper = styled.div`
    .account {
         min-height: 100vh;
         margin: 5rem;
         display: flex;
         flex-direction: column;        
         gap: 5rem;
                 
        .avatar {
            display: flex;
            flex-direction: column;   
            justify-content: center;
            max-width: 240px;
            .image {
                max-width: 240px;
                img{                  
                    max-width: 240px;
                    border-radius: 5px;
                }
                border-radius: 50%;
                -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.26);
                -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.26);
                box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.26);
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
                    transition: 0.5s;
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
        }
    
        .create_group {   
            max-width: 240px;  
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;     
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
                transition: 0.5s;
                &:hover {
                color: #2c6e49;
                }
            } 
        }  
    }
    @media(min-width: 600px) {
        .account {
             flex-direction: row;
             justify-content: space-evenly;
             align-items: start;
        }
       
     }           
`;
