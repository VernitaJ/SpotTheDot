import React, { useState } from 'react'
// interface Props {
//     setUser: React.Dispatch<React.SetStateAction<User>>
// }

interface Access {
    userAccess: Function
}

const User = (props: Access) => {
    const [username, setUsername] = useState<string>("")
    const [newUser, setNewUser] = useState<string>("")
    const [logged, setLogged] = useState<boolean>()

    const addNewUser = () => {
        const options = {
            method: 'POST',
            body: username
        }
        fetch("http://localhost:8080/users", options)
            .then(response => response.json())
            .then(newUser => setNewUser(newUser.username))
            .then(() => props.userAccess(newUser))
            .catch((err) => {
                console.log(err)
            })
    }

    const getUser = () => {
        const options = {
            method: 'GET'
        }
        fetch("http://localhost:8080/users", options)
        .then(response => response.json())
        .then(users => props.userAccess(users))
        .catch((err) => console.log(err))
        console.log("username sent")
    }

    return (
        <div className="log-container">
            <div>
                <button className="log-buttonNo" onClick={() => setLogged(false)}>New Player</button>
                <button className="log-buttonYes" onClick={() => setLogged(true)}>Existing Player</button>
            </div>
            {logged ? 
            <div><input className="input" type="text"/><button onClick={() => getUser()}>Get Scores</button></div>
            : <div>
            <input className="input" value={username} onChange={(event) => setUsername(event.target.value)} type="text" />
            <button onClick={addNewUser}>Join</button> </div>}
        </div>
    )
}

export default User