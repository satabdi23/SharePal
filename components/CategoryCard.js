import { StyleSheet, Image, View, Text } from 'react-native';


const CategoryCard = ({ imageUri, categoryName }) => (

    <View>
        <View
            style={cardStyle.cardView}>
            <View
                style={cardStyle.backdropView}>
            </View>
            <View
                style={cardStyle.categoryImage}>
                <Image source={imageUri} style={cardStyle.categoryImage} />
            </View>
            <Text style={cardStyle.text} >
             {categoryName}
            </Text>
        </View>
    </View>

);

const cardStyle = StyleSheet.create({
    cardView: {
        width: 150,
        height: 200,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "grey",
        shadowRadius: 5,
        margin: 12
    },
    backdropView: {
        width: 150,
        height: 110,
        overflow: 'hidden',
        backgroundColor: "#d7df23",
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        position: 'absolute',
        bottom: 0
    },
    categoryImage: {
        width: 150,
        height: 200,
        position: 'absolute',
        bottom: 0,
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 10,
        width: 150,
        textAlign: 'center',
        fontFamily: 'Mulish.ttf',
    }
});

export default CategoryCard 