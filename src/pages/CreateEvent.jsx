import { CreateEWrapper } from "../styled/CreateEWrapper";
import Footer from "../components/Footer";
import { useState } from "react";

const CreateEvent = () => {

  const [groupForm, setGroupForm] = useState({
      gName: "",
      purpose: "",
  });

  const hanldeChange = (e) => {
    e.preventDefault();
    setGroupForm(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <>
      <CreateEWrapper>
        <div className="header">
          <h2>Crea  un evento</h2>
        </div>
        <div className="form_div">
          <form action="#">
            <input type="text" id="gName" name="gName" value={groupForm.gName} onChange={hanldeChange} />
            <label htmlFor="gName">Introduce el nombre del evento</label>
            <input type="text" id="purpose" name="purpose" value={groupForm.purpose} onChange={hanldeChange} />
            <label htmlFor="purpose">Introduce acerca de que sera el evento</label>
            <button>Acceptar</button>
          </form>
        </div>
      </CreateEWrapper>
      <Footer />
    </>
  );
};

export default CreateEvent;
