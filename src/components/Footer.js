import styled from "styled-components";

function Footer() {
    return (
        <div>
            <FooterContainer>
            <CountItems>0 products added </CountItems>
            <Button>Go to cart</Button>
            </FooterContainer>
        </div>
    )
}

export default Footer

const FooterContainer = styled.div `
display: flex;
justify-content: flex-end;
align-items: center;
background-color: white;
position: absolute;
right: 0;
left: 0;
bottom: 0;
padding: 30px;
border-top: 1px solid grey;
`;

const Button = styled.button `
margin-left:5px;
width: 85px;
height: 30px;
background-color: #5f729d;
border: 2px solid #5f729d;
border-radius: 4px;
color: white;
font-size: 12px;
margin-right: 40px;
cursor: pointer`;

const CountItems = styled.div `
font-size: 12px;`;
