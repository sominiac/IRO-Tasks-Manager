import UserAPI from "../../../API/APISections/User.js"

start();

async function start() {
    let { code } = await UserAPI.auth();

    console.log(code)
}

function Auth() {
    return (
        <h1>Auth page</h1>
    )
}

export default Auth;