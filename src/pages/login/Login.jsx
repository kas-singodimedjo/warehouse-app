import './Login.css'
import logo from "/src/assets/logo.svg"
import handleSubmit from "/src/helpers/handleSubmit.js"

function Login() {
    return (
        <>
            <h1>Warehouse</h1>
            <img src={logo} alt="logo" />
            <form onSubmit={handleSubmit}>
                <label><input type="text" name="username" placeholder="gebruikersnaam"/></label>
                <label><input type="password" name="password" placeholder="wachtwoord"/></label>
                <button type="submit">login</button>
            </form>
        </>
    )
}
export default Login