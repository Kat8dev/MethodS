import styled from "styled-components";

export const AboutWrapper = styled.div`
        .about_main {
            height: 100vh;
            * {     
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 10px;
            }

            @media(min-width: 800px) {
                display: grid;
                grid-template-columns: 1fr 1fr;   
            }
            
            .img-div {
                img {
                    width: 173px;
                    height: 235.5px;
                    border-radius: 1px;
                    @media(min-width: 800px) {
                        width: 346px;
                        height: 471px;
                        grid-column: 1;
                    }
                }
            }
            
            .text_div {                 
                h2 {
                    color: #84a59d;
                } 
                color: #555b6e;  
                width: 400px;    
                @media(min-width: 800px) {
                    grid-column: 2;
                }        
            }
    
    }   
`