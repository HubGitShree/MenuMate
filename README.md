# MenuMate Telegram Bot

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MenuMate is a Telegram bot that provides real-time access to the hostel menu for breakfast, lunch, snacks, and dinner. This bot enhances the dining experience for students by allowing them to easily check the daily menu without needing to refer to physical menu boards or static images.

## Features

* **Real-Time Menu Access:** Students can query the bot to get the current menu.
* **Natural Language Processing:** Understands and responds to natural language queries (integrated with Google Dialogflow).
* **Daily Updates:** Provides the most up-to-date menu based on the day of the week.
* **Wide Reach:**  Improves the dining experience for over 330 students.

## Screenshots 

![shorterdemo-ezgif com-video-to-gif-converter(1)](https://github.com/HubGitShree/MenuMate/assets/98461049/2850aca5-17f3-4e06-8fc5-fb78a5faa5e0)


## How to Use

### For End Users

1. Open Telegram.
2. Search for the bot by typing `MenuMate`.
3. Start a chat with the bot.
4. Ask for the menu using messages like:
    * "What's for breakfast today?"
    * " dinner today."
    * " breakfast "

### For Developers

1. **Prerequisites:**
   * Node.js and npm
   * Telegram account
   * Dialogflow account

2. **Installation:**
    ```bash
    git clone [https://github.com/yourusername/menumate-telegram-bot.git](https://github.com/yourusername/menumate-telegram-bot.git)
    cd menumate-telegram-bot
    npm install
    ```
3. **Environment Variables:**
    Create a `.env` file:
    ```
    TELEGRAM_BOT_TOKEN=your-telegram-bot-token
    ```
4. **Run the Bot:**
    ```bash
    npm start
    ```

## Project Structure

* `app.js`:  Main server file.
* `package.json`: Project configuration and dependencies.

## Contributing
If you are willing to add more dialog queries, enhance user space and interactability, feel free to pitch in.
1. Fork this repository.
2. Create your branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a pull request.

## License

MIT License – see the [LICENSE](LICENSE) file for details.

## Contact

Anushree Pal - [anushreepal.16027@gmail.com]
