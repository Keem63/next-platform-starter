# Blog and Analytics Documentation

This document explains the blog structure and how to manage blog content and Google Analytics integration.

## Blog Structure

The blog is implemented using Next.js App Router with the following structure:

```
app/
  blog/
    page.jsx                                    # Blog landing page
    getting-started-with-ai-automation/
      page.jsx                                  # Individual blog post
    [future-blog-post]/
      page.jsx                                  # Additional blog posts
```

### Blog Landing Page (`/blog`)

The blog landing page (`app/blog/page.jsx`) displays a list of all blog posts. Blog posts are currently hardcoded in the `blogPosts` array within the component.

**Current blog post structure:**
```javascript
{
    id: 'post-slug',                    // Used for URL routing
    title: 'Post Title',                // Display title
    description: 'Brief description',   // Post summary
    date: '2024-10-06',                // Publication date (YYYY-MM-DD)
    author: 'Author Name'               // Post author
}
```

### Individual Blog Posts

Each blog post is a separate page component located in `app/blog/[post-slug]/page.jsx`. The post slug must match the `id` field in the blog landing page array.

## Adding New Blog Posts

### Step 1: Create the Blog Post Page

1. Create a new directory under `app/blog/` with your post slug (e.g., `app/blog/my-new-post/`)
2. Create a `page.jsx` file in this directory
3. Use the existing blog post structure as a template (`app/blog/getting-started-with-ai-automation/page.jsx`)

**Template structure:**
```jsx
import Link from 'next/link';

export const metadata = {
    title: 'Your Post Title',
    description: 'Your post description for SEO'
};

export default function YourPostComponent() {
    return (
        <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
                <Link href="/blog" className="text-blue-300 hover:text-white transition-colors">
                    ← Back to Blog
                </Link>
            </nav>

            <article className="space-y-6">
                <header className="space-y-4">
                    <h1 className="text-4xl font-bold">Your Post Title</h1>
                    <div className="flex items-center gap-4 text-blue-300">
                        <span>By Your Name</span>
                        <span>•</span>
                        <time dateTime="2024-10-06">October 6, 2024</time>
                    </div>
                </header>

                <div className="prose prose-invert prose-blue max-w-none">
                    {/* Your blog content here */}
                </div>
            </article>
        </div>
    );
}
```

### Step 2: Add Post to Blog Landing Page

1. Open `app/blog/page.jsx`
2. Add your new post to the `blogPosts` array:

```javascript
const blogPosts = [
    // Existing posts...
    {
        id: 'my-new-post',                      // Must match directory name
        title: 'My New Post Title',
        description: 'Brief description of the post content.',
        date: '2024-10-06',                     // Publication date
        author: 'Your Name'
    }
];
```

### Step 3: Content Guidelines

**Styling Classes:**
- Use `text-4xl font-bold` for main headings (h1)
- Use `text-2xl font-semibold` for section headings (h2)
- Use `text-xl font-semibold` for subsection headings (h3)
- Use `text-blue-100 leading-relaxed` for body text
- Use `text-blue-200` for less prominent text
- Use `text-blue-300` for links and metadata

**Content Structure:**
- Include navigation back to blog
- Use semantic HTML (`<article>`, `<header>`, `<time>`)
- Add proper metadata for SEO
- Include author and date information
- Use consistent spacing with Tailwind utilities

## Google Analytics Integration

Google Analytics is integrated into the site through the `GoogleAnalytics` component in `app/layout.jsx`.

### Environment Variable Configuration

The Google Analytics tracking ID is configured via environment variable:

**Environment Variable:**
```
NEXT_PUBLIC_GA_TRACKING_ID=GA_MEASUREMENT_ID
```

**Important Notes:**
- The variable must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser
- Replace `GA_MEASUREMENT_ID` with your actual Google Analytics Measurement ID (format: G-XXXXXXXXXX)
- If the environment variable is not set, Google Analytics will not load

### Setting Up Google Analytics

1. **Create Google Analytics Property:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property for your website
   - Set up a data stream for your website
   - Copy the Measurement ID (starts with "G-")

2. **Configure Environment Variable:**
   
   **For Local Development:**
   Create a `.env.local` file in the project root:
   ```
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

   **For Netlify Deployment:**
   - Go to your Netlify site dashboard
   - Navigate to Site Settings > Environment Variables
   - Add a new environment variable:
     - Key: `NEXT_PUBLIC_GA_TRACKING_ID`
     - Value: `G-XXXXXXXXXX` (your Measurement ID)

3. **Verify Integration:**
   - Deploy your site with the environment variable configured
   - Check Google Analytics Real-Time reports to confirm data collection
   - Use browser developer tools to verify the gtag scripts are loading

### Analytics Features

The current integration includes:
- Page view tracking
- Automatic enhanced measurement (scrolling, outbound clicks, site search, video engagement)
- Cookie consent compliance (Analytics uses first-party cookies)

### Privacy Considerations

- Google Analytics complies with GDPR when properly configured
- Consider adding a privacy policy that mentions data collection
- Users can opt out of tracking through browser settings or ad blockers
- The integration respects Do Not Track browser settings

### Troubleshooting

**Common Issues:**
1. **Analytics not tracking:** Verify the environment variable is set correctly and the Measurement ID format is correct
2. **Local development:** Remember that `.env.local` files are not committed to git
3. **Netlify deployment:** Ensure environment variables are set in the Netlify dashboard, not just locally

**Testing:**
- Use Google Analytics DebugView for real-time debugging
- Check browser Network tab to confirm gtag requests are being sent
- Verify the Measurement ID matches between your Google Analytics property and environment variable

## File Locations Summary

- **Blog landing page:** `app/blog/page.jsx`
- **Individual blog posts:** `app/blog/[post-slug]/page.jsx`
- **Google Analytics integration:** `app/layout.jsx`
- **Navigation menu:** `components/header.jsx`
- **Environment variables:** `.env.local` (local) or Netlify dashboard (production)

This documentation should be updated as the blog system evolves or additional features are added.