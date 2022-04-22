import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { VisuallyHidden } from '@reach/visually-hidden'
import { MenuItem } from 'config/types'
import { StyledNav, StyledNavLink, StyledNavList } from './Nav.styled'
import { useNavigationState, useNavigationDispatch } from './Nav.context'

export type NavStatus = 'open' | 'opening' | 'closed' | 'closing'

interface NavProps {
  menu: MenuItem[]
}

const isFirstBranchMatched = (pagePath: string, href: string) => {
  const last = pagePath.lastIndexOf('/')
  const sub = last > 0 ? pagePath.substring(0, last) : pagePath
  return href === sub
}

function isFocusableElement(element: Element): element is HTMLElement {
  return 'focus' in element
}

export const Nav = ({ menu }: NavProps) => {
  const dispatch = useNavigationDispatch()
  const containerRef = React.useRef<HTMLDivElement>()
  const navRef = React.useRef<HTMLUListElement>()
  const activeElement = React.useRef<Element>()
  const { pathname } = useRouter()
  const { id, expanded } = useNavigationState()
  const [status, setStatus] = React.useState<NavStatus>('closed')

  React.useEffect(() => {
    if (expanded) {
      activeElement.current = document.activeElement

      if (navRef.current) {
        navRef.current.focus()
      }
    } else if (activeElement.current) {
      const active = activeElement.current

      if (isFocusableElement(active)) {
        active.focus()
      }
      activeElement.current = undefined
    }
  }, [expanded, activeElement])

  React.useEffect(() => {
    function keyPressHandler(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        dispatch('close')
        setStatus('closing')
      }
    }

    if (expanded) {
      document.addEventListener('keydown', keyPressHandler)
    }

    return function navKeyboardCleanup() {
      document.removeEventListener('keydown', keyPressHandler)
    }
  }, [expanded, dispatch])

  React.useEffect(() => {
    const containerCurrent = containerRef.current

    if (!containerCurrent) {
      return
    }

    function handleTransitionEnd() {
      setStatus(expanded ? 'open' : 'closed')
    }

    containerCurrent.addEventListener('transitionend', handleTransitionEnd)
    setStatus(expanded ? 'opening' : 'closing')

    return function navTransitionCleanup() {
      if (containerCurrent) {
        containerCurrent.removeEventListener('transitionend', handleTransitionEnd)
      }
    }
  }, [expanded])

  React.useEffect(() => {
    function documentClickHandler(evt: MouseEvent | TouchEvent) {
      if (containerRef.current && evt.target instanceof Node && !containerRef.current.contains(evt.target)) {
        dispatch('close')
        setStatus('closing')
      }
    }

    if (expanded) {
      document.addEventListener('click', documentClickHandler)
      document.addEventListener('touchstart', documentClickHandler)
    }

    return () => {
      document.removeEventListener('click', documentClickHandler)
      document.removeEventListener('touchstart', documentClickHandler)
    }
  }, [expanded, dispatch])

  return (
    <StyledNav status={status} ref={containerRef}>
      <StyledNavList id={id} aria-expanded={status === 'open'} ref={navRef} tabIndex={-1}>
        {/* TODO: Need new window icon */}
        {/* {item.external && <i className="fa fa-external-link" aria-label="will open in a new window" />} */}
        {menu.map((item) => (
          <li key={item.href}>
            {item.href.indexOf('http') !== -1 ? (
              <StyledNavLink href={item.href} active={isFirstBranchMatched(pathname, item.href)}>
                {item.name}
                {item.srOnly ? <VisuallyHidden>{item.srOnly}</VisuallyHidden> : null}
              </StyledNavLink>
            ) : (
              <Link href={item.href} passHref={true}>
                <StyledNavLink active={isFirstBranchMatched(pathname, item.href)}>{item.name}</StyledNavLink>
              </Link>
            )}
          </li>
        ))}
      </StyledNavList>
    </StyledNav>
  )
}
