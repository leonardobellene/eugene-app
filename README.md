# Eugene Wisdom App

A modern chat application built with Next.js 14+ that connects users with Eugene, an AI wisdom guide. Features real-time streaming responses, personalized interactions, and a clean, intuitive interface.

## ✨ Features

- **Real-time AI Chat** - Stream responses from Eugene with typing indicators
- **Personalized Experience** - User onboarding with name, gender, and language preferences
- **Modern UI** - Clean, responsive design with dark theme
- **Type-safe** - Built with TypeScript for reliability
- **Server-Side Optimized** - Leverages Next.js App Router for optimal performance

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: OpenAI API with streaming
- **State Management**: React hooks

## 📁 Project Structure

```
src/
├── app/
│   ├── chat/
│   │   └── page.tsx              # Chat page (Server Component)
│   ├── components/
│   │   ├── ChatInterface.tsx     # Main chat interface (Client Component)
│   │   ├── ChatHeader.tsx        # Chat header component
│   │   ├── MessageList.tsx       # Message display component
│   │   ├── ChatInput.tsx         # Input component
│   │   └── ...                   # Other UI components
│   ├── hooks/
│   │   ├── useAuth.ts            # Authentication & user setup
│   │   └── useStreamHandler.ts   # AI response streaming
│   ├── services/
│   │   └── chatService.ts        # API communication
│   ├── types/
│   │   └── chat.ts              # Type definitions
│   ├── utils/
│   │   └── messages.ts          # Message utilities
│   ├── lib/
│   │   └── storage.ts           # Local storage utilities
│   └── api/
│       └── chat/
│           └── route.ts         # Chat API endpoint
└── public/                      # Static assets
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/leonardobellene/wisdom.git
   cd eugene-wisdom-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

1. **First Visit**: Complete the onboarding form with your name, gender, and language preference
2. **Chat Interface**: Start chatting with Eugene who will provide personalized wisdom
3. **Real-time Responses**: Watch as Eugene's responses stream in real-time
4. **Persistent Session**: Your preferences are saved for future visits

## 🏗️ Architecture Highlights

### Clean Component Architecture
- **Server Components** for pages (SEO, performance)
- **Client Components** only where interactivity is needed
- **Custom hooks** for complex, reusable logic only

### State Management
- Local `useState` for component-specific state
- Custom hooks for authentication and streaming
- No over-engineering with unnecessary abstractions

### Type Safety
- Comprehensive TypeScript coverage
- Centralized type definitions
- Strict type checking enabled

## 🔧 API Routes

### `POST /api/chat`
Handles chat messages and returns streaming AI responses.

**Request Body:**
```json
{
  "username": "string",
  "gender": "string", 
  "language": "string",
  "messages": [
    {
      "role": "user" | "assistant",
      "content": "string"
    }
  ]
}
```

**Response:** Server-Sent Events stream with AI response tokens

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Responsive design** for all screen sizes

## 📱 Features in Detail

### User Onboarding
- Name collection for personalization
- Gender selection for appropriate responses
- Language preference (multi-language support ready)

### Chat Experience
- Real-time message streaming
- Typing indicators during AI response
- Message history preservation
- Error handling with user-friendly messages

### Performance Optimizations
- Server Components for initial page load
- Streaming responses for perceived performance
- Efficient re-renders with proper React patterns

## 🤝 Contributing

- Fork the repository
- Create a feature branch (`git checkout -b feature/amazing-feature`)
- Commit your changes (`git commit -m 'Add amazing feature'`)
- Push to the branch (`git push origin feature/amazing-feature`)
- Open a Pull Request

**Built with ❤️ by [Leonardo Bellene](https://github.com/leonardobellene)**