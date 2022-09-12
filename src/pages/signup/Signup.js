import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import './Signup.css'


export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    const { signup, error, isPending } = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(name, email, password)
    }

    return (
        <div className="signup">
            <div className="container-sigup">
                <form onSubmit={handleSubmit} className='signup-form'>
                    <h1>Signup</h1>
                    <label htmlFor="">
                        <span>Name:</span>
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </label>
                    <label htmlFor="">
                        <span>Email:</span>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                    <label htmlFor="">
                        <span>Password</span>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} />
                    </label>
                    {!isPending && <button className='btn'>Signup</button>}

                    {isPending && <button className='btn' disabled>loading</button>}
                    {error && <p>{error}</p>}
                </form>
            </div>

        </div>
    )
}
