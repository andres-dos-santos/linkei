'use client'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import { SignInButton, SignOutButton, useSession } from '@clerk/nextjs'

export function Profile() {
  const { session, isSignedIn } = useSession()

  return (
    <div className="flex items-center justify-between mb-5">
      <SignInButton>
        <button className="flex items-center gap-2.5">
          <Avatar>
            <AvatarImage src={session?.user.imageUrl} />
            <AvatarFallback>
              {session?.user.fullName?.slice(0, 2)}
            </AvatarFallback>
          </Avatar>

          {!isSignedIn ? (
            <p className="text-[13px] text-zinc-500 -tracking-wide">
              Acesse os melhores recursos do app,{' '}
              <span className="text-zinc-900 p-1 bg-yellow-300">
                entre aqui
              </span>
            </p>
          ) : (
            <p className="text-sm -tracking-wide">{session?.user.fullName}</p>
          )}
        </button>
      </SignInButton>

      {isSignedIn && (
        <SignOutButton>
          <button>
            <p className="text-[13px] text-red-500">Sair</p>
          </button>
        </SignOutButton>
      )}
    </div>
  )
}
