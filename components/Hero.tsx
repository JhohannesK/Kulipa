import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { GiStarShuriken } from 'react-icons/gi';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const Hero = () => {
	return (
		<section className='flex flex-col justify-between gap-10 xl:gap-16  md:mt-20 capitalize'>
			<div className='flex justify-between gap-40'>
				<div className='capitalize text-center md:text-left p-5 sm:pl-10 md:pl-32 pt-16'>
					<p className='text-xl md:text-2xl font-semibold'>
						Export Digital Banking
					</p>
					<div className='flex flex-col gap-4'>
						<h1 className='text-5xl md:text-7xl font-bold'>
							Digital Banking
						</h1>
						<h1 className='text-5xl md:text-7xl font-bold'>
							Made Your life easy
						</h1>
						<h1 className='text-5xl md:text-7xl font-bold'>& simple</h1>
					</div>
					<p className='mt-10 md:pr-64'>
						we are here for you. We create business with you in mind. We
						make things easier.
					</p>
					<div className='mt-20 flex flex-col  gap-5 md:flex-row items-center justify-between'>
						<Button className='bg-black h-10 text-white px-10 py-5 rounded-md'>
							Download App
						</Button>
						<div className='flex gap-6'>
							<Image
								src='/elianna-.jpg'
								alt='user'
								width={200}
								height={50}
								className='h-14 w-14 rounded-full object-cover'
							/>
							<Image
								src='/nate.jpg'
								alt='user'
								width={200}
								height={50}
								className='h-14 w-14 rounded-full object-cover'
							/>
							<Image
								src='/samuel.jpg'
								alt='user'
								width={200}
								height={50}
								className='h-14 w-14 rounded-full object-cover'
							/>
						</div>
						<div className='flex gap-3 items-center md:flex-col'>
							<GiStarShuriken />
							<p className='font-bold text-lg'>1k+</p>
							<p className='text-sm'>Active users acros the world</p>
						</div>
					</div>
				</div>
				<div className='hidden xl:flex'>
					<Image src='/photo-1.jpg' alt='hero' width={500} height={500} />
				</div>
			</div>
			<div className='flex items-center justify-evenly'>
				<div>
					<h1 className='text-3xl md:text-7xl font-semibold'>5M</h1>
					<p className='text-sm sm:text-xl'>transaction made</p>
				</div>
				<div>
					<h1 className='text-3xl md:text-7xl font-semibold'>25M+</h1>
					<p className='text-sm sm:text-xl'>transaction signe day</p>
				</div>
				<div>
					<h1 className='text-3xl md:text-7xl font-semibold'>100K</h1>
					<p className='text-sm sm:text-xl'>user review</p>
				</div>
			</div>

			<div className='bg-primary h-24 -skew-y-3 relative mt-5'>
				<div className='bg-black flex items-center text-white py-8 gap-10 text-3xl skew-y-3'>
					<InfiniteMovingCards
						items={testimonials}
						speed='normal'
						className='w-full'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
const testimonials = [
	{
		icon: <GiStarShuriken />,
		title: 'Easy Banking',
	},
	{
		icon: <GiStarShuriken />,
		title: 'Easy Banking',
	},
	{
		icon: <GiStarShuriken />,
		title: 'Easy Banking',
	},
	{
		icon: <GiStarShuriken />,
		title: 'Easy Banking',
	},
	{
		icon: <GiStarShuriken />,
		title: 'Easy Banking',
	},
	{
		icon: <GiStarShuriken />,
		title: 'Easy Banking',
	},
	{
		icon: <GiStarShuriken />,
		title: 'Easy Banking',
	},
];
