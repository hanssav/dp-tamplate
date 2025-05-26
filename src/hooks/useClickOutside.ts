/**
 * Detects clicks outside the given element and calls the callback.
 *
 * @param ref - Element ref to detect outside clicks on
 * @param onClickOutside - Callback when clicked outside
 */

import { useEffect } from 'react';

export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  onClickOutside: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
}
