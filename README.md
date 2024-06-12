
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
above code break down
Here's a breakdown of the code:

const evt1 = new PointerEvent('pointerdown', {clientX: 150, clientY: 300});: This line creates a new PointerEvent object that simulates a mouse click at coordinates (150, 300).
const evt2 = new PointerEvent('pointerup', {clientX: 150, clientY: 300});: This line creates a new PointerEvent object that simulates a mouse click release at the same coordinates.
setInterval((function fn() { ... }), 50);: This line sets an interval timer to execute the code inside the fn function every 50 milliseconds.
const energy = parseInt(document.getElementsByClassName("user-tap-_energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);: This line retrieves the current energy level of the player from the game's HTML element.
if (energy > 25) { ... }: This line checks if the energy level is greater than 25, and if so, executes the code inside the if block.
document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt1);: This line simulates a mouse click on the tap button.
document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt2);: This line simulates a mouse click release on the tap button.

## How to Use the Code

To use the code, you'll need to follow these steps inorder to run it browser:

### Step 1: Install the Resource Override extension for the Chrome browser.

### Step 2: Create a new rule to override the `telegram-web-app.js` file with the modified script. add new rules in extentions
from: From https://hamsterkombat.io/js/telegram-web-app.js to: https://cdn.jsdelivr.net/gh/prince1456/hamster@main/js/hamster-telegram.js
### Step 3: Launch Telegram Web and open the Hamster Kombat game.

### Step 4: Open the Chrome DevTools and navigate to the console.

### Step 5: Select the "Clicker (hamsterkombat.io)" context and paste the script into the console.

### Step 6: Press Enter to execute the script.

## Conclusion

Automating Hamster Kombat on Telegram Web is a fun project that requires some knowledge of JavaScript and the Chrome DevTools. With this code, you can play the game on your desktop browser and enjoy the thrill of clicking your way to victory. Remember to always follow the game's terms of service and respect other players. Happy clicking!
