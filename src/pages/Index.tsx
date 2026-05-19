import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  BookOpen, 
  FileText, 
  Map, 
  Calculator, 
  RefreshCw,
  ArrowRight,
  Tag,
  Key,
  LineChart,
  Briefcase,
  Star
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Hero = () => (
  <section 
    className="relative pt-8 md:pt-12 lg:pt-[50px] lg:pb-[300px] overflow-hidden min-h-[50vh] lg:min-h-[65vh] flex flex-col lg:block"
    style={{ background: 'radial-gradient(circle at 50% 50%, #3a1d71, #010523)' }}
  >
    {/* Background Image (Desktop) */}
    <div className="absolute inset-0 z-0 hidden lg:block overflow-hidden">
      <img
        src="https://vibe.filesafe.space/1775492911893254433/attachments/515683d7-abf5-47c4-a6ff-f433fd37acc1.png"
        alt="Real estate success background"
        className="w-full h-full object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 bg-black/20" />
    </div>

    <div className="container mx-auto px-4 relative z-20 mb-8 lg:mb-0">
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
          Master Real Estate With Confidence <br />
          <span className="font-serif italic text-accent font-semibold text-[25px] md:text-[30px] lg:text-[45px]">
            Learn Your Way. Get Personal Guidance.
          </span>
        </h1>

        <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">
          Explore our complete library of self-paced courses, templates, and tools — or book personalized 1-on-1 sessions with Mike's AI Avatar for real-time mentorship on your specific situation.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 md:pt-4 justify-center">
          <Link to="/library" className="w-full sm:w-auto">
            <Button size="lg" className="w-full text-lg px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-xl">
              Explore Library
            </Button>
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom Image (Mobile/Tablet) */}
    <div className="w-full mt-auto -mt-[20px] md:-mt-[150px] block lg:hidden relative z-10 leading-none pointer-events-none">
      <img
        src="https://vibe.filesafe.space/1775492911893254433/attachments/b70dc46c-3a0c-43fa-95f0-9516aa012fde.png"
        alt="People learning real estate"
        className="w-full h-auto object-cover object-bottom block"
      />
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-secondary/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-sm font-medium text-primary uppercase">Real Estate Education That Actually Works</h3>
        <h2 className="text-3xl md:text-4xl font-medium">Skip the overwhelm. Skip the guessing. Get clarity.</h2>
        <p className="text-lg text-muted-foreground">
          You don't need an expert in the room to feel confident. You need the right information — delivered plainly, when you need it. That's what we do here.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-stretch max-w-7xl mx-auto">
        <div className="order-2 lg:order-1 relative min-h-[350px] lg:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-primary to-accent shadow-2xl h-full">
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-card">
          <img 
            src="https://vibe.filesafe.space/1775492911893254433/attachments/76457d19-305b-4bee-aade-f4188d3f0fa3.png" 
            alt="OHU real estate learning resources" 
            className="w-full h-full object-cover"
          />
        </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8 flex flex-col justify-center">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
              <div>
                <h4 className="font-medium mb-2">Learn at Your Own Pace</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Access courses anytime, anywhere. No live sessions. No pressure. Just you and the material, whenever it works for your life.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
              <div>
                <h4 className="font-medium mb-2">Save Money, Sell Smarter</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Sell your home without paying agent commissions — or understand exactly what you're getting for the fee if you choose an agent.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
              <div>
                <h4 className="font-medium mb-2">Real-World Application</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Every course, template, and checklist is built by practitioners. Not theory. Not fluff. Tools that work in real life.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
              <div>
                <h4 className="font-medium mb-2">Skip the Guesswork</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Plug-and-play templates, checklists, and calculators mean you don't have to build from scratch or second-guess yourself.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-[10px]">
            <Link to="/library">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white">Explore the Library</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Audiences = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-sm font-medium text-primary uppercase">Built for Your Real Estate Story</h3>
        <h2 className="text-3xl md:text-5xl font-medium">Everyone's journey is different. Your learning path should be too.</h2>
        <p className="text-lg text-muted-foreground">
          Whether you're selling independently, buying your first home, building wealth through real estate, or advancing your career in the industry — we have a track built for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto mb-8">
        {/* FSBO */}
        <Card className="overflow-hidden bg-card border-border/50 flex flex-col h-full hover:border-primary/50 transition-colors group">
          <div className="aspect-[16/9] w-full overflow-hidden relative">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/1dd90bad-8ab9-421b-a593-37f252df1625.png" alt="FSBO Sellers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply pointer-events-none transition-colors duration-500 group-hover:bg-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="p-8 pt-4 flex flex-col flex-grow">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors -mt-10 relative z-10 border-4 border-card">
              <Tag className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-medium mb-2">FSBO Sellers</h3>
            <p className="text-sm font-medium text-accent mb-4">Sell with confidence. Keep more of your money.</p>
            <p className="text-sm text-muted-foreground mb-8 flex-grow">
              Learn how to price competitively, write compelling listings, coordinate showings, and negotiate offers — all without an agent. You'll handle the work, we'll handle the expertise.
            </p>
            <Link to="/digital-products?category=FSBO+Courses" className="w-full mt-auto"><Button className="w-full" variant="secondary">Explore FSBO Track</Button></Link>
          </div>
        </Card>

        {/* Buyers */}
        <Card className="overflow-hidden bg-card border-border/50 flex flex-col h-full hover:border-primary/50 transition-colors group">
          <div className="aspect-[16/9] w-full overflow-hidden relative">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/35869aa0-6fe6-4728-b6e2-80975aeef248.png" alt="First-Time Homebuyers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply pointer-events-none transition-colors duration-500 group-hover:bg-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="p-8 pt-4 flex flex-col flex-grow">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors -mt-10 relative z-10 border-4 border-card">
              <Key className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-medium mb-2">First-Time Homebuyers</h3>
            <p className="text-sm font-medium text-accent mb-4">Understand every step. Own your decision.</p>
            <p className="text-sm text-muted-foreground mb-8 flex-grow">
              Buying a home feels complicated until someone explains it clearly. From pre-approval to closing, we walk you through every stage so you know exactly what to expect — and what to watch for.
            </p>
            <Link to="/digital-products?category=Buyer+Education" className="w-full mt-auto"><Button className="w-full" variant="secondary">Explore Buyer Track</Button></Link>
          </div>
        </Card>

        {/* Investors */}
        <Card className="overflow-hidden bg-card border-border/50 flex flex-col h-full hover:border-primary/50 transition-colors group">
          <div className="aspect-[16/9] w-full overflow-hidden relative">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/6f75cb53-935e-4129-9b74-dd3f4de05acb.png" alt="Real Estate Investors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply pointer-events-none transition-colors duration-500 group-hover:bg-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="p-8 pt-4 flex flex-col flex-grow">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors -mt-10 relative z-10 border-4 border-card">
              <LineChart className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-medium mb-2">Real Estate Investors</h3>
            <p className="text-sm font-medium text-accent mb-4">Spot good deals. Make confident moves.</p>
            <p className="text-sm text-muted-foreground mb-8 flex-grow">
              You've heard the concepts. Now learn how to actually evaluate a deal, understand your financing options, calculate cash flow, and minimize taxes. Turn knowledge into action.
            </p>
            <Link to="/digital-products?category=Investor+Courses" className="w-full mt-auto"><Button className="w-full" variant="secondary">Explore Investor Track</Button></Link>
          </div>
        </Card>

        {/* Professionals */}
        <Card className="overflow-hidden bg-card border-border/50 flex flex-col h-full hover:border-primary/50 transition-colors group">
          <div className="aspect-[16/9] w-full overflow-hidden relative">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/e2003698-5c54-4282-99f5-302ffa3a1c50.png" alt="Real Estate Professionals" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply pointer-events-none transition-colors duration-500 group-hover:bg-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="p-8 pt-4 flex flex-col flex-grow">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors -mt-10 relative z-10 border-4 border-card">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-2xl font-medium mb-2">Real Estate Professionals</h3>
            <p className="text-sm font-medium text-accent mb-4">Advance your career. Stay compliant.</p>
            <p className="text-sm text-muted-foreground mb-8 flex-grow">
              Get your CE hours done in a way that actually teaches you something. State-approved courses, NAR designations, mortgage compliance — all flexible, self-paced, and built for your schedule.
            </p>
            <Link to="/digital-products?category=Professional+CE" className="w-full mt-auto"><Button className="w-full" variant="secondary">View CE Courses</Button></Link>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-secondary/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-sm font-medium text-primary uppercase">This Actually Helped</h3>
        <h2 className="text-3xl md:text-4xl font-medium">Real Feedback From Real People</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        <Card className="p-8 bg-card border-border/50 flex flex-col">
          <div className="flex gap-1 mb-6 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-lg italic mb-8 flex-grow">"I was so nervous selling without a Realtor. This FSBO guide gave me the scripts and checklists I needed — and I actually enjoyed the process."</p>
          <div className="flex items-center gap-4 mt-auto">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/5b69396c-50a1-401e-a70e-255909c2e4d4.png" alt="Sarah M." className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
            <div>
              <div className="font-bold">Sarah M.</div>
              <div className="text-sm text-primary">Texas FSBO Seller</div>
            </div>
          </div>
        </Card>
        <Card className="p-8 bg-card border-border/50 flex flex-col">
          <div className="flex gap-1 mb-6 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-lg italic mb-8 flex-grow">"I felt overwhelmed as a first-time buyer until I found these templates. They gave me clarity and peace of mind."</p>
          <div className="flex items-center gap-4 mt-auto">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/7d907cfe-c539-4db8-8c76-32cf9e393bcb.png" alt="Marcus T." className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
            <div>
              <div className="font-bold">Marcus T.</div>
              <div className="text-sm text-primary">First-Time Homebuyer</div>
            </div>
          </div>
        </Card>
        <Card className="p-8 bg-card border-border/50 flex flex-col">
          <div className="flex gap-1 mb-6 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-lg italic mb-8 flex-grow">"The investment calculator saved me thousands by helping me see which deals were actually good. This changed my strategy completely."</p>
          <div className="flex items-center gap-4 mt-auto">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/b1db533c-7c6e-4785-8ab4-6d8382bd1dc8.png" alt="Jennifer L." className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
            <div>
              <div className="font-bold">Jennifer L.</div>
              <div className="text-sm text-primary">Real Estate Investor</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="text-center text-muted-foreground max-w-2xl mx-auto">
        <p>Trusted by <strong className="text-foreground">10,000+ people</strong> across the U.S. who wanted real estate education that respects their time and budget.</p>
      </div>
    </div>
  </section>
);

