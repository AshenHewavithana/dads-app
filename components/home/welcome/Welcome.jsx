import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

const eventTypes = ["Upcoming Events", "Recent Events"];

const Welcome = () => {
  const router = useRouter();
  const [activeEventType, setActiveEventType] = useState('Upcoming Events');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome to</Text>
        <Text style={styles.welcomeMessage}>DADS Entertainment</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='Search Events'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList 
          data = {eventTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeEventType, item)}
              onPress={() => {
                setActiveEventType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeEventType, item)}>{item}</Text>
            </TouchableOpacity>
          )} 
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}} 
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome