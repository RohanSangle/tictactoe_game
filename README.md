# Frontend Mentor - Tic Tac Toe game

This is a solution to the [Tic Tac Toe game challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

Difficulty level : **Intermediate** <br>
Time taken by me : **28 hours**

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This was an Intermediate level challenge given by Frontend Mentor to develop a Tic Tac Toe game using any framework you want. 
The challenge was to build a Tic Tac Toe that lets the user select a player's mark either X or O, and the user would have 2 choices to play the game, Either with The CPU or as multiplayer.

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play the game either solo vs the computer or multiplayer against another person
- See hover, active, and focus states for interactive elements on the page
- **Bonus 1** : Save the game state in the browser so that it’s preserved if the player refreshes their browser
- **Bonus 2** : Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

## My process

As this challenege was to make a Tic Tac Toe game, and there were no restrictions on what tech stack to use, so I used Reactjs. I wanted to learn the use of Reactjs and proper deployment of apps.

while visualizing what approah i would take, i looked that here majorly 2 components will be rendered, one will be when the user selects a mark and when the user chooses to go with either play vs CPU or vs player. 
I started out with mapping the board and the initial game setup and all the required conditions. Then focussed on Player Vs player (which was hardly anything difficult),
Then went on with Play Vs CPU which was very very difficult. This was one of the part where i spent most of my time figuring out and learning the **minimax algorithm** for the CPU.
Then i made a bunch of states which messed up a lot of things but then in the end sorted it all out.

Last part was to leaen about how to use useEffect to save the current board even if the website refreshes or the website is closed.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [React](https://reactjs.org/) - JS library


### What I learned

A heck lot of javascript, and using useEffect state in react. 

### Continued development

I think that now i have got a good grasp upon my React.js and CSS and will further continue into learning about API's and touch on backend development.

## Author

- Linkedin - [Rohan Sangle](https://www.linkedin.com/in/rohan-sangle)
- Frontend Mentor - [@RohanSangle](https://www.frontendmentor.io/profile/RohanSangle)

## Acknowledgments

I would like to acknowledge Frontend Mentor for providing such good level challeneges. This really helps me to understand in which part do I lack and how should I tackle it.