const WhatYouGet = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-sm font-medium text-primary uppercase">One library. Every audience. Every tool.</h3>
        <h2 className="text-3xl md:text-5xl font-medium">What You Get Access To</h2>
        <p className="text-lg text-muted-foreground">
          When you get lifetime library access, you're investing in a complete education — not just one course. Every track. Every template. Every future update. Yours for life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto mb-16">
        <div className="flex gap-4">
          <div className="mt-1"><BookOpen className="w-6 h-6 text-primary" /></div>
          <div>
            <h4 className="text-xl font-medium mb-2">Video Courses</h4>
            <p className="text-muted-foreground leading-relaxed">Self-paced modules for FSBO selling, first-time buying, real estate investing, and professional continuing education. Taught plainly. No jargon. Built to stick.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1"><FileText className="w-6 h-6 text-primary" /></div>
          <div>
            <h4 className="text-xl font-medium mb-2">Templates & Checklists</h4>
            <p className="text-muted-foreground leading-relaxed">Plug-and-play tools: listing templates, closing checklists, offer scripts, property analysis worksheets, and more. No starting from scratch.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1"><Map className="w-6 h-6 text-primary" /></div>
          <div>
            <h4 className="text-xl font-medium mb-2">Guides & Roadmaps</h4>
            <p className="text-muted-foreground leading-relaxed">Step-by-step walkthroughs for every situation. From "How to Price Your Home" to "Your First Real Estate Investment" to "Tax Strategies for Landlords."</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="mt-1"><Calculator className="w-6 h-6 text-primary" /></div>
          <div>
            <h4 className="text-xl font-medium mb-2">Interactive Calculators</h4>
            <p className="text-muted-foreground leading-relaxed">Deal analyzers, cash flow projectors, mortgage calculators, and ROI tools. See the math. Trust the numbers. Make better decisions.</p>
          </div>
        </div>
        <div className="flex gap-4 md:col-span-2 max-w-2xl mx-auto bg-secondary/50 p-6 rounded-2xl border border-border/50">
          <div className="mt-1"><RefreshCw className="w-6 h-6 text-primary" /></div>
          <div>
            <h4 className="text-xl font-medium mb-2">Lifetime Access + Future Updates</h4>
            <p className="text-muted-foreground leading-relaxed">Pay once. Keep forever. Every new course, template, and update gets added to your library at no extra cost. No subscriptions. No renewals.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a href="https://portal.theohu.com/courses/offers/9b523eb1-714f-40e2-8a88-3b90571e54af" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="text-lg px-8 h-14">Get Lifetime Access — $197</Button>
        </a>
      </div>
    </div>
  </section>
);

