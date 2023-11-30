import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
	return (
		<div className='text-base bg-background-dark p-12'>
			<Testimonials />
			<Faq />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
