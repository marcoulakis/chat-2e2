import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { RootTabScreenProps } from '../../types';
import ChatRoom from '../components/ChatRoom'
import ChatRoomsData from '../dummy-data/ChatRooms';


const chatRoom = ChatRoomsData[0];

export default function TabOneScreen() {
  return (
    <ScrollView>
      <ChatRoom chatRoom={chatRoom} />
    </ScrollView>
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
