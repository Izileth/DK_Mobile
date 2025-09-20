import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AuthHeaderProps {
    subtitle: string;
    onBack?: () => void;
}

export default function AuthHeader({ subtitle, onBack }: AuthHeaderProps) {
    return (
        <View className="w-full items-start mb-10">
            {onBack && (
                <Pressable
                    onPress={onBack}
                    className="bg-red-600 p-2.5 w-12 rounded-lg mb-3 items-center"
                >
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </Pressable>
            )}
            <Text className="text-5xl font-bold text-red-600">
                Drift King <Text className="text-white">Mobile</Text>
            </Text>
            <Text className="text-2xl text-white mt-2">
                {subtitle}
            </Text>
        </View>
    );
}