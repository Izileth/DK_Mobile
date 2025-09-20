import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AuthInputProps extends TextInputProps {
    label: string;
    isPassword?: boolean;
}

export default function AuthInput({ label, isPassword = false, value, ...rest }: AuthInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [hidePass, setHidePass] = useState(true);

    const isLabelUp = value || isFocused;

    return (
        <View className="w-full my-4">
            <Text
                className={`absolute left-3 px-1 z-10 ${
                    isLabelUp
                        ? "-top-2 text-xs bg-gray-100 text-red-600"
                        : "top-3 text-base text-gray-500"
                }`}
            >
                {label}
            </Text>
            <View className="flex-row items-center w-full border border-gray-300 rounded-lg">
                <TextInput
                    className="flex-1 h-14 px-3 text-base"
                    value={value}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={isPassword && hidePass}
                    {...rest}
                />
                {isPassword && (
                    <TouchableOpacity
                        onPress={() => setHidePass(!hidePass)}
                        className="p-3"
                    >
                        <Ionicons
                            name={hidePass ? "eye" : "eye-off"}
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
