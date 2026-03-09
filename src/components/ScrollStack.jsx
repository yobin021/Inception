import { useLayoutEffect, useRef, useCallback } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '', id }) => (
  <div id={id} className={`scroll-stack-card ${itemClassName}`.trim()}>
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 80,
  itemScale = 0.05,
  itemStackDistance = 30,
  stackPosition = 0.20,
  scaleEndPosition = 0.10,
  baseScale = 0.85,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const endRef = useRef(null);

  const cacheRef = useRef({
    cardTops: [],
    endTop: 0,
    vh: 0
  });

  const rafIdRef = useRef(0);
  const lastScrollRef = useRef(-1);

  const cachePositions = useCallback(() => {
    if (!scrollerRef.current || cardsRef.current.length === 0 || !endRef.current) return;

    const vh = window.innerHeight;
    const scrollTop = window.scrollY;

    cacheRef.current.cardTops = cardsRef.current.map(
      c => c.getBoundingClientRect().top + scrollTop
    );
    cacheRef.current.endTop = endRef.current.getBoundingClientRect().top + scrollTop;
    cacheRef.current.vh = vh;
  }, []);

  const render = useCallback(() => {
    rafIdRef.current = 0;
    const scrollTop = window.scrollY;
    if (scrollTop === lastScrollRef.current) return;
    lastScrollRef.current = scrollTop;

    const { cardTops, endTop, vh } = cacheRef.current;
    if (vh === 0 || cardTops.length === 0) return;

    const stackPx = stackPosition * vh;
    const scaleEndPx = scaleEndPosition * vh;
    const pinEnd = endTop - vh / 2;

    const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

    for (let i = 0; i < cardsRef.current.length; i++) {
      if (!cardsRef.current[i]) continue;

      const cardTop = cardTops[i];
      const trigStart = cardTop - stackPx - itemStackDistance * i;
      const trigEnd = cardTop - scaleEndPx;

      // Scale progress
      const sp = clamp01((scrollTop - trigStart) / Math.max(1, trigEnd - trigStart));
      const tScale = baseScale + i * itemScale;
      const scale = 1 - sp * (1 - tScale);

      // Pin translate
      let ty = 0;
      if (scrollTop >= trigStart && scrollTop <= pinEnd) {
        ty = scrollTop - cardTop + stackPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        ty = pinEnd - cardTop + stackPx + itemStackDistance * i;
      }

      // Single composited property — no layout thrash
      cardsRef.current[i].style.transform = `translate3d(0,${ty}px,0) scale(${scale})`;
    }
  }, [baseScale, itemScale, itemStackDistance, scaleEndPosition, stackPosition]);

  const onScroll = useCallback(() => {
    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(render);
    }
  }, [render]);

  useLayoutEffect(() => {
    if (!scrollerRef.current) return;

    const cards = Array.from(scrollerRef.current.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.transformOrigin = 'top center';
      card.style.willChange = 'transform';
      card.style.transform = 'translate3d(0,0,0)';
    });

    const handleResize = () => {
      cachePositions();
      render();
    };

    // Initial cache & render (delay slightly to ensure everything is painted if needed, or straight away)
    cachePositions();
    render();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [cachePositions, itemDistance, onScroll, render]);

  return (
    <div className={`scroll-stack-wrapper ${className}`.trim()} ref={scrollerRef}>
      {children}
      <div ref={endRef} className="scroll-stack-end" />
    </div>
  );
};

export default ScrollStack;