const StartFree = () => (
  <section className="py-24 bg-secondary/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-sm font-medium text-primary uppercase">Not ready to commit? That's okay.</h3>
        <h2 className="text-3xl md:text-4xl font-medium">Start Free. Learn More Later.</h2>
        <p className="text-lg text-muted-foreground">
          Download one of our most popular resources and see how clear this can be. No email list tricks. No surprise upsells. Just helpful tools to get you started.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { title: "FSBO Quick-Start Checklist", desc: "Your step-by-step roadmap to list and sell your home independently.", link: "/free-resource/fsbo-checklist" },
          { title: "First-Time Buyer Roadmap", desc: "Everything you need to know before you make your biggest purchase.", link: "/free-resource/buyer-roadmap" },
          { title: "Real Estate Investment Basics Guide", desc: "Quick insights on spotting opportunities and starting your wealth-building journey.", link: "/free-resource/investor-basics" },
          { title: "Mortgage Readiness Scorecard", desc: "Understand where you stand financially before you apply for a loan.", link: "/free-resource/buyer-roadmap" },
          { title: "FSBO Listing Description Template", desc: "See exactly how to write a listing that sells — with real examples.", link: "/free-resource/fsbo-checklist" },
          { title: "Real Estate Terms Glossary", desc: "All the jargon, explained in plain English. Bookmark this.", link: "/free-resource/investor-basics" }
        ].map((item, i) => (
          <Card key={i} className="p-6 bg-card border-border/50 hover:border-primary/50 transition-colors flex flex-col group">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <h4 className="font-medium text-lg leading-tight">{item.title}</h4>
            </div>
            <p className="text-muted-foreground text-sm mb-6 flex-grow">{item.desc}</p>
            <Link to={item.link} className="w-full mt-auto"><Button variant="outline" className="w-full group-hover:bg-secondary">Preview & Download</Button></Link>
          </Card>
        ))}
      </div>

      <div className="mt-20 max-w-5xl mx-auto">
        <img 
          src="https://vibe.filesafe.space/1775492911893254433/attachments/5ecbe083-79ed-4507-bb75-6a6928e41ebc.png" 
          alt="Collection of free real estate guides and checklists" 
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
);

