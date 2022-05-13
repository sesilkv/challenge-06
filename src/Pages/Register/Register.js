import React from "react";
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div class="wrap row m-0">
            <div class="col-md-8 img p-0">
                <div class="layer ">
                </div>
            </div>

            <div class="col-md-4 form my-auto">
                <div class="container">
                    <h3 class="mb-3">Binar Car Rental</h3>
                    <h2 class="mb-3">Create New Account</h2>
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
                        // value={auth.password}
                        // onChange={handleChange}
                        />

                        <Link to="/landingpage" type="submit" class="btn btn-primary w-100">Sign Up</Link>
                    </form>
                    <p>Already have an account? <Link to="/"><a>Login</a></Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Register