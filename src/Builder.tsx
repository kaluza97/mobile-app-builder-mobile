import { Text, View } from "react-native";
import data from "./data/data.json";
export const Builder = () => {
    const navigationData = data[0].navigation

    return (
        <View>
            {navigationData &&
                navigationData.map((item, index) => (
                    <Text key={index}>{item.name}</Text>
                ))}
        </View>
    );
};
