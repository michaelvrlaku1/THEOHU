import { Button } from "@/components/ui/button";
import { Linkedin, Youtube } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");

    // Tracking Code
    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "Newsletter Subscription Form",
      tags: "ohu newsletter",
      formData: {
        email: email,
      },
      formLabels: {
        email: "Email",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: "tk_1e01287f191e4991bd22323189c89206",
      locationId: "jS6PfsBaZNupSlXMrWpD",
      sessionId: crypto.randomUUID(),
      properties: {
        deviceType:
          /Mobile|Android|iPhone/i.test(navigator.userAgent)
            ? "mobile"
            : "desktop",
      },
    };

    fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        version: "2021-07-28",
      },
      body: JSON.stringify(trackingPayload),
    }).catch(() => {});

    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });

    // Redirect to thank you page
    navigate("/newsletter-thank-you");
  };

  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="font-medium mb-4">Learning</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link to="/digital-products?type=Courses" className="hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/digital-products?type=Templates" className="hover:text-primary transition-colors">Templates</Link></li>
              <li><Link to="/digital-products?type=Guides" className="hover:text-primary transition-colors">Guides</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">By Audience</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link to="/digital-products?category=FSBO+Courses" className="hover:text-primary transition-colors">FSBO Sellers</Link></li>
              <li><Link to="/digital-products?category=Buyer+Education" className="hover:text-primary transition-colors">First-Time Buyers</Link></li>
              <li><Link to="/digital-products?category=Investor+Courses" className="hover:text-primary transition-colors">Real Estate Investors</Link></li>
              <li><Link to="/digital-products?category=Professional+CE" className="hover:text-primary transition-colors">Professionals & CE</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link to="/faq" className="hover:text-primary transition-colors">Help Center / FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Join our email newsletter</p>
                <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm gap-2">
                  <div className="flex w-full">
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      className={`bg-secondary border ${error ? 'border-destructive' : 'border-border/50'} rounded-l-md px-3 py-2 text-sm outline-none focus:border-primary flex-grow min-w-0`}
                    />
                    <Button type="submit" className="rounded-l-none shrink-0">Subscribe</Button>
                  </div>
                  {error && <span className="text-xs text-destructive">{error}</span>}
                  <input type="hidden" name="tags" value="ohu newsletter" />
                </form>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground text-center">
          <p>&copy; {new Date().getFullYear()} Online Homeownership University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
