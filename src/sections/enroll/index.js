import React, { useState } from 'react';
import styles from './enroll.module.scss';
import { api } from '../../meta.json';
import { states } from '../../utils/states.json';
import axios from 'axios';

const toBase64String = file => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.addEventListener('load', () => {
      resolve(fileReader.result);
    });
    if (file) {
      fileReader.readAsDataURL(file);
    }
  });
}

const Enroll = props => {
  const [ name, handleName ] = useState("");
  const [ surname, handleSurname ] = useState("");
  const [ relative, handleRelative ] = useState("");
  const [ relation, handleRelation ] = useState("");
  const [ dob, handleDOB ] = useState("");
  const [ gender, handleGender ] = useState("");
  const [ house, handleHouse ] = useState("");
  const [ area, handleArea ] = useState("");
  const [ block, handleBlock ] = useState("");
  const [ post, handlePost ] = useState("");
  const [ pin, handlePin ] = useState("");
  const [ district, handleDistrict ] = useState("");
  const [ state, handleState ] = useState("");
  const [ disability, handleDisability ] = useState("");
  const [ email, handleEmail ] = useState("");
  const [ mobile, handleMobile ] = useState("");
  const [ constituency, handleConstituency ] = useState("");

  const handleFormData = async e => {
    e.preventDefault();
    const data = {
      constituency: constituency,
      name: name,
      surname: surname,
      relative: relative,
      relation: relation,
      dob: dob,
      gender: gender,
      address: {
        current: {
          house: house,
          area: area,
          block: block,
          post: post,
          pin: pin,
          district: district,
          state: state
        }
      },
      disability: disability,
      mobile: mobile,
      email: email,
      image: await toBase64String(e.target.photo.files[0])
    };
    console.log(data);
    axios.post(api.evoter.enroll, data)
      .then(res => {
        if(res.data.errors === undefined) {
          alert("Registration Successful"); 
          window.location = api.evoter.download + '?voterID=' + res.data.voterID;
        }
        else {
          console.log(res.data.errors);
          alert("Error", res.data.errors);
        }
      })
      .catch(error => {
        alert("Error", error);
        console.log(error);
      });
  }

  return (
    <section className={ styles.enroll }>
      <h1 className="section-title">Enroll New Voter</h1>
      <hr />
      <form onSubmit={e => handleFormData(e)}>
        <div className={ styles.enroll__form_wrapper }>          
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="name"
              id="name"
              placeholder=""
              value={name}
              required
              onChange={e => handleName(e.target.value)}
            />
            <label htmlFor="name">Name *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="surname"
              id="surname"
              placeholder="" 
              value={surname}
              required
              onChange={e => handleSurname(e.target.value)}
            />
            <label htmlFor="surname">Surname *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="relative"
              id="relative"
              placeholder=""
              value={relative} 
              required
              onChange={e => handleRelative(e.target.value)}
            />
            <label htmlFor="relative">Relative *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="relation"
              id="relation"
              placeholder="" 
              value={relation}
              required
              onChange={e => handleRelation(e.target.value)}
            />
            <label htmlFor="relation">Relation *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="date"
              name="dob"
              id="dob"
              placeholder=""
              value={dob}
              required
              onChange={e => handleDOB(e.target.value)}
            />
            <label htmlFor="dob">Date of Birth *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <select name="gender"
              id="gender"
              defaultValue=""
              onChange={e => handleGender(e.target.value)}
            >
              <option disabled value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Third Gender">Third Gender</option>
            </select>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="house"
              id="house"
              placeholder=""
              value={house}
              required
              onChange={e => handleHouse(e.target.value)}
            />
            <label htmlFor="house">House Number</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="area"
              id="area"
              placeholder=""
              value={area}
              required
              onChange={e => handleArea(e.target.value)}
            />
            <label htmlFor="area">Street/Area/Locality *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="block"
              id="block"
              placeholder=""
              value={block}
              required
              onChange={e => handleBlock(e.target.value)}
            />
            <label htmlFor="block">Town/Village *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="post"
              id="post"
              placeholder=""
              value={post}
              required
              onChange={e => handlePost(e.target.value)}
            />
            <label htmlFor="post">Post *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="pin"
              id="pin"
              placeholder="" 
              value={pin}
              required
              onChange={e => handlePin(e.target.value)}
            />
            <label htmlFor="pin">PIN *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <select name="state"
              id="state"
              defaultValue=""
              onChange={e => handleState(e.target.value)}
            >
              <option disabled value="">State</option>
              {
                states.map((state,idx) => (
                  <option key={idx} value={state.state}>{state.state}</option>
                ))
              }
            </select>
          </div>
          <div className={ styles.enroll__form_input }>
            <select name="district"
              id="district"
              defaultValue=""
              onChange={e => handleDistrict(e.target.value)}
            >
              <option disabled value="">District</option>
              {
                state !== "" && states.filter(st => st.state === state)[0].districts.map((d,idx) => (
                  <option key={idx} value={d}>{d}</option>
                ))
              }
            </select>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="disability"
              id="disability"
              placeholder=""
              value={disability}
              required
              onChange={e => handleDisability(e.target.value)}
            />
            <label htmlFor="disability">Disability</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="email"
              name="email"
              id="email"
              placeholder="" 
              value={email}
              required
              onChange={e => handleEmail(e.target.value)}
            />
            <label htmlFor="email">Email *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="mobile"
              id="mobile"
              placeholder=""
              value={mobile}
              required
              onChange={e => handleMobile(e.target.value)}
            />
            <label htmlFor="mobile">Mobile *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="text"
              name="constituency"
              id="constituency"
              placeholder="" 
              value={constituency}
              required
              onChange={e => handleConstituency(e.target.value)}
            />
            <label htmlFor="constituency">Constituency *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <input type="file"
              name="photo"
              id="photo"
              placeholder="" 
              required
            />
            <label htmlFor="photo">Photo *</label>
          </div>
          <div className={ styles.enroll__form_input }>
            <button type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Enroll;
