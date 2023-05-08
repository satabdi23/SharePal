
import { FlatList } from 'react-native-web';
import CategoryCard from './CategoryCard';


const CategorySection= () => {
    const categories = [
        {imageUri:'https://ik.imagekit.io/faskf16pg/new-categories/trekking-gear-on-rent-sharepal_rgbHep2oXr.png?updatedAt=1678575789925', categoryName:"Trekking Gear"},
        {imageUri:'https://ik.imagekit.io/faskf16pg/new-categories/riding-gear-on-rent-sharepal_Ub1jNYAaa0.png?updatedAt=1678575789665',categoryName:"Riding Gear"},
        {imageUri:'https://ik.imagekit.io/faskf16pg/new-categories/action-camera-on-rent-sharepal_0Yq8OKy7e.png?updatedAt=1678575789589',categoryName:"Action Cameras"},
        {imageUri:'https://ik.imagekit.io/faskf16pg/new-categories/gaming-consoles-on-rent-sharepal-1_Y5t1X-N2e.png?updatedAt=1679435547369',categoryName:"Gaming Console"},
        {imageUri:'https://ik.imagekit.io/faskf16pg/new-categories/dslr-camera-on-rent-sharepal_2aaH3chKb.png?updatedAt=1678575789681',categoryName:'Cameras'},
        {imageUri:'https://ik.imagekit.io/faskf16pg/new-categories/ps4-games-on-rent-sharepal_Wzwy10tgV.png?updatedAt=1679435347494',categoryName:"PS4 Games"},
        {imageUri:'https://ik.imagekit.io/faskf16pg/new-categories/winter-wear-on-rent-sharepal_Qnn68-8VVM.png?updatedAt=1678575789695',categoryName:"Winter Wear"},
    ]
   return( <FlatList
    data={categories}
    numColumns={2}
    renderItem={({ item, index }) => {
      return (<CategoryCard
        imageUri={categories[index].imageUri}
        categoryName={categories[index].categoryName}/>)
    }}

  />
   )}
export default CategorySection