import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const blogPosts = [
  {
    id: 1,
    title: "What FSBO Sellers Wish They Knew Sooner",
    excerpt: "The biggest mistakes independent sellers make — and how to avoid them.",
    image: "https://vibe.filesafe.space/1775492911893254433/assets/30989064-36b9-4713-b8f3-3cd3a0511ef7.png",
    category: "FSBO",
    date: "Oct 12, 2023"
  },
  {
    id: 2,
    title: "Understanding Closing Costs Before You Buy",
    excerpt: "Breaking down the numbers so you're not surprised at the closing table.",
    image: "https://vibe.filesafe.space/1775492911893254433/assets/447f06a2-73d2-4b9e-9938-e1d4d77f09a8.png",
    category: "Buyers",
    date: "Oct 05, 2023"
  },
  {
    id: 3,
    title: "Should You Invest in Real Estate in 2025?",
    excerpt: "A honest look at the current market and whether it makes sense for you.",
    image: "https://vibe.filesafe.space/1775492911893254433/assets/918abc1f-5fbf-43bb-80cb-b56f270a39d1.png",
    category: "Investors",
    date: "Sep 28, 2023"
  },
  {
    id: 4,
    title: "How to Stage Your Home on a Budget",
    excerpt: "Simple, cost-effective ways to make your home look like a million bucks.",
    image: "https://vibe.filesafe.space/1775492911893254433/assets/1dd90bad-8ab9-421b-a593-37f252df1625.png",
    category: "FSBO",
    date: "Sep 20, 2023"
  },
  {
    id: 5,
    title: "The Ultimate First-Time Homebuyer Checklist",
    excerpt: "Don't miss a single step with our comprehensive guide to buying your first home.",
    image: "https://vibe.filesafe.space/1775492911893254433/assets/35869aa0-6fe6-4728-b6e2-80975aeef248.png",
    category: "Buyers",
    date: "Sep 15, 2023"
  },
  {
    id: 6,
    title: "Calculating ROI on Rental Properties",
    excerpt: "The exact formulas you need to know to ensure your investment is profitable.",
    image: "https://vibe.filesafe.space/1775492911893254433/assets/6f75cb53-935e-4129-9b74-dd3f4de05acb.png",
    category: "Investors",
    date: "Sep 02, 2023"
  }
];

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "all");

  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "all");
  }, [searchParams]);

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "latest", label: "Latest Articles" },
    { id: "topic", label: "By Topic" },
    { id: "audience", label: "By Audience" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-secondary/30 border-b border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSJyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMSkiLz4KPC9zdmc+')] opacity-50" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Real Estate Insights</h1>
            <p className="text-xl text-muted-foreground mb-10">
              Practical advice, market updates, and strategies for buyers, sellers, and investors.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-12 h-14 text-lg bg-background border-border/50 focus-visible:ring-primary rounded-full shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(cat => (
                <Button 
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSearchParams({ category: cat.id });
                  }}
                  className="rounded-full px-6"
                >
                  {cat.label}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden bg-card border-border/50 flex flex-col hover:border-primary/50 transition-colors group">
                  <div className="aspect-[16/9] w-full overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-primary/40 to-transparent mix-blend-multiply pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-sm text-muted-foreground mb-3">{post.date}</div>
                    <h3 className="font-medium text-xl mb-3 leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{post.excerpt}</p>
                    <a href="#" className="text-primary font-medium hover:underline inline-flex items-center mt-auto">
                      Read Article <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
