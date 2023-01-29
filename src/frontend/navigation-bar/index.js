import DarkModeToggle from '@frontend/dark-mode';

export default function NavigationBar() {
  return (
    <div className="w-full h-16 backdrop-blur-xs bg-opacity-50 dark:bg-opacity-10 border-b-2 fixed flex-center z-20">
      <div className="w-11/12 sm:w-10/12 flex-between">
        <h1 className="text-3xl font-bold">
          Ketan Gupta
          <span className="text-orange-500">.</span>
        </h1>

        <DarkModeToggle />
      </div>
    </div>
  );
}
