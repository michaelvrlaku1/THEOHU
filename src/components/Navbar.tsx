import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown, BookOpen, FileText, Map, LayoutList, Briefcase, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link, useNavigate } from "react-router-dom";

interface MenuLink {
  label: string;
  to: string;
  external?: boolean;
}

interface RichMenuProps {
  icon: any;
  iconColorClass: string;
  badge?: string;
  badgeColorClass?: string;
  title: string;
  description: string;
  links: MenuLink[];
}

const RichMenuContent = ({ icon: Icon, iconColorClass, badge, badgeColorClass, title, description, links }: RichMenuProps) => (
  <HoverCardContent align="start" className="w-[340px] p-6 flex flex-col gap-4 rounded-xl bg-[#0a0a0a] border-border/50 shadow-2xl">
    <div className="flex justify-between items-start mb-2">
      <div className={`w-11 h-11 rounded-full flex items-center justify-center ${iconColorClass}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      {badge && (
        <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${badgeColorClass}`}>
          {badge}
        </div>
      )}
    </div>

    <div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>

    <div className="flex flex-col gap-3 mt-2">
      {links.map((link, i) => (
        link.external ? (
          <a key={i} href={link.to} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {link.label}</a>
        ) : (
          <Link key={i} to={link.to} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {link.label}</Link>
        )
      ))}
    </div>
  </HoverCardContent>
);

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">OHU</span>
            <span className="text-muted-foreground hidden md:inline-block">— Online Homeownership University</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <HoverCard openDelay={100} closeDelay={100}>
              <HoverCardTrigger
                className="flex items-center gap-1 hover:text-primary transition-colors outline-none cursor-pointer py-2"
              >
                Courses <ChevronDown className="w-4 h-4" />
              </HoverCardTrigger>
              <RichMenuContent
                icon={BookOpen}
                iconColorClass="bg-primary"
                title="Courses"
                description="Comprehensive, self-paced real estate education for sellers, buyers, investors, and professionals. Learn exactly what you need to succeed."
                links={[
                  { label: "FSBO Courses", to: "/digital-products?category=FSBO+Courses" },
                  { label: "Buyer Education", to: "/digital-products?category=Buyer+Education" },
                  { label: "Investor Courses", to: "/digital-products?category=Investor+Courses" },
                  { label: "Professional CE", to: "/digital-products?category=Professional+CE" }
                ]}
              />
            </HoverCard>

            <HoverCard openDelay={100} closeDelay={100}>
              <HoverCardTrigger
                className="flex items-center gap-1 hover:text-primary transition-colors outline-none cursor-pointer py-2"
              >
                Templates & Tools <ChevronDown className="w-4 h-4" />
              </HoverCardTrigger>
              <RichMenuContent
                icon={FileText}
                iconColorClass="bg-primary"
                title="Templates & Tools"
                description="Ready-to-use templates, checklists, and calculators to help you make smarter real estate decisions without starting from scratch."
                links={[
                  { label: "Templates Library", to: "/digital-products?type=Templates" },
                  { label: "Checklists", to: "/digital-products?type=Checklists" },
                  { label: "Calculators & Worksheets", to: "/digital-products?type=Calculators+%26+Worksheets" }
                ]}
              />
            </HoverCard>

            <HoverCard openDelay={100} closeDelay={100}>
              <HoverCardTrigger
                className="flex items-center gap-1 hover:text-primary transition-colors outline-none cursor-pointer py-2"
              >
                Guides & Resources <ChevronDown className="w-4 h-4" />
              </HoverCardTrigger>
              <RichMenuContent
                icon={Map}
                iconColorClass="bg-primary"
                title="Guides & Resources"
                description="Step-by-step walkthroughs and free downloads for every real estate situation, designed to give you clarity and confidence."
                links={[
                  { label: "All Guides", to: "/digital-products?type=Guides" },
                  { label: "eBooks", to: "/digital-products?type=eBooks" },
                  { label: "Free Downloads", to: "/digital-products?type=Free+Downloads" }
                ]}
              />
            </HoverCard>

            <HoverCard openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Link
                  to="/blog"
                  className="flex items-center gap-1 hover:text-primary transition-colors outline-none cursor-pointer py-2"
                >
                  Blog <ChevronDown className="w-4 h-4" />
                </Link>
              </HoverCardTrigger>
              <RichMenuContent
                icon={LayoutList}
                iconColorClass="bg-primary"
                title="Real Estate Blog"
                description="The latest insights, practical tips, and strategies for buyers, sellers, investors, and real estate professionals."
                links={[
                  { label: "Latest Articles", to: "/blog?category=latest" },
                  { label: "By Topic", to: "/blog?category=topic" },
                  { label: "By Audience", to: "/blog?category=audience" }
                ]}
              />
            </HoverCard>

            <HoverCard openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Link
                  to="/about"
                  className="flex items-center gap-1 hover:text-primary transition-colors outline-none cursor-pointer py-2"
                >
                  About <ChevronDown className="w-4 h-4" />
                </Link>
              </HoverCardTrigger>
              <RichMenuContent
                icon={Briefcase}
                iconColorClass="bg-primary"
                title="About OHU"
                description="Learn about our mission to make real estate education clear, honest, and accessible to everyone."
                links={[
                  { label: "Our Story", to: "/about#our-story" },
                  { label: "Meet the Team", to: "/about#meet-the-team" },
                  { label: "FAQ", to: "/faq" },
                  { label: "Contact Us", to: "/contact" }
                ]}
              />
            </HoverCard>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://portal.theohu.com/courses/offers/9b523eb1-714f-40e2-8a88-3b90571e54af"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full font-semibold">Get Started</Button>
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left font-bold text-xl mb-4">Menu</SheetTitle>
              <div className="flex flex-col flex-1 overflow-y-auto pr-2">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="courses" className="border-b-border/50">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <span className="font-semibold text-sm text-foreground">Courses</span>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 pb-4 pl-2">
                      <Link to="/digital-products?category=FSBO+Courses" className="text-sm font-medium hover:text-primary transition-colors">FSBO Courses</Link>
                      <Link to="/digital-products?category=Buyer+Education" className="text-sm font-medium hover:text-primary transition-colors">Buyer Education</Link>
                      <Link to="/digital-products?category=Investor+Courses" className="text-sm font-medium hover:text-primary transition-colors">Investor Courses</Link>
                      <Link to="/digital-products?category=Professional+CE" className="text-sm font-medium hover:text-primary transition-colors">Professional CE</Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="templates" className="border-b-border/50">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <span className="font-semibold text-sm text-foreground">Templates & Tools</span>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 pb-4 pl-2">
                      <Link to="/digital-products?type=Templates" className="text-sm font-medium hover:text-primary transition-colors">Templates Library</Link>
                      <Link to="/digital-products?type=Checklists" className="text-sm font-medium hover:text-primary transition-colors">Checklists</Link>
                      <Link to="/digital-products?type=Calculators+%26+Worksheets" className="text-sm font-medium hover:text-primary transition-colors">Calculators & Worksheets</Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="guides" className="border-b-border/50">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <span className="font-semibold text-sm text-foreground">Guides & Resources</span>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 pb-4 pl-2">
                      <Link to="/digital-products?type=Guides" className="text-sm font-medium hover:text-primary transition-colors">All Guides</Link>
                      <Link to="/digital-products?type=eBooks" className="text-sm font-medium hover:text-primary transition-colors">eBooks</Link>
                      <Link to="/digital-products?type=Free+Downloads" className="text-sm font-medium hover:text-primary transition-colors">Free Downloads</Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="blog" className="border-b-border/50">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <Link to="/blog" onClick={(e) => e.stopPropagation()} className="font-semibold text-sm text-foreground hover:text-primary">Blog</Link>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 pb-4 pl-2">
                      <Link to="/blog?category=latest" className="text-sm font-medium hover:text-primary transition-colors">Latest Articles</Link>
                      <Link to="/blog?category=topic" className="text-sm font-medium hover:text-primary transition-colors">By Topic</Link>
                      <Link to="/blog?category=audience" className="text-sm font-medium hover:text-primary transition-colors">By Audience</Link>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="about" className="border-b-0">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <Link to="/about" className="font-semibold text-sm text-foreground hover:text-primary">About</Link>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 pb-4 pl-2">
                      <Link to="/about#our-story" className="text-sm font-medium hover:text-primary transition-colors">Our Story</Link>
                      <Link to="/about#meet-the-team" className="text-sm font-medium hover:text-primary transition-colors">Meet the Team</Link>
                      <Link to="/faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
                      <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact Us</Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="mt-auto pt-6 border-t border-border">
                <a
                  href="https://portal.theohu.com/courses/offers/9b523eb1-714f-40e2-8a88-3b90571e54af"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full font-semibold">Get Started</Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
