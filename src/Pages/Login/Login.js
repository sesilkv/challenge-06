import React from "react";
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div class="wrap row m-0">
            <div class="col-md-8 img p-0">
                <div class="layer ">
                </div>
            </div>

            <div class="col-md-4 form my-auto">
                <div class="container">
                    <h3 class="mb-3">Binar Car Rental</h3>
                    <h2 class="mb-3">Welcome, Admin BCR</h2>
                    <form action="/" method="POST">
                        <label for="email" class="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control mb-2"
                            placeholder="Contoh: johndee@gmail.com"
                           />

                        <label for="password" class="form-label">Password</label>
                        <input
                        type="password"
                        name="password"
                        className="form-control mb-4"
                        aria-describedby="passwordHelpBlock"
                        placeholder="6+ karakter"
                        />

                        <Link to="/dashboard" type="submit" class="btn btn-primary w-100">Sign In</Link>
                    </form>
                    <p>Belum punya akun? <Link to="/register"><a>Register</a></Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Login