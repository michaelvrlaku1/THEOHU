import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, MapPin, Mail, ArrowRight, ShieldCheck, Clock, Users, Globe, Building, ArrowUpRight, Map, GraduationCap, MessageCircle, Smartphone, BrainCircuit, Wallet, Megaphone, Blocks } from "lucide-react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden border-b border-border/50 min-h-[50vh] flex items-center bg-secondary/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-secondary/30" />
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Real Estate Doesn't Have to Feel <span className="font-serif italic text-accent font-semibold">Complicated</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We built OHU because people deserve access to clear, honest guidance at every stage of their real estate journey — without overwhelm, pressure, or gatekeeping.
            </p>
            <div className="bg-primary/10 border border-primary/20 p-6 sm:p-8 rounded-2xl text-left mt-12 max-w-3xl mx-auto shadow-lg shadow-primary/5">
              <p className="text-lg leading-relaxed">
                Whether you're selling your home, buying your first place, building wealth through real estate, or advancing your career in the industry, you deserve tools and knowledge that actually work. That's what we're here to provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Our Story */}
      <section id="our-story" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider">Our Story</h3>
              <h2 className="text-3xl md:text-5xl font-medium">How Online Homeownership University Started</h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>A few years ago, our founder (a real estate educator and former investor) was frustrated with what was available.</p>
              <p>People asked for help with real estate decisions. And the answers they got were either:</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            <Card className="p-6 bg-secondary/30 border-border/50 text-center flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <BrainCircuit className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium text-foreground mb-3">Too complicated</h4>
              <p className="text-sm text-muted-foreground">Industry jargon, complex theory, 3-hour training videos</p>
            </Card>
            <Card className="p-6 bg-secondary/30 border-border/50 text-center flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium text-foreground mb-3">Too expensive</h4>
              <p className="text-sm text-muted-foreground">Subscription models, hidden upsells, gatekeeping behind paywalls</p>
            </Card>
            <Card className="p-6 bg-secondary/30 border-border/50 text-center flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Megaphone className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium text-foreground mb-3">Too salesy</h4>
              <p className="text-sm text-muted-foreground">Hype and pressure instead of honest, practical guidance</p>
            </Card>
            <Card className="p-6 bg-secondary/30 border-border/50 text-center flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Blocks className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium text-foreground mb-3">Too fragmented</h4>
              <p className="text-sm text-muted-foreground">Different resources scattered across platforms, no place for everything</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch max-w-6xl mx-auto mb-20">
            <div className="space-y-6 flex flex-col justify-center">
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>So she started teaching the way she wished she'd been taught: plainly, practically, and with respect for people's time and budget.</p>
                <p>She created simple guides. Clear templates. Real-world checklists. Interactive calculators that showed the actual math.</p>
                <p>And something happened — people started getting results. FSBO sellers saved thousands in commission. First-time buyers qualified for grants and closed on homes without overwhelm. Investors analyzed deals with confidence and avoided costly mistakes.</p>
                <p>Word spread. More people asked for help. The library grew.</p>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mt-8">
                <p className="text-foreground font-medium text-2xl">And then we realized: this should be a university.</p>
                <p>Not the ivory tower kind — the kind that meets people where they are, teaches what matters, respects their budget, and doesn't gatekeep knowledge.</p>
                <p className="font-serif italic text-4xl text-primary pt-2">That's OHU.</p>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] lg:min-h-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-primary to-accent shadow-2xl h-full">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-card">
                  <img 
                    src="https://vibe.filesafe.space/1775492911893254433/assets/5cc234de-f0ac-4ea9-a3b0-6b8f40fd460c.png" 
                    alt="OHU Founder" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What We Believe */}
      <section className="py-24 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider">What We Believe</h3>
            <h2 className="text-3xl md:text-5xl font-medium">Our Core Principles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Clarity First</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">You don't need jargon. You don't need theory. You need information explained plainly, so you can make confident decisions.</p>
              <p className="text-sm font-medium">Real estate doesn't have to feel complicated. It just needs to be explained clearly.</p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Honesty Matters</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">We set realistic expectations. We don't promise shortcuts or guaranteed returns. We tell you what works, what doesn't, and where you should be cautious.</p>
              <p className="text-sm font-medium">If something is risky, we say so. Trust is everything.</p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Your Time Has Value</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">You don't have time for 10-hour courses or information overload. We keep it practical. We keep it scannable.</p>
              <p className="text-sm font-medium">We respect that you're busy.</p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Access Shouldn't Be Gatekept</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">Real estate knowledge shouldn't be locked behind expensive seminars or subscription models.</p>
              <p className="text-sm font-medium">Our price reflects our belief: education should be accessible to everyday people.</p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Built by Practitioners</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">Our team includes real estate agents, mortgage professionals, investors, and people who've sold homes independently.</p>
              <p className="text-sm font-medium">We teach what we actually do — not theory.</p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">One-Time Payment, Forever Access</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">No monthly charges. No surprise renewals. No expiration. You buy it once, it's yours forever.</p>
              <p className="text-sm font-medium">Even future updates are included at no extra cost.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: Meet the People */}
      <section id="meet-the-team" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider">Meet the People Behind OHU</h3>
            <h2 className="text-3xl md:text-5xl font-medium">Who's Creating This</h2>
            <p className="text-lg text-muted-foreground">OHU isn't built by corporate marketing teams. It's built by real estate educators, practitioners, and people who actually use these tools every day.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-medium mb-8 text-center">Our Team Values</h3>
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground text-center mb-8">We're not a faceless corporation. Everyone behind OHU:</p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-full"><Users className="w-5 h-5 text-primary" /></div>
                  <div>
                    <strong className="text-foreground block mb-1">Has real estate experience</strong>
                    <span className="text-muted-foreground">(not just marketing experience)</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-full"><Building className="w-5 h-5 text-primary" /></div>
                  <div>
                    <strong className="text-foreground block mb-1">Uses the tools we teach</strong>
                    <span className="text-muted-foreground">(not just theory)</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-full"><ShieldCheck className="w-5 h-5 text-primary" /></div>
                  <div>
                    <strong className="text-foreground block mb-1">Believes in our mission</strong>
                    <span className="text-muted-foreground">(we could work anywhere; we chose this)</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-full"><Mail className="w-5 h-5 text-primary" /></div>
                  <div>
                    <strong className="text-foreground block mb-1">Answers your emails</strong>
                    <span className="text-muted-foreground">(we don't hide behind automated support)</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-2 rounded-full"><Clock className="w-5 h-5 text-primary" /></div>
                  <div>
                    <strong className="text-foreground block mb-1">Updates courses based on what actually changes</strong>
                    <span className="text-muted-foreground">(market shifts, new regulations)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: What Makes OHU Different */}
      <section className="py-24 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider">The OHU Difference</h3>
            <h2 className="text-3xl md:text-5xl font-medium">Why We're Not Like Everyone Else</h2>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="py-6 px-6 font-medium text-muted-foreground w-1/4 text-center bg-muted/50 rounded-tl-xl">What Matters</th>
                  <th className="py-6 px-6 font-medium text-muted-foreground w-1/3 text-center bg-muted/20">Other Platforms</th>
                  <th className="py-6 px-6 font-medium text-primary text-xl w-5/12 bg-primary/5 rounded-tr-xl text-center">OHU</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="py-5 px-6 font-medium bg-muted/50">Pricing Model</td>
                  <td className="py-5 px-6 text-muted-foreground bg-muted/20">Monthly subscriptions ($29–$99/mo)</td>
                  <td className="py-5 px-6 font-medium bg-primary/5">One-time payment ($197 lifetime)</td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-medium bg-muted/50">Course Format</td>
                  <td className="py-5 px-6 text-muted-foreground bg-muted/20">Long video lectures (2–5 hours each)</td>
                  <td className="py-5 px-6 font-medium bg-primary/5">Short, practical modules (10–20 min)</td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-medium bg-muted/50">Content Quality</td>
                  <td className="py-5 px-6 text-muted-foreground bg-muted/20">Generic for mass market</td>
                  <td className="py-5 px-6 font-medium bg-primary/5">Built by practitioners for real situations</td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-medium bg-muted/50">Jargon Level</td>
                  <td className="py-5 px-6 text-muted-foreground bg-muted/20">Heavy industry language</td>
                  <td className="py-5 px-6 font-medium bg-primary/5">Plain English anyone understands</td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-medium bg-muted/50">Audience Focus</td>
                  <td className="py-5 px-6 text-muted-foreground bg-muted/20">"Everyone"</td>
                  <td className="py-5 px-6 font-medium bg-primary/5">Four specific tracks (FSBO, Buyer, Investor, Pro)</td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-medium bg-muted/50">Templates Included</td>
                  <td className="py-5 px-6 text-muted-foreground bg-muted/20">Upsold separately ($$$)</td>
                  <td className="py-5 px-6 font-medium bg-primary/5 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Included in access</td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-medium bg-muted/50">Calculators</td>
                  <td className="py-5 px-6 text-muted-foreground bg-muted/20">Basic or missing</td>
                  <td className="py-5 px-6 font-medium bg-primary/5 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Interactive, detailed analysis tools</td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-medium bg-muted/50">Support</td>
                  <td className="py-5 px-6 text-muted-foreground bg-muted/20">Email only, slow response</td>
                  <td className="py-5 px-6 font-medium bg-primary/5">Priority support, 24-hour response</td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-medium bg-muted/50">Future Updates</td>
                  <td className="py-5 px-6 text-muted-foreground bg-muted/20">May require re-purchase or new subscription</td>
                  <td className="py-5 px-6 font-medium bg-primary/5 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Automatic, included at no cost</td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-medium bg-muted/50">Refund Guarantee</td>
                  <td className="py-5 px-6 text-muted-foreground bg-muted/20">7–14 days</td>
                  <td className="py-5 px-6 font-medium bg-primary/5">30 days, no questions asked</td>
                </tr>
                <tr>
                  <td className="py-5 px-6 font-medium border-b-0 bg-muted/50 rounded-bl-xl">Hidden Fees</td>
                  <td className="py-5 px-6 text-muted-foreground border-b-0 bg-muted/20">Upsells throughout platform</td>
                  <td className="py-5 px-6 font-medium bg-primary/5 rounded-br-xl border-b-0">None. Transparent pricing.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: Our Partners & Affiliations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider">Our Partners & Affiliations</h3>
            <h2 className="text-3xl md:text-5xl font-medium">Who We Work With</h2>
            <p className="text-lg text-muted-foreground">We partner with trusted platforms and organizations that share our commitment to education and accessibility.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 bg-card border-border/50">
              <img src="https://vibe.filesafe.space/1775492911893254433/attachments/31525138-9622-4db6-91c6-76702350959d.png" alt="NAR Logo" className="h-12 w-auto mb-6 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
              <h4 className="text-xl font-medium mb-2">NAR (National Association of Realtors)</h4>
              <p className="text-sm text-primary mb-4 font-medium">CE approval & designation pathways</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Why we partner:</strong> To provide high-quality, approved continuing education for real estate professionals.</p>
                <p><strong>What this means for you:</strong> You get CE credits that actually count toward your license renewal while learning practical skills.</p>
              </div>
            </Card>
            <Card className="p-8 bg-card border-border/50">
              <img src="https://vibe.filesafe.space/1775492911893254433/attachments/7ef702ce-c927-442d-9742-36be7de50093.png" alt="New American Funding Logo" className="h-12 w-auto mb-6 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
              <h4 className="text-xl font-medium mb-2">New American Funding</h4>
              <p className="text-sm text-primary mb-4 font-medium">HUD homebuyer education & grant eligibility</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Why we partner:</strong> To connect our students with accessible financing options.</p>
                <p><strong>What this means for you:</strong> Completing our buyer tracks can help you qualify for specific grants and down-payment assistance programs.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 6: Our Location & How We Work */}
      <section className="py-24 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider">Our Location & How We Work</h3>
            <h2 className="text-3xl md:text-4xl font-medium">Where You'll Find Us (And How We Operate)</h2>
            <p className="text-lg text-muted-foreground">OHU is a fully remote company. We work across time zones and serve customers all over the U.S.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch max-w-6xl mx-auto">
            <div className="space-y-6 flex flex-col justify-center">
                <div className="flex gap-4">
                  <div className="mt-1"><MapPin className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-medium text-lg">Headquarters</h4>
                    <p className="text-muted-foreground">Distributed across the U.S.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Globe className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-medium text-lg">Service Area</h4>
                    <p className="text-muted-foreground">All U.S. states (CE courses available in TX, CA, FL, NJ; expanding)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Mail className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-medium text-lg">Support</h4>
                    <p className="text-muted-foreground">Email support during business hours (24-hour response guarantee)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Users className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-medium text-lg">Community</h4>
                    <p className="text-muted-foreground">We're active on LinkedIn, YouTube, and TikTok with free real estate tips</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-medium text-lg">Accessibility</h4>
                    <p className="text-muted-foreground">All course materials are designed to be accessible</p>
                  </div>
                </div>
              </div>
            
            <div className="bg-card border border-border/50 rounded-3xl shadow-xl h-full flex min-h-[400px] overflow-hidden">
              <img src="https://vibe.filesafe.space/1775492911893254433/assets/9a133d65-baf7-4d8f-b72c-097d1acb9cc2.png" alt="Our team collaborating" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Our Impact */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider">Our Impact</h3>
            <h2 className="text-3xl md:text-5xl font-medium">What We've Built So Far</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary font-serif">10k+</div>
              <p className="text-sm text-muted-foreground font-medium">People across the U.S. using our tools</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary font-serif">$10M+</div>
              <p className="text-sm text-muted-foreground font-medium">Est. commission saved by FSBO sellers</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary font-serif">3k+</div>
              <p className="text-sm text-muted-foreground font-medium">First-time buyers qualified for assistance</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary font-serif">48+</div>
              <p className="text-sm text-muted-foreground font-medium">Courses, guides, and templates in library</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-secondary/30 p-8 rounded-2xl border border-border/50 text-center">
            <h3 className="text-xl font-medium mb-4">Real Outcomes</h3>
            <p className="text-muted-foreground mb-6">These numbers represent real people achieving real results:</p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span>FSBO sellers saving 5–7% on commission</span></div>
              <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span>Buyers accessing grants up to $15,000</span></div>
              <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span>Investors avoiding bad deals</span></div>
              <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <span>Professionals staying compliant</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Common Questions About OHU */}
      <section className="py-24 bg-secondary/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider">Common Questions About OHU</h3>
            <h2 className="text-3xl md:text-5xl font-medium">Questions? We Have Answers.</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Is OHU a scam?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  No. We're a legitimate education company with 10,000+ satisfied customers and transparent pricing. Our 30-day money-back guarantee is a risk-reversal: if you don't find the material useful, we'll refund you completely.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">Who's behind OHU? Are you a real company?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. We're a team of real estate educators, investors, and professionals who created OHU because we believe in accessible education. You can reach our support team at support@ohu.com and get a real response within 24 hours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">Why is it so cheap compared to other courses?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We believe education should be accessible. We're not paying for massive marketing budgets or affiliate commissions. We're also one-time pricing ($197) vs. recurring subscriptions ($29–$99/month), so our lifetime cost is competitive.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">Can I trust the information?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes. Every course is created by practitioners in that field — not just marketers. We reference real regulations (TREC, NAR, NMLS) and update content when laws change. We also set realistic expectations and don't overpromise.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 9: What's Next for OHU */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider">What's Next for OHU</h3>
            <h2 className="text-3xl md:text-5xl font-medium">Our Roadmap</h2>
            <p className="text-lg text-muted-foreground">We're always expanding. Here's what we're working on:</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Map className="w-5 h-5 text-primary" />
              </div>
              <strong className="text-foreground block text-lg mb-2">Expansion to more states</strong>
              <p className="text-sm text-muted-foreground">We're pursuing CE approval in 20+ states (beyond TX, CA, FL, NJ)</p>
            </Card>
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <strong className="text-foreground block text-lg mb-2">Professional designations</strong>
              <p className="text-sm text-muted-foreground">Adding more NAR designation pathways (ABR®, CRS, GRI) and mortgage NMLS courses</p>
            </Card>
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <strong className="text-foreground block text-lg mb-2">Interactive features</strong>
              <p className="text-sm text-muted-foreground">Live Q&A sessions, community forums, and peer learning groups</p>
            </Card>
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <strong className="text-foreground block text-lg mb-2">Mobile app</strong>
              <p className="text-sm text-muted-foreground">Native iOS/Android app for accessing courses on the go</p>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card border-primary/20 text-center">
              <h3 className="text-xl font-medium mb-4 flex items-center justify-center gap-2"><Mail className="w-5 h-5 text-primary" /> How you can help</h3>
              <p className="text-muted-foreground mb-6">Have a course idea? Want to see something in the library? Email us and let us know. We listen to our users.</p>
              <Button variant="outline">Email support@ohu.com</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL SECTION: Get in Touch */}
      <section className="py-32 relative overflow-hidden bg-primary/5 border-t border-border/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">We'd Love to Hear From You</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Tell us what you love about OHU — or what we could improve. Your input shapes our roadmap.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://portal.theohu.com/courses/offers/9b523eb1-714f-40e2-8a88-3b90571e54af" target="_blank" rel="noopener noreferrer"><Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14">Get Lifetime Access</Button></a>
            <span className="text-muted-foreground font-medium">or</span>
            <Link to="/digital-products?type=Free+Downloads" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full text-lg px-8 h-14 border border-border bg-background/50 backdrop-blur-sm">
                Download a Free Resource
              </Button>
            </Link>
          </div>
          
          <div className="max-w-md mx-auto bg-card p-6 rounded-2xl border border-border/50">
            <h4 className="font-medium mb-2">Join Our Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Get weekly real estate tips, course updates, and insights. One tip. One minute. Every Friday.</p>
            <div className="flex w-full">
              <input type="email" placeholder="Email address" className="bg-secondary border border-border/50 rounded-l-md px-3 py-2 text-sm outline-none focus:border-primary flex-grow min-w-0" />
              <Button className="rounded-l-none shrink-0">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
