## Tic Tac Toe game

This is a solution to the [Tic Tac Toe game challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

Difficulty level : **Intermediate** <br>
Time taken by me : **28 hours**


## The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play the game either solo vs the computer or multiplayer against another person
- See hover, active, and focus states for interactive elements on the page
- **Bonus 1** : Save the game state in the browser so that it’s preserved if the player refreshes their browser
- **Bonus 2** : Instead of having the computer randomly make their moves, try making it clever so it’s proactive in blocking your moves and trying to win

## My process

while visualizing what approah i would take, i looked that here majorly 2 components will be rendered, one will be when the user selects a mark and when the user chooses to go with either play vs CPU or vs player. 
I started out with mapping the board and the initial game setup and all the required conditions. Then focussed on Player Vs player (which was hardly anything difficult),
Then went on with Play Vs CPU which was very very difficult. This was one of the part where i spent most of my time figuring out and learning the **minimax algorithm** for the CPU.

Last part was to learn about how to use useEffect and localStorage to save the current board even if the website refreshes or the website is closed.

## Screenshots

[![photo-2024-05-24-23-19-34.jpg](https://i.postimg.cc/j2mWBLRS/photo-2024-05-24-23-19-34.jpg)](https://postimg.cc/dZRtyQ7b)

[![photo-2024-05-24-23-19-35.jpg](https://i.postimg.cc/mZ5FP67W/photo-2024-05-24-23-19-35.jpg)](https://postimg.cc/NLR0VDNd)

[![photo-2024-05-24-23-19-37.jpg](https://i.postimg.cc/3J00mCZ4/photo-2024-05-24-23-19-37.jpg)](https://postimg.cc/ykBNzRts)

## Tech Stack

- React js
- Vanilla CSS


## What I learned

- complex use case of Arrow functions
- useLayoutEffect & useEffect hook
- localStorage
- Minimax algorithm for CPU
- circular imports/exports problem

## Errors remaining

- Selecting player 'O' makes O go first in Vs Player mode.

- Even fter selecting 'O' and playing with CPU, you play as X (cause in my minimax algorithm i have put it such that the human will be X and ai player will be O all the time).

- When playing Vs CPU and refreshing the website, CPU behaves like a normal person and  does not make his intellectual move (the game changes to vs Player it seems).

- After opening the game anytime later the saveBoard with null values in localStorage is displayed first instead of the player selection window.


## Acknowledgments

I would like to acknowledge Frontend Mentor for providing such good level challeneges. This really helps me to understand in which part do I lack and how should I tackle it.