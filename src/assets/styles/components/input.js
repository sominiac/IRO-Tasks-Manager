import styled from "styled-components";
import * as theme from "../themes/Theme.styled";

const Input = styled.input`
width: 100%;
border: none;
border-bottom: 1px solid ${({ theme }) => theme.pages.auth.colors.inputBorderColor};
background-color: transparent;
outline: none;
`;

const InputWithRightBorder = styled(Input)`
border-right: 1px solid ${({ theme }) => theme.pages.auth.colors.inputBorderColor};
`;

const InputWithLeftBorder = styled(Input)`
border-left: 1px solid ${({ theme }) => theme.pages.auth.colors.inputBorderColor};
`;

export { Input, InputWithRightBorder, InputWithLeftBorder };