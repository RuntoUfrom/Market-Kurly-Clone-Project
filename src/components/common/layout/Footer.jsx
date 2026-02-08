const Footer = () => {
  return (
    <footer className="w-full bg-[#f7f7f7] px-5 py-8 text-xs text-gray-500 leading-relaxed">
      {/* 상단 링크 */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-gray-600">
        <span>회사소개</span>
        <span>이용안내</span>
        <span>배송안내</span>
        <span>자주하는 질문</span>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-gray-600 mt-2">
        <span>공지사항</span>
        <span>투자정보</span>
        <span>인재채용</span>
        <span>이용약관</span>
        <span className="font-bold text-gray-800">개인정보처리방침</span>
      </div>

      {/* SNS 아이콘 */}
      <div className="flex gap-3 mt-5">
        <SnsIcon color="#d63384" label="Instagram">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </SnsIcon>
        <SnsIcon color="#1877f2" label="Facebook">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </SnsIcon>
        <SnsIcon color="#00c73c" label="Blog">
          <text x="12" y="17" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">B</text>
        </SnsIcon>
        <SnsIcon color="#ff0000" label="YouTube">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </SnsIcon>
      </div>

      {/* 고객행복센터 */}
      <div className="mt-6">
        <p className="text-[13px] text-gray-600 font-semibold">고객행복센터</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">1644-1107</p>
        <p className="mt-2">월~토요일 | 오전 7시 - 오후 6시</p>
        <p>
          카카오톡 <span className="font-semibold text-gray-700">@컬리</span>{" "}
          친구 추가하고 소식과 혜택을 받아보세요.
        </p>
      </div>

      {/* 회사 정보 */}
      <div className="mt-6 leading-5">
        <p>주식회사 컬리 | 대표자 : 김슬아</p>
        <p>
          사업자등록번호 : 261-81-23567{" "}
          <span className="text-primary font-semibold">사업자정보 확인</span>
        </p>
        <p>통신판매업 : 제 2018-서울강남-01646 호</p>
        <p>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)</p>
      </div>

      {/* 채용/팩스/이메일 */}
      <div className="mt-6 leading-5">
        <p>
          채용문의 :{" "}
          <span className="text-primary font-semibold">
            recruit@kurlycorp.com
          </span>
        </p>
        <p>
          팩스 : 070-7500-6098 | 이메일 :{" "}
          <span className="text-primary font-semibold">
            help@kurlycorp.com
          </span>
        </p>
        <p>
          대량주문 문의 :{" "}
          <span className="text-primary font-semibold">대량주문 문의하기</span>
        </p>
      </div>

      {/* 인증마크 */}
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="min-w-[50px] text-[10px] font-bold text-gray-600 border border-gray-400 rounded px-1 py-1 text-center leading-tight">
            <div>ISMS</div>
          </div>
          <div className="leading-4">
            <p>[인증범위] 컬리 쇼핑몰 서비스 개발·운영</p>
            <p>(심사받지 않은 물리적 인프라 제외)</p>
            <p>[유효기간] 2025.01.15 ~ 2028.01.14</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="min-w-[50px] text-[10px] font-bold text-gray-600 border border-gray-400 rounded px-1 py-1 text-center leading-tight">
            <div>우리은행</div>
          </div>
          <div className="leading-4">
            <p>
              당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증
              계약을 체결하여 안전거래를 보장하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SnsIcon = ({ color, label, children }) => {
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
      style={{ backgroundColor: color }}
      aria-label={label}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-5 h-5"
      >
        {children}
      </svg>
    </div>
  );
};

export default Footer;