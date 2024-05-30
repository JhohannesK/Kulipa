import React from 'react';
import { BiMoney } from 'react-icons/bi';
import { Button } from './ui/button';

const Navbar = () => {
	return (
		<div className='flex items-center justify-between px-10 lg:px-32 py-2'>
			<div className='flex gap-2 items-center'>
				<div>
					<BiMoney size={30} />
				</div>
				<p className='font-bold text-3xl'>Kulipa</p>
			</div>
			<div className='hidden md:flex'>
				<ul className='flex gap-6 uppercase'>
					<li className='cursor-pointer'>Home</li>
					<li className='cursor-pointer'>Services</li>
					<li className='cursor-pointer'>About</li>
					<li className='cursor-pointer'>Contact</li>
				</ul>
			</div>
			<div>
				<Button className=''>Sign In</Button>
			</div>
		</div>
	);
};

export default Navbar;
