import { useState } from 'react'
import './App.css'

// Import all organization logos
import gdcLogo from './assets/logos/gdc-logo.jpg'
import bosLogo from './assets/logos/bos-logo.jpg'
import bdaLogo from './assets/logos/bda-logo.png'
import rcseLogo from './assets/logos/rcse-logo.png'
import rcsEnglandLogo from './assets/logos/rcs-england-logo.png'
import eosLogo from './assets/logos/eos-logo.png'
import aaoLogo from './assets/logos/aao-logo.png'
import wfoLogo from './assets/logos/wfo-logo.png'
import qmulLogo from './assets/logos/qmul-logo.png'
import bartsLogo from './assets/logos/barts-logo.png'
import nhsLogo from './assets/logos/nhs-logo.png'
import cqcLogo from './assets/logos/cqc-logo.png'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const organizations = [
    { name: "General Dental Council", logo: gdcLogo, alt: "GDC" },
    { name: "British Orthodontic Society", logo: bosLogo, alt: "BOS" },
    { name: "British Dental Association", logo: bdaLogo, alt: "BDA" },
    { name: "Royal College of Surgeons Edinburgh", logo: rcseLogo, alt: "RCS Edinburgh" },
    { name: "Royal College of Surgeons England", logo: rcsEnglandLogo, alt: "RCS England" },
    { name: "European Orthodontic Society", logo: eosLogo, alt: "EOS" },
    { name: "American Association of Orthodontists", logo: aaoLogo, alt: "AAO" },
    { name: "World Federation of Orthodontists", logo: wfoLogo, alt: "WFO" },
    { name: "Queen Mary University of London", logo: qmulLogo, alt: "QMUL" },
    { name: "Barts Health NHS Trust", logo: bartsLogo, alt: "Barts Health" },
    { name: "NHS England", logo: nhsLogo, alt: "NHS" },
    { name: "Care Quality Commission", logo: cqcLogo, alt: "CQC" }
  ]

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => setCurrentPage('home')}>
              Dr Pacha Smiles
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => setCurrentPage('home')} className={`${currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors`}>Home</button>
            <button onClick={() => setCurrentPage('about')} className={`${currentPage === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors`}>About</button>
            <button onClick={() => setCurrentPage('treatments')} className={`${currentPage === 'treatments' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors`}>Treatments</button>
            <button onClick={() => setCurrentPage('locations')} className={`${currentPage === 'locations' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors`}>Locations</button>
            <button onClick={() => setCurrentPage('contact')} className={`${currentPage === 'contact' ? 'text-blue-600 font-semibold' : 'text-gray-700'} hover:text-blue-600 transition-colors`}>Contact</button>
            <button onClick={() => setCurrentPage('booking')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Book Consultation</button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700">☰</button>
          </div>
        </div>
      </div>
    </nav>
  )

  const OrganizationLogos = () => (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          You are in Safe Hands
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Trusted by professional organizations worldwide
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {organizations.map((org, index) => (
            <div key={index} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-20 h-20 mb-3 flex items-center justify-center">
                <img 
                  src={org.logo} 
                  alt={org.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-center">
                <div className="font-bold text-sm text-gray-800 mb-1">{org.alt}</div>
                <div className="text-xs text-gray-600">{org.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header Section */}
      <header className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Perfect Smiles<br />
          Await You! 😊
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Premier orthodontic care combining expertise with modern techniques
        </p>
        <p className="text-lg text-gray-500">
          Creating beautiful smiles for teens and adults in London & Dubai
        </p>
      </header>

      {/* Expert Care Section */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🦷 Expert Orthodontic Care
          </h2>
          <p className="text-gray-600 text-lg">
            Dr. Pacha provides comprehensive orthodontic treatment using the latest techniques and technology for optimal results.
          </p>
        </div>

        {/* Quick Contact */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Contact</h3>
          <div className="space-y-2">
            <p className="text-lg">📞 020 8752 0569</p>
            <p className="text-lg">📧 hello@drpachasmiles.com</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-8">Patient Services</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">💳</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Payment Plans</h4>
            <p className="text-gray-600">Flexible payment options to make your treatment affordable</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">👨‍⚕️</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Dentist Referral</h4>
            <p className="text-gray-600">Refer your patients to our specialist orthodontic care</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Patient Referral</h4>
            <p className="text-gray-600">Refer friends and family and receive rewards</p>
          </div>
        </div>
      </section>

      {/* Follow Our Journey */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Follow Our Journey</h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest orthodontic tips and patient success stories
          </p>
        </div>
      </section>

      {/* Organization Logos */}
      <OrganizationLogos />

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-lg mb-6">
            Book your consultation today and start your journey to a perfect smile
          </p>
          <button 
            onClick={() => setCurrentPage('booking')}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            📅 Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  )

  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Dr. Moayad Pacha</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Background</h2>
              <p className="text-gray-600 mb-4">
                Dr. Moayad Pacha is a highly qualified orthodontist with extensive experience in creating beautiful, healthy smiles for patients of all ages. With practices in both London and Dubai, Dr. Pacha combines cutting-edge technology with personalized care.
              </p>
              <p className="text-gray-600 mb-4">
                Specializing in both traditional and modern orthodontic techniques, Dr. Pacha is committed to providing the highest standard of care while ensuring patient comfort throughout the treatment journey.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Qualifications & Memberships</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Queen Mary University of London Graduate</li>
                <li>• General Dental Council (GDC) Registered</li>
                <li>• British Orthodontic Society Member</li>
                <li>• British Dental Association Member</li>
                <li>• Royal College of Surgeons Fellow</li>
                <li>• European Orthodontic Society Member</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Philosophy</h2>
            <p className="text-gray-600 mb-4">
              At Dr Pacha Smiles, we believe that every patient deserves a beautiful, healthy smile. Our approach combines the latest orthodontic techniques with personalized care, ensuring that each treatment plan is tailored to the individual needs and goals of our patients.
            </p>
            <p className="text-gray-600">
              We are committed to creating a comfortable, friendly environment where patients feel at ease throughout their orthodontic journey. Our goal is not just to straighten teeth, but to boost confidence and improve overall oral health.
            </p>
          </div>

          <OrganizationLogos />
        </div>
      </div>
    </div>
  )

  const TreatmentsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Orthodontic Treatments</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Comprehensive orthodontic solutions for all ages
          </p>

          {/* Standard Treatments */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Standard Treatments</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Traditional Braces</h3>
                <p className="text-gray-600">
                  Time-tested metal braces that effectively correct complex orthodontic issues with precise control.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ceramic Braces</h3>
                <p className="text-gray-600">
                  Tooth-colored braces that blend naturally with your teeth for a more aesthetic treatment option.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Clear Aligner Therapy</h3>
                <p className="text-gray-600">
                  Nearly invisible, removable aligners that gradually straighten teeth with maximum comfort.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Lingual Braces</h3>
                <p className="text-gray-600">
                  Braces placed on the inside of teeth, completely hidden from view while providing effective treatment.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Retainers</h3>
                <p className="text-gray-600">
                  Custom-made devices to maintain your beautiful new smile after active treatment is complete.
                </p>
              </div>
            </div>
          </div>

          {/* Advanced Treatments */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Advanced Treatments</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">MARPE</h3>
                <p className="text-gray-600">
                  Micro-implant Assisted Rapid Palatal Expansion for adult palatal expansion without surgery.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Benslider</h3>
                <p className="text-gray-600">
                  Advanced appliance for correcting Class II malocclusions with enhanced patient comfort.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Herbst Appliances</h3>
                <p className="text-gray-600">
                  Fixed functional appliances that encourage proper jaw growth and positioning.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sleep Apnea Treatment</h3>
                <p className="text-gray-600">
                  Specialized orthodontic approaches to help improve breathing and sleep quality.
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">TMJ Disorder Treatment</h3>
                <p className="text-gray-600">
                  Comprehensive treatment for temporomandibular joint disorders and related symptoms.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('booking')}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const LocationsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Locations</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Convenient locations in London and Dubai
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* London Location */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🇬🇧 London Practice</h2>
              <div className="space-y-3 mb-6">
                <p className="text-gray-600">
                  <strong>Address:</strong><br />
                  123 Harley Street<br />
                  London W1G 6BA<br />
                  United Kingdom
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> 020 8752 0569
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> hello@drpachasmiles.com
                </p>
                <p className="text-gray-600">
                  <strong>Nearest Station:</strong> Oxford Circus (5 minutes walk)
                </p>
              </div>
              
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                <p className="text-gray-600">Google Maps - London Location</p>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Office Hours</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Dubai Location */}
            <div className="bg-purple-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">🇦🇪 Dubai Practice</h2>
              <div className="space-y-3 mb-6">
                <p className="text-gray-600">
                  <strong>Address:</strong><br />
                  Dubai Healthcare City<br />
                  Building 64, Block A<br />
                  Dubai, UAE
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> +971 4 123 4567
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> hello@drpachasmiles.com
                </p>
                <p className="text-gray-600">
                  <strong>Nearest Metro:</strong> Healthcare City Station (2 minutes walk)
                </p>
              </div>
              
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                <p className="text-gray-600">Google Maps - Dubai Location</p>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Office Hours</h3>
              <div className="text-gray-600 space-y-1">
                <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                <p>Friday: 9:00 AM - 4:00 PM</p>
                <p>Saturday: Closed</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('booking')}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors mr-4"
            >
              Book London Appointment
            </button>
            <button 
              onClick={() => setCurrentPage('booking')}
              className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Book Dubai Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const ContactPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Get in touch to start your smile transformation journey
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Location</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option>London</option>
                    <option>Dubai</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">🇬🇧 London Office</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>📞 020 8752 0569</p>
                    <p>📧 hello@drpachasmiles.com</p>
                    <p>📍 123 Harley Street, London W1G 6BA</p>
                    <p>🚇 Oxford Circus Station (5 min walk)</p>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">🇦🇪 Dubai Office</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>📞 +971 4 123 4567</p>
                    <p>📧 hello@drpachasmiles.com</p>
                    <p>📍 Dubai Healthcare City, Building 64</p>
                    <p>🚇 Healthcare City Station (2 min walk)</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Emergency Contact</h3>
                  <p className="text-gray-600 mb-2">For urgent dental emergencies:</p>
                  <p className="text-gray-600">📞 Emergency Line: 020 8752 0569</p>
                  <p className="text-gray-600 text-sm">Available 24/7 for existing patients</p>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => setCurrentPage('booking')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  📅 Book Your Consultation Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const BookingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Book Your Consultation</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Take the first step towards your perfect smile
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Schedule Your Appointment</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Age</label>
                  <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Location *</label>
                  <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option value="">Select Location</option>
                    <option value="london">London</option>
                    <option value="dubai">Dubai</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option>Morning (9:00 AM - 12:00 PM)</option>
                    <option>Afternoon (12:00 PM - 4:00 PM)</option>
                    <option>Evening (4:00 PM - 6:00 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Treatment Interest</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option>General Consultation</option>
                    <option>Traditional Braces</option>
                    <option>Clear Aligners</option>
                    <option>Ceramic Braces</option>
                    <option>Lingual Braces</option>
                    <option>Advanced Treatment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
                  <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Any specific concerns or questions?"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
                  📅 Book My Consultation
                </button>
              </form>
            </div>

            {/* Consultation Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What to Expect</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">📋 Initial Consultation</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Comprehensive oral examination</li>
                    <li>• Digital X-rays and photos</li>
                    <li>• Treatment options discussion</li>
                    <li>• Personalized treatment plan</li>
                    <li>• Cost and payment options</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">💰 Consultation Fee</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Initial Consultation:</strong> £150
                  </p>
                  <p className="text-gray-600 text-sm">
                    Fee is deductible from treatment cost if you proceed with treatment
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">⏰ Duration</h3>
                  <p className="text-gray-600">
                    Allow 60-90 minutes for your comprehensive consultation
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">📝 What to Bring</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Photo ID</li>
                    <li>• Insurance information (if applicable)</li>
                    <li>• Recent dental X-rays (if available)</li>
                    <li>• List of current medications</li>
                    <li>• Referral letter (if from dentist)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Need help choosing a location?
                </p>
                <button 
                  onClick={() => setCurrentPage('locations')}
                  className="bg-gray-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  View Our Locations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr Pacha Smiles</h3>
            <p className="text-gray-300">
              Creating beautiful smiles with expert orthodontic care in London and Dubai.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => setCurrentPage('home')} className="block text-gray-300 hover:text-white">Home</button>
              <button onClick={() => setCurrentPage('about')} className="block text-gray-300 hover:text-white">About</button>
              <button onClick={() => setCurrentPage('treatments')} className="block text-gray-300 hover:text-white">Treatments</button>
              <button onClick={() => setCurrentPage('contact')} className="block text-gray-300 hover:text-white">Contact</button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">London Office</h4>
            <div className="text-gray-300 space-y-1">
              <p>123 Harley Street</p>
              <p>London W1G 6BA</p>
              <p>020 8752 0569</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Dubai Office</h4>
            <div className="text-gray-300 space-y-1">
              <p>Dubai Healthcare City</p>
              <p>Building 64, Block A</p>
              <p>+971 4 123 4567</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Dr Pacha Smiles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />
      case 'about': return <AboutPage />
      case 'treatments': return <TreatmentsPage />
      case 'locations': return <LocationsPage />
      case 'contact': return <ContactPage />
      case 'booking': return <BookingPage />
      default: return <HomePage />
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App

