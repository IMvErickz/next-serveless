import axios from "axios"
import { useEffect, useState, useMemo, use } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

interface UserProps {
    id: string
    Name: string
}

export default function User() {

    const [user, getUser] = useState<UserProps[]>([])

    const { query } = useRouter()

    async function Main() {
        useEffect(() => {
            axios.get(`/api/user/${query.id}`)
                .then(function (response) {
                    getUser(response.data.user)
                })
        }, [])


    }

    Main()

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-zinc-700'>
            <Link href={`/update/${query.id}`}>Editar dados</Link>
            {user.map(e => {
                return (
                    <ul>
                        <li className='text-6xl'>{e.id}</li>
                        <li className='text-6xl'>{e.Name}</li>
                    </ul>
                )
            })}
        </div>
    )
}