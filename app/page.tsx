import BlackBand from '@/components/BlackBand';
import DownloadStore from '@/components/DownloadStore';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import KnowMore from '@/components/KnowMore';
import Navbar from '@/components/Navbar';
import Reviews from '@/components/Reviews';

export default function Home() {
	return (
		<main className='flex min-h-screen max-w-[1700px] mx-auto flex-col justify-between capitalize'>
			<Navbar />
			<Hero />
			<KnowMore />
			<BlackBand />
			<Reviews />
			<DownloadStore />
			<Footer />
		</main>
	);
}
