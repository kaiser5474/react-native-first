import { StyleSheet, Image, ImageBackground } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const tailwind = useTailwind();
  return (
    <>
    <ImageBackground source={require('../assets/images/splash.png')} resizeMode="cover" style={styles.image2}>
    <View style={[styles.container, tailwind('rounded-md bg-violet-700')]}>      
      <View style={tailwind('flex-row border-4 rounded-xl p-4 mr-2 ml-2 mt-2 border-purple-900 bg-violet-700')}>
        <View style={tailwind('mr-4 bg-violet-700')}>
          <Image 
            source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqMWOPbuZolCgjRsW9rjBf91QAzARJ9oDpQ&usqp=CAU'}}
            style = {styles.image}
          />
          <Text style={tailwind('font-bold text-base mb-4 flex-1 text-center mt-2 text-gray-300')}>Alec F.</Text>
        </View>  
        <View style={tailwind('flex-1 bg-violet-700')}>
          <View style={tailwind('bg-violet-700 flex flex-row')}>
            <Text style={tailwind('font-semibold text-xl mb-4 text-yellow-300 mr-2 font-bold')}>&#9733; &#9733; &#9733; &#9733; &#9734; </Text>
            <Text style={tailwind('font-semibold text-base mt-1 text-gray-300')}>9.3/10 </Text>
            <Text style={tailwind('font-bold text-gray-300 text-right border-2 flex-1 content-start text-4xl mt-auto')}>&hellip;</Text>
          </View>
          <Text style={tailwind('font-bold text-xs mb-4 text-gray-300')}>"Amazing film from history perspective! Must have been in your playlist guys"</Text>
          <Text style={tailwind('font-semibold text-xs mb-4 text-right text-gray-300')}>08/12/2021</Text>
        </View>
      </View>      
    </View>
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  image2: {
    flex: 1,
    justifyContent: "center"
  },
});