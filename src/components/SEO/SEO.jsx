import { Helmet } from "react-helmet-async";
import logo from "../../assets/images/logo.png";

const SEO = ({
  title = "Star Marketing : Top-Ranked SEO, Digital Marketing, Web, Software & App Development",
  description = "Start Marketing offers expert services in SEO, Social Media Marketing, Branding, Paid Ads (PPC), Website Design & Development, Content Marketing, Influencer Marketing, E-commerce Marketing, Local SEO & Lead Generation. Serving clients across India & UK.",
  keywords = "digital marketing agency, SEO services, PPC ads, branding agency, social media marketing, website design, web development, content marketing, influencer marketing, ecommerce marketing, local SEO, lead generation, UK marketing, India marketing, Sikar agency, London SEO, Mumbai marketing, best marketing company",
  url = "https://www.wingstarnarketing.com",
  image = logo,
  author = "Star Marketing",
  type = "website", // For flexibility in case you're making pages like blogs/articles later
}) => {
  const fullImageUrl = image?.startsWith("https")
    ? image
    : `${url.replace(/\/$/, "")}/${image.replace(/^\//, "")}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Star Marketing",
    url,
    logo: fullImageUrl,
    email: "info@wingstarmarketing.com",
    description:
      "Expert digital marketing agency with offices in India and UK. Specializing in SEO, branding, web design, and paid marketing.",
    founder: {
      "@type": "Person",
      name: "Sohel Ali",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 8209326351",
        contactType: "Customer Support",
        areaServed: ["IN", "GB"],
        availableLanguage: ["en"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/wingstarmarketing",
      "https://www.instagram.com/wingstarmarketing",
      "https://www.linkedin.com/company/wingstarmarketing",
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Near by Fatima Masjid Fathepur Road, Sikar, 332001",
        addressLocality: "Sikar",
        addressRegion: "Rajasthan",
        postalCode: "332001",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "506a Ladymargret Road",
        addressLocality: "Southall",
        addressRegion: "London",
        postalCode: "UB1 2NP",
        addressCountry: "GB",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Opp GCC Club Mira Road, East",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    ],
  };

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      titleTemplate="%s | Star Marketing"
      defaultTitle="Star Marketing"
    >
      {/* Basic Meta Tags */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="robots" content="index, follow" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />
      <link rel="icon" href={fullImageUrl} type="image/png" sizes="32x32" />
      <link rel="apple-touch-icon" href={fullImageUrl} />
      <meta name="format-detection" content="telephone=no" />

      {/* Microdata (for rich snippets) */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={fullImageUrl} />

      {/* Open Graph Meta */}
      <meta property="og:site_name" content="Star Marketing" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content="Star Marketing Logo" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_IN" />

      {/* Twitter Card Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wingstarmarketing" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@wingstarmarketing" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
