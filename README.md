# Node.js Discord Bot

A simple Discord bot built with Node.js and [discord.js](https://discord.js.org/). This bot replies with `Pong!` whenever a user sends `!ping` in a server channel.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- A Discord account
- A Discord bot token ([How to get one?](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot))

### Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Access the `.env` file and insert your own token:**
   ```
   TOKEN=Your Discord Token goes here.
   ```

4. **Enable the "MESSAGE CONTENT INTENT" in the Discord Developer Portal:**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Select your application
   - Go to the **Bot** section
   - Enable **MESSAGE CONTENT INTENT**
   - Save changes

5. **Start the bot:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   node index.js
   ```

## Usage

- Invite the bot to your server using the OAuth2 URL from the Developer Portal.
- In any text channel, type `!ping` and the bot will reply with `Pong!`.

## Notes

- **Never share your bot token publicly.**
- Make sure your bot has permission to read and send messages in the server.
