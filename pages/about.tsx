import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <h2>About Page</h2>

      <h1 className={'title'}>
        Go to <Link href="/">Home!</Link>
      </h1>
    </>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  );
}