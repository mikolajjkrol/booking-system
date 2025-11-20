import '../styles/dashboard.css'
import Calendar from "../components/blocks/Calendar";
import ServicesList from "../components/blocks/ServicesList";
import ReservationsList from "../components/blocks/ReservationsList";
import Statistics from "../components/blocks/Statistics";
import EditButton from "../components/blocks/EditButton";

export default function Dashboard() {
  return (
      <main>
          <div className="row1">
            <div className="table">
              <span>
                Reservations
                <EditButton />
              </span>
              <p>Table with all upcoming reservations and their details. You can edit, add or cancel them here.</p>
              <ReservationsList />
            </div>
            <div className="row2">
              <div className="row3">
                <div className="list">
                  <span>
                    Services list
                    <EditButton />
                  </span>
                  Choose what services you provide for better customer feedback
                  <ServicesList />
                </div>
                <div className="calendar">
                  <span>
                    Calendar and work hours
                    <EditButton />
                  </span>
                  Manage your bookings and appointments in an easy way, add free days and manage custom work hours.
                  <Calendar />
                </div>
              
              </div>
              <div className="statistics">
                <span>Statistics</span>
                <Statistics />
              </div>
            </div>
          </div>
      </main>
  );
}