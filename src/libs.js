function ellipsis (string, count) {
  if (string.length > count) {
    return string.slice(0, count) + '...'
  } else {
    return string
  }
}

export {
  ellipsis
}
