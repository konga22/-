export type GlobalFeature = {
  id: string;
  description: string;
  ownedBy: string[];
  scope: "app" | "navigation" | "theme" | "overlay";
};

export const FEATURE_REGISTRY: GlobalFeature[] = [
  {
    id: "bottom-navigation",
    description:
      "앱 전역 하단 네비게이션 UI, 탭 설정, 활성 탭 애니메이션을 관리한다.",
    ownedBy: [
      "src/components/navigation/BottomNavBar.tsx",
      "src/components/navigation/BottomNavItem.tsx",
      "src/components/navigation/BottomNavIndicator.tsx",
      "src/global/navigation/tabConfig.ts",
      "src/global/navigation/useBottomNavAnimation.ts",
    ],
    scope: "navigation",
  },
  {
    id: "top-app-bar",
    description:
      "앱 전반에서 재사용하는 상단 앱 바의 logo/title/back 변형을 관리한다.",
    ownedBy: ["src/components/common/TopAppBar.tsx"],
    scope: "navigation",
  },
  {
    id: "typography",
    description:
      "브랜드 로고 폰트와 기본 텍스트 폰트 로딩, 공통 텍스트 위젯을 관리한다.",
    ownedBy: [
      "App.tsx",
      "tailwind.config.js",
      "src/components/ui/AppText.tsx",
    ],
    scope: "theme",
  },
];
