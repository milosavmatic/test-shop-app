'use client'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Link from 'next/link'
import { Category } from './Header'

interface Props {
    categoriesMain: Category[]
}

const HeaderLinks = (props: Props) => {
    const { categoriesMain } = props;
    const pathname = usePathname();
    const [isActive, setIsActive] = useState<string>('');

    return (
        <div>
            {categoriesMain?.map((category, index) => (
              <Link href={`${category?.slug}`} key={index} className={`${(isActive || pathname) === category?.slug ? 'border-b-2 border-black' : ''} mx-2 text-sm font-normal text-black uppercase 2xl:mr-8`} onClick={() => {
                        setIsActive(category?.slug);
                    }}  >
                        {category?.name}
                    </Link>
            )
            )}
        </div>
    )
}

export default HeaderLinks