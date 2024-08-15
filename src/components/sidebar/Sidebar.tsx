
import Image from 'next/image';
import { CiLogout } from 'react-icons/ci';
import { SidebarItem } from './SidebarItem';
import Link from 'next/link';
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPersonOutline } from 'react-icons/io5';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { LogOutButton } from './LogOutButton';

const MenusOptions: ISidebarItem[] = [
    {
        title: 'Dashboard',
        icon: <IoCalendarOutline size={30} />,
        href: '/dashboard'
    },
    {
        title: 'Rest TODOS',
        icon: <IoCheckboxOutline size={30} />,
        href: '/dashboard/rest-todos'
    },
    {
        title: 'Server Actions',
        icon: <IoListOutline size={30} />,
        href: '/dashboard/server-todos'
    },
    {
        title: 'Cookies',
        icon: <IoCodeWorkingOutline size={30} />,
        href: '/dashboard/cookies'
    },
    {
        title: 'Productos',
        icon: <IoBasketOutline size={30} />,
        href: '/dashboard/products'
    },
    {
        title: 'Perfil',
        icon: <IoPersonOutline size={30} />,
        href: '/dashboard/profile'
    }
]

export const SideBar = async () => {
    const session = await getServerSession(authOptions);

    const userName = session?.user?.name ?? 'No Name';
    const userImage = session?.user?.image ?? 'https://avatars.githubusercontent.com/u/73403289?s=96&v=4';
    //TODO: const userRole = session?.user?.rol ?? 'No role';

    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <Link href="#" title="home">
                        <Image src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                            className="w-32"
                            alt="tailus logo"
                            width={50}
                            height={50}
                            priority />


                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Image src={userImage}
                        alt=""
                        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                        width={50}
                        height={50}
                        priority
                    />
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{userName}</h5>
                    <span className="hidden text-gray-400 lg:block">Developer</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    {MenusOptions.map((menuOption, index) => (
                        <SidebarItem key={index} {...menuOption} />
                    ))}
                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <LogOutButton />
            </div>
        </aside>

    )
}