export const valid = (name, value) => {
  if(name === 'zipcode' || name === 'cell' || name ==='phone') {
    if(/^[0-9]*$/i.test(value)) {
      console.log('pass')
      return true
    } else {
      return false
    }
  } else if (name === 'state' || name === 'country' || name === 'city' || name === 'name'){
    if(/^[a-zA-Z ]*$/i.test(value)) {
      console.log('pass')
      return true
    } else {
      return false
    }
  } else if (name === 'address') {
    return true
  }
}

