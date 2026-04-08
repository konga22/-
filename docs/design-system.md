# Popble 디자인 시스템

피그마 파일 기준. 모든 값은 `tailwind.config.js`에 토큰으로 등록되어 있음.

---

## 색상 팔레트

### Primary (브랜드 컬러)
| 토큰 | 헥스 | 용도 |
|------|------|------|
| `primary` | `#844d74` | 주요 액션, 로고, 강조 |
| `primary-light` | `#fadaec` | 활성 탭 배경, 칩 배경 |
| `primary-dark` | `#774167` | 카테고리 레이블, 보조 강조 |

### Lavender (보조 컬러)
| 토큰 | 헥스 | 용도 |
|------|------|------|
| `lavender` | `#e1c8f8` | D-Day 뱃지, 트렌딩 칩 |
| `lavender-dark` | `#5f4b73` | 라벤더 배경 위 텍스트 |

### Surface (배경)
| 토큰 | 헥스 | 용도 |
|------|------|------|
| `surface` | `#fcf8fc` | 앱 전체 배경 |
| `surface-secondary` | `#f6f2f8` | 카드 배경, 종료임박 아이템 |
| `muted-subtle` | `#eae7ed` | 검색바 배경, 비활성 칩 |

### Text
| 토큰 | 헥스 | 용도 |
|------|------|------|
| `heading` | `#333238` | 제목, 강조 텍스트 |
| `muted` | `#605e65` | 본문, 서브 텍스트 |
| `urgent` | `#a8364b` | 마감 임박, 경고 |
| white | `#ffffff` | 배너 위 텍스트 |

### 투명도 활용
```
rgba(252,248,252,0.85)  — TopAppBar / BottomNavBar 반투명 배경
rgba(132,77,116,0.45)   — 배너 그라디언트 오버레이
rgba(179,177,184,0.1)   — 카드 테두리 (subtle border)
rgba(249,115,134,0.2)   — 긴급 뱃지 배경
```

---

## 타이포그래피

### 폰트 패밀리
| 용도 | 폰트 | 비고 |
|------|------|------|
| 브랜드 로고 | YM Move Sans Bold | `Popble` 워드마크 전용 |
| 앱 기본 텍스트 | Moneygraphy Rounded | 본문, 버튼, 네비게이션, 카드 텍스트 기본값 |
| 확장 후보 | YM Move Sans Medium / Light | 추후 브랜드 강조 구간 확장 시 사용 가능 |

> Expo에서 커스텀 폰트 사용 시 `expo-font` + `useFonts` 훅 사용
> 현재 Tailwind 토큰은 `font-sans`를 일반 텍스트, `font-brand`를 로고 전용으로 사용

### 텍스트 스케일
| 역할 | 크기 | Line Height | 클래스 예시 |
|------|------|-------------|-------------|
| 로고 | 24px | 32px | `text-2xl font-bold italic` |
| 섹션 헤딩 | 20px | 28px | `text-xl font-semibold tracking-tight` |
| 카드 타이틀 | 16px | 24px | `text-base` |
| 카드 서브 | 14px | 20px | `text-sm font-semibold` |
| 카테고리 레이블 | 11px | 16.5px | `text-[11px] font-bold tracking-widest uppercase` |
| 캡션 / 날짜 | 12px | 16px | `text-xs` |
| 네비 레이블 | 10px | 15px | `text-[10px]` |

---

## 스페이싱 시스템

### 페이지 레이아웃
```
수평 패딩:     px-4 (16px)
섹션 간격:     gap-8 (32px)  ← ScrollView contentContainerStyle
컴포넌트 내부: gap-4 (16px)
아이템 간격:   gap-3 (12px)
```

### 고정 크기 컴포넌트
| 컴포넌트 | 크기 |
|----------|------|
| TopAppBar | h-16 (64px) |
| BottomNavBar | pb-6 (하단 safe area 포함 ~95px) |
| FAB | w-14 h-14 (56×56px) |
| 검색바 | h-16 (64px) |
| 필터 칩 | h-10 (40px), px-4 py-1.5 |
| 아바타 (큰) | 48×48px |
| 아바타 (중간) | 40×40px |
| 썸네일 (소) | 64×64px |

### 카드 패턴
```
트렌딩 카드:    w-[260px], 이미지 h-[325px], rounded-[32px]
커밍순 카드:    w-[200px] h-[264px], 이미지 174×174, rounded-[32px]
파트너 카드:    w-full, 이미지 full-width h-[256px]
종료임박 아이템: rounded-[32px] p-3, 썸네일 64×64
```

---

## 모서리 반지름 (Border Radius)

| 용도 | 값 | 클래스 |
|------|----|--------|
| 카드 (대) | 32px | `rounded-[32px]` |
| 카드 (중) | 24px | `rounded-[24px]` |
| 버튼 / 칩 | 9999px (pill) | `rounded-full` |
| 뱃지 | 16px | `rounded-2xl` |
| 검색바 | 9999px | `rounded-full` |
| 네비바 상단 | 32px | `rounded-tl-[32px] rounded-tr-[32px]` |

---

## 그림자

```tsx
// 카드 기본
shadow-md  →  { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 6 }

// 네비바 / 탑바
shadow-lg  →  위쪽 방향 그림자

// FAB
shadow-xl + style={{ shadowColor: '#844d74', shadowOpacity: 0.25 }}
```

---

## 그라디언트 패턴

```tsx
// 배너 오버레이 (26도)
background: linear-gradient(26deg, rgba(132,77,116,0.8) 0%, rgba(132,77,116,0) 100%)

// FAB
background: linear-gradient(45deg, #844d74 0%, #f9b4e1 100%)
```

React Native에서는 `expo-linear-gradient` 사용:
```tsx
import { LinearGradient } from "expo-linear-gradient";
<LinearGradient colors={["#844d74", "#f9b4e1"]} start={{x:0,y:1}} end={{x:1,y:0}} />
```

---

## 블러 효과

TopAppBar, BottomNavBar의 반투명 배경:
- iOS: `expo-blur` `BlurView` intensity=60
- Android: 반투명 배경으로 대체 (`bg-[rgba(252,248,252,0.95)]`)

---

## 아이콘 가이드라인

피그마의 아이콘은 SVG 벡터. 구현 시:
- `@expo/vector-icons` (Ionicons, MaterialIcons) 우선 사용
- 브랜드 전용 아이콘은 `assets/icons/` SVG + `react-native-svg`

| 위치 | 권장 아이콘 셋 |
|------|---------------|
| 네비게이션 | Ionicons |
| 액션 버튼 | MaterialIcons |
| 뱃지/상태 | 인라인 이모지 (임시) → SVG로 교체 |
