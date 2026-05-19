import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    title: "General Questions",
    items: [
      {
        q: "What is Online Homeownership University (OHU)?",
        a: "OHU is an online education platform that provides courses, templates, guides, calculators, and tools for four audiences: FSBO sellers, first-time homebuyers, real estate investors, and real estate professionals/mortgage licensees.\nWe teach plainly, practically, and without gatekeeping. No jargon. No pressure. No monthly subscriptions."
      },
      {
        q: "Who created OHU?",
        a: "OHU was founded by a team of real estate educators, investors, mortgage professionals, and practitioners who believe real estate education should be clear, honest, and accessible.\n[Link: Learn more on our About page]"
      },
      {
        q: "Is OHU accredited?",
        a: "Yes — for professional continuing education (CE). Our courses are:\n• TREC-approved (Texas real estate)\n• CA DRE-approved (California real estate)\n• DBPR-approved (Florida real estate)\n• NJ RE Commission-approved (New Jersey real estate)\n• HUD-certified (homebuyer education for grant eligibility)\n• NMLS-approved (mortgage CE, coming soon)\n• NAR-approved (professional development directory)\nConsumer courses (FSBO, buyer, investor tracks) are not \"accredited\" in the traditional sense — they're educational content, not professional licensing courses."
      },
      {
        q: "Is this a legitimate company?",
        a: "Yes. We're a U.S.-based education company with transparent pricing, a money-back guarantee, and real customer support.\nWe also have partnerships with NAR, HUD, state real estate commissions, and lender networks — which require vetting.\nIf you have concerns, you can always reach out to support@ohu.com before purchasing."
      },
      {
        q: "How is OHU different from other real estate courses?",
        a: "Several ways:\n• Pricing: One-time payment ($197 lifetime) vs. subscriptions ($29–$99/month)\n• Content: Built by practitioners, not just marketers\n• Audience: Four distinct tracks instead of generic content\n• Scope: Templates, calculators, and guides included (not upsold separately)\n• Support: Real priority support, not just automated responses\n• Future updates: All included at no extra cost\n• Guarantee: 30-day money-back guarantee\n[Link: See our full comparison]"
      }
    ]
  },
  {
    title: "Pricing & Access",
    items: [
      {
        q: "How much does OHU cost?",
        a: "Full Lifetime Library Access: $197 (one-time payment)\nThis gives you access to 48+ courses, templates, guides, calculators, and tools across all four tracks (FSBO, Buyer, Investor, Professional).\n\nIndividual Resources: $27–$47 (one-time per resource)\nIf you only want one guide, template, or tool, you can buy it separately.\n\nCE Courses: Varies by state and course\nProfessional CE courses are priced separately and listed on the CE courses page."
      },
      {
        q: "Why is it a one-time payment instead of a subscription?",
        a: "We believe education should be accessible and affordable. One-time pricing means:\n• No surprise renewal charges\n• No worry about access expiring\n• Simpler budgeting for you\n• Full access to everything, forever\nIt's a better deal for us too — we'd rather you own your education than rent it month-to-month."
      },
      {
        q: "What if I can't afford $197?",
        a: "A few options:\n• Start free: Download one of our free resources (FSBO Checklist, Buyer Roadmap, Investment Basics Guide) and see if our approach works for you.\n• Buy individual resources: Start with one guide or template ($27–$47) and try it before upgrading to full access.\n• Ask about payment plans: If full access is truly out of reach, email support@ohu.com and we can discuss options."
      },
      {
        q: "What if I buy an individual resource and then want full access?",
        a: "Great question. If you buy individual resources and then decide to get full library access, we'll credit the amount you've already spent. So you only pay the difference.\nEmail support@ohu.com to process this."
      },
      {
        q: "Do you offer discounts?",
        a: "We keep our pricing low year-round, so discounts aren't part of our strategy. Occasionally, we do run promotions for specific audiences (like CE students or real estate professionals).\nSubscribe to our email list to hear about updates: [Newsletter signup]"
      },
      {
        q: "Is there a payment plan?",
        a: "Our standard pricing is one-time payment. However, if you need a payment plan due to financial constraints, reach out to support@ohu.com and we'll see what we can do."
      }
    ]
  },
  {
    title: "Courses & Content",
    items: [
      {
        q: "What's included in the Full Library Access?",
        a: "• 48+ Courses, Guides, Templates & Tools across all four tracks\n• Interactive Calculators (deal analyzer, cash flow projector, mortgage calculator, etc.)\n• Downloadable/Printable Resources (templates, checklists, guides as PDFs)\n• Video Courses (self-paced, watch anytime)\n• All Future Updates (new courses and resources automatically added to your library)\n• Priority Email Support (24-hour response guarantee)\n• CE Courses (if applicable to your state/license)"
      },
      {
        q: "How many courses are in the library?",
        a: "We have 48+ resources across the library, including:\n• 12 video courses\n• 18 templates & checklists\n• 10 guides & roadmaps\n• 8 calculators & tools\n• 6 eBooks\nWe add new resources regularly, and all are included in your lifetime access."
      },
      {
        q: "Can I see a preview of the courses before buying?",
        a: "Yes. Each course has a free preview module so you can see the teaching style, content quality, and format before committing to full access.\nYou can find previews on individual course pages."
      },
      {
        q: "How long are the courses?",
        a: "Video courses: Most modules are 10–25 minutes. Full courses range from 1–3 hours total (broken into smaller modules so you can learn in chunks).\nGuides: 5–30 pages depending on the topic. Designed to be scannable, not overwhelming.\nTemplates: Plug-and-play. Use as-is or customize."
      },
      {
        q: "Can I download resources or print them?",
        a: "Yes. Most resources are available as downloadable PDFs:\n• Templates (use, print, customize, or share with clients if you're a pro)\n• Guides (read online or download for offline access)\n• Checklists (print and fill out physically)\n• Calculators (use online or download as Excel sheets)"
      },
      {
        q: "Are the courses mobile-friendly?",
        a: "Yes. You can watch courses on any device — phone, tablet, laptop. However, some interactive tools (like the detailed calculators) work best on larger screens.\nWe recommend using a tablet or computer for calculators, but mobile access is available."
      },
      {
        q: "Can I watch courses offline?",
        a: "Video courses require an internet connection to stream. However, you can download guides, templates, and PDFs for offline use.\nWe're working on a mobile app with offline video access (coming 2025)."
      },
      {
        q: "Do the courses have subtitles or transcripts?",
        a: "Most video courses have auto-generated captions. We're adding full transcripts to all courses (in progress).\nIf you need a transcript urgently, email support@ohu.com and we can help."
      },
      {
        q: "How often are courses updated?",
        a: "We update courses when:\n• Real estate laws or regulations change\n• Market conditions shift significantly\n• We identify new best practices\n• Customers request clarifications\nUpdates are rolled out to all library members automatically at no extra cost."
      },
      {
        q: "Can I suggest topics for new courses?",
        a: "Absolutely! We build our roadmap based on what users need.\nEmail support@ohu.com with your suggestion and we'll add it to our list."
      }
    ]
  },
  {
    title: "Account & Access",
    items: [
      {
        q: "How do I create an account?",
        a: "• Go to [Sign Up page]\n• Enter your email and choose a password\n• Complete your purchase (if buying access)\n• Verify your email\n• You're in! Start exploring the library."
      },
      {
        q: "Can I change my email after creating an account?",
        a: "Yes. Go to Account Settings → Email, update it, and verify the new email address."
      },
      {
        q: "What if I forget my password?",
        a: "Go to the login page and click \"Forgot Password?\"\nWe'll send you a reset link. Click it, choose a new password, and you're back in."
      },
      {
        q: "How long do I have access?",
        a: "Forever. Once you purchase lifetime access, it's yours permanently. No expiration. No renewal fees. Ever.\nIf our company is ever acquired or shut down, we guarantee all members will retain access to their purchased materials."
      },
      {
        q: "Can I cancel my access?",
        a: "Since it's a one-time payment (not a subscription), there's nothing to cancel. You purchased lifetime access — it stays with you as long as you want it.\nIf you have concerns about your account, email support@ohu.com."
      },
      {
        q: "Can I share my login with others?",
        a: "Your account is for personal use only. Sharing login credentials violates our terms of service.\nHowever:\n• If you're a real estate professional working with clients, we offer team and brokerage licensing packages.\n• If you want to give someone else access, they should purchase their own account.\n[Learn about team licensing options]"
      },
      {
        q: "What if I lost my login information?",
        a: "No problem. Go to the login page and use the \"Forgot Password?\" option to reset.\nIf you don't remember your email, email support@ohu.com and we'll help recover your account."
      },
      {
        q: "Can I transfer my access to someone else?",
        a: "No. Accounts are tied to the email address that purchased them and can't be transferred.\nIf someone else needs access, they should purchase their own account (or consider team licensing if you're a professional)."
      }
    ]
  },
  {
    title: "Refunds & Guarantees",
    items: [
      {
        q: "What's your refund policy?",
        a: "30-Day Money-Back Guarantee\nIf you go through any course, template, or guide and don't find it useful, email support@ohu.com within 30 days and we'll refund your money completely. No questions asked. No fine print."
      },
      {
        q: "How do I get a refund?",
        a: "• Email support@ohu.com with your request\n• Include your purchase date and account email\n• We'll process your refund within 5–7 business days\n• Money returned to your original payment method"
      },
      {
        q: "How long does a refund take?",
        a: "5–7 business days after we receive your request. Depending on your bank, it may take another 1–3 business days to appear in your account."
      },
      {
        q: "What if I'm just a few days outside the 30-day window?",
        a: "Reach out to support@ohu.com anyway. We're flexible and want you to be satisfied. Let's talk about your situation."
      },
      {
        q: "What if I have a technical issue with a course?",
        a: "Email support@ohu.com and describe the issue. We'll troubleshoot it with you.\nIf it's a platform issue that prevents you from accessing material you purchased, we'll either fix it or refund you."
      },
      {
        q: "Is there a warranty on templates or calculators?",
        a: "Our templates and calculators are tools — they're not legal advice or financial advice. We provide them \"as-is.\"\nHowever, if you find errors or if something doesn't work as described, let us know and we'll fix it or refund you."
      }
    ]
  },
  {
    title: "Professional/CE Questions",
    items: [
      {
        q: "Is OHU approved for CE (Continuing Education)?",
        a: "Yes — for certain states and professions:\n\nReal Estate CE:\n✅ TREC-approved (Texas)\n✅ CA DRE-approved (California)\n✅ DBPR-approved (Florida)\n✅ NJ RE Commission-approved (New Jersey)\n\nHomebuyer Education:\n✅ HUD-certified (qualifies for down-payment assistance)\n\nMortgage CE:\n⏳ NMLS approval pending\n\nNAR Designations:\n✅ Professional development for ABR®, CRS, GRI (pending)"
      },
      {
        q: "Will my state accept these CE hours?",
        a: "If you're in TX, CA, FL, or NJ — yes, our CE courses are approved by your state's real estate commission.\nIf you're in another state — check with your state's real estate commission. Some accept course credits from TREC or CA DRE-approved providers; others don't. We're working to expand to more states.\nCan't find your state? Email support@ohu.com and ask about our roadmap for your state."
      },
      {
        q: "How many CE hours are available?",
        a: "By state:\n• Texas (TREC): 18 hours per 2-year renewal cycle\n• California (CA DRE): 45 hours per 4-year cycle\n• Florida (DBPR): 14 hours per 2-year cycle\n• New Jersey (NJ Commission): 12 hours per 2-year cycle\nYou can take multiple courses to meet your state's requirements."
      },
      {
        q: "Can I use OHU courses to earn NAR designations?",
        a: "We're working on approval to offer ABR®, CRS, and GRI designation pathways.\nCurrently, our professional development courses provide education aligned with NAR designation requirements, but check directly with NAR about credit acceptance.\nEmail support@ohu.com for updates on NAR partnership."
      },
      {
        q: "How do I get CE credit for completing a course?",
        a: "• Complete the course (watch all modules, take any quizzes)\n• You'll receive a certificate of completion automatically\n• Download your certificate from your account\n• Submit the certificate to your state's real estate commission for CE credit\nWe'll send you an email confirmation with your certificate once you finish."
      },
      {
        q: "What if I take a course but don't finish it?",
        a: "No CE credit until you complete the full course. However, your progress is saved, so you can come back anytime and pick up where you left off."
      },
      {
        q: "Are the CE courses taken live or self-paced?",
        a: "Completely self-paced. You watch at your own speed, on your own schedule. No live sessions. No time pressure."
      },
      {
        q: "Can I get a refund on CE courses?",
        a: "Yes. Our 30-day money-back guarantee applies to all courses, including CE courses.\nHowever, if you've already submitted your certificate to your state's commission, we can't revoke credit (that's their jurisdiction)."
      },
      {
        q: "Do you offer CE for real estate attorneys or financial advisors?",
        a: "We're exploring CLE (Continuing Legal Education) and financial advisor CE options. Check back soon or email support@ohu.com to express interest."
      }
    ]
  },
  {
    title: "Team & Brokerage Licensing",
    items: [
      {
        q: "Do you offer team or brokerage licensing?",
        a: "Yes. We have custom pricing for teams and brokerages that want to give multiple agents/loan officers access to OHU courses and CE.\nBenefits include:\n• Multi-seat access (per agent/loan officer)\n• No per-seat renewals (one-time team license)\n• White-labeled materials (optional)\n• Bulk CE course bundles\n• Client resource packages\n• Dedicated account support"
      },
      {
        q: "How much does team licensing cost?",
        a: "Custom quote based on:\n• Number of seats (agents, loan officers, staff)\n• CE requirements (which states)\n• Additional services (white-labeling, custom courses)\n[Request a team licensing quote]"
      },
      {
        q: "Can I use OHU materials for my clients?",
        a: "If you have professional/team licensing, yes — you can use our templates and guides with your clients (and rebrand if desired).\nIf you have individual access, templates are for your personal use only. Don't share login credentials."
      }
    ]
  },
  {
    title: "Technical & Support",
    items: [
      {
        q: "What are your support hours?",
        a: "Email support is available Monday–Friday, 9 AM–5 PM EST.\nWe guarantee a 24-hour response to all emails, even if you reach out outside business hours.\nEmail: support@ohu.com"
      },
      {
        q: "How do I contact support?",
        a: "Email support@ohu.com with:\n• Your account email\n• Your question or issue\n• Any relevant details (course title, error message, etc.)\nWe'll respond within 24 hours."
      },
      {
        q: "Do you have phone support?",
        a: "Currently, we offer email support only. It allows us to keep pricing low and respond thoughtfully to every question.\nIf you need urgent help, email support@ohu.com and mark it \"URGENT\" — we'll prioritize."
      },
      {
        q: "What if my course won't load?",
        a: "Try:\n• Refresh your browser\n• Clear your cache\n• Try a different browser\n• Check your internet connection\nIf it still doesn't work, email support@ohu.com with:\n• Which course/module won't load\n• What error message you see (if any)\n• What device and browser you're using\nWe'll troubleshoot it."
      },
      {
        q: "Can I download courses as MP4 files?",
        a: "No, courses are streamed from our platform. This protects intellectual property and keeps pricing low for everyone.\nYou can download guides, templates, and PDFs. Video courses require internet access."
      },
      {
        q: "I have an accessibility need. Can you help?",
        a: "Yes. We're committed to accessibility.\nWe offer:\n• Captions on most videos\n• Large text options\n• Screen reader-compatible pages\n• Transcripts (in progress for all courses)\nIf you have a specific need, email support@ohu.com and we'll work with you."
      }
    ]
  },
  {
    title: "Privacy & Security",
    items: [
      {
        q: "Is my information secure?",
        a: "Yes. We use industry-standard encryption (SSL/TLS) for all data.\nYour payment information is processed securely and never stored on our servers. We use a PCI-compliant payment processor for all transactions.\n[Read our full Privacy Policy]"
      },
      {
        q: "Will you share my email with others?",
        a: "No. We never sell or share your email address with third parties.\nYou may receive occasional emails from us about:\n• Course updates\n• New resources\n• Your account\n• Promotions (optional — you can unsubscribe anytime)\n[Read our full Privacy Policy]"
      },
      {
        q: "Can I delete my account?",
        a: "Yes. Go to Account Settings → Delete Account to permanently remove your account and all personal data.\nYou'll lose access to your library, so download any resources you want to keep first."
      },
      {
        q: "Do you use cookies or tracking?",
        a: "We use cookies to:\n• Keep you logged in\n• Remember your preferences\n• Track course progress (for your benefit)\n• Understand how people use OHU (to improve)\nWe don't sell this data. [Read our full Privacy & Cookie Policy]"
      }
    ]
  },
  {
    title: "Other Questions",
    items: [
      {
        q: "Can I get a bulk discount if I buy for my company?",
        a: "Yes — we offer team and brokerage licensing with volume pricing.\n[Learn about team licensing] or email support@ohu.com for a custom quote."
      },
      {
        q: "Is there an affiliate program?",
        a: "Yes! We're building an affiliate program for influencers, real estate pros, and education partners.\nInterested? Email partnerships@ohu.com."
      },
      {
        q: "Can OHU help with my specific real estate situation?",
        a: "Our courses and resources are educational, not legal or financial advice.\nFor specific situations, we recommend consulting a real estate attorney, CPA, or licensed agent/mortgage professional.\nThat said, our courses cover real situations with practical frameworks that might help."
      },
      {
        q: "What's the best way to get started?",
        a: "Three options:\n• All-in: Buy lifetime library access ($197) and dive into your track right away.\n• Try first: Download a free resource and explore before committing.\n• Test it: Buy one individual resource ($27–$47) to see if our approach works for you.\n[Start Learning Now]"
      },
      {
        q: "How do I stay updated on new courses?",
        a: "Subscribe to our email newsletter for weekly tips and course updates.\n[Newsletter signup]\nWe also post on LinkedIn, YouTube, and TikTok."
      },
      {
        q: "What's next for OHU?",
        a: "We're expanding to more states, adding mobile app functionality, and developing advanced courses in specialized areas (syndication, 1031 exchanges, etc.).\nSee our [About page] for our full roadmap."
      }
    ]
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = faqData.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-24 overflow-hidden border-b border-border/50 bg-secondary/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 2px, transparent 0)', backgroundSize: '20px 20px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-secondary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Frequently Asked <span className="font-serif italic text-accent font-semibold">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about OHU, our courses, and how to get the most out of your access.
            </p>
            
            <div className="relative max-w-xl mx-auto mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search FAQs..." 
                className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-primary/20 focus-visible:ring-primary/30 rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredData.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No questions found matching &quot;{searchQuery}&quot;.</p>
                <Button variant="link" onClick={() => setSearchQuery("")} className="mt-4">
                  Clear search
                </Button>
              </div>
            ) : (
              <div className="space-y-16">
                {filteredData.map((category, idx) => (
                  <div key={idx} className="scroll-mt-24" id={`category-${idx}`}>
                    <h2 className="text-2xl font-serif font-medium mb-6 text-primary border-b border-border/50 pb-4">
                      {category.title}
                    </h2>
                    <Accordion type="multiple" className="w-full space-y-4">
                      {category.items.map((item, itemIdx) => (
                        <AccordionItem key={itemIdx} value={`item-${idx}-${itemIdx}`} className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors">
                          <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary transition-colors py-6">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base whitespace-pre-wrap">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DIDN'T FIND YOUR ANSWER? */}
      <section className="py-24 bg-secondary/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-medium">Didn't find your answer?</h2>
            <p className="text-lg text-muted-foreground">
              Still have a question? We're real people and we're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email support@ohu.com
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-14 flex items-center gap-2 bg-background">
                <MessageCircle className="w-5 h-5" />
                Start a chat with support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
