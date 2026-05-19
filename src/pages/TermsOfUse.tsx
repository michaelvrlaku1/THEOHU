import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center">Terms of Use</h1>
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using Online Homeownership University (OHU), you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">2. Use License</h2>
            <p className="mb-6">
              Permission is granted to temporarily access the materials (information or software) on OHU's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">3. Disclaimer</h2>
            <p className="mb-6">
              The materials on OHU's website are provided on an 'as is' basis. OHU makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="mb-6">
              The real estate, financial, and legal information provided is for educational purposes only and should not be considered professional advice. Always consult with qualified professionals regarding your specific situation.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">4. Limitations</h2>
            <p className="mb-6">
              In no event shall OHU or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OHU's website.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">5. Revisions and Errata</h2>
            <p className="mb-6">
              The materials appearing on OHU's website could include technical, typographical, or photographic errors. OHU does not warrant that any of the materials on its website are accurate, complete or current.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">6. Governing Law</h2>
            <p className="mb-6">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">7. Modifications to Terms</h2>
            <p className="mb-6">
              OHU may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
