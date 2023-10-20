import Link from 'next/link'
import Image from "next/image";

const HeaderIcons = () => {
    return (
        <div className='flex items-center'>
            <Link href="/" className="relative w-[22px] h-[22px]">
                <Image
                    src='/images/user.png' fill alt='user'
                    sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
                />
            </Link>
            <Link href="/" className="relative w-[22px] h-[22px] mx-5">
                <Image
                    src='/images/heart.png'
                    fill
                    alt='heart'
                    sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
                />
                <span className="absolute -top-2 text-white -right-3 bg-[#e10000] rounded-full w-5 h-5 flex items-center justify-center  text-xs">
                    0
                </span>
            </Link>
            <Link href="/korpa" className="relative  w-[22px] h-[22px]">
                <Image
                    src='/images/shopping-bag.png'
                    fill
                    alt='shopping-bag'
                    sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
                />
                <span className="absolute -top-2 text-white -right-3 bg-[#e10000] rounded-full w-5 h-5 flex items-center justify-center  text-xs">
                    0
                </span>
            </Link>
        </div>
    )
}

export default HeaderIcons