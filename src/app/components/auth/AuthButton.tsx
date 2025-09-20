import { Pressable, Text, PressableProps } from "react-native";

interface AuthButtonProps extends PressableProps {
    title: string;
    loading?: boolean;
}

export default function AuthButton({ title, loading, ...rest }: AuthButtonProps) {
    return (
        <Pressable
            className="w-40 bg-red-600 p-3 rounded-lg my-4 disabled:bg-gray-400"
            disabled={loading}
            {...rest}
        >
            <Text className="text-white text-center text-lg font-bold">
                {loading ? "Loading..." : title}
            </Text>
        </Pressable>
    );
}
