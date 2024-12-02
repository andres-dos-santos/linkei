import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

export function Input(props: ComponentProps<'input'>) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id="name"
        className={cn(
          'peer w-full border border-gray-300 rounded-[2px] bg-transparent px-1 h-10 text-base text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500',
          props.className,
        )}
        placeholder=" "
        required
      />

      {props.children}
    </div>
  )
}

export function InputLabel(props: ComponentProps<'label'>) {
  return (
    <label
      className="bg-white px-1 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[13px] font-medium -tracking-wide peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-blue-500"
      {...props}
    >
      {props.children}
    </label>
  )
}
