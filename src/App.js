import './App.css';
import { DefaultLayout } from './layout/defaultLayout';
import Entry from './pages/entry/Entry.page';

function App() {
  return (
    <div className="App">
      {/*<Entry/>*/}
      <DefaultLayout>
        Hello this is the main content
      </DefaultLayout>
    </div>
  );
}

export default App;
