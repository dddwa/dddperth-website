import React, { useContext } from 'react'

type State = { expanded: boolean; id: string }
type NavigationAction = 'toggle' | 'open' | 'close'
type NavigationDispatch = (action: NavigationAction) => void

const NavigationContext = React.createContext<State>(undefined)
const NavigationDispatchContext = React.createContext<NavigationDispatch>(undefined)

function navigationReducer(state: State, action: NavigationAction) {
  switch (action) {
    case 'toggle':
      return { ...state, expanded: !state.expanded }
    case 'open':
      return { ...state, expanded: true }
    case 'close':
      return { ...state, expanded: false }
  }
}

const NavigationProvider = ({ children }) => {
  const componentId = React.useRef(`nav-component-id`)
  const [state, dispatch] = React.useReducer(navigationReducer, { expanded: false, id: componentId.current })

  return (
    <NavigationContext.Provider value={state}>
      <NavigationDispatchContext.Provider value={dispatch}>{children}</NavigationDispatchContext.Provider>
    </NavigationContext.Provider>
  )
}

function useNavigationState(): State {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigationState must be used within NavigationContext.Provider')
  }
  return context
}

function useNavigationDispatch(): NavigationDispatch {
  const context = useContext(NavigationDispatchContext)
  if (context === undefined) {
    throw new Error('useNavigationState must be used within NavigationDispatchContext.Provider')
  }
  return context
}

export { NavigationProvider, useNavigationState, useNavigationDispatch }
