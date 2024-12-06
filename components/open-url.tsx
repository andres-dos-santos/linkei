import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function OpenUrl({ children }: Props) {
  return <li>{children}</li>
}
