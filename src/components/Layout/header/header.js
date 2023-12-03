'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import { Button } from '@/components/UI/button'
import { useAuth } from '@/hooks/useAuth'
import { X, AlignJustify } from 'lucide-react'
import NovuNotificationCenter from '@/components/UI/novu-notification-center'
import { useRouter } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Dental Snap', href: '/dentalsnap' },
  { name: 'Contact Us', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { authUser, logoutUser } = useAuth()
  const { push } = useRouter()

  const handleLogout = async () => {
    await logoutUser()
    push('/')
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-bold text-gray-700">DentalCare AI</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <AlignJustify
              className="text-gray-700 h-6 w-6 "
              alt="bar mark"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!authUser && (
            <div>
              <Link
                href="/login"
                className="text-sm font-semibold leading-6 mx-3 text-white"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="text-sm font-semibold leading-6 mx-3 text-white"
              >
                Register
              </Link>
            </div>
          )}
          {authUser && (
            <div className="inline-flex">
              {' '}
              <Link
                href="/settings/profile"
                className="text-white m-2 text-sm font-semibold leading-6"
              >
                Settings
              </Link>
              <div className="flex justify-center items-center px-2">
                <NovuNotificationCenter authUser={authUser} />
              </div>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
        </div> */}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-11" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0061ff] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 text-white font-bold">
              <span className="">DentalCare AI</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X
                color="#b0b0b0"
                className="h-6 w-6"
                alt="close mark"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* {!authUser && (
                <div className="py-6">
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/register"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Register
                  </Link>
                </div>
              )}
              {authUser && (
                <div className="flex flex-col">
                  {' '}
                  <Button onClick={handleLogout}>Logout</Button>
                  <Link href="/settings/profile">Settings</Link>
                </div>
              )} */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
