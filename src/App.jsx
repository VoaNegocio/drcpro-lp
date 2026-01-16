import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { SocialProof } from './components/SocialProof';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <SocialProof />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}

export default App
