import React from 'react';

const Spacer = ({ size, isSectionSpacer = true }) => {
  if (isSectionSpacer) {
    return <div class={`h-16 md:h-32`}/>
  }
  return (
    <div class={`h-${size}`}/>
  )
}

export default Spacer;