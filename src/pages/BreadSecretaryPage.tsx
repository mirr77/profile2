import React from 'react';
import { SafeImage } from '../components/SafeImage';
import { HOTLINK_ASSETS, NavigateFn } from '../types';

interface BreadSecretaryPageProps {
  onNavigate: NavigateFn;
}

export const BreadSecretaryPage: React.FC<BreadSecretaryPageProps> = ({ onNavigate }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FDFBF7] text-[#2B1E17] antialiased min-h-screen flex flex-col selection:bg-[#D9822B]/20 selection:text-[#8D5325]">
      {/* Top Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#EBDCCB]/60 shadow-[0_2px_12px_rgba(43,30,23,0.03)]">
        <div className="h-16 max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span className="w-7 h-7 rounded-lg bg-[#F5EFE6] border border-[#EBDCCB] flex items-center justify-center text-[#BF7326]">
              <span className="material-symbols-outlined text-[18px]">bakery_dining</span>
            </span>
            <span className="font-mono-code text-sm font-bold tracking-tight text-[#2B1E17] group-hover:text-[#BF7326] transition-colors">
              SEOYOUNG.KIM
            </span>
          </button>

          <nav className="flex items-center gap-5 sm:gap-8">
            <button
              type="button"
              onClick={() => onNavigate('/', 'about')}
              className="text-sm font-medium text-[#7C6859] hover:text-[#BF7326] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              소개
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/', 'projects')}
              className="text-sm font-semibold text-[#BF7326] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              프로젝트
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/', 'skills')}
              className="text-sm font-medium text-[#7C6859] hover:text-[#BF7326] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              기술 스택
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/', 'contact')}
              className="text-sm font-medium text-[#7C6859] hover:text-[#BF7326] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              연락처
            </button>
          </nav>
        </div>
      </header>

      <main className="w-full pt-16 bg-[#FDFBF7] relative overflow-hidden flex-1">
        {/* Warm Ambient Golden Bakery Wash */}
        <div className="absolute top-12 -left-36 w-[480px] h-[480px] bg-gradient-to-br from-[#D9822B]/15 via-[#E59E38]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-[720px] -right-32 w-[440px] h-[440px] bg-gradient-to-bl from-[#8D5325]/10 via-[#D9822B]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-[2000px] -left-20 w-[420px] h-[420px] bg-gradient-to-tr from-[#E59E38]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Watercolor Accent Layers */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
          <div
            className="absolute -left-48 top-[550px] w-[880px] h-[880px] rounded-full pointer-events-none mix-blend-multiply opacity-75 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 45% 45%, rgba(230, 161, 92, 0.45) 0%, rgba(217, 119, 6, 0.32) 42%, rgba(180, 83, 9, 0.18) 70%, transparent 85%)',
            }}
          />
          <div
            className="absolute -right-52 top-[1200px] w-[950px] h-[950px] rounded-full pointer-events-none mix-blend-multiply opacity-80 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 55% 50%, rgba(229, 158, 56, 0.48) 0%, rgba(194, 109, 40, 0.35) 45%, rgba(141, 83, 37, 0.2) 75%, transparent 90%)',
            }}
          />
          <div
            className="absolute -left-60 top-[2200px] w-[920px] h-[920px] rounded-full pointer-events-none mix-blend-multiply opacity-75 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 48% 52%, rgba(223, 155, 82, 0.46) 0%, rgba(217, 130, 43, 0.34) 48%, rgba(180, 83, 9, 0.15) 75%, transparent 88%)',
            }}
          />
          <div className="absolute -left-44 top-[620px] w-[750px] h-[750px] pointer-events-none mix-blend-multiply opacity-80">
            <SafeImage
              decorative
              alt=""
              src={HOTLINK_ASSETS.watercolorWash}
              className="w-full h-full object-contain rotate-[-15deg] scale-125"
              style={{ filter: 'sepia(0.65) saturate(2.4) hue-rotate(-22deg) brightness(1.02)' }}
            />
          </div>
          <div className="absolute -right-52 top-[1320px] w-[820px] h-[820px] pointer-events-none mix-blend-multiply opacity-85">
            <SafeImage
              decorative
              alt=""
              src={HOTLINK_ASSETS.watercolorWash}
              className="w-full h-full object-contain rotate-[140deg] scale-125"
              style={{ filter: 'sepia(0.7) saturate(2.6) hue-rotate(-28deg) contrast(1.06)' }}
            />
          </div>
          <div className="absolute -left-56 top-[2380px] w-[860px] h-[860px] pointer-events-none mix-blend-multiply opacity-75">
            <SafeImage
              decorative
              alt=""
              src={HOTLINK_ASSETS.watercolorWash}
              className="w-full h-full object-contain rotate-[70deg] scale-120"
              style={{ filter: 'sepia(0.6) saturate(2.3) hue-rotate(-20deg) brightness(1.04)' }}
            />
          </div>
          <div className="absolute -right-48 top-[3450px] w-[800px] h-[800px] pointer-events-none mix-blend-multiply opacity-80">
            <SafeImage
              decorative
              alt=""
              src={HOTLINK_ASSETS.watercolorWash}
              className="w-full h-full object-contain rotate-[-38deg] scale-125"
              style={{ filter: 'sepia(0.72) saturate(2.5) hue-rotate(-26deg)' }}
            />
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-5 md:px-10 py-6 md:py-10 flex flex-col gap-12 md:gap-20 relative z-10">
          {/* Breadcrumb Bar + Project Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[#7C6859] font-mono-code text-xs">
              <button
                type="button"
                onClick={() => onNavigate('/')}
                className="hover:text-[#2B1E17] transition-colors cursor-pointer"
              >
                홈
              </button>
              <span className="text-[#E5D5C3]">/</span>
              <button
                type="button"
                onClick={() => onNavigate('/', 'projects')}
                className="hover:text-[#2B1E17] transition-colors cursor-pointer"
              >
                프로젝트
              </button>
              <span className="text-[#E5D5C3]">/</span>
              <span className="text-[#2B1E17] font-semibold">빵비서 (Bread Secretary)</span>
            </nav>

            <div className="flex items-center gap-1 p-1 rounded-lg bg-[#F5EFE6] border border-[#EBDCCB]">
              <button
                type="button"
                onClick={() => onNavigate('/projects/facefit')}
                className="px-3 py-1 rounded-md text-xs font-mono-code font-medium text-[#7C6859] hover:text-[#2B1E17] cursor-pointer"
              >
                01 FaceFit
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/projects/bbangbiseo')}
                className="px-3 py-1 rounded-md text-xs font-mono-code font-bold bg-[#FFFFFF] text-[#8D5325] shadow-xs cursor-pointer"
              >
                02 빵비서
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/projects/nongdam')}
                className="px-3 py-1 rounded-md text-xs font-mono-code font-medium text-[#7C6859] hover:text-[#2B1E17] cursor-pointer"
              >
                03 농담
              </button>
            </div>
          </div>

          {/* P1. HERO SECTION */}
          <section className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#EBDCCB]">
                  <span className="w-2 h-2 rounded-full bg-[#D9822B] animate-pulse" />
                  <span className="font-mono-code text-[11px] tracking-wider text-[#8D5325] uppercase font-semibold">
                    PROJECT 02 / AI INVENTORY MANAGEMENT / CORE ARCHITECTURE
                  </span>
                </div>
                <div className="mt-2">
                  <h1
                    className="font-katuri font-bold text-[#2B1E17] tracking-tight leading-tight mb-3"
                    style={{ fontSize: '40pt', letterSpacing: '1px' }}
                  >
                    빵비서
                  </h1>
                  <p className="text-xl md:text-2xl text-[#8D5325] font-semibold mt-1">
                    이미지 분석 기반 베이커리 재고 관리 서비스
                  </p>
                </div>
                <p className="text-base text-[#7C6859] leading-relaxed mt-2">
                  빵비서는 베이커리 점주가 매대 사진을 활용하여 진열된 빵의 종류와 수량을 확인하고, 분석 결과를 매장 재고 데이터에 반영할 수 있도록 지원하는 서비스입니다. YOLO 객체 탐지 모델로 매대에 진열된 빵을 탐지하고, 진열 구역별 분석 결과를 품목 단위로 집계하여 매장 재고 및 이력 데이터와 연결합니다. 사용자의 이미지 업로드부터 AI 분석, 품목별 수량 집계, 재고 저장까지 하나의 서비스 흐름으로 구성했습니다.
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  {['Java 17', 'Servlet / JSP', 'MyBatis 3.5', 'Oracle 19c', 'Python Flask'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#EBDCCB] text-[#2B1E17] font-mono-code text-xs font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-full bg-[#D9822B]/15 border border-[#D9822B]/40 text-[#8D5325] font-mono-code text-xs font-semibold shadow-sm">
                    YOLOv8
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-8 pt-4">
                <a
                  className="h-12 px-6 rounded-xl bg-gradient-to-r from-[#D9822B] to-[#BF7326] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(217,130,43,0.3)] hover:opacity-95 active:scale-95 transition-all"
                  href="https://github.com/2026-SMHRD-IS-GAI-3/BreadSecretary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>구현 코드 확인 (GitHub)</span>
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
                <button
                  type="button"
                  onClick={() => scrollTo('architecture')}
                  className="h-12 px-5 rounded-xl bg-[#FFFFFF] border border-[#EBDCCB] text-[#2B1E17] text-sm font-medium flex items-center justify-center gap-2 shadow-sm hover:bg-[#FAF6EE] hover:border-[#D9822B]/40 active:scale-95 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#BF7326]">account_tree</span>
                  <span>시스템 구조 보기</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Photo Inspector */}
            <div className="flex-1 w-full max-w-xl mx-auto lg:max-w-none flex flex-col">
              <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-3.5 shadow-md flex flex-col h-full ring-1 ring-[#EBDCCB]/50">
                <div className="flex items-center justify-between px-3 py-2 bg-[#F5EFE6] rounded-lg mb-2.5 border border-[#EBDCCB]/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9822B] animate-pulse" />
                    <span className="font-mono-code text-xs text-[#2B1E17] font-semibold">
                      BAKERY_SHELF_INPUT / DEV-1020
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#FFFFFF] border border-[#EBDCCB]/60 text-[#8D5325] font-mono-code text-[11px] font-medium">
                    ROI INFERENCE ACTIVE
                  </span>
                </div>

                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#F5EFE6] border border-[#EBDCCB]/70 shadow-inner">
                  <SafeImage
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center center' }}
                    alt="Artisanal fresh golden baked bread and croissants on a warm wooden bakery counter"
                    src={HOTLINK_ASSETS.breadHeroBakery}
                    fallbackTitle="베이커리 매대 샘플 이미지"
                    fallbackIcon="bakery_dining"
                  />
                  <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-2">
                      <span className="px-2.5 py-1 bg-[#FFFFFF]/95 backdrop-blur text-[#8D5325] font-mono-code text-[11px] font-semibold rounded-md border border-[#EBDCCB] shadow-sm">
                        RES: 1920x1080 → 640x640
                      </span>
                      <span className="px-2.5 py-1 bg-[#D9822B] text-white font-mono-code text-[11px] font-semibold rounded-md shadow-sm">
                        VERIFIED SOURCE
                      </span>
                    </div>
                    <div className="flex justify-between items-end gap-2">
                      <div className="bg-[#FFFFFF]/95 backdrop-blur px-3 py-1.5 rounded-md text-[#2B1E17] font-mono-code text-[11px] border border-[#EBDCCB] shadow-sm">
                        <span className="text-[#BF7326] font-semibold">ROI_01:</span> Croissant [x:120, y:450, w:310, h:240]
                      </div>
                      <div className="bg-[#FFFFFF]/95 backdrop-blur px-2.5 py-1.5 rounded-md text-[#1E3B2F] font-mono-code text-[11px] font-semibold border border-[#E8F0EC] shadow-sm">
                        CONF: 0.94
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 mt-3 pt-1">
                  <div className="bg-[#FAF6EE] border border-[#EBDCCB]/60 p-2.5 rounded-xl text-center">
                    <span className="block font-mono-code text-[11px] text-[#A29082]">탐지 레이턴시</span>
                    <span className="font-mono-code text-xs font-bold text-[#2B1E17]">340ms (Flask)</span>
                  </div>
                  <div className="bg-[#FAF6EE] border border-[#EBDCCB]/60 p-2.5 rounded-xl text-center">
                    <span className="block font-mono-code text-[11px] text-[#A29082]">매핑 구역</span>
                    <span className="font-mono-code text-xs font-bold text-[#2B1E17]">4 Display Zones</span>
                  </div>
                  <div className="bg-[#E8F0EC]/70 border border-[#2E4A3E]/20 p-2.5 rounded-xl text-center">
                    <span className="block font-mono-code text-[11px] text-[#1E3B2F]/80">DB 트랜잭션</span>
                    <span className="font-mono-code text-xs font-bold text-[#1E3B2F]">Atomic Commit</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Structural Trace Line */}
          <div className="w-full flex items-center gap-4 py-2">
            <div className="h-[1px] flex-1 bg-[#EBDCCB]" />
            <div className="w-3 h-3 rounded-full bg-[#D9822B] ring-4 ring-[#F5EFE6] shadow-sm" />
            <div className="h-[1px] w-20 bg-[#EBDCCB]" />
          </div>

          {/* P2. OVERVIEW */}
          <section className="flex flex-col gap-6" id="overview">
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-xs font-semibold text-[#BF7326] tracking-wider uppercase">
                01 / OVERVIEW
              </span>
              <h2 className="text-2xl md:text-3xl font-editorial-serif font-bold text-[#2B1E17]">
                프로젝트 개요 (Project Overview)
              </h2>
            </div>

            <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-[#EBDCCB]/50 pb-4 sm:pb-0 sm:pr-4">
                  <span className="font-mono-code text-xs text-[#A29082]">프로젝트명</span>
                  <span className="text-lg font-bold text-[#2B1E17] font-editorial-serif">빵비서</span>
                  <span className="font-mono-code text-xs text-[#7C6859]">BreadSecretary</span>
                </div>
                <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-[#EBDCCB]/50 pb-4 sm:pb-0 sm:pr-4">
                  <span className="font-mono-code text-xs text-[#A29082]">개발 기간</span>
                  <span className="text-base font-bold text-[#2B1E17]">2026.05 – 2026.06</span>
                  <span className="text-xs text-[#7C6859]">4주 스프린트 구축</span>
                </div>
                <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-[#EBDCCB]/50 pb-4 sm:pb-0 sm:pr-4">
                  <span className="font-mono-code text-xs text-[#A29082]">개발 인원</span>
                  <span className="text-base font-bold text-[#2B1E17]">5명 (팀 프로젝트)</span>
                  <span className="text-xs text-[#7C6859]">BE / AI 협업</span>
                </div>
                <div className="flex flex-col gap-1 border-b sm:border-b-0 sm:border-r border-[#EBDCCB]/50 pb-4 sm:pb-0 sm:pr-4">
                  <span className="font-mono-code text-xs text-[#A29082]">서비스 유형</span>
                  <span className="text-base font-bold text-[#2B1E17]">이미지 기반 재고 관리</span>
                  <span className="text-xs text-[#7C6859]">베이커리 매대 분석</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono-code text-xs text-[#A29082]">개인 담당 역할</span>
                  <span className="text-base font-bold text-[#BF7326]">Java 백엔드 · DB · Flask 연동</span>
                  <span className="text-xs text-[#7C6859]">김서영 (Seoyoung Kim)</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#EBDCCB]/60 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#BF7326] text-[20px]">integration_instructions</span>
                  <span className="text-sm font-bold text-[#2B1E17] font-mono-code">
                    TECH STACK &amp; RESPONSIBILITIES
                  </span>
                </div>
                <span className="text-xs text-[#A29082] font-mono-code">
                  Servlet / JSP · MyBatis · Oracle 19c 아키텍처 준수
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { name: 'Java Servlet', desc: '이미지 분석 요청 및 응답 처리', tone: 'text-[#BF7326]' },
                  { name: 'JSP', desc: '웹서비스 화면 구성', tone: 'text-[#BF7326]' },
                  { name: 'MyBatis 3.5', desc: '매장·재고·이력 DB 매퍼 연동', tone: 'text-[#BF7326]' },
                  { name: 'Oracle 19c', desc: '매장 및 재고 데이터 관리', tone: 'text-[#BF7326]' },
                  { name: 'Python Flask', desc: 'YOLO 분석 API 제공', tone: 'text-[#1E3B2F]' },
                  { name: 'YOLOv8', desc: '이미지 내 빵 객체 탐지', tone: 'text-[#1E3B2F]' },
                ].map((s) => (
                  <div key={s.name} className="p-3 bg-[#FAF6EE] border border-[#EBDCCB]/70 rounded-xl">
                    <span className={`block font-mono-code text-xs font-bold ${s.tone}`}>{s.name}</span>
                    <span className="text-xs text-[#7C6859] mt-1 block">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-4 shadow-sm flex flex-col gap-2">
                <div className="flex items-center justify-between px-1">
                  <span className="font-mono-code text-xs text-[#7C6859] font-semibold">
                    [시각자료 1] 서비스 대표 화면
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#F5EFE6] text-[#BF7326] font-mono-code text-[10px] font-bold">
                    WEB UI VIEW
                  </span>
                </div>
                <div className="w-full h-44 rounded-xl bg-[#F5EFE6]/70 border border-[#EBDCCB]/80 flex flex-col items-center justify-center text-center p-4">
                  <span className="material-symbols-outlined text-[#D9822B] text-[32px] mb-1">web_asset</span>
                  <span className="font-mono-code text-xs text-[#2B1E17] font-semibold">서비스 대표 대시보드 화면</span>
                  <span className="text-[11px] text-[#7C6859] mt-0.5">
                    점주 사진 업로드 및 분석 결과 매장 재고 조회 화면 구성
                  </span>
                </div>
              </div>
              <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-4 shadow-sm flex flex-col gap-2">
                <div className="flex items-center justify-between px-1">
                  <span className="font-mono-code text-xs text-[#7C6859] font-semibold">
                    [시각자료 2] 실제 매대 분석 결과 화면
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#E8F0EC] text-[#1E3B2F] font-mono-code text-[10px] font-bold">
                    INFERENCE VIEW
                  </span>
                </div>
                <div className="w-full h-44 rounded-xl bg-[#F5EFE6]/70 border border-[#EBDCCB]/80 flex flex-col items-center justify-center text-center p-4">
                  <span className="material-symbols-outlined text-[#2E4A3E] text-[32px] mb-1">view_in_ar</span>
                  <span className="font-mono-code text-xs text-[#2B1E17] font-semibold">
                    실제 베이커리 매대 빵 객체 탐지 화면
                  </span>
                  <span className="text-[11px] text-[#7C6859] mt-0.5">
                    YOLO 바운딩 박스 추론 및 구역별 매핑 시각화 산출물
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* P3. PROBLEM & SOLUTION */}
          <section className="flex flex-col gap-6" id="problem">
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-xs font-semibold text-[#BF7326] tracking-wider uppercase">
                02 / PROBLEM &amp; SOLUTION
              </span>
              <h2 className="text-2xl md:text-3xl font-editorial-serif font-bold text-[#2B1E17]">
                문제 제기 및 개발 배경 (Problem &amp; Solution)
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5 bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="font-mono-code text-xs text-[#7C6859] font-medium">ROI BOUNDING BOX MATRIX</span>
                  <span className="w-2 h-2 rounded-full bg-[#D9822B]" />
                </div>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F5EFE6] border border-[#EBDCCB]/80">
                  <SafeImage
                    className="w-full h-full object-contain p-1.5"
                    alt="Bread loaves with bounding box rectangles over bakery wooden shelves"
                    src={HOTLINK_ASSETS.breadRoiShelves}
                    fallbackTitle="ROI 매대 바운딩 박스 검증"
                    fallbackIcon="crop_free"
                  />
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewBox="0 0 400 300">
                    <rect
                      className="stroke-[#D9822B] stroke-2 fill-[#D9822B]/15"
                      strokeDasharray="4 2"
                      height="110"
                      rx="4"
                      width="160"
                      x="30"
                      y="40"
                    />
                    <rect
                      className="stroke-[#BF7326] stroke-2 fill-[#E59E38]/20"
                      height="120"
                      rx="4"
                      width="150"
                      x="210"
                      y="50"
                    />
                    <rect
                      className="stroke-[#8D5325] stroke-2 fill-[#D9822B]/10"
                      height="110"
                      rx="4"
                      width="310"
                      x="50"
                      y="170"
                    />
                  </svg>
                  <div className="absolute bottom-3 left-3 bg-[#FFFFFF]/95 backdrop-blur px-3 py-1.5 rounded-lg text-[#2B1E17] font-mono-code text-xs border border-[#EBDCCB] shadow-sm">
                    진열 구역별 ROI 객체 매핑 검증
                  </div>
                </div>
                <p className="text-sm text-[#7C6859] mt-3 px-1">
                  베이커리 매장 진열대 좌표(ROI) 안의 객체만 필터링하여 정확한 품목 재고로 합산합니다.
                </p>
              </div>

              <div className="lg:col-span-7 bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <span className="px-3 py-1 rounded-md bg-[#F5EFE6] border border-[#EBDCCB] text-[#BF7326] font-mono-code text-xs self-start font-semibold">
                    CORE PROBLEM DEFINITION
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2B1E17] font-editorial-serif">
                    베이커리 매대 재고 확인 과정의 한계
                  </h3>
                  <p className="text-base text-[#7C6859] leading-relaxed">
                    베이커리 매장에서는 여러 종류의 빵이 진열되어 있으며, 진열 구역별 수량을 품목별 재고에 정확하게 반영하는 과정이 필요합니다. 이미지에서 객체를 탐지하는 것만으로는 매장의 재고 관리 기능을 완성할 수 없습니다. 분석된 객체가 어떤 진열 구역에 속하는지, 어떤 품목인지, 최종 수량이 얼마인지 판단하고 데이터베이스에 연결해야 합니다.
                  </p>
                  <div className="bg-[#F5EFE6]/70 border border-[#EBDCCB] p-4 rounded-xl flex flex-col gap-2 mt-1">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#BF7326] text-[20px]">verified</span>
                      <span className="text-base text-[#2B1E17] font-semibold">
                        Solution — 빵비서의 해결 접근법
                      </span>
                    </div>
                    <p className="text-sm text-[#7C6859] leading-relaxed">
                      매대 사진을 분석하여 품목별 수량과 재고 데이터를 연결하는 서비스: 4가지 핵심 솔루션 체계를 기반으로 구성했습니다.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                      <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#EBDCCB]/60">
                        <span className="font-mono-code text-xs font-bold text-[#BF7326]">01. 이미지 기반 빵 탐지</span>
                        <p className="text-xs text-[#7C6859] mt-0.5">YOLO 모델을 통해 매대 사진의 객체 탐지 수행</p>
                      </div>
                      <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#EBDCCB]/60">
                        <span className="font-mono-code text-xs font-bold text-[#BF7326]">02. 진열 구역별 분석</span>
                        <p className="text-xs text-[#7C6859] mt-0.5">매장별 설정된 ROI 정보를 활용하여 구역 분할</p>
                      </div>
                      <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#EBDCCB]/60">
                        <span className="font-mono-code text-xs font-bold text-[#BF7326]">03. 품목별 수량 집계</span>
                        <p className="text-xs text-[#7C6859] mt-0.5">탐지 결과를 bread_id 기준으로 연결 및 합산</p>
                      </div>
                      <div className="p-2.5 bg-[#FFFFFF] rounded-lg border border-[#EBDCCB]/60">
                        <span className="font-mono-code text-xs font-bold text-[#1E3B2F]">04. 재고 데이터 연동</span>
                        <p className="text-xs text-[#7C6859] mt-0.5">분석 수량을 매장의 재고 및 변경 이력에 반영</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EBDCCB]/60">
                  <span className="font-mono-code text-xs text-[#A29082] uppercase mb-3 block font-medium">
                    CORE SERVICE FLOW
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {[
                      { n: '01', label: '사진 업로드', active: false },
                      { n: '02', label: '진열 구역 조회', active: false },
                      { n: '03', label: 'YOLO 객체 탐지', active: false },
                      { n: '04', label: '품목별 수량 집계', active: false },
                      { n: '05', label: '재고·이력 저장', active: true },
                    ].map((f) => (
                      <div
                        key={f.n}
                        className={`p-2.5 rounded-lg text-center border ${
                          f.active
                            ? 'bg-[#D9822B]/15 border-[#D9822B]/40'
                            : 'bg-[#FAF6EE] border-[#EBDCCB]/70'
                        }`}
                      >
                        <span
                          className={`block font-mono-code text-[11px] font-semibold ${
                            f.active ? 'text-[#8D5325]' : 'text-[#BF7326]'
                          }`}
                        >
                          {f.n}
                        </span>
                        <span
                          className={`text-xs ${
                            f.active ? 'text-[#8D5325] font-bold' : 'text-[#2B1E17] font-medium'
                          }`}
                        >
                          {f.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* P4. SERVICE FLOW */}
          <section className="flex flex-col gap-6" id="service-flow">
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-xs font-semibold text-[#BF7326] tracking-wider uppercase">
                03 / SERVICE WORKFLOW
              </span>
              <h2 className="text-2xl md:text-3xl font-editorial-serif font-bold text-[#2B1E17]">
                서비스 워크플로우 (Service Workflow)
              </h2>
              <p className="text-base text-[#7C6859] mt-1">
                사용자의 이미지 업로드부터 AI 분석, 품목별 수량 집계, 재고 저장까지 연결되는 6단계 흐름
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
              {[
                {
                  step: 'STEP 01',
                  icon: 'add_a_photo',
                  title: '매대 사진 업로드',
                  desc: '점주가 분석할 매대 사진을 업로드합니다.',
                  foot: 'Client → Controller',
                  variant: 'default',
                },
                {
                  step: 'STEP 02',
                  icon: 'store',
                  title: '진열 구역 정보 조회',
                  desc: '백엔드에서 로그인한 점주의 매장 정보와 ROI 데이터를 조회합니다.',
                  foot: 'Oracle 19c → Java',
                  variant: 'default',
                },
                {
                  step: 'STEP 03',
                  icon: 'send',
                  title: '이미지 분석 요청',
                  desc: 'Java 백엔드가 이미지와 진열 구역 정보를 Flask 분석 서버에 전달합니다.',
                  foot: 'Java → Flask REST',
                  variant: 'amber',
                },
                {
                  step: 'STEP 04',
                  icon: 'memory',
                  title: 'YOLO 객체 탐지',
                  desc: 'AI 분석 서버에서 이미지에 포함된 빵 객체를 탐지합니다.',
                  foot: 'Flask → YOLOv8',
                  variant: 'default',
                },
                {
                  step: 'STEP 05',
                  icon: 'calculate',
                  title: '탐지 결과 집계',
                  desc: '반환된 구역별 탐지 수량을 bread_id 기준으로 합산합니다.',
                  foot: 'Java Business Logic',
                  variant: 'default',
                },
                {
                  step: 'STEP 06',
                  icon: 'verified',
                  title: '재고 및 이력 저장',
                  desc: '품목별 결과를 매장 재고 및 이력 데이터와 연결합니다.',
                  foot: 'DB Transaction',
                  variant: 'green',
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className={`rounded-2xl p-4 shadow-sm flex flex-col justify-between transition-colors border ${
                    s.variant === 'amber'
                      ? 'border-[#D9822B]/40 bg-gradient-to-b from-[#FFFDF9] to-[#F5EFE6]/40 ring-1 ring-[#D9822B]/30'
                      : s.variant === 'green'
                      ? 'bg-[#FFFDF9] border-[#2E4A3E]/30 hover:border-[#2E4A3E]/60'
                      : 'bg-[#FFFDF9] border-[#EBDCCB] hover:border-[#D9822B]/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-2 py-0.5 rounded font-mono-code text-[11px] font-bold ${
                          s.variant === 'amber'
                            ? 'bg-[#D9822B] text-white'
                            : s.variant === 'green'
                            ? 'bg-[#E8F0EC] border border-[#2E4A3E]/30 text-[#1E3B2F]'
                            : 'bg-[#F5EFE6] border border-[#EBDCCB] text-[#8D5325]'
                        }`}
                      >
                        {s.step}
                      </span>
                      <span
                        className={`material-symbols-outlined text-[18px] ${
                          s.variant === 'green'
                            ? 'text-[#2E4A3E]'
                            : s.variant === 'amber'
                            ? 'text-[#D9822B]'
                            : 'text-[#BF7326]'
                        }`}
                      >
                        {s.icon}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#2B1E17] mb-1">{s.title}</h4>
                    <p className="text-xs text-[#7C6859] leading-relaxed">{s.desc}</p>
                  </div>
                  <span
                    className={`mt-3 font-mono-code text-[10px] block ${
                      s.variant === 'green'
                        ? 'text-[#1E3B2F] font-bold'
                        : s.variant === 'amber'
                        ? 'text-[#8D5325] font-medium'
                        : 'text-[#A29082]'
                    }`}
                  >
                    {s.foot}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#2B1E17] mb-3 font-mono-code">
                사용자 기능과 백엔드 처리 매핑
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#F5EFE6] border-b border-[#EBDCCB] text-[#2B1E17] font-mono-code">
                      <th className="p-3">단계</th>
                      <th className="p-3">사용자 화면 / 기능</th>
                      <th className="p-3">백엔드 핵심 역할</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBDCCB]/50 text-[#7C6859]">
                    {[
                      ['1단계', '이미지 업로드', '업로드 요청 및 멀티파트 분석 데이터 처리', false],
                      ['2단계', '분석 대상 결정', '로그인 점주 매장·ROI 좌표 정보 조회', false],
                      ['3단계', '이미지 분석 요청', 'Flask AI 분석 API 호출 및 파라미터 전달', false],
                      ['4단계', '분석 결과 수신', '구역별 객체 수량 데이터 수신 및 응답 파싱', false],
                      ['5단계', '품목별 집계', 'bread_id 기준 재고 증감 수량 합산 로직', false],
                      ['6단계', '재고 반영', 'DB 데이터 저장 및 탐지/판매 이력 테이블 연결', true],
                    ].map(([st, ui, role, isLast]) => (
                      <tr key={String(st)}>
                        <td
                          className={`p-3 font-mono-code font-bold ${
                            isLast ? 'text-[#1E3B2F]' : 'text-[#BF7326]'
                          }`}
                        >
                          {st}
                        </td>
                        <td className="p-3 font-semibold text-[#2B1E17]">{ui}</td>
                        <td className="p-3">{role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* P5. ARCHITECTURE */}
          <section className="flex flex-col gap-6" id="architecture">
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-xs font-semibold text-[#BF7326] tracking-wider uppercase">
                04 / ARCHITECTURE
              </span>
              <h2 className="text-2xl md:text-3xl font-editorial-serif font-bold text-[#2B1E17]">
                Java 백엔드와 AI 분석 서버의 연동 구조
              </h2>
              <p className="text-base text-[#7C6859] mt-1">
                Web Interface, Java Servlet Backend, Flask AI Server, Oracle Database 간의 데이터 송수신 및 객체 탐지 결과 연동 아키텍처입니다.
              </p>
            </div>

            <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="h-10 px-4 bg-[#F5EFE6] border-b border-[#EBDCCB] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#C54534]/70" />
                  <span className="w-3 h-3 rounded-full bg-[#E59E38]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#2E4A3E]/70" />
                  <span className="ml-2 font-mono-code text-xs text-[#7C6859]">
                    arch/system-coupling-diagram.puml
                  </span>
                </div>
                <span className="font-mono-code text-[11px] text-[#8D5325] font-medium">
                  SYSTEM INTEGRATION ARCHITECTURE
                </span>
              </div>

              <div
                className="p-6 md:p-8 relative"
                style={{
                  backgroundImage: 'radial-gradient(#EBDCCB 1.2px, transparent 1.2px)',
                  backgroundSize: '22px 22px',
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch relative">
                  <div className="bg-[#FFFFFF] border border-[#EBDCCB] rounded-xl p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="font-mono-code text-[11px] text-[#A29082] block mb-1">1. WEB INTERFACE</span>
                      <h4 className="text-base font-bold text-[#2B1E17]">점주 대시보드 (JSP)</h4>
                      <p className="text-xs text-[#7C6859] mt-2 leading-relaxed">
                        • 매대 이미지 업로드 인터페이스
                        <br />• 진열 구역(ROI) 설정 및 선택
                        <br />• 품목별 최종 재고 및 분석 이력 확인
                      </p>
                    </div>
                    <div className="mt-4 pt-2">
                      <span className="px-2 py-1 bg-[#F5EFE6] border border-[#EBDCCB] font-mono-code text-[11px] rounded text-[#2B1E17]">
                        HTTP POST (multipart)
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#FFFFFF] border-2 border-[#D9822B] rounded-xl p-5 shadow-md flex flex-col justify-between ring-2 ring-[#D9822B]/20">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono-code text-[11px] text-[#BF7326] font-bold">
                          2. JAVA SERVLET BACKEND
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#D9822B]" />
                      </div>
                      <h4 className="text-base font-bold text-[#2B1E17]">RoiUploadAnalysisController</h4>
                      <p className="text-xs text-[#7C6859] mt-2 leading-relaxed">
                        • 로그인 점주 매장·ROI 정보 조회
                        <br />• Flask 서버에 이미지 &amp; ROI 전달
                        <br />• 구역별 탐지 결과 수신 및 bread_id 집계
                        <br />• 재고·이력 데이터베이스 연결
                      </p>
                    </div>
                    <div className="mt-4 pt-2 flex flex-col gap-1">
                      <span className="px-2 py-1 bg-[#D9822B] text-white font-mono-code text-[11px] rounded font-semibold text-center shadow-xs">
                        개인 담당 백엔드 오케스트레이터
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#FFFFFF] border border-[#EBDCCB] rounded-xl p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="font-mono-code text-[11px] text-[#A29082] block mb-1">3. FLASK AI SERVER</span>
                      <h4 className="text-base font-bold text-[#2B1E17]">Python Flask Server</h4>
                      <p className="text-xs text-[#7C6859] mt-2 leading-relaxed">
                        • 이미지 및 ROI 수신
                        <br />• YOLOv8 기반 빵 객체 탐지 수행
                        <br />• 진열 구역별 탐지 결과 JSON 반환
                        <br />• 팀 전체 공통 분석 엔드포인트
                      </p>
                    </div>
                    <div className="mt-4 pt-2">
                      <span className="px-2 py-1 bg-[#F5EFE6] border border-[#EBDCCB] font-mono-code text-[11px] rounded text-[#2B1E17]">
                        REST /predict (JSON)
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#FFFFFF] border border-[#EBDCCB] rounded-xl p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono-code text-[11px] text-[#A29082] font-medium">
                          4. ORACLE DATABASE
                        </span>
                        <span className="font-mono-code text-[10px] text-[#BF7326] font-semibold bg-[#D9822B]/15 px-1.5 py-0.5 rounded">
                          MyBatis 매핑
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#2B1E17]">Oracle 19c Database</h4>
                      <p className="text-xs text-[#7C6859] mt-2 leading-relaxed">
                        • 점주 및 매장 소유권 정보
                        <br />• TB_STORE_ROI (진열 구역 좌표)
                        <br />• TB_BREAD_STOCK (실시간 품목 재고)
                        <br />• TB_DETECT_HISTORY (분석 이력)
                      </p>
                    </div>
                    <div className="mt-4 pt-2">
                      <span className="px-2 py-1 bg-[#E8F0EC] border border-[#2E4A3E]/30 font-mono-code text-[11px] rounded text-[#1E3B2F] font-medium">
                        ACID Transactions
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#F5EFE6] border-t border-[#EBDCCB] flex flex-col gap-2 text-[#7C6859] font-mono-code text-xs">
                <span className="font-bold text-[#8D5325]">순차 데이터 흐름 (Data Flow 1~7):</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
                  <span>1. 매대 이미지 업로드</span>
                  <span>2. 점주 매장·ROI 정보 DB 조회</span>
                  <span>3. Flask 서버로 이미지·ROI 전송</span>
                  <span>4. Flask YOLO 모델 탐지 수행</span>
                  <span>5. 구역별 탐지 결과 수신</span>
                  <span>6. bread_id 기준 수량 합산</span>
                  <span>7. 재고 및 분석 이력 DB 저장</span>
                </div>
              </div>
            </div>
          </section>

          {/* P6. KEY IMPLEMENTATION */}
          <section className="flex flex-col gap-6" id="implementation">
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-xs font-semibold text-[#BF7326] tracking-wider uppercase">
                05 / TECHNICAL CHALLENGE 01
              </span>
              <h2 className="text-2xl md:text-3xl font-editorial-serif font-bold text-[#2B1E17]">
                기술적 도전 01: 이미지 해상도와 ROI 좌표 불일치 문제
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-6 bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F5EFE6] border border-[#EBDCCB] self-start">
                    <span className="material-symbols-outlined text-[#BF7326] text-[18px]">aspect_ratio</span>
                    <span className="font-mono-code text-xs text-[#8D5325] font-semibold">
                      COORDINATE RESOLUTION MISMATCH
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2B1E17] font-editorial-serif">
                    문제 상황 및 기술적 고려 요소
                  </h3>
                  <p className="text-base text-[#7C6859] leading-relaxed">
                    사용자가 지정한 진열 구역 좌표와 AI 분석에 사용하는 이미지의 해상도가 일치하지 않으면, 원래 의도한 위치가 아닌 다른 영역을 분석할 수 있습니다. 원본 이미지의 좌표를 별도의 보정 없이 크기가 변경된 분석 프레임에 적용하면 실제 진열 구역과 분석 영역이 어긋날 수 있습니다.
                  </p>
                  <div className="p-3.5 bg-[#FAF6EE] border border-[#EBDCCB]/70 rounded-xl flex flex-col gap-1.5">
                    <span className="font-mono-code text-xs font-bold text-[#2B1E17]">기술적 고려 요소:</span>
                    <ul className="list-disc list-inside text-xs text-[#7C6859] leading-relaxed space-y-0.5">
                      <li>점주 촬영 원본 이미지 해상도 파싱</li>
                      <li>ROI 좌표의 표현 방식 (원본 기준 직사각형)</li>
                      <li>AI 모델 입력 분석 프레임 크기와의 축척 관계</li>
                      <li>분석 좌표를 원본 기준 좌표계로 역환산하는 보정</li>
                      <li>진열 구역별 최종 객체 탐지 수량 추출</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EBDCCB]/60 flex items-center justify-between">
                  <a
                    className="inline-flex items-center gap-1.5 text-[#BF7326] font-mono-code text-xs font-bold hover:text-[#8D5325] transition-colors"
                    href="https://github.com/2026-SMHRD-IS-GAI-3/BreadSecretary/blob/main/src/main/java/com/breadsec/controller/RoiUploadAnalysisController.java"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>RoiUploadAnalysisController.java 소스코드 확인</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                  <span className="font-mono-code text-xs text-[#A29082]">개인 담당 백엔드</span>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <span className="font-mono-code text-xs text-[#A29082] uppercase font-medium">
                    5-STEP RESOLUTION IMPLEMENTATION
                  </span>
                  <div className="flex flex-col gap-2">
                    {[
                      ['Step 01', '매장 및 ROI 정보 조회:', 'DB에서 매장 소유권 및 등록된 진열 구역 정보 추출'],
                      ['Step 02', '분석 데이터 전달:', '원본 이미지와 함께 구역 좌표를 Flask 분석 서버로 전송'],
                      ['Step 03', 'ROI 좌표 변환:', '분석 프레임 크기에 맞추어 좌표를 환산하고 분석 영역 보정'],
                      ['Step 04', 'AI 탐지 결과 수신:', '진열 구역별로 탐지된 빵 객체 정보 JSON 응답 수신'],
                      ['Step 05', '품목별 수량 집계:', '반환된 탐지 수량을 bread_id 기준으로 연결 및 합산'],
                    ].map(([st, title, desc]) => (
                      <div
                        key={st}
                        className="p-2.5 bg-[#F5EFE6]/70 border border-[#EBDCCB]/60 rounded-lg flex flex-wrap items-center gap-2 text-xs"
                      >
                        <span className="font-mono-code font-bold text-[#BF7326] px-1.5 py-0.5 bg-[#FFFFFF] rounded border border-[#EBDCCB]">
                          {st}
                        </span>
                        <span className="text-[#2B1E17] font-medium">{title}</span>
                        <span className="text-[#7C6859]">{desc}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-[#FAF6EE] border border-[#EBDCCB]/70 rounded-xl text-xs text-[#7C6859]">
                    <span className="font-semibold text-[#2B1E17]">해결 결과:</span> 원본 이미지의 ROI 정보와 AI 분석 결과를 연결하여 진열 구역별 탐지 수량을 품목별 재고 데이터에 반영하는 전체 흐름을 완성했습니다.
                  </div>
                </div>

                <div className="mt-4 pt-3 bg-[#F5EFE6] border border-[#EBDCCB]/60 p-3 rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-[#7C6859]">
                    <strong className="text-[#8D5325]">개인 담당:</strong> Java 백엔드, DB 조회, Flask API 연동, 품목별 집계
                  </span>
                  <span className="text-[#A29082] font-mono-code text-[11px]">| 팀 전체: YOLO 탐지 및 Flask 처리</span>
                </div>
              </div>
            </div>
          </section>

          {/* P7. TROUBLESHOOTING */}
          <section className="flex flex-col gap-6" id="troubleshooting">
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-xs font-semibold text-[#BF7326] tracking-wider uppercase">
                06 / TECHNICAL CHALLENGE 02
              </span>
              <h2 className="text-2xl md:text-3xl font-editorial-serif font-bold text-[#2B1E17]">
                기술적 도전 02: 재고와 이력 데이터의 부분 커밋 문제
              </h2>
              <p className="text-base text-[#7C6859] mt-1">
                기존 구현에서 재고와 탐지 이력을 각각 커밋하는 구조로 처리하여 발생할 수 있는 부분 커밋 문제를 진단하고, 단일 트랜잭션 원자적 롤백 구조로 개선했습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="bg-[#FFFDF9] border border-[#C54534]/30 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#FDF0ED] text-[#C54534] font-mono-code text-xs font-bold border border-[#C54534]/20">
                      기존 처리 방식의 한계
                    </span>
                    <span className="text-[#C54534] font-mono-code text-xs font-semibold">부분 커밋 위험</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#2B1E17]">재현된 실패 시나리오</h4>
                  <p className="text-sm text-[#7C6859] leading-relaxed">
                    재고 데이터 변경이 먼저 완료된 뒤 이력 저장 과정에서 오류가 발생하면, 재고 수량만 수정되고 이력 데이터는 저장되지 않는 데이터 불일치가 발생합니다.
                  </p>
                  <div className="bg-[#F5EFE6]/80 border border-[#EBDCCB] p-4 rounded-xl flex flex-col gap-2 font-mono-code text-xs mt-1">
                    <div className="flex justify-between items-center text-[#7C6859]">
                      <span>1. 초기 재고 설정</span>
                      <span className="tabular-nums">20개</span>
                    </div>
                    <div className="flex justify-between items-center text-[#2B1E17] font-semibold">
                      <span>2. 재고 변경 요청</span>
                      <span>15개로 변경 (개별 COMMIT 완료)</span>
                    </div>
                    <div className="flex justify-between items-center text-[#C54534] font-semibold">
                      <span>3. 이력 INSERT 과정</span>
                      <span className="bg-[#FDF0ED] border border-[#C54534]/30 px-1.5 py-0.5 rounded text-[#C54534]">
                        오류 발생 (INSERT 실패)
                      </span>
                    </div>
                    <div className="pt-2 border-t border-[#EBDCCB]/50 text-[#C54534] font-medium">
                      결과: 재고가 15개로 변경된 상태가 그대로 남음 (이력은 누락되고 앞선 변경은 롤백되지 않음)
                    </div>
                  </div>
                </div>
                <div className="text-xs text-[#A29082] mt-3">
                  원인 분석: 재고 변경과 이력 저장에 대한 커밋이 분리되어 있어, 전체 작업을 하나의 원자적 처리 단위로 보장하지 못함.
                </div>
              </div>

              <div className="bg-[#FFFDF9] border-2 border-[#2E4A3E] rounded-2xl p-6 shadow-sm flex flex-col justify-between ring-2 ring-[#2E4A3E]/20">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#E8F0EC] text-[#1E3B2F] font-mono-code text-xs font-bold border border-[#2E4A3E]/30">
                      개선된 처리 방식
                    </span>
                    <span className="text-[#1E3B2F] font-mono-code text-xs font-semibold">
                      단일 SqlSession 트랜잭션
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#2B1E17]">원자적 롤백 보장 구조</h4>
                  <p className="text-sm text-[#7C6859] leading-relaxed">
                    재고 변경과 관련 이력 저장을 하나의 DB 트랜잭션으로 통합하여, 중간 단계에서 예외가 발생하더라도 전체 변경을 원래 상태로 되돌리도록 구성했습니다.
                  </p>
                  <div className="bg-[#F5EFE6]/80 border border-[#EBDCCB] p-4 rounded-xl flex flex-col gap-2 font-mono-code text-xs mt-1">
                    <div className="flex justify-between items-center text-[#7C6859]">
                      <span>1. 초기 재고 설정</span>
                      <span className="tabular-nums">20개</span>
                    </div>
                    <div className="flex justify-between items-center text-[#2B1E17] font-semibold">
                      <span>2. 재고 변경 수행</span>
                      <span className="text-[#A29082]">동일 SqlSession 보류</span>
                    </div>
                    <div className="flex justify-between items-center text-[#C54534] font-semibold">
                      <span>3. 이력 INSERT 오류 주입</span>
                      <span className="bg-[#FDF0ED] border border-[#C54534]/30 px-1.5 py-0.5 rounded text-[#C54534]">
                        Exception Catch
                      </span>
                    </div>
                    <div className="pt-2 border-t border-[#EBDCCB]/50 text-[#1E3B2F] font-bold">
                      → session.rollback() 실행
                      <br />
                      결과: 재고 20개 안전 유지 (데이터 무결성 100% 보장)
                    </div>
                  </div>
                </div>
                <div className="text-xs text-[#1E3B2F] font-medium mt-3">
                  동일 요청 안에서 실행되는 모든 변경이 성공할 때만 일괄 커밋되는 원자적 구조 확립.
                </div>
              </div>
            </div>

            {/* 8-Step Breakdown */}
            <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 shadow-sm">
              <h4 className="text-sm font-bold text-[#2B1E17] font-mono-code mb-3">8단계 트랜잭션 개선 구현 내용</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  ['1. 동일 SqlSession 처리', '재고 변경과 이력 저장을 하나의 세션 컨텍스트로 묶어 실행', false],
                  ['2. 점주/매장 소유권 검증', '로그인 점주와 대상 매장 일치 여부를 데이터 변경 전에 선검증', false],
                  ['3. 현재 재고 잠금 조회', '조회 시 비관적 락을 적용하여 동시 수정 충돌을 사전 격리', false],
                  ['4. 재고 데이터 변경', '품목별 분석 수량을 기반으로 재고 수량 테이블 UPDATE', false],
                  ['5. 탐지 이력 저장', '분석된 매대 사진과 탐지 객체 로그를 이력 테이블에 기록', false],
                  ['6. 판매 이력 저장', '재고 변동 내역과 연계된 판매/출고 이력 데이터 동시 생성', false],
                  ['7. 단일 커밋 실행', '모든 작업이 정상 완료된 경우에만 최종 일괄 커밋', false],
                  ['8. 예외 시 전체 롤백', '어느 단계든 실패 시 세션 전체를 롤백하여 변경 취소', true],
                ].map(([title, desc, green]) => (
                  <div
                    key={String(title)}
                    className={`p-3 rounded-xl text-xs border ${
                      green
                        ? 'bg-[#E8F0EC]/30 border-[#2E4A3E]/30'
                        : 'bg-[#FAF6EE] border-[#EBDCCB]/70'
                    }`}
                  >
                    <span
                      className={`font-mono-code font-bold block mb-1 ${
                        green ? 'text-[#1E3B2F]' : 'text-[#BF7326]'
                      }`}
                    >
                      {title}
                    </span>
                    <p className="text-[#7C6859]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Before vs After Table */}
            <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 shadow-sm">
              <h4 className="text-sm font-bold text-[#2B1E17] font-mono-code mb-3">
                트랜잭션 개선 전후 비교 (Before vs After)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#F5EFE6] border-b border-[#EBDCCB] text-[#2B1E17] font-mono-code">
                      <th className="p-3">구분</th>
                      <th className="p-3">기존 구현</th>
                      <th className="p-3">후속 로컬 개선</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBDCCB]/50 text-[#7C6859]">
                    <tr>
                      <td className="p-3 font-semibold text-[#2B1E17]">DB 처리 방식</td>
                      <td className="p-3">재고와 이력을 개별 커밋</td>
                      <td className="p-3 font-medium text-[#1E3B2F]">하나의 SqlSession 및 단일 커밋</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#2B1E17]">이력 저장 실패 시</td>
                      <td className="p-3 text-[#C54534]">재고 변경 내용이 그대로 남음</td>
                      <td className="p-3 font-medium text-[#1E3B2F]">앞선 재고 변경까지 전체 롤백</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#2B1E17]">실패 후 재고 상태</td>
                      <td className="p-3 text-[#C54534]">15개로 변경되어 정합성 깨짐</td>
                      <td className="p-3 font-medium text-[#1E3B2F]">초기 재고 20개 안전 유지</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#2B1E17]">정합성 보장 범위</td>
                      <td className="p-3">부분 반영 가능 (위험)</td>
                      <td className="p-3 font-medium text-[#1E3B2F]">동일 요청의 완전한 원자적 처리</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-[#F5EFE6] border border-[#EBDCCB] rounded-xl p-4 shadow-sm flex items-start gap-3">
              <span className="material-symbols-outlined text-[#BF7326] text-[20px] mt-0.5 shrink-0">info</span>
              <p className="text-xs text-[#7C6859] leading-relaxed">
                ※ 중요 고지: 이 트랜잭션 개선은 팀 프로젝트 종료 이후 데이터 무결성 보장을 위해 단독으로 수행한 후속 로컬 개선 작업이며, 팀 프로젝트의 최종 운영 환경에 직접 반영된 기능이 아닙니다.
              </p>
            </div>
          </section>

          {/* P8. VERIFICATION */}
          <section className="flex flex-col gap-6" id="verification">
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-xs font-semibold text-[#BF7326] tracking-wider uppercase">
                07 / VERIFICATION &amp; TESTING
              </span>
              <h2 className="text-2xl md:text-3xl font-editorial-serif font-bold text-[#2B1E17]">
                재고 정합성 개선 검증 (Verification &amp; Testing)
              </h2>
              <p className="text-base text-[#7C6859] mt-1">
                MyBatis와 H2 Database(Oracle compatibility mode) 환경에서 실패 주입을 통한 트랜잭션 롤백 테스트 검증
              </p>
            </div>

            <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#EBDCCB]">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#2E4A3E] text-white font-mono-code text-xs font-bold shadow-sm">
                    7 / 7 PASS
                  </span>
                  <span className="text-lg font-bold text-[#2B1E17]">H2 Database (Oracle Compatibility Mode)</span>
                </div>
                <span className="font-mono-code text-xs text-[#7C6859] font-medium">
                  JUnit 5 • Mockito • AssertJ • MyBatis
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#F5EFE6] border-b border-[#EBDCCB] text-[#2B1E17] font-mono-code">
                      <th className="p-3">검증 시나리오</th>
                      <th className="p-3">기존 구현 처리 결과</th>
                      <th className="p-3">후속 로컬 개선 처리 결과</th>
                      <th className="p-3">검증 상태</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBDCCB]/50 text-[#7C6859]">
                    {[
                      [
                        '초기 재고 20개 → 15개 변경 시도 중 이력 저장 실패',
                        '재고 15개 잔류 (불일치)',
                        '재고 20개 안전 유지 (원상 복구)',
                        true,
                      ],
                      [
                        '점주 소유권 불일치 매장 요청 차단',
                        '검증 로직 미비',
                        'Unauthorized 예외 발생 및 세션 롤백',
                        false,
                      ],
                      [
                        '정상 재고 차감 및 탐지 이력 동시 생성',
                        '개별 트랜잭션 커밋',
                        '단일 커밋으로 재고 및 이력 동시 반영',
                        false,
                      ],
                      [
                        '비관적 락을 통한 동시성 경합 처리',
                        '동시 수정 충돌 가능',
                        'SELECT FOR UPDATE 잠금 순차 처리',
                        false,
                      ],
                    ].map(([scenario, oldRes, newRes, isErrorOld]) => (
                      <tr key={String(scenario)}>
                        <td className="p-3 font-semibold text-[#2B1E17]">{scenario}</td>
                        <td className={`p-3 ${isErrorOld ? 'text-[#C54534]' : ''}`}>{oldRes}</td>
                        <td className="p-3 font-bold text-[#1E3B2F]">{newRes}</td>
                        <td className="p-3 font-mono-code text-[#1E3B2F] font-bold">PASS</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-[#FFFFFF] border border-[#EBDCCB] rounded-xl p-4 font-mono-code text-xs text-[#2B1E17] flex flex-col gap-1.5 shadow-inner">
                <div className="flex items-center justify-between text-[#A29082] pb-1 border-b border-[#EBDCCB]/50">
                  <span>[INFO] Running com.breadsec.service.StockTransactionServiceTest</span>
                  <span className="text-[#1E3B2F] font-bold">SUCCESS (DAO Integration Suite)</span>
                </div>
                <div className="text-[#2B1E17] pt-1">
                  Tests run: 7, Failures: 0, Errors: 0, Skipped: 0 - in StockTransactionServiceTest (H2 Oracle Mode)
                </div>
                <div className="text-[#7C6859]">
                  [INFO] BUILD SUCCESS - 7 of 7 integration test assertions passed.
                </div>
              </div>

              <div className="p-3.5 bg-[#F5EFE6]/70 border border-[#EBDCCB]/60 rounded-xl text-xs text-[#A29082] leading-relaxed">
                ※ 검증 범위 고지: 본 검증은 MyBatis와 H2 Database의 Oracle 호환 모드 환경에서 수행한 단위/통합 테스트이며, 실제 상용 Oracle 운영 환경에서 동일하게 검증되었다고 주장하지 않습니다. 성능 향상에 대한 가설적 수치(시간, 정확도 등)는 포함하지 않았습니다.
              </div>
            </div>
          </section>

          {/* P9. DATA MANAGEMENT */}
          <section className="flex flex-col gap-6" id="data-management">
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-xs font-semibold text-[#BF7326] tracking-wider uppercase">
                08 / DATA MANAGEMENT
              </span>
              <h2 className="text-2xl md:text-3xl font-editorial-serif font-bold text-[#2B1E17]">
                데이터 관리: 이미지 분석 결과를 재고 데이터로 연결
              </h2>
              <p className="text-base text-[#7C6859] mt-1">
                매대 사진이 서비스 데이터베이스의 각 엔티티로 정제되어 전달되는 6단계 처리 흐름과 관계 구조
              </p>
            </div>

            <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#2B1E17] font-mono-code mb-4">
                데이터 처리 흐름 (Data Processing Flow)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  ['01. 이미지 입력', '점주 매대 사진 업로드 수신', false],
                  ['02. 분석 구역 식별', '매장 등록 ROI 좌표 조회', false],
                  ['03. 객체 탐지', 'YOLO 모델 바운딩 박스 추론', false],
                  ['04. 품목 집계', '구역별 탐지 수량 bread_id 합산', false],
                  ['05. 재고 연결', '품목별 재고 테이블 갱신', false],
                  ['06. 이력 저장', '분석·판매 로그 동시 기록', true],
                ].map(([t, d, green]) => (
                  <div
                    key={String(t)}
                    className={`p-3 rounded-xl text-center border ${
                      green ? 'bg-[#E8F0EC]/40 border-[#2E4A3E]/30' : 'bg-[#FAF6EE] border-[#EBDCCB]/70'
                    }`}
                  >
                    <span
                      className={`font-mono-code text-xs font-bold block mb-1 ${
                        green ? 'text-[#1E3B2F]' : 'text-[#BF7326]'
                      }`}
                    >
                      {t}
                    </span>
                    <p className="text-xs text-[#7C6859]">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#2B1E17] font-mono-code mb-3">
                데이터베이스 관계 구조 (Database Relationships)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  ['점주 및 매장 (STORE)', '1 : N', '점주 세션 인증 및 매장 소유권 확인, 등록된 진열 구역(ROI)의 기본 관리 주체', false],
                  ['진열 구역 (TB_STORE_ROI)', 'N : 1 (BREAD)', '매대 상의 직사각형 좌표(x, y, w, h)를 보유하며 특정 bread_id와 연결', false],
                  ['빵 품목 (TB_BREAD)', '기준 엔티티', '매장에서 판매하는 빵의 종류 식별자(bread_id) 및 기본 상품 메타데이터', false],
                  ['실시간 재고 (TB_BREAD_STOCK)', '단일 원자성', '매장별 각 품목의 현재 가용 수량을 유지하며 비관적 락으로 동시 수정 방어', false],
                  ['탐지 이력 (TB_DETECT_HISTORY)', '분석 스냅샷', '분석에 사용된 매대 이미지와 각 구역별 탐지 수량 로그를 시계열로 저장', false],
                  ['판매 이력 (TB_SALES_HISTORY)', '연계 커밋', '재고 차감 시점의 근거 이력을 기록하며 재고 테이블과 동일 트랜잭션으로 커밋', true],
                ].map(([name, rel, desc, green]) => (
                  <div
                    key={String(name)}
                    className={`p-4 rounded-xl border ${
                      green ? 'bg-[#E8F0EC]/30 border-[#2E4A3E]/30' : 'bg-[#FAF6EE] border-[#EBDCCB]/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`font-mono-code text-xs font-bold ${
                          green ? 'text-[#1E3B2F]' : 'text-[#2B1E17]'
                        }`}
                      >
                        {name}
                      </span>
                      <span
                        className={`font-mono-code text-[10px] font-semibold ${
                          green ? 'text-[#1E3B2F]' : 'text-[#BF7326]'
                        }`}
                      >
                        {rel}
                      </span>
                    </div>
                    <p className="text-xs text-[#7C6859] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* P10. CONTRIBUTION & RETROSPECTIVE */}
          <section className="flex flex-col gap-6" id="contribution">
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-xs font-semibold text-[#BF7326] tracking-wider uppercase">
                09 / MY ROLE &amp; PROJECT RESULTS
              </span>
              <h2 className="text-2xl md:text-3xl font-editorial-serif font-bold text-[#2B1E17]">
                담당 역할 및 프로젝트 성과
              </h2>
              <p className="text-base text-[#7C6859] mt-1">
                담당 역할: 이미지 분석 결과를 매장 재고 데이터로 연결하는 Java 백엔드 개발. AI 분석 모델에서 반환된 데이터를 실제 서비스의 데이터베이스 구조에 연결하는 백엔드 기능을 담당했습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  k: 'CONTRIBUTION 01',
                  t: '이미지 분석 API 연동',
                  d: 'Java 백엔드에서 Flask 분석 서버 호출, 이미지 데이터 및 ROI 정보 전달, AI 분석 응답 수신 및 품목별 수량 데이터 처리.',
                  f: 'Java 17 / Flask HTTP Client',
                  green: false,
                },
                {
                  k: 'CONTRIBUTION 02',
                  t: '데이터베이스 연동',
                  d: '로그인 점주의 매장 정보 및 진열 구역 데이터 조회, 분석된 빵 품목 식별, 품목별 수량과 재고 데이터 매핑.',
                  f: 'MyBatis 3.5 / Oracle 19c',
                  green: false,
                },
                {
                  k: 'CONTRIBUTION 03',
                  t: 'ROI 좌표 처리 연동',
                  d: '원본 이미지 크기와 ROI 좌표 전달, 분석 프레임에 맞게 환산된 결과 수신, 진열 구역별 탐지 결과 집계 로직.',
                  f: 'Coordinate Translation / Aggregation',
                  green: false,
                },
                {
                  k: 'CONTRIBUTION 04 (후속 로컬 개선)',
                  t: '재고 및 이력 저장 구조 개선',
                  d: '재고 변경과 이력 저장의 트랜잭션 통합, 매장 소유권 검사, 재고 데이터 잠금 조회, 중간 실패 시 전체 롤백 및 통합 테스트 검증.',
                  f: '단일 SqlSession / 원자적 롤백',
                  green: true,
                },
              ].map((c) => (
                <div
                  key={c.k}
                  className={`border rounded-2xl p-5 shadow-sm flex flex-col justify-between ${
                    c.green ? 'bg-[#E8F0EC]/20 border-[#2E4A3E]/30' : 'bg-[#FFFDF9] border-[#EBDCCB]'
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <span
                      className={`font-mono-code text-xs font-bold ${
                        c.green ? 'text-[#1E3B2F]' : 'text-[#BF7326]'
                      }`}
                    >
                      {c.k}
                    </span>
                    <h4 className="text-base font-bold text-[#2B1E17]">{c.t}</h4>
                    <p className="text-xs text-[#7C6859] leading-relaxed mt-1">{c.d}</p>
                  </div>
                  <div className="mt-4 pt-2 bg-[#F5EFE6] border border-[#EBDCCB]/60 p-2 rounded-lg font-mono-code text-[10px] text-[#7C6859]">
                    {c.f}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F5EFE6] border border-[#EBDCCB] rounded-xl p-4 shadow-sm text-xs text-[#7C6859] leading-relaxed">
              <strong className="text-[#2B1E17] font-mono-code">[팀 협업 구성 안내]</strong> YOLO 기반 객체 탐지 모델 및 Python Flask 분석 서버는 팀 전체 시스템의 공통 구성 요소이며, 개인의 독자적인 모델 학습 및 개발이 아닌 백엔드 연동 파이프라인 관점에서 협업하였습니다.
            </div>

            <div className="bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-4">
              <span className="font-mono-code text-xs font-semibold text-[#BF7326] uppercase">
                ENGINEERING RETROSPECTIVE (기술적 경험)
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#7C6859] leading-relaxed">
                {[
                  ['1. AI 분석과 서비스 데이터의 연결', '이미지 분석 모델이 반환한 탐지 결과를 실제 매장의 재고 데이터와 연결하는 과정에서 백엔드 데이터 처리의 역할을 깊이 있게 경험했습니다.'],
                  ['2. 서로 다른 서버 간 데이터 연동', 'Java 백엔드와 Python Flask 서버의 요청 및 응답 구조를 연결하여 AI 기능을 기존 웹서비스 아키텍처에 안정적으로 통합했습니다.'],
                  ['3. 데이터 정합성 문제 해결', '하나의 요청에서 처리되는 재고와 이력 데이터는 결코 부분적으로 저장되지 않아야 한다는 점을 확인하고 트랜잭션 경계를 올바르게 통합했습니다.'],
                  ['4. 실패 상황을 이용한 검증', '정상적인 성공 흐름뿐 아니라 DB 저장 실패 상황을 직접 재현하고 테스트하여 예외 시 롤백 동작의 신뢰성을 확인했습니다.'],
                ].map(([h, p]) => (
                  <div key={String(h)} className="p-3.5 bg-[#F5EFE6]/70 border border-[#EBDCCB]/60 rounded-xl">
                    <strong className="text-[#2B1E17] block font-mono-code text-xs mb-1">{h}</strong>
                    {p}
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-3 mt-2 p-3 bg-[#FAF6EE] border border-[#EBDCCB]/80 rounded-xl">
                <span className="material-symbols-outlined text-[#D9822B] text-[24px] shrink-0">format_quote</span>
                <p className="text-xs md:text-sm text-[#2B1E17] font-medium italic">
                  "AI의 객체 탐지 결과를 실제 재고 데이터로 연결하고, 데이터 저장 과정의 정합성을 개선한 백엔드 개발 경험"
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-6 gap-3" id="repository">
              <a
                className="h-12 px-8 rounded-xl bg-gradient-to-r from-[#D9822B] to-[#BF7326] text-white font-mono-code text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(217,130,43,0.3)] hover:opacity-95 active:scale-95 transition-all"
                href="https://github.com/2026-SMHRD-IS-GAI-3/BreadSecretary"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>VIEW SOURCE CODE (REPOSITORY)</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
              <a
                className="text-xs font-mono-code text-[#BF7326] font-semibold hover:underline inline-flex items-center gap-1"
                href="https://github.com/2026-SMHRD-IS-GAI-3/BreadSecretary/blob/main/src/main/java/com/breadsec/controller/RoiUploadAnalysisController.java"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>주요 소스코드: RoiUploadAnalysisController.java 바로가기</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
              <span className="font-mono-code text-xs text-[#A29082]">
                2026-SMHRD-IS-GAI-3/BreadSecretary (팀 저장소 및 로컬 개선 검증 자료)
              </span>
            </div>

            {/* Bottom Connected Milestone Navigation */}
            <div className="w-full bg-[#FFFDF9] border border-[#EBDCCB] rounded-2xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 mt-2">
              <button
                type="button"
                onClick={() => onNavigate('/projects/facefit')}
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl border border-[#EBDCCB]/70 bg-[#FAF6EE] hover:bg-[#FFFFFF] hover:border-[#D9822B]/40 text-[#7C6859] hover:text-[#BF7326] transition-all group shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">
                  arrow_back
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-mono-code text-[11px] text-[#A29082]">PREVIOUS PROJECT</span>
                  <span className="text-sm font-semibold text-[#2B1E17]">01 FaceFit (AI 모의 면접)</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/', 'projects')}
                className="px-6 py-3.5 rounded-xl bg-[#F5EFE6] border border-[#EBDCCB] text-[#8D5325] text-xs font-semibold hover:bg-[#FAF6EE] hover:border-[#D9822B]/40 shadow-xs transition-all cursor-pointer"
              >
                전체 프로젝트 목록으로
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/projects/nongdam')}
                className="flex items-center gap-3 px-6 py-3.5 rounded-xl border border-[#EBDCCB]/70 bg-[#FAF6EE] hover:bg-[#FFFFFF] hover:border-[#D9822B]/40 text-[#7C6859] hover:text-[#BF7326] transition-all group shadow-xs cursor-pointer"
              >
                <div className="flex flex-col text-right">
                  <span className="font-mono-code text-[11px] text-[#A29082]">NEXT PROJECT</span>
                  <span className="text-sm font-semibold text-[#2B1E17]">03 농담 (다국어 농업 소통)</span>
                </div>
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full bg-[#FFFDF9] border-t border-[#EBDCCB] py-8 mt-12">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5EFE6] border border-[#EBDCCB]">
              <span className="w-2 h-2 rounded-full bg-[#2E4A3E]" />
              <span className="font-mono-code text-xs text-[#2B1E17]">All systems normal</span>
            </div>
            <span className="text-xs text-[#A29082]">© 2026 김서영 (Seoyoung Kim). All rights reserved.</span>
          </div>
          <nav className="flex items-center gap-6">
            <button type="button" onClick={() => onNavigate('/', 'about')} className="text-xs font-medium text-[#7C6859] hover:text-[#BF7326] cursor-pointer">
              소개
            </button>
            <button type="button" onClick={() => onNavigate('/', 'projects')} className="text-xs font-medium text-[#7C6859] hover:text-[#BF7326] cursor-pointer">
              프로젝트
            </button>
            <button type="button" onClick={() => onNavigate('/', 'skills')} className="text-xs font-medium text-[#7C6859] hover:text-[#BF7326] cursor-pointer">
              기술 스택
            </button>
            <button type="button" onClick={() => onNavigate('/', 'contact')} className="text-xs font-medium text-[#7C6859] hover:text-[#BF7326] cursor-pointer">
              연락처
            </button>
          </nav>
        </div>
      </footer>
    </div>
  );
};
