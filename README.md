# gravity dlc
a browser extension for chromium and firefox based browsers that gives page elements 2d rigid body physics.
## compared to https://github.com/Vishdude/UnscrewIt/:
### unscrew it:
- rendering: screenshots on a canvas
  - elements non-functional
  - faster
  - exit with esc
- object selection: slider sets depth
  - needs tweaking
  - often no optimal solution possible
### gravity-dlc:
- rendering: html-elements get moved
  - some elements still functional
  - still fast on modern hardware, even with more complex sites
  - exit by reloading page
  - buggy due to complexity, weird design of some sites
- object selection: based on css style
  - no tweaking possible
  - can make mistakes  


## Installation
### chromium
unfortunately it's not on the chrome store. you can install it though:
- `git clone https://github.com/Johannes-Pabst/gravity-dlc`
- chrome://extensions
- enable developer mode
- "load unpacked"
- choose clone destination
### firefox
also not on firefox store. Can only be installed as a temporary extension as far as I know.
