const isName = name => /^[A-Za-z]+([ ]?[A-Za-z]+)+$/.test(name);

const isRelation = relation => /^[A-Z a-z]+$/.test(relation);

const isDate = date => /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(date);

const isGender = gender => /^(male|female|third gender)$/i.test(gender);

const isHouseNumber = houseNumber => /^\d+$/.test(houseNumber);

const isPin = pin => /^[1-9]\d{5}$/.test(pin);

const isState = state => /^[A-Za-z]+([ ]?[A-Za-z0-9]+)+$/.test(state);

const isLocality = locality => /^[A-Za-z]+([ ]?[A-Za-z0-9,.-]+)+$/.test(locality);

const isEmail = email => /^\w+@\w+\.\w+$/.test(email);

const isMobile = mobile => /^\d{3}-\d{3}-\d{4}$/.test(mobile);

const isEmpty = str => !str || /^\s*$/.test(str);

const isVoterID = id => /^[0-9a-f]{24}$/i.test(id);

module.exports = {
  isName,
  isRelation,
  isDate,
  isGender,
  isHouseNumber,
  isLocality,
  isBlock: isName,
  isPost: isName,
  isPin,
  isDistrict: isState,
  isState,
  isEmail,
  isMobile,
  isString: isName,
  isEmpty,
  isVoterID
};
