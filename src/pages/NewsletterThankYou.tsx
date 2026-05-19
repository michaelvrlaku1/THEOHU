import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const NewsletterThankYou = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            You're on the list!
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            Thank you for subscribing to the OHU newsletter. Keep an eye on your inbox for the latest real estate insights, guides, and updates.
          </p>
          <Link to="/">
            <Button size="lg" className="px-8 h-14 text-lg">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsletterThankYou;
