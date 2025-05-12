Calculator
---
<img src="Logotype primary.png" width="60%" height="60%" />

Created with *create-react-app*. See the [full create-react-app guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).



Try It
---

[ahfarmer.github.io/calculator](https://ahfarmer.github.io/calculator/)



Install
---

`npm install`



Usage
---

`npm start`


Original Functionality
---
The original calculator application provided basic arithmetic operations (+, -, ×, ÷) with a clear display and button panel.  Numbers could be entered and calculations performed sequentially.


Added Features
---

**Dark Theme Toggle:** A toggle switch allows users to switch between light and dark themes.  This improves usability in different lighting conditions.

![Dark Theme](images/dark_theme.png)

**Calculation History:** A history panel displays a list of previous calculations, allowing users to review their work.  The history can be cleared with a dedicated button.

![Calculation History](images/calculation_history.png)


Implementation Process
---
The dark theme toggle was implemented using React's state management. A state variable tracks the current theme ("light" or "dark"), and this state is used to apply CSS classes that change the appearance of the calculator.  The calculation history was implemented by storing calculation strings in a state array.  Each calculation is added to the array as it's performed, and the array is rendered in a list.


Challenges Faced and Solutions
---
Initially, managing the state for both the calculation logic and the history presented some challenges.  The solution was to separate the state into distinct variables for the active calculation and the history, updating them independently.


Aider Commands Used and Their Effectiveness
---
* **Command 1:**  [Description of command and its effectiveness]
* **Command 2:**  [Description of command and its effectiveness]
* **Command 3:**  [Description of command and its effectiveness]


