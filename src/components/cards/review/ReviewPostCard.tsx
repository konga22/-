import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Text from "../../ui/AppText";

export type ReviewPostCardProps = {
  avatar: string;
  avatarBg: string;
  username: string;
  date: string;
  rating: number;
  body: string;
  likes: number;
  comments: number;
  liked?: boolean;
  featured?: boolean;
  mainImage?: string;
  dualImages?: readonly [string, string];
};

type StarsProps = {
  rating: number;
  size?: number;
};

function Stars({ rating, size = 14 }: StarsProps) {
  return (
    <View className="flex-row gap-0.5">
      {[1, 2, 3, 4, 5].map((index) => (
        <Text key={index} style={{ fontSize: size, color: "#844d74" }}>
          {index <= Math.floor(rating) ? "★" : index - 0.5 <= rating ? "½" : "☆"}
        </Text>
      ))}
    </View>
  );
}

function ReviewImageStack({ images }: { images: readonly [string, string] }) {
  return (
    <View className="flex-row gap-3">
      {images.map((image, index) => (
        <View
          key={`${image}-${index}`}
          className="flex-1 rounded-[32px] overflow-hidden"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 4,
          }}
        >
          <Image source={{ uri: image }} className="w-full h-[200px]" resizeMode="cover" />
        </View>
      ))}
    </View>
  );
}

export default function ReviewPostCard({
  avatar,
  avatarBg,
  username,
  date,
  rating,
  body,
  likes,
  comments,
  liked,
  featured,
  mainImage,
  dualImages,
}: ReviewPostCardProps) {
  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <View
            className="w-10 h-10 rounded-full overflow-hidden"
            style={{ backgroundColor: avatarBg }}
          >
            <Image source={{ uri: avatar }} className="w-full h-full" resizeMode="cover" />
          </View>
          <View>
            <Text className="text-heading text-sm font-bold">{username}</Text>
            <Text className="text-muted text-[10px]">{date}</Text>
          </View>
        </View>
        <Stars rating={rating} size={14} />
      </View>

      {mainImage && (
        <View
          className="rounded-[32px] overflow-hidden relative"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.1,
            shadowRadius: 15,
            elevation: 6,
          }}
        >
          <Image source={{ uri: mainImage }} className="w-full h-[340px]" resizeMode="cover" />
          {featured && (
            <View className="absolute top-4 right-4 bg-white/30 rounded-full px-3 py-1">
              <Text className="text-white text-[10px] font-bold tracking-widest uppercase">
                Featured
              </Text>
            </View>
          )}
        </View>
      )}

      {dualImages && <ReviewImageStack images={dualImages} />}

      <View className="px-2 gap-4">
        <Text className="text-heading text-sm leading-[22px]">{body}</Text>
        <View className="flex-row gap-4">
          <TouchableOpacity className="flex-row items-center gap-1" activeOpacity={0.85}>
            <Text className="text-xl">{liked ? "❤️" : "🤍"}</Text>
            <Text className="text-primary text-xs font-bold">{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center gap-1" activeOpacity={0.85}>
            <Text className="text-xl">💬</Text>
            <Text className="text-muted text-xs">{comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
