import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

function Header() {
    const { data: session } = useSession()
    console.log("Session", session)
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>
                            Blog
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/product">
                        <a>
                            Product
                        </a>
                    </Link>
                </li>
                {session ?
                    <li>
                        <Link href="#">
                            <a onClick={(e) => {
                                e.preventDefault();
                                signOut()
                            }}>
                                Sign out
                            </a>
                        </Link>
                    </li>
                    :
                    <li>
                        <Link href="#">
                            <a onClick={(e) => {
                                e.preventDefault();
                                signIn()
                            }}>
                                Sign In
                            </a>
                        </Link>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Header