// scripts/generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

const baseUrl = "https://wingstarnarketing.com/";

const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/about-us", changefreq: "monthly", priority: 0.9 },
  { url: "/contact-us", changefreq: "monthly", priority: 0.9 },
  { url: "/founder", changefreq: "monthly", priority: 0.9 },
  { url: "/design/web-design", changefreq: "monthly", priority: 0.9 },
  { url: "/design/graphic-design", changefreq: "monthly", priority: 0.9 },
  { url: "/design/branding", changefreq: "monthly", priority: 0.9 },
  { url: "/design/production", changefreq: "monthly", priority: 0.9 },
  { url: "/development/web-development", changefreq: "monthly", priority: 0.9 },
  {
    url: "/development/software-development",
    changefreq: "monthly",
    priority: 0.9,
  },
  { url: "/development/e-commerce", changefreq: "monthly", priority: 0.9 },
  { url: "/development/app-development", changefreq: "monthly", priority: 0.9 },
  {
    url: "/development/support-and-maintenance",
    changefreq: "monthly",
    priority: 0.9,
  },
  { url: "/development/testing", changefreq: "monthly", priority: 0.9 },
  {
    url: "/development/wordpress-development",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    url: "/marketing/marketing-strategy",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    url: "/marketing/holistic-marketing",
    changefreq: "monthly",
    priority: 0.9,
  },
  { url: "/marketing/seo", changefreq: "monthly", priority: 0.9 },
  { url: "/marketing/paid-advertising", changefreq: "monthly", priority: 0.9 },
  { url: "/marketing/social-media", changefreq: "monthly", priority: 0.9 },
  { url: "/marketing/content", changefreq: "monthly", priority: 0.9 },
  {
    url: "/marketing/conversion-rate-optimisation",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    url: "/marketing/data-analytics-and-reporting",
    changefreq: "monthly",
    priority: 0.9,
  },
];

const stream = new SitemapStream({ hostname: baseUrl });

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  const writeStream = createWriteStream("./public/sitemap.xml");
  writeStream.write(data.toString());
  writeStream.end();
  console.log("✅ Sitemap generated at public/sitemap.xml");
});
