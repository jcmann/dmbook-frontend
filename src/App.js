import { Sidebar } from './layout/SideBar';
import { MainContent } from './layout/MainContent';

function App() {
  return (
    <div className="App row m-4">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
