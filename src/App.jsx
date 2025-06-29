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

  return (
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

      {/* You are in Safe Hands - Organization Logos */}
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

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-lg mb-6">
            Book your consultation today and start your journey to a perfect smile
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            📅 Book Your Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500">
        <p>&copy; 2024 Dr Pacha Smiles. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

