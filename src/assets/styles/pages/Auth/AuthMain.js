import * as theme from "../../themes/Theme.styled";
import { createGlobalStyle } from "styled-components";

export const AuthPageStyle = createGlobalStyle`
.auth {
    max-width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    background: ${({ theme }) => theme.pages.auth.colors.authBackgroundColor};
    position: relative;
   
    &::after {
        content: "";
        width: 100%;
        height: 37vh;
        background-image: url(${({ theme }) => theme.pages.auth.images.backgroundWaves});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        bottom: 0px;
        left: 0px;
    }

    &__wrapper {
        max-width: 570px;
        margin: 0 auto;
        padding: 0 15px;
    }
    
    &__login {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    
    &__welcome {
        display: flex;
        align-items: center;
        padding: 6px 47px 6px 10px;
        background-color: ${({ theme }) => theme.pages.auth.colors.welcomeBackgroundColor};
        border-radius: 7px;
        position: absolute;
        top: 28px;
        left: -475px;
        filter: ${({ theme }) => theme.pages.auth.colors.welcomeFilter};
    }
    
    &__logo {
        width: 142px;
        height: 137px;
        margin-right: 39px;
    }
    
    &__logo-icon {
        content: url(${({ theme }) => theme.pages.auth.icons.logo});
        width: 100%;
        height: 100%;
    }
    
    &__welcome-text {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 50px;
        line-height: 60px;
        color: #70C3D6;
        text-shadow: 6px 6px 15px rgba(167, 219, 221, 0.17);
    }
    
    &__title {
        background-color: ${({ theme }) => theme.colors.mainColor};
        border-radius: 0 0 40px 40px;
        margin-bottom: 95px;
        box-shadow: ${({ theme }) => theme.pages.auth.colors.titleFilter};
    }
    
    &__title-text {
        padding: 71px 79px 72px 80px;
        font-family: "Ubuntu", sans-serif;
        font-weight: 400;
        font-size: 25px;
        line-height: 36px;
        color: #FFFFFF;
    }
    
    &__login-form {
        width: 100%;
        margin-bottom: 127px;
    }
    
    &__login-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    
        &::after {
            content: "";
            width: 100%;
            height: 32px;
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: cover;
            position: absolute;
            bottom: -32px;
            left: 0px;
        }
    }
    
    &__login-item_login {
        margin-bottom: 97px;
    
        &::after {
            background-image: url(${({ theme }) => theme.pages.auth.images.loginWave});
        }
    }
    
    &__login-item_password {
        margin-bottom: 39px;
    
        &::after {
            background-image: url(${({ theme }) => theme.pages.auth.images.passwordWave});
        }
    }

    &__login-lable {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.mainTextColor};
    }

    &__login-forget {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 39px;
    }

    &__login-link {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: ${({ theme }) => theme.colors.secondTextColor};
    }

    &__login-wrapper-button {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    &__register {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    &__register-text {
        display: block;
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.mainTextColor};
        margin-bottom: 39px;
    }
}
`