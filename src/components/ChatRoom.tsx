import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RootTabScreenProps } from '../../types';

export default function ChatRoom(props: any) {7
  console.log(props)
  const user = props.chatRoom.users[1];
  return ( 
    <View style={styles.container}>
      <Image source={{uri: user.imageUri}} style={styles.image} />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>4</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>11:11</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>Hello sweetie!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</Text>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,

  },
  image: {
    height:60,
    width: 60,
    borderRadius: 50,
    marginRight: 15
  },
  badgeContainer:{
    backgroundColor: '#3872E9',
    height: 25,
    width: 25,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13 ,
    position: 'absolute',
    left: 60,
    top: 10
  },
  badgeText:{
    color: 'white',
    fontSize: 14
  },
  rightContainer:{
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: "gray",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18
  },
});
