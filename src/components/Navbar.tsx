import styled from "styled-components";

const Container = styled("div")`
    width: 100vw;
    height: auto;
    background-color: #FFFFFF00;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    left: 5%;
    align-items: center;
    position: relative;
`

const Title = styled("h1")`
    margin: 10;
    white-space: nowrap;
    font-family: 'Changa One', cursive;
`

const Link = styled("a")`
    font-size: 1.5rem;
    margin: 1rem;
    cursor: pointer;
    color: initial;
    text-decoration: none;
    position: absolute;
    right: 10%;
    font-family: 'Changa One', cursive;
    @media (max-width: 700px) {
        position: initial;
    }
`

const Navbar = () => {
    return (
        <Container>
            <Title>
                TSC
            </Title>
            <Link href="#roadmap">
                HOME
            </Link>
        </Container>
    )
}

export default Navbar;