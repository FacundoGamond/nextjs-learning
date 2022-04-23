import { MainLayout } from '../../components/layouts/MainLayout'
import Link from 'next/link'

export default function Contact() {
  return (
    <MainLayout>
      <h2>Contact Page</h2>
      
      <h1 className={'title'}>
        Go to <Link href="/">Home!</Link>
      </h1>
    </MainLayout>
  )
}
