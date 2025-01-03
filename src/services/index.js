
export const addParams = (params) => {
  let str = ""
  for (let p in params) {
    str += p + "=" + params[p] + "&"
  }
  str = str.replace(/&$/, "")
  return str ? "?" + str : ""
}
