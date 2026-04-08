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
const IMG_MATE1 = "https://www.figma.com/api/mcp/asset/373b69f5-28d7-4868-9ed2-9f05006d1247";
const IMG_MATE2 = "https://www.figma.com/api/mcp/asset/0bce280c-eaac-4f60-bd1f-12148213636c";
const IMG_ITEM1 = "https://www.figma.com/api/mcp/asset/3f4fe28c-7983-42c5-8d21-ad56290ec1ee";
const IMG_ITEM2 = "https://www.figma.com/api/mcp/asset/fc635ec2-53e3-43ed-be4b-9c0ea133c505";

// ─── 팝업 메이트 카드 ──────────────────────────────────────────────────────────
type MateCardProps = {
  avatar: string;
  avatarBg: string;
  name: string;
  location: string;
  status: string;
  title: string;
  tags: string[];
};

function MateCard({ avatar, avatarBg, name, location, status, title, tags }: MateCardProps) {
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
      {/* 헤더: 아바타 + 이름 + 상태 */}
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

      {/* 제목 */}
      <Text className="text-heading text-lg leading-[22px] mb-3">{title}</Text>

      {/* 태그 */}
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

// ─── 영수증 교환 아이템 ────────────────────────────────────────────────────────
type ExchangeItemProps = {
  image: string;
  label: string;
  title: string;
  time: string;
};

function ExchangeItem({ image, label, title, time }: ExchangeItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      className="flex-1 bg-white rounded-[32px] overflow-hidden"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
      }}
    >
      {/* 이미지 */}
      <View className="h-40 relative">
        <Image source={{ uri: image }} className="w-full h-full" resizeMode="cover" />
        {/* 영수증 인증 뱃지 */}
        <View className="absolute top-2 left-2 bg-white/60 rounded-md flex-row items-center gap-1 px-2 py-1">
          <Text className="text-[10px]">✓</Text>
          <Text className="text-primary text-[10px]">영수증 인증 완료</Text>
        </View>
      </View>
      {/* 텍스트 */}
      <View className="p-3 gap-1">
        <Text className="text-primary text-xs">{label}</Text>
        <Text className="text-heading text-sm font-semibold">{title}</Text>
        <View className="flex-row items-center justify-between mt-2">
          <Text className="text-muted text-[10px]">{time}</Text>
          <Text className="text-base">🤍</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ─── 팁 피드 카드 ─────────────────────────────────────────────────────────────
type TipFeedProps = {
  accentColor: string;
  categoryIcon: string;
  category: string;
  body: string;
  timestamp: string;
  likes: number;
};

