
import { Text, View } from 'react-native';

export default function TestComponent() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-800 ">
      <Text className="text-2xl font-bold text-white">Tailwind CSS Test</Text>
      <Text className="mt-4 text-lg text-green-400">If this text is green, it's working!</Text>
    </View>
  );
}
