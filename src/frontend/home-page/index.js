import DarkModeToggle from '@frontend/dark-mode';

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black dark:text-white flex-center">
      Is Dark Mode -
      <DarkModeToggle />
    </div>
  );
}
