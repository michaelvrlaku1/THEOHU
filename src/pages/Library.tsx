import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BookOpen,
  CheckCircle2,
  FileText,
  Map,
  Calculator,
  Video,
  Download,
  Home,
  ShoppingCart,
  TrendingUp,
  Briefcase,
  PlayCircle,
  Eye,
  ChevronDown,
  Linkedin,
  Youtube,
  Star,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Hero = () => {
  const navigate = useNavigate();
  const images = [
    "https://vibe.filesafe.space/1775492911893254433/attachments/3aa29e23-3930-4989-9d22-407c15ee6d18.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/a767c591-d400-4847-9c64-378cddbd688f.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/8cd09287-899f-41b2-b999-09bedb8c532a.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/950f908f-fe88-49b8-84f4-586a1ff81859.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/5f34c595-c0e6-41e3-b7ed-e66bb8c97759.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/57a24fc8-fa10-4cb3-aa5f-1e09f546b0b1.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/87805025-a91b-47a6-9bed-69731ea6a3af.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/b2f93367-d500-4b77-b41a-d9a55da2a0ce.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/31548bae-5ae5-4384-befd-72732240cb92.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/08bb088e-5bf4-4cd7-8c30-0fbd59b5d872.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/6395d08e-4fa7-4771-9ea7-da9340927714.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/ddfa7337-6e32-4926-b10a-db99efd0239e.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/c83be332-1c42-4220-8522-096d9654a424.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/ef39c2be-0165-4e34-afc2-8cc41b5bff2a.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/816da628-1c1c-4c56-82aa-5ef7635ed8b6.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/8f957d41-0c24-411d-94e7-4f4e424b5ac1.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/f9d98d75-8c8d-4f9c-b362-6184130f6cc5.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/ee37b621-1c12-4900-a08b-389205970497.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/2c6ee7ac-a839-4cf9-b399-e75ca9d35578.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/8a4f4ca7-85f4-4aad-b96f-9390464c5d31.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/301011da-8a60-44b0-a5fa-5332e0d2dd46.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/5b5d539d-7722-4283-b8f3-9ab8c01e631d.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/83273ad7-988c-43e1-8bee-a0feb33db5aa.png",
    "https://vibe.filesafe.space/1775492911893254433/attachments/70e90499-a3a5-4926-be72-ddaa1263e5e8.png"
  ];
  
  const loopingImages = [...images, ...images, ...images, ...images];

  return (
  <section className="relative pt-8 pb-12 md:pt-20 md:pb-32 overflow-hidden bg-background">
    <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--accent))_2px,transparent_2px)] [background-size:24px_24px] opacity-20" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8 md:space-y-12">
        <div className="space-y-6 md:space-y-8 flex flex-col items-center w-full">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex -space-x-2">
              <img src="https://vibe.filesafe.space/1775492911893254433/assets/5b69396c-50a1-401e-a70e-255909c2e4d4.png" className="w-8 h-8 rounded-full border-2 border-background object-cover" alt="User" />
              <img src="https://vibe.filesafe.space/1775492911893254433/assets/7d907cfe-c539-4db8-8c76-32cf9e393bcb.png" className="w-8 h-8 rounded-full border-2 border-background object-cover" alt="User" />
              <img src="https://vibe.filesafe.space/1775492911893254433/assets/b1db533c-7c6e-4785-8ab4-6d8382bd1dc8.png" className="w-8 h-8 rounded-full border-2 border-background object-cover" alt="User" />
            </div>
            <div className="flex flex-col items-start ml-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <span className="text-xs text-muted-foreground">10,000+ students</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Everything You Need. <br />
            <span className="text-accent italic font-serif">All in One Place.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            48+ courses, templates, guides, and tools across FSBO selling, home buying, real estate investing, and professional development. Learn at your own pace. Keep everything forever.
          </p>
          <div className="space-y-4 flex flex-col items-center">
            <a href="https://portal.theohu.com/courses/offers/9b523eb1-714f-40e2-8a88-3b90571e54af" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-4 sm:px-0">
              <Button size="lg" className="w-full text-base sm:text-lg px-6 sm:px-8 h-auto py-3 sm:h-14 whitespace-normal text-center">
                Start Learning Now — $197 Lifetime Access
              </Button>
            </a>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              30-day money-back guarantee. All future updates included. No subscriptions. No renewals.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="relative w-full overflow-hidden mt-6 sm:mt-16 py-4 z-10">
      <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex gap-4 sm:gap-6 w-max animate-scroll-left px-3">
        {loopingImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Real estate course ${idx + 1}`}
            className="w-[calc(33.333vw-1rem)] sm:w-[calc(16.666vw-1.5rem)] h-auto aspect-[3/4] object-cover rounded-2xl shadow-xl flex-shrink-0 border border-border/50"
          />
        ))}
      </div>
    </div>
  </section>
  );
};

const BrowseByJourney = () => (
  <section id="journey" className="py-24 bg-secondary/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium">Browse By Your Journey</h2>
        <p className="text-lg text-muted-foreground">
          Your real estate story is unique. Start where it matters most. Not sure where to begin? Pick your primary goal. We've organized everything to meet you exactly where you are.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
        {/* FSBO Track */}
        <Card className="overflow-hidden bg-card border-border/50 flex flex-col h-full hover:border-primary/50 transition-colors group">
          <div className="aspect-[2/1] w-full overflow-hidden relative">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/630a7872-ec88-413d-b974-4c6aa9d5d12a.png" alt="FSBO Sellers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply pointer-events-none transition-colors duration-500 group-hover:bg-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="p-5 pt-3 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4 -mt-8 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors border-2 border-card shadow-sm">
                <Home className="w-4 h-4 text-primary" />
              </div>
              <span className="bg-secondary/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-border/50 shadow-sm mt-1">12 Resources</span>
            </div>
            <h3 className="text-lg font-medium mb-1">FSBO Sellers</h3>
            <p className="text-xs font-medium text-accent mb-4 flex-grow">Sell independently. Keep more money.</p>
            <Link to="/digital-products?category=FSBO+Courses" className="w-full mt-auto"><Button className="w-full h-9 text-sm" variant="secondary">Explore Track</Button></Link>
          </div>
        </Card>

        {/* Buyer Track */}
        <Card className="overflow-hidden bg-card border-border/50 flex flex-col h-full hover:border-primary/50 transition-colors group">
          <div className="aspect-[2/1] w-full overflow-hidden relative">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/cd674bb2-f574-4fa8-9ba7-75180b0fc6eb.png" alt="First-Time Buyers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply pointer-events-none transition-colors duration-500 group-hover:bg-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="p-5 pt-3 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4 -mt-8 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors border-2 border-card shadow-sm">
                <ShoppingCart className="w-4 h-4 text-primary" />
              </div>
              <span className="bg-secondary/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-border/50 shadow-sm mt-1">15 Resources</span>
            </div>
            <h3 className="text-lg font-medium mb-1">First-Time Buyers</h3>
            <p className="text-xs font-medium text-accent mb-4 flex-grow">Understand every step. Own your decision.</p>
            <Link to="/digital-products?category=Buyer+Education" className="w-full mt-auto"><Button className="w-full h-9 text-sm" variant="secondary">Explore Track</Button></Link>
          </div>
        </Card>

        {/* Investor Track */}
        <Card className="overflow-hidden bg-card border-border/50 flex flex-col h-full hover:border-primary/50 transition-colors group">
          <div className="aspect-[2/1] w-full overflow-hidden relative">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/d7845b76-3be8-48f4-ad8c-5c2984ce1d4e.png" alt="Real Estate Investors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply pointer-events-none transition-colors duration-500 group-hover:bg-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="p-5 pt-3 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4 -mt-8 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors border-2 border-card shadow-sm">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <span className="bg-secondary/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-border/50 shadow-sm mt-1">14 Resources</span>
            </div>
            <h3 className="text-lg font-medium mb-1">Real Estate Investors</h3>
            <p className="text-xs font-medium text-accent mb-4 flex-grow">Spot good deals. Make confident moves.</p>
            <Link to="/digital-products?category=Investor+Courses" className="w-full mt-auto"><Button className="w-full h-9 text-sm" variant="secondary">Explore Track</Button></Link>
          </div>
        </Card>

        {/* Professional Track */}
        <Card className="overflow-hidden bg-card border-border/50 flex flex-col h-full hover:border-primary/50 transition-colors group">
          <div className="aspect-[2/1] w-full overflow-hidden relative">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/3ad8442e-1d15-4a25-b24b-38846a581f50.png" alt="Real Estate Professionals & CE" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply pointer-events-none transition-colors duration-500 group-hover:bg-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="p-5 pt-3 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4 -mt-8 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors border-2 border-card shadow-sm">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              <span className="bg-secondary/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-border/50 shadow-sm mt-1">11 Resources</span>
            </div>
            <h3 className="text-lg font-medium mb-1">Professionals & CE</h3>
            <p className="text-xs font-medium text-accent mb-4 flex-grow">Renew your license. Grow your career.</p>
            <Link to="/digital-products?category=Professional+CE" className="w-full mt-auto"><Button className="w-full h-9 text-sm" variant="secondary">Explore Track</Button></Link>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

const BookMockup = ({ title }: { title: string }) => {
  const parts = title.split(':');
  const mainTitle = parts[0];
  const subTitle = parts.length > 1 ? parts[1] : '';

  return (
    <div className="relative w-full aspect-square bg-[#5b32a8] flex items-center justify-center overflow-hidden rounded-md mb-3 group-hover:shadow-inner transition-all">
      <div className="absolute bottom-[10%] w-[80%] h-[60px] bg-[#e2d8f0] rounded-[50%] shadow-[0_20px_40px_rgba(0,0,0,0.6)] border-b-[12px] border-[#cbbbe0]"></div>
      <div className="relative z-10 w-[110px] h-[160px] perspective-[1000px] transform group-hover:-translate-y-3 transition-transform duration-500 ease-out">
        <div className="w-full h-full relative shadow-2xl" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(5deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#4a268c] to-[#2d125e] rounded-r-sm border-l-2 border-white/10 shadow-[inset_4px_0_15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center p-3 text-center" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(10px)' }}>
            <div className="w-8 h-0.5 bg-accent mb-2 shadow-[0_0_5px_rgba(255,0,255,0.8)]"></div>
            <h4 className="text-yellow-400 font-bold text-[12px] leading-tight drop-shadow-md uppercase mb-1">{mainTitle}</h4>
            {subTitle && <h5 className="text-white font-bold text-[9px] leading-tight drop-shadow-md uppercase mt-1">{subTitle}</h5>}
            {!subTitle && <h5 className="text-white font-bold text-[9px] leading-tight drop-shadow-md uppercase mt-1">For Real Estate</h5>}
            <div className="absolute bottom-2 right-2 w-12 h-12 bg-white/5 rounded-full blur-md"></div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-[20px] bg-[#2d125e] rounded-l-sm border-r border-white/5" style={{ transformOrigin: 'left', transform: 'rotateY(-90deg) translateZ(10px)' }}></div>
          <div className="absolute right-0 top-[2px] bottom-[2px] w-[20px] bg-gray-100" style={{ transformOrigin: 'right', transform: 'rotateY(90deg) translateZ(10px)' }}>
            <div className="absolute inset-y-0 left-0 w-full flex flex-col justify-evenly opacity-20">
              <div className="w-full h-px bg-black"></div>
              <div className="w-full h-px bg-black"></div>
              <div className="w-full h-px bg-black"></div>
              <div className="w-full h-px bg-black"></div>
            </div>
          </div>
          <div className="absolute top-0 left-[2px] right-[2px] h-[20px] bg-gray-200" style={{ transformOrigin: 'top', transform: 'rotateX(90deg) translateZ(10px)' }}></div>
        </div>
      </div>
    </div>
  );
};

const BrowseByType = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium">Or Browse By Resource Type</h2>
        <p className="text-lg text-muted-foreground">
          Find what you need. It's all organized. Know exactly what you're looking for? Filter by resource type and search across all tracks.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1400px] mx-auto">
        <Card className="p-6 border-border/50 flex flex-col items-start hover:border-primary/50 transition-colors group">
          <div className="flex justify-between w-full mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Video className="w-6 h-6 text-primary" />
            </div>
            <span className="bg-secondary px-2.5 py-1 rounded-full text-xs font-medium h-fit">12 Courses</span>
          </div>
          <h3 className="text-xl font-medium mb-2">Video Courses</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">Self-paced learning. Watch anytime, anywhere.</p>
          <Link to="/digital-products?type=Video+Courses" className="w-full mt-auto">
            <Button variant="secondary" className="w-full">View Courses</Button>
          </Link>
        </Card>

        <Card className="p-6 border-border/50 flex flex-col items-start hover:border-primary/50 transition-colors group">
          <div className="flex justify-between w-full mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <span className="bg-secondary px-2.5 py-1 rounded-full text-xs font-medium h-fit">18 Templates</span>
          </div>
          <h3 className="text-xl font-medium mb-2">Templates</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">Plug-and-play tools. Done for you.</p>
          <Link to="/digital-products?type=Templates" className="w-full mt-auto">
            <Button variant="secondary" className="w-full">View Templates</Button>
          </Link>
        </Card>

        <Card className="p-6 border-border/50 flex flex-col items-start hover:border-primary/50 transition-colors group">
          <div className="flex justify-between w-full mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Map className="w-6 h-6 text-primary" />
            </div>
            <span className="bg-secondary px-2.5 py-1 rounded-full text-xs font-medium h-fit">10 Guides</span>
          </div>
          <h3 className="text-xl font-medium mb-2">Guides</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">Step-by-step walkthroughs. Honest advice.</p>
          <Link to="/digital-products?type=Guides" className="w-full mt-auto">
            <Button variant="secondary" className="w-full">View Guides</Button>
          </Link>
        </Card>

        <Card className="p-6 border-border/50 flex flex-col items-start hover:border-primary/50 transition-colors group">
          <div className="flex justify-between w-full mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <span className="bg-secondary px-2.5 py-1 rounded-full text-xs font-medium h-fit">8 Tools</span>
          </div>
          <h3 className="text-xl font-medium mb-2">Calculators</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">See the math. Make confident decisions.</p>
          <Link to="/digital-products?type=Calculators+%26+Worksheets" className="w-full mt-auto">
            <Button variant="secondary" className="w-full">View Calculators</Button>
          </Link>
        </Card>

        <Card className="p-6 border-border/50 flex flex-col items-start hover:border-primary/50 transition-colors group">
          <div className="flex justify-between w-full mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <span className="bg-secondary px-2.5 py-1 rounded-full text-xs font-medium h-fit">6 eBooks</span>
          </div>
          <h3 className="text-xl font-medium mb-2">eBooks</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">Bite-sized insights. Real-world tips.</p>
          <Link to="/digital-products?type=eBooks" className="w-full mt-auto">
            <Button variant="secondary" className="w-full">View eBooks</Button>
          </Link>
        </Card>
      </div>
    </div>
  </section>
);

const WhatsIncluded = () => (
  <section className="py-24 bg-secondary/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium">What's Included in Full Library Access</h2>
        <p className="text-lg text-muted-foreground">
          Pay Once. Keep Forever. When you get lifetime access, you own everything in the library — forever. No monthly fees. No surprise expiration. Every new resource we add becomes yours automatically.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto mb-16">
        <div className="flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-lg mb-1">48+ Courses, Guides, Templates & Tools</h4>
            <p className="text-muted-foreground text-sm">All four audience tracks. All resource types.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-lg mb-1">Interactive Calculators & Worksheets</h4>
            <p className="text-muted-foreground text-sm">Deal analyzers, cash flow projectors, mortgage calculators. See the math that matters.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-lg mb-1">Printable Templates</h4>
            <p className="text-muted-foreground text-sm">Download anytime. Use as many times as you want. Share with your team (if you're a pro).</p>
          </div>
        </div>
        <div className="flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-lg mb-1">Video Courses</h4>
            <p className="text-muted-foreground text-sm">Watch in any order. On any device. Anytime that works for you.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-lg mb-1">All Future Updates — Included</h4>
            <p className="text-muted-foreground text-sm">New courses? New templates? New tools? They're added to your library at no extra cost.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-lg mb-1">Priority Email Support</h4>
            <p className="text-muted-foreground text-sm">Questions about a template? Stuck on a lesson? We're here to help — faster.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-lg mb-1">Printable PDFs</h4>
            <p className="text-muted-foreground text-sm">Take guides offline. Print checklists. No internet required.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h4 className="font-medium text-lg mb-1">State-Specific CE Courses</h4>
            <p className="text-muted-foreground text-sm">Choose the state that matters for your license. TREC (TX), CA DRE, DBPR (FL), or NJ.</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-border/50 text-center">
        <h3 className="text-2xl font-medium mb-6">Pricing Transparency</h3>
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-primary">Full Lifetime Library Access: $197</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /> No monthly charge</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /> No renewal fees</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /> No hidden add-ons</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /> No expiration date</li>
              <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" /> Access to everything, updated forever</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-primary">Individual Resources: $27–$47</h4>
            <p className="text-sm text-muted-foreground">
              If you only need one guide, template, or tool, you can buy it separately. Keep it forever.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-5xl mx-auto">
        <img 
          src="https://vibe.filesafe.space/1775492911893254433/attachments/5ecbe083-79ed-4507-bb75-6a6928e41ebc.png" 
          alt="Collection of real estate guides and checklists" 
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
);

const HowToUse = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium">How to Use This Library</h2>
        <p className="text-lg text-muted-foreground">
          Get the Most Out of Your Access. You have full access to everything, but don't feel like you have to do it all at once. Here's how real people use the library:
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card className="p-6 border-border/50">
          <h3 className="text-xl font-medium mb-2">The Deep Diver</h3>
          <p className="text-muted-foreground text-sm mb-4">Start with the complete course for your track. Watch every module. Download every template. Then drill into specific guides as questions come up.</p>
          <p className="text-sm font-medium text-primary">Best for: People who want a comprehensive education upfront.</p>
        </Card>
        <Card className="p-6 border-border/50">
          <h3 className="text-xl font-medium mb-2">The Tool-First Approach</h3>
          <p className="text-muted-foreground text-sm mb-4">Grab the templates and calculators you need right now. Use them. Then go back and watch the course modules that relate to questions you had.</p>
          <p className="text-sm font-medium text-primary">Best for: People who learn by doing.</p>
        </Card>
        <Card className="p-6 border-border/50">
          <h3 className="text-xl font-medium mb-2">The Just-in-Time Learner</h3>
          <p className="text-muted-foreground text-sm mb-4">Jump between tracks as situations come up. Selling soon? Hit the FSBO track. Thinking about investing? Jump to the investor section.</p>
          <p className="text-sm font-medium text-primary">Best for: People with changing needs throughout the year.</p>
        </Card>
        <Card className="p-6 border-border/50">
          <h3 className="text-xl font-medium mb-2">The Professional Path</h3>
          <p className="text-muted-foreground text-sm mb-4">Complete the CE courses for your state, earn your designation hours, then explore the advanced negotiation and technology guides to stay sharp.</p>
          <p className="text-sm font-medium text-primary">Best for: Real estate agents, brokers, and mortgage pros.</p>
        </Card>
      </div>
      <div className="text-center mt-8 text-muted-foreground">
        <p>Tip: Bookmark your favorite resources. Download what you need. You can always come back.</p>
      </div>
    </div>
  </section>
);

const PersonalizedTraining = () => (
  <section className="py-24 bg-primary/5 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h3 className="text-sm font-medium text-primary uppercase">Level Up With Personalized Training</h3>
        <h2 className="text-3xl md:text-4xl font-medium">Got a Specific Situation? Get Personalized Guidance.</h2>
        <p className="text-lg text-muted-foreground">
          Our library is perfect for learning. But when you're analyzing a specific deal, pricing a specific house, or preparing for a specific test, you might want personalized mentorship. That's where 1-on-1 training comes in.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        <Card className="p-8 border-border/50 flex flex-col items-center text-center bg-card hover:border-primary/50 transition-colors">
          <h3 className="text-2xl font-medium mb-2">Starter</h3>
          <div className="text-3xl font-bold mb-4">$297</div>
          <p className="text-muted-foreground mb-6 flex-grow">3 sessions for specific questions</p>
          <Link to="/ai-training" className="w-full">
            <Button variant="outline" className="w-full">Learn More</Button>
          </Link>
        </Card>

        <Card className="p-8 border-primary relative overflow-hidden bg-background flex flex-col items-center text-center shadow-lg hover:border-primary/80 transition-colors">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
          <h3 className="text-2xl font-medium mb-2">Coach</h3>
          <div className="text-3xl font-bold mb-4">$497<span className="text-sm text-muted-foreground font-normal">/mo</span></div>
          <p className="text-muted-foreground mb-6 flex-grow">4 sessions/month for active transactions</p>
          <Link to="/ai-training" className="w-full">
            <Button className="w-full">Learn More</Button>
          </Link>
        </Card>

        <Card className="p-8 border-border/50 flex flex-col items-center text-center bg-card hover:border-primary/50 transition-colors">
          <h3 className="text-2xl font-medium mb-2">Partner</h3>
          <div className="text-3xl font-bold mb-4">$1,497<span className="text-sm text-muted-foreground font-normal">/mo</span></div>
          <p className="text-muted-foreground mb-6 flex-grow">8 sessions/month for ongoing mentorship</p>
          <Link to="/ai-training" className="w-full">
            <Button variant="outline" className="w-full">Learn More</Button>
          </Link>
        </Card>
      </div>

      <div className="text-center">
        <Link to="/ai-training">
          <Button size="lg" variant="secondary" className="px-8 text-lg h-14">See Full 1-on-1 Training Details</Button>
        </Link>
      </div>
    </div>
  </section>
);

const RealStories = () => (
  <section className="py-24 bg-secondary/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium">Real Stories From People Like You</h2>
        <p className="text-lg text-muted-foreground">How the Library Helped</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="p-8 border-border/50 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/aea3b1d0-acc5-4df4-8882-eda1705555ab.png" alt="James" className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
            <div>
              <h3 className="text-xl font-medium text-primary">James</h3>
              <p className="text-sm text-muted-foreground">FSBO Seller</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="font-serif italic text-lg leading-relaxed">"I saved $18,000 in commission and felt confident the whole time."</p>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground flex-grow">
            <p><strong className="text-foreground">The situation:</strong> James wanted to sell his home without an agent but had no idea where to start. He felt nervous about pricing and worried he'd miss legal steps.</p>
            <div>
              <strong className="text-foreground">What he used:</strong>
              <ul className="mt-1 space-y-1 pl-4 list-disc">
                <li>FSBO Pricing & Staging Guide</li>
                <li>Listing Description Template</li>
                <li>Open House Checklist</li>
                <li>Offer Comparison Worksheet</li>
              </ul>
            </div>
            <p><strong className="text-foreground">The outcome:</strong> "The guides made me feel like I knew what I was doing. The templates saved me so much time. And I kept more money than I ever expected."</p>
          </div>
        </Card>

        <Card className="p-8 border-border/50 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/40842d47-ee1d-4b6b-862b-382d60376f2a.png" alt="Maya" className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
            <div>
              <h3 className="text-xl font-medium text-primary">Maya</h3>
              <p className="text-sm text-muted-foreground">First-Time Buyer</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="font-serif italic text-lg leading-relaxed">"I understood what was happening every step of the way."</p>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground flex-grow">
            <p><strong className="text-foreground">The situation:</strong> Maya was buying her first home but felt completely lost. Credit scores, down payments, escrow — it all sounded like a foreign language.</p>
            <div>
              <strong className="text-foreground">What she used:</strong>
              <ul className="mt-1 space-y-1 pl-4 list-disc">
                <li>First-Time Buyer Roadmap</li>
                <li>Mortgage Readiness Scorecard</li>
                <li>Closing Checklist</li>
                <li>HUD-Certified Course</li>
              </ul>
            </div>
            <p><strong className="text-foreground">The outcome:</strong> "I felt informed and in control. I didn't have to rely on anyone else to explain things. Plus, the education helped me qualify for a down payment assistance grant."</p>
          </div>
        </Card>

        <Card className="p-8 border-border/50 flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <img src="https://vibe.filesafe.space/1775492911893254433/assets/381bbbab-3b33-4a10-b1a4-4748e72cb841.png" alt="David" className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
            <div>
              <h3 className="text-xl font-medium text-primary">David</h3>
              <p className="text-sm text-muted-foreground">New Investor</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="font-serif italic text-lg leading-relaxed">"The calculator showed me which deals were actually good. I avoided a bad investment."</p>
          </div>
          <div className="space-y-4 text-sm text-muted-foreground flex-grow">
            <p><strong className="text-foreground">The situation:</strong> David wanted to invest in real estate but didn't know how to analyze a deal. He was scared of making an expensive mistake.</p>
            <div>
              <strong className="text-foreground">What he used:</strong>
              <ul className="mt-1 space-y-1 pl-4 list-disc">
                <li>Deal Analysis Calculator</li>
                <li>Investment Fundamentals Course</li>
                <li>Cap Rate Explainer</li>
                <li>Cash Flow Projector</li>
              </ul>
            </div>
            <p><strong className="text-foreground">The outcome:</strong> "The calculator helped me see the real numbers. I passed on two deals that looked good on paper but had terrible cash flow. When I found a good one, I was confident enough to move fast."</p>
          </div>
        </Card>
      </div>
    </div>
  </section>
);

const StartFree = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium">Not Sure Yet? Start Free.</h2>
        <p className="text-lg text-muted-foreground">
          Explore Before You Commit. Want to see how clear our approach is before buying lifetime access? Download one of our free starter resources. No email tricks. No sales pressure.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card className="p-6 border-border/50 flex flex-col items-center text-center">
          <h3 className="text-lg font-medium mb-2">FSBO Starter Checklist</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">See exactly what you need to do first if you're selling independently.</p>
          <Link to="/free-resource/fsbo-checklist" className="w-full"><Button variant="outline" className="w-full">Preview & Download</Button></Link>
        </Card>
        <Card className="p-6 border-border/50 flex flex-col items-center text-center">
          <h3 className="text-lg font-medium mb-2">First-Time Buyer Roadmap</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">A complete step-by-step guide to your home buying journey.</p>
          <Link to="/free-resource/buyer-roadmap" className="w-full"><Button variant="outline" className="w-full">Preview & Download</Button></Link>
        </Card>
        <Card className="p-6 border-border/50 flex flex-col items-center text-center">
          <h3 className="text-lg font-medium mb-2">Real Estate Investment Basics</h3>
          <p className="text-sm text-muted-foreground mb-6 flex-grow">Learn how to spot opportunities and evaluate deals.</p>
          <Link to="/free-resource/investor-basics" className="w-full"><Button variant="outline" className="w-full">Preview & Download</Button></Link>
        </Card>
      </div>
    </div>
  </section>
);

const GettingStarted = () => {
  const navigate = useNavigate();
  return (
  <section className="py-24 bg-secondary/30 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium">Getting Started</h2>
        <p className="text-lg text-muted-foreground">Three Ways to Begin</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="p-8 border-primary relative overflow-hidden bg-background">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">BEST VALUE</div>
          <h3 className="text-2xl font-medium mb-4">Option 1: Get Full Lifetime Access</h3>
          <p className="text-muted-foreground mb-6">Access everything. All four tracks. All 48+ resources. One price.</p>
          <div className="text-3xl font-bold mb-6">$197 <span className="text-sm text-muted-foreground font-normal">/ Lifetime</span></div>
          <a href="https://portal.theohu.com/courses/offers/9b523eb1-714f-40e2-8a88-3b90571e54af" target="_blank" rel="noopener noreferrer" className="w-full mb-4"><Button className="w-full">Get Instant Access</Button></a>
          <p className="text-xs text-center text-muted-foreground mt-4">30-day money-back guarantee</p>
        </Card>

        <Card className="p-8 border-border/50">
          <h3 className="text-2xl font-medium mb-4">Option 2: Try Before You Buy</h3>
          <p className="text-muted-foreground mb-6">Download a free resource and see if our approach works for you.</p>
          <div className="text-3xl font-bold mb-6">Free</div>
          <Button onClick={() => navigate('/digital-products?type=Free+Downloads')} variant="outline" className="w-full mt-auto">Download Free Resource</Button>
        </Card>

        <Card className="p-8 border-border/50">
          <h3 className="text-2xl font-medium mb-4">Option 3: Start With One Resource</h3>
          <p className="text-muted-foreground mb-6">Not ready for full access? Buy one guide, template, or course first.</p>
          <div className="text-3xl font-bold mb-6">$27–$47 <span className="text-sm text-muted-foreground font-normal">/ Each</span></div>
          <Button onClick={() => navigate('/digital-products')} variant="secondary" className="w-full mt-auto">Browse Individual Resources</Button>
        </Card>
      </div>
    </div>
  </section>
  );
};

const FAQSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-medium">Questions? We're Here.</h2>
        <p className="text-lg text-muted-foreground">Common Questions About the Library</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How long do I have access?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Forever. Once you purchase lifetime access, it's yours. No expiration. No renewal fees. Ever.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I download resources or print them?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes. Templates, guides, and checklists are all downloadable as PDFs. Print them, save them, use them as much as you want.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What if I don't like something?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            We offer a 30-day money-back guarantee. Go through the material. If it doesn't work for you, email us and we'll refund you completely. No questions asked.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Can I share my access with others?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Your account is for personal use. We ask that you don't share login credentials. But if you're a professional working with clients, we have team and brokerage licensing options available.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Do you ever add new courses or resources?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes, regularly. Any new course, template, or tool we create gets automatically added to your library at no extra cost.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>What if I need help with a template or have questions?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            All library members get priority email support. Email support@ohu.com and we'll help within 24 hours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Is there a way to preview courses before buying?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes. Each course has a free preview module so you can see the teaching style and content before committing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger>What's the difference between full library access and individual resources?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Full library ($197) gives you everything across all tracks. Individual resources ($27–$47) let you buy just what you need right now. Both are one-time purchases with lifetime access.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="text-center mt-12 flex items-center justify-center gap-4">
        <span className="font-medium">Still Have Questions?</span>
        <Link to="/faq">
          <Button variant="outline" size="sm">View Full FAQ</Button>
        </Link>
        <Button variant="ghost" size="sm">Contact Support</Button>
      </div>
    </div>
  </section>
);

const FinalCTA = () => {
  return (
  <section className="py-32 relative overflow-hidden bg-secondary/30 border-t border-border/50">
    <div className="absolute inset-0 bg-primary/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
    
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-medium mb-6">Ready to Take Control of Your Real Estate Journey?</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
        Stop guessing. Stop feeling overwhelmed. Get the tools, knowledge, and confidence to make smart moves.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <a href="https://portal.theohu.com/courses/offers/9b523eb1-714f-40e2-8a88-3b90571e54af" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14">Get Lifetime Access — $197</Button>
        </a>
        <Link to="/digital-products?type=Free+Downloads" className="w-full sm:w-auto">
          <Button size="lg" variant="outline" className="w-full text-lg px-8 h-14 border border-white text-white hover:bg-white/10 hover:text-white bg-background/50 backdrop-blur-sm">
            Download a Free Resource First
          </Button>
        </Link>
      </div>
      
      <p className="text-sm text-muted-foreground max-w-lg mx-auto">
        <strong className="text-foreground">30-day money-back guarantee.</strong> No questions asked. All future updates included. No subscriptions. Ever.
      </p>
    </div>
  </section>
  );
};

export default function Library() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <BrowseByJourney />
      <BrowseByType />
      <WhatsIncluded />
      <HowToUse />
      {/* <PersonalizedTraining /> */}
      <RealStories />
      <StartFree />
      <GettingStarted />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
