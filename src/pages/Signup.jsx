import { useState } from "react";
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
            navigate("/account");
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

export default Signup;

