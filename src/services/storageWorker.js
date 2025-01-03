
const check = () => typeof sessionStorage !== "undefined"

export const setData = (name, value, isString = false) => {
  if (name && check()) {
    sessionStorage.setItem(name, isString ? value : (typeof value !== "undefined" ? JSON.stringify(value) : ""))
  }
}

export const getData = (name, isString = false, defaultValue = []) => {
  if (check()) {
    if (name) {
      let data = sessionStorage.getItem(name)
      if (!data) {
        throw new Error("No data");
      }
      return isString ? data : (typeof data !== "undefined" ? JSON.parse(data) : defaultValue)
    }
  }
  return isString ? "" : defaultValue
}

export const isData = (name) => {
  if (name && check()) {
    return !!sessionStorage.getItem(name)
  }
  return false
}

export const clearData = (name) => {
  if (check()) {
      if (name) {
      sessionStorage.removeItem(name)
    } else {
      sessionStorage.clear()
      localStorage.clear()
    }
  }
}

export const getDefaultFilterBy = () => {
  if (isData("user")) {
    const user = getData("user")
    if (user?.ppoId) {
      const ppoId = user.ppoId
      return "ppoId:" + ppoId
    }
    if (user?.agencyId) {
      const agencyId = user?.agencyId
      return "agencyId:" + agencyId
    }
  }
  return ""
}

export const getDefaultFilterByAgency = (agencyId = "") => {
  if (agencyId) {
    return agencyId
  }
  if (isData("user")) {
    const user = getData("user")
    if (user?.agencyId) {
      return user?.agencyId
    }
  }
  return ""
}

export const getDefaultFilterByPPO = (ppoId = "") => {
  if (ppoId) {
    return ppoId
  }
  if (isData("user")) {
    const user = getData("user")
    if (user?.ppoId) {
      return user.ppoId
    }
  }
  return ""
}

export const getFilterByPPOAgency = (ppoId = "", agencyId = "") => {
  if (ppoId || agencyId) {
    return "ppoId:" + ppoId + ",agencyId:" + agencyId
  }

  if (isData("user")) {
    const user = getData("user")
    if (user?.ppoId) {
      ppoId = user.ppoId
    }
    if (user?.agencyId) {
      agencyId = user?.agencyId
    }
  }
  return "ppoId:" + ppoId + ",agencyId:" + agencyId
}
