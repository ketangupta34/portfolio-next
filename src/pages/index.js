import HomePage from '@frontend/home-page';
import NavigationBar from '@frontend/navigation-bar';

export default function Home() {
  return (
    <div className="bg-color text-color ">
      <NavigationBar />
      <HomePage />
    </div>
  );
}
