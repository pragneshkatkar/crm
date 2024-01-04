import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Link href="/dashboard">
        <Button text="Go to Dashboard" variant="primary"/>
      </Link>
    </div>
  )
}
