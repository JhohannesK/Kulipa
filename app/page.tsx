import Hero from '@/components/Hero';
import KnowMore from '@/components/KnowMore';
import Navbar from '@/components/Navbar';

export default function Home() {
	return (
		<main className='flex min-h-screen max-w-[1700px] mx-auto flex-col justify-between capitalize'>
			<Navbar />
			<Hero />
			<KnowMore />
		</main>
	);
}
