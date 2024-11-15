import Image from 'next/image'
import Spacer from './spacer'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between p-4 items-center bg-blue-500 z-10 text-white py-10 gap-4">
      <Image alt="logo" src="/logo.webp" width={100} height={100} />
      <Spacer />
      <div className=" flex flex-col md:flex-row gap-4 items-center justify-center">
        <a href="mailto:info@jsconsultancyis.com">
          {' '}
          <p className="text-md">
            <span className="font-bold">Contact: </span>
            info@jseconsultancyis.com
          </p>
        </a>
        <p className="text-sm">Copyright 2023 © All Rights Reserved.</p>
      </div>
      <Spacer />
      <div className="flex gap-4">
        <Link href="mailto:info@jseconsultancyis.com">
          <Mail size={40} />
        </Link>
        <Link href={'https://twitter.com/JSE_Consultancy'}>
          <FaXTwitter size={40} />
        </Link>
      </div>
    </footer>
  )
}
