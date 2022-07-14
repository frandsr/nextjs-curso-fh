import Link from 'next/link'
import {useRouter} from 'next/router'
import React, { CSSProperties, FC } from 'react'

const activeStyle: CSSProperties = {
    color: "blue",
    textDecoration: "underline"
}

interface Props  {
  text: string;
  href: string;
}

export const NavbarLink: FC<Props> = ({ text, href}) => {

    const {asPath} = useRouter()
  return (
    <Link href={href}>
      <a style={asPath === href ? activeStyle : undefined}>{text}</a>
    </Link>
  );
}
