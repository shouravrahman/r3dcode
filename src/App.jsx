import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

function App() {
	return (
		<div className='text-base bg-background-dark py-4 px-6 md:px-8 lg:px-12'>
			<Navbar />
			<Hero />
			<Testimonials />
			<Faq />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