const WhyWeDoThis = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h3 className="text-sm font-medium text-primary uppercase">Why We Do This</h3>
        <h2 className="text-3xl md:text-4xl font-medium">Real Estate Doesn't Have to Feel Complicated</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>You're not a transaction. You're someone making one of the biggest decisions of your life.</p>
          <p>Our job isn't to sell you something you don't need. It's to give you the tools, knowledge, and confidence to make smart moves — at every stage of your real estate journey.</p>
          <div className="bg-secondary/50 p-8 rounded-2xl border border-border/50 mt-8 text-left">
            <h4 className="font-medium text-foreground mb-4">We built OHU because we believe:</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0" /> Clarity matters more than complexity</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0" /> Honesty matters more than hype</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0" /> Action matters more than information overload</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0" /> Your time matters — which is why we keep it simple</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BlogTeasers = () => (
  <section className="py-24 bg-secondary/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-sm font-medium text-primary uppercase">Learn Something New</h3>
        <h2 className="text-3xl md:text-4xl font-medium">Latest From The Library</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        <Card className="overflow-hidden bg-card border-border/50 flex flex-col hover:border-primary/50 transition-colors group">
          <div className="aspect-[16/9] w-full overflow-hidden relative">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/30989064-36b9-4713-b8f3-3cd3a0511ef7.png" alt="FSBO Sellers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-primary/40 to-transparent mix-blend-multiply pointer-events-none" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h4 className="font-medium text-xl mb-3 leading-tight">What FSBO Sellers Wish They Knew Sooner</h4>
            <p className="text-muted-foreground mb-6 flex-grow">The biggest mistakes independent sellers make — and how to avoid them.</p>
            <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">Read Article <ArrowRight className="w-4 h-4 ml-1" /></a>
          </div>
        </Card>
        <Card className="overflow-hidden bg-card border-border/50 flex flex-col hover:border-primary/50 transition-colors group">
          <div className="aspect-[16/9] w-full overflow-hidden relative">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/447f06a2-73d2-4b9e-9938-e1d4d77f09a8.png" alt="Closing Costs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-primary/40 to-transparent mix-blend-multiply pointer-events-none" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h4 className="font-medium text-xl mb-3 leading-tight">Understanding Closing Costs Before You Buy</h4>
            <p className="text-muted-foreground mb-6 flex-grow">Breaking down the numbers so you're not surprised at the closing table.</p>
            <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">Read Article <ArrowRight className="w-4 h-4 ml-1" /></a>
          </div>
        </Card>
        <Card className="overflow-hidden bg-card border-border/50 flex flex-col hover:border-primary/50 transition-colors group">
          <div className="aspect-[16/9] w-full overflow-hidden relative">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/918abc1f-5fbf-43bb-80cb-b56f270a39d1.png" alt="Real Estate Investment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-primary/40 to-transparent mix-blend-multiply pointer-events-none" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h4 className="font-medium text-xl mb-3 leading-tight">Should You Invest in Real Estate in 2025?</h4>
            <p className="text-muted-foreground mb-6 flex-grow">A honest look at the current market and whether it makes sense for you.</p>
            <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">Read Article <ArrowRight className="w-4 h-4 ml-1" /></a>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <Link to="/blog">
          <Button variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white">Visit the Blog</Button>
        </Link>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-primary/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
    
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-medium mb-6">Ready to Feel More Confident About Real Estate?</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
        Start learning today with tools that are practical, proven, and built for real people — not gurus.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <a href="https://portal.theohu.com/courses/offers/9b523eb1-714f-40e2-8a88-3b90571e54af" target="_blank" rel="noopener noreferrer"><Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14">Get Instant Access</Button></a>
        <span className="text-muted-foreground font-medium">or</span>
        <Link to="/digital-products?type=Free+Downloads" className="w-full sm:w-auto">
          <Button size="lg" variant="outline" className="w-full text-lg px-8 h-14 border border-white text-white hover:bg-white/10 hover:text-white bg-background/50 backdrop-blur-sm">
            Download a Free Resource
          </Button>
        </Link>
      </div>
      
      <p className="text-sm text-muted-foreground max-w-lg mx-auto">
        <strong className="text-foreground">30-day money-back guarantee.</strong> If you go through the material and don't find it useful, we'll refund you completely. No questions asked.
      </p>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Features />
      <Audiences />
      <Testimonials />
      <WhatYouGet />
      <StartFree />
      <WhyWeDoThis />
      <BlogTeasers />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
