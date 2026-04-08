# Popble 글로벌 기능 레지스트리

이 문서는 "앱 전역에서 공유되는 기능"이 어디에 있어야 하는지 기록하는 기준 문서다.

목적:

- 화면 파일 안에서 전역 기능이 흩어지는 것을 막는다
- 어떤 기능이 글로벌인지 빠르게 판단할 수 있게 한다
- 구현 전에 파일 위치와 책임을 먼저 정리해 기능이 꼬이지 않게 한다

---

## 글로벌 기능으로 분류하는 기준

아래 중 하나라도 만족하면 글로벌 기능으로 본다.

- 2개 이상 화면에서 같은 상태나 동작을 공유한다
- 앱 루트에서 초기화되거나 정리되어야 한다
- 내비게이션, 탭, 인증, 모달, 토스트, 테마처럼 앱 전체 UX에 영향을 준다
- 한 화면 수정이 다른 화면 동작까지 바꿀 가능성이 있다

---

## 작성 규칙

- 글로벌 기능은 `src/global/` 또는 `src/constants/` 아래에 둔다
- 기능마다 진입 파일(entry)을 1개 둔다
- 화면에서는 내부 구현 파일이 아니라 entry만 import 한다
- 새 글로벌 기능을 만들면 이 문서의 레지스트리 표를 반드시 갱신한다
- 전역 설정값은 화면 파일 안에 하드코딩하지 않는다

---

## 권장 폴더 예시

```tsx
src/
├── global/
│   ├── navigation/
│   │   ├── tabConfig.ts
│   │   └── useBottomNavAnimation.ts
│   ├── app/
│   │   └── appShell.ts
│   ├── overlay/
│   │   ├── modalManager.ts
│   │   └── toastManager.ts
│   └── analytics/
│       └── tracking.ts
├── constants/
│   ├── colors.ts
│   ├── layout.ts
│   └── spacing.ts
```

---

## 레지스트리

| 기능명 | 범위 | 권장 위치 | 현재 상태 | 설명 |
|------|------|------|------|------|
| Bottom Navigation | 앱 전역 | `src/components/navigation/`, `src/global/navigation/` | 분리 필요 | 탭 UI, 탭 설정, 애니메이션 로직을 분리해 관리 |
| Top App Bar Preset | 앱 전역 | `src/components/common/TopAppBar.tsx`, `src/global/navigation/` | 일부 적용 | 화면별 title/back/logo 패턴을 공통 규칙으로 유지 |
| Theme Tokens | 앱 전역 | `tailwind.config.js`, `src/constants/colors.ts` | 일부 적용 | 색상/레이아웃/타이포 토큰을 화면 밖에서 관리 |
| Layout Constants | 앱 전역 | `src/constants/layout.ts` | 미구현 | safe area, top bar, FAB, nav height 같은 고정값 관리 |
| Route / Tab Config | 앱 전역 | `src/global/navigation/tabConfig.ts` | 미구현 | 탭 순서, 라벨, 아이콘, route 매핑을 한 곳에서 관리 |
| Modal / Toast Manager | 앱 전역 | `src/global/overlay/` | 미구현 | 전역 알림/오버레이 제어 |
| Analytics / Tracking | 앱 전역 | `src/global/analytics/tracking.ts` | 미구현 | 화면 진입, 탭 클릭, CTA 추적 |

---

## 현재 프로젝트 기준 메모

- 현재 `BottomNavBar`는 공통 컴포넌트로는 분리되어 있지만, 애니메이션 확장 기준으로는 아직 더 쪼개는 것이 좋다
- 현재 여러 화면이 섹션/카드/아이템 위젯을 화면 파일 안에 같이 들고 있어, 기능이 커질수록 꼬일 가능성이 있다
- 앞으로는 "화면은 조립", "위젯은 표현", "global은 공유 동작" 원칙을 기본값으로 삼는다
