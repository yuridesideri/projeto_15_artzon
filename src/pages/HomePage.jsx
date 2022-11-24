import styled from "styled-components";


export default function HomePage(props){

    

    return (
        <StyledHomePage>
            <h1>Hello World</h1>
        </StyledHomePage>
    );
}

const StyledHomePage = styled.div`
    h1 {
        color: black;
    }
`