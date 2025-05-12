## Feature 1: Dark Mode Toggle

- **User Story**: As a user, I want to switch to a dark theme so I can use the calculator comfortably at night.
- **Technical Requirements**:
  - Add a toggle button.
  - Modify CSS to switch between light and dark modes.
- **Files Modified**:
  - 'App.js'
  - 'App.css'
  - 'Button.js' 
  - 'ButtonPanel.js' 
  - 'Display.css'
- **Challenges**:
  - Managing CSS class changes across components.
  - Ensuring contrast for visibility.

## Feature 2: Calculation History

- **User Story**: As a user, I want to see a history of past calculations so I can reuse or reference them.
- **Technical Requirements**:
  - Store each calculation result.
  - Display history below the calculator.
- **Files Modified**:
  - 'App.js', 'Calculator.js'
  - Possibly new component: 'History.js'
- **Challenges**:
  - Managing state for history.
  - Keeping UI clean and responsive.
