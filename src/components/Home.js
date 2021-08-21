import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <>
         <Container>
            <Section 
                title="Model S "
                description="Order Online for Touchless Delivery"
                backgroundImg="/images/model-s.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
                columnDirection="column"
            
            />

            <Section 
                title="Model Y "
                description="Order Online for Touchless Delivery"
                backgroundImg="/images/model-y.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
                columnDirection="column"
            
            />

            <Section 
                title="Model 3 "
                description="Order Online for Touchless Delivery"
                backgroundImg="/images/model-3.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
                columnDirection="column"
            
            />

            <Section 
                title="Model X "
                description="Order Online for Touchless Delivery"
                backgroundImg="/images/model-x.jpg"
                LeftBtnText="Custom Order"
                RightBtnText="Existing Inventory"
                columnDirection="column"
            
            />
             <Section 
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="/images/solar-panel.jpg"
                LeftBtnText="Order now"
                RightBtnText="Learn more"
                columnDirection="column"
            
            />
            <Section 
                title="Accessories"
                description="Money-back guarantee"
                backgroundImg="/images/accessories.jpg"
                LeftBtnText="Shop now"
                RightBtnText=""
                columnDirection="column"
            
            />
        </Container>

        </>
    )
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
