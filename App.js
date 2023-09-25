import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ImageViewer from './Components/ImageViewer'; 

import DownButton from './Components/DownButton'
import UpperButton from './Components/UpperButton';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';


/*For Default image on screen */
const PlaceholderImage = require('./assets/images/background-image.png');


    /*1. Import an image files here and add style   */
    /*2. Here we add a button and add styles number 2 */
    /*3. Here we add a downwards button and add styles same as upper button  */
    /*4.Our front-end is ready,now we add real functionality with adding image picker dependency and its function. */


export default function App() {
  const [selectedImage,setSelectedImage] = useState(null);
  
  const pickImageAsync= async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,  /*For croping ability */         
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri); /*Conditional statement based on image selection by user */
    }else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
   

      <View styles2="styles.footerContainer">
      <UpperButton theme="primary" label="Choose from the photos" onPress={pickImageAsync}/>
    </View>


      <View styles2="styles.footerContainer">
      <DownButton />
      </View>
      
      	
      <StatusBar style="auto" />
    </View>
  

);
}


    

    



/* All  styling for image size and backgorund of screen,footer*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0678',
    alignItems: 'center',
    
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 370,
    height: 400,
    borderRadius: 18,
  },

 
});
const styles2 = StyleSheet.create({
  // Styles that are unchanged from previous step are hidden for brevity. 
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
    
  },
});

