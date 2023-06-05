import React, {useState} from 'react'
import { IconStar } from '@tabler/icons-react'

function FavButton() {
    const [isFav,setIsFav] = useState(false);

  return (
    <div className='cursor-pointer'>
        {isFav ? (<IconStar size={28} />) : }
        
    </div>
  )
}

export default FavButton