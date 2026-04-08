import React from "react";
import { View, Image } from "react-native";
import Text from "../../ui/AppText";

export type MateCardProps = {
  avatar: string;
  avatarBg: string;
  name: string;
  location: string;
  status: string;
  title: string;
  tags: string[];
};

export default function MateCard({
  avatar,
  avatarBg,
  name,
  location,
  status,
  title,
  tags,
}: MateCardProps) {
  return (
    <View
      className="w-[280px] bg-white rounded-[32px] p-5"
      style={{
        shadowColor: "rgba(51,50,56,0.06)",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 1,
        shadowRadius: 40,
        elevation: 6,
      }}
    >
      <View className="flex-row items-center justify-between mb-3">
        <View className="flex-row items-center gap-3">
          <View
            className="w-10 h-10 rounded-full overflow-hidden"
            style={{ backgroundColor: avatarBg }}
          >
            <Image source={{ uri: avatar }} className="w-full h-full" resizeMode="cover" />
          </View>
          <View>
            <Text className="text-heading text-sm font-semibold">{name}</Text>
            <Text className="text-muted text-[10px]">{location}</Text>
          </View>
        </View>
        <View className="bg-primary rounded-full px-2 py-1">
          <Text className="text-white text-[10px]">{status}</Text>
        </View>
      </View>

      <Text className="text-heading text-lg leading-[22px] mb-3">{title}</Text>

      <View className="flex-row gap-2 flex-wrap">
        {tags.map((tag) => (
          <View key={tag} className="bg-muted-subtle rounded-full px-3 py-1">
            <Text className="text-muted text-[11px]">{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
