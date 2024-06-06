import Image from 'next/image';
import React from 'react';

const Reviews = () => {
	return (
		<div className='flex flex-col mt-20 items-center justify-center'>
			<h1 className='text-4xl md:text-7xl font-bold text-center'>
				Our Customers says
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center mt-10 px-10'>
				{reviews.map((review) => {
					return (
						<li
							className='w-[350px] min-h-[16rem] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-zind-100 px-8 py-6 md:w-[450px]'
							style={{
								background:
									'linear-gradient(180deg, var(--slate-50), var(--slate-100)',
							}}
							key={review.id}
						>
							<div className='flex flex-col justify-between h-full'>
								<blockquote>
									<div
										aria-hidden='true'
										className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
									></div>
									<span className=' relative z-20 text-sm leading-[1.6] text-black font-normal'>
										“{review.review}”
									</span>
								</blockquote>
								<div className='relative z-20 mt-6 flex flex-row items-center'>
									<span className='flex gap-4 items-center'>
										<Image
											width={500}
											height={500}
											src={review.img}
											className='h-12 w-12 rounded-full object-cover'
											alt='photo of user'
										/>
										<span className=' text-sm leading-[1.6] text-gray-400 font-normal'>
											{review.name}
										</span>
									</span>
								</div>
							</div>
						</li>
					);
				})}
			</div>
		</div>
	);
};

export default Reviews;

const reviews = [
	{
		id: 1,
		name: 'John Stones',
		review:
			"Kulipa has been a life saver for me. I can't imagine how I would have survived without it. I am grateful for everything.",
		img: '/elianna-.jpg',
	},
	{
		id: 2,
		name: 'Jane Doe',
		review:
			'I have been using Kulipa for a while now and I must say it has been a great experience. I would recommend it to anyone.',
		img: '/nate.jpg',
	},
	{
		id: 3,
		name: 'Thenjiwe Moyo',
		review:
			'If you ever need a reliable and fast payment service, Kulipa is the way to go. I have been using it for a while now and I must say it has been a great experience.',
		img: '/samuel.jpg',
	},
];
