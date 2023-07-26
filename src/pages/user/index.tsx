import axios from "axios"
import { useEffect, useState, useMemo, use } from "react"
import Link from 'next/link'

interface UserProps {
    id: string
    Name: string
}

export default function User() {

    const [user, getUser] = useState<UserProps[]>([])
    const [id, setId] = useState<string | null>(null)

    //const thisUser = useMemo(() => console.log(user), [user])

    async function Main() {
        useEffect(() => {
            axios.get(`/api/${id}`)
                .then(function (response) {
                    getUser(response.data.user)
                })
        }, [])


    }

    Main()

    useEffect(() => {
        const userId = localStorage.getItem('id') as string
        if (id === null) {
            setId(userId)
            console.log('ID: ', id)
        }
        console.log('ID: ', id)
    }, [])





    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-zinc-700'>
            <Link href='/user/update'>Editar dados</Link>
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