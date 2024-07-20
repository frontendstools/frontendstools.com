import { ReactNode } from 'react'
import clsx from 'clsx'
interface Props {
  children: ReactNode
  className?: string
}

export default function PageTitle({ children, className }: Props) {
  return (
    <h1
      className={clsx(
        'text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14',
        className
      )}
    >
      {children}
    </h1>
  )
}
