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
const IMG_POST1 = "https://www.figma.com/api/mcp/asset/ce4414e0-0000-0000-0000-000000000000";
const IMG_POST2 = "https://www.figma.com/api/mcp/asset/5a4d628c-0000-0000-0000-000000000000";
const IMG_POST3 = "https://www.figma.com/api/mcp/asset/5e9b5888-0000-0000-0000-000000000000";

// ─── Trending Post Card ───────────────────────────────────────────────────────
type TrendingPostProps = {
  rank: number;
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  body: string;
  likes: number;
  comments: number;
  timestamp: string;
  indent?: boolean;
};

function TrendingPostCard({
  rank, image, category, categoryColor, title, body,
  likes, comments, timestamp, indent,
}: TrendingPostProps) {
  return (
    <View
      className="bg-white rounded-[32px] overflow-hidden"
      style={{
        marginLeft: indent ? 34 : 0,
        shadowColor: "rgba(51,50,56,0.06)",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 1,
        shadowRadius: 40,
        elevation: 5,
      }}
    >
      {/* 이미지 */}
      <View className="h-52 relative">
        <Image source={{ uri: image }} className="w-full h-full" resizeMode="cover" />
        {/* 순위 배지 */}
        <View className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary items-center justify-center">
          <Text className="text-white text-sm font-black">{rank}</Text>
        </View>
      </View>

      {/* 내용 */}
      <View className="p-5 gap-2.5">
        {/* 카테고리 */}
        <View className="self-start rounded-full px-3 py-0.5" style={{ backgroundColor: categoryColor + "33" }}>
          <Text className="text-xs font-semibold" style={{ color: categoryColor }}>
            {category}
          </Text>
        </View>

        {/* 제목 + 본문 */}
        <Text className="text-heading text-base font-bold leading-6">{title}</Text>
        <Text className="text-muted text-sm leading-[22px]" numberOfLines={2}>{body}</Text>

        {/* 하단 메타 */}
        <View className="flex-row items-center justify-between pt-1">
          <Text className="text-muted text-[11px]">{timestamp}</Text>
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Text className="text-sm">❤️</Text>
              <Text className="text-heading text-[11px] font-semibold">{likes}</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Text className="text-sm">💬</Text>
              <Text className="text-muted text-[11px]">{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

// ─── Community Main Screen ────────────────────────────────────────────────────
export default function CommunityMainScreen() {
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
            <View className="self-start bg-primary-light rounded-full px-3 py-0.5">
              <Text className="text-primary text-[10px] font-bold tracking-widest uppercase">Real-time</Text>
            </View>
            <Text
              className="text-heading font-extrabold tracking-tight"
              style={{ fontSize: 40, lineHeight: 48 }}
            >
              오늘의{"\n"}실시간 인기글
            </Text>
          </View>

          {/* 인기글 리스트 */}
          <View className="gap-5">
            <TrendingPostCard
              rank={1}
              image={IMG_POST1}
              category="방문 후기"
              categoryColor="#844d74"
              title="성수 디올 팝업 웨이팅 꿀팁 총정리 🌸"
              body="오전 10시 전에 도착하면 대기 없이 바로 입장 가능해요! 2층 포토존이 진짜 사진 맛집입니다. 직원분들도 너무 친절하셔서 기분 좋게 즐겼어요."
              likes={324}
              comments={47}
              timestamp="2시간 전 • 익명"
            />
            <TrendingPostCard
              rank={2}
              image={IMG_POST2}
              category="정보공유"
              categoryColor="#6b5780"
              title="이번 주 팝업 일정 총정리 (11/25~11/30)"
              body="이번 주에 열리는 팝업들 한눈에 정리해봤어요. 오브제 마켓, 더현대 한정 컬래버, 청담 뷰티 팝업까지!"
              likes={218}
              comments={33}
              timestamp="4시간 전 • 익명"
              indent
            />
            <TrendingPostCard
              rank={3}
              image={IMG_POST3}
              category="파트너 모집"
              categoryColor="#a8364b"
              title="라벤더 팝업 같이 가실 분 구해요 💜"
              body="이번 주 일요일 오후 2시에 라벤더 팝업 갈 예정인데 동행 구해요. 사진 좋아하시는 분 환영합니다!"
              likes={156}
              comments={28}
              timestamp="6시간 전 • 익명"
            />
          </View>

          {/* 더보기 버튼 */}
          <TouchableOpacity
            className="items-center py-4 rounded-full border"
            style={{ borderColor: "rgba(132,77,116,0.2)" }}
          >
            <Text className="text-primary text-sm font-semibold">더 많은 인기글 보기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <FAB icon="✍️" bottom={96} />
      <BottomNavBar activeTab="community" onTabPress={() => {}} />
    </View>
  );
}
