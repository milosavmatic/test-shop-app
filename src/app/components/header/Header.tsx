
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import HeaderTop from './HeaderTop'
import HeaderLinks from './HeaderLinks'
import HeaderIcons from './HeaderIcons'
import Translate from './Translate'

export interface Category {
	name: string
	slug: string
}


const Header = async () => {
	const categoriesMain: Category[] = [{ name: 'Početna', slug: '/' }, { name: 'Categories', slug: '/categories' }, { name: 'Blog', slug: '/blogs' }, { name: 'Maloprodaje', slug: '/maloprodaje' }, { name: 'Kontakt', slug: '/kontakt' }]
	
	return (
		<header className='max-xl:hidden top-0 sticky w-full z-[101] bg-white border-b-4 border-topHeader'>
			<HeaderTop />
			<div className='py-5 px-20 flex items-center justify-between'>
				<Link href='/' className='relative w-[185px] h-[80px]'>
					<Image src='/images/logo.jpeg' fill className='object-cover' alt='logo' sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" priority />
				</Link>
				<HeaderLinks categoriesMain={categoriesMain} />
				<div>
					<Translate />
				</div>
				<HeaderIcons />
			</div>
		</header>
	)
}

export default Header
