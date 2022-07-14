import { users } from "../users"

export const logInCheck = (email, pass) => {
  if (users.map(user => user.email).includes(email)){
    let i = users.map(user => user.email).indexOf(email)
    if (users[i].password === pass) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

export const passCheck = (pass1, pass2) => {
  if(pass1 === pass2) {
    return true
  } else {
    return false
  }
}

export const loadUser = (email) => {
  let i = users.map(user => user.email).indexOf(email)
  return users[i]
}