# GitHub Re-invite Tool

A modern web application that helps manage GitHub repository invitations by removing stale invitations and sending fresh ones. Perfect for educational institutions managing student access to course repositories.

![GitHub Re-invite Tool](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-green?style=for-the-badge)

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/ygilany)

## 🚀 Features

- **Organization Management**: Support for multiple GitHub organizations with customizable assignment mappings
- **Automatic Repository Naming**: Generates repository names based on assignment type and username
- **Dry Run Mode**: Test operations without making actual changes
- **Modern UI**: Beautiful, responsive interface with burgundy and black theme
- **Real-time Feedback**: Live preview of generated repository names
- **Permission Management**: Support for all GitHub permission levels (pull, triage, push, maintain, admin)

## 🎯 Use Cases

- **Educational Institutions**: Manage student access to course repositories
- **Team Management**: Handle repository invitations for team members
- **Open Source Projects**: Manage contributor access efficiently
- **Corporate Training**: Organize repository access for training programs

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Inline CSS with modern design patterns
- **API**: GitHub REST API via Octokit
- **Deployment**: Vercel ready

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- GitHub Personal Access Token with repository administration privileges

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/github-reinvite.git
cd github-reinvite
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Required: GitHub Personal Access Token
GITHUB_TOKEN=your_github_personal_access_token_here

# Optional: Default GitHub organization
NEXT_PUBLIC_DEFAULT_GITHUB_OWNER=your_default_org
```

### 4. Configure Organizations

Edit `src/app/config/organizations.ts` to customize your organizations and assignments:

```typescript
export const ORGANIZATIONS = {
  "YOUR-ORG-Fall25": {
    name: "Your Organization Fall25",
    owner: "your-github-org", // GitHub organization/owner name
    assignments: {
      "Assignment-1": "assignment-1-prefix-",
      "Assignment-2": "assignment-2-prefix-",
      // Add more assignments as needed
    }
  }
} as const;
```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🔧 Configuration

### GitHub Token Setup

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with the following scopes:
   - `repo` (Full control of private repositories)
   - `admin:org` (Full control of orgs and teams)
3. Copy the token and add it to your `.env.local` file

### Organization Configuration

The application supports multiple organizations with different assignment mappings:

- **Organization Name**: Display name shown in the UI
- **Owner**: Actual GitHub organization/username
- **Assignments**: Key-value pairs mapping assignment names to repository prefixes

## 📖 How to Use

1. **Select Organization**: Choose from available organizations
2. **Pick Assignment**: Select the assignment type
3. **Enter Username**: Provide the GitHub username
4. **Choose Permission**: Select the appropriate permission level
5. **Test (Optional)**: Enable dry run mode to simulate the operation
6. **Execute**: Click "Re-invite" to process the invitation

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── reinvite/
│   │       └── route.ts          # API endpoint for GitHub operations
│   ├── config/
│   │   └── organizations.ts      # Organization and assignment configuration
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Main application component
├── public/                       # Static assets
└── ...                          # Configuration files
```

## 🔌 API Endpoints

### POST `/api/reinvite`

Processes GitHub repository invitation management.

**Request Body:**
```json
{
  "owner": "github-org-name",
  "repo": "repository-name",
  "username": "github-username",
  "permission": "admin|maintain|push|triage|pull",
  "dryRun": false
}
```

**Response:**
```json
{
  "ok": true,
  "dryRun": false,
  "input": { /* request data */ },
  "foundInvitations": [ /* existing invitations */ ],
  "deletedInvitations": [ /* deleted invitations */ ],
  "invite": { /* invitation result */ }
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect Repository**: Go to [Vercel](https://vercel.com) and connect your GitHub repository
2. **Configure Environment Variables**: Add the following in your Vercel project settings:
   - `GITHUB_TOKEN`: Your GitHub Personal Access Token
   - `NEXT_PUBLIC_DEFAULT_GITHUB_OWNER`: Your default GitHub organization
3. **Deploy**: Vercel will automatically deploy on every push to your main branch

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repo and add environment variables
- **Railway**: Deploy with automatic GitHub integration
- **Fly.io**: Use `flyctl launch` and `flyctl deploy` commands

### Environment Variables for Production

For Vercel deployment, add these in your project settings:

```env
GITHUB_TOKEN=your_production_github_token
NEXT_PUBLIC_DEFAULT_GITHUB_OWNER=your_default_org
```

**Vercel Setup Tips:**
- Environment variables are automatically available in production
- No need to create a `.env.local` file for Vercel deployment
- Changes to environment variables require a new deployment

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain consistent code formatting
- Add appropriate error handling
- Update documentation for new features
- Test thoroughly before submitting

## 📝 License

This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.

[![CC BY-NC-SA 4.0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

**You are free to:**
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

**Under the following terms:**
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made
- NonCommercial — You may not use the material for commercial purposes
- ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license

## 👨‍💻 Author

**Yahya Gilany**
- Website: [yahyagilany.io](https://yahyagilany.io)
- GitHub: [@ygilany](https://github.com/ygilany)

## ☕ Support

If you find this project helpful, consider supporting its development:

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/ygilany)

## 🙏 Acknowledgments

- GitHub for providing the excellent REST API
- Next.js team for the amazing framework
- Creative Commons for the licensing framework
- All contributors and users who help improve this tool

## 📞 Support & Questions

- 🐛 **Bug Reports**: [Open an issue](https://github.com/your-username/github-reinvite/issues)
- 💡 **Feature Requests**: [Start a discussion](https://github.com/your-username/github-reinvite/discussions)
- 📧 **Contact**: [yahyagilany.io](https://yahyagilany.io)

---

**Made with ❤️ for the developer community**
