import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './upcomingevents.style'
import { COLORS } from '../../../constants'
import UpcomingEventCard from '../../common/cards/upcoming/UpcomingEventCard'
import UpcomingEventListing from './upcomingevents.json'


const UpcomingEvents = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {UpcomingEventListing.map(item => {
          return (
            <UpcomingEventCard 
            />
          )
        })}
      </View>
    </View>
  )
}

export default UpcomingEvents