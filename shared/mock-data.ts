import type { User, Chat, ChatMessage } from './types';
export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'User A' },
  { id: 'u2', name: 'User B' }
];
export const MOCK_CHATS: Chat[] = [
  { id: 'c1', title: 'General' },
];
export const MOCK_CHAT_MESSAGES: ChatMessage[] = [
  { id: 'm1', chatId: 'c1', userId: 'u1', text: 'Hello', ts: Date.now() },
];
// --- INFOGRAPHIC DATA ---
export const INFRA_TOP10 = [
  { rank: 1, name: 'Scrapy', lang: 'Python', color: 'green-500', github: 'https://github.com/scrapy/scrapy', website: 'https://scrapy.org/', description: 'The undisputed industrial standard. While it lacks built-in JS rendering, its middleware ecosystem is unmatched.' },
  { rank: 2, name: 'Puppeteer', lang: 'Node.js', color: 'yellow-400', github: 'https://github.com/puppeteer/puppeteer', website: 'https://pptr.dev/', description: "Google's Chrome control library. Essential for scraping modern SPA (Single Page Applications) where interaction is key." },
  { rank: 3, name: 'Playwright', lang: 'Node/Py', color: 'blue-500', github: 'https://github.com/microsoft/playwright', website: 'https://playwright.dev/', description: "Microsoft's successor to Puppeteer. Faster, supports all browsers (WebKit/Firefox), and has better auto-waiting mechanisms." },
  { rank: 4, name: 'Colly', lang: 'Go', color: 'cyan-500', github: 'https://github.com/gocolly/colly', website: 'http://go-colly.org/', description: 'Blazing fast. For tasks not requiring JS rendering, Colly is orders of magnitude faster than Python equivalents.' },
  { rank: 5, name: 'Crawlee', lang: 'Node.js', color: 'purple-500', github: 'https://github.com/apify/crawlee', website: 'https://crawlee.dev/', description: 'Built by Apify. It uniquely blends HTTP crawling with headless browsing fallback, managing fingerprints automatically.' },
  { rank: 6, name: 'Apache Nutch', lang: 'Java', color: 'red-500', github: 'https://github.com/apache/nutch', website: 'https://nutch.apache.org/', description: 'The grandfather of crawlers. Highly extensible, scalable, and modular. Used for whole-web crawling.' },
  { rank: 7, name: 'Selenium', lang: 'Multi', color: 'gray-500', github: 'https://github.com/SeleniumHQ/selenium', website: 'https://www.selenium.dev/', description: 'Originally for testing, but still a scraping titan. Slower than Playwright but has massive community support.' },
  { rank: 8, name: 'Beautiful Soup', lang: 'Python', color: 'green-600', github: 'https://github.com/wention/BeautifulSoup4', website: 'https://www.crummy.com/software/BeautifulSoup/', description: 'A parser, not a crawler, but inseparable from the ecosystem. The entry point for 90% of developers.' },
  { rank: 9, name: 'Heritrix3', lang: 'Java', color: 'orange-500', github: 'https://github.com/internetarchive/heritrix3', website: 'https://github.com/internetarchive/heritrix3', description: "The Internet Archive's crawler. Purpose-built for archival fidelity and respecting robots.txt strictly." },
  { rank: 10, name: 'MechanicalSoup', lang: 'Python', color: 'teal-500', github: 'https://github.com/MechanicalSoup/MechanicalSoup', website: 'https://mechanicalsoup.readthedocs.io/', description: 'A Python library for automating interaction with websites. Automatically stores and sends cookies.' },
];
export const INFRA_RANKS_11_50 = [
  {rank: 11, name: "GoSpider", lang: "Go", lic: "MIT", url: "github.com/jaeles-project/gospider"},
  {rank: 12, name: "SimpleCrawler", lang: "Node.js", lic: "MIT", url: "github.com/simplecrawler/simplecrawler"},
  {rank: 13, name: "RoboBrowser", lang: "Python", lic: "BSD", url: "github.com/jmcarp/robobrowser"},
  {rank: 14, name: "Goutte", lang: "PHP", lic: "MIT", url: "github.com/FriendsOfPHP/Goutte"},
  {rank: 15, name: "Portia", lang: "Python", lic: "BSD", url: "github.com/scrapinghub/portia"},
  {rank: 16, name: "Ferret", lang: "Go", lic: "MIT", url: "github.com/MontFerret/ferret"},
  {rank: 17, name: "Pyspider", lang: "Python", lic: "Apache", url: "github.com/binux/pyspider"},
  {rank: 18, name: "Crawler4j", lang: "Java", lic: "Apache", url: "github.com/yasserg/crawler4j"},
  {rank: 19, name: "StormCrawler", lang: "Java", lic: "Apache", url: "github.com/DigitalPebble/storm-crawler"},
  {rank: 20, name: "Node-Crawler", lang: "Node.js", lic: "MIT", url: "github.com/bda-research/node-crawler"},
  {rank: 21, name: "Scrapy-Redis", lang: "Python", lic: "MIT", url: "github.com/rmax/scrapy-redis"},
  {rank: 22, name: "Grab", lang: "Python", lic: "MIT", url: "github.com/lorien/grab"},
  {rank: 23, name: "Feedparser", lang: "Python", lic: "BSD", url: "github.com/kurtmckee/feedparser"},
  {rank: 24, name: "Gecco", lang: "Java", lic: "MIT", url: "github.com/xtuhcy/gecco"},
  {rank: 25, name: "X-ray", lang: "Node.js", lic: "MIT", url: "github.com/matthewmueller/x-ray"},
  {rank: 26, name: "Cheerio", lang: "Node.js", lic: "MIT", url: "github.com/cheeriojs/cheerio"},
  {rank: 27, name: "Lxml", lang: "Python", lic: "BSD", url: "github.com/lxml/lxml"},
  {rank: 28, name: "Requests-HTML", lang: "Python", lic: "MIT", url: "github.com/psf/requests-html"},
  {rank: 29, name: "Kimurai", lang: "Ruby", lic: "MIT", url: "github.com/vifreefly/kimuraframework"},
  {rank: 30, name: "Wombat", lang: "Ruby", lic: "MIT", url: "github.com/felipecsl/wombat"},
  {rank: 31, name: "Spidey", lang: "Ruby", lic: "MIT", url: "github.com/joeyates/spidey"},
  {rank: 32, name: "Anemone", lang: "Ruby", lic: "MIT", url: "github.com/chriskite/anemone"},
  {rank: 33, name: "Upton", lang: "Ruby", lic: "BSD", url: "github.com/propublica/upton"},
  {rank: 34, name: "Headless Chrome", lang: "Go", lic: "MIT", url: "github.com/chromedp/chromedp"},
  {rank: 35, name: "Hakrawler", lang: "Go", lic: "MIT", url: "github.com/hakluke/hakrawler"},
  {rank: 36, name: "Katana", lang: "Go", lic: "MIT", url: "github.com/projectdiscovery/katana"},
  {rank: 37, name: "Turbo Intruder", lang: "Java", lic: "MIT", url: "github.com/PortSwigger/turbo-intruder"},
  {rank: 38, name: "Photon", lang: "Python", lic: "GPL", url: "github.com/s0md3v/Photon"},
  {rank: 39, name: "Scrappy", lang: "Elixir", lic: "MIT", url: "github.com/scrappy-elixir/scrappy"},
  {rank: 40, name: "Crawly", lang: "Elixir", lic: "Apache", url: "github.com/elixir-crawly/crawly"},
  {rank: 41, name: "Soup", lang: "C#", lic: "MIT", url: "github.com/zhx/Soup"},
  {rank: 42, name: "Abot", lang: "C#", lic: "BSD", url: "github.com/sjdirect/abot"},
  {rank: 43, name: "DotnetSpider", lang: "C#", lic: "GPL", url: "github.com/dotnetcore/DotnetSpider"},
  {rank: 44, name: "AngleSharp", lang: "C#", lic: "MIT", url: "github.com/AngleSharp/AngleSharp"},
  {rank: 45, name: "Rust-Scraper", lang: "Rust", lic: "MIT", url: "github.com/causal-agent/scraper"},
  {rank: 46, name: "Spider", lang: "Rust", lic: "MIT", url: "github.com/spider-rs/spider"},
  {rank: 47, name: "Crawl4AI", lang: "Python", lic: "Apache", url: "github.com/unclecode/crawl4ai"},
  {rank: 48, name: "Firecrawl (Self)", lang: "Typescript", lic: "AGPL", url: "github.com/mendableai/firecrawl"},
  {rank: 49, name: "ScrapeGraphAI", lang: "Python", lic: "MIT", url: "github.com/VinciGit00/ScrapeGraphAI"},
  {rank: 50, name: "Trafilatura", lang: "Python", lic: "GPL", url: "github.com/adbar/trafilatura"}
];
export const CHART_PAYLOADS = {
  languageDistribution: [
    { name: 'Python', value: 42, fill: '#4C1D95' },
    { name: 'Node.js/JS', value: 28, fill: '#F472B6' },
    { name: 'Go', value: 18, fill: '#06B6D4' },
    { name: 'Java', value: 8, fill: '#10B981' },
    { name: 'Other', value: 4, fill: '#94A3B8' },
  ],
  complexityValue: [
    { x: 2, y: 8, z: 150, name: 'Scrape-IT', category: 'High Value / Low Complexity', fill: '#10B981' },
    { x: 3, y: 9, z: 250, name: 'Beautiful Soup', category: 'High Value / Low Complexity', fill: '#10B981' },
    { x: 8, y: 9, z: 200, name: 'Apache Nutch', category: 'Enterprise Scale', fill: '#4C1D95' },
    { x: 7, y: 10, z: 300, name: 'Scrapy Cluster', category: 'Enterprise Scale', fill: '#4C1D95' },
    { x: 6, y: 9.5, z: 280, name: 'Playwright', category: 'Modern Headless', fill: '#F472B6' },
    { x: 6, y: 9, z: 280, name: 'Puppeteer', category: 'Modern Headless', fill: '#F472B6' },
    { x: 5, y: 7, z: 220, name: 'Colly (Go)', category: 'High Performance', fill: '#06B6D4' },
    { x: 9, y: 6, z: 100, name: 'Custom C++', category: 'High Performance', fill: '#06B6D4' },
  ],
  top10Scores: [
    { name: 'Scrapy', score: 98, fill: '#4C1D95' },
    { name: 'Puppeteer', score: 95, fill: '#F472B6' },
    { name: 'Playwright', score: 94, fill: '#F472B6' },
    { name: 'Colly', score: 88, fill: '#06B6D4' },
    { name: 'Crawlee', score: 86, fill: '#F472B6' },
    { name: 'Apache Nutch', score: 82, fill: '#10B981' },
    { name: 'Selenium', score: 80, fill: '#64748B' },
    { name: 'Beautiful Soup', score: 78, fill: '#4C1D95' },
    { name: 'Heritrix3', score: 72, fill: '#10B981' },
    { name: 'MechanicalSoup', score: 70, fill: '#4C1D95' },
  ].reverse(), // Reverse for horizontal bar chart display
};