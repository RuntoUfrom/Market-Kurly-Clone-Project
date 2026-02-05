export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg-primary", "text-primary", "border-primary"],
  theme: {
    extend: {
      colors: {
        primary: "#5F0080", //메인 (마켓컬리 보라색)
      },
      fontSize: {
        10: "10px",
        15: "15px",
        17: "17px",
      },
      fontFamily: {
        sans: ["Pretendard", "Roboto", "AppleSDGothicNeo", "sans-serif"],
      },
      screens: {
        "max-xs": { max: "360px" },
        "mini-mobile": { max: "400px" },
      },
    },
  },
  plugins: [],
};
//TailWind CSS 설정 파일 - 커스텀 색상/폰트/화면 크기 등을 정의
