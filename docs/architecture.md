# Popble 아키텍처

## 디렉토리 구조 (전체)

```
Popble/
├── docs/
│   ├── design-system.md
│   ├── architecture.md
│   ├── conventions.md
│   ├── screens.md
│   └── global-features.md      # 전역 기능 레지스트리
│
├── src/
│   ├── screens/              # 화면 컴포넌트 (1파일 = 1화면)
│   │   ├── HomeScreen.tsx    ✅ 완료
│   │   ├── MapScreen.tsx
│   │   ├── CommunityScreen.tsx
│   │   ├── ReviewScreen.tsx
│   │   ├── PartnerScreen.tsx
│   │   ├── ReviewArchiveScreen.tsx
│   │   └── CommunityMainScreen.tsx
│   │
│   ├── components/           # 재사용 컴포넌트
│   │   ├── common/           # 앱 전반 공통
│   │   │   ├── TopAppBar.tsx
│   │   │   ├── BottomNavBar.tsx
│   │   │   └── FAB.tsx
│   │   ├── navigation/       # 하단 네비게이션/탭 아이템/인디케이터
│   │   │   ├── BottomNavBar.tsx
│   │   │   ├── BottomNavItem.tsx
│   │   │   └── BottomNavIndicator.tsx
│   │   ├── cards/            # 카드 컴포넌트
│   │   │   ├── TrendingCard.tsx
│   │   │   ├── ComingSoonCard.tsx
│   │   │   ├── ClosingItem.tsx
│   │   │   ├── MateCard.tsx
│   │   │   ├── ReviewCard.tsx
│   │   │   └── PartnerCard.tsx
│   │   ├── sections/         # 화면 섹션 단위 위젯
│   │   │   ├── HomeSearchSection.tsx
│   │   │   ├── TrendingSection.tsx
│   │   │   └── ReviewOverviewSection.tsx
│   │   └── ui/               # 기본 UI 요소
│   │       ├── Chip.tsx
│   │       ├── Badge.tsx
│   │       └── SearchBar.tsx
│   │
│   ├── global/
│   │   ├── navigation/
│   │   │   ├── tabConfig.ts
│   │   │   └── useBottomNavAnimation.ts
│   │   ├── app/
│   │   │   └── appShell.ts
│   │   └── registry/
│   │       └── featureRegistry.ts
│   │
│   ├── constants/
│   │   ├── colors.ts         # 색상 상수 (tailwind 토큰과 동기화)
│   │   └── layout.ts         # 고정 크기 상수
│   │
│   ├── types/
│   │   └── index.ts          # 공통 타입 정의
│   │
│   └── navigation/           # (Expo Router 도입 후)
│       └── index.tsx
│
├── assets/
│   ├── fonts/                # 커스텀 폰트
│   ├── icons/                # SVG 아이콘
│   └── images/               # 로컬 이미지
│
├── App.tsx
├── global.css
├── tailwind.config.js
├── metro.config.js
├── babel.config.js
├── app.json
└── tsconfig.json
```

---

## 화면 컴포넌트 구조 패턴

각 화면 파일은 다음 구조를 따른다:

```tsx
// 1. imports
import React from "react";
import { View, Text, ScrollView } from "react-native";

// 2. 타입 정의
type CardProps = { title: string; ... };

// 3. 서브 컴포넌트 (화면 전용, 재사용 없는 것)
function SectionHeader({ title }: { title: string }) { ... }
function CardItem({ title }: CardProps) { ... }

// 4. 화면 컴포넌트 (파일 맨 아래, export default)
export default function HomeScreen() {
  return (
    <View className="flex-1 bg-surface">
      ...
    </View>
  );
}
```

재사용 가능성이 있는 컴포넌트는 `src/components/`로 분리한다.

---

## 위젯 / 파일 분리 원칙

Popble은 화면 파일을 "조립", 위젯 파일을 "표현", global/hook 파일을 "행동"으로 분리한다.

- `src/screens/*Screen.tsx`: 화면 레이아웃 조립, 화면 진입 상태 연결, 섹션 배치만 담당
- `src/components/sections/`: 화면의 큰 섹션 1개 단위로 분리
- `src/components/cards/`: 리스트/그리드에서 반복되는 카드 단위로 분리
- `src/components/ui/`: 칩, 배지, 검색창처럼 작은 공통 요소로 분리
- `src/components/navigation/`: 하단 네비게이션처럼 앱 전반에서 반복되는 내비게이션 UI
- `src/global/`: 전역 설정, 애니메이션 로직, 탭 설정, 앱 셸처럼 여러 화면이 공유하는 동작

다음 조건 중 하나라도 만족하면 파일을 분리한다.

- 화면 파일이 150줄을 넘기기 시작할 때
- 화면 내부 서브 컴포넌트가 3개 이상일 때
- 애니메이션, 타이머, `useEffect`, 제스처 로직이 들어갈 때
- 같은 UI가 2개 이상 화면에서 반복될 때
- `map()`으로 반복되는 카드/아이템이 있을 때
- mock data, 탭 설정, 필터 설정이 화면 파일 안에서 길어질 때

