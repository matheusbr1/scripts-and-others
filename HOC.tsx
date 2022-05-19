/* eslint-disable react/display-name */
import React from 'react'

const FCHOC = <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
  return ({ ...props }) => {
    return (
      <WrappedComponent {...props as P} >
        {props.children}
      </WrappedComponent>
    )
  }
}

export { FCHOC }
