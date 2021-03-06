import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { Text, View } from '../components/Themed';

const Card = ({name, img, created}) => {
    const tailwind = useTailwind();
  return (    
      <View style={tailwind('flex-row border-4 rounded-xl p-4 mr-2 ml-2 mt-2 border-purple-900 bg-violet-700')}>        
        <View style={tailwind('mr-4 bg-violet-700 w-24')}>
          <Image 
            source = {{uri: img}}
            style = {styles.image}
          />
          <Text style={tailwind('font-bold text-base mb-4 flex-1 text-center mt-2 text-gray-300')}>{name}</Text>
        </View>  
        <View style={tailwind('flex-1 bg-violet-700')}>
          <View style={tailwind('bg-violet-700 flex flex-row')}>
            <Text style={tailwind('font-semibold text-xl mb-4 text-yellow-300 mr-2 font-bold')}>&#9733; &#9733; &#9733; &#9733; &#9734; </Text>
            <Text style={tailwind('font-semibold text-base mt-1 mr-1 text-gray-300')}>9.3/10 </Text>
            <Text style={[tailwind('font-black text-gray-300 text-right flex-1'), styles.text]}>&hellip;</Text>
          </View>
          <Text style={tailwind('font-bold text-xs mb-4 text-gray-300')}>"Amazing film from history perspective! Must have been in your playlist guys"</Text>
          <Text style={tailwind('font-semibold text-xs mb-4 text-right text-gray-300')}>{created}</Text>
        </View>
      </View>     
  )
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  text: {
    fontSize: 40,
    lineHeight: 20,
  },
});

export default Card;