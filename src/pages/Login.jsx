import React, { Component } from 'react';

class Login extends Component {
    onSubmit = event => {
        event.preventDefault();

        this.props.onLogin({
            username: this.usernameInput.value,
            password: this.passwordInput.value
        });
    }

    render() {
        return (
            <div id="login">
                <form onSubmit={this.onSubmit} className="login_form">
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Имя пользователя"
                        ref={input => this.usernameInput = input}
                    />
                </div>
                    
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        ref={input => this.passwordInput = input}
                    />
                </div>

                <button type="submit">Вход</button>
                </form>
            </div>
        );
    }
}

export default Login;