import React from 'react';
import { RoutePath } from '../types';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (path: RoutePath) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ open, onClose, onNavigate }) => {
  if (!open) return null;

  const handleDownloadText = () => {
    const content = [
      '김서영 (Seoyoung Kim) | Backend & Full-Stack Engineer',
      'Location: Jeonnam-Gwangju, KR (UTC+9)',
      'Email: candidate@example.com | Phone: 010-2345-6789',
      '',
      '[수상 (Awards)]',
      '- 전남광주 청년 AI 솔버톤 최우수상 (농담 - 밭머리)',
      '- 스마트인재 개발원 실전 프로젝트 최우수상 (FaceFit)',
      '',
      '[학력 및 교육 (Education)]',
      '- 순천대학교 생물학과 이학사 졸업 (3.13 / 4.5)',
      '- 스마트인재개발원 생성형 AI융합서비스 개발자 과정 (2026.02.19 ~ 2026.08.31)',
      '',
      '[경력 (Experience)]',
      '- 서인디지탈: PL, 기술지원',
      '- 코엔텍 R&C: 수질/대기 분석, 고객관리',
      '',
      '[대표 프로젝트 (Featured Projects)]',
      '01. FaceFit — AI 기반 개인 맞춤형 모의면접 및 피드백 서비스 (Java 21, Spring Boot, JPA, PostgreSQL, React, Ncloud Object Storage)',
      '02. 빵비서 (BreadSecretary) — 이미지 분석 기반 베이커리 재고 관리 서비스 (Java 17, Servlet/JSP, MyBatis 3.5, Oracle 19c, Python Flask, YOLOv8)',
      '03. 농담 (밭머리) — 농장주와 외국인 근로자를 연결하는 AI 기반 다국어 작업 지시 서비스 (React, TypeScript, Tailwind CSS, FastAPI, Supabase, STT/TTS)',
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Seoyoung_Kim_Resume_2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#141F00]/45 backdrop-blur-xs p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="이력서 미리보기"
    >
      <div
        className="w-full max-w-2xl bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl shadow-2xl overflow-hidden max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-[#FAFBF8] border-b border-[#E5E7EB] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C7F36B] border border-[#4B6700]/40" />
            <span className="font-mono-code text-sm font-bold text-[#1F2937]">
              Seoyoung_Kim_Resume.pdf
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg border border-[#E5E7EB] bg-white text-[#586255] hover:text-[#1F2937] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#1F2937]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E5E7EB]">
            <div>
              <h3 className="text-xl font-bold text-[#141F00]">김서영 · Seoyoung Kim</h3>
              <p className="text-[#586255] text-xs font-mono-code mt-0.5">
                Backend &amp; Full-Stack Engineer · Jeonnam-Gwangju, KR
              </p>
            </div>
            <div className="text-xs font-mono-code text-[#586255]">
              candidate@example.com
            </div>
          </div>

          <div>
            <h4 className="font-mono-code text-xs font-bold text-[#4B6700] uppercase mb-2">수상 (Awards)</h4>
            <ul className="space-y-1.5 text-[13px] text-[#586255]">
              <li>• <strong className="text-[#1F2937]">전남광주 청년 AI 솔버톤 최우수상</strong> — 농담(밭머리)</li>
              <li>• <strong className="text-[#1F2937]">스마트인재 개발원 실전 프로젝트 최우수상</strong> — FaceFit</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB]">
              <h4 className="font-mono-code text-xs font-bold text-[#4B6700] uppercase mb-2">학력 및 교육</h4>
              <p className="font-semibold text-[#1F2937] text-[13px]">순천대학교 생물학과 (이학사 3.13 / 4.5)</p>
              <p className="text-xs text-[#586255] mt-1.5">스마트인재개발원 생성형 AI융합서비스 개발자 과정 (2026.02.19 ~ 2026.08.31)</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB]">
              <h4 className="font-mono-code text-xs font-bold text-[#4B6700] uppercase mb-2">경력</h4>
              <p className="font-semibold text-[#1F2937] text-[13px]">서인디지탈 — PL, 기술지원</p>
              <p className="text-xs text-[#586255] mt-1.5">코엔텍 R&amp;C — 수질/대기 분석, 고객관리</p>
            </div>
          </div>

          <div>
            <h4 className="font-mono-code text-xs font-bold text-[#4B6700] uppercase mb-2">주요 프로젝트 케이스 스터디</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => { onClose(); onNavigate('/projects/facefit'); }}
                className="p-3 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] hover:border-[#91B83C] text-left transition-colors cursor-pointer"
              >
                <div className="font-mono-code text-[11px] text-[#4B6700] font-bold">01 · FaceFit</div>
                <div className="font-semibold text-xs text-[#1F2937] mt-0.5">AI 모의 면접 서비스</div>
              </button>
              <button
                type="button"
                onClick={() => { onClose(); onNavigate('/projects/bbangbiseo'); }}
                className="p-3 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] hover:border-[#D9822B] text-left transition-colors cursor-pointer"
              >
                <div className="font-mono-code text-[11px] text-[#BF7326] font-bold">02 · 빵비서</div>
                <div className="font-semibold text-xs text-[#1F2937] mt-0.5">베이커리 재고 관리</div>
              </button>
              <button
                type="button"
                onClick={() => { onClose(); onNavigate('/projects/nongdam'); }}
                className="p-3 rounded-xl bg-[#FAFBF8] border border-[#E5E7EB] hover:border-[#4A7C59] text-left transition-colors cursor-pointer"
              >
                <div className="font-mono-code text-[11px] text-[#28481A] font-bold">03 · 농담(밭머리)</div>
                <div className="font-semibold text-xs text-[#1F2937] mt-0.5">다국어 작업 지시</div>
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-[#FAFBF8] border-t border-[#E5E7EB] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-[#E5E7EB] bg-white text-xs font-medium text-[#586255] hover:text-[#1F2937] cursor-pointer"
          >
            닫기
          </button>
          <button
            type="button"
            onClick={handleDownloadText}
            className="px-4 py-2 rounded-lg bg-[#C7F36B] border border-[#91B83C]/60 text-xs font-semibold text-[#141F00] hover:bg-[#bcf056] flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>요약 이력서 다운로드 (.txt)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
