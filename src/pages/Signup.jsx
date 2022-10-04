import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { RegisterWrapper } from "../styled/RegisterWrapper";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {

    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();

    const { isFetching } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== repeatPasswordRef.current.value) {
            repeatPasswordRef.current.setCustomValidity("Contraseñas no coinciden")
        } else {
            const user = {
                username: userNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                navigate("/signin");
            } catch (err) {
                console.log(err);
                // TODO: bugsnag
            }
        }
    }

    return (
        <>
            <RegisterWrapper>
                <div className="container">
                    <div className="sign-header">
                        <h2>Registrate para obtener una cuenta gratuita</h2>
                        <p>
                            Ya tienes una cuenta?
                            <span>
                                <Link to="/signin">Iniciar la sesión</Link>
                            </span>
                        </p>
                    </div>
                    <hr />
                    <form action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Nombre del usuario</label>
                            <input
                                className="input input-bordered input-accent w-full max-w-xs"
                                id="username"
                                ref={userNameRef}
                                required
                            />
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                className="input input-bordered input-accent w-full max-w-xs"
                                id="email"
                                ref={emailRef}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input
                                className="input input-bordered input-accent w-full max-w-xs"
                                id="password"
                                type="password"
                                ref={passwordRef}
                                required
                            />
                            <label htmlFor="repeatPassword">Repite contraseña</label>
                            <input
                                className="input input-bordered input-accent w-full max-w-xs"
                                id="repeatPassword"
                                type="password"
                                ref={repeatPasswordRef}
                                required
                            />
                        </div>
                        <button disabled={isFetching}>
                            {isFetching ? (
                                <progress className="progress w-56"></progress>
                            ) : (
                                "Crea la cuenta"
                            )}
                        </button>
                    </form>
                </div>
            </RegisterWrapper>
            <Footer />
        </>
    )
}

export default Signup;







/*import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Footer from "../components/Footer";
import { RegisterWrapper } from "../styled/RegisterWrapper";

const Signup = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await createUser(user.email, user.password);
            navigate("/account/username");
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    return (
        <>
            <RegisterWrapper>
                <div className="container">
                    <div className="sign-header">
                        <h1>Registrate para obtener una cuenta gratuita</h1>
                        <p>
                            Ya tienes una cuenta?
                            <span>
                                <Link to="/signin">Iniciar la sesión</Link>
                            </span>
                        </p>
                    </div>
                    <div className="sign-form">
                        <form action="#" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Correo electrónico</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <button>Crea la cuenta</button>
                        </form>
                    </div>
                </div>
            </RegisterWrapper>
            <Footer />
        </>
    )
}

export default Signup;*/

