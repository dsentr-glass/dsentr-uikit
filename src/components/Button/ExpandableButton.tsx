import React from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '../Svg'
import Button from './Button'
import IconButton from './IconButton'

interface Props {
  onClick?: () => void
  expanded?: boolean
  children?: any
}

export const ExpandableButton: React.FC<Props> = ({ onClick, expanded, children }: Props) => {
  return (
    <IconButton aria-label='Hide or show expandable content' onClick={onClick}>
      {children}
      {expanded != null && expanded ? (
        <ChevronUpIcon color='invertedContrast' />
      ) : (
        <ChevronDownIcon color='invertedContrast' />
      )}
    </IconButton>
  )
}
ExpandableButton.defaultProps = {
  expanded: false
}

export const ExpandableLabel: React.FC<Props> = ({ onClick, expanded, children }: Props) => {
  return (
    <Button
      variant='text'
      aria-label='Hide or show expandable content'
      onClick={onClick}
      endIcon={expanded != null && expanded ? <ChevronUpIcon color='primary' /> : <ChevronDownIcon color='primary' />}
    >
      {children}
    </Button>
  )
}
ExpandableLabel.defaultProps = {
  expanded: false
}
