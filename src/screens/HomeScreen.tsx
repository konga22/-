import React from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import TopAppBar from "../components/common/TopAppBar";
import BottomNavBar from "../components/common/BottomNavBar";
import FAB from "../components/common/FAB";
import Text from "../components/ui/AppText";

// Figma asset URLs (valid for 7 days)
const IMG_MAP_BANNER =
  "https://www.figma.com/api/mcp/asset/fd6688f9-0367-4998-8e08-ffbd5caaa980";
const IMG_CARD1 =
  "https://www.figma.com/api/mcp/asset/f848b951-20b3-489e-8af8-f4c035108ce3";
const IMG_CARD2 =
  "https://www.figma.com/api/mcp/asset/53296507-c1f7-4e7f-ab83-1b1e1089f5dd";
const IMG_COMING1 =
  "https://www.figma.com/api/mcp/asset/9dcf8936-36da-4e48-8dbf-97edc5c06fc1";
const IMG_COMING2 =
  "https://www.figma.com/api/mcp/asset/4106b3e6-a4aa-40b3-932a-bd96a4438ab0";
const IMG_CLOSING1 =
  "https://www.figma.com/api/mcp/asset/fe582bc9-fdcd-4369-ae1a-86862c74d1af";
const IMG_CLOSING2 =
  "https://www.figma.com/api/mcp/asset/f7beefee-68d3-46e6-a3e6-81da0a6ccc40";

// ─── Search Bar ────────────────────────────────────────────────────────────────
function SearchBar() {
  return (
    <View className="gap-3">
      {/* 검색 입력창 */}
      <View className="flex-row items-center bg-[#eae7ed] rounded-full px-5 py-4 shadow-sm">
        <Text className="text-[#605e65] opacity-60 mr-3 text-base">🔍</Text>
        <Text className="text-[#605e65] opacity-60 text-sm flex-1">
          지금 가장 핫한 팝업은?
        </Text>
      </View>

      {/* 트렌딩 키워드 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row items-center gap-2">
          <Text className="text-primary text-[11px] font-bold tracking-widest uppercase mr-1">
            Trending
          </Text>
          {[
            { label: "1 성수 디올", bg: "bg-[#fadaec]", text: "text-[#624b59]" },
            { label: "2 산리오 마켓", bg: "bg-lavender", text: "text-[#533f66]" },
            { label: "3 빵지순례", bg: "bg-[#e5e1e9]", text: "text-muted" },
          ].map((chip) => (
            <TouchableOpacity
              key={chip.label}
              className={`${chip.bg} rounded-full px-4 py-1.5`}
            >
              <Text className={`${chip.text} text-xs`}>{chip.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// ─── Map Banner ────────────────────────────────────────────────────────────────
function MapBanner() {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="rounded-[32px] overflow-hidden h-44 shadow-lg"
      style={{ backgroundColor: "#844d74" }}
    >
      <ImageBackground
        source={{ uri: IMG_MAP_BANNER }}
        className="flex-1"
        imageStyle={{ opacity: 0.6 }}
        resizeMode="cover"
      >
        <View
          className="flex-1 justify-end p-6"
          style={{
            background: undefined,
          }}
        >
          {/* gradient overlay via inner view */}
          <View
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(132,77,116,0.45)",
            }}
          />
          <Text className="text-white text-2xl font-semibold leading-8 z-10">
            내 근처의{"\n"}팝업 지도로 가기
          </Text>
          <View className="flex-row items-center mt-3 z-10">
            <Text className="text-white/90 text-sm">
              지금 열려있는 스토어 탐색하기
            </Text>
            <Text className="text-white/90 text-sm ml-1">›</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

// ─── Trending Popup Card ───────────────────────────────────────────────────────
type PopupCardProps = {
  image: string;
  category: string;
  title: string;
  until: string;
  hot?: boolean;
};

function TrendingCard({ image, category, title, until, hot }: PopupCardProps) {
  return (
    <View className="w-[260px] gap-2.5">
      {/* 이미지 영역 */}
      <View className="rounded-[32px] overflow-hidden shadow-md">
        <Image
          source={{ uri: image }}
          className="w-[260px] h-[325px]"
          resizeMode="cover"
        />
        {hot && (
          <View className="absolute top-3 left-3 bg-white/80 rounded-full px-3 py-1">
            <Text className="text-primary text-[10px] font-bold">HOT</Text>
          </View>
        )}
      </View>
      {/* 텍스트 영역 */}
      <View className="px-1">
        <Text className="text-primary-dark text-[11px] font-bold tracking-widest uppercase">
          {category}
        </Text>
        <Text className="text-heading text-base leading-6 mt-0.5">{title}</Text>
        <Text className="text-muted text-xs mt-0.5">{until}</Text>
      </View>
    </View>
  );
}

