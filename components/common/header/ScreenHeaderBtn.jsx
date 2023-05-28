import React from 'react'
import { TouchableOpacity, Image , Text} from 'react-native'
import { icons } from '../../../constants'
import styles from './screenheader.style'

const ScreenHeaderBtn = ({IconUrl, dimension, handlePress}) => {
  return (
     
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
       <Image
        source={IconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
    
  )
}

export default ScreenHeaderBtn;