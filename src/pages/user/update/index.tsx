import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import Link from 'next/link'
import { redirect } from "next/navigation"

export default function Update() {

    const [data, setData] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        // Perform localStorage action
        let userId = localStorage.getItem('id') as string
        setId(userId)
    }, [])


    console.log(data)

    async function update(event: FormEvent) {
        event.preventDefault()

        await axios.put(`/api/update/${id}`, {
            Name: data
        })

        window.location.href = '/'
    }


    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-zinc-700 gap-y-4'>
            <h1 className='text-4xl font-semibold'>Editar Dados</h1>
            <div className='w-full flex flex-col items-center justify-center'>
                <form onSubmit={update} className='w-full flex flex-col items-center justify-center gap-y-4'>
                    <input type="text" onChange={e => setData(e.target.value)} className="bg-zinc-800 rounded-lg p-2" />
                    <button type="submit" className='p-2 rounded-lg bg-red-500 text-black font-semibold'>Alterar</button>
                </form>
            </div>
        </div>
    )
}