Here is the article in GitHub Markdown format:

# Automating Hamster Kombat: A Clicker Game on Telegram

## Introduction

Hamster Kombat is a popular clicker game on Telegram, a popular messaging app. The game is only available on the Telegram mobile app, but what if you want to play it on your desktop browser? In this article, we'll explore how to launch the game on Telegram Web and automate the clicking process using a JavaScript code.

## The Game

Hamster Kombat is a clicker game where you tap on a button to collect energy and upgrade your hamster's abilities. The game is simple yet addictive, and its popularity has led to a community of players who are eager to find ways to automate the game.

## The Code

The code used to automate Hamster Kombat is a JavaScript script that uses the `PointerEvent` object to simulate mouse clicks. The script is designed to run in the Chrome browser's console and uses the `setInterval` function to repeat the clicking process every 50 milliseconds.

```javascript
(function() {
  const evt1 = new PointerEvent('pointerdown', {clientX: 150, clientY: 300});
  const evt2 = new PointerEvent('pointerup', {clientX: 150, clientY: 300});
  setInterval((function fn() {
    const energy = parseInt(document.getElementsByClassName("user-tap-energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);
    if (energy > 25) {
      document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt1);
      document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt2);
    }
    return fn;
  }), 50);
})();
```

## How to Use the Code

To use the code, you'll need to follow these steps:

### Step 1: Install the Resource Override extension for Chrome browser.

### Step 2: Create a new rule to override the `telegram-web-app.js` file with the modified script.

### Step 3: Launch Telegram Web and open the Hamster Kombat game.

### Step 4: Open the Chrome DevTools and navigate to the console.

### Step 5: Select the "Clicker (hamsterkombat.io)" context and paste the script into the console.

### Step 6: Press Enter to execute the script.

## Conclusion

Automating Hamster Kombat on Telegram Web is a fun project that requires some knowledge of JavaScript and the Chrome DevTools. With this code, you can play the game on your desktop browser and enjoy the thrill of clicking your way to victory. Remember to always follow the game's terms of service and respect other players. Happy clicking!
