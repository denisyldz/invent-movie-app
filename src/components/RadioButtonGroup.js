const RadioButtonGroup = ({ setSearchType }) => {
  return <>
    <div className='radio-button-group'>
      <div className="form-check">
        <input onClick={() => setSearchType('movie')} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        <label className="form-check-label" for="flexRadioDefault1">
          Movie
        </label>
      </div>
      <div className="form-check">
        <input onClick={() => setSearchType('series')} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
        <label className="form-check-label" for="flexRadioDefault2">
          Series
        </label>
      </div>
      <div className="form-check">
        <input onClick={() => setSearchType('episode')} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
        <label className="form-check-label" for="flexRadioDefault3">
          Episode
        </label>
      </div>
    </div>
  </>
}

export default RadioButtonGroup;