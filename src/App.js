import './App.css';
import { DefaultLayout } from './layout/defaultLayout';
import { AddTicket } from './pages/addTickets/AddTickets.page';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import Entry from './pages/entry/Entry.page';
import { TicketList } from './pages/ticketList/TicketList.page';

function App() {
  return (
    <div className="App">
      {/*<Entry/>*/}
      <DefaultLayout>
        {/*<Dashboard/>*/}
        {/*<AddTicket/>*/}
        <TicketList/>
      </DefaultLayout>
    </div>
  );
}

export default App;
