import { useState } from "react";
import styled from "styled-components";
//import MapRender from "./MapRender";

const Mapbox = (props) => {

  { /*const [value, setValue] = useState("");*/ }
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    props.setValue(event.target.value);

    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1Ijoia2hhdGphYmEiLCJhIjoiY2w4OTVydXcwMDM3cTNucDQ3bjIzYnk3bSJ9.aIuXee1DZv-VbnN_uSoAjw&autocomplete=true`;
      const response = await fetch(endpoint);
      const results = await response.json();
      setSuggestions(results?.features);
    } catch (error) {
      console.log("Error fetching data, ", error);
    }
  };

  {/*const [lng, setLng] = useState(54.37585762735543);
const [lat, setLat] = useState(24.45677614934833); */}

  return (
    <>
      <input
        className="textarea textarea-success"
        placeholder="Dirección"
        value={props.value}
        onChange={handleChange}
        isTyping={props.value !== ""}
      />
      {suggestions?.length > 0 && (
        <SuggestionWrapper>
          {suggestions.map((suggestion, index) => {
            return (
              <Suggestion
                key={index}
                onClick={() => {
                  props.setValue(suggestion.place_name);
                  setSuggestions([]);
                }}
              >
                {suggestion.place_name}
              </Suggestion>
            );
          })}
        </SuggestionWrapper>
      )}
      {/*<MapRender lng={lng} lat={lat}/>*/}
    </>
  );
};

export default Mapbox;

const SuggestionWrapper = styled.div`
  background: transparent;
  max-width: 310px;
`;

const Suggestion = styled.p`
  cursor: pointer;
  z-index: 1;
`;


