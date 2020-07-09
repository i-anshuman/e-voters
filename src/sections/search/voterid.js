import React from 'react';
import styles from './voterid.module.scss';
import { api } from '../../meta.json';

const VoterCrad = ({ voterinfo, close }) => {
  console.log(voterinfo)
  return (
    <div className={styles.voterid}>
      {
        voterinfo.length === 0 ?
        <h1 className={styles.voterid__error}>Voter not found!!!</h1> :
        <>
          <div className={styles.voterid__title}>
            <img src="logo192.png" alt="logo"/>
            <div>
              <h2>Voter ID</h2>
              <p>Election Commission</p>
            </div>
          </div>
          <hr />
          <div className={styles.voterid__identity}>
            <img src={voterinfo.photo} alt={`${voterinfo.name} ${voterinfo.surname}`}/>
            <div>
              <p>Name: {`${voterinfo.name} ${voterinfo.surname}`}</p>
              <p>Relative: {voterinfo.relative}</p>
              <p>Relation: {voterinfo.relation}</p>
              <p>Gender: {voterinfo.gender}</p>
              <p>Date of Birth: {new Date(voterinfo.dob).toISOString().split('T')[0]}</p>
              <p>Disability: {voterinfo.disability}</p>
            </div>
          </div>
          <div className={styles.voterid__address}>
            <p>House Number: {voterinfo.address.current.house}</p>
            <p>Street/Area/Locality: {voterinfo.address.current.area}</p>
            <p>Town/Village: {voterinfo.address.current.block}</p>
            <p>Post: {voterinfo.address.current.post}</p>
            <p>District: {voterinfo.address.current.district}</p>
            <p>State/UT: {voterinfo.address.current.state}</p>
          </div>
          <div className={styles.voterid__buttons}>
            <button onClick={close} className={styles.voterid__close}>Close</button>
            <a className={styles.voterid__download}
              href={`${api.evoter.download}?voterID=${voterinfo._id}`}
            >
              Download
            </a>
          </div>
        </>
      }
    </div>
  );
};

export default VoterCrad;//

