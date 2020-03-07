import React, { useContext } from 'react'
import uuid from 'uuid'

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

const NavigationProvider: React.FC = ({ children }) => {
  const componentId = React.useRef(`nav-${uuid()}`)
  const [state, dispatch] = React.useReducer(navigationReducer, { expanded: false, id: componentId.current })

  return (
    <NavigationContext.Provider value={state}>
      <NavigationDispatchContext.Provider value={dispatch}>{children}</NavigationDispatchContext.Provider>
    </NavigationContext.Provider>
  )
}

function useNavigationState() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigationState must be used within NavigationContext.Provider')
  }
  return context
}

function useNavigationDispatch() {
  const context = useContext(NavigationDispatchContext)
  if (context === undefined) {
    throw new Error('useNavigationState must be used within NavigationDispatchContext.Provider')
  }
  return context
}

export { NavigationProvider, useNavigationState, useNavigationDispatch }
