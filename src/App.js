import './App.css';
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AddTicket } from './pages/addTickets/AddTickets.page';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import Entry from './pages/entry/Entry.page';
import { TicketList } from './pages/ticketList/TicketList.page';
import { Tickets } from './pages/tickets/Tickets.page';
import  {PrivateRoute}  from './components/privateRouter/PrivateRoute.comp';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" index element={<Entry />} ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/add-ticket"
            element={
              <PrivateRoute>
                <AddTicket />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/ticket-list"
            element={
              <PrivateRoute>
                <TicketList />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/Tickets"
            element={
              <PrivateRoute>
                <Tickets />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
