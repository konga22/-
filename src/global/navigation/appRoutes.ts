import type { ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { TabName } from "./tabConfig";

type IoniconName = ComponentProps<typeof Ionicons>["name"];

export type AppRoute =
  | TabName
  | "community-feed"
  | "review"
  | "partner";

export type AppScreenProps = {
  activeTab: TabName;
  onOpenMenu: () => void;
  onNavigate: (route: AppRoute) => void;
  onTabPress: (tab: TabName) => void;
};

export type MenuRouteItem = {
  route: AppRoute;
  label: string;
  description: string;
  icon: IoniconName;
};

export const PRIMARY_MENU_ITEMS: MenuRouteItem[] = [
  {
    route: "home",
    label: "홈",
    description: "메인 팝업 큐레이션과 추천을 봅니다.",
    icon: "home-outline",
  },
  {
    route: "map",
    label: "지도",
    description: "내 주변 팝업을 지도 기반으로 탐색합니다.",
    icon: "map-outline",
  },
  {
    route: "community",
    label: "커뮤니티",
    description: "실시간 인기글과 커뮤니티 흐름을 확인합니다.",
    icon: "chatbubble-ellipses-outline",
  },
  {
    route: "saved",
    label: "저장",
    description: "찜한 팝업과 다시 볼 항목을 모아봅니다.",
    icon: "bookmark-outline",
  },
  {
    route: "profile",
    label: "마이",
    description: "내 활동, 설정, 알림 상태를 확인합니다.",
    icon: "person-outline",
  },
];

export const DISCOVERY_MENU_ITEMS: MenuRouteItem[] = [
  {
    route: "community-feed",
    label: "커뮤니티 피드",
    description: "모집, 교환, 팁 피드 중심 화면으로 이동합니다.",
    icon: "newspaper-outline",
  },
  {
    route: "review",
    label: "리뷰 & 별점",
    description: "에디토리얼 리뷰와 평점 화면으로 이동합니다.",
    icon: "star-outline",
  },
  {
    route: "partner",
    label: "팝업 파트너",
    description: "동행 모집과 파트너 찾기 화면으로 이동합니다.",
    icon: "people-outline",
  },
];

export function getActiveTab(route: AppRoute): TabName {
  switch (route) {
    case "community-feed":
    case "partner":
    case "review":
      return "community";
    default:
      return route;
  }
}
