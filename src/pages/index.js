import HomePage from '@frontend/home-page';
import NavigationBar from '@frontend/navigation-bar';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <NavigationBar />
      <HomePage />
    </div>
  );
}
