/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { BreadSecretaryPage } from './pages/BreadSecretaryPage';
import { FaceFitPage } from './pages/FaceFitPage';
import { LandingPage } from './pages/LandingPage';
import { NongdamPage } from './pages/NongdamPage';
import { NavigateFn, RoutePath } from './types';

function normalizePath(pathname: string): RoutePath {
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  if (cleaned === '/projects/facefit') return '/projects/facefit';
  if (cleaned === '/projects/bbangbiseo' || cleaned === '/projects/bread') {
    return '/projects/bbangbiseo';
  }
  if (cleaned === '/projects/nongdam') return '/projects/nongdam';
  return '/';
}

const ROUTE_TITLES: Record<RoutePath, string> = {
  '/': '김서영.dev | Backend & Full-Stack Engineer',
  '/projects/facefit': 'FaceFit — AI 모의 면접 서비스 | 김서영.dev',
  '/projects/bbangbiseo': '김서영.dev | 빵비서 (Bread Secretary) 포트폴리오',
  '/projects/nongdam': '농담(밭머리) — 다국어 작업 지시 서비스 | 김서영.dev',
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    document.title = ROUTE_TITLES[currentPath];
  }, [currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      const next = normalizePath(window.location.pathname);
      setCurrentPath(next);
      const hash = window.location.hash.replace(/^#/, '');
      if (hash) {
        window.setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate: NavigateFn = useCallback((path, hash) => {
    const targetUrl = hash ? `${path}#${hash}` : path;
    try {
      window.history.pushState({}, '', targetUrl);
    } catch {
      // Ignore history pushState errors inside restricted sandboxes
    }

    setCurrentPath(path);

    if (hash) {
      window.setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  if (currentPath === '/projects/facefit') {
    return <FaceFitPage onNavigate={handleNavigate} />;
  }

  if (currentPath === '/projects/bbangbiseo') {
    return <BreadSecretaryPage onNavigate={handleNavigate} />;
  }

  if (currentPath === '/projects/nongdam') {
    return <NongdamPage onNavigate={handleNavigate} />;
  }

  return <LandingPage onNavigate={handleNavigate} />;
}
