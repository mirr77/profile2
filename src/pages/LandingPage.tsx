import React, { useEffect, useRef, useState } from 'react';
import { SafeImage } from '../components/SafeImage';
import { ResumeModal } from '../components/ResumeModal';
import { HOTLINK_ASSETS, NavigateFn } from '../types';

interface LandingPageProps {
  onNavigate: NavigateFn;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const activeLineRef = useRef<SVGLineElement>(null);
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: true });
  const [resumeOpen, setResumeOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const projectEls = document.querySelectorAll<HTMLElement>('.project-card-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-project-idx'));
            if (idx) {
              setVisibleCards((prev) => ({ ...prev, [idx]: true }));
            }
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    projectEls.forEach((el) => observer.observe(el));

    const updateTimelineDraw = () => {
      const container = timelineContainerRef.current;
      const activeLine = activeLineRef.current;
      if (!container || !activeLine) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const startTrigger = windowHeight * 0.75;
      const progressPixels = startTrigger - rect.top;
      const progress = Math.max(0, Math.min(1, progressPixels / Math.max(1, totalHeight)));
      const drawLength = Math.max(0, totalHeight - 76);

      activeLine.style.strokeDasharray = `${drawLength}`;
      activeLine.style.strokeDashoffset = `${drawLength * (1 - progress)}`;
    };

    window.addEventListener('scroll', updateTimelineDraw, { passive: true });
    window.addEventListener('resize', updateTimelineDraw);
    const timer = window.setTimeout(updateTimelineDraw, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateTimelineDraw);
      window.removeEventListener('resize', updateTimelineDraw);
      window.clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText('010-2345-6789');
    setCopiedPhone(true);
    window.setTimeout(() => setCopiedPhone(false), 1800);
  };

  const quickTechPills = [
    'Java',
    'Python',
    'TypeScript',
    'Spring Boot',
    'Spring Security',
    'Spring Data JPA',
    'FastAPI',
    'Flask',
    'React',
    'MyBatis',
    'PostgreSQL',
    'Oracle',
    'Supabase',
    'Docker',
    'Git',
    'Ncloud Object Storage',
  ];

  return (
    <div className="bg-[#FAFBF8] text-[#1F2937] antialiased selection:bg-[#C7F36B] selection:text-[#141F00] min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Ambient Radial Blur Backdrop */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#DCF98E]/40 via-[#B9F068]/20 to-transparent blur-[120px] -z-10 rounded-full opacity-80" />
      <div className="pointer-events-none fixed top-48 right-[10%] w-[400px] h-[400px] bg-[#E3FBD3]/40 blur-[100px] -z-10 rounded-full" />

      {/* Header: Minimalist Glass Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#FAFBF8]/85 backdrop-blur-md border-b border-[#E5E7EB]/80 transition-all">
        <div className="max-w-[1140px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#C7F36B] border border-[#4B6700]/40 group-hover:scale-125 transition-transform" />
            <span className="font-mono-code text-[15px] font-bold tracking-tight text-[#1F2937]">김서영</span>
          </button>

          <nav className="flex items-center gap-5 sm:gap-8 text-[14px] text-[#586255] font-medium overflow-x-auto">
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="hover:text-[#1F2937] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              소개
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="hover:text-[#1F2937] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              프로젝트
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('skills')}
              className="hover:text-[#1F2937] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              기술 스택
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#1F2937] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              연락처
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setResumeOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] text-xs font-mono-code font-semibold text-[#1F2937] hover:border-[#91B83C] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Resume</span>
          </button>
        </div>
      </header>

      <main className="flex-1 w-full pt-20">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
            <div className="absolute inset-0 bg-grid-subtle opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)]" />
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[850px] h-[480px] bg-gradient-to-b from-[#DCF98E]/35 via-[#B9F068]/20 to-transparent blur-[120px] rounded-full" />
            <div className="absolute top-[120px] left-[15%] w-[380px] h-[380px] bg-[#60A5FA]/15 blur-[100px] rounded-full" />
            <div className="absolute top-[100px] right-[12%] w-[420px] h-[420px] bg-[#10B981]/15 blur-[110px] rounded-full" />
            <div className="absolute top-[220px] left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-[#C7F36B]/20 blur-[90px] rounded-full" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[850px] md:w-[1000px] h-[650px] opacity-80 mix-blend-multiply pointer-events-none select-none">
              <SafeImage
                decorative
                alt=""
                className="w-full h-full object-contain"
                src={HOTLINK_ASSETS.watercolorWash}
              />
            </div>
          </div>

          <div className="relative z-10 max-w-[960px] mx-auto px-6 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5E7EB] shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#52B413] animate-pulse" />
              <span className="font-mono-code text-xs font-medium text-[#586255]">
                Backend &amp; Full-Stack Engineer
              </span>
            </div>

            <h1
              className="font-goheung text-[36px] sm:text-[50px] md:text-[62px] leading-[1.18] font-bold text-[#1F2937] tracking-tight max-w-4xl"
              style={{ fontSize: 'clamp(39px, 5.2vw, 65px)' }}
            >
              복잡한 문제를 명확한 구조로 풀어내는
              <br />
              <span className="drop-shadow-sm text-[#586255]">백엔드 설계</span> &amp; 풀스택 개발자
            </h1>

            <div className="mt-6 text-[16px] sm:text-[18px] text-[#586255] leading-relaxed max-w-2xl font-normal space-y-1">
              <p>API 설계부터 데이터 관리, AI 서비스 연동까지.</p>
              <p>사용자가 마주하는 경험 뒤에서 데이터의 흐름과 안정성을 고민하는 개발자입니다.</p>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5E7EB] text-[#1F2937] font-semibold shadow-sm hover:bg-[#FAFBF8] hover:border-[#91B83C]/40 active:scale-[0.98] transition-all text-center text-[16px] cursor-pointer"
              >
                About Me
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center h-12 pl-5 pr-5 rounded-xl bg-[#C7F36B] text-[#141F00] font-semibold text-[15px] border border-[#91B83C]/50 shadow-sm hover:bg-[#bcf056] active:scale-[0.98] transition-all gap-2.5 group cursor-pointer"
              >
                <span>프로젝트 둘러보기</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-xl">
              {quickTechPills.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#E5E7EB] text-[#586255] font-mono-code text-[12px] shadow-xs hover:border-[#91B83C]/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Hero Stats Bar */}
            <div className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col items-center md:items-start p-2 md:border-r border-[#E5E7EB]/70">
                <span className="font-mono-code tabular-nums text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
                  3<span className="text-[#4B6700] font-semibold">+</span>
                </span>
                <span className="text-[13px] text-[#586255] mt-1 font-medium">백엔드/풀스택 집중 개발</span>
              </div>
              <div className="flex flex-col items-center md:items-start p-2 md:border-r border-[#E5E7EB]/70">
                <span className="font-mono-code tabular-nums text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
                  100K<span className="text-[#4B6700] font-semibold">+</span>
                </span>
                <span className="text-[13px] text-[#586255] mt-1 font-medium">일일 처리 트랜잭션 최적화</span>
              </div>
              <div className="flex flex-col items-center md:items-start p-2 md:border-r border-[#E5E7EB]/70">
                <span className="font-mono-code tabular-nums text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
                  99.9<span className="text-[#4B6700] font-semibold">%</span>
                </span>
                <span className="text-[13px] text-[#586255] mt-1 font-medium">서비스 무중단 가용성 (SLA)</span>
              </div>
              <div className="flex flex-col items-center md:items-start p-2">
                <span className="font-mono-code tabular-nums text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
                  38<span className="text-[#4B6700] font-semibold">%</span>
                </span>
                <span className="text-[13px] text-[#586255] mt-1 font-medium">캐시 계층 응답속도 단축</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: ABOUT & STORY */}
        <section className="py-20 md:py-24 border-t border-[#E5E7EB]" id="about">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="flex flex-col items-start gap-1.5 mb-12">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4B6700]" />
                <span className="font-mono-code text-[12px] font-semibold tracking-wider text-[#586255] uppercase">
                  About &amp; Story
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight">
                시스템 안정성과 사용자 편의성에 집중하는 엔지니어링
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5 rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.02)] h-full">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#C7F36B]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]/80">
                  <span className="font-mono-code text-[12px] text-[#8A9486]">core_profile.ts</span>
                  <span className="inline-flex items-center gap-1.5 font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-[#F2F5EF] text-[#4B6700] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#91B83C]" /> Verified Dev
                  </span>
                </div>

                <div className="my-10 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-3xl bg-[#FAFBF8] border-2 border-[#CBD5C7] flex items-center justify-center shadow-inner relative">
                    <span className="font-mono-code text-5xl font-extrabold text-[#4B6700]">K</span>
                    <span className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#C7F36B] border border-[#91B83C] flex items-center justify-center text-[#141F00]">
                      <span className="material-symbols-outlined text-[16px]">code</span>
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-[#1F2937] mt-4">김서영 · Seoyoung Kim</h3>
                  <p className="text-[13px] text-[#586255] font-mono-code mt-0.5">Software Engineer @ TechLabs</p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-[#E5E7EB]/80 font-mono-code text-[12px]">
                  <div className="p-2.5 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB]">
                    <span className="text-[#8A9486] text-[11px] block">Location</span>
                    <span className="font-medium text-[#1F2937] font-sans text-[13px]">
                      Jeonnam-Gwangju, <br />
                      KR (UTC+9)
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB]">
                    <span className="text-[#8A9486] text-[11px] block">Focus</span>
                    <span className="font-medium text-[#1F2937] font-sans text-[13px]">Backend / Distributed</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between gap-6 h-full">
                <div className="rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.02)] flex flex-col justify-between gap-6 h-full">
                  <div className="flex flex-col gap-3 pt-2">
                    <div className="p-4 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-[#4B6700] text-[14px] font-mono-code font-semibold pb-2 border-b border-[#E5E7EB]/70">
                        <span className="material-symbols-outlined text-[20px]">emoji_events</span>
                        <span>수상 (Awards)</span>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <button
                          type="button"
                          onClick={() => onNavigate('/projects/nongdam')}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-left hover:text-[#4B6700] transition-colors cursor-pointer"
                        >
                          <p className="text-[15px] font-semibold text-[#1F2937]">전남광주 청년 AI 솔버톤 최우수상</p>
                          <p className="text-[13px] text-[#586255] font-mono-code font-medium">농담 (밭머리) →</p>
                        </button>
                        <button
                          type="button"
                          onClick={() => onNavigate('/projects/facefit')}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-2 border-t border-[#E5E7EB]/50 text-left hover:text-[#4B6700] transition-colors cursor-pointer"
                        >
                          <p className="text-[15px] font-semibold text-[#1F2937]">스마트인재 개발원 실전 프로젝트 최우수상</p>
                          <p className="text-[13px] text-[#586255] font-mono-code font-medium">FaceFit →</p>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] flex flex-col justify-between gap-3">
                        <div className="flex items-center gap-2 text-[#4B6700] text-[14px] font-mono-code font-semibold pb-2 border-b border-[#E5E7EB]/50 h-8">
                          <span className="material-symbols-outlined text-[18px]">school</span>
                          <span>학력 및 교육 (Education)</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-between gap-3 pt-1">
                          <div className="min-h-[52px]">
                            <p className="text-[15px] font-medium text-[#1F2937] leading-tight">순천대학교 생물학과</p>
                            <p className="text-[13px] text-[#586255] font-medium mt-1">이학사 졸업 (3.13 / 4.5)</p>
                          </div>
                          <div className="pt-2.5 border-t border-[#E5E7EB]/50 min-h-[56px]">
                            <p className="text-[15px] font-medium text-[#1F2937] leading-tight">스마트인재개발원</p>
                            <p className="text-[13px] text-[#586255] font-medium mt-1">
                              생성형 AI융합서비스 개발자 과정 (2026.02.19 ~ 2026.08.31)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] flex flex-col justify-between gap-3">
                        <div className="flex items-center gap-2 text-[#4B6700] text-[14px] font-mono-code font-semibold pb-2 border-b border-[#E5E7EB]/50 h-8">
                          <span className="material-symbols-outlined text-[18px]">work</span>
                          <span>경력 (Experience)</span>
                        </div>
                        <div className="flex-1 flex flex-col justify-between gap-3 pt-1">
                          <div className="min-h-[52px]">
                            <p className="text-[15px] font-medium text-[#1F2937] leading-tight">서인디지탈</p>
                            <p className="text-[13px] text-[#586255] font-medium mt-1">PL, 기술지원</p>
                          </div>
                          <div className="pt-2.5 border-t border-[#E5E7EB]/50 min-h-[56px]">
                            <p className="text-[15px] font-medium text-[#1F2937] leading-tight">코엔텍 R&amp;C</p>
                            <p className="text-[13px] text-[#586255] font-medium mt-1">수질/대기 분석, 고객관리</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E5E7EB]/80 flex items-center justify-between">
                    <span className="text-xs font-mono-code text-[#8A9486]">Updated 2026</span>
                    <button
                      type="button"
                      onClick={() => setResumeOpen(true)}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] text-[#1F2937] font-mono-code text-[12px] font-semibold hover:border-[#4B6700] hover:text-[#4B6700] active:scale-95 transition-all shadow-xs group cursor-pointer"
                    >
                      <span className="w-5 h-5 rounded-md bg-[#FAFBF8] border border-[#E5E7EB] flex items-center justify-center group-hover:border-[#4B6700]/40">
                        <span className="material-symbols-outlined text-[14px] text-[#4B6700]">download</span>
                      </span>
                      <span>Resume 다운로드</span>
                      <span className="material-symbols-outlined text-[14px] text-[#8A9486] group-hover:text-[#4B6700] group-hover:translate-x-0.5 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FEATURED WORKS */}
        <section className="py-20 md:py-28 border-t border-[#E5E7EB] relative" id="projects">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4B6700]" />
                  <span className="font-mono-code text-[12px] font-semibold tracking-wider text-[#586255] uppercase">
                    Featured Works
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight">대표 프로젝트</h2>
              </div>
              <p className="text-sm text-[#586255]">
                카드를 클릭하면 각 프로젝트의 상세 아키텍처와 트러블슈팅 케이스 스터디로 이동합니다.
              </p>
            </div>

            <div className="relative" ref={timelineContainerRef}>
              {/* Desktop Continuous SVG Path */}
              <div
                className="hidden sm:block absolute left-[27px] top-[28px] bottom-[48px] w-2 pointer-events-none z-0"
                style={{
                  maskImage: 'linear-gradient(transparent 0%, black 15%, black 60%, transparent 100%)',
                }}
              >
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <line className="timeline-path-bg" x1="4" x2="4" y1="0" y2="100%" />
                  <line
                    ref={activeLineRef}
                    className="timeline-path-active"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    x1="4"
                    x2="4"
                    y1="0"
                    y2="100%"
                  />
                </svg>
              </div>

              <div className="space-y-12 sm:space-y-16">
                {/* PROJECT 01: FaceFit */}
                <div
                  className={`project-card-item relative flex flex-col sm:flex-row gap-5 sm:gap-8 group ${
                    visibleCards[1] ? 'is-visible' : ''
                  }`}
                  data-project-idx="1"
                >
                  <div className="flex items-center sm:items-start shrink-0 z-10 pt-1">
                    <div
                      className={`timeline-node w-[56px] h-[56px] rounded-2xl bg-[#FFFFFF] border-2 border-[#CBD5C7] flex flex-col items-center justify-center font-mono-code text-[15px] font-bold text-[#586255] shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.02)] relative ${
                        visibleCards[1] ? 'is-active' : ''
                      }`}
                    >
                      <span className="tracking-tighter">01</span>
                      <span className="text-[9px] uppercase tracking-wider text-[#8A9486] font-normal">PROJ</span>
                    </div>
                    <div className="sm:hidden ml-3 font-mono-code text-[13px] font-bold text-[#4B6700]">
                      WebRTC &amp; LLM Analysis
                    </div>
                  </div>

                  <div className="flex-1 rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] hover:border-[#91B83C]/60 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      <button
                        type="button"
                        onClick={() => onNavigate('/projects/facefit')}
                        className="lg:col-span-5 bg-[#FAFBF8] border-b lg:border-b-0 lg:border-r border-[#E5E7EB] relative overflow-hidden group/img min-h-[220px] lg:min-h-[290px] flex items-center justify-center cursor-pointer"
                      >
                        <SafeImage
                          alt="FaceFit AI 모의 면접 서비스 화면"
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                          src={HOTLINK_ASSETS.facefitPreview}
                          fallbackTitle="FaceFit 모의 면접 화면"
                        />
                      </button>

                      <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-5">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono-code text-[12px] font-semibold text-[#4B6700] uppercase tracking-wide">
                              AI Interview &amp; Async Pipeline
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => onNavigate('/projects/facefit')}
                            className="text-left text-xl sm:text-2xl font-bold text-[#1F2937] hover:text-[#4B6700] transition-colors cursor-pointer"
                          >
                            FaceFit (AI 모의 면접 서비스)
                          </button>
                          <p className="mt-2.5 text-[14px] sm:text-[15px] text-[#586255] leading-relaxed">
                            이력서·자소서·채용 공고 기반 맞춤 질문 생성부터 영상 답변 녹화, AI 비동기 분석 및 피드백 리포트까지 연결한 서비스입니다. Job·Outbox 비동기 구조와 60초 단회성 재생 토큰으로 데이터 정합성과 미디어 접근 제어를 구현했습니다.
                          </p>
                          <div className="mt-4 p-3 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] grid grid-cols-2 gap-2 text-[12px] font-mono-code">
                            <div>
                              <span className="text-[#8A9486] block text-[10px] uppercase">My Role</span>
                              <span className="text-[#1F2937] font-semibold">백엔드 API · DB · AI 연동</span>
                            </div>
                            <div>
                              <span className="text-[#8A9486] block text-[10px] uppercase">Key Metric</span>
                              <span className="text-[#4B6700] font-semibold">핵심 회귀 테스트 19/19 통과</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {['Java 21', 'Spring Boot', 'JPA', 'PostgreSQL', 'Ncloud Storage'].map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded-full bg-[#F2F5EF] border border-[#E5E7EB] text-[11px] font-mono-code text-[#586255]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[#E5E7EB]/80 flex flex-wrap items-center justify-between gap-3">
                          <a
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-[#FAFBF8] hover:bg-[#FFFFFF] hover:border-[#4B6700]/40 text-[12px] font-mono-code text-[#586255] hover:text-[#4B6700] transition-all shadow-xs"
                            href="https://github.com/kasic2014/facefit_nw"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <span className="material-symbols-outlined text-[15px] text-[#4B6700]">terminal</span>
                            <span>github.com/kasic2014/facefit_nw</span>
                            <span className="material-symbols-outlined text-[13px] opacity-70">open_in_new</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => onNavigate('/projects/facefit')}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAFBF8] border border-[#E5E7EB] hover:border-[#91B83C]/60 text-[13px] font-semibold text-[#4B6700] transition-all group/btn shadow-xs cursor-pointer"
                          >
                            <span>프로젝트 자세히 보기</span>
                            <span className="w-5 h-5 rounded-full bg-[#C7F36B]/40 border border-[#91B83C]/40 flex items-center justify-center group-hover/btn:bg-[#C7F36B] group-hover/btn:translate-x-0.5 transition-all">
                              <span className="material-symbols-outlined text-[13px] text-[#141F00]">arrow_forward</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROJECT 02: 빵비서 */}
                <div
                  className={`project-card-item relative flex flex-col sm:flex-row gap-5 sm:gap-8 group ${
                    visibleCards[2] ? 'is-visible' : ''
                  }`}
                  data-project-idx="2"
                >
                  <div className="flex items-center sm:items-start shrink-0 z-10 pt-1">
                    <div
                      className={`timeline-node w-[56px] h-[56px] rounded-2xl bg-[#FFFFFF] border-2 border-[#CBD5C7] flex flex-col items-center justify-center font-mono-code text-[15px] font-bold text-[#586255] shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.02)] relative ${
                        visibleCards[2] ? 'is-active' : ''
                      }`}
                    >
                      <span className="tracking-tighter">02</span>
                      <span className="text-[9px] uppercase tracking-wider text-[#8A9486] font-normal">PROJ</span>
                    </div>
                    <div className="sm:hidden ml-3 font-mono-code text-[13px] font-bold text-[#4B6700]">
                      AI Inventory Management
                    </div>
                  </div>

                  <div className="flex-1 rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] hover:border-[#91B83C]/60 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      <button
                        type="button"
                        onClick={() => onNavigate('/projects/bbangbiseo')}
                        className="lg:col-span-5 bg-[#FAFBF8] border-b lg:border-b-0 lg:border-r border-[#E5E7EB] relative overflow-hidden group/img min-h-[220px] lg:min-h-[290px] flex items-center justify-center cursor-pointer"
                      >
                        <SafeImage
                          alt="빵비서 대표 이미지"
                          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover/img:scale-105"
                          src={HOTLINK_ASSETS.breadPreview}
                          fallbackTitle="빵비서 매대 분석 화면"
                        />
                      </button>

                      <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-5">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono-code text-[12px] font-semibold text-[#4B6700] uppercase tracking-wide">
                              AI Inventory &amp; ROI Mapping
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => onNavigate('/projects/bbangbiseo')}
                            className="text-left text-xl sm:text-2xl font-bold text-[#1F2937] hover:text-[#4B6700] transition-colors cursor-pointer"
                          >
                            빵비서 (이미지 분석 기반 베이커리 재고 관리 서비스)
                          </button>
                          <p className="mt-2.5 text-[14px] sm:text-[15px] text-[#586255] leading-relaxed">
                            베이커리 매대 사진을 YOLO 모델로 분석하고 진열 구역(ROI)별 탐지 수량을 품목 단위로 집계하여 매장 재고·이력에 반영하는 서비스입니다. 단일 SqlSession 트랜잭션으로 재고·이력 원자적 롤백 구조를 개선했습니다.
                          </p>
                          <div className="mt-4 p-3 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] grid grid-cols-2 gap-2 text-[12px] font-mono-code">
                            <div>
                              <span className="text-[#8A9486] block text-[10px] uppercase">My Role</span>
                              <span className="text-[#1F2937] font-semibold">Java 백엔드 · DB · Flask 연동</span>
                            </div>
                            <div>
                              <span className="text-[#8A9486] block text-[10px] uppercase">Key Metric</span>
                              <span className="text-[#4B6700] font-semibold">H2 Oracle 모드 7/7 테스트 통과</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {['Java 17', 'Servlet / JSP', 'MyBatis 3.5', 'Oracle 19c', 'Python Flask', 'YOLOv8'].map(
                              (tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-0.5 rounded-full bg-[#F2F5EF] border border-[#E5E7EB] text-[11px] font-mono-code text-[#586255]"
                                >
                                  {tag}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[#E5E7EB]/80 flex flex-wrap items-center justify-between gap-3">
                          <a
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-[#FAFBF8] hover:bg-[#FFFFFF] hover:border-[#4B6700]/40 text-[12px] font-mono-code text-[#586255] hover:text-[#4B6700] transition-all shadow-xs"
                            href="https://github.com/2026-SMHRD-IS-GAI-3/BreadSecretary"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <span className="material-symbols-outlined text-[15px] text-[#4B6700]">terminal</span>
                            <span>BreadSecretary GitHub</span>
                            <span className="material-symbols-outlined text-[13px] opacity-70">open_in_new</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => onNavigate('/projects/bbangbiseo')}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAFBF8] border border-[#E5E7EB] hover:border-[#91B83C]/60 text-[13px] font-semibold text-[#4B6700] transition-all group/btn shadow-xs cursor-pointer"
                          >
                            <span>프로젝트 자세히 보기</span>
                            <span className="w-5 h-5 rounded-full bg-[#C7F36B]/40 border border-[#91B83C]/40 flex items-center justify-center group-hover/btn:bg-[#C7F36B] group-hover/btn:translate-x-0.5 transition-all">
                              <span className="material-symbols-outlined text-[13px] text-[#141F00]">arrow_forward</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROJECT 03: 농담 */}
                <div
                  className={`project-card-item relative flex flex-col sm:flex-row gap-5 sm:gap-8 group ${
                    visibleCards[3] ? 'is-visible' : ''
                  }`}
                  data-project-idx="3"
                >
                  <div className="flex items-center sm:items-start shrink-0 z-10 pt-1">
                    <div
                      className={`timeline-node w-[56px] h-[56px] rounded-2xl bg-[#FFFFFF] border-2 border-[#CBD5C7] flex flex-col items-center justify-center font-mono-code text-[15px] font-bold text-[#586255] shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.02)] relative ${
                        visibleCards[3] ? 'is-active' : ''
                      }`}
                    >
                      <span className="tracking-tighter">03</span>
                      <span className="text-[9px] uppercase tracking-wider text-[#8A9486] font-normal">PROJ</span>
                    </div>
                    <div className="sm:hidden ml-3 font-mono-code text-[13px] font-bold text-[#4B6700]">
                      Multilingual Agri-Communication
                    </div>
                  </div>

                  <div className="flex-1 rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)] hover:border-[#91B83C]/60 transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      <button
                        type="button"
                        onClick={() => onNavigate('/projects/nongdam')}
                        className="lg:col-span-5 bg-[#FAFBF8] border-b lg:border-b-0 lg:border-r border-[#E5E7EB] relative overflow-hidden group/img min-h-[220px] lg:min-h-[290px] flex items-center justify-center cursor-pointer"
                      >
                        <SafeImage
                          alt="농담(밭머리) 다국어 작업 지시 서비스 화면"
                          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover/img:scale-105"
                          src={HOTLINK_ASSETS.nongdamPreview}
                          fallbackTitle="농담(밭머리) 다국어 지시 화면"
                        />
                      </button>

                      <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-5">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono-code text-[12px] font-semibold text-[#4B6700] uppercase tracking-wide">
                              Multilingual Agri-Communication · 솔버톤 최우수상
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => onNavigate('/projects/nongdam')}
                            className="text-left text-xl sm:text-2xl font-bold text-[#1F2937] hover:text-[#4B6700] transition-colors cursor-pointer"
                          >
                            농담(밭머리) — 다국어 농업 작업 지시 서비스
                          </button>
                          <p className="mt-2.5 text-[14px] sm:text-[15px] text-[#586255] leading-relaxed">
                            농장주의 음성 지시를 AI로 구조화하고 QR코드를 통해 외국인 근로자에게 모국어 텍스트·음성으로 전달하는 서비스입니다. expected_version 기반 충돌 방지와 지시 변경 재확인 흐름을 구현했습니다.
                          </p>
                          <div className="mt-4 p-3 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] grid grid-cols-2 gap-2 text-[12px] font-mono-code">
                            <div>
                              <span className="text-[#8A9486] block text-[10px] uppercase">My Role</span>
                              <span className="text-[#1F2937] font-semibold">풀스택 프론트 &amp; API 연동</span>
                            </div>
                            <div>
                              <span className="text-[#8A9486] block text-[10px] uppercase">Key Metric</span>
                              <span className="text-[#4B6700] font-semibold">브라우저 호환 53/53 PASS</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Supabase', 'STT · TTS'].map(
                              (tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-0.5 rounded-full bg-[#F2F5EF] border border-[#E5E7EB] text-[11px] font-mono-code text-[#586255]"
                                >
                                  {tag}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[#E5E7EB]/80 flex flex-wrap items-center justify-between gap-3">
                          <a
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-[#FAFBF8] hover:bg-[#FFFFFF] hover:border-[#4B6700]/40 text-[12px] font-mono-code text-[#586255] hover:text-[#4B6700] transition-all shadow-xs"
                            href="https://github.com/da960822-ux/kidding"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <span className="material-symbols-outlined text-[15px] text-[#4B6700]">terminal</span>
                            <span>github.com/da960822-ux/kidding</span>
                            <span className="material-symbols-outlined text-[13px] opacity-70">open_in_new</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => onNavigate('/projects/nongdam')}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAFBF8] border border-[#E5E7EB] hover:border-[#91B83C]/60 text-[13px] font-semibold text-[#4B6700] transition-all group/btn shadow-xs cursor-pointer"
                          >
                            <span>프로젝트 자세히 보기</span>
                            <span className="w-5 h-5 rounded-full bg-[#C7F36B]/40 border border-[#91B83C]/40 flex items-center justify-center group-hover/btn:bg-[#C7F36B] group-hover/btn:translate-x-0.5 transition-all">
                              <span className="material-symbols-outlined text-[13px] text-[#141F00]">arrow_forward</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: TECH STACK */}
        <section className="py-20 md:py-24 border-t border-[#E5E7EB]" id="skills">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="flex flex-col items-start gap-1.5 mb-12">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4B6700]" />
                <span className="font-mono-code text-[12px] font-semibold tracking-wider text-[#586255] uppercase">
                  Technologies I Work With
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] tracking-tight">기술 스택</h2>
              <p className="text-[14px] text-[#586255] max-w-2xl mt-1">
                프로덕션 환경에서 검증하고 실제 프로젝트에 적용한 기술군입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: 'terminal',
                  title: 'Backend',
                  sub: 'Core Services',
                  items: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'Python', 'FastAPI'],
                },
                {
                  icon: 'web',
                  title: 'Frontend',
                  sub: 'Client & UI',
                  items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
                },
                {
                  icon: 'database',
                  title: 'Database',
                  sub: 'Data Persistence',
                  items: ['PostgreSQL', 'Oracle', 'MySQL', 'Redis', 'Supabase'],
                },
                {
                  icon: 'psychology',
                  title: 'AI / ML',
                  sub: 'LLM & Applied AI',
                  items: ['OpenAI API', 'YOLOv8', 'Whisper STT', 'TTS Pipeline'],
                },
                {
                  icon: 'cloud',
                  title: 'Cloud / Infra',
                  sub: 'DevOps & CI/CD',
                  items: ['Ncloud Object Storage', 'Docker', 'Nginx', 'GitHub Actions'],
                },
                {
                  icon: 'handshake',
                  title: 'Tools / Workflow',
                  sub: 'Agile & Collaboration',
                  items: ['Git', 'Jira', 'Notion', 'Figma', 'Slack'],
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className="rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.02)] flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4B6700] text-[20px]">{cat.icon}</span>
                      <h3 className="font-bold text-[#1F2937] text-[16px]">{cat.title}</h3>
                    </div>
                    <span className="font-mono-code text-[11px] text-[#8A9486]">{cat.sub}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-[#F2F5EF] border border-[#E5E7EB] text-[#1F2937] font-mono-code text-[12px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: CONTACT */}
        <section className="py-20 md:py-24 border-t border-[#E5E7EB]" id="contact">
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-8 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_4px_14px_rgba(0,0,0,0.02)] relative overflow-hidden">
              <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-[#C7F36B]/25 rounded-full blur-3xl pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                <div className="lg:col-span-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#91B83C] animate-ping" />
                    <span className="font-mono-code text-[12px] font-semibold tracking-wider text-[#586255] uppercase">
                      Let's Work Together
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold text-[#1F2937] tracking-tight">
                    함께 성장할 기회를 기다립니다
                  </h2>
                  <p className="text-[15px] text-[#586255] leading-relaxed">
                    새로운 기술적 도전, 대규모 트래픽 아키텍처 개선, 엔지니어링 협업 제안 등 언제나 열려 있습니다. 편하게 메시지를 남겨주세요.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[13px] font-mono-code text-[#4B6700] font-semibold pt-2">
                    <span className="material-symbols-outlined text-[18px]">bolt</span>
                    <span>보통 24시간 이내에 신속하게 회신합니다.</span>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col gap-3">
                  <div className="p-4 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] flex items-center justify-between hover:border-[#91B83C] transition-all group">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] flex items-center justify-center text-[#4B6700] group-hover:bg-[#C7F36B] transition-colors">
                        <span className="material-symbols-outlined text-[19px]">mail</span>
                      </div>
                      <div>
                        <span className="text-[11px] font-mono-code text-[#8A9486] block">Direct Email</span>
                        <a
                          className="text-[14px] font-mono-code font-semibold text-[#1F2937] hover:text-[#4B6700]"
                          href="mailto:candidate@example.com"
                        >
                          candidate@example.com
                        </a>
                      </div>
                    </div>
                    <a
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] text-[12px] font-mono-code text-[#586255] hover:text-[#4B6700] hover:border-[#4B6700]/50 shadow-xs active:scale-95 transition-all"
                      href="mailto:candidate@example.com"
                    >
                      <span>보내기</span>
                      <span className="material-symbols-outlined text-[13px]">send</span>
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] flex items-center justify-between hover:border-[#91B83C] transition-all group">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] flex items-center justify-center text-[#4B6700] group-hover:bg-[#C7F36B] transition-colors">
                        <span className="material-symbols-outlined text-[19px]">call</span>
                      </div>
                      <div>
                        <span className="text-[11px] font-mono-code text-[#8A9486] block">Mobile Phone</span>
                        <span className="text-[14px] font-mono-code font-semibold text-[#1F2937]">010-2345-6789</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="font-mono-code text-[11px] text-[#586255] hover:text-[#4B6700] px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#E5E7EB] cursor-pointer"
                    >
                      {copiedPhone ? '복사됨!' : '번호 복사'}
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] flex items-center justify-between hover:border-[#91B83C] transition-all group">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] flex items-center justify-center text-[#4B6700] group-hover:bg-[#C7F36B] transition-colors">
                        <span className="material-symbols-outlined text-[19px]">terminal</span>
                      </div>
                      <div>
                        <span className="text-[11px] font-mono-code text-[#8A9486] block">GitHub Profile</span>
                        <a
                          className="text-[14px] font-mono-code font-semibold text-[#1F2937] hover:text-[#4B6700]"
                          href="https://github.com/kasic2014"
                          rel="noreferrer"
                          target="_blank"
                        >
                          github.com/kasic2014
                        </a>
                      </div>
                    </div>
                    <a
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] text-[12px] font-mono-code text-[#586255] hover:text-[#4B6700] hover:border-[#4B6700]/50 shadow-xs active:scale-95 transition-all"
                      href="https://github.com/kasic2014"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>방문</span>
                      <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#FAFBF8] border-t border-[#E5E7EB] py-10">
        <div className="max-w-[1140px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-mono-code text-[14px] font-bold text-[#1F2937]">
              김서영<span className="text-[#4B6700] font-normal">.dev</span>
            </span>
            <div className="h-4 w-px bg-[#E5E7EB]" />
            <div className="flex items-center gap-1.5 font-mono-code text-[12px] text-[#586255]">
              <span className="w-2 h-2 rounded-full bg-[#52B413]" />
              <span>All systems normal</span>
            </div>
          </div>
          <div className="flex items-center gap-6 font-mono-code text-[13px] text-[#586255]">
            <button type="button" onClick={() => scrollToSection('about')} className="hover:text-[#1F2937] cursor-pointer">
              About
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="hover:text-[#1F2937] cursor-pointer"
            >
              Projects
            </button>
            <button type="button" onClick={() => scrollToSection('skills')} className="hover:text-[#1F2937] cursor-pointer">
              Tech Stack
            </button>
            <a
              className="hover:text-[#1F2937] transition-colors flex items-center gap-1"
              href="https://github.com/kasic2014"
              rel="noreferrer"
              target="_blank"
            >
              <span>GitHub</span>
            </a>
          </div>
          <div className="font-mono-code text-[12px] text-[#8A9486]">© 2026 김서영. Designed with care.</div>
        </div>
      </footer>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} onNavigate={onNavigate} />
    </div>
  );
};
