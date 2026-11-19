import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { HOTLINK_ASSETS, NavigateFn } from '../types';

interface FaceFitPageProps {
  onNavigate: NavigateFn;
}

export const FaceFitPage: React.FC<FaceFitPageProps> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAFBF8] text-[#1F2937] min-h-screen flex flex-col relative selection:bg-[#C7F36B] selection:text-[#202A24]">
      {/* Ambient background watercolor textures */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute -top-32 -left-20 w-[680px] h-[680px] rounded-full blur-sm opacity-40 mix-blend-multiply"
          style={{
            background:
              'radial-gradient(circle, rgba(199, 243, 107, 0.65) 0%, rgba(254, 249, 195, 0.45) 45%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-[1800px] -right-32 w-[720px] h-[720px] rounded-full blur-sm opacity-35 mix-blend-multiply"
          style={{
            background:
              'radial-gradient(circle, rgba(254, 249, 195, 0.6) 0%, rgba(193, 248, 100, 0.5) 45%, transparent 70%)',
          }}
        />
        <div className="absolute top-[680px] -left-36 w-[620px] h-[580px] mix-blend-multiply rotate-12 blur-sm opacity-60">
          <SafeImage decorative alt="" className="w-full h-full object-cover" src={HOTLINK_ASSETS.watercolorWash} />
        </div>
        <div className="absolute top-[1800px] -right-48 w-[680px] h-[640px] mix-blend-multiply -rotate-6 blur-sm scale-x-[-1] opacity-55">
          <SafeImage decorative alt="" className="w-full h-full object-cover" src={HOTLINK_ASSETS.watercolorWash} />
        </div>
        <div className="absolute top-[3100px] -left-40 w-[640px] h-[600px] mix-blend-multiply rotate-6 blur-sm opacity-55">
          <SafeImage decorative alt="" className="w-full h-full object-cover" src={HOTLINK_ASSETS.watercolorWash} />
        </div>
      </div>

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#E5E7EB]">
        <div className="h-16 max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="font-mono-code text-[15px] text-[#202A24] font-bold tracking-tight hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 cursor-pointer"
          >
            SEOYOUNG.KIM
          </button>

          <nav className="flex items-center gap-5 md:gap-8">
            <button
              type="button"
              onClick={() => onNavigate('/', 'about')}
              className="text-[#6B7280] hover:text-[#202A24] text-[14px] transition-colors py-1 whitespace-nowrap shrink-0 cursor-pointer"
            >
              소개
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/', 'skills')}
              className="text-[#6B7280] hover:text-[#202A24] text-[14px] transition-colors py-1 whitespace-nowrap shrink-0 cursor-pointer"
            >
              기술 스택
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/', 'projects')}
              className="text-[#202A24] font-semibold border-b-2 border-[#91B83C] text-[14px] transition-colors py-1 whitespace-nowrap shrink-0 cursor-pointer"
            >
              프로젝트
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/', 'contact')}
              className="text-[#6B7280] hover:text-[#202A24] text-[14px] transition-colors py-1 whitespace-nowrap shrink-0 cursor-pointer"
            >
              연락처
            </button>
          </nav>
        </div>
      </header>

      <main className="w-full pt-16 flex-1 relative">
        <div className="flex flex-col w-full">
          {/* HERO SECTION */}
          <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 pt-10 pb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <nav className="flex items-center gap-2 font-mono-code text-[13px] text-[#6B7280]">
                <button
                  type="button"
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#202A24] transition-colors cursor-pointer"
                >
                  SEOYOUNG.dev
                </button>
                <span>/</span>
                <button
                  type="button"
                  onClick={() => onNavigate('/', 'projects')}
                  className="hover:text-[#202A24] transition-colors cursor-pointer"
                >
                  projects
                </button>
                <span>/</span>
                <span className="text-[#202A24] font-semibold">facefit</span>
              </nav>

              {/* Quick Project Switcher */}
              <div className="flex items-center gap-1 p-1 rounded-lg bg-[#F3F5F1] border border-[#E5E7EB]">
                <button
                  type="button"
                  onClick={() => onNavigate('/projects/facefit')}
                  className="px-3 py-1 rounded-md text-xs font-mono-code font-bold bg-[#FFFFFF] text-[#202A24] shadow-xs cursor-pointer"
                >
                  01 FaceFit
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/projects/bbangbiseo')}
                  className="px-3 py-1 rounded-md text-xs font-mono-code font-medium text-[#6B7280] hover:text-[#202A24] cursor-pointer"
                >
                  02 빵비서
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/projects/nongdam')}
                  className="px-3 py-1 rounded-md text-xs font-mono-code font-medium text-[#6B7280] hover:text-[#202A24] cursor-pointer"
                >
                  03 농담
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7F36B]/40 border border-[#91B83C]/40 text-[#202A24] font-mono-code text-[12px] font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#91B83C] animate-pulse" />
                  AI INTERVIEW &amp; MULTI-MODAL FEEDBACK
                </div>
                <h1 className="text-[38px] md:text-[44px] text-[#202A24] font-bold tracking-tight leading-tight mb-3">
                  FaceFit
                </h1>
                <p className="text-[20px] md:text-[22px] text-[#202A24] font-semibold mb-3">
                  AI 기반 개인 맞춤형 모의면접 및 피드백 서비스
                </p>
                <p className="text-[16px] text-[#6B7280] leading-relaxed mb-6">
                  <strong className="text-[#202A24] font-semibold block mb-1">
                    사용자의 답변을 분석하고 개선 방향을 제시하는 AI 면접 코칭 플랫폼
                  </strong>
                  FaceFit은 취업준비생의 이력서, 자기소개서, 포트폴리오 및 채용 공고를 기반으로 맞춤형 면접 질문을 생성하는 서비스입니다. 사용자는 면접 질문에 영상으로 답변하며, AI는 답변 내용과 발화, 시선, 자세를 분석해 질문별 피드백과 개선 방향을 제공합니다.
                </p>
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  {['Java 21', 'Spring Boot', 'JPA', 'PostgreSQL', 'React', 'Python'].map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] font-mono-code text-[12px] font-medium text-[#202A24]"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#F3F5F1] border border-[#E5E7EB] font-mono-code text-[12px] font-medium text-[#6B7280]">
                    <span className="material-symbols-outlined text-[14px] mr-1">lock</span>Private Repository
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] text-[#202A24] text-[14px] font-semibold hover:border-[#91B83C] hover:bg-[#FAFBF8] transition-all shadow-sm"
                    href="https://github.com/kasic2014/facefit_nw"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px] mr-2">terminal</span>
                    GitHub 저장소 (Private)
                  </a>
                  <button
                    type="button"
                    onClick={() => scrollTo('section-04')}
                    className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-[#C7F36B] text-[#202A24] text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px] mr-2">account_tree</span>
                    아키텍처 바로보기
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-[#FFFFFF] p-2 rounded-2xl border border-[#E5E7EB] shadow-md">
                  <div className="overflow-hidden rounded-xl bg-black relative">
                    <SafeImage
                      alt="FaceFit 실제 면접 진행 화면"
                      className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-300"
                      src={HOTLINK_ASSETS.facefitHeroScreen}
                      fallbackTitle="FaceFit 실제 면접 진행 화면"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#1F2937]/90 backdrop-blur-sm text-[#F3F5F1] text-[12px] font-mono-code px-3 py-1 rounded-md flex items-center gap-2 border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-[#C7F36B]" />
                      FaceFit 실제 면접 진행 화면
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="h-px w-full bg-[#E5E7EB]" />
          </div>

          {/* SECTION 01: Project Overview */}
          <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-14" id="section-01">
            <div className="mb-8">
              <span className="font-mono-code text-[13px] text-[#6B7280] uppercase tracking-wider">PROJECT METADATA</span>
              <h2 className="text-[26px] text-[#202A24] font-bold mt-1">01. 프로젝트 개요</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#6B7280] mb-3">
                  <span className="font-mono-code text-[12px] uppercase">Period</span>
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                </div>
                <div>
                  <div className="text-[13px] text-[#6B7280] mb-1">개발 기간</div>
                  <div className="text-[18px] text-[#202A24] font-bold">2026.07.20 ~ 2026.09.30</div>
                  <div className="font-mono-code text-[12px] text-[#91B83C] font-medium mt-1">약 2.5개월 집중 개발</div>
                </div>
              </div>
              <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#6B7280] mb-3">
                  <span className="font-mono-code text-[12px] uppercase">Team &amp; Size</span>
                  <span className="material-symbols-outlined text-[20px]">groups</span>
                </div>
                <div>
                  <div className="text-[13px] text-[#6B7280] mb-1">팀 구성 및 인원</div>
                  <div className="text-[18px] text-[#202A24] font-bold">팀명 FaFi (5명)</div>
                  <div className="font-mono-code text-[12px] text-[#6B7280] mt-1">기획·개발 협업 프로젝트</div>
                </div>
              </div>
              <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#6B7280] mb-3">
                  <span className="font-mono-code text-[12px] uppercase">Service Type</span>
                  <span className="material-symbols-outlined text-[20px]">devices</span>
                </div>
                <div>
                  <div className="text-[13px] text-[#6B7280] mb-1">서비스 형태</div>
                  <div className="text-[18px] text-[#202A24] font-bold">AI 기반 웹서비스</div>
                  <div className="font-mono-code text-[12px] text-[#6B7280] mt-1">맞춤형 질문 생성 &amp; 피드백</div>
                </div>
              </div>
              <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between text-[#6B7280] mb-3">
                  <span className="font-mono-code text-[12px] uppercase">Assigned Role</span>
                  <span className="material-symbols-outlined text-[20px]">person_check</span>
                </div>
                <div>
                  <div className="text-[13px] text-[#6B7280] mb-1">담당 역할</div>
                  <div className="text-[16px] text-[#202A24] font-bold">백엔드 API, DB, AI 연동</div>
                  <div className="font-mono-code text-[12px] text-[#91B83C] font-medium mt-1">
                    AI 비동기 연동, 미디어 접근 제어
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E7EB] shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#91B83C] text-[20px]">code_blocks</span>
                  <span className="font-mono-code text-[13px] font-bold text-[#202A24]">주요 기술 스택 및 저장소</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[13px]">
                  {['Java 21', 'Spring Boot', 'JPA', 'PostgreSQL', 'React', 'Python'].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-[#FAFBF8] border border-[#E5E7EB] font-mono-code text-[#202A24] font-medium"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 rounded-md bg-[#FAFBF8] border border-[#E5E7EB] font-mono-code text-[#4B6700] font-semibold">
                    Ncloud Object Storage
                  </span>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="h-px w-full bg-[#E5E7EB]" />
          </div>

          {/* SECTION 02: Problem & Service Flow */}
          <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-14" id="section-02">
            <div className="mb-8">
              <span className="font-mono-code text-[13px] text-[#6B7280] uppercase tracking-wider">
                BACKGROUND &amp; SERVICE FLOW
              </span>
              <h2 className="text-[26px] text-[#202A24] font-bold mt-1">02. 개발 배경 및 서비스 흐름</h2>
            </div>

            <div className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm mb-8">
              <div className="flex items-center gap-2 text-[#91B83C] font-mono-code text-[12px] font-bold mb-2">
                <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                개발 배경
              </div>
              <p className="text-[16px] text-[#202A24] leading-relaxed font-medium">
                혼자 면접을 준비하는 취업준비생은 지원 직무에 맞는 질문을 준비하거나 자신의 답변을 객관적으로 평가하기 어렵습니다. FaceFit은 질문 생성부터 면접 녹화, AI 분석, 피드백까지 하나의 서비스에서 제공해줍니다.
              </p>
            </div>

            <h3 className="text-[20px] text-[#202A24] font-bold mb-4">주요 기능</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                {
                  num: '01',
                  title: '맞춤형 면접 질문 생성',
                  desc: '지원 서류와 채용 공고를 활용한 직무별 맞춤형 면접 질문 생성',
                },
                {
                  num: '02',
                  title: '영상 기반 모의면접',
                  desc: '질문 음성 안내 및 실제 웹캠 환경에서의 사용자 답변 영상 녹화',
                },
                {
                  num: '03',
                  title: 'AI 다각도 분석',
                  desc: '답변 내용뿐 아니라 발화 음조, 시선 응시율, 상체 자세 흔들림 분석',
                },
                {
                  num: '04',
                  title: '근거 중심 피드백',
                  desc: '질문별 분석 결과와 명확한 근거 장면, 구체적인 개선 방향 제공',
                },
              ].map((feat) => (
                <div
                  key={feat.num}
                  className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#C7F36B]/40 text-[#202A24] flex items-center justify-center font-bold font-mono-code text-[13px] mb-3">
                      {feat.num}
                    </div>
                    <h4 className="font-bold text-[16px] text-[#202A24] mb-2">{feat.title}</h4>
                    <p className="text-[13px] text-[#6B7280] leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="font-mono-code text-[12px] text-[#91B83C] uppercase font-bold">END-TO-END FLOW</span>
                  <h4 className="text-[18px] text-[#202A24] font-bold mt-1">서비스 워크플로우 (Service Workflow)</h4>
                </div>
                <span className="font-mono-code text-[12px] text-[#6B7280] bg-[#F3F5F1] px-3 py-1 rounded-full border border-[#E5E7EB]">
                  6단계 순차 흐름
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { n: '1', t: '지원 자료 등록', s: '이력서·자소서·공고' },
                  { n: '2', t: '맞춤 질문 생성', s: '직무별 질문 도출' },
                  { n: '3', t: '면접 진행', s: '질문 음성 안내 청취' },
                  { n: '4', t: '답변 영상 제출', s: '영상 녹화 및 확정' },
                  { n: '5', t: 'AI 분석', s: '내용·발화·시선·자세' },
                  { n: '6', t: '피드백 리포트', s: '결과 및 개선 방향' },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="p-3.5 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] text-center flex flex-col items-center justify-center"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#C7F36B] text-[#202A24] font-mono-code text-[11px] font-bold flex items-center justify-center mb-2">
                      {step.n}
                    </span>
                    <div className="font-bold text-[14px] text-[#202A24]">{step.t}</div>
                    <div className="text-[11px] text-[#6B7280] mt-1">{step.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="h-px w-full bg-[#E5E7EB]" />
          </div>

          {/* SECTION 03: My Role & Technology Stack */}
          <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-14" id="section-03">
            <div className="mb-8">
              <span className="font-mono-code text-[13px] text-[#6B7280] uppercase tracking-wider">
                ROLE &amp; TECHNOLOGY STACK
              </span>
              <h2 className="text-[26px] text-[#202A24] font-bold mt-1">03. 담당 역할 및 기술 스택</h2>
            </div>

            <div className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl border border-[#91B83C]/60 shadow-sm mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C7F36B]/40 font-mono-code text-[12px] font-bold text-[#202A24] mb-3">
                <span className="material-symbols-outlined text-[16px] text-[#91B83C]">verified</span>
                ASSIGNED ROLE &amp; OWNERSHIP
              </div>
              <h3 className="text-[20px] text-[#202A24] font-bold mb-3">
                AI 분석 요청부터 결과 저장, 미디어 접근 제어까지 연결하는 백엔드 개발
              </h3>
              <p className="text-[14px] text-[#6B7280] leading-relaxed">
                복잡한 AI 추론 지연과 네트워크 불안정 환경 속에서 사용자의 면접 흐름이 끊기지 않도록, 백엔드 코어 API 설계, DB 트랜잭션 수명 주기, Job·Outbox 비동기 디스패처, 비공개 영상 보안 재생망을 전담하여 구현했습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  idx: '1',
                  title: '면접 답변 관리',
                  items: [
                    '사용자 및 면접 세션 유효성 검증',
                    '답변 영상 제출 예약 및 확정(Finalize)',
                    '멱등 키(Idempotency Key)를 이용한 중복 요청 방어',
                  ],
                },
                {
                  idx: '2',
                  title: 'AI 비동기 작업 관리',
                  items: [
                    'Job·Outbox 기반 AI 비동기 요청 관리',
                    '전송 실패 시 지수 백오프 기반 재시도',
                    '콜백 결과 수신 및 작업 상태 전이 관리',
                    '중복 수신 방지 및 순서 역전 콜백 처리',
                  ],
                },
                {
                  idx: '3',
                  title: '미디어 및 리포트',
                  items: [
                    '비공개 영상 저장소 연동 및 소유권 검사',
                    '60초 단기 재생 권한 및 HTTP Range 부분 스트리밍',
                    'AI 분석 결과 종합 조회 API',
                    '질문 음성 생성 결과 검증 및 재생 연동',
                  ],
                },
              ].map((card) => (
                <div
                  key={card.idx}
                  className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#FAFBF8] border border-[#E5E7EB] flex items-center justify-center font-mono-code text-[13px] font-bold text-[#202A24] mb-3">
                      {card.idx}
                    </div>
                    <h4 className="font-bold text-[17px] text-[#202A24] mb-3">{card.title}</h4>
                    <ul className="space-y-2 text-[13px] text-[#6B7280] leading-relaxed">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-[#91B83C] shrink-0 mt-0.5">
                            check
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm">
              <h3 className="text-[18px] text-[#202A24] font-bold mb-4">사용 기술 스택 분류</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-[13px]">
                {[
                  { label: 'Backend', val: 'Java 21, Spring Boot, JPA' },
                  { label: 'Database', val: 'PostgreSQL, Flyway' },
                  { label: 'Frontend', val: 'React, TypeScript' },
                  { label: 'AI Integration', val: 'Python AI Server, HTTP, Callback' },
                  { label: 'Storage & Infra', val: 'Ncloud Object Storage, Nginx' },
                  { label: 'Architecture Patterns', val: 'REST API, Job, Outbox, Idempotency' },
                ].map((stack) => (
                  <div key={stack.label} className="p-3.5 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB]">
                    <div className="font-mono-code text-[11px] text-[#6B7280] uppercase mb-1">{stack.label}</div>
                    <div className="font-mono-code font-bold text-[#202A24]">{stack.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="h-px w-full bg-[#E5E7EB]" />
          </div>

          {/* SECTION 04: System Architecture */}
          <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-14" id="section-04">
            <div className="mb-8">
              <span className="font-mono-code text-[13px] text-[#6B7280] uppercase tracking-wider">
                SYSTEM ARCHITECTURE &amp; DATA FLOW
              </span>
              <h2 className="text-[26px] text-[#202A24] font-bold mt-1">04. 시스템 아키텍처 다이어그램</h2>
              <p className="text-[18px] text-[#202A24] font-bold mt-2">AI 서버와 백엔드를 연결한 비동기 처리 구조</p>
              <p className="text-[14px] text-[#6B7280] mt-1">
                React 화면에서 전달된 요청을 Spring Boot가 처리하고, PostgreSQL에 면접 데이터와 AI 작업 상태를 저장합니다. 분석 요청은 Job·Outbox를 통해 AI 서버에 전달하며, 완료 결과는 콜백으로 수신합니다. 영상 및 음성 파일은 비공개 Object Storage에 저장합니다.
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden mb-6">
              <div className="h-10 bg-[#FAFBF8] px-4 border-b border-[#E5E7EB] flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono-code text-[12px] text-[#6B7280]">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <span className="w-3 h-3 rounded-full bg-[#91B83C]/80" />
                  <span className="ml-2">architecture/facefit-async-pipeline.svg</span>
                </div>
                <span className="font-mono-code text-[11px] text-[#202A24] font-semibold">ASYNCHRONOUS DECOUPLING</span>
              </div>
              <div
                className="p-6 md:p-10 overflow-x-auto"
                style={{
                  backgroundImage: 'radial-gradient(#CBD5C7 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              >
                <div className="min-w-[820px] flex flex-col gap-6">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3 bg-[#FFFFFF] p-4 rounded-xl border border-[#E5E7EB] shadow-sm">
                      <div className="font-mono-code text-[11px] text-[#6B7280] mb-1">FRONTEND CLIENT</div>
                      <div className="font-bold text-[15px] text-[#202A24]">React</div>
                      <div className="text-[12px] text-[#6B7280] mt-1">면접 진행 및 분석 결과 조회</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <span className="font-mono-code text-[10px] text-[#6B7280] mb-1">REST API</span>
                      <div className="w-full h-0.5 bg-[#91B83C] relative">
                        <span className="absolute -top-1 right-0 w-2 h-2 border-t-2 border-r-2 border-[#91B83C] rotate-45" />
                      </div>
                    </div>
                    <div className="col-span-4 bg-[#FFFFFF] p-4 rounded-xl border-2 border-[#91B83C] shadow-md">
                      <div className="font-mono-code text-[11px] text-[#91B83C] font-bold mb-1">CORE BACKEND</div>
                      <div className="font-bold text-[16px] text-[#202A24]">Spring Boot</div>
                      <div className="text-[12px] text-[#6B7280] mt-1 leading-snug">
                        면접 세션·답변 관리, AI 작업 요청 및 결과 수신, 미디어 접근 제어, 리포트 조회
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <span className="font-mono-code text-[10px] text-[#6B7280] mb-1">JPA/S3</span>
                      <div className="w-full h-0.5 bg-[#CBD5C7] relative">
                        <span className="absolute -top-1 right-0 w-2 h-2 border-t-2 border-r-2 border-[#CBD5C7] rotate-45" />
                      </div>
                    </div>
                    <div className="col-span-3 space-y-2">
                      <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E5E7EB] shadow-sm">
                        <div className="font-mono-code text-[10px] text-[#6B7280]">PRIMARY DB</div>
                        <div className="font-bold text-[13px] text-[#202A24]">PostgreSQL</div>
                        <div className="text-[11px] text-[#6B7280] mt-0.5">면접 데이터, Job·Outbox, 콜백 결과</div>
                      </div>
                      <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E5E7EB] shadow-sm">
                        <div className="font-mono-code text-[10px] text-[#6B7280]">STORAGE</div>
                        <div className="font-bold text-[13px] text-[#202A24]">Private Object Storage</div>
                        <div className="text-[11px] text-[#6B7280] mt-0.5">답변 영상 및 질문 음성 저장</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-8 text-[#6B7280] text-[11px] font-mono-code">
                    <span>Spring Boot → Job·Outbox → Dispatcher → AI Server</span>
                    <span className="h-px flex-1 mx-4 border-b border-dashed border-[#E5E7EB]" />
                    <span>AI Server → Callback → Spring Boot → PostgreSQL</span>
                  </div>

                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3" />
                    <div className="col-span-3 bg-[#FAFBF8] p-4 rounded-xl border border-[#E5E7EB] shadow-sm">
                      <div className="font-mono-code text-[11px] text-[#4B6700] font-bold mb-1">DISPATCH ENGINE</div>
                      <div className="font-bold text-[14px] text-[#202A24]">Job·Outbox Dispatcher</div>
                      <div className="text-[11px] text-[#6B7280] mt-1">트랜잭션 커밋 후 비동기 전송 위임</div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center justify-center">
                      <span className="font-mono-code text-[10px] text-[#6B7280] mb-1">POST</span>
                      <div className="w-full h-0.5 bg-[#91B83C] relative">
                        <span className="absolute -top-1 right-0 w-2 h-2 border-t-2 border-r-2 border-[#91B83C] rotate-45" />
                      </div>
                    </div>
                    <div className="col-span-5 bg-[#FAFBF8] p-4 rounded-xl border border-[#E5E7EB] shadow-sm">
                      <div className="font-mono-code text-[11px] text-[#6B7280] mb-1">AI CLUSTER</div>
                      <div className="font-bold text-[15px] text-[#202A24]">Python AI Server</div>
                      <div className="text-[12px] text-[#6B7280] mt-1 leading-snug">
                        질문 생성, STT 및 음성 분석, 시선·자세 분석, 내용 분석 및 코칭, TTS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E7EB] shadow-sm font-mono-code text-[13px] text-[#202A24] leading-relaxed space-y-1">
              <div className="text-[#6B7280] mb-2 font-bold">End-to-End Architecture Data Flow</div>
              <div>
                • <span className="text-[#4B6700] font-bold">Flow 1:</span> React → Spring Boot → PostgreSQL (면접 세션 생성 및 영상 메타데이터 저장)
              </div>
              <div>
                • <span className="text-[#4B6700] font-bold">Flow 2:</span> Spring Boot → Job·Outbox → Dispatcher → AI Server (비동기 분석 요청 전달)
              </div>
              <div>
                • <span className="text-[#4B6700] font-bold">Flow 3:</span> AI Server → Callback → Spring Boot → PostgreSQL (분석 결과 수신 및 검증 완료)
              </div>
              <div>
                • <span className="text-[#4B6700] font-bold">Flow 4:</span> Spring Boot ↔ Private Object Storage (60초 단회성 토큰 기반 부분 스트리밍)
              </div>
            </div>
          </section>

          <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="h-px w-full bg-[#E5E7EB]" />
          </div>

          {/* SECTION 05: Troubleshooting 01 */}
          <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-14" id="section-05">
            <div className="mb-8">
              <span className="font-mono-code text-[13px] text-[#6B7280] uppercase tracking-wider">TROUBLESHOOTING 01</span>
              <h2 className="text-[26px] text-[#202A24] font-bold mt-1">
                05. AI 비동기 처리와 콜백 순서 역전 문제 해결
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
              <div className="lg:col-span-5 bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] font-mono-code text-[12px] font-semibold mb-3">
                    <span className="material-symbols-outlined text-[16px]">warning</span>
                    PROBLEM
                  </div>
                  <h3 className="text-[18px] text-[#202A24] font-bold mb-2">비동기 요청 실패 및 콜백 순서 역전 현상</h3>
                  <p className="text-[14px] text-[#6B7280] leading-relaxed mb-4">
                    면접 답변이 DB에 저장된 이후 AI 서버 요청이 실패하면 분석되지 않은 답변이 남을 수 있습니다. 또한 AI 분석 완료 콜백이 HTTP 202 접수 응답보다 먼저 도착하는 경우, 기존 구현에서는 완료된 Job에 접수 상태를 다시 적용하면서 예외가 발생했습니다.
                  </p>
                </div>
                <div className="p-3 bg-[#FAFBF8] rounded-xl border border-[#E5E7EB] font-mono-code text-[12px] text-[#ba1a1a]">
                  Race Condition: Completed Callback arrived earlier than HTTP 202 response
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5E7EB] shadow-sm">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#F3F5F1] font-mono-code text-[12px] font-semibold text-[#202A24] mb-3">
                  <span className="material-symbols-outlined text-[16px] text-[#91B83C]">check_circle</span>
                  SOLUTION &amp; IMPLEMENTATION
                </div>
                <h3 className="text-[18px] text-[#202A24] font-bold mb-3">Job·Outbox 기반 비동기 처리와 종료 상태 보호</h3>
                <ol className="space-y-2 text-[13px]">
                  {[
                    { n: '1', b: '답변 확정:', d: '답변 확정 과정에서 Job과 Outbox를 동일 트랜잭션 내에 함께 저장' },
                    { n: '2', b: '선점 디스패치:', d: 'Dispatcher가 전송 대상을 선점하여 순차 전송' },
                    { n: '3', b: '트랜잭션 격리:', d: 'DB 트랜잭션 밖에서 외부 AI 서버 네트워크 호출 수행' },
                    { n: '4', b: '완료 콜백 수신:', d: '완료 콜백을 통해 분석 결과와 Job 상태를 최종 반영' },
                    { n: '5', b: '종료 상태 확인:', d: '전송 결과 반영 시 Job 종료 상태(COMPLETED)를 즉시 선검사' },
                    { n: '6', b: '순서 역전 방어:', d: '이미 완료된 Job은 완료 상태를 그대로 유지하고 Outbox만 SENT 처리' },
                  ].map((s) => (
                    <li
                      key={s.n}
                      className="p-2 rounded-lg bg-[#FAFBF8] border border-[#E5E7EB] flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#C7F36B] text-[#202A24] font-mono-code text-[11px] font-bold flex items-center justify-center shrink-0">
                        {s.n}
                      </span>
                      <div className="text-[#6B7280]">
                        <strong className="text-[#202A24] font-semibold">{s.b}</strong> {s.d}
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-3 p-3 bg-[#FAFBF8] rounded-xl border border-[#E5E7EB] text-[12px] text-[#6B7280]">
                  <strong className="text-[#202A24] font-semibold">중복 콜백 검사 로직:</strong> 작업 ID, 결과 버전, SHA-256 본문 해시를 이용. 같은 버전과 동일 본문은 중복 적용하지 않고 즉시 200 OK 반환, 같은 버전의 다른 본문은 충돌 처리.
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#91B83C]/60 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#91B83C]" />
                  <h3 className="text-[18px] text-[#202A24] font-bold">
                    핵심 회귀 테스트 19개 검증 결과 (2026.11.03 실행 기록 기준)
                  </h3>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[13px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#E5E7EB] text-left text-[#6B7280] font-mono-code bg-[#FAFBF8]">
                      <th className="py-2.5 px-3">테스트 범주</th>
                      <th className="py-2.5 px-3">테스트 케이스 수</th>
                      <th className="py-2.5 px-3">주요 검증 내용</th>
                      <th className="py-2.5 px-3 text-right">결과</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB]">
                    <tr>
                      <td className="py-3 px-3 font-mono-code text-[#202A24] font-semibold">
                        콜백 테스트 (Callback Test)
                      </td>
                      <td className="py-3 px-3 font-mono-code tabular-nums">4개</td>
                      <td className="py-3 px-3 text-[#6B7280]">
                        HTTP 202 지연 전 콜백 도착(HTTP 클라이언트 모의 검증), 순서 역전 시 종료 상태 유지, SHA-256 해시 검증
                      </td>
                      <td className="py-3 px-3 text-right font-mono-code tabular-nums text-[#91B83C] font-bold">
                        PASSED (4/4)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono-code text-[#202A24] font-semibold">
                        전송 테스트 (Dispatch Test)
                      </td>
                      <td className="py-3 px-3 font-mono-code tabular-nums">13개</td>
                      <td className="py-3 px-3 text-[#6B7280]">
                        Outbox 선점, 전송 실패 재시도, 지수 백오프 기반 스케줄링
                      </td>
                      <td className="py-3 px-3 text-right font-mono-code tabular-nums text-[#91B83C] font-bold">
                        PASSED (13/13)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono-code text-[#202A24] font-semibold">
                        복구 테스트 (Recovery Test)
                      </td>
                      <td className="py-3 px-3 font-mono-code tabular-nums">2개</td>
                      <td className="py-3 px-3 text-[#6B7280]">서버 영구 에러 시 FAILED 상태 격리 및 사용자 알림</td>
                      <td className="py-3 px-3 text-right font-mono-code tabular-nums text-[#91B83C] font-bold">
                        PASSED (2/2)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-3 text-[12px] text-[#6B7280]">
                <strong>결과:</strong> 전송 실패 이후 재시도 가능한 작업 구조 구현, 콜백이 먼저 도착해도 Job 종료 상태 유지, 중복 결과 반영 방지, 핵심 회귀 테스트 19개 전원 통과.
              </div>
            </div>
          </section>

          <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="h-px w-full bg-[#E5E7EB]" />
          </div>

          {/* SECTION 06: Troubleshooting 02 */}
          <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-14" id="section-06">
            <div className="mb-8">
              <span className="font-mono-code text-[13px] text-[#6B7280] uppercase tracking-wider">TROUBLESHOOTING 02</span>
              <h2 className="text-[26px] text-[#202A24] font-bold mt-1">
                06. 답변 영상의 데이터 정합성과 접근 제어
              </h2>
            </div>

            <div className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#ffdad6] text-[#ba1a1a] font-mono-code text-[12px] font-semibold mb-3">
                <span className="material-symbols-outlined text-[16px]">warning</span>
                PROBLEM
              </div>
              <h3 className="text-[18px] text-[#202A24] font-bold mb-2">
                파일 저장소-DB 불일치 위험 및 비공개 영상 노출 우려
              </h3>
              <p className="text-[14px] text-[#6B7280] leading-relaxed">
                영상 업로드는 파일 저장소와 DB를 함께 사용하기 때문에 업로드 실패나 중복 제출 시 답변 데이터가 불일치할 수 있습니다. 또한 개인 면접 영상은 인증된 소유자만 조회할 수 있어야 합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#F3F5F1] font-mono-code text-[12px] font-semibold text-[#202A24] mb-3">
                    SOLUTION 01
                  </div>
                  <h4 className="text-[18px] text-[#202A24] font-bold mb-2">답변 제출 정합성</h4>
                  <div className="p-2.5 rounded-lg bg-[#FAFBF8] border border-[#E5E7EB] font-mono-code text-[12px] text-[#4b6700] font-bold mb-4">
                    제출 예약 → 영상 업로드 → 답변 확정 → AI 분석 Job 생성
                  </div>
                  <ul className="space-y-2 text-[13px] text-[#6B7280] leading-relaxed">
                    {[
                      '사용자·면접 세션·질문 검증',
                      '멱등 키 기반 중복 요청 처리',
                      '업로드 및 DB 확정 실패 시 보상 처리(S3 고아 파일 롤백 삭제)',
                      '확정된 답변을 기준으로 후속 분석 요청 생성',
                      '무응답 답변의 별도 상태 관리 (NO_ANSWER 플래그 처리)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-[#91B83C] shrink-0 mt-0.5">
                          check
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#F3F5F1] font-mono-code text-[12px] font-semibold text-[#202A24] mb-3">
                    SOLUTION 02
                  </div>
                  <h4 className="text-[18px] text-[#202A24] font-bold mb-2">비공개 영상 접근 제어</h4>
                  <div className="p-2.5 rounded-lg bg-[#FAFBF8] border border-[#E5E7EB] font-mono-code text-[12px] text-[#4b6700] font-bold mb-4">
                    소유권 검증 + 60초 단회성 토큰 + HTTP Range
                  </div>
                  <ul className="space-y-2 text-[13px] text-[#6B7280] leading-relaxed">
                    {[
                      '사용자와 영상 소유권 비교 (403 Forbidden 차단)',
                      '100% 비공개(Private) Object Storage 사용',
                      '유효기간 60초의 단회성 재생 토큰 발급',
                      'DB에 토큰 해시 저장 및 사용 즉시 만료',
                      'HTTP Range 기반 부분 스트리밍 (206 Partial Content)',
                      '저장소별 접근 기능을 어댑터(Routing Storage)로 분리',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-[#91B83C] shrink-0 mt-0.5">
                          check
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5E7EB] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#4b6700] text-[20px]">verified</span>
                <h4 className="font-bold text-[16px] text-[#202A24]">구현 성과 및 소스코드 근거 자료</h4>
              </div>
              <p className="text-[14px] text-[#6B7280] leading-relaxed mb-4">
                답변 제출부터 분석 작업 생성까지 데이터 상태를 연결하고, 영상 접근 시 소유권과 단기 권한을 확인하도록 구현했습니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12px] font-mono-code">
                <a
                  className="p-3 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] hover:border-[#91B83C] flex items-center justify-between text-[#202A24] transition-colors"
                  href="https://github.com/kasic2014/facefit_nw/blob/8900838ec0a7f56a4855d7c9c128e4d9595e8bb8/backend/src/main/java/com/facefit/backend/interview/application/InterviewAnswerService.java"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>InterviewAnswerService.java</span>
                  <span className="material-symbols-outlined text-[16px] text-[#6B7280]">open_in_new</span>
                </a>
                <a
                  className="p-3 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] hover:border-[#91B83C] flex items-center justify-between text-[#202A24] transition-colors"
                  href="https://github.com/kasic2014/facefit_nw/blob/8900838ec0a7f56a4855d7c9c128e4d9595e8bb8/backend/src/main/java/com/facefit/backend/media/application/PlaybackMediaService.java"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>PlaybackMediaService.java</span>
                  <span className="material-symbols-outlined text-[16px] text-[#6B7280]">open_in_new</span>
                </a>
              </div>
            </div>
          </section>

          <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="h-px w-full bg-[#E5E7EB]" />
          </div>

          {/* SECTION 07: Additional Features */}
          <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-14" id="section-07">
            <div className="mb-8">
              <span className="font-mono-code text-[13px] text-[#6B7280] uppercase tracking-wider">ADDITIONAL FEATURES</span>
              <h2 className="text-[26px] text-[#202A24] font-bold mt-1">07. 질문 음성 및 분석 리포트 연동</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#C7F36B]/40 text-[#202A24] flex items-center justify-center font-bold mb-4">
                  <span className="material-symbols-outlined text-[20px]">volume_up</span>
                </div>
                <h3 className="text-[18px] text-[#202A24] font-bold mb-2">질문 음성 생성 관리</h3>
                <p className="text-[14px] text-[#6B7280] leading-relaxed mb-4">
                  면접 질문별 음성 생성 작업을 등록하고, AI 서버의 결과를 검증해 재생 가능한 파일로 연결했습니다.
                </p>
                <ul className="space-y-2 text-[13px] text-[#6B7280] leading-relaxed">
                  {[
                    '질문별 고유 미디어 ID 관리',
                    '음성 생성 결과 비동기 콜백 검증',
                    'MIME 유형 및 파일 크기 확인',
                    '음성 준비 상태에 따른 재생 권한 발급',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#91B83C] shrink-0 mt-0.5">
                        check
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#C7F36B]/40 text-[#202A24] flex items-center justify-center font-bold mb-4">
                  <span className="material-symbols-outlined text-[20px]">analytics</span>
                </div>
                <h3 className="text-[18px] text-[#202A24] font-bold mb-2">분석 리포트 조회</h3>
                <p className="text-[14px] text-[#6B7280] leading-relaxed mb-4">
                  AI 분석 결과를 사용자가 이해할 수 있는 데이터로 구성하는 조회 API를 구현했습니다.
                </p>
                <ul className="space-y-2 text-[13px] text-[#6B7280] leading-relaxed">
                  {[
                    '질문별 분석 결과 및 정량 점수 제공',
                    '답변 근거와 구체적인 개선 피드백',
                    '분석 진행·실패·완료 상태의 명확한 구분',
                    '평가 불가능 항목의 사유 제공 (타임아웃, 무응답 등)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#91B83C] shrink-0 mt-0.5">
                        check
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
            <div className="h-px w-full bg-[#E5E7EB]" />
          </div>

          {/* SECTION 08: Outcomes & Evidence */}
          <section className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-14" id="section-08">
            <div className="mb-8">
              <span className="font-mono-code text-[13px] text-[#6B7280] uppercase tracking-wider">
                OUTCOMES &amp; EVIDENCE
              </span>
              <h2 className="text-[26px] text-[#202A24] font-bold mt-1">08. 프로젝트 성과 및 기술적 경험</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                {
                  n: '01',
                  t: '핵심 회귀 테스트 19개 통과',
                  d: 'AI 콜백, 전송, 복구 시나리오에 대한 핵심 회귀 테스트 19개 통과',
                },
                {
                  n: '02',
                  t: '비동기 작업 상태 보호',
                  d: 'AI 분석 완료 콜백이 접수 응답보다 먼저 도착해도 Job 종료 상태와 분석 결과 유지',
                },
                {
                  n: '03',
                  t: 'AI 요청 재시도 구조',
                  d: 'Job·Outbox를 통해 AI 분석 요청의 전송 의도를 DB에 보존하고 안정적 재전송',
                },
                {
                  n: '04',
                  t: '비공개 영상 접근 제어',
                  d: '소유권 검사, 60초 재생 권한 및 HTTP Range 부분 스트리밍 구현',
                },
              ].map((ach) => (
                <div key={ach.n} className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E7EB] shadow-sm">
                  <span className="font-mono-code text-[12px] text-[#91B83C] font-bold">{ach.n}</span>
                  <h3 className="font-bold text-[16px] text-[#202A24] mt-1 mb-2">{ach.t}</h3>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed">{ach.d}</p>
                </div>
              ))}
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-[#FFFFFF] border border-[#91B83C]/60 shadow-sm mb-8">
              <div className="flex items-center gap-2 text-[#6B7280] font-mono-code text-[12px] mb-2">
                <span className="material-symbols-outlined text-[18px] text-[#91B83C]">format_quote</span>
                <span>TECHNICAL EXPERIENCE · 백엔드 엔지니어링 회고</span>
              </div>
              <blockquote className="text-[15px] md:text-[16px] text-[#202A24] leading-relaxed font-medium">
                "AI 분석 요청부터 결과 저장까지의 데이터 흐름을 관리하고, 예외 상황에서도 일관된 상태를 유지하도록 구현한 백엔드 개발 경험. 비동기 처리, 멱등성, 데이터 정합성, 미디어 접근 제어를 중심으로 AI 서비스를 연결하는 백엔드 구조를 경험했습니다."
              </blockquote>
            </div>

            <div className="bg-[#FFFFFF] p-6 md:p-8 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-1.5 font-mono-code text-[12px] text-[#6B7280] mb-1">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  PRIVATE REPOSITORY &amp; VERIFIED FACTS ONLY
                </div>
                <h3 className="text-[18px] text-[#202A24] font-bold">FaceFit 프로젝트 저장소</h3>
              </div>
              <a
                className="shrink-0 inline-flex items-center justify-center h-11 px-5 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] text-[#202A24] font-mono-code text-[13px] font-semibold hover:border-[#91B83C] transition-colors shadow-sm"
                href="https://github.com/kasic2014/facefit_nw"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px] mr-2">terminal</span>
                github.com/kasic2014/facefit_nw (Private)
              </a>
            </div>

            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#91B83C]" />
                <div className="w-20 md:w-36 h-0.5 bg-[#91B83C]" />
                <span className="material-symbols-outlined text-[#91B83C] text-[18px]">alt_route</span>
                <div className="w-20 md:w-36 h-0.5 bg-[#CBD5C7]" />
                <span className="w-2 h-2 rounded-full bg-[#CBD5C7]" />
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-2xl p-6 md:p-8 border border-[#E5E7EB] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-left w-full lg:w-auto">
                <div className="flex items-center gap-2 font-mono-code text-[12px] text-[#6B7280] mb-1">
                  <span>PROJECT CASE STUDY NAVIGATOR</span>
                </div>
                <h3 className="text-[22px] text-[#202A24] font-bold">다음 프로젝트로 이어보기</h3>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 md:gap-5 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={() => onNavigate('/', 'projects')}
                  className="px-6 py-3.5 rounded-xl bg-[#FAFBF8] hover:bg-[#FFFFFF] border border-[#E5E7EB] text-[#6B7280] hover:text-[#202A24] text-[13px] font-medium transition-all shadow-sm flex items-center justify-center cursor-pointer"
                >
                  전체 프로젝트 목록으로
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/projects/bbangbiseo')}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#C7F36B] text-[#202A24] text-[13px] font-bold hover:opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer"
                >
                  NEXT: 02 빵비서 →
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full bg-[#FFFFFF] border-t border-[#E5E7EB] mt-16">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#91B83C] inline-block animate-pulse" />
              <span className="font-mono-code text-[12px] text-[#6B7280]">All systems normal</span>
            </div>
            <span className="text-[#E5E7EB]">|</span>
            <span className="text-[13px] text-[#6B7280]">© 2026 김서영.dev. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-5 text-[13px]">
              <button type="button" onClick={() => onNavigate('/', 'about')} className="text-[#6B7280] hover:text-[#202A24] cursor-pointer">
                소개
              </button>
              <button type="button" onClick={() => onNavigate('/', 'skills')} className="text-[#6B7280] hover:text-[#202A24] cursor-pointer">
                기술 스택
              </button>
              <button type="button" onClick={() => onNavigate('/', 'projects')} className="text-[#202A24] font-semibold cursor-pointer">
                프로젝트
              </button>
              <button type="button" onClick={() => onNavigate('/', 'contact')} className="text-[#6B7280] hover:text-[#202A24] cursor-pointer">
                연락처
              </button>
            </nav>
            <a
              className="font-mono-code text-[13px] text-[#6B7280] hover:text-[#202A24] transition-colors flex items-center gap-1"
              href="https://github.com/kasic2014"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">terminal</span>GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
