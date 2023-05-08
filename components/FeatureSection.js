
import { FlatList } from 'react-native-web';
import FeatureCard from './FeatureCard';


const FeatureSection = () => {
    const features = [
        { imageUri: 'https://ik.imagekit.io/faskf16pg/Home/sharepal-benefits-3_gB_TUvJPU.svg?updatedAt=1679261066093', featureName: "Quality Products", featuredescription: "Every Product you rent is fully functional & in excellent condition" },

        { imageUri: 'https://ik.imagekit.io/faskf16pg/Home/sharepal-benefits-5_NPhNWdKx8m.svg?updatedAt=1679261066112', featureName: "Simple Pricing", featuredescription: "Every Product you rent is fully functional & in excellent condition" },


        { imageUri: 'https://ik.imagekit.io/faskf16pg/Home/sharepal-benefits-4_0Ezx6myOO.svg?updatedAt=1679261066106', featureName: "Quick and Hassle-free", featuredescription: "Every Product you rent is fully functional & in excellent condition" },
        { imageUri: 'https://ik.imagekit.io/faskf16pg/Home/sharepal-benefits-6_m4ThMgGjTP.svg?updatedAt=1679261066129', featureName: "Pay On Delivery", featuredescription: "Every Product you rent is fully functional & in excellent condition" },

        { imageUri: 'https://ik.imagekit.io/faskf16pg/Home/sharepal-benefits-2_EqXpAQJnu.svg?updatedAt=1679261066070', featureName: 'Customer friendly', featuredescription: "Every Product you rent is fully functional & in excellent condition" },

        { imageUri: 'https://ik.imagekit.io/faskf16pg/Home/sharepal-benefits-1_RPzIPZmpr4.svg?updatedAt=1679261066140', featureName: "Safe & Santized", featuredescription: "Every Product you rent is fully functional & in excellent condition" },
    ]
    return (<FlatList
        data={features}
        renderItem={({ item, index }) => {
            return (<FeatureCard
                imageUri={features[index].imageUri}
                featureName={features[index].featureName}
                featureDescription={features[index].featuredescription}
            />)
        }}

    />
    )
}
export default FeatureSection