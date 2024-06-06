import React from 'react';
import { BiMoney } from 'react-icons/bi';

const Footer = () => {
	return (
		<div className='bg-black grid md:grid-cols-3 lg:grid-cols-4 items-center justify-evenly py-20 px-20 gap-10 mt-16 text-white'>
			<div>
				<div className='flex gap-2 items-center'>
					<div>
						<BiMoney size={30} />
					</div>
					<p className='font-bold text-3xl'>Kulipa</p>
				</div>
			</div>
			<div className='flex flex-col gap-5'>
				<h3 className='text-3xl font-bold'>Services</h3>
				<ul className='flex flex-col gap-6 uppercase'>
					<li className='cursor-pointer'>Home</li>
					<li className='cursor-pointer'>Services</li>
					<li className='cursor-pointer'>About</li>
					<li className='cursor-pointer'>Contact</li>
				</ul>
			</div>
			<div className='flex flex-col gap-5'>
				<h3 className='text-3xl font-bold'>Services</h3>
				<ul className='flex flex-col gap-6 uppercase'>
					<li className='cursor-pointer'>Home</li>
					<li className='cursor-pointer'>Services</li>
					<li className='cursor-pointer'>About</li>
					<li className='cursor-pointer'>Contact</li>
				</ul>
			</div>
			<div>
				<h3 className='text-3xl font-bold'>Policy</h3>
				<ul className='flex flex-col gap-6 uppercase'>
					<li className='cursor-pointer'>Home</li>
					<li className='cursor-pointer'>Services</li>
					<li className='cursor-pointer'>About</li>
					<li className='cursor-pointer'>Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
