function createDomFromString(domString) {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}
