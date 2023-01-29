import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isThemeDark, setIsThemeDark] = useState(false);

  useEffect(() => {
    if (isThemeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isThemeDark]);

  return (
    <input
      type="checkbox"
      checked={isThemeDark}
      onChange={(e) => setIsThemeDark(e.target.checked)}
    />
  );
}
