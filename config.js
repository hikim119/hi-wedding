/**
 * Midnight Navy Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 배경음악 ──
  music: {
    enabled: true,           // 배경음악 사용 여부
    src: "images/bgm.mp3",   // 음악 파일 경로
    autoplay: true           // 첫 화면 터치 시 자동 재생 (브라우저 정책상 터치 전엔 재생 불가)
  },

  // ── 메인 (히어로) ──
  groom: {
    name: "문성현",
    nameEn: "Moon Sung Hyun",
    father: "문세진",
    mother: "김은경",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김혜인",
    nameEn: "Kim Hye In",
    father: "김광현",
    mother: "강연례",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-15",
    time: "11:00",
    venue: "수원 더시그너스 웨딩홀",
    hall: "(구 더케이)",
    address: "경기 수원시 팔달구 권광로 178 한국교직원공제회 경기회관 2층",
    tel: "031-224-2030"
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "가장 특별한 여행의 시작",
    content: "아이슬란드로 떠난 여행에서\n우리는 우연히 같은 길을 걷게 되었습니다.\n\n잠시의 인연일 줄 알았던 만남은\n계절을 지나 사랑이 되었고,\n이제는 함께 인생이라는 긴 여행을 떠나려 합니다."
  },

  // ── 오시는 길 ──
  mapLinks: {
    kakao: "https://kko.to/5i-T3SnWnX",
    naver: "https://naver.me/GIIT5HnQ"
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "문성현", bank: "케이뱅크", number: "100-130-160180" },
      { role: "아버지", name: "문세진", bank: "국민은행", number: "471-210-037465" },
      { role: "어머니", name: "김은경", bank: "국민은행", number: "113-210-835529" }
    ],
    bride: [
      { role: "신부", name: "김혜인", bank: "국민은행", number: "479402-04-414731" },
      { role: "아버지", name: "김광현", bank: "케이뱅크", number: "100-127-825419" },
      { role: "어머니", name: "강연례", bank: "기업은행", number: "251-013415-03-014" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "문성현 ♥ 김혜인 결혼합니다",
    description: "2026년 11월 15일, 소중한 분들을 초대합니다."
  }
};
