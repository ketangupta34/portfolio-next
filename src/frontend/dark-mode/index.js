import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

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
    <DarkModeSwitch checked={isThemeDark} onChange={(c) => setIsThemeDark(c)} />
  );
}