function TrendingSection() {
  const cards = [
    {
      image: IMG_CARD1,
      category: "Fashion • Seongsu",
      title: "아틀리에 누보: 여름의 정원",
      until: "~ 08.24 까지",
      hot: true,
    },
    {
      image: IMG_CARD2,
      category: "Cafe • Hannam",
      title: "페일 라벤더 디저트 하우스",
      until: "~ 09.02 까지",
    },
  ];

  return (
    <View className="gap-4">
      <View className="flex-row items-end justify-between">
        <Text className="text-heading text-xl font-semibold tracking-tight">
          현재 인기 있는 팝업
        </Text>
        <TouchableOpacity>
          <Text className="text-primary text-xs">전체보기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
      >
        {cards.map((card) => (
          <TrendingCard key={card.title} {...card} />
        ))}
      </ScrollView>
    </View>
  );
}

// ─── Coming Soon Card ──────────────────────────────────────────────────────────
type ComingCardProps = {
  image: string;
  dday: string;
  title: string;
};

function ComingCard({ image, dday, title }: ComingCardProps) {
  return (
    <View className="w-[200px] h-[264px] bg-white rounded-[32px] shadow-sm border border-[rgba(179,177,184,0.1)] overflow-hidden">
      <Image
        source={{ uri: image }}
        className="w-full h-[174px] rounded-[24px] m-3"
        style={{ width: 174, height: 174 }}
        resizeMode="cover"
      />
      <View className="flex-row items-center justify-between px-3 mt-1">
        <View className="bg-lavender rounded-2xl px-2 py-0.5">
          <Text className="text-lavender-dark text-[10px] font-bold">{dday}</Text>
        </View>
        <Text className="text-base">🔔</Text>
      </View>
      <Text className="text-heading text-sm font-semibold px-3 mt-1" numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

function ComingSoonSection() {
  const items = [
    { image: IMG_COMING1, dday: "D-3", title: "오브제 마켓 vol.2" },
    { image: IMG_COMING2, dday: "D-7", title: "네온 드림: 디지털 전시" },
  ];

  return (
    <View className="gap-4">
      <View className="flex-row items-end justify-between">
        <Text className="text-heading text-xl font-semibold tracking-tight">
          곧 오픈할 팝업
        </Text>
        <TouchableOpacity>
          <Text className="text-primary text-xs font-bold">D-Day 알림</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
      >
        {items.map((item) => (
          <ComingCard key={item.title} {...item} />
        ))}
      </ScrollView>
    </View>
  );
}

// ─── Closing Soon Item ─────────────────────────────────────────────────────────
type ClosingItemProps = {
  image: string;
  title: string;
  subtitle: string;
  badge: string;
  urgent?: boolean;
};

function ClosingItem({ image, title, subtitle, badge, urgent }: ClosingItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      className="flex-row items-center bg-surface-secondary rounded-[32px] p-3"
    >
      <Image
        source={{ uri: image }}
        className="rounded-[20px]"
        style={{ width: 64, height: 64 }}
        resizeMode="cover"
      />
      <View className="flex-1 pl-4">
        <Text className="text-heading text-sm font-semibold">{title}</Text>
        <Text className="text-muted text-xs mt-0.5">{subtitle}</Text>
      </View>
      <View
        className={`rounded-2xl px-2 py-1 ${
          urgent ? "bg-[rgba(249,115,134,0.2)]" : "bg-[#e5e1e9]"
        }`}
      >
        <Text
          className={`text-xs font-bold ${
            urgent ? "text-urgent" : "text-muted"
          }`}
        >
          {badge}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function ClosingSoonSection() {
  const items = [
    {
      image: IMG_CLOSING1,
      title: "글로우 뷰티 클로젯",
      subtitle: "오늘 영업 종료",
      badge: "2시간 남음",
      urgent: true,
    },
    {
      image: IMG_CLOSING2,
      title: "빈티지 아카이브 팝업",
      subtitle: "내일 영업 종료",
      badge: "D-1",
    },
  ];

  return (
    <View className="gap-4">
      <View className="flex-row items-end justify-between">
        <Text className="text-heading text-xl font-semibold tracking-tight">
          종료 임박 팝업
        </Text>
        <Text className="text-urgent text-xs font-bold">Hurry Up!</Text>
      </View>
      <View className="gap-3">
        {items.map((item) => (
          <ClosingItem key={item.title} {...item} />
        ))}
      </View>
    </View>
  );
}

// ─── Home Screen ───────────────────────────────────────────────────────────────
export default function HomeScreen() {
  return (
    <View className="flex-1 bg-surface">
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <TopAppBar />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: 96, paddingBottom: 120, gap: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-4 gap-8">
          <SearchBar />
          <MapBanner />
          <TrendingSection />
          <ComingSoonSection />
          <ClosingSoonSection />
        </View>
      </ScrollView>

      <FAB bottom={96} />
      <BottomNavBar activeTab="home" onTabPress={() => {}} />
    </View>
  );
}
