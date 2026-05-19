import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  Calendar, 
  UserCheck, 
  TrendingUp, 
  Home, 
  Briefcase,
  ArrowRight,
  Sparkles
} from "lucide-react";

const Hero = () => (
  <section className="relative pt-10 lg:pt-8 pb-32 lg:pb-[160px] overflow-hidden flex items-start min-h-[70vh]">
    <div className="absolute inset-0 z-0">
      <img
        src="https://vibe.filesafe.space/1775492911893254433/attachments/1cbd5de4-6f6f-46c0-b652-02ac5fe718ff.png"
        alt="1-on-1 Mentorship"
        className="w-full h-full object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>

    <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center mt-6 lg:mt-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary mb-8 border border-primary/30">
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-medium">Available 24/7</span>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl">
        Your Personal Real Estate Mentor. <br />
        <span className="font-serif italic text-accent font-semibold">
          Available 24/7.
        </span>
      </h1>
      <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
        Meet Mike's AI Avatar — personalized 1-on-1 training that listens, asks questions, and teaches based on YOUR specific situation. Not pre-recorded. Not generic. Real-time mentorship.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
        <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 bg-primary hover:bg-primary/90">
          Schedule Your First Session
        </Button>
      </div>
      <p className="mt-6 text-sm text-muted-foreground font-medium">
        Your sessions are personalized to your deal, your market, your goals. Real mentorship at a fraction of the cost.
      </p>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 bg-secondary/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-sm font-medium text-primary uppercase">How It's Different From Pre-Recorded Courses</h3>
        <h2 className="text-3xl md:text-4xl font-medium">Personalized guidance when you need it</h2>
        <p className="text-lg text-muted-foreground">
          Our library courses are great for learning foundational knowledge. But when you have a specific situation — a house to price, a deal to analyze, a test to prepare for — you need personalized guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Card className="p-6 bg-card border-border/50 relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Calendar className="w-24 h-24" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
            <span className="text-xl font-bold text-primary">1</span>
          </div>
          <h4 className="text-xl font-medium mb-3">Book Your Session</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Choose your time (24/7 availability)</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Pick your duration (30, 45, or 60 min)</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Tell Mike's avatar your situation upfront</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Get a reminder 1 hour before</li>
          </ul>
        </Card>

        <Card className="p-6 bg-card border-border/50 relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <MessageSquare className="w-24 h-24" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
            <span className="text-xl font-bold text-primary">2</span>
          </div>
          <h4 className="text-xl font-medium mb-3">Have a Conversation</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> The avatar asks YOU questions</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Listens to your specific situation</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Identifies gaps and misconceptions</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Teaches in real-time based on your needs</li>
          </ul>
        </Card>

        <Card className="p-6 bg-card border-border/50 relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <UserCheck className="w-24 h-24" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
            <span className="text-xl font-bold text-primary">3</span>
          </div>
          <h4 className="text-xl font-medium mb-3">Personalized Guidance</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Advice tailored to YOUR situation</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Real-time feedback on your ideas</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Step-by-step action plan</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Written follow-up with notes</li>
          </ul>
        </Card>

        <Card className="p-6 bg-card border-border/50 relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Clock className="w-24 h-24" />
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
            <span className="text-xl font-bold text-primary">4</span>
          </div>
          <h4 className="text-xl font-medium mb-3">Apply & Follow Up</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Execute your action plan</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Ask follow-up questions</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Schedule next session to check progress</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> See real results in your transaction</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

const InsideSession = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-medium text-primary uppercase mb-2">Inside a 1-on-1 Session</h3>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Real Example: FSBO Seller</h2>
            <p className="text-lg text-muted-foreground">
              Watch how the avatar adapts to a specific situation in real-time.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-6 border border-border/50 space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <span className="font-bold text-accent">Y</span>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Your Situation</p>
                <p className="bg-background p-3 rounded-lg rounded-tl-none border border-border/50">"I'm selling my house independently. I think it's worth $425K but I'm not sure how to price it or market it effectively."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">M</span>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Mike's Avatar</p>
                <p className="bg-primary/10 p-3 rounded-lg rounded-tl-none border border-primary/20">"Tell me about your house. What's the square footage, condition, and how many bedrooms?"</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">M</span>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Mike's Avatar</p>
                <p className="bg-primary/10 p-3 rounded-lg rounded-tl-none border border-primary/20">"I see. Based on what you've told me, here's what I'm seeing... [personalized price recommendation based on YOUR data]. Does that align with your expectations?"</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <span className="font-bold text-accent">Y</span>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">You</p>
                <p className="bg-background p-3 rounded-lg rounded-tl-none border border-border/50">"Yes, but I'm worried about marketing my home without photos. How do I get good photos?"</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-medium mb-6">What Makes This Different</h3>
          <div className="space-y-6">
            {[
              { title: "Not generic", desc: "The avatar knows YOUR house, YOUR market, YOUR timeline" },
              { title: "Interactive", desc: "You ask questions, avatar listens and adjusts" },
              { title: "Real-time feedback", desc: "You get immediate, personalized guidance" },
              { title: "Conversational", desc: "Feels like talking to a mentor, not watching a video" },
              { title: "Actionable", desc: "You leave with a clear next step, not just information" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
                <div>
                  <h4 className="font-medium text-lg">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Button size="lg" className="w-full sm:w-auto mt-4">Experience It Yourself</Button>
        </div>
      </div>
    </div>
  </section>
);

const WhoItsFor = () => (
  <section className="py-24 bg-secondary/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-sm font-medium text-primary uppercase">Who It's For</h3>
        <h2 className="text-3xl md:text-4xl font-medium">Are 1-on-1 Sessions Right for You?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Home className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-medium">FSBO Sellers</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="font-medium mb-2">You might want 1-on-1 training if:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• You have a specific house to sell (not hypothetical)</li>
                <li>• You want guidance on pricing, marketing, and showing strategy</li>
                <li>• You want someone to reality-check your decisions</li>
                <li>• You want support through the entire selling process</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Recommended tier:</p>
              <p className="text-sm text-accent font-medium">Coach (4 sessions/month through your sale)</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-medium">First-Time Buyers</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="font-medium mb-2">You might want 1-on-1 training if:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• You have a specific financial situation to review</li>
                <li>• You want to understand YOUR pre-approval range</li>
                <li>• You want guidance on offers, inspections, and closing</li>
                <li>• You need support from pre-approval through closing</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Recommended tier:</p>
              <p className="text-sm text-accent font-medium">Coach (4 sessions/month through closing)</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-medium">Real Estate Investors</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="font-medium mb-2">You might want 1-on-1 training if:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• You found a specific deal and want to analyze it</li>
                <li>• You want to understand YOUR financing options</li>
                <li>• You want guidance on your investment strategy</li>
                <li>• You're building a portfolio and need mentorship</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Recommended tier:</p>
              <p className="text-sm text-accent font-medium">Starter or Coach depending on volume</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-medium">Professionals & CE</h3>
          </div>
          <div className="space-y-6">
            <div>
              <p className="font-medium mb-2">You might want 1-on-1 training if:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• You're preparing for a NAR designation</li>
                <li>• You're getting your real estate license</li>
                <li>• You're preparing for an NMLS exam or state CE</li>
                <li>• You want to close knowledge gaps in expertise</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Recommended tier:</p>
              <p className="text-sm text-accent font-medium">Coach (through your certification timeline)</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-sm font-medium text-primary uppercase">Three Pricing Tiers</h3>
        <h2 className="text-3xl md:text-5xl font-medium">Choose the Support Level You Need</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="p-8 bg-card border-border/50 flex flex-col relative">
          <h3 className="text-2xl font-medium mb-2">Starter</h3>
          <p className="text-muted-foreground text-sm mb-6 h-10">Perfect for: One-time questions or analyzing a single deal</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$297</span>
            <span className="text-muted-foreground text-sm ml-2">one-time</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> 3 × 30-minute sessions (use within 30 days)</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Book anytime, 24/7</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Personalized guidance for your situation</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Follow-up notes and checklist</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> All library content included</li>
          </ul>
          <div className="text-center text-sm text-muted-foreground mb-4">Cost per session: $99</div>
          <Button variant="outline" className="w-full">Book Starter Sessions</Button>
        </Card>

        <Card className="p-8 bg-secondary border-primary flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-primary/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
          <h3 className="text-2xl font-medium mb-2">Coach</h3>
          <p className="text-muted-foreground text-sm mb-6 h-10">Perfect for: Active transactions (selling, buying, first deal)</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$497</span>
            <span className="text-muted-foreground text-sm ml-2">/month</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> 4 × 45-minute sessions per month</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Book anytime, 24/7</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Ongoing mentorship through your project</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Monthly action plans + accountability</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Follow-up notes + priority support</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> All library content included</li>
          </ul>
          <div className="text-center text-sm text-primary font-medium mb-2">3-month minimum ($1,491 total)</div>
          <div className="text-center text-sm text-muted-foreground mb-4">Cost per session: $31</div>
          <Button className="w-full">Start Coach Membership</Button>
        </Card>

        <Card className="p-8 bg-card border-border/50 flex flex-col relative">
          <h3 className="text-2xl font-medium mb-2">Partner</h3>
          <p className="text-muted-foreground text-sm mb-6 h-10">Perfect for: Investors building a portfolio or pros growing a business</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$1,497</span>
            <span className="text-muted-foreground text-sm ml-2">/month</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> 8 × 60-minute sessions per month</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Dedicated mentor relationship (same avatar)</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Unlimited follow-up questions (email)</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Monthly strategy reviews</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Exclusive partner resources</li>
            <li className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Can record sessions for your records</li>
          </ul>
          <div className="text-center text-sm text-muted-foreground mb-2">6-month minimum ($7,485 total)</div>
          <div className="text-center text-sm text-muted-foreground mb-4">Cost per session: $31</div>
          <Button variant="outline" className="w-full">Become a Training Partner</Button>
        </Card>
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section className="py-24 bg-secondary/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-sm font-medium text-primary uppercase">Real Results</h3>
        <h2 className="text-3xl md:text-4xl font-medium">What People Achieve With 1-on-1 Training</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="p-6 bg-card border-border/50 flex flex-col">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">FSBO Seller Case Study</span>
          </div>
          <h4 className="text-xl font-medium mb-4">"Saved $25,700 in commission"</h4>
          <div className="space-y-4 text-sm text-muted-foreground mb-6 flex-grow">
            <p><strong className="text-foreground">Situation:</strong> Marcus wanted to sell his $425K home independently but was nervous about pricing and marketing.</p>
            <p><strong className="text-foreground">Sessions:</strong> 4 × 45-min Coach sessions over 3 months</p>
            <p><strong className="text-foreground">Result:</strong> Sold for $429K (within 2% of guidance), closed in 8 weeks.</p>
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg italic text-sm border border-border/50">
            "Instead of guessing, I had a mentor who knew my house and my market. Worth every penny."
          </div>
        </Card>

        <Card className="p-6 bg-card border-border/50 flex flex-col">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">First-Time Buyer Case Study</span>
          </div>
          <h4 className="text-xl font-medium mb-4">"Found an $8K grant I didn't know about"</h4>
          <div className="space-y-4 text-sm text-muted-foreground mb-6 flex-grow">
            <p><strong className="text-foreground">Situation:</strong> Amy felt overwhelmed about buying her first home and worried her down payment wasn't enough.</p>
            <p><strong className="text-foreground">Sessions:</strong> 3 × 45-min Coach sessions</p>
            <p><strong className="text-foreground">Result:</strong> Closed on her home with $8K grant + 5% down payment (instead of 20%).</p>
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg italic text-sm border border-border/50">
            "Having someone explain things in my situation made all the difference. I went from panicked to prepared."
          </div>
        </Card>

        <Card className="p-6 bg-card border-border/50 flex flex-col">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Investor Case Study</span>
          </div>
          <h4 className="text-xl font-medium mb-4">"Saved me from a $450K mistake"</h4>
          <div className="space-y-4 text-sm text-muted-foreground mb-6 flex-grow">
            <p><strong className="text-foreground">Situation:</strong> David found a duplex for $450K and thought it was a great deal. Wanted to analyze it before committing.</p>
            <p><strong className="text-foreground">Sessions:</strong> 1 × Starter session</p>
            <p><strong className="text-foreground">Result:</strong> Avatar showed his cash flow would be negative. Passed on the deal, found a better property 2 months later.</p>
          </div>
          <div className="bg-secondary/50 p-4 rounded-lg italic text-sm border border-border/50">
            "The session showed me I was looking at deals wrong. Changed my entire investment strategy."
          </div>
        </Card>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    {
      q: "How does the AI avatar know about my situation?",
      a: "Before each session, you fill out a quick form about your situation (property details, goals, concerns). The avatar reads this before your session, so it's prepared with context. During the session, you can elaborate, and the avatar asks follow-up questions to get the full picture."
    },
    {
      q: "Can the avatar really answer MY specific questions?",
      a: "Yes. The avatar is trained on real estate knowledge, market data, and thousands of scenarios. It can analyze your specific deal, give market guidance for your neighborhood, understand your financial situation, and provide personalized next steps. It's not a generic chatbot — it's a trained mentor."
    },
    {
      q: "How is this different from a real estate agent or coach?",
      a: "Three main differences: 1) Available 24/7. 2) Lower cost ($31–99 per session vs. $250–500/hour). 3) No sales pressure — the avatar is there to teach, not to sell you services. The tradeoff: It's an AI rather than a human."
    },
    {
      q: "Can I record my session?",
      a: "Starter tier sessions are not recorded. For Coach tier, you can request a recording (provided within 24 hours). Partner tier users can record sessions directly. Recordings are for your personal use only."
    },
    {
      q: "What if I'm not happy with my session?",
      a: "Email support@ohu.com within 48 hours and let us know why. We'll either provide a replacement session with fresh guidance, or refund your session credit. We want you to get real value."
    },
    {
      q: "Is 1-on-1 training better than library courses?",
      a: "They're complementary. Library courses provide the foundation and knowledge. 1-on-1 training provides personalization and application. The best approach is to do both."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-sm font-medium text-primary uppercase">Common Questions</h3>
          <h2 className="text-3xl md:text-4xl font-medium">FAQ — 1-on-1 Training</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
              <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden bg-primary/10 border-t border-primary/20">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-medium mb-6">Get Personalized Guidance Today</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
        Stop guessing. Get real mentorship from an AI avatar that understands YOUR market, YOUR deal, and YOUR goals.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 bg-primary hover:bg-primary/90">
          Schedule Your First Session
        </Button>
      </div>
      
      <p className="text-sm text-muted-foreground max-w-lg mx-auto">
        <strong className="text-foreground">30-day satisfaction guarantee</strong> on all sessions. If you're not satisfied, we'll refund you.
      </p>
    </div>
  </section>
);

const AITraining = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <HowItWorks />
      <InsideSession />
      <WhoItsFor />
      <Pricing />
      <CaseStudies />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default AITraining;
