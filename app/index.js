import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from '../constants';
import { RecentEvents, UpcomingEvents, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    footerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl = {icons.bell} dimension="60%" />
                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1, padding:SIZES.medium}}>
                    <Welcome

                    />

                    <RecentEvents />
                    <UpcomingEvents />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;