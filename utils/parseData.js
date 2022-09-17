export const parseData = (toggle, report, annual, quarter) => {
  let data
  if(toggle && report?.symbol) {
    if(report[quarter].length > 20) {
      data = report[quarter].slice(0, 20).reverse()
    } else {
      data = report[quarter].slice().reverse()
    }
  } else if(!toggle && report?.symbol) {
    if(report[annual].length > 5) {
      data = report[annual].slice(0, 5).reverse()
    } else {
      data = report[annual].slice().reverse()
    }
  }
  return data
}
