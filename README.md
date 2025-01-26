# Open Mic Bingo
Open Mic Bingo is a silly game written in NextJS that provides a bingo game to play along with watching a (No) Money in the Bank open mic night.
## Essentials
* Persistent storage so users don't lose their game
* Unique board options per user (randomised)
* Board reset ability (new game)
* Selection reset ability
### Things Being Added
The passing a correct night name in the url will return different a bingo game branded for that night of comedy (currently Short For Change, but more to be added). Each night has unique bingo options mixed in to the generic base game.
### Nice to Have
* Scoreboard for speed runners (acts who want to get a full board as fast as possible)
* Websocket options to play with friends (e.g. everyone's game ends when someone gets a bingo)
* Ability for nights to add their own bingo options without asking me

## In Progress
- [ ] Swamp theme
	- Not yet, but DID add Mates Fest
- [x] Ensure full screen height (bingo central)
	- Solved this used `svh` (smallest viewport height)
- [x] Make all night logo images the same size `320*139`
	- SVGs with a canvas 5 scale this
- [x] Separate controls from the board
- [ ] Generate new metadata in [[Night Themes]]
- [ ] Improve file structure so that `nightId` can be used to signal a folder.
	- e.g. `${nightId}/icon.png`