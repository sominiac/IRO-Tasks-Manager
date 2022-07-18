import { AuthPageStyle } from "../../../assets/styles/pages/Auth/AuthMain";
import { InputWithRightBorder, InputWithLeftBorder, Button, SecondaryButton } from "../../../assets/styles/components/_index";

function Auth() {
    return (
        <div className="auth">
            <AuthPageStyle /> {/* Подключаем глобальные стили страницы */}

            <div className="auth__wrapper">
                <div className="auth__login">
                    <div className="auth__welcome">
                        <div className="auth__logo">
                            <img className="auth__logo-icon" />
                        </div>

                        <span className="auth__welcome-text">Welcome<br />Back!</span>
                    </div>

                    <div className="auth__title">
                        <h1 className="auth__title-text">Авторизоваться</h1>
                    </div>

                    <div className="auth__login-form">
                        <div className="auth__login-item auth__login-item_login">
                            <span className="auth__login-lable">Введите email</span>
                            <InputWithRightBorder type="email" />
                        </div>

                        <div className="auth__login-item auth__login-item_password">
                            <span className="auth__login-lable">Введите пароль</span>
                            <InputWithLeftBorder type="password" />
                        </div>

                        <div className="auth__login-forget">
                            <a className="auth__login-link" href="#">Забыли пароль?</a>
                        </div>

                        <div className="auth__login-wrapper-button">
                            <Button>Войти</Button>
                        </div>
                    </div>

                    <div className="auth__register">
                        <span className="auth__register-text">Еще не зарегистрированы?</span>

                        <SecondaryButton>Зарегистрироваться</SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;