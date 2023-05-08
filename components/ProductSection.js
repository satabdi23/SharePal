
import { FlatList } from 'react-native-web';
import ProductCard from './ProductCard';
import { ScrollView } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';


const ProductSection = () => {
    const products = [
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/xbox_controller3_wGyMErYl7.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653301352505', productName: "Xbox Controller on rent", productDescription: 'Easy to connect & play with' },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/rent-ps4-console-with-2-controllers-3-free-games-1_2vwzlrElII.webp', productName: "PS4 w/2 Controller" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/ps5-w-1-controller-on-rent-1_-n_mYjjS7V.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673802130647', productName: "Rent PS5 Console w/1 Controller" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/ps4-controller-on-rent-1_WzxDR8TJ6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1624009668205', productName: "Xbox Controller on rent" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/ps4-controller-on-rent-1_WzxDR8TJ6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1624009668205', productName: "PS4 Controller on rent" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/sub_category/Gaming_Console/Projector_products/Epson-EB-E01-XGA-Projector-on-rent-SharePal-1_HTVC4IWhbt.png?updatedAt=1680411909371', productName: "Epson EB-E01 XGA Projector" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/sub_category/Gaming_Console/Projector_products/viewsonic-miniplus-Projector-on-rent-SharePal-1__3__yKCLOtESr.png?updatedAt=1680516059766', productName: "ViewSonic M1 Mini Plus" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/xbox_controller3_wGyMErYl7.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653301352505', productName: "Xbox Controller on rent" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/xbox_controller3_wGyMErYl7.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653301352505', productName: "Xbox Controller on rent" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/xbox_controller3_wGyMErYl7.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1653301352505', productName: "Xbox Controller on rent", productDescription: 'Easy to connect & play with' },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/rent-ps4-console-with-2-controllers-3-free-games-1_2vwzlrElII.webp', productName: "PS4 w/2 Controller" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/ps5-w-1-controller-on-rent-1_-n_mYjjS7V.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673802130647', productName: "Rent PS5 Console w/1 Controller" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/ps4-controller-on-rent-1_WzxDR8TJ6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1624009668205', productName: "Xbox Controller on rent" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/gaming-console/ps4-controller-on-rent-1_WzxDR8TJ6.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1624009668205', productName: "PS4 Controller on rent" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/sub_category/Gaming_Console/Projector_products/Epson-EB-E01-XGA-Projector-on-rent-SharePal-1_HTVC4IWhbt.png?updatedAt=1680411909371', productName: "Epson EB-E01 XGA Projector" },
    ]
    return (
        <ScrollView>
            <View style={sectionStyle.sectionView}>
                <Text style={sectionStyle.title} >
                    PS4 Games
                </Text>
                <FlatList
                    horizontal={true}
                    data={products}
                    renderItem={({ item, index }) => {
                        return (<ProductCard
                            imageUri={products[index].imageUri}
                            productName={products[index].productName}
                            productDescription={products[index].productDescription} />)
                    }}
                />
            </View>
            <View style={sectionStyle.sectionView}>
                <Text style={sectionStyle.title} >
                    Cameras
                </Text>
                <FlatList
                    horizontal={true}
                    data={products}
                    renderItem={({ item, index }) => {
                        return (<ProductCard
                            imageUri={products[index].imageUri}
                            productName={products[index].productName}
                            productDescription={products[index].productDescription} />)
                    }}
                />
            </View>
            <View style={sectionStyle.sectionView}>
                <Text style={sectionStyle.title} >
                    Action Cameras
                </Text>
                <FlatList
                    horizontal={true}
                    data={products}
                    renderItem={({ item, index }) => {
                        return (<ProductCard
                            imageUri={products[index].imageUri}
                            productName={products[index].productName}
                            productDescription={products[index].productDescription} />)
                    }}
                />
            </View>
        </ScrollView>

    );
}

const sectionStyle = StyleSheet.create({
    sectionView: {
        height: 300,
        flex: 'column',
        alignContent: 'center',
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 8,
        marginRight: 8
    },

    title: {
        alignSelf: 'center',
        margin: 16,
        fontSize: 22,
        fontFamily: 'Mulish.ttf',
        fontWeight: 'bold'
    },
});

export default ProductSection