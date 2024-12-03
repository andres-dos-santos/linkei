import { cn } from '@/lib/utils'
import { ComponentProps, ReactNode } from 'react'

export function Input({
  placeholder,
  name,
  children,
  className,
}: ComponentProps<'input'> & { children: ReactNode }) {
  return (
    <div className="relative w-full">
      {children}

      <input
        name={name}
        placeholder={placeholder}
        type="text"
        className={cn(
          'w-full border border-gray-300 rounded-[2px] bg-transparent px-2 h-10 text-[13px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500',
          className,
        )}
      />
    </div>
  )
}

export function InputLabel(props: ComponentProps<'label'>) {
  return (
    <label
      className="px-1 text-[13px] text-zinc-500 font-medium -tracking-wide"
      {...props}
    >
      {props.children}
    </label>
  )
}
