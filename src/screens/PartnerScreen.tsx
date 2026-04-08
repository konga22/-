import React, { useState } from "react";
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
const IMG_POPUP1 = "https://www.figma.com/api/mcp/asset/8b2a0df8-3a42-4cdb-aeae-3ca87d6444b2";
const IMG_POPUP2 = "https://www.figma.com/api/mcp/asset/b8b6a57b-3507-43f5-86ac-3b186f73bc7b";
const IMG_POPUP3 = "https://www.figma.com/api/mcp/asset/ae2eb6f8-3045-4807-9d6e-e83776cf6c3f";
const IMG_AVA1 = "https://www.figma.com/api/mcp/asset/f0d3f592-0000-0000-0000-000000000000";
const IMG_AVA2 = "https://www.figma.com/api/mcp/asset/7c34df57-0000-0000-0000-000000000000";
const IMG_AVA3 = "https://www.figma.com/api/mcp/asset/75987562-0000-0000-0000-000000000000";

const FILTER_CHIPS = ["전체", "이번 주", "성수동", "홍대", "혼자 못 가요", "사진 필수"];

// ─── Filter Chip Bar ──────────────────────────────────────────────────────────
function FilterChipBar({ active, onSelect }: { active: string; onSelect: (v: string) => void }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
    >
      {FILTER_CHIPS.map((chip) => {
        const isActive = chip === active;
        return (
          <TouchableOpacity
            key={chip}
            onPress={() => onSelect(chip)}
            className={`px-5 py-2.5 rounded-full ${isActive ? "bg-primary" : "bg-white"}`}
            style={isActive ? undefined : {
              borderWidth: 1,
              borderColor: "rgba(132,77,116,0.15)",
            }}
          >
            <Text className={`text-sm ${isActive ? "text-white font-semibold" : "text-muted"}`}>
              {chip}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

// ─── Avatar Stack ─────────────────────────────────────────────────────────────
function AvatarStack({ avatars, extraBg }: { avatars: string[]; extraBg: string[] }) {
  return (
    <View className="flex-row">
      {avatars.slice(0, 3).map((uri, i) => (
        <View
          key={i}
          className="w-7 h-7 rounded-full overflow-hidden border-2 border-white"
          style={{ marginLeft: i === 0 ? 0 : -10, backgroundColor: extraBg[i] ?? "#e1c8f8" }}
        >
          <Image source={{ uri }} className="w-full h-full" resizeMode="cover" />
        </View>
      ))}
    </View>
  );
}

// ─── Partner Recruit Card ─────────────────────────────────────────────────────
type RecruitCardProps = {
  image: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  tags: string[];
  dDay: string;
  slots: number;
  avatars: string[];
  avatarBgs: string[];
};

function RecruitCard({
  image, badge, badgeColor, title, subtitle, tags, dDay, slots, avatars, avatarBgs,
}: RecruitCardProps) {
  return (
    <View
      className="bg-white rounded-[32px] overflow-hidden"
      style={{
        shadowColor: "rgba(51,50,56,0.06)",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 1,
        shadowRadius: 40,
        elevation: 6,
      }}
    >
      {/* 이미지 */}
      <View className="h-52 relative">
        <Image source={{ uri: image }} className="w-full h-full" resizeMode="cover" />
        {/* 배지 */}
        <View
          className="absolute top-4 left-4 rounded-full px-3 py-1"
          style={{ backgroundColor: badgeColor }}
        >
          <Text className="text-white text-[10px] font-bold tracking-widest uppercase">{badge}</Text>
        </View>
        {/* D-Day 칩 */}
        <View className="absolute top-4 right-4 bg-white/80 rounded-full px-3 py-1">
          <Text className="text-primary text-[10px] font-bold">{dDay}</Text>
        </View>
      </View>

      {/* 내용 */}
      <View className="p-5 gap-3">
        <View>
          <Text className="text-heading text-base font-bold leading-6">{title}</Text>
          <Text className="text-muted text-xs mt-1">{subtitle}</Text>
        </View>

        {/* 태그 */}
        <View className="flex-row flex-wrap gap-2">
          {tags.map((tag) => (
            <View key={tag} className="bg-muted-subtle rounded-full px-3 py-1">
              <Text className="text-muted text-[11px]">{tag}</Text>
            </View>
          ))}
        </View>

        {/* 하단: 아바타 + 남은 자리 + 버튼 */}
        <View className="flex-row items-center justify-between pt-1">
          <View className="flex-row items-center gap-2">
            <AvatarStack avatars={avatars} extraBg={avatarBgs} />
            <Text className="text-muted text-xs">{slots}자리 남음</Text>
          </View>
          <TouchableOpacity
            className="px-5 py-2.5 rounded-full"
            style={{ backgroundColor: "#844d74" }}
          >
            <Text className="text-white text-xs font-semibold">같이 가기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// ─── Partner Screen ───────────────────────────────────────────────────────────
export default function PartnerScreen() {
  const [activeFilter, setActiveFilter] = useState("전체");

  return (
    <View className="flex-1 bg-surface">
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <TopAppBar variant="title" title="팝업 파트너 구하기" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: 112, paddingBottom: 120, gap: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* 필터 칩 */}
        <FilterChipBar active={activeFilter} onSelect={setActiveFilter} />

        {/* 카드 리스트 */}
        <View className="px-6 gap-5">
          <RecruitCard
            image={IMG_POPUP1}
            badge="모집중"
            badgeColor="#844d74"
            title="이번주 토요일 오브제 마켓 같이 가실 분!"
            subtitle="성수동 • 11월 25일 오후 2시"
            tags={["#사진촬영", "#커피수다", "#20대"]}
            dDay="D-3"
            slots={2}
            avatars={[IMG_AVA1, IMG_AVA2, IMG_AVA3]}
            avatarBgs={["#e1c8f8", "#f9b4e1", "#fadaec"]}
          />
          <RecruitCard
            image={IMG_POPUP2}
            badge="마감임박"
            badgeColor="#a8364b"
            title="더현대 웨이팅 메이트 구해요 (사전예약 완료)"
            subtitle="더현대 서울 • 11월 26일 오전 11시"
            tags={["#웨이팅메이트", "#쇼핑", "#가이드가능"]}
            dDay="D-4"
            slots={1}
            avatars={[IMG_AVA2, IMG_AVA3]}
            avatarBgs={["#f9b4e1", "#e1c8f8"]}
          />
          <RecruitCard
            image={IMG_POPUP3}
            badge="모집중"
            badgeColor="#6b5780"
            title="글로우 뷰티 클로젯 팝업 동행 구해요"
            subtitle="청담동 • 11월 27일 오후 1시"
            tags={["#뷰티팝업", "#인스타감성", "#여성만"]}
            dDay="D-5"
            slots={3}
            avatars={[IMG_AVA1, IMG_AVA3]}
            avatarBgs={["#fadaec", "#e1c8f8"]}
          />
        </View>
      </ScrollView>

      <FAB icon="✍️" bottom={96} />
      <BottomNavBar activeTab="community" onTabPress={() => {}} />
    </View>
  );
}
