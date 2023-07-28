import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import Link from 'next/link'
import prisma from '@/lib/prisma'
import { GetServerSideProps } from 'next'

interface UserProps {
  Name: string
  id: string
}

export default function Home({ user }: any) {

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-zinc-700'>
      <Link href='/user/register'>Cadastrar</Link>
      {user.map((e: UserProps) => {
        return (
          <Link href='/user' key={e.id}>
            <div className='w-full flex flex-row items-center justify-center gap-x-4'>
              <span>{e.id}</span>
              <button onClick={() => localStorage.setItem('id', e.id)}>{e.Name}</button>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  const user = await prisma.user.findMany()
  return {
    props: { user: user },
    revalidate: 10,
  };
}