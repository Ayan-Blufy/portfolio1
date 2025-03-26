import { useEffect, useState } from 'react';

export function useInView(
  elementRef,
  {
    threshold = 0,
    rootMargin = '0px',
    once = false,
  } = {}
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        
        if (isVisible) {
          setIsInView(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [elementRef, threshold, rootMargin, once]);

  return isInView;
}