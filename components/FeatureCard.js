import { StyleSheet, Image, View, Text } from 'react-native';

const FeatureCard = ({ imageUri, featureName, featureDescription }) => (

    <View
        style={cardStyle.cardView}>
        <View style={cardStyle.spacer}/>

        <View
            style={cardStyle.categoryImage}>
            <Image source={imageUri} style={cardStyle.categoryImage} />
        </View>
        <View style={cardStyle.spacer}/>
        <View style={cardStyle.content}>
            <Text style={cardStyle.text} >
                {featureName}
            </Text>
            <Text style={cardStyle.descriptionText} >
                {featureDescription}
            </Text>
        </View>
    </View>


);

const cardStyle = StyleSheet.create({
    cardView: {
        height: 100,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#00000029",
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
        shadowRadius: 15,
        padding: 20,
        margin: 8
    },

    spacer: {
        width: 20
    },

    categoryImage: {
        width: 50,
        height: 50,
        justifyContent: "center",
    },

    content: {
        flexDirection: 'column',
        justifyContent: 'center',
    },

    text: {
        fontSize: 16,
        fontFamily: 'Mulish.ttf',
    },

    descriptionText: {
        fontSize: 12,
        width: 200,
        fontFamily: 'Mulish.ttf',
    },

});

export default FeatureCard 