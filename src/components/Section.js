import React from 'react';
import styled from 'styled-components/macro';
import Fade from 'react-reveal/Fade';

const Section = ({ title, description, LeftBtnText, RightBtnText, backgroundImg, columnDirection}) => {
    return (
        <Wrap bgImage={backgroundImg} columnBg={columnDirection}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            
            

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {LeftBtnText}
                        </LeftButton>
                        {RightBtnText && 
                            <RightButton>
                                {RightBtnText}

                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>

                    <DownArrow src="/images/down-arrow.svg" />

            </Buttons>
           
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: ${props => `${props.columnBg}`};
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("${props.bgImage}")`};
`;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    color: white;
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;


const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px; 
    cursor: pointer; 
`;

const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    opacity: 0.6;
`;

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    margin-left: 253px;
    animation: animationDown infinite 1.5s;
    oveflow-x: hidden;
`;



const Buttons = styled.div`

`;