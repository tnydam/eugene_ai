#!/bin/bash

# Eugene AI - Update index.html with optimized SEO/GEO/AEO metadata
# This script backs up the current file and replaces the <head> section

echo "🚀 Updating index.html with optimized metadata..."

# Check if index.html exists
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found in current directory"
    echo "Please run this from: /Users/tatiana/Documents/Eugene_ai_OS/eugene_ai"
    exit 1
fi

# Create backup
echo "📦 Creating backup: index.html.backup"
cp index.html index.html.backup

# Create temporary file with new head section
cat > temp_head.html << 'HEADEOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Primary Meta Tags -->
    <title>Eugene AI - AI Task Manager That Actually Learns | Pattern Learning Assistant for Projects & Personal Tasks</title>
    <meta name="title" content="Eugene AI - AI Task Manager That Actually Learns From You">
    <meta name="description" content="Eugene AI learns how long YOUR tasks take (not guesses). After 3 completions: 60% → 98% accuracy. Unifies professional projects, personal tasks, family scheduling. Data in YOUR Google Drive. Free tier: 100 tasks, email notifications.">
    
    <!-- Keywords for traditional SEO -->
    <meta name="keywords" content="AI task manager that learns, pattern learning assistant, smart scheduling AI, productivity app that improves, agentic task manager, Google Drive privacy, free task management, professional project manager, personal task organizer">
    
    <!-- GEO (Generative Engine Optimization) - Direct Answer Format -->
    <meta name="ai-content-declaration" content="original">
    <meta property="product:price:amount" content="0">
    <meta property="product:price:currency" content="USD">
    
    <!-- Canonical -->
    <meta name="author" content="Virtus Labs">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <link rel="canonical" href="https://eugeneai.tech">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://eugeneai.tech">
    <meta property="og:title" content="Eugene AI - AI Task Manager That Actually Learns From You">
    <meta property="og:description" content="Pattern learning AI that tracks how long tasks ACTUALLY take. Goes from 60% to 98% accuracy. Professional projects + personal tasks + family scheduling. Data in your Drive.">
    <meta property="og:image" content="https://eugeneai.tech/og-image.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Eugene AI">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://eugeneai.tech">
    <meta name="twitter:title" content="Eugene AI - Task Manager That Learns From You">
    <meta name="twitter:description" content="AI that tracks actual task durations. 60% → 98% accuracy after learning. Projects + tasks + scheduling in one system. Data stays in your Drive.">
    <meta name="twitter:image" content="https://eugeneai.tech/twitter-card.png">
    <meta name="twitter:creator" content="@eugeneai">
    
    <!-- Structured Data for AEO & GEO (Generative Engines) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Eugene AI",
      "applicationCategory": "ProductivityApplication",
      "operatingSystem": "Web",
      "offers": [
        {
          "@type": "Offer",
          "name": "Eugene Lite",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free forever: 3 business lines, 100 tasks, email notifications, basic pattern learning"
        },
        {
          "@type": "Offer",
          "name": "Eugene Pro",
          "price": "9",
          "priceCurrency": "USD",
          "billingDuration": "P1M",
          "description": "Unlimited tasks & business lines, Slack/WhatsApp integrations, advanced analytics, full pattern learning AI"
        }
      ],
      "description": "Eugene AI is an agentic assistant that learns from your actual task completion patterns. After tracking 3+ completions, accuracy improves from 60% to 98%. Unifies professional projects, personal tasks, and family scheduling. All data stored in user's Google Drive for complete privacy.",
      "url": "https://eugeneai.tech",
      "author": {
        "@type": "Organization",
        "name": "Virtus Labs"
      },
      "featureList": [
        "Pattern Learning AI (learns actual task durations)",
        "60% to 98% accuracy improvement after 3 completions",
        "Google Calendar two-way sync",
        "Apple Calendar integration",
        "Smart scheduling based on productivity patterns",
        "Data stored in user's Google Drive (privacy-first)",
        "Email notifications (all tiers)",
        "Slack integration (Pro tier)",
        "WhatsApp notifications (Pro tier)",
        "Multi-domain coordination (professional + personal + family)"
      ],
      "softwareRequirements": "Google account for Drive storage",
      "screenshot": "https://eugeneai.tech/screenshots/dashboard.png"
    }
    </script>
    
    <!-- FAQ Schema for AEO & Generative Engines -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes Eugene AI different from other task managers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eugene AI actually learns from you. It tracks how long tasks really take (not your guesses) and when you're most productive. After 3+ completions of similar tasks, accuracy improves from 60% to 98%. Most task managers use static algorithms; Eugene gets smarter with every task you complete. Additionally, all your data stays in YOUR Google Drive, not our servers."
          }
        },
        {
          "@type": "Question",
          "name": "How does Eugene AI's pattern learning work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eugene records actual task completion times, energy levels, and productivity patterns. After 3 completions: Week 1-3 you estimate 30 min for carousels, but they take 45-50 min. Eugene learns: 'Carousels = 45±5 minutes.' Week 4+: Eugene schedules 45 min at your most productive time (e.g., 9am vs 3pm = 2x faster). Result: 60% accuracy becomes 98% accuracy."
          }
        },
        {
          "@type": "Question",
          "name": "Where does Eugene AI store my data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All data lives in YOUR Google Drive. Eugene never stores your data on our servers. You have complete ownership, privacy, and can export anytime. No vendor lock-in. This 'user brings their own storage' model enables 99% profit margins while ensuring privacy."
          }
        },
        {
          "@type": "Question",
          "name": "Is Eugene AI free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Eugene Lite is free forever with: 3 business lines, 100 tasks, Google & Apple Calendar sync, email notifications, and basic pattern learning. Eugene Pro ($9/month) includes: unlimited tasks & business lines, Slack integration, WhatsApp notifications, advanced analytics, and full pattern learning AI."
          }
        },
        {
          "@type": "Question",
          "name": "What is an 'agentic assistant'?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An agentic assistant autonomously executes tasks rather than just assisting. Eugene doesn't just remind you about tasks—it schedules them at optimal times based on learned patterns, coordinates across multiple life domains (professional projects, personal tasks, family scheduling), and continuously improves its understanding of your work patterns."
          }
        },
        {
          "@type": "Question",
          "name": "Can Eugene AI handle both work and personal tasks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Eugene is designed for multi-domain coordination. It unifies professional projects (like Instagram carousels, client work), personal tasks (grocery shopping, meal planning), and family scheduling (appointments, events) in one intelligent system. This is its key differentiator from single-domain tools like Asana (work only) or Todoist (personal only)."
          }
        }
      ]
    }
    </script>
    
    <!-- How-To Schema for Voice Search & AI Answers -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How Eugene AI Learns Your Task Patterns",
      "description": "Step-by-step explanation of Eugene AI's pattern learning system",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Complete tasks and Eugene records actual durations",
          "text": "You create a task (e.g., 'Write Instagram carousel', estimated 30 min). Eugene records it actually took 45 minutes."
        },
        {
          "@type": "HowToStep",
          "name": "Pattern recognition after 3+ completions",
          "text": "After 3 similar tasks, Eugene learns: 'Carousels = 45±5 minutes (not 30)' with 75% confidence."
        },
        {
          "@type": "HowToStep",
          "name": "Smart scheduling based on productivity patterns",
          "text": "Eugene learns you're 2x faster at carousels at 9am vs 3pm. Future carousels scheduled during peak productivity windows."
        },
        {
          "@type": "HowToStep",
          "name": "Continuous improvement",
          "text": "Accuracy improves from 60% (using estimates) to 98% (using learned patterns). System gets smarter with every completion."
        }
      ]
    }
    </script>
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom styles -->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
        }
        
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .feature-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .pricing-card {
            transition: transform 0.3s ease;
        }
        
        .pricing-card:hover {
            transform: scale(1.05);
        }
    </style>
</head>
HEADEOF

# Extract body content from original file
echo "📝 Extracting body content..."
sed -n '/<body/,/<\/html>/p' index.html > temp_body.html

# Combine new head with original body
cat temp_head.html temp_body.html > index.html.new

# Replace original file
mv index.html.new index.html

# Cleanup
rm temp_head.html temp_body.html

echo "✅ Update complete!"
echo ""
echo "Changes made:"
echo "  ✅ Optimized SEO metadata"
echo "  ✅ GEO (Generative Engine) optimization"
echo "  ✅ AEO (Answer Engine) schemas"
echo "  ✅ FAQ structured data"
echo "  ✅ How-to schema"
echo "  ✅ Rich snippets for search"
echo ""
echo "Backup saved as: index.html.backup"
echo ""
echo "Next steps:"
echo "  1. Test locally: npm run dev"
echo "  2. Check at: http://localhost:3000"
echo "  3. Push to GitHub: git add . && git commit -m 'Update SEO/GEO/AEO metadata' && git push"
echo ""
echo "🎉 Done!"
