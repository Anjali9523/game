import React, { useState } from 'react';
import { View, TouchableHighlight, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import Tts from 'react-native-tts';

interface GifSources {
  [key: string]: any; // Add a more specific type if possible
}

const App = () => {
  const textToSpeak = [
    "a for apple",
    "b for bee",
    "c for coin",
    "d for duck",
    "e for eye",
    "f for food-truck",
    "g for gift",
    "h for home",
  ];

  const alphabet = "abcdefgh";
  const buttonColors = [
    'red',
    'green',
    'blue',
    'orange',
    'purple',
    'coral',
    '#DB2D43',
    'magenta',
  ];
  const buttonStyles = [
    {width:110, height:100, marginLeft:10,borderRadius:20,borderColor: 'yellow', borderWidth: 3},
    {width:110,marginLeft:140,marginTop:-100,height:100, borderRadius:20,borderColor: 'lightgreen', borderWidth: 3},
    {width:110,marginLeft:280,marginTop:-100,height:100, borderRadius:20,borderColor: 'skyblue', borderWidth: 3},
    {width:110,marginLeft:10,marginTop:8,height:100, borderRadius:20,borderColor: '#D0FF14', borderWidth: 3},
    {width:110,marginLeft:140,marginTop:-100,height:100, borderRadius:20,borderColor: 'pink', borderWidth: 3},
    {width:110,marginLeft:280,marginTop:-100,height:100, borderRadius:20,borderColor: 'red', borderWidth: 3},
    {width:110,marginLeft:80,height:100, borderRadius:20,borderColor: '#F19CBB', borderWidth: 3},
    {width:110,marginLeft:220,marginTop:-101,height:100, borderRadius:20,borderColor: '#FBCEB1', borderWidth: 3},
  ];

  // Create an object to map alphabet to gif sources
  const gifSources: GifSources = {
    a: require('./Components/gifs/a.gif'),
    b: require('./Components/gifs/b.gif'),
    c: require('./Components/gifs/c.gif'),
    d: require('./Components/gifs/d.gif'),
    e: require('./Components/gifs/e.gif'),
    f: require('./Components/gifs/f.gif'),
    g: require('./Components/gifs/g.gif'),
    h: require('./Components/gifs/h.gif'),
  };

  

  const [currentGif, setCurrentGif] = useState(null);

  const speakTextAndShowGif = (text:string, letter:string) => {
    // Set the current gif to be displayed based on the letter
    setCurrentGif(gifSources[letter]);

    // Speak the provided text
    Tts.setDefaultLanguage('en-IE');
    Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
    Tts.setDefaultPitch(1.0);
    Tts.setDefaultRate(0.2);
    Tts.speak(text);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('./Components/gifs/background1.jpg')} // Replace with the path to your background image
      style={styles.backgroundImage}
      ></ImageBackground>
      <View style={styles.gifContainer}>
        {/* Display the current gif */}
        {currentGif && (
          <Image
            //style={{ width: '100%', height: '120%' }}
            source={currentGif}
            style= {styles.gif}
          />
        )}
      </View>
      {textToSpeak.map((text, index) => (
        <TouchableHighlight
          key={index}
          style={[styles.button, { backgroundColor: buttonColors[index] }, buttonStyles[index]]}
          onPress={() => speakTextAndShowGif(text, alphabet[index])}
        >
          <Text style={styles.fontstyle}>
            {alphabet[index].toUpperCase()}
          </Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: "brown",
  },
  button: {
    marginVertical: 2,

  },
  gifContainer: {
      width: '100%',
      height: '50%', 
      position: 'absolute',
      top: 0,
      left: 0,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 45,
  },
  gif: {
      marginTop:-40,
      width: '100%',
      height: '110%',
  },
  backgroundImage: {
    flex: 1,
    height:'110%',
    resizeMode: 'cover',
  },
  fontstyle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white', 
    textAlign: 'center',
    marginTop:15, 
    
  },
});

export default App;


