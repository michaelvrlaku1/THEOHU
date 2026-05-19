import { Navbar } from "@/components/Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Eye, Download, PlayCircle, Search, Book, FileText, CheckSquare, Headphones, PenTool, LayoutTemplate, Mail, X, Filter } from "lucide-react";
import { useState, useEffect } from "react";

const typesList = [
  { name: "Video Courses", icon: PlayCircle },
  { name: "Templates", icon: LayoutTemplate },
  { name: "Checklists", icon: CheckSquare },
  { name: "Calculators & Worksheets", icon: FileText },
  { name: "Guides", icon: FileText },
  { name: "eBooks", icon: Book },
  { name: "Free Downloads", icon: Download },
];

const categoriesList = [
  "FSBO Courses",
  "Buyer Education",
  "Investor Courses",
  "Professional CE"
];

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

export default function MyLibrary() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category") || "");
  const [selectedType, setSelectedType] = useState<string>(searchParams.get("type") || "");
  const [sortBy, setSortBy] = useState("newest");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cat = searchParams.get("category");
    setSelectedCategory(cat || "");
    const type = searchParams.get("type");
    setSelectedType(type || "");
  }, [searchParams]);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch('https://rss-link.com/feed/jS6PfsBaZNupSlXMrWpD?blogId=oWOqvyS9GdEAh1S0EK1M&limit=25&loadContent=true');
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');
        const parsedProducts = Array.from(items).map(item => {
          const title = item.querySelector('title')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '';
          
          const categoryNodes = item.querySelectorAll('category');
          const itemCategories = Array.from(categoryNodes).map(c => c.textContent || '');
          
          let image = '';
          const enclosure = item.querySelector('enclosure');
          if (enclosure) {
            image = enclosure.getAttribute('url') || '';
          }
          const content = item.querySelector('content\\:encoded, encoded')?.textContent || '';
          if (!image) {
            const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch) image = imgMatch[1];
          }
          
          const description = item.querySelector('description')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';

          return { title, link, image, icon: Book, categories: itemCategories, description, content, pubDate };
        });
        setProducts(parsedProducts);
      } catch (error) {
        console.error('Error fetching RSS:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRSS();
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "All Categories" || p.categories.some((c: string) => c.toLowerCase() === selectedCategory.toLowerCase());
    const matchesType = !selectedType || selectedType === "All Types" || p.categories.some((c: string) => c.toLowerCase() === selectedType.toLowerCase());
    return matchesSearch && matchesCategory && matchesType;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    }
    if (sortBy === "oldest") {
      return new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime();
    }
    if (sortBy === "az") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const getPageTitle = () => {
    if (selectedCategory && selectedCategory !== "All Categories") return selectedCategory;
    if (selectedType && selectedType !== "All Types") return selectedType;
    return "All Products";
  };

  return (
    <div className="min-h-screen bg-[#110f1f] text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-serif">{getPageTitle()}</h1>
            </div>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-background border-border/50" 
                />
              </div>

              {/* Desktop Filters */}
              <div className="hidden xl:flex flex-wrap gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px] bg-background border-border/50">
                    <SelectValue placeholder="Filter by Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Categories">All Categories</SelectItem>
                    {categoriesList.map((c, i) => <SelectItem key={i} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-[180px] bg-background border-border/50">
                    <SelectValue placeholder="Filter by Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Types">All Types</SelectItem>
                    {typesList.map((f, i) => <SelectItem key={i} value={f.name}>{f.name}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px] bg-background border-border/50">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="az">A-Z</SelectItem>
                  </SelectContent>
                </Select>
                {(searchQuery || selectedCategory || selectedType || sortBy !== "newest") && (
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => { setSearchQuery(""); setSelectedCategory(""); setSelectedType(""); setSortBy("newest"); }}
                    className="text-muted-foreground hover:text-foreground"
                    title="Clear Filters"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Mobile/Tablet Filters */}
              <div className="flex xl:hidden flex-wrap gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full sm:w-auto bg-background border-border/50">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[280px] sm:w-[320px] p-4 space-y-4" align="end">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Category</label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-full bg-background border-border/50">
                          <SelectValue placeholder="Filter by Categories" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All Categories">All Categories</SelectItem>
                          {categoriesList.map((c, i) => <SelectItem key={i} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Type</label>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger className="w-full bg-background border-border/50">
                          <SelectValue placeholder="Filter by Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All Types">All Types</SelectItem>
                          {typesList.map((f, i) => <SelectItem key={i} value={f.name}>{f.name}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Sort by</label>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-full bg-background border-border/50">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newest">Newest</SelectItem>
                          <SelectItem value="oldest">Oldest</SelectItem>
                          <SelectItem value="az">A-Z</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {(searchQuery || selectedCategory || selectedType || sortBy !== "newest") && (
                      <Button 
                        variant="ghost" 
                        onClick={() => { setSearchQuery(""); setSelectedCategory(""); setSelectedType(""); setSortBy("newest"); }}
                        className="w-full text-muted-foreground hover:text-foreground mt-2"
                      >
                        Clear All Filters
                      </Button>
                    )}
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Loading products...</p>
            </div>
          ) : sortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground">We couldn't find anything matching your filters.</p>
              <Button variant="outline" className="mt-6" onClick={() => { setSearchQuery(""); setSelectedCategory(""); setSelectedType(""); setSortBy("newest"); }}>Clear Filters</Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product, i) => (
                <Card key={i} className="bg-secondary/20 border-border/50 overflow-hidden group flex flex-col hover:border-primary/50 transition-colors cursor-pointer" onClick={() => {
                  const { icon, ...serializableProduct } = product;
                  const slug = product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                  navigate(`/post/${slug}`, { state: { product: serializableProduct } });
                }}>
                  <div className="aspect-[352/199] relative overflow-hidden bg-secondary/30 flex items-center justify-center">
                    {product.image ? (
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full p-6 flex items-center justify-center">
                        <BookMockup title={product.title} />
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm p-2 rounded-lg border border-border/50 shadow-sm z-10">
                      <product.icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-serif font-medium text-lg leading-tight mb-4 flex-grow">{product.title}</h3>
                    {product.categories && product.categories.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {product.categories.slice(0, 2).map((cat: string, j: number) => (
                          <span key={j} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                    <Button variant="secondary" className="w-full">
                      Open
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
