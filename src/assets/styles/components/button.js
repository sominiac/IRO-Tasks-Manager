import styled from "styled-components";
import * as theme from "../themes/Theme.styled";

const Button = styled.button`
    width: 160px;
    height: 47px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: ${({ theme }) => theme.pages.auth.colors.buttonTextColor};
    background-color: ${({ theme }) => theme.colors.mainColor};
    border-radius: 40px;
    box-shadow: ${({ theme }) => theme.pages.auth.colors.buttonFilter};
`

const SecondaryButton = styled(Button)`
    height: 35px;
    background-color: ${({ theme }) => theme.colors.secondColor};
    box-shadow: ${({ theme }) => theme.pages.auth.colors.secondButtonFilter};
`

export { Button, SecondaryButton };