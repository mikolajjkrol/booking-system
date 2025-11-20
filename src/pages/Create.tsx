import DaysSwitch from '../components/blocks/DaysSwitch'
import { useState } from 'react'

export default function Create() {
    const [workdays, setWorkdays] = useState(["Mon", "Tue"]);

    return (
        <main className="main-content">
          <div className="create">
            <div className="item">
              <p><b>Create a system</b><br /> This is where you create your booking system by providing some info.</p>
            </div>
            <div className="item">
              <p>Project name</p>
              <input type="text" placeholder="eg. your company name or service" />
            </div>
            <div className="item">
              <p>Project password</p>
              <input type="password" placeholder="a strong password for your project" />
            </div>
            <div className="item">
              <p>Calendar (choose work days)</p>
              <DaysSwitch selectedDays={workdays} onChange={setWorkdays}/>
            </div>
            <div className="item d">
              <p>Choose work hours</p>
              <div className="timer">
                <input type="time" name="time" id="time" defaultValue="08:00" /> -
                <input type="time" name="time" id="time" defaultValue="16:00" />
              </div>
            </div>
            <div className="item">
              <p></p>
              <div className="buttons">
                <button className="submit cancel">Cancel</button>
                <button className="submit">Create</button>
              </div>
            </div>
          </div>
        </main>        
        )
}