function TipFeedCard({ accentColor, categoryIcon, category, body, timestamp, likes }: TipFeedProps) {
  return (
    <View
      className="bg-white rounded-[32px] pl-5 pr-4 py-4 flex-row gap-4"
      style={{
        borderLeftWidth: 4,
        borderLeftColor: accentColor,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
      }}
    >
      <View className="flex-1 gap-2">
        {/* 카테고리 */}
        <View className="flex-row items-center gap-2">
          <Text className="text-sm">{categoryIcon}</Text>
          <Text style={{ color: accentColor }} className="text-xs font-semibold">
            {category}
          </Text>
        </View>
        {/* 본문 */}
        <Text className="text-muted text-sm leading-[22px]" numberOfLines={2}>
          {body}
        </Text>
        {/* 하단 */}
        <View className="flex-row items-center gap-4">
          <Text className="text-[#7c7a80] text-[11px]">{timestamp}</Text>
          <View className="flex-row items-center gap-1">
            <Text className="text-[10px]">❤️</Text>
            <Text className="text-heading text-[11px] font-semibold">{likes}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// ─── Section Header ────────────────────────────────────────────────────────────
function SectionHeader({ badge, badgeColor, title, action }: {
  badge: string;
  badgeColor: string;
  title: string;
  action?: string;
}) {
  return (
    <View className="flex-row items-end justify-between">
      <View className="gap-1.5">
        <View className="self-start rounded-full px-3 py-0.5" style={{ backgroundColor: badgeColor }}>
          <Text className="text-[10px] font-bold tracking-widest uppercase"
            style={{ color: badgeColor === "#fadaec" ? "#844d74" : badgeColor === "#e1c8f8" ? "#6b5780" : "#633055" }}>
            {badge}
          </Text>
        </View>
        <Text className="text-heading text-2xl font-semibold tracking-tight">{title}</Text>
      </View>
      {action && (
        <TouchableOpacity>
          <Text className="text-primary text-sm">{action}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

// ─── Community Screen ──────────────────────────────────────────────────────────
export default function CommunityScreen() {
  return (
    <View className="flex-1 bg-surface">
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <TopAppBar variant="logo" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: 96, paddingBottom: 120, gap: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ─ Section 1: 팝업 파트너 구하기 ─ */}
        <View className="gap-6">
          <View className="px-4">
            <SectionHeader badge="Recruit" badgeColor="#fadaec" title="팝업 파트너 구하기" action="전체보기" />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 16, paddingBottom: 16 }}
          >
            <MateCard
              avatar={IMG_MATE1}
              avatarBg="#e1c8f8"
              name="민지"
              location="성수동 • 10분 전"
              status="모집중"
              title={"이번주 토요일 오브제 팝업 같이 가실 분! 💜"}
              tags={["#사진촬영", "#커피수다"]}
            />
            <MateCard
              avatar={IMG_MATE2}
              avatarBg="#f9b4e1"
              name="소희"
              location="더현대 • 1시간 전"
              status="모집중"
              title={"웨이팅 같이 해주실 메이트 찾아요 (사전예약 완료)"}
              tags={["#웨이팅메이트", "#20대"]}
            />
          </ScrollView>
        </View>

        {/* ─ Section 2: 영수증 인증 교환 ─ */}
        <View
          className="mx-4 rounded-[32px] p-5 gap-6"
          style={{ backgroundColor: "#f6f2f8" }}
        >
          <View className="gap-1">
            <View className="self-start bg-lavender rounded-full px-3 py-0.5">
              <Text className="text-lavender-dark text-[10px] font-bold tracking-widest uppercase">Exchange</Text>
            </View>
            <Text className="text-heading text-2xl font-semibold tracking-tight mt-1">영수증 인증 교환</Text>
            <Text className="text-muted text-sm">인증된 영수증으로 신뢰할 수 있는 굿즈 교환</Text>
          </View>
          <View className="flex-row gap-4">
            <ExchangeItem image={IMG_ITEM1} label="교환 희망" title="한정판 라벤더 키링" time="3분 전" />
            <ExchangeItem image={IMG_ITEM2} label="교환 희망" title="글라스 머그컵 세트" time="12분 전" />
          </View>
        </View>

        {/* ─ Section 3: 실시간 팝업 정보 ─ */}
        <View className="px-4 gap-6">
          <SectionHeader badge="Real-time Feed" badgeColor="#f9b4e1" title="실시간 팝업 정보" />
          <View className="gap-4">
            <TipFeedCard
              accentColor="#844d74"
              categoryIcon="⏱"
              category="현재 대기 2시간 이상"
              body="지금 성수 브랜드 팝업 현장입니다. 대기줄 진짜 길어요! 현장 예약 벌써 마감 분위기니 참고하세요."
              timestamp="익명 • 2분 전"
              likes={8}
            />
            <TipFeedCard
              accentColor="#6b5780"
              categoryIcon="💡"
              category="방문 꿀팁"
              body="지하 1층 포토존보다 2층 루프탑 전시가 훨씬 사진 잘 나와요! 사람이 2층에는 별로 없네요."
              timestamp="익명 • 15분 전"
              likes={3}
            />
          </View>
        </View>
      </ScrollView>

      <FAB bottom={96} />
      <BottomNavBar activeTab="community" onTabPress={() => {}} />
    </View>
  );
}
