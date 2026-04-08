import React from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import TopAppBar from "../components/common/TopAppBar";
import BottomNavBar from "../components/common/BottomNavBar";
import FAB from "../components/common/FAB";
import Text from "../components/ui/AppText";

// ─── Assets ───────────────────────────────────────────────────────────────────
const IMG_PROFILE1 = "https://www.figma.com/api/mcp/asset/0edb0de7-cd3b-4e95-bcf4-63ce98b9f710";
const IMG_REVIEW_MAIN = "https://www.figma.com/api/mcp/asset/baa9bd5c-950f-454b-81bc-14ba7b793f14";
const IMG_PROFILE2 = "https://www.figma.com/api/mcp/asset/aad1d852-5c62-4e41-82be-f3adbae89181";
const IMG_REVIEW1 = "https://www.figma.com/api/mcp/asset/967fdba4-63c0-4e0f-b5e6-a57373f818b3";
const IMG_REVIEW2 = "https://www.figma.com/api/mcp/asset/f3119236-d982-4b53-8274-92700df14532";

// ─── Star Rating ──────────────────────────────────────────────────────────────
function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <View className="flex-row gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Text key={i} style={{ fontSize: size, color: "#844d74" }}>
          {i <= Math.floor(rating) ? "★" : i - 0.5 <= rating ? "½" : "☆"}
        </Text>
      ))}
    </View>
  );
}

// ─── Rating Overview Card ─────────────────────────────────────────────────────
function RatingOverviewCard() {
  const filterTags = ["# 분위기 최고", "# 빠른 입장", "# 사진 맛집", "# 친절한 직원"];

  return (
    <View className="bg-white rounded-[32px] p-8 items-center gap-4"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 12,
        elevation: 3,
      }}
    >
      {/* 평점 숫자 */}
      <View className="items-center gap-2">
        <Text className="text-primary font-extrabold" style={{ fontSize: 60, lineHeight: 64 }}>
          4.8
        </Text>
        <Stars rating={4.8} size={20} />
        <Text className="text-muted text-sm font-semibold">1,248개의 생생한 리뷰</Text>
      </View>

      {/* 필터 태그 (2×2) */}
      <View className="gap-2">
        <View className="flex-row gap-2 justify-center">
          <View className="bg-primary-light rounded-full px-4 py-2">
            <Text className="text-[#624b59] text-xs">{filterTags[0]}</Text>
          </View>
          <View className="bg-lavender rounded-full px-4 py-2">
            <Text className="text-[#533f66] text-xs">{filterTags[1]}</Text>
          </View>
        </View>
        <View className="flex-row gap-2 justify-center">
          <View className="bg-muted-subtle rounded-full px-4 py-2">
            <Text className="text-muted text-xs">{filterTags[2]}</Text>
          </View>
          <View className="bg-muted-subtle rounded-full px-4 py-2">
            <Text className="text-muted text-xs">{filterTags[3]}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// ─── Review Item ──────────────────────────────────────────────────────────────
type ReviewItemProps = {
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
  dualImages?: [string, string];
};

function ReviewItem({
  avatar, avatarBg, username, date, rating, body,
  likes, comments, liked, featured, mainImage, dualImages,
}: ReviewItemProps) {
  return (
    <View className="gap-4">
      {/* 유저 헤더 */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <View className="w-10 h-10 rounded-full overflow-hidden" style={{ backgroundColor: avatarBg }}>
            <Image source={{ uri: avatar }} className="w-full h-full" resizeMode="cover" />
          </View>
          <View>
            <Text className="text-heading text-sm font-bold">{username}</Text>
            <Text className="text-muted text-[10px]">{date}</Text>
          </View>
        </View>
        <Stars rating={rating} size={14} />
      </View>

      {/* 메인 이미지 (full-width) */}
      {mainImage && (
        <View className="rounded-[32px] overflow-hidden relative"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.1,
            shadowRadius: 15,
            elevation: 6,
          }}
        >
          <Image source={{ uri: mainImage }} style={{ width: "100%", height: 340 }} resizeMode="cover" />
          {featured && (
            <View className="absolute top-4 right-4 bg-white/30 rounded-full px-3 py-1">
              <Text className="text-white text-[10px] font-bold tracking-widest uppercase">Featured</Text>
            </View>
          )}
        </View>
      )}

      {/* 듀얼 이미지 */}
      {dualImages && (
        <View className="flex-row gap-3">
          {dualImages.map((img, idx) => (
            <View key={idx} className="flex-1 rounded-[32px] overflow-hidden"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 6,
                elevation: 4,
              }}
            >
              <Image source={{ uri: img }} style={{ height: 200 }} resizeMode="cover" />
            </View>
          ))}
        </View>
      )}

      {/* 본문 + 액션 */}
      <View className="px-2 gap-4">
        <Text className="text-heading text-sm leading-[22px]">{body}</Text>
        <View className="flex-row gap-4">
          <TouchableOpacity className="flex-row items-center gap-1">
            <Text className="text-xl">{liked ? "❤️" : "🤍"}</Text>
            <Text className="text-primary text-xs font-bold">{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center gap-1">
            <Text className="text-xl">💬</Text>
            <Text className="text-muted text-xs">{comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// ─── Review Screen ─────────────────────────────────────────────────────────────
export default function ReviewScreen() {
  return (
    <View className="flex-1 bg-surface">
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <TopAppBar variant="logo" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: 112, paddingBottom: 120, gap: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 gap-10">
          {/* 헤더 */}
          <View className="gap-2">
            <Text className="text-primary font-extrabold tracking-tight" style={{ fontSize: 36, lineHeight: 45 }}>
              Review Archive
            </Text>
            <Text className="text-muted text-base">당신의 소중한 경험을 기록해보세요</Text>
          </View>

          {/* 평점 카드 */}
          <RatingOverviewCard />

          {/* 리뷰 리스트 */}
          <View className="gap-16">
            <ReviewItem
              avatar={IMG_PROFILE1}
              avatarBg="#f9b4e1"
              username="@blooming_day"
              date="2023.11.24"
              rating={5}
              liked
              featured
              mainImage={IMG_REVIEW_MAIN}
              body="입구부터 퍼지는 은은한 라벤더 향기가 너무 좋았어요! 사진 찍을 수 있는 스팟도 정말 많고 직원분들도 너무 친절하셔서 기분 좋게 즐기다 왔습니다. 꼭 한 번 방문해보세요. ✨"
              likes={124}
              comments={12}
            />
            <ReviewItem
              avatar={IMG_PROFILE2}
              avatarBg="#e1c8f8"
              username="@lavender_dreamer"
              date="2023.11.22"
              rating={4.5}
              dualImages={[IMG_REVIEW1, IMG_REVIEW2]}
              body="디저트가 생각보다 너무 맛있어서 놀랐어요! 특히 라벤더 마카롱은 향이 진하지 않고 은은해서 딱 제 스타일이었네요. 다음에도 꼭 다시 오고 싶어요!"
              likes={89}
              comments={5}
            />
          </View>
        </View>
      </ScrollView>

      <FAB icon="✍️" bottom={96} />
      <BottomNavBar activeTab="community" onTabPress={() => {}} />
    </View>
  );
}
