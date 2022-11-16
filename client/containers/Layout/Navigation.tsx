import React from 'react'
import links from './navigation.json'
import type { LinkType } from './types'

export const Navigation = () => {
  return (
    <div className='header-navigation'>{links.map((link: LinkType) => {
      return (<div>{link.title}</div>)
    })}</div>
  )
}
