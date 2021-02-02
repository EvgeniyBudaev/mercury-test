import React, { Component } from "react";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/index";
import Input from "../../ui/input";
import { connect } from "react-redux";
import { auth } from "../../../redux/actions/auth";

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Login extends Component {
    state = {
        openPopup: false,
        isFormValid: false,
        formControls: {
            email: {
                value: "",
                type: "email",
                label: "Email",
                name: "email",
                placeholder: "Введите здесь Вашу почту",
                errorMessage: "Введите корректный email!",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: "",
                type: "password",
                label: "Пароль",
                name: "password",
                placeholder: "Пароль не менее 6 символов",
                errorMessage: "Неверный пароль!",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    };

    handleClosePopup = (openPopup) => openPopup

    loginHandler = () => {

        if(this.state.formControls.password.value === this.props.auth.password && this.state.formControls.email.value === this.props.auth.email) {
            console.log('валидно')

            localStorage.setItem('token', '345token5fgg46')
            localStorage.setItem('email', this.state.formControls.email.value)
            localStorage.setItem('password', this.state.formControls.password.value)
        }

        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            false
        );

    };

    onSubmitHandler = event => {
        event.preventDefault();
    };

    validateControl = (value, validation) => {
        if (!validation) {
            return true;
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (validation.email) {
            isValid = validateEmail(value) && isValid;
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    };

    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };
        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);
        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid;
        });

        this.setState({
            formControls,
            isFormValid
        });
    };

    renderInputs = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    name={control.name}
                    placeholder={control.placeholder}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            );
        });
    };

    render() {

        return (
            <div className={styles.Login}>
                <form onSubmit={this.onSubmitHandler}>
                    <div className={styles.Login__inner}>
                        <div className={styles.Login__title}>
                            <h2>Учетная запись</h2>
                        </div>
                        <div className={styles.Login__content}>
                            <div className={styles.Login__inputs}>{this.renderInputs()}</div>
                            <div className={styles.Login__btn}>
                                <Link to={ROUTES.HOME} className={styles.link}>
                                    <button
                                        type="success"
                                        value="Войти"
                                        onClick={() => this.loginHandler(this.state.openPopup)}
                                        disabled={!this.state.isFormValid}
                                    >
                                        Войти
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);