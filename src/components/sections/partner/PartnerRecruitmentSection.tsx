import React, { useState } from "react";
import { View } from "react-native";
import PartnerFilterChipBar from "./PartnerFilterChipBar";
import PartnerRecruitCard from "../../cards/partner/PartnerRecruitCard";

const IMG_POPUP1 =
  "https://www.figma.com/api/mcp/asset/8b2a0df8-3a42-4cdb-aeae-3ca87d6444b2";
const IMG_POPUP2 =
  "https://www.figma.com/api/mcp/asset/b8b6a57b-3507-43f5-86ac-3b186f73bc7b";
const IMG_POPUP3 =
  "https://www.figma.com/api/mcp/asset/ae2eb6f8-3045-4807-9d6e-e83776cf6c3f";
const IMG_AVA1 =
  "https://www.figma.com/api/mcp/asset/f0d3f592-0000-0000-0000-000000000000";
const IMG_AVA2 =
  "https://www.figma.com/api/mcp/asset/7c34df57-0000-0000-0000-000000000000";
const IMG_AVA3 =
  "https://www.figma.com/api/mcp/asset/75987562-0000-0000-0000-000000000000";

export default function PartnerRecruitmentSection() {
  const [activeFilter, setActiveFilter] = useState("전체");

  return (
    <View className="gap-24">
      <PartnerFilterChipBar active={activeFilter} onSelect={setActiveFilter} />

      <View className="px-6 gap-5">
        <PartnerRecruitCard
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
        <PartnerRecruitCard
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
        <PartnerRecruitCard
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
    </View>
  );
}
