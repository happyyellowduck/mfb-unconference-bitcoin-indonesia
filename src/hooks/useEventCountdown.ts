import { useState, useEffect } from 'react';

export const EVENT_DATE = new Date('2026-08-22T08:00:00').getTime();

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

const compute = (): CountdownState => {
  const diff = EVENT_DATE - new Date().getTime();
  const isOver = diff <= 0;
  const abs = Math.abs(diff);

  return {
    days: Math.floor(abs / (1000 * 60 * 60 * 24)),
    hours: Math.floor((abs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((abs % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((abs % (1000 * 60)) / 1000),
    isOver,
  };
};

export const useEventCountdown = (): CountdownState => {
  const [state, setState] = useState<CountdownState>(compute);

  useEffect(() => {
    const timer = setInterval(() => setState(compute()), 1000);
    return () => clearInterval(timer);
  }, []);

  return state;
};
