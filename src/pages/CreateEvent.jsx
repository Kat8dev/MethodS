import { CreateEWrapper } from "../styled/CreateEWrapper";
import Footer from "../components/Footer";
import { useState, useContext } from "react";
import Mapbox from "../components/Mapbox";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [eLocation, setELocation] = useState("");
  const [groupForm, setGroupForm] = useState({
    gName: "",
    purpose: "",
    date: "",
  });

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setGroupForm(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  };

  const showAlert = () => Swal.fire("Tu evento ha sido creado con exito!")
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const eventInfo = {
        userId: user._id,
        textTitle: groupForm.gName,
        desc: groupForm.purpose,
        eventDate: groupForm.date,
        eventLocation: eLocation
      }
      await axios.post("/posts", eventInfo);
      showAlert();
      navigate("/account/:username")
    } catch (err) {
      //TODO: implement bagsnack
    }
  }

  return (
    <>
      <CreateEWrapper>
        <div className="form_div">
          <h2>Crea  un evento</h2>
          <form onSubmit={handleSubmit}>
            <input type="text"
              name="gName" value={groupForm.gName} onChange={handleChange}
              className="input input-bordered input-success w-full max-w-xs"
              placeholder="Introduce el nombre del evento"
            />
            <textarea required name="purpose" value={groupForm.purpose} onChange={handleChange}
              className="textarea textarea-success"
              placeholder="Introduce acerca de que sera el evento"
            />
            <input required type="date" onChange={handleChange} name="date"
              className="input input-bordered input-success w-full max-w-xs"
            />
            <Mapbox className="mapbox" value={eLocation} setValue={setELocation} />
            <button type="submit">Acceptar</button>
          </form>
        </div>
      </CreateEWrapper>
      <Footer />
    </>
  );
};

export default CreateEvent;









/*import { CreateEWrapper } from "../styled/CreateEWrapper";
import Footer from "../components/Footer";
import { useState } from "react";
import Mapbox from "../components/Mapbox";
import { EStorage } from "../context/EventContext";


const CreateEvent = () => {
  const storage = EStorage();
  const [eLocation, setVELocation] = useState("");

  const [groupForm, setGroupForm] = useState({
    gName: "",
    purpose: "",
    date: "",
  });

  const handleChange = (e) => {
    setGroupForm(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventInfo = {
      eName: groupForm.gName,
      ePurpose: groupForm.purpose,
      eDate: groupForm.date,
      eLocation: eLocation
    }
    storage.events.push(eventInfo)
  }

  return (
    <>
      <CreateEWrapper>
        <div className="header">
          <h2>Crea  un evento</h2>
        </div>
        <div className="form_div">
          <form action="#" onSubmit={handleSubmit}>
            <input type="text" id="gName" name="gName" value={groupForm.gName} onChange={handleChange} />
            <label htmlFor="gName">Introduce el nombre del evento</label>
            <textarea id="purpose" name="purpose" value={groupForm.purpose} onChange={handleChange} />
            <label htmlFor="purpose">Introduce acerca de que sera el evento</label>
            <input type="date" onChange={handleChange} name="date" />
            <Mapbox className="mapbox" value={eLocation} setValue={setVELocation}/>          
            <button>Acceptar</button>            
          </form>                  
        </div>
      </CreateEWrapper>
      <Footer />
    </>
  );
};

export default CreateEvent;*/
