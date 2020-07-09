import React, { useState } from 'react';
import axios from 'axios';
import styles from './search.module.scss';
import { isVoterID } from '../../utils/verification';
import { api } from '../../meta.json';
import VoterCrad from './voterid';

const Search = props => {
  const [ voterID, handleID ] = useState("5f04505a0b3b6b1b7df9b648");
  const [ loading, handleLoading] = useState(false);
  const [ error, handleError ] = useState({voterID: false});
  const [ voterInfo, handleVoterInfo] = useState(null);
  
  const handleSubmit = e => {
    e.preventDefault();
    if (isVoterID(voterID)) {
      handleLoading(true);
      axios({
        method: 'get',
        url: api.evoter.search,
        params: { _id: voterID }
      }).then(res => {
          handleVoterInfo(res.data.voters[0]);
        })
        .catch(err => alert(err))
        .finally(() => handleLoading(false));
    }
    else {
      handleError(error => ({...error, voterID: true}))
    }
  }

  return (
    <section className={ styles.search }>
      <h1 className="section-title">Search</h1>
      <hr />
      {
        voterInfo ?
        <VoterCrad voterinfo={voterInfo} 
          close={e => handleVoterInfo(false)}
        /> :
        <form onSubmit={ e => handleSubmit(e)}>
          <div className={ styles.search__form_wrapper }>
            <div className={ styles.search__form_input }>
              <input type="text" name="voterID" id="voterID" placeholder=""
                value={voterID}
                onChange={e => handleID(e.target.value)}
                className={error.voterID ? "error" : ""}
              />
              <label htmlFor="voterID">{error.voterID ? "Invalid Voter ID" : "Voter ID"}</label>
            </div>
            <div className={ styles.search__form_input }>
              <button type="submit" disabled={loading}>{loading ? "Searching..." : "Search"}</button>
            </div>
          </div>
        </form>
      }
    </section>
  );
};

export default Search;
