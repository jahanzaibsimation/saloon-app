import { View, Text, } from 'react-native'
import React from 'react'
// import { WebView } from 'react-native-webview'
import Constants from 'expo-constants'

const PdfViewer = () => {
    return (
        <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
            <Text>PdfViewer</Text>
            {/* <WebView source={{ uri: 'https://enos.itcollege.ee/~jpoial/allalaadimised/reading/Advanced-java.pdf' }} /> */}
        </View>
    )
}

export default PdfViewer