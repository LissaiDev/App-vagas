import { useRouter, useSearchParams, Stack } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import React from "react";
const JobDetails = ()=>{
    const params = useSearchParams();
    const router = useRouter();
    return (
        <SafeAreaView>
            <Stack.Screen options={{
                headerStyle : {backgroundColor: "#CCC"},
                headerShadowVisible : false,
                headerLeft: ()=>(
                    <View>
                        <Text onPress={()=>{router.back()}} >Home</Text>
                    </View>
                ),
                headerRight: ()=>(
                    <View>
                        <Text>Profile</Text>
                    </View>
                ),
                headerTitle: ""
            }}
            />
        </SafeAreaView>
    )
}
export default JobDetails