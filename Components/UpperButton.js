import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function UpperButton({ label, theme,onPress }) {
  if (theme === "primary") {
    return (
      <View
      style={[styles.buttonContainer]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
         
          <Text style={[styles.buttonLabel, { color: "blue" }]}>
          <FontAwesome
            name="picture-o"
            
            size={30}
            color="#25292e"
            style={styles.buttonIcon}
          />
          
          
          {label}
          </Text>
        </Pressable>
    </View>
    );
  }

}

/*Styles for upper button */

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  
    
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:'#fff',
    marginBottom:170,
    borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 ,
    buttonIcon:{
      alignItems:'Right',
      marginBottom:70,
      marginTop:23,
      justifyContent: 'right',
    
    },
  },
  
  


  buttonLabel: {
    color: 'red',
    fontSize: 22,
  },
});


