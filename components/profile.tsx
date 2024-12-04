'use client'

import { SignInButton, SignOutButton, useSession } from '@clerk/nextjs'

export function Profile() {
  const { session, isSignedIn } = useSession()

  return !isSignedIn ? (
    <SignInButton>
      <div className="ml-3 mt-4 mb-2.5 flex items-center">
        <p className="cursor-pointer text-[13px] font-medium text-zinc-600 -tracking-wide mt-2.5 dark:text-zinc-300">
          Ainda não tem conta?{' '}
          <span className="text-blue-500 underline">Clique aqui</span>.
        </p>
      </div>
    </SignInButton>
  ) : (
    <SignOutButton>
      <div className="mr-auto ml-3 mt-4 mb-2.5 flex items-center">
        <div className="h-8 w-8 bg-zinc-200 rounded-lg mr-2.5">
          <img
            alt="imagem de perfil"
            src={session.user.imageUrl}
            width={32}
            height={32}
            className="rounded-lg"
          />
        </div>
        <p className="cursor-pointer text-[13px] font-medium text-zinc-600 -tracking-wide dark:text-zinc-300">
          {session.user.fullName}
        </p>
      </div>
    </SignOutButton>
  )
}
