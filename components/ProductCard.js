import { StyleSheet, Image, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ProductCard = ({ imageUri, productName, productDescription }) => (

    <View
        style={cardStyle.cardView}>
        <View
            style={cardStyle.actionIcons}>
            <Icon name="favorite" size={30} color="#00000080" />
            <Icon name="share" size={30} color="#00000080" />
        </View>
        <View
            style={cardStyle.categoryImage}>
            <Image source={imageUri} style={cardStyle.categoryImage} />
        </View>
        <Text style={cardStyle.text} >
            {productName}
        </Text>
        <Text style={cardStyle.productText} >
            {productDescription}
        </Text>
    </View>

);

const cardStyle = StyleSheet.create({
    cardView: {
        width: 200,
        height: 200,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "grey",
        shadowRadius: 5,
        margin: 8
    },

    categoryImage: {
        width: 150,
        height: 120,
        position: 'absolute',
        justifyContent: "center",
        bottom: 25,
    },

    text: {
        fontSize: 15,
        // fontWeight: 'bold',
        position: 'absolute',
        bottom: 10,
        width: 180,
        fontFamily: 'Mulish.ttf',
        textAlign: 'center'
    },

    productText: {
        fontSize: 15,
        position: 'absolute',
        bottom: 0,
        width: 180,
        fontFamily: 'Mulish.ttf',
        textAlign: 'center'
    },
    actionIcons: {
        position: 'absolute',

        right: 0,
    }
});

export default ProductCard 