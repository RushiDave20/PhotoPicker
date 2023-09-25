import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function DownButton({ label,theme,onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} 
      onPress={() => alert('OK,It will be remain on the screen.')}>
        <Text style={styles.buttonLabel}>Use This Photo</Text>
        
      </Pressable>
    </View>
  );
}

/*Styles for lower buttons */

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:'#ffb6c1',
    marginBottom:77,
    borderWidth: 4, borderColor: "#E75480", borderRadius: 18 ,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 22,
  },
});
