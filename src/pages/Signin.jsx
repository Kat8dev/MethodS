import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import { RegisterWrapper } from "../styled/RegisterWrapper";
import Footer from "../components/Footer";

const Signin = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signIn(user.email, user.password);
            navigate("/account");
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }

    return (
        <>
            <RegisterWrapper>
                <div className="container">
                    <div className="sign-header">
                        <h2>Iniciar la sesión en tu cuenta</h2>
                        <p>
                            Aún no tienes una cuenta?
                            <span>
                                <Link to="/signup">
                                    Crea la cuenta
                                </Link>
                            </span>
                        </p>
                    </div>
                    <div className="sign-form">
                        <form action="#" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Correo electrónico</label>
                                <input
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    type="email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    id="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    type="password"
                                />
                            </div>
                            <button>Inicia la sesión</button>
                        </form>
                    </div>
                </div>
            </RegisterWrapper>
            <Footer />
        </>
    );
};

export default Signin;
