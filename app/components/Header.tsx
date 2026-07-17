"use client"

import Link from "next/link"

function Header() {
    return (
        <div>
            <div className="h-20 flex items-center justify-center navbar border-b border-slate-600 ">
                <Link href="/">
                    <div>
                        <span className="btn btn-ghost text-4xl font-stretch-expanded
                        ">Readme File Generator</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
