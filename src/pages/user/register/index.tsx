import axios from "axios"
import { FormEvent, useState } from "react"

export default function Register() {

    const [Name, setName] = useState('')

    async function handleCreateUser(event: FormEvent) {

        event.preventDefault()

        await axios.post('/api/user', {
            Name
        })

        window.location.href = '/'
    }

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-zinc-800">
            <form onSubmit={handleCreateUser} className="w-full h-full flex flex-col items-center justify-center gap-y-4">
                <input className="text-black" type="text" placeholder="Name" onChange={event => setName(event.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </main>
    )
}