# Eugene AI - Your Personal Task Operating System

[![Deploy to GitHub Pages](https://github.com/tatiana-nydam/eugene-ai/workflows/Deploy/badge.svg)](https://github.com/tatiana-nydam/eugene-ai/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Live Demo:** [eugeneai.tech](https://eugeneai.tech)

AI-powered task management that learns from you. Your data stays in your Google Drive.

---

## 🎯 What is Eugene?

Eugene is the first AI task manager that **actually learns** from your behavior:
- ✅ Tracks how long tasks **really** take (not your guesses)
- ✅ Learns when you're most productive  
- ✅ Schedules tasks at optimal times
- ✅ Gets smarter with every completion

**Privacy-first:** All your data lives in YOUR Google Drive, not our servers.

---

## 🆚 Eugene Lite vs Pro

### Eugene Lite (FREE forever)
- ✅ 3 business lines
- ✅ 100 tasks
- ✅ Google & Apple Calendar sync
- ✅ **Email notifications**
- ✅ Pattern learning (basic)
- ✅ Data in your Google Drive

### Eugene Pro ($9/month)
- ✅ Everything in Lite
- ✅ **Unlimited** business lines & tasks
- ✅ Advanced analytics
- ✅ Full pattern learning AI
- ✅ **Slack integration**
- ✅ **WhatsApp notifications**
- ✅ 5 team members

### Enterprise ($49/month)
- ✅ Everything in Pro
- ✅ Custom branding
- ✅ Unlimited team
- ✅ API access
- ✅ White-label option

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Google account (for Drive storage)

### Installation

```bash
# Clone the repository
git clone https://github.com/tatiana-nydam/eugene-ai.git
cd eugene-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000`

---

## 📦 Deployment

### Deploy to GitHub Pages

1. **Fork this repository**

2. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: GitHub Actions

3. **Push to main branch:**
   ```bash
   git push origin main
   ```

4. **GitHub Actions will automatically:**
   - Build the app
   - Deploy to `https://[your-username].github.io/eugene-ai`

### Custom Domain (eugeneai.tech)

1. **Add CNAME file:**
   ```bash
   echo "eugeneai.tech" > public/CNAME
   ```

2. **Configure DNS:**
   - Add CNAME record: `www` → `[username].github.io`
   - Add A records pointing to GitHub Pages IPs

3. **Enable HTTPS in repo settings**

---

## 🏗️ Project Structure

```
eugene-ai/
├── src/
│   ├── components/       # UI components
│   │   └── Layout.tsx
│   ├── pages/            # App pages
│   │   ├── Dashboard.tsx
│   │   ├── Settings.tsx  # Email + integrations
│   │   └── Login.tsx
│   ├── stores/           # State management
│   │   └── userStore.ts  # Tier management
│   ├── App.tsx           # Main app + routing
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── index.html            # Landing page
└── package.json
```

---

## 🎨 Tech Stack

**Frontend:**
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- Zustand (state)
- React Router

**Deployment:**
- GitHub Pages
- GitHub Actions (CI/CD)

**Integrations:**
- Google Drive API (storage)
- Google Calendar API
- Apple Calendar (EventKit)
- SendGrid (email)
- Slack API (Pro)
- WhatsApp Business API (Pro)

---

## 🔧 Configuration

### Environment Variables

Create `.env`:

```bash
# Google OAuth
VITE_GOOGLE_CLIENT_ID=your_client_id

# Email (SendGrid)
VITE_SENDGRID_API_KEY=your_key

# Stripe (payments)
VITE_STRIPE_PUBLIC_KEY=your_key

# Slack (Pro tier)
VITE_SLACK_CLIENT_ID=your_id

# WhatsApp (Pro tier)
VITE_WHATSAPP_TOKEN=your_token
```

### Feature Gates

Feature gates are handled in `src/stores/userStore.ts`:

```typescript
hasProFeature('slack')      // Returns true for Pro/Enterprise
hasProFeature('whatsapp')   // Returns true for Pro/Enterprise
canCreateTask()             // Checks 100 task limit for Lite
canCreateBusinessLine()     // Checks 3 business line limit for Lite
```

---

## 📧 Email Notifications (Lite Tier)

Email notifications are available in **all tiers** including Lite:

**Settings → Notifications:**
- ✅ Daily task digest (8am)
- ✅ Deadline reminders (24h before)
- ✅ Pattern insights (weekly)
- ✅ Calendar conflicts

**Implementation:**
```typescript
// src/services/emailService.ts
export async function sendDailyDigest(user: User) {
  // Uses SendGrid API
  // Sends personalized task summary
}
```

---

## 🔌 Integrations Menu

**For Lite users:**
- Email notifications: ✅ Enabled
- Slack: 🔒 Locked (Upgrade to Pro)
- WhatsApp: 🔒 Locked (Upgrade to Pro)

**For Pro users:**
- Email notifications: ✅ Enabled
- Slack: Toggle on/off in settings
- WhatsApp: Toggle on/off in settings

**Adding new integrations:**
1. Add to `userStore.ts` pro features list
2. Create UI toggle in `Settings.tsx`
3. Add connection flow
4. Update pricing page

---

## 📱 Screenshots

### Dashboard
![Dashboard](./docs/screenshots/dashboard.png)

### Settings - Email Notifications (Lite)
![Settings Lite](./docs/screenshots/settings-lite.png)

### Settings - Integrations (Pro)
![Settings Pro](./docs/screenshots/settings-pro.png)

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md).

**Areas we need help:**
- Mobile app (React Native)
- Additional integrations
- Pattern learning algorithms
- UI/UX improvements

---

## 📄 License

MIT License - see [LICENSE](./LICENSE)

---

## 🔗 Links

- **Website:** [eugeneai.tech](https://eugeneai.tech)
- **Documentation:** [docs.eugeneai.tech](https://docs.eugeneai.tech)
- **Blog:** [blog.eugeneai.tech](https://blog.eugeneai.tech)
- **Twitter:** [@eugeneai](https://twitter.com/eugeneai)
- **Discord:** [Join Community](https://discord.gg/eugeneai)

---

## 💡 Philosophy

**Eugene is different because:**

1. **Privacy-first:** Your data in YOUR Google Drive
2. **Learns from YOU:** Not generic algorithms
3. **Actually improves:** Gets smarter with every task
4. **No vendor lock-in:** Export anytime, it's your data

**Most task managers:**
- Store your data on their servers ❌
- Use your estimates (often wrong) ❌  
- Never improve (static algorithms) ❌

**Eugene:**
- Data in your Drive ✅
- Learns actual durations ✅
- Improves continuously ✅

---

## 🎯 Roadmap

**Q1 2026:**
- ✅ Web app launch
- ✅ Email notifications
- ✅ Pattern learning
- ✅ Google Drive integration

**Q2 2026:**
- [ ] Slack integration
- [ ] WhatsApp notifications
- [ ] Mobile apps (iOS/Android)
- [ ] API v1

**Q3 2026:**
- [ ] Team collaboration
- [ ] Enterprise features
- [ ] Grocery price tracking
- [ ] Advanced analytics

---

## 🙏 Acknowledgments

Built with love by [Virtus Labs](https://virtuslabs.com)

Created by Tatiana Nydam ([@tatiananydam](https://github.com/tatiana-nydam))

Special thanks to:
- Claude (Anthropic) - Development assistant
- All beta testers and early adopters

---

## 📞 Support

- **Email:** support@eugeneai.tech
- **Issues:** [GitHub Issues](https://github.com/tatiana-nydam/eugene-ai/issues)
- **Discussions:** [GitHub Discussions](https://github.com/tatiana-nydam/eugene-ai/discussions)

---

**Made with ❤️ for busy people who want to stay organized**

Your data. Your Drive. Your productivity.