화면 파일의 목표는 "섹션 이름만 읽히는 조립 코드"를 유지하는 것이다.

예시:

- `HomeScreen.tsx`: `HomeSearchSection`, `MapBannerSection`, `TrendingSection`, `ComingSoonSection`만 조립
- `TrendingSection.tsx`: 섹션 제목, 수평 스크롤, 카드 목록 연결 담당
- `TrendingCard.tsx`: 카드 1장 렌더링만 담당
- `useBottomNavAnimation.ts`: 하단 네비 애니메이션 값과 전환 로직 담당

---

## 레이아웃 패턴

### 기본 화면 레이아웃

```tsx
<View className="flex-1 bg-surface">
  <StatusBar ... />
  <TopAppBar />                    {/* absolute, z-10 */}

  <ScrollView
    className="flex-1"
    contentContainerStyle={{ paddingTop: 96, paddingBottom: 120, gap: 32 }}
    showsVerticalScrollIndicator={false}
  >
    <View className="px-4 gap-8">
      {/* 섹션들 */}
    </View>
  </ScrollView>

  <FAB />                          {/* absolute bottom-24 right-4, z-20 */}
  <BottomNavBar />                 {/* absolute bottom-0, z-10 */}
</View>
```

### 수평 스크롤 섹션

```tsx
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ gap: 16 }}
>
  {items.map(item => <Card key={item.id} {...item} />)}
</ScrollView>
```

### 섹션 헤더 패턴

```tsx
<View className="flex-row items-end justify-between">
  <Text className="text-heading text-xl font-semibold tracking-tight">
    섹션 제목
  </Text>
  <TouchableOpacity>
    <Text className="text-primary text-xs">전체보기</Text>
  </TouchableOpacity>
</View>
```

---

## 하단 네비게이션 분리 기준

하단 네비게이션은 단순 공통 컴포넌트가 아니라 앱 전역 인터랙션으로 취급한다.

권장 구조:

```tsx
src/components/navigation/BottomNavBar.tsx
src/components/navigation/BottomNavItem.tsx
src/components/navigation/BottomNavIndicator.tsx
src/global/navigation/tabConfig.ts
src/global/navigation/useBottomNavAnimation.ts
```

규칙:

- 화면은 `activeTab`, `onTabPress` 같은 최소 props만 전달한다
- 탭 순서, 라벨, 아이콘은 `tabConfig.ts` 한 곳에서 관리한다
- indicator 이동, show/hide, bounce, scale 같은 애니메이션 계산은 hook으로 분리한다
- safe area, blur, shadow, floating layout은 `BottomNavBar.tsx`가 소유한다
- 탭 아이템 렌더링은 `BottomNavItem.tsx`로 분리해 탭 추가/변경 시 영향 범위를 줄인다

---

## 내비게이션 계획

현재: 단일 화면 (App.tsx → HomeScreen)
목표: Expo Router 파일 기반 라우팅

```
app/
├── (tabs)/
│   ├── index.tsx        ← 홈
│   ├── map.tsx          ← 지도
│   ├── community.tsx    ← 커뮤니티
│   ├── saved.tsx        ← 저장
│   └── profile.tsx      ← 마이
├── popup/[id].tsx       ← 팝업 상세
├── review/[id].tsx      ← 리뷰 상세
└── _layout.tsx
```

Expo Router 도입 시 `src/screens/` 파일들을 `app/` 으로 이동.

---

## 글로벌 기능 관리

글로벌 기능은 `src/global/`와 `docs/global-features.md`에서 함께 관리한다.

글로벌 기능으로 분류하는 기준:

- 2개 이상 화면에서 공유되는 상태/동작
- 앱 루트에서 초기화되거나 종료될 때 정리해야 하는 기능
- 탭/라우팅/오버레이/토스트/인증/테마/트래킹처럼 앱 전반에 영향을 주는 기능
- 한 화면의 수정이 다른 화면 동작을 바꿀 수 있는 기능

운영 규칙:

- 기능마다 진입 파일(entry) 1개를 둔다
- 화면은 global 내부 구현 파일을 직접 참조하지 않고 entry만 import 한다
- 기능 추가/수정 시 `docs/global-features.md` 레지스트리를 함께 업데이트한다
- 전역 설정값은 화면 파일 안에 하드코딩하지 않고 `src/global/` 또는 `src/constants/`에 둔다

---

## 상태 관리 계획

| 상태 종류 | 관리 방식 |
|-----------|-----------|
| UI 상태 (탭 선택 등) | `useState` |
| 서버 데이터 | React Query (추후 도입) |
| 전역 상태 (인증 등) | Zustand (추후 도입) |
| 폼 | React Hook Form (추후 도입) |

---

## 의존성 정책

- 패키지 추가 전 반드시 Expo SDK 54 호환성 확인
- `expo install` 우선 사용 (Expo가 관리하는 버전 자동 선택)
- peer dependency 충돌 시 `--legacy-peer-deps` 대신 원인 파악 후 해결
