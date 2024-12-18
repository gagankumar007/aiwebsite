
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';


function HeroSection() {
    return (
        <div className="hero-section">
            <div>
                <h1>Welcome To Pulseinnovas</h1>
                <p>Democratizing Healthcare with the Power of Artificial Intelligence</p>

            </div>
        </div>
    );
}

function Services() {
    return (
        <div className="content-section" id="services">
            <h2>Our Services</h2>
            <div className="services-columns">
                <div className="services-column">
                    <h3>For Individual Customers</h3>
                    <p>We provide medical elective consultation services at home through our AI for a nominal fee. We give our patients a downloadable prescription PDF at the end of the consultation and also analyze medical reports for a better understanding of your disease diagnosis and treatment.</p>
                </div>
                <div className="services-column">
                    <h3>For Space Companies</h3>
                    <p>We loan out our AI medical care API to customers on a contract basis. Our AI is trained in space medical data to handle medical conditions in space and deep space (Moon and Mars).</p>
                </div>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div className="content-section" id="contact">
            <h2>Contact Us</h2>
            <p>Interested in our services or have questions? Contact us at <a href="mailto:info@pulseinnovas.com">info@pulseinnovas.com</a> to learn more.</p>
        </div>
    );
}

function Footer() {
    return (
        <div className="footer">
            <div className="flex justify-center">
                <p className="text-blue-500">Pulseinnovas &copy; 2024. All rights reserved.</p>

            </div>


        </div>
    );
}

// If you want to use these components, import them in App or remove them
// function Login() { ... }
// function Booking() { ... }

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About/>
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

