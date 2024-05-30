import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const KnowMore = () => {
	return (
		<section className='mt-24 px-10 lg:px-32'>
			<div className='flex flex-col gap-10 lg:flex-row items-center justify-between capitalize'>
				<div className='flex flex-col gap-5'>
					<h1 className='text-5xl md:text-7xl font-bold'>
						get to know more
					</h1>
					<h1 className='text-5xl md:text-7xl font-bold'>about kulipa</h1>
					<p className='lg:w-[50%] pt-5'>
						we are customer-focused dital banking platform that helps you
						to manage your finances with ease. Your entire financial life
						is right at your fingertips. We are here to help you make the
						most of your money. We provide complete financial solutions to
						help you achieve your goals. We are here to help you make the
						most of your money.
					</p>
					<div className='flex flex-col lg:flex-row items-center gap-6'>
						<div className='bg-primary flex items-center  px-6 justify-center flex-col rounded-full w-fit p-3'>
							<p className='text-lg'>5M</p>
							<p>Transaction mode</p>
						</div>
						<div className='bg-black flex items-center px-6  justify-center flex-col text-white rounded-full w-fit p-3'>
							<p className='text-lg'>25M+</p>
							<p>Transaction Signe day</p>
						</div>
						<div className='bg-primary flex items-center px-6 justify-center flex-col rounded-full w-fit p-3'>
							<p className='text-lg'>100K</p>
							<p>User Review</p>
						</div>
					</div>
				</div>
				<div>
					<div className='relative overflow-hidden'>
						<Image
							src={'/man.jpeg'}
							height={1500}
							className='rounded-2xl'
							width={1500}
							alt='man with a phone and card'
						/>
						<Image
							src={'/one_card.jpeg'}
							height={300}
							width={300}
							className='absolute -bottom-20 -right-20 -skew-y-12'
							alt='card'
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row gap-10 lg:gap-16 mt-32'>
				<div>
					<Image src={'/cards.png'} height={800} width={800} alt='cards' />
				</div>
				<div className='flex flex-col gap-5'>
					<h1 className='text-3x md:text-7xl font-bold'>
						Take your card payments anytime,
					</h1>
					<h1 className='text-3x md:text-7xl font-bold'>
						anywhere with kulipa
					</h1>
					<p>
						We are here for you. We create business with you in mind. We
						make things easier.
					</p>
					<Button>Apply Now</Button>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row gap-10 lg:gap-16 mt-32'>
				<div>
					<h1 className='text-3x md:text-7xl font-bold'>
						{"choose what's right "}
					</h1>
					<h1 className='text-3x md:text-7xl font-bold'>
						Services for you
					</h1>
				</div>
				<div>
					<p>
						no matter how customers want to pay, we can help you fine the
						right solutions. For your businesses.{' '}
					</p>
				</div>
			</div>
		</section>
	);
};

export default KnowMore;
