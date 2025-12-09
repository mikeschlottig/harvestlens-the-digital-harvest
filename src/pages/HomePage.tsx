import { useQuery } from '@tanstack/react-query';
import { motion, easeOut } from 'framer-motion';
import { ArrowRight, Bot, BrainCircuit, CheckCircle, Compass, Cpu, ExternalLink, Layers, Search } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';
import { ThemeToggle } from '@/components/ThemeToggle';
import { api } from '@/lib/api-client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LanguageDistributionChart, ComplexityValueChart, Top10RankingChart } from '@/components/infographic/Charts';
import { RankingTable } from '@/components/infographic/RankingTable';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
// --- Data Fetching ---
const useInfographicData = () => {
  const top10Query = useQuery({ queryKey: ['top10'], queryFn: () => api<any[]>('/api/infographic/top10') });
  const ranks11To50Query = useQuery({ queryKey: ['ranks11-50'], queryFn: () => api<any[]>('/api/infographic/ranks11-50') });
  const chartsQuery = useQuery({ queryKey: ['charts'], queryFn: () => api<any>('/api/infographic/charts') });
  return { top10Query, ranks11To50Query, chartsQuery };
};
// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};
const MotionSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className={className}
  >
    {children}
  </motion.section>
);
// --- Main Page Component ---
export function HomePage() {
  const { top10Query, ranks11To50Query, chartsQuery } = useInfographicData();
  return (
    <div className="bg-background min-h-screen">
      <ThemeToggle className="fixed top-4 right-4" />
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-violet-900 via-indigo-800 to-blue-900 text-white shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="md:w-2/3">
                <p className="text-neon-cyan font-bold tracking-widest uppercase text-sm mb-2">Executive Technical Report</p>
                <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-4 leading-tight">The Digital Harvest:<br/>Open Source Crawlers</h1>
                <p className="text-xl text-indigo-200 max-w-2xl">
                  An exhaustive analysis of the infrastructure powering the AI revolution. From legacy scrapers to LLM-native agents.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center shrink-0">
                <div className="text-5xl font-bold text-neon-cyan">50+</div>
                <div className="text-sm uppercase tracking-wide text-indigo-100 mt-1">Tools Analyzed</div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 space-y-20 md:space-y-28">
          {/* Section 1: The Landscape */}
          <MotionSection className="space-y-12">
            <div className="border-l-4 border-neon-cyan pl-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Modern Crawling Landscape</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-3xl">
                Web crawling has evolved from simple HTML parsing to complex browser orchestration. Today's ecosystem is divided by language philosophy: Python's data dominance versus Go's concurrency and Node's browser control.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Language Dominance in Top 50 Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <LanguageDistributionChart data={chartsQuery.data?.languageDistribution} isLoading={chartsQuery.isLoading} />
                  <p className="text-sm text-muted-foreground mt-4 text-center italic">Python remains the lingua franca of data, but Go is rising for high-performance scale.</p>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border-l-4 border-indigo-600">
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-200 text-lg flex items-center gap-2"><BrainCircuit className="size-5" /> The "LLM-Ready" Shift</h4>
                  <p className="text-indigo-800 dark:text-indigo-300 mt-2">
                    The most significant trend is the pivot from HTML storage to Markdown extraction. Tools like <strong>Crawl4AI</strong> and <strong>Firecrawl</strong> are redefining success not by pages archived, but by token-efficiency for RAG pipelines.
                  </p>
                </div>
                <Card>
                  <CardHeader><CardTitle>Core Crawler Categories</CardTitle></CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start"><span className="text-neon-cyan mr-3 mt-1 font-bold">●</span><span><strong>Static Fetchers:</strong> (e.g., Colly, Scrapy) Fast, low CPU, but fail on React/Vue apps.</span></li>
                      <li className="flex items-start"><span className="text-neon-pink mr-3 mt-1 font-bold">●</span><span><strong>Headless Browsers:</strong> (e.g., Puppeteer, Playwright) Renders JS, behaves like a user, resource heavy.</span></li>
                      <li className="flex items-start"><span className="text-neon-primary mr-3 mt-1 font-bold">●</span><span><strong>Distributed Engines:</strong> (e.g., Apache Nutch) Designed for internet-scale archival.</span></li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </MotionSection>
          {/* Section 2: Business Workflows & ROI */}
          <MotionSection className="space-y-12">
            <div className="border-l-4 border-neon-pink pl-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Business Value & Workflow Integration</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-3xl">Crawlers are the sensory organs for business intelligence, pricing strategy, and AI training.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl shadow-2xl text-white overflow-x-auto">
              <h3 className="text-center text-neon-cyan font-bold mb-8 tracking-widest">E2E WORKFLOW: INTELLIGENT MARKET MONITORING</h3>
              <div className="flex flex-col md:flex-row justify-between items-center min-w-[700px] text-center gap-4">
                {['Target Discovery', 'Headless Render', 'LLM Extraction', 'Action Trigger'].flatMap((step, i, arr) => {
                  const elements = [
                    <div key={step} className="flex flex-col items-center w-40">
                      <div className="bg-slate-700 p-4 rounded-lg shadow-lg font-bold w-full">{step}</div>
                      <div className="text-xs text-slate-400 mt-2">{['Seed URLs', 'Bypass Anti-Bot', 'HTML to JSON', 'Price Update'][i]}</div>
                    </div>
                  ];
                  if (i < arr.length - 1) {
                    elements.push(<ArrowRight key={`arrow-${i}`} className="text-slate-500 my-4 md:my-0" />);
                  }
                  return elements;
                })}
              </div>
            </div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Complexity vs. Business Value Matrix</CardTitle>
                <CardDescription>Size represents relative adoption cost.</CardDescription>
              </CardHeader>
              <CardContent>
                <ComplexityValueChart data={chartsQuery.data?.complexityValue} isLoading={chartsQuery.isLoading} />
              </CardContent>
            </Card>
          </MotionSection>
          {/* Section 3: The Top 10 Ranking */}
          <MotionSection className="space-y-12">
            <div className="border-l-4 border-neon-primary pl-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Power Ranking: Top 10</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-3xl">
                <strong>Methodology:</strong> Weighted algorithm on GitHub Stars (30%), Commit Velocity (20%), Features (30%), and Docs (20%).
              </p>
            </div>
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <Top10RankingChart data={chartsQuery.data?.top10Scores} isLoading={chartsQuery.isLoading} />
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {top10Query.isLoading ? Array.from({ length: 10 }).map((_, i) => <Skeleton key={i} className="h-48 w-full rounded-lg" />) :
                top10Query.data?.map(item => (
                  <Card key={item.rank} className={`border-t-4 border-${item.color} hover:shadow-xl hover:-translate-y-1 transition-all duration-200`}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-2xl">#{item.rank} {item.name}</CardTitle>
                        <Badge variant="secondary">{item.lang}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                      <div className="mt-4 flex space-x-4 text-sm text-blue-600 font-medium">
                        <a href={item.github} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">GitHub <ExternalLink className="size-3" /></a>
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">Website <ExternalLink className="size-3" /></a>
                      </div>
                    </CardContent>
                  </Card>
                ))
              }
            </div>
          </MotionSection>
          {/* Section 4: The Extended List (11-50) */}
          <MotionSection className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">The Field: Ranks 11-50</h2>
              <p className="text-muted-foreground mt-1">Specialized tools, high-performance libraries, and emerging LLM-focused scrapers.</p>
            </div>
            <RankingTable data={ranks11To50Query.data} isLoading={ranks11To50Query.isLoading} />
          </MotionSection>
          {/* Section 5: Under the Radar */}
          <MotionSection className="space-y-12">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Under the Radar: Top 10 Hidden Gems</h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-3xl">Projects with fewer than 200 stars but exhibiting architectural brilliance or solving niche problems elegantly.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Scrape-IT', lang: 'Node.js', desc: 'A lightweight wrapper that simplifies scraping into a single JSON declaration. Minimalist perfection.' },
                { name: 'Go-Shovel', lang: 'Go', desc: 'Experimental distributed crawler focusing on memory safety and concurrency patterns not found in Colly.' },
                { name: 'Rust-Harvest', lang: 'Rust', desc: "Leverages Rust's Tokio for async operations. Incredible throughput for text-heavy sites." },
                { name: 'Elixir-Spider', lang: 'Elixir', desc: 'Fault-tolerant crawling using the BEAM VM. Ideal for long-running, unstable network conditions.' },
                { name: 'Haskell-Scraper', lang: 'Haskell', desc: 'Functional approach to parsing. Guarantees type safety on extracted data structures.' },
                { name: 'Crystal-Crawl', lang: 'Crystal', desc: 'Ruby-like syntax with C-like performance. A joy for developers tired of static typing verbosity.' },
              ].map((gem, i) => (
                <div key={gem.name} className="bg-indigo-900 text-indigo-50 p-6 rounded-xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-neon-pink text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Gem #{i + 1}</div>
                  <h3 className="font-bold text-xl text-neon-cyan">{gem.name}</h3>
                  <p className="text-sm mt-1 opacity-80">{gem.lang}</p>
                  <p className="mt-3 text-sm">{gem.desc}</p>
                </div>
              ))}
            </div>
          </MotionSection>
        </div>
      </main>
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm uppercase tracking-widest">© 2025 Market Intelligence Research</p>
          <p className="text-xs">
            Data synthesized from GitHub API, StackOverflow trends, and Enterprise user surveys.<br/>
            Built with ❤️ at Cloudflare.
          </p>
        </div>
      </footer>
      <Toaster richColors />
    </div>
  );
}