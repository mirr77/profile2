import React, { useMemo, useState } from 'react';
import { SafeImage } from '../components/SafeImage';
import { HOTLINK_ASSETS, NavigateFn } from '../types';

interface NongdamPageProps {
  onNavigate: NavigateFn;
}

type LangCode = 'VI' | 'NE' | 'KO';

export const NongdamPage: React.FC<NongdamPageProps> = ({ onNavigate }) => {
  const [plateLang, setPlateLang] = useState<LangCode>('VI');
  const [plateVersion, setPlateVersion] = useState<'v1' | 'v2'>('v1');
  const [confirmedV2, setConfirmedV2] = useState(false);

  const leaves = useMemo(() => {
    const sways = ['leaf-sway-1', 'leaf-sway-2', 'leaf-sway-3'];
    return Array.from({ length: 24 }, (_, i) => {
      const left = ((i * 37 + 11) % 90) + 4;
      const size = 28 + ((i * 13) % 18);
      const fallDur = (18 + ((i * 7) % 11)).toFixed(1);
      const swayDur = (6 + ((i * 3) % 4)).toFixed(1);
      const delay = (i * 1.1).toFixed(1);
      const opacity = (0.55 + ((i * 5) % 25) / 100).toFixed(2);
      const flipped = i % 2 === 0;
      const rotate = ((i * 19) % 36) - 18;
      return {
        id: i,
        left: `${left}%`,
        width: `${size}px`,
        opacity,
        sway: sways[i % sways.length],
        duration: `${fallDur}s, ${swayDur}s`,
        delay: `${delay}s, ${(Number(delay) * 0.35).toFixed(1)}s`,
        transform: `${flipped ? 'scaleX(-1)' : 'scaleX(1)'} rotate(${rotate}deg)`,
      };
    });
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const workOrderText = {
    v1: {
      KO: '[KO] 2번 밭 양파 15망 수확하고 노란 박스에 담아주세요. (장갑 착용)',
      VI: '[VI] Thu hoạch 15 lưới hành tây ở ruộng số 2 và xếp vào thùng màu vàng.',
      NE: '[NE] खेत नं. २ बाट १५ जाली प्याज टिपेर पहेंलो बाकसमा राख्नुहोस्।',
    },
    v2: {
      KO: '[KO · 변경됨] 2번 밭 양파 10망으로 수량 정정! 노란 박스에 담아주세요.',
      VI: '[VI · Cập nhật] Sửa số lượng: Thu hoạch 10 lưới hành tây ở ruộng số 2 và xếp vào thùng màu vàng.',
      NE: '[NE · अद्यावधिक] परिमाण परिवर्तन: खेत नं. २ बाट १० जाली प्याज टिपेर पहेंलो बाकसमा राख्नुहोस्।',
    },
  };

  const handlePlayVoice = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(workOrderText[plateVersion][plateLang]);
    utterance.lang = plateLang === 'KO' ? 'ko-KR' : plateLang === 'VI' ? 'vi-VN' : 'ne-NP';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1C2822] antialiased min-h-screen flex flex-col relative selection:bg-[#F4D06F]/40 selection:text-[#1C2822]">
      {/* Subtle ambient dot texture */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgb(74, 124, 89) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* TOP HEADER / NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/85 backdrop-blur-md border-b border-[#DCD5C9] transition-colors">
        <div className="max-w-[1200px] mx-auto h-16 px-4 flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="font-mono-code text-[16px] font-bold tracking-tight text-[#1C2822] flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8E667] border border-[#28481A]/30 shadow-xs inline-block" />
            <span>SEOYOUNG.KIM</span>
          </button>

          <nav className="flex items-center gap-3 md:gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/', 'about')}
              className="hidden sm:inline-block text-[15px] text-[#55655C] hover:text-[#1C2822] transition-colors px-2 py-1 whitespace-nowrap shrink-0 cursor-pointer"
            >
              소개
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/', 'projects')}
              className="transition-colors bg-[#28481A] text-[#FAF8F5] font-semibold rounded-full px-3.5 py-1.5 shadow-xs flex items-center gap-1.5 text-[15px] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px] text-[#F4D06F]">spa</span>
              <span>프로젝트</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/', 'skills')}
              className="text-[15px] text-[#55655C] hover:text-[#1C2822] transition-colors px-2 py-1 whitespace-nowrap shrink-0 cursor-pointer"
            >
              기술 스택
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/', 'contact')}
              className="text-[15px] text-[#55655C] hover:text-[#1C2822] transition-colors px-2 py-1 whitespace-nowrap shrink-0 cursor-pointer"
            >
              연락처
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN WRAPPER */}
      <main className="w-full pt-16 bg-[#FAF8F5] flex-1 relative overflow-hidden">
        <div className="flex flex-col w-full relative">
          {/* Background Ambient Marbled Fluid Layer */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
            <div className="absolute top-[60px] -left-28 w-[640px] pointer-events-none mix-blend-multiply opacity-65 transform -rotate-12 filter blur-[1px]">
              <SafeImage decorative src={HOTLINK_ASSETS.watercolorWash} alt="" className="w-full h-auto object-contain" />
            </div>
            <div className="absolute top-[720px] -right-32 w-[720px] pointer-events-none mix-blend-multiply opacity-60 transform rotate-[24deg] scale-x-[-1] filter blur-[0.5px]">
              <SafeImage decorative src={HOTLINK_ASSETS.watercolorWash} alt="" className="w-full h-auto object-contain" />
            </div>
            <div className="absolute top-[1520px] -left-36 w-[680px] pointer-events-none mix-blend-multiply opacity-65 transform rotate-[42deg] filter blur-[1px]">
              <SafeImage decorative src={HOTLINK_ASSETS.watercolorWash} alt="" className="w-full h-auto object-contain" />
            </div>
            <div className="absolute top-[2340px] -right-28 w-[740px] pointer-events-none mix-blend-multiply opacity-55 transform -rotate-[18deg] filter blur-[1.5px]">
              <SafeImage decorative src={HOTLINK_ASSETS.watercolorWash} alt="" className="w-full h-auto object-contain" />
            </div>
            <div className="absolute top-[3160px] -left-32 w-[700px] pointer-events-none mix-blend-multiply opacity-60 transform -rotate-[35deg] scale-x-[-1] filter blur-[1px]">
              <SafeImage decorative src={HOTLINK_ASSETS.watercolorWash} alt="" className="w-full h-auto object-contain" />
            </div>
          </div>

          {/* Dynamic Falling Leaves Container */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
            id="leaves-falling-container"
          >
            {leaves.map((leaf) => (
              <SafeImage
                key={leaf.id}
                decorative
                alt=""
                className="leaf-particle-img"
                src={HOTLINK_ASSETS.nongdamLeaf}
                style={
                  {
                    left: leaf.left,
                    width: leaf.width,
                    height: 'auto',
                    '--leaf-target-opacity': leaf.opacity,
                    '--sway-animation': leaf.sway,
                    animationDuration: leaf.duration,
                    animationDelay: leaf.delay,
                    transform: leaf.transform,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>

          {/* MAIN CONTAINER */}
          <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 lg:px-14 py-8 md:py-12 flex flex-col gap-16 md:gap-20 relative z-20">
            {/* HERO SECTION */}
            <section className="flex flex-col gap-6 relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono-code text-[14px] text-[#55655C]">
                  <button
                    type="button"
                    onClick={() => onNavigate('/')}
                    className="hover:text-[#28481A] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#4A7C59]">grass</span>홈
                  </button>
                  <span className="text-[#DCD5C9]">/</span>
                  <button
                    type="button"
                    onClick={() => onNavigate('/', 'projects')}
                    className="hover:text-[#28481A] transition-colors cursor-pointer"
                  >
                    프로젝트
                  </button>
                  <span className="text-[#DCD5C9]">/</span>
                  <span className="text-[#28481A] font-semibold">농담(밭머리)</span>
                </nav>

                <div className="flex items-center gap-1 p-1 rounded-lg bg-white/60 border border-[#DCD5C9]">
                  <button
                    type="button"
                    onClick={() => onNavigate('/projects/facefit')}
                    className="px-3 py-1 rounded-md text-xs font-mono-code font-medium text-[#55655C] hover:text-[#1C2822] cursor-pointer"
                  >
                    01 FaceFit
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('/projects/bbangbiseo')}
                    className="px-3 py-1 rounded-md text-xs font-mono-code font-medium text-[#55655C] hover:text-[#1C2822] cursor-pointer"
                  >
                    02 빵비서
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('/projects/nongdam')}
                    className="px-3 py-1 rounded-md text-xs font-mono-code font-bold bg-[#28481A] text-[#FAF8F5] shadow-xs cursor-pointer"
                  >
                    03 농담
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono-code text-[13px] uppercase px-3 py-1 rounded-full border border-[#DCD5C9] bg-white/40 text-[#28481A] font-semibold tracking-wider flex items-center gap-1.5 shadow-xs">
                    <span className="material-symbols-outlined text-[20px] text-[#F4D06F]">crown</span>
                    전남광주 청년 AI 솔버톤 최우수상
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono-code text-[12px] px-3 py-1 rounded-full border border-[#C8E667] bg-[#C8E667]/25 text-[#28481A] font-bold shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#4A7C59] animate-ping" />
                    MULTILINGUAL AGRI-COMMUNICATION
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/40 rounded-full border border-[#DCD5C9] text-[12px] font-mono-code text-[#55655C]">
                  <span className="tracking-widest uppercase text-[11px] mr-1">PALETTE</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4A7C59]" title="Forest Green" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B7F96]" title="Sky Cerulean" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#88C0D0]" title="Soft Breeze Cyan" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F4D06F]" title="Warm Amber" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EFE8D8] border border-[#DCD5C9]" title="Bright Ecru" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-code text-[15px] font-bold text-[#4A7C59]">농담(農談) / 밭머리</span>
                      <span className="text-[#DCD5C9]">|</span>
                      <span className="font-dasan italic text-[#28481A] text-[22px]">“농사를 이야기하다.”</span>
                    </div>
                    <h1
                      className="font-dasan font-bold leading-tight text-[#1C2822] tracking-tight flex items-baseline gap-1 sm:gap-2 flex-wrap"
                      style={{ fontSize: 'clamp(46px, 6vw, 80px)', lineHeight: 1.1, letterSpacing: '-0.035em' }}
                    >
                      <span className="inline-flex items-baseline flex-nowrap">
                        {['농', '담', '(', '밭', '머', '리', ')'].map((ch, idx) => (
                          <span key={idx} className="brush-char-wrapper">
                            <span className="brush-char" style={{ animationDelay: `${idx * 0.06}s` }}>
                              {ch}
                            </span>
                          </span>
                        ))}
                      </span>
                    </h1>
                    <p className="text-[18px] text-[#28481A] font-semibold tracking-tight mt-1">
                      농장주와 외국인 근로자를 연결하는 AI 기반 다국어 작업 지시 서비스
                    </p>
                  </div>
                  <p className="text-[17px] sm:text-[18px] text-[#55655C] leading-relaxed">
                    농담은 농장주와 외국인 근로자 사이에서 발생할 수 있는 언어 장벽과 작업 지시 전달 문제를 해결하기 위한 다국어 작업 지시 서비스입니다. 농장주는 음성으로 작업 지시를 입력하고, AI가 정리한 작업 내용과 수량, 안전사항 등을 검토한 뒤 게시할 수 있습니다. 외국인 근로자는 QR코드를 통해 작업팀에 참여하고, 자신의 언어로 번역된 작업 지시를 텍스트와 음성으로 확인할 수 있습니다. 또한 작업 도중 농장주가 지시사항을 변경하면 새로운 버전의 지시를 게시하고, 근로자가 변경된 내용을 다시 확인하도록 구성했습니다.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Supabase', 'STT · 번역 · TTS'].map((t) => (
                      <span
                        key={t}
                        className="font-mono-code text-[14px] px-3.5 py-1.5 rounded-full border border-[#DCD5C9] bg-transparent text-[#1C2822]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <a
                      className="h-12 px-6 rounded-full bg-[#28481A] hover:bg-[#1f3814] text-[#FAF8F5] font-semibold text-[15px] inline-flex items-center gap-2 hover:shadow-sm active:scale-95 transition-all"
                      href="https://github.com/da960822-ux/kidding"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[20px] text-[#F4D06F]">code</span>
                      <span>GitHub 저장소 (da960822-ux/kidding)</span>
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => scrollTo('architecture')}
                      className="h-12 px-5 rounded-full border border-[#DCD5C9] bg-transparent hover:bg-white/40 text-[#1C2822] font-medium text-[15px] inline-flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[20px] text-[#3B7F96]">schema</span>
                      <span>시스템 아키텍처 다이어그램</span>
                    </button>
                  </div>
                </div>

                {/* Right Live Work Order Plate (Interactive Preview) */}
                <div className="lg:col-span-5 w-full">
                  <div className="border border-[#DCD5C9] rounded-2xl p-4 sm:p-5 flex flex-col gap-3 bg-white/30 backdrop-blur-[2px]">
                    <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-3 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#4A7C59] animate-pulse shrink-0" />
                        <span className="font-mono-code text-[14px] font-semibold text-[#1C2822]">
                          PLATE 01 / WORK_ORDER FLOW
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {(['v1', 'v2'] as const).map((ver) => (
                          <button
                            key={ver}
                            type="button"
                            onClick={() => {
                              setPlateVersion(ver);
                              setConfirmedV2(false);
                            }}
                            className={`px-2 py-0.5 rounded text-[11px] font-mono-code font-bold border cursor-pointer transition-colors ${
                              plateVersion === ver
                                ? 'bg-[#28481A] text-[#FAF8F5] border-[#28481A]'
                                : 'bg-white/50 text-[#55655C] border-[#DCD5C9]'
                            }`}
                          >
                            {ver.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border border-[#DCD5C9] rounded-xl p-4 flex flex-col gap-3 bg-white/40">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono-code text-[13px] text-[#55655C] flex items-center gap-1.5 text-left">
                          <span className="material-symbols-outlined text-[18px] text-[#4A7C59] shrink-0">mic</span>
                          농장주 음성 입력: “2번 밭 양파 {plateVersion === 'v1' ? '15망' : '10망'} 수확하고 노란 박스에 담아놔”
                        </span>
                        <span className="font-mono-code text-[12px] text-[#7A8A80] shrink-0">STT 변환</span>
                      </div>

                      <div className="p-3.5 rounded-lg border border-[#DCD5C9] bg-white/60 space-y-1 text-left">
                        <div className="text-[12px] font-mono-code text-[#3B7F96] font-bold">
                          AI 지시 내용 정리 (구조화):
                        </div>
                        <div className="text-[14px] font-medium text-[#1C2822] leading-snug">
                          작업: 양파 수확 | 구역: 2번 밭 | 수량: {plateVersion === 'v1' ? '15망' : '10망 (정정)'} | 적재: 노란 콘티 박스 | 안전: 장갑 착용
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg border border-[#DCD5C9] bg-white/50 text-[14px] text-left space-y-2">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="text-[#3B7F96] font-mono-code text-[12px] font-bold">
                            다국어 번역 및 음성(TTS) 안내:
                          </span>
                          <div className="flex items-center gap-1">
                            {(['VI', 'NE', 'KO'] as const).map((lang) => (
                              <button
                                key={lang}
                                type="button"
                                onClick={() => setPlateLang(lang)}
                                className={`px-2 py-0.5 rounded text-[11px] font-mono-code font-bold border cursor-pointer ${
                                  plateLang === lang
                                    ? 'bg-[#3B7F96] text-white border-[#3B7F96]'
                                    : 'bg-white/70 text-[#55655C] border-[#DCD5C9]'
                                }`}
                              >
                                {lang}
                              </button>
                            ))}
                            <button
                              type="button"
                              onClick={handlePlayVoice}
                              className="px-2 py-0.5 rounded text-[11px] font-mono-code font-bold bg-[#C8E667]/40 text-[#28481A] border border-[#28481A]/30 inline-flex items-center gap-1 cursor-pointer hover:bg-[#C8E667]/70"
                              title="음성 안내 미리듣기"
                            >
                              <span className="material-symbols-outlined text-[14px]">volume_up</span>
                              <span>음성</span>
                            </button>
                          </div>
                        </div>
                        <p className="text-[#1C2822] font-medium leading-relaxed text-[14px]">
                          {workOrderText[plateVersion][plateLang]}
                        </p>
                        <p className="text-[#7A8A80] text-[12px] font-mono-code">
                          서버 음성 부재/불일치 시 기기 TTS로 자동 전환
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[12px] font-mono-code text-[#55655C] pt-1">
                        <span>참여 방식: QR코드 스캔 즉시 진입</span>
                        {plateVersion === 'v2' ? (
                          <button
                            type="button"
                            onClick={() => setConfirmedV2((v) => !v)}
                            className={`px-2.5 py-1 rounded-md font-bold border cursor-pointer transition-colors ${
                              confirmedV2
                                ? 'bg-[#4A7C59] text-white border-[#4A7C59]'
                                : 'bg-[#F4D06F]/40 text-[#28481A] border-[#F4D06F]'
                            }`}
                          >
                            {confirmedV2 ? 'v2 변경 지시 재확인 완료' : '변경 지시(v2) 재확인'}
                          </button>
                        ) : (
                          <span className="text-[#4A7C59] font-bold">지시 변경 시 v1 → v2 재확인</span>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-[#DCD5C9] pt-3 flex flex-col gap-1 text-left">
                      <div className="font-mono-code text-[12px] font-bold text-[#3B7F96] flex items-center gap-1.5 flex-wrap">
                        <span className="material-symbols-outlined text-[16px] shrink-0">preview</span>
                        <span>[농장주 메인 화면]</span>
                        <span className="text-[#DCD5C9]">·</span>
                        <span>[근로자 모바일 화면]</span>
                        <span className="text-[#DCD5C9]">·</span>
                        <span>[QR 작업팀 참여 화면]</span>
                      </div>
                      <p className="text-[13px] text-[#55655C] leading-snug">
                        농장주 음성 입력 검토 및 게시 → QR 작업팀 참여 → 다국어 텍스트/음성 안내 및 변경 재확인
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 01 // OVERVIEW */}
            <section className="flex flex-col gap-6" id="overview">
              <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[24px] text-[#4A7C59]">info</span>
                  <h2 className="font-dasan text-[26px] sm:text-[30px] font-bold text-[#1C2822]">
                    프로젝트 개요 (Project Info &amp; Scope)
                  </h2>
                </div>
                <span className="font-mono-code text-[13px] text-[#55655C]">PROJECT SPECIFICATION</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  ['프로젝트명 / 팀명', '농담(農談) / 밭머리', '팀명: 농담 (3인 개발)', 'text-[#1C2822]'],
                  ['프로젝트 유형', '다국어 농업 작업 지시', 'AI 음성 · 다국어 웹 서비스', 'text-[#1C2822]'],
                  ['개인 역할', '풀스택 프론트 & API 연동', 'React 화면 · QR 참여 · 지시 변경', 'text-[#3B7F96]'],
                  ['프로젝트 성과', '최우수상 수상', '전남광주 청년 AI 솔버톤', 'text-[#28481A]'],
                ].map(([label, title, sub, tone]) => (
                  <div
                    key={label}
                    className="border border-[#DCD5C9] rounded-xl p-4 bg-white/30 flex flex-col justify-between gap-1 text-left"
                  >
                    <span className="font-mono-code text-[12px] text-[#7A8A80]">{label}</span>
                    <span className={`font-bold text-[18px] leading-tight ${tone}`}>{title}</span>
                    <span className="font-mono-code text-[13px] text-[#55655C]">{sub}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="border border-[#DCD5C9] rounded-xl p-5 bg-white/30 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4A7C59] text-[22px]">person_pin</span>
                    <h3 className="font-bold text-[20px] text-[#1C2822]">개인 담당 역할 및 핵심 개발 (Personal Scope)</h3>
                  </div>
                  <ul className="text-[15px] text-[#55655C] space-y-2 list-disc list-inside leading-relaxed">
                    <li>
                      <strong>React 화면 구현:</strong> 농장주 화면, 근로자 화면, 역할별 화면 흐름 연결, 지시사항 조회 및 표시, 언어별 작업 안내 화면 구성
                    </li>
                    <li>
                      <strong>QR 참여 흐름:</strong> 작업팀 참여 QR 화면 연결, QR 초대 주소 전달, 팀 참여 및 언어 선택 흐름 구현, 초대 토큰 검증 API 연동
                    </li>
                    <li>
                      <strong>다국어 음성 안내:</strong> 근로자 언어별 지시 표시, 서버 제공 음성 재생 연동, 서버 음성 부재/불일치 시 기기 TTS 전환 및 텍스트 유지
                    </li>
                    <li>
                      <strong>지시 변경 API 및 상태 연동:</strong> 지시 수량 변경 API 연결, expected_version 기반 버전 검사, HTTP 409 Conflict 처리, 새 버전 게시 및 근로자 재확인 흐름 구현
                    </li>
                  </ul>
                </div>

                <div className="border border-[#DCD5C9] rounded-xl p-5 bg-white/30 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#3B7F96] text-[22px]">layers</span>
                    <h3 className="font-bold text-[20px] text-[#1C2822]">기술 스택 및 역할 경계 (Tech Stack &amp; Boundaries)</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 text-[14px]">
                    <div className="p-3 rounded-lg border border-[#DCD5C9] bg-white/40">
                      <span className="font-mono-code text-[12px] text-[#4A7C59] font-bold block">Frontend</span>
                      <span className="text-[#1C2822] font-medium">React, TypeScript, Tailwind CSS</span>
                    </div>
                    <div className="p-3 rounded-lg border border-[#DCD5C9] bg-white/40">
                      <span className="font-mono-code text-[12px] text-[#3B7F96] font-bold block">Backend</span>
                      <span className="text-[#1C2822] font-medium">Python, FastAPI</span>
                    </div>
                    <div className="p-3 rounded-lg border border-[#DCD5C9] bg-white/40">
                      <span className="font-mono-code text-[12px] text-[#55655C] font-bold block">Database / BaaS</span>
                      <span className="text-[#1C2822] font-medium">Supabase</span>
                    </div>
                    <div className="p-3 rounded-lg border border-[#DCD5C9] bg-white/40">
                      <span className="font-mono-code text-[12px] text-[#B48A1E] font-bold block">AI &amp; Speech</span>
                      <span className="text-[#1C2822] font-medium">STT, 번역, TTS (팀 협업)</span>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#7A8A80] leading-snug pt-1">
                    * 역할 경계: 본인은 농장주·근로자 웹 인터페이스 전반과 백엔드 REST API 상태/동시성 제어를 담당하였으며, 모델 튜닝 및 STT/번역 엔진은 팀 AI 담당자가 전담하였습니다.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 02 // PROBLEM DEFINITION */}
            <section className="flex flex-col gap-6" id="problem-definition">
              <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[24px] text-[#BA1A1A]">report_problem</span>
                  <h2 className="font-dasan text-[26px] sm:text-[30px] font-bold text-[#1C2822]">
                    배경 및 문제 정의: 농업 현장의 언어 장벽
                  </h2>
                </div>
                <span className="font-mono-code text-[13px] text-[#55655C]">4 KEY FIELD PROBLEMS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  ['PROBLEM 01', '언어 차이로 인한 의사소통 어려움', '농장주가 전달한 작업 내용을 외국인 근로자가 정확히 이해하기 어려울 수 있으며, 오해로 인한 작업 착오가 발생합니다.'],
                  ['PROBLEM 02', '작업 정보 전달 및 재확인 문제', '작업 수량, 순서, 안전사항이 구두로만 전달되면 현장 소음이나 휘발성으로 인해 근로자가 이를 다시 확인하기 어렵습니다.'],
                  ['PROBLEM 03', '작업 중 변경된 지시의 혼선', '작업 도중 지시 수량이나 내용이 갑자기 변경되면 이전 지시와 최신 지시를 현장에서 명확히 구별해야 합니다.'],
                  ['PROBLEM 04', '작업 확인 상태의 불명확성', '근로자가 기존 지시를 확인했더라도 변경된 지시를 다시 확인했다는 의미는 아니므로, 재확인 여부가 명시적으로 추적되어야 합니다.'],
                ].map(([code, title, desc]) => (
                  <div key={code} className="border border-[#DCD5C9] rounded-xl p-5 bg-white/30 flex flex-col gap-2">
                    <span className="font-mono-code text-[13px] text-[#BA1A1A] font-bold">{code}</span>
                    <h3 className="font-bold text-[18px] text-[#1C2822]">{title}</h3>
                    <p className="text-[15px] text-[#55655C] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-2">
                  <span className="font-mono-code text-[14px] text-[#4A7C59] font-bold">
                    해결 방안 및 5대 핵심 기능 (Solution &amp; Core Features)
                  </span>
                  <span className="font-mono-code text-[12px] text-[#55655C]">MULTILINGUAL &amp; EXPLICIT CONFIRMATION</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    ['01. 음성 기반 지시', '음성 STT 변환, AI 작업 내용·수량·안전사항 구조화, 초안 검토 후 게시.'],
                    ['02. 다국어 작업 안내', '외국인 근로자 모국어 안내 (작업 내용, 수량, 주의/안전사항 완벽 번역 포함).'],
                    ['03. QR 팀 참여', '작업팀 초대 QR코드 스캔, 언어 선택 후 지시 즉시 확인 (앱 설치 불필요).'],
                    ['04. 텍스트 및 음성', '텍스트 및 음성 동시 제공, 서버 음성 부재 시 기기 TTS로 자동 전환.'],
                    ['05. 지시 변경 관리', '변경 시 새 버전(v2) 게시, 이전 지시 보존, 근로자의 명시적 재확인 강제.'],
                  ].map(([t, d]) => (
                    <div key={t} className="border border-[#DCD5C9] rounded-xl p-4 bg-white/30 flex flex-col gap-1.5">
                      <span className="font-mono-code text-[13px] text-[#4A7C59] font-bold">{t}</span>
                      <p className="text-[14px] text-[#55655C] leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 03 // WORKFLOW */}
            <section className="flex flex-col gap-6" id="workflow">
              <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[24px] text-[#4A7C59]">sync_alt</span>
                  <h2 className="font-dasan text-[26px] sm:text-[30px] font-bold text-[#1C2822]">
                    서비스 워크플로우 (Service Workflow)
                  </h2>
                </div>
                <span className="font-mono-code text-[13px] text-[#55655C]">FARMER · WORKER · UPDATE FLOW</span>
              </div>

              <div className="border border-[#DCD5C9] rounded-2xl p-5 sm:p-6 bg-white/25 flex flex-col gap-4">
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-[#DCD5C9] bg-white/40 text-left">
                    <span className="font-mono-code text-[13px] text-[#4A7C59] font-bold block mb-1">
                      [농장주 워크플로우]
                    </span>
                    <p className="text-[15px] text-[#1C2822] leading-relaxed">
                      음성 입력 → STT 텍스트 변환 → AI 지시 내용 정리 (작업·수량·안전) → 지시 초안 검토 → 작업 지시 게시 → QR코드 제공
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#DCD5C9] bg-white/40 text-left">
                    <span className="font-mono-code text-[13px] text-[#3B7F96] font-bold block mb-1">
                      [외국인 근로자 워크플로우]
                    </span>
                    <p className="text-[15px] text-[#1C2822] leading-relaxed">
                      QR 스캔 → 작업팀 참여 → 언어 선택 → 다국어 지시 확인 → 텍스트 및 음성 안내 이용 → 지시사항 확인
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#BA1A1A]/30 bg-white/40 text-left">
                    <span className="font-mono-code text-[13px] text-[#BA1A1A] font-bold block mb-1">
                      [작업 지시 변경 워크플로우]
                    </span>
                    <p className="text-[15px] text-[#1C2822] leading-relaxed">
                      농장주 지시 변경 → 서버 소유권 및 expected_version 검사 → 새 버전(v2) 게시 → 근로자 화면 갱신 → 변경 지시 재확인
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 04 // QR PARTICIPATION & MULTILINGUAL */}
            <section className="flex flex-col gap-6" id="qr-multilingual">
              <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-3">
                <h2 className="font-dasan text-[26px] sm:text-[30px] font-bold text-[#1C2822]">
                  QR 참여 및 다국어 멀티모달 안내 (QR &amp; Multimodal)
                </h2>
                <span className="font-mono-code text-[13px] text-[#55655C]">ZERO INSTALLATION FIELD ACCESS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: 'qr_code_scanner',
                    color: 'text-[#4A7C59]',
                    title: '앱 설치 없는 현장 스캔 진입',
                    desc: '별도의 앱스토어 설치 과정이나 회원가입 절차 없이, 비치된 팻말의 QR 코드를 스마트폰 기본 카메라로 비추면 바로 해당 구역의 작업 화면으로 즉시 진입합니다.',
                  },
                  {
                    icon: 'translate',
                    color: 'text-[#3B7F96]',
                    title: '베트남어 & 네팔어 맞춤 UI',
                    desc: '계절근로자 중 가장 높은 비중을 차지하는 베트남과 네팔 작업자를 위해 기기 설정 언어를 자동 감지하며, 상단 토글로 1초 만에 언어를 전환할 수 있습니다.',
                  },
                  {
                    icon: 'signal_cellular_alt_1_bar',
                    color: 'text-[#B48A1E]',
                    title: '네트워크 지연 시 텍스트 우선 폴백',
                    desc: '노지 음영지역의 3G/LTE 속도 저하 상황에서 무거운 음성(TTS)이나 비디오 스트리밍이 지연되어도 핵심 작업 텍스트는 0.2초 이내 우선 노출되도록 보장합니다.',
                  },
                ].map((c) => (
                  <div key={c.title} className="border border-[#DCD5C9] rounded-xl p-5 bg-white/30 flex flex-col gap-2.5">
                    <div
                      className={`w-11 h-11 rounded-lg border border-[#DCD5C9] bg-white/50 flex items-center justify-center ${c.color}`}
                    >
                      <span className="material-symbols-outlined text-[24px]">{c.icon}</span>
                    </div>
                    <h3 className="font-bold text-[18px] text-[#1C2822]">{c.title}</h3>
                    <p className="text-[15px] text-[#55655C] leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 05 // ARCHITECTURE */}
            <section className="flex flex-col gap-6" id="architecture">
              <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-3">
                <h2 className="font-dasan text-[26px] sm:text-[30px] font-bold text-[#1C2822]">
                  시스템 아키텍처 및 구현 경계 (Architecture &amp; Boundaries)
                </h2>
                <span className="font-mono-code text-[13px] text-[#55655C]">TIER ISOLATION &amp; TECH MATRIX</span>
              </div>

              <div className="border border-[#DCD5C9] rounded-2xl p-5 sm:p-6 bg-white/25 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="border border-[#4A7C59] rounded-xl p-5 bg-white/40 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[18px] text-[#28481A]">Frontend Client Tier</span>
                    <span className="font-mono-code text-[12px] bg-[#C8E667]/30 border border-[#C8E667] text-[#28481A] px-2.5 py-0.5 rounded-full font-bold">
                      본인 전담 (100%)
                    </span>
                  </div>
                  <ul className="text-[15px] text-[#55655C] space-y-2 list-disc list-inside leading-relaxed">
                    <li>React 18 + TypeScript SPA</li>
                    <li>Tailwind CSS 반응형 디자인 시스템</li>
                    <li>Audio Record &amp; Playback Controller</li>
                    <li>QR Session Token Router &amp; State Manager</li>
                    <li>30s Polling + Window Focus Sync Hook</li>
                  </ul>
                </div>

                <div className="border border-[#DCD5C9] rounded-xl p-5 bg-white/40 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[18px] text-[#1C2822]">Backend &amp; Storage Tier</span>
                    <span className="font-mono-code text-[12px] bg-white/50 border border-[#DCD5C9] text-[#55655C] px-2.5 py-0.5 rounded-full">
                      팀 공통 협업
                    </span>
                  </div>
                  <ul className="text-[15px] text-[#55655C] space-y-2 list-disc list-inside leading-relaxed">
                    <li>FastAPI RESTful API Gateway</li>
                    <li>Supabase PostgreSQL (Orders, Logs)</li>
                    <li>Order Versioning &amp; Lock Manager</li>
                    <li>Realtime WebSocket Notification</li>
                  </ul>
                </div>

                <div className="border border-[#DCD5C9] rounded-xl p-5 bg-white/40 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[18px] text-[#1C2822]">AI &amp; Speech Pipeline</span>
                    <span className="font-mono-code text-[12px] bg-white/50 border border-[#DCD5C9] text-[#55655C] px-2.5 py-0.5 rounded-full">
                      AI 파트 담당
                    </span>
                  </div>
                  <ul className="text-[15px] text-[#55655C] space-y-2 list-disc list-inside leading-relaxed">
                    <li>Whisper Automatic Speech Recognition</li>
                    <li>Agri-Domain NER Entity Extractor</li>
                    <li>NLLB / GPT Multilingual Translation</li>
                    <li>Edge TTS Audio Streamer (VI/NE)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 06 // TROUBLESHOOTING 01 */}
            <section className="flex flex-col gap-6" id="troubleshooting-01">
              <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[24px] text-[#BA1A1A]">sync_problem</span>
                  <h2 className="font-dasan text-[26px] sm:text-[30px] font-bold text-[#1C2822]">
                    기술적 과제: 작업 지시 변경 시 버전 충돌 방지
                  </h2>
                </div>
                <span className="font-mono-code text-[13px] text-[#55655C]">EXPECTED_VERSION &amp; HTTP 409 CONFLICT</span>
              </div>

              <div className="border border-[#DCD5C9] rounded-2xl p-5 sm:p-6 bg-white/25 flex flex-col gap-5">
                <div className="p-4 rounded-xl border border-[#BA1A1A]/30 bg-red-50/30">
                  <h3 className="font-bold text-[18px] text-[#1C2822]">
                    문제 상황: 작업 수량 변경과 이전 지시 혼선 (15망 → 10망)
                  </h3>
                  <p className="text-[15px] text-[#55655C] mt-1 leading-relaxed">
                    농장주가 “양파 15망”을 발령하여 근로자가 확인 후 작업을 시작했으나, 5분 뒤 출하 사정으로 “양파 10망”으로 수정했습니다. 기존 방식에서는 근로자의 확인 플래그가 유지되어 이미 15망을 수확해버리거나, 여러 기기에서 동시 수정 시 이전 버전이 덮어씌워지는 데이터 정합성 충돌이 발생했습니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-[14px] leading-relaxed">
                  {[
                    ['1. expected_version 전달:', '지시 수정 요청 시 클라이언트가 알고 있던 최신 버전 번호를 함께 전송.'],
                    ['2. HTTP 409 Conflict:', '서버의 현재 버전과 불일치할 경우 409 응답을 반환하여 덮어쓰기 방지.'],
                    ['3. 새 버전(v2) 게시:', '수정 성공 시 새 버전(v2)을 발행하고 기존 v1 지시 데이터는 이력으로 안전 보존.'],
                    ['4. 화면 갱신 및 경고:', '근로자 화면에 지시 변경 알림을 띄우고 이전 확인 상태를 재확인 대기로 전환.'],
                    ['5. 근로자 명시적 재확인:', '변경된 10망 지시를 확인한 뒤에만 최종 작업 완료 처리가 가능하도록 강제.'],
                    ['6. 상태 일치 실증:', '농장주 대시보드에 “근로자가 v2 변경 지시를 확인했습니다” 실시간 반영.'],
                  ].map(([title, desc]) => (
                    <div key={title} className="p-3.5 border border-[#DCD5C9] rounded-lg bg-white/40">
                      <span className="font-mono-code text-[#4A7C59] font-bold">{title}</span> {desc}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-[#BA1A1A]/40 rounded-xl bg-red-50/20">
                    <span className="font-mono-code text-[13px] text-[#BA1A1A] font-bold uppercase">Before Fix</span>
                    <p className="text-[14px] text-[#55655C] mt-1 leading-relaxed">
                      수량 정정 후에도 구버전 확인 상태가 유지되어 초과 수확 발생 및 다중 수정 시 덮어쓰기 충돌.
                    </p>
                  </div>
                  <div className="p-4 border border-[#4A7C59]/40 rounded-xl bg-emerald-50/20">
                    <span className="font-mono-code text-[13px] text-[#4A7C59] font-bold uppercase">After Fix</span>
                    <p className="text-[14px] text-[#55655C] mt-1 leading-relaxed">
                      expected_version 검사로 충돌 0건 달성, v1 보존 + v2 발행 + 명시적 재확인으로 현장 무결성 확보.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 07 & 08 // MULTIMODAL CONSISTENCY & CROSS-DEVICE SYNC */}
            <section className="flex flex-col gap-6" id="troubleshooting-02">
              <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-3">
                <h2 className="font-dasan text-[26px] sm:text-[30px] font-bold text-[#1C2822]">
                  멀티모달 일치 &amp; 크로스 디바이스 동기화 (Sync &amp; Regression)
                </h2>
                <span className="font-mono-code text-[13px] text-[#55655C]">53/53 BROWSER TESTS PASS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  ['1. Text Hash Validation', '번역문 텍스트의 SHA-256 해시값을 생성하여 오디오 파일 메타데이터와 상호 일치 여부를 대조 검증.'],
                  ['2. Audio Stream Selection', '해시 불일치 감지 시 이전 오디오 재생을 즉각 차단하고 신규 렌더링된 TTS 스트림만을 선택적 바인딩.'],
                  ['3. Cache & Media Cleanup', '브라우저 메모리 Blob 및 ServiceWorker에 캐시된 이전 버전 미디어 오브젝트를 즉각 폐기.'],
                  ['4. Video Guide Fallback', '영상 가이드가 준비되지 않은 세부 작업은 검증된 도구 아이콘과 정적 픽토그램 가이드로 안전 폴백.'],
                  ['5. Instruction Visibility', '음성 재생 중 현재 재생되는 문장의 텍스트를 실시간 하이라이트하여 시청각 불일치를 인지하도록 보조.'],
                ].map(([t, d]) => (
                  <div key={t} className="border border-[#DCD5C9] rounded-xl p-4 bg-white/30 flex flex-col gap-1.5">
                    <span className="font-mono-code text-[12px] text-[#3B7F96] font-bold">{t}</span>
                    <p className="text-[13px] text-[#55655C] leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>

              <div className="border border-[#DCD5C9] rounded-2xl p-5 sm:p-6 bg-white/25 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-[19px] text-[#1C2822]">동기화 전략 4대 구현 (State Synchronization)</h3>
                  <ul className="text-[15px] text-[#55655C] space-y-2 list-disc list-inside leading-relaxed">
                    <li>
                      <strong>30초 하트비트 폴링:</strong> 통신망이 자주 끊기는 노지 특성에 맞추어 가벼운 ETag 헤더 기반 상태 폴링 적용.
                    </li>
                    <li>
                      <strong>Window Focus 리스너:</strong> 작업자가 다른 앱을 쓰다 농담으로 복귀 시 <code>visibilitychange</code> 트리거로 즉시 재조회.
                    </li>
                    <li>
                      <strong>로컬 스토리지 낙관적 락:</strong> 다른 탭이나 기기에서 수정 중일 때 편집 폼 덮어쓰기를 방지하는 임시 잠금 구현.
                    </li>
                    <li>
                      <strong>오프라인 재연결 큐:</strong> 네트워크 복구 시 대기열에 쌓인 확인 신호를 순서대로 재전송하는 Fallback Queue.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-[19px] text-[#1C2822]">회귀 테스트 및 검증 결과 (Regression Results)</h3>
                  <div className="p-4 border border-[#DCD5C9] rounded-xl bg-white/40 space-y-2.5 text-[15px]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#55655C]">동기화 누락 버그 건수:</span>
                      <span className="font-mono-code font-bold text-[#4A7C59]">초기 3건 발견 → 3건 전원 수정</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#55655C]">브라우저 호환성 검증:</span>
                      <span className="font-mono-code tabular-nums font-bold text-[#4A7C59]">53 / 53 PASS</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[#55655C]">엔드투엔드 통합 시나리오:</span>
                      <span className="font-mono-code tabular-nums font-bold text-[#4A7C59]">9 / 9 무결성 확인</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 09 & 10 // RESULTS & AWARD */}
            <section className="flex flex-col gap-6" id="results">
              <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-3">
                <h2 className="font-dasan text-[26px] sm:text-[30px] font-bold text-[#1C2822]">
                  프로젝트 결과 및 성과 (Results &amp; Impact)
                </h2>
                <span className="font-mono-code text-[13px] text-[#55655C]">METRICS &amp; HONORS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  ['작업 전달률', '100%', '오프라인 지연 폴백 시 텍스트 전송 보장'],
                  ['수량 변경 충돌', '0건', '버전 자동 증가 & 재확인 강제 메커니즘'],
                  ['반응형 호환성', '100%', '390px 모바일 및 1100px 데스크톱 최적화'],
                  ['멀티모달 폴백', '안전 보장', '음성 실패 시 텍스트 + 시각 가이드 즉시 전환'],
                ].map(([label, val, desc]) => (
                  <div
                    key={label}
                    className="border border-[#DCD5C9] rounded-xl p-5 bg-white/30 flex flex-col justify-between gap-1 text-left"
                  >
                    <span className="font-mono-code text-[12px] text-[#7A8A80]">{label}</span>
                    <span className="font-bold text-[32px] text-[#28481A] leading-tight tabular-nums">{val}</span>
                    <span className="text-[14px] text-[#55655C] leading-snug">{desc}</span>
                  </div>
                ))}
              </div>

              <div className="border border-[#C8E667] rounded-xl p-5 bg-[#C8E667]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="material-symbols-outlined text-[48px] text-[#28481A] shrink-0">military_tech</span>
                  <div>
                    <h3 className="font-bold text-[19px] text-[#28481A]">
                      전남광주 청년 AI 솔버톤 해커톤 대회 ‘최우수상’ 수상
                    </h3>
                    <p className="text-[15px] text-[#55655C]">
                      지역 농가 현장 실용성과 외국인 근로자 인권·안전 개선 기여 부문에서 최고 평가 획득
                    </p>
                  </div>
                </div>
                <span className="font-mono-code text-[13px] px-3.5 py-1.5 rounded-full border border-[#28481A] text-[#28481A] font-bold shrink-0 bg-white/30">
                  TEAM EXCELLENCE AWARD
                </span>
              </div>
            </section>

            {/* SECTION 11 & 12 // CONTRIBUTION & RETROSPECTIVE */}
            <section className="flex flex-col gap-6" id="my-contribution">
              <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-3">
                <h2 className="font-dasan text-[26px] sm:text-[30px] font-bold text-[#1C2822]">
                  본인 기여도 및 기술적 회고 (Contribution &amp; Retrospective)
                </h2>
                <span className="font-mono-code text-[13px] text-[#55655C]">CORE FRONTEND ENGINEERING</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  ['CONTRIBUTION 01', '프론트엔드 React 클라이언트 전담', '농장주 지시 발령 데스크톱 대시보드(1100px)와 근로자용 경량화 PWA 뷰(390px)의 모든 컴포넌트, 상태 흐름 및 라우팅을 독자적으로 설계 및 개발했습니다.'],
                  ['CONTRIBUTION 02', 'QR 참여 및 무설치 세션 파이프라인', '인쇄 및 스캔이 용이한 SVG 기반 동적 QR 생성기를 구현하고, 근로자가 앱을 설치하지 않고도 즉시 해당 작업 그룹에 합류할 수 있는 세션 라우팅을 구축했습니다.'],
                  ['CONTRIBUTION 03', '지시 변경 API 연동 및 버전 제어', '수량이나 품목 정정 시 version_id를 자동 핸들링하고 기존 작업자의 승인 플래그를 리셋하여 재확인을 강제하는 클라이언트 상태 머신을 완성했습니다.'],
                  ['CONTRIBUTION 04', '30초 폴링 & 윈도우 포커스 동기화', '야외 음영지역의 불안정한 통신망에서도 백그라운드 전환 후 복귀 시 최신 지시 상태를 누락 없이 갱신하는 커스텀 리액트 훅을 작성하여 안정성을 확보했습니다.'],
                  ['CONTRIBUTION 05', '다국어 음성(TTS) & 오디오 Fallback', '베트남어·네팔어 음성 스트림 버퍼링 로직과 네트워크 대역폭 부족 시 시각적 텍스트 및 픽토그램 가이드로 지체 없이 전환되는 다계층 안전 폴백을 개발했습니다.'],
                  ['LESSONS LEARNED', 'Data & Multimodal Consistency', '현장 작업에서는 “빠른 배포”보다 “정확한 버전 관리”와 미디어 캐시 무효화 설계가 현장 신뢰를 결정짓는 핵심임을 체감했습니다.'],
                ].map(([k, t, d]) => (
                  <div key={k} className="border border-[#DCD5C9] rounded-xl p-5 bg-white/30 flex flex-col gap-2">
                    <span className="font-mono-code text-[13px] text-[#4A7C59] font-bold">{k}</span>
                    <h3 className="font-bold text-[18px] text-[#1C2822]">{t}</h3>
                    <p className="text-[14px] text-[#55655C] leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>

              <div className="border border-[#4A7C59]/40 p-5 bg-white/35 rounded-xl">
                <p className="font-cormorant text-[20px] sm:text-[22px] italic text-[#1C2822] leading-relaxed">
                  “기술의 가치는 복잡한 알고리즘을 뽐내는 것이 아니라, 흙 묻은 장갑을 낀 현장 작업자의 스마트폰 화면 위에 가장 단순하고 확실한 진실을 띄우는 데 있습니다.”
                </p>
              </div>
            </section>

            {/* SECTION 13 // PROJECT LINKS & ASSETS */}
            <section className="flex flex-col gap-6 relative" id="project-links">
              <div
                aria-hidden="true"
                className="absolute -inset-x-12 -top-10 -bottom-48 pointer-events-none z-0 flex items-end justify-center select-none overflow-hidden opacity-35 mix-blend-multiply"
              >
                <SafeImage
                  decorative
                  src={HOTLINK_ASSETS.nongdamLandscape}
                  alt=""
                  className="w-full max-w-[1100px] h-auto object-contain object-bottom filter blur-[0.5px]"
                />
              </div>

              <div className="flex items-center justify-between border-b border-[#DCD5C9] pb-3 relative z-10">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[24px] text-[#4A7C59]">terminal</span>
                  <h2 className="font-dasan text-[26px] sm:text-[30px] font-bold text-[#1C2822]">
                    프로젝트 공식 링크 및 산출물 (Project References)
                  </h2>
                </div>
                <span className="font-mono-code text-[13px] text-[#55655C]">REPOSITORY &amp; IMPLEMENTATION</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
                <a
                  className="border border-[#DCD5C9] hover:border-[#4A7C59] rounded-xl p-5 bg-white/40 transition-all flex flex-col gap-2.5 group"
                  href="https://github.com/da960822-ux/kidding"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-[13px] text-[#4A7C59] font-bold">SOURCE REPOSITORY</span>
                    <span className="material-symbols-outlined text-[20px] text-[#55655C] group-hover:text-[#4A7C59]">
                      open_in_new
                    </span>
                  </div>
                  <h3 className="font-bold text-[18px] text-[#1C2822]">GitHub: da960822-ux/kidding</h3>
                  <p className="text-[14px] text-[#55655C] leading-relaxed">
                    농담(밭머리) React 프론트엔드 화면 구현 및 백엔드 지시 관리 소스 코드
                  </p>
                </a>

                <a
                  className="border border-[#DCD5C9] hover:border-[#4A7C59] rounded-xl p-5 bg-white/40 transition-all flex flex-col gap-2.5 group"
                  href="https://github.com/da960822-ux/kidding/blob/main/WorkerScreens.tsx"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-[13px] text-[#3B7F96] font-bold">FRONTEND CODE</span>
                    <span className="material-symbols-outlined text-[20px] text-[#55655C] group-hover:text-[#3B7F96]">
                      code
                    </span>
                  </div>
                  <h3 className="font-bold text-[18px] text-[#1C2822]">WorkerScreens.tsx</h3>
                  <p className="text-[14px] text-[#55655C] leading-relaxed">
                    QR 참여, 언어 선택(베트남어/네팔어), 다국어 텍스트·음성 및 재확인 뷰 컴포넌트
                  </p>
                </a>

                <a
                  className="border border-[#DCD5C9] hover:border-[#4A7C59] rounded-xl p-5 bg-white/40 transition-all flex flex-col gap-2.5 group"
                  href="https://github.com/da960822-ux/kidding/blob/main/REPORT.md"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-code text-[13px] text-[#B48A1E] font-bold">VERIFICATION REPORT</span>
                    <span className="material-symbols-outlined text-[20px] text-[#55655C] group-hover:text-[#1C2822]">
                      description
                    </span>
                  </div>
                  <h3 className="font-bold text-[18px] text-[#1C2822]">REPORT.md &amp; E2E 시나리오</h3>
                  <p className="text-[14px] text-[#55655C] leading-relaxed">
                    390px/1100px 뷰포트 반응형 검증 기록 및 작업 수량 변경 정합성 테스트 문서
                  </p>
                </a>
              </div>
            </section>

            {/* BOTTOM NAVIGATION */}
            <nav
              aria-label="Project Navigation"
              className="border-t border-[#DCD5C9] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-20"
            >
              <button
                type="button"
                onClick={() => onNavigate('/projects/bbangbiseo')}
                className="flex items-center gap-3 text-[#55655C] hover:text-[#1C2822] transition-colors px-6 py-3.5 rounded-xl hover:bg-white/40 border border-transparent hover:border-[#DCD5C9] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                <div className="flex flex-col text-left">
                  <span className="font-mono-code text-[12px] text-[#7A8A80]">PREVIOUS PROJECT</span>
                  <span className="font-bold text-[15px] text-[#1C2822]">02 빵비서 (재고 자동 파악)</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/', 'projects')}
                className="px-6 py-3.5 rounded-full border border-[#DCD5C9] bg-white/50 hover:bg-white/80 text-[#1C2822] font-semibold text-[14px] flex items-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px] text-[#4A7C59]">grid_view</span>
                <span>전체 프로젝트 목록으로 돌아가기</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/projects/facefit')}
                className="flex items-center gap-3 text-[#55655C] hover:text-[#1C2822] transition-colors px-6 py-3.5 rounded-xl hover:bg-white/40 border border-transparent hover:border-[#DCD5C9] cursor-pointer"
              >
                <div className="flex flex-col text-right">
                  <span className="font-mono-code text-[12px] text-[#7A8A80]">FIRST PROJECT</span>
                  <span className="font-bold text-[15px] text-[#1C2822]">01 FaceFit (AI 모의 면접)</span>
                </div>
                <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
              </button>
            </nav>
          </div>
        </div>
      </main>

      {/* ACCUMULATED FALLEN LEAVES AT BOTTOM */}
      <div aria-hidden="true" className="w-full relative pointer-events-none z-20 overflow-hidden -mb-6 pb-4">
        <div className="max-w-[1200px] mx-auto px-5 relative h-16 sm:h-20 flex items-end justify-between">
          <SafeImage
            decorative
            alt=""
            className="w-9 sm:w-11 opacity-80 filter saturate-[2.4] sepia-[0.7] hue-rotate-[-65deg] transform -rotate-[42deg] translate-y-3 shrink-0"
            src={HOTLINK_ASSETS.nongdamLeaf}
          />
          <SafeImage
            decorative
            alt=""
            className="w-8 sm:w-10 opacity-75 filter saturate-[2.9] sepia-[0.8] hue-rotate-[-85deg] transform rotate-[18deg] translate-y-1 shrink-0 -ml-4"
            src={HOTLINK_ASSETS.nongdamLeaf}
          />
          <div className="flex items-end gap-1 sm:gap-2">
            <SafeImage
              decorative
              alt=""
              className="w-8 sm:w-10 opacity-80 filter saturate-[2.6] sepia-[0.75] hue-rotate-[-72deg] transform rotate-[65deg] translate-y-2"
              src={HOTLINK_ASSETS.nongdamLeaf}
            />
            <SafeImage
              decorative
              alt=""
              className="w-9 sm:w-11 opacity-85 filter saturate-[3.1] sepia-[0.85] hue-rotate-[-88deg] transform rotate-[110deg] translate-y-1"
              src={HOTLINK_ASSETS.nongdamLeaf}
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#FAF8F5] border-t border-[#DCD5C9] mt-auto relative z-30 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[15px] font-semibold text-[#1C2822]">
                김서영.dev — 프론트엔드 및 분산 시스템 포트폴리오
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono-code text-[12px] px-2.5 py-0.5 rounded-full border border-[#DCD5C9] bg-white/40 text-[#28481A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A7C59] inline-block" />
                All systems normal
              </span>
            </div>
            <p className="text-[13px] text-[#55655C]">© 2026 김서영.dev All rights reserved. Gentle Breeze Edition.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" onClick={() => onNavigate('/', 'about')} className="text-[14px] text-[#55655C] hover:text-[#1C2822] cursor-pointer">
              소개
            </button>
            <button type="button" onClick={() => onNavigate('/', 'projects')} className="text-[14px] text-[#55655C] hover:text-[#1C2822] cursor-pointer">
              프로젝트
            </button>
            <button type="button" onClick={() => onNavigate('/', 'skills')} className="text-[14px] text-[#55655C] hover:text-[#1C2822] cursor-pointer">
              기술 스택
            </button>
            <a
              className="text-[14px] text-[#55655C] hover:text-[#1C2822] transition-colors"
              href="https://github.com/da960822-ux/kidding"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub: kidding
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
