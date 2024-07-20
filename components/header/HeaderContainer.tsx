import React, { FC } from 'react'

interface IHeaderContainerProps {
  children?: React.ReactNode
}

export const HeaderContainer: FC<IHeaderContainerProps> = ({ children }) => {
  return <header className="flex items-center justify-between py-5 md:py-10">{children}</header>
}
