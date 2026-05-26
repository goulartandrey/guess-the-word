# Guess the Word 🎮

A fun and interactive word guessing game built with React, TypeScript, and Vite. Players try to guess a hidden word by suggesting letters, with a limited number of attempts.

## Features

- 🎯 **Interactive Gameplay** - Guess letters to reveal the hidden word
- 📊 **Score Tracking** - Keep track of correct guesses
- 💡 **Helpful Tips** - Get hints about each word to help you guess
- ⏱️ **Limited Attempts** - Challenge yourself with a maximum number of guesses (word length + 5)
- 🎨 **Clean UI** - Modern, responsive interface with visual feedback
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🔒 **Type Safe** - Full TypeScript support for reliability

## How to Play

1. Start the game - a random word will be selected
2. Look at the tip to get a hint about the word
3. Guess one letter at a time
4. Correct letters will be revealed in the word
5. Win by guessing all letters before running out of attempts
6. Each word gives you (word length + 5) attempts to guess

## Tech Stack

- **React 19** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend build tool
- **ESLint** - Code quality and consistency
- **CSS Modules** - Scoped styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will open at `http://localhost:5173` with hot module replacement (HMR) enabled.

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

### Linting

```bash
# Check code quality
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/         # Button component
│   ├── Header/         # Game header with stats
│   ├── Input/          # Letter input field
│   ├── Letter/         # Individual letter display
│   ├── Letters/        # Letters history
│   └── Tip/            # Word hint display
├── utils/
│   └── words.ts        # Word bank and game data
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
├── app.module.css      # App styles
└── global.css          # Global styles
```

## Game Logic

- Each game selects a random word from the word bank
- Players input one letter at a time
- Correct guesses are highlighted and appear in the word
- Duplicate guesses are prevented
- Win condition: Reveal all letters before running out of attempts
- Loss condition: Exceed the maximum number of attempts

## Contributing

Feel free to fork this project and submit pull requests for improvements!

## License

This project is open source and available under the MIT License.
