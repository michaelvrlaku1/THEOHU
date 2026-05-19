import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function PostDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  
  const [product, setProduct] = useState<any>(location.state?.product);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(!location.state?.product);

  useEffect(() => {
    const currentProduct = location.state?.product;
    if (currentProduct) {
      setProduct(currentProduct);
    }

    const fetchProductData = async () => {
      try {
        const response = await fetch('https://rss-link.com/feed/jS6PfsBaZNupSlXMrWpD?blogId=oWOqvyS9GdEAh1S0EK1M&limit=25&loadContent=true');
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');
        
        const foundItem = Array.from(items).find(item => {
          const title = item.querySelector('title')?.textContent || '';
          const itemSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
          return itemSlug === slug;
        });
        
        let itemCategories = currentProduct?.categories || [];

        if (foundItem) {
          const title = foundItem.querySelector('title')?.textContent || currentProduct?.title || '';
          const link = foundItem.querySelector('link')?.textContent || '';
          
          const categoryNodes = foundItem.querySelectorAll('category');
          itemCategories = Array.from(categoryNodes).map(c => c.textContent || '');
          
          let image = currentProduct?.image || '';
          const enclosure = foundItem.querySelector('enclosure');
          if (enclosure) {
            image = enclosure.getAttribute('url') || image;
          }
          const content = foundItem.querySelector('content\\:encoded, encoded')?.textContent || '';
          if (!image) {
            const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch) image = imgMatch[1];
          }
          
          const description = foundItem.querySelector('description')?.textContent || '';
          const pubDate = foundItem.querySelector('pubDate')?.textContent || '';
          
          setProduct({ title, link, image, categories: itemCategories, description, content, pubDate });
        }

        // Find related products
        const related = Array.from(items)
          .map(item => {
            const itemTitle = item.querySelector('title')?.textContent || '';
            const itemSlug = itemTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            
            let itemImage = '';
            const itemEnclosure = item.querySelector('enclosure');
            if (itemEnclosure) {
              itemImage = itemEnclosure.getAttribute('url') || '';
            }
            if (!itemImage) {
              const itemContent = item.querySelector('content\\:encoded, encoded')?.textContent || '';
              const itemImgMatch = itemContent.match(/<img[^>]+src="([^">]+)"/);
              if (itemImgMatch) itemImage = itemImgMatch[1];
            }

            const itemCategoryNodes = item.querySelectorAll('category');
            const itemCats = Array.from(itemCategoryNodes).map(c => c.textContent || '');

            return {
              title: itemTitle,
              slug: itemSlug,
              image: itemImage,
              categories: itemCats,
            };
          })
          .filter(item => item.slug !== slug) // exclude current
          .sort((a, b) => {
            const aMatch = a.categories.some((c: string) => itemCategories.includes(c)) ? 1 : 0;
            const bMatch = b.categories.some((c: string) => itemCategories.includes(c)) ? 1 : 0;
            return bMatch - aMatch;
          })
          .slice(0, 3);
          
        setRelatedProducts(related);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [slug, location.state]);

  const mainContent = product?.content || product?.description || '';
  
  let courseLink = "https://portal.theohu.com/courses/offers/9b523eb1-714f-40e2-8a88-3b90571e54af";
  let displayContent = mainContent;

  if (mainContent) {
    const firstLinkMatch = mainContent.match(/<a[^>]+href="([^"]+)"[^>]*>.*?<\/a>/i);
    if (firstLinkMatch && mainContent.indexOf(firstLinkMatch[0]) < 500) {
      courseLink = firstLinkMatch[1];
      displayContent = mainContent.replace(firstLinkMatch[0], '');
    } else {
      const rawMatch = mainContent.match(/https?:\/\/[^\s<"]+/i);
      if (rawMatch && mainContent.indexOf(rawMatch[0]) < 500) {
        courseLink = rawMatch[0];
        displayContent = mainContent.replace(rawMatch[0], '');
      }
    }
  }

  useEffect(() => {
    if (product) {
      document.title = `${product.title} | OHU`;

      const setMeta = (name: string, content: string, isProperty = false) => {
        const attr = isProperty ? 'property' : 'name';
        let meta = document.querySelector(`meta[${attr}="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attr, name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      const plainDescription = product.description?.replace(/<[^>]+>/g, '').substring(0, 160) || '';

      setMeta('description', plainDescription);
      setMeta('og:title', product.title, true);
      setMeta('og:description', plainDescription, true);
      if (product.image) {
        setMeta('og:image', product.image, true);
        setMeta('twitter:image', product.image);
      }
      if (product.categories?.length) {
        setMeta('keywords', product.categories.join(', '));
      }
    }
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            Loading...
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Post not found</h2>
            <button onClick={() => navigate('/digital-products')} className="text-primary hover:underline">
              Return to Library
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-[#0a0812]">
        <div className="container mx-auto px-4 max-w-6xl">
          <button 
            onClick={() => navigate('/digital-products')} 
            className="text-muted-foreground hover:text-foreground mb-8 flex items-center gap-2 transition-colors"
          >
            ← Browse All Products
          </button>
          
          <article className="max-w-none mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif leading-tight max-w-4xl">{product.title}</h1>
            
            {product.categories && product.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {product.categories.map((category: string, i: number) => {
                  const isType = ["Courses", "Templates", "Checklists", "Calculators & Worksheets", "Guides", "eBooks", "Free Downloads"].includes(category);
                  const searchParam = isType ? `type=${encodeURIComponent(category)}` : `category=${encodeURIComponent(category)}`;
                  return (
                    <button 
                      key={i} 
                      onClick={() => navigate(`/digital-products?${searchParam}`)}
                      className="px-3 py-1 bg-primary/20 hover:bg-primary/30 text-primary rounded-full text-sm font-medium border border-primary/30 transition-colors cursor-pointer"
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
              <div className="lg:col-span-2">
                {product.image && (
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full rounded-xl mb-6 shadow-lg object-cover max-h-[500px]"
                  />
                )}

                <div className="mb-12">
                  <a 
                    href={courseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold py-2.5 px-6 rounded-lg transition-colors text-base text-center border border-border"
                  >
                    Get Access to this Course
                  </a>
                </div>
                
                <div 
                  className="prose prose-invert max-w-none prose-headings:!font-serif [&_h1]:!font-serif [&_h2]:!font-serif [&_h3]:!font-serif [&_h4]:!font-serif [&_h5]:!font-serif [&_h6]:!font-serif [&_h1_*]:!font-serif [&_h2_*]:!font-serif [&_h3_*]:!font-serif [&_h4_*]:!font-serif [&_h5_*]:!font-serif [&_h6_*]:!font-serif [&_h1]:!text-foreground [&_h2]:!text-foreground [&_h3]:!text-foreground [&_h4]:!text-foreground [&_h5]:!text-foreground [&_h6]:!text-foreground [&_h1_*]:!text-foreground [&_h2_*]:!text-foreground [&_h3_*]:!text-foreground [&_h4_*]:!text-foreground [&_h5_*]:!text-foreground [&_h6_*]:!text-foreground [&_p]:!text-muted-foreground [&_p_*]:!text-muted-foreground [&_li]:!text-muted-foreground [&_li_*]:!text-muted-foreground prose-strong:!text-foreground [&_strong]:!text-foreground [&_b]:!text-foreground [&_strong_*]:!text-foreground [&_b_*]:!text-foreground prose-a:!text-primary hover:prose-a:!text-primary/80 prose-img:rounded-xl [&_h2]:!text-[24px] md:[&_h2]:!text-[30px] [&_h2_*]:!text-[24px] md:[&_h2_*]:!text-[30px] [&_h2]:!font-normal [&_h2_*]:!font-normal [&_h2]:!mt-12 [&_h2]:!mb-6 [&_h3]:!text-[24px] md:[&_h3]:!text-[30px] [&_h3_*]:!text-[24px] md:[&_h3_*]:!text-[30px] [&_h3]:!font-normal [&_h3_*]:!font-normal [&_h3]:!mt-10 [&_h3]:!mb-4 [&_h4]:!text-[24px] md:[&_h4]:!text-[30px] [&_h4_*]:!text-[24px] md:[&_h4_*]:!text-[30px] [&_h4]:!font-normal [&_h4_*]:!font-normal [&_h4]:!mt-10 [&_h4]:!mb-4 [&_h5]:!text-[24px] md:[&_h5]:!text-[30px] [&_h5_*]:!text-[24px] md:[&_h5_*]:!text-[30px] [&_h5]:!font-normal [&_h5_*]:!font-normal [&_h5]:!mt-10 [&_h5]:!mb-4 [&_h6]:!text-[24px] md:[&_h6]:!text-[30px] [&_h6_*]:!text-[24px] md:[&_h6_*]:!text-[30px] [&_h6]:!font-normal [&_h6_*]:!font-normal [&_h6]:!mt-10 [&_h6]:!mb-4 [&_p]:!text-[16px] [&_p_*]:!text-[16px] [&_p]:!mb-6 [&_p]:!leading-relaxed [&_p]:whitespace-pre-line [&_div]:!mb-6 [&_ul]:!list-disc [&_ul]:!pl-8 [&_ul]:!mb-6 [&_ol]:!list-decimal [&_ol]:!pl-8 [&_ol]:!mb-6 [&_li]:!text-[16px] [&_li_*]:!text-[16px] [&_li]:!mb-0 [&_li]:!pl-2"
                  dangerouslySetInnerHTML={{ __html: displayContent }} 
                />
              </div>

              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-lg">
                  <img 
                    src="https://vibe.filesafe.space/1775492911893254433/attachments/2fd3872f-a063-477b-9adc-3af9b323e923.png" 
                    alt="Full Library Access" 
                    className="w-full rounded-lg mb-6 shadow object-cover aspect-video"
                  />
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 font-serif text-foreground">Full Library Access Includes:</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>48+ Courses, Guides, Templates & Tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>Interactive Calculators & Worksheets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>Printable Templates & PDFs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>Video Courses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>All Future Updates — Included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>Priority Email Support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>State-Specific CE Courses</span>
                      </li>
                    </ul>
                  </div>

                  <button 
                    onClick={() => window.location.href = 'https://portal.theohu.com/courses/offers/9b523eb1-714f-40e2-8a88-3b90571e54af'}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-4 rounded-lg transition-colors text-lg"
                  >
                    Get Full Library Access
                  </button>
                </div>
              </div>
            </div>
          </article>

          {relatedProducts.length > 0 && (
            <div className="mt-24 border-t border-border pt-16">
              <h2 className="text-3xl font-bold mb-8 font-serif">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((related, i) => (
                  <div 
                    key={i} 
                    className="group cursor-pointer bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col"
                    onClick={() => {
                      navigate(`/post/${related.slug}`, { state: { product: related } });
                      window.scrollTo(0, 0);
                    }}
                  >
                    {related.image ? (
                      <div className="aspect-[352/199] overflow-hidden bg-muted">
                        <img 
                          src={related.image} 
                          alt={related.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[352/199] bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground font-serif italic">No image available</span>
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-normal font-serif mb-2 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      {related.categories && related.categories.length > 0 && (
                        <div className="mt-auto pt-4 flex flex-wrap gap-2">
                          {related.categories.slice(0, 2).map((cat: string, j: number) => (
                            <span key={j} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                              {cat}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
