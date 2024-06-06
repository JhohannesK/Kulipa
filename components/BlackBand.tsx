import React from 'react';
import { BiCoin, BiUpload } from 'react-icons/bi';
import { BsArrow90DegDown, BsArrow90DegUp } from 'react-icons/bs';

const BlackBand = () => {
	return (
		<div className='bg-black flex flex-col lg:flex-row items-center justify-evenly py-20 px-20 gap-10 mt-16 text-white'>
			<div className='flex flex-col items-center justify-center'>
				<div className='p-6 flex items-center flex-col justify-center bg-primary rounded-2xl w-16 text-black'>
					<BsArrow90DegUp />
				</div>
				<div className='text-center'>
					<h3 className='font-semibold text-xl'>Sent</h3>
					<p className='text-sm'>
						No matter how much you want to send, we can make that happen
					</p>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<div className='p-6 flex items-center flex-col justify-center bg-slate-600 rounded-2xl w-16 text-slate-200'>
					<BsArrow90DegDown />
				</div>
				<div className='text-center'>
					<h3 className='font-semibold text-xl'>Receive</h3>
					<p className='text-sm'>
						No matter how much you want to send, we can make that happen
					</p>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<div className='p-6 flex items-center flex-col justify-center bg-primary rounded-2xl w-16 text-black'>
					<BiCoin />
				</div>
				<div className='text-center'>
					<h3 className='font-semibold text-xl'>Loan</h3>
					<p className='text-sm'>
						No matter how much you want to send, we can make that happen
					</p>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<div className='p-6 flex items-center flex-col justify-center bg-slate-600 rounded-2xl w-16 text-slate-200'>
					<BiUpload />
				</div>
				<div className='text-center'>
					<h3 className='font-semibold text-xl'>Top-up</h3>
					<p className='text-sm'>
						No matter how much you want to send, we can make that happen
					</p>
				</div>
			</div>
		</div>
	);
};

export default BlackBand;
