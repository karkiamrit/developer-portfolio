import React from 'react'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  icon: any
}

const SocialMediaIcon = (props: Props) => {
  return (
    <div>
      <Button className='rounded-full w-10 h-10 bg-gray-500'>
        <FontAwesomeIcon icon={props.icon} />
      </Button>
    </div>
  )
}

export default SocialMediaIcon