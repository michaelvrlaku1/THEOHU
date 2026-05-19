import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center">Privacy Policy</h1>
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              We collect information that you provide directly to us when you create an account, subscribe to our newsletter, purchase a course, or communicate with us. This may include your name, email address, payment information, and any other details you choose to provide.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect to deliver our services, process transactions, send you updates and marketing communications, improve our website, and provide customer support.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">3. Information Sharing</h2>
            <p className="mb-6">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as necessary to provide our services (e.g., payment processors, email service providers) or as required by law.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">4. Cookies and Tracking</h2>
            <p className="mb-6">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">5. Data Security</h2>
            <p className="mb-6">
              We implement reasonable security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-6">
              Depending on your location, you may have rights to access, correct, or delete your personal information. Contact us if you wish to exercise these rights.
            </p>

            <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us through our Contact Us page or via email.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
