'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"

export const SidebarItem = ({ title, icon, href }: ISidebarItem) => {
    const currentPath = usePathname();
    console.log(href);

    return (
        <li>
            <Link href={href}
                className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl 
                hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400 hover:text-white
                ${href === currentPath ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : "text-gray-600 group"}`}
            >
                {icon && icon}
                <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>
    )
}