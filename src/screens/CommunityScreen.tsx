import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import TopAppBar from "../components/common/TopAppBar";
import BottomNavBar from "../components/common/BottomNavBar";
import FAB from "../components/common/FAB";
import CommunityRecruitSection from "../components/sections/community/CommunityRecruitSection";
import CommunityExchangeSection from "../components/sections/community/CommunityExchangeSection";
import CommunityFeedSection from "../components/sections/community/CommunityFeedSection";
import type { MateCardProps } from "../components/cards/community/MateCard";
import type { ExchangeItemProps } from "../components/cards/community/ExchangeItem";
import type { TipFeedCardProps } from "../components/cards/community/TipFeedCard";
import type { AppScreenProps } from "../global/navigation/appRoutes";

const recruitItems: MateCardProps[] = [
  {
    avatar:
      "https://www.figma.com/api/mcp/asset/373b69f5-28d7-4868-9ed2-9f05006d1247",
    avatarBg: "#e1c8f8",
    name: "민지",
    location: "성수동 • 10분 전",
    status: "모집중",
    title: "이번주 토요일 오브제 팝업 같이 가실 분! 💜",
    tags: ["#사진촬영", "#커피수다"],
  },
  {
    avatar:
      "https://www.figma.com/api/mcp/asset/0bce280c-eaac-4f60-bd1f-12148213636c",
    avatarBg: "#f9b4e1",
    name: "소희",
    location: "더현대 • 1시간 전",
    status: "모집중",
    title: "웨이팅 같이 해주실 메이트 찾아요 (사전예약 완료)",
    tags: ["#웨이팅메이트", "#20대"],
  },
];

const exchangeItems: ExchangeItemProps[] = [
  {
    image:
      "https://www.figma.com/api/mcp/asset/3f4fe28c-7983-42c5-8d21-ad56290ec1ee",
    label: "교환 희망",
    title: "한정판 라벤더 키링",
    time: "3분 전",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/fc635ec2-53e3-43ed-be4b-9c0ea133c505",
    label: "교환 희망",
    title: "글라스 머그컵 세트",
    time: "12분 전",
  },
];

const feedItems: TipFeedCardProps[] = [
  {
    accentColor: "#844d74",
    categoryIcon: "⏱",
    category: "현재 대기 2시간 이상",
    body:
      "지금 성수 브랜드 팝업 현장입니다. 대기줄 진짜 길어요! 현장 예약 벌써 마감 분위기니 참고하세요.",
    timestamp: "익명 • 2분 전",
    likes: 8,
  },
  {
    accentColor: "#6b5780",
    categoryIcon: "💡",
    category: "방문 꿀팁",
    body:
      "지하 1층 포토존보다 2층 루프탑 전시가 훨씬 사진 잘 나와요! 사람이 2층에는 별로 없네요.",
    timestamp: "익명 • 15분 전",
    likes: 3,
  },
];

export default function CommunityScreen({
  activeTab,
  onOpenMenu,
  onTabPress,
}: AppScreenProps) {
  return (
    <View className="flex-1 bg-surface">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <TopAppBar
        variant="title"
        title="커뮤니티 피드"
        rightIcon="sparkles-outline"
        onLeftPress={onOpenMenu}
      />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: 96, paddingBottom: 120, gap: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <CommunityRecruitSection items={recruitItems} />
        <CommunityExchangeSection items={exchangeItems} />
        <CommunityFeedSection items={feedItems} />
      </ScrollView>

      <FAB bottom={96} />
      <BottomNavBar activeTab={activeTab} onTabPress={onTabPress} />
    </View>
  );
}
