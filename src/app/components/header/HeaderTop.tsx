import Link from 'next/link'
import React from 'react'


function HeaderTop() {
	return (
		<div className='bg-topHeader h-8 w-full flex items-center justify-between px-20'>
			<div>
				<Link href='https://www.facebook.com/' className='text-sm font-normal text-black' target='_blank'>Facebook</Link>
				<span className='mx-2'>-</span>
				<Link href='https://www.instagram.com/' className='text-sm font-normal text-black' target='_blank'>Instagram</Link>
				<span className='mx-2'>-</span>
				<Link href='https://www.youtube.com/' className='text-sm font-normal text-black' target='_blank'>Youtube</Link>
			</div>
			<div>
				<span className='text-sm font-normal text-black' >Call Centar: </span>
				<Link href={`tel:${process.env.NEXT_PUBLIC_TELEPHONE}`} className='text-sm font-normal text-black'>
					{process.env.NEXT_PUBLIC_TELEPHONE}
				</Link>
			</div>
		</div>
	)
}

export default HeaderTop