function splice(arr, idx, func) {
  return [...arr.slice(0, idx), ...func(arr[idx]), ...arr.slice(idx + 1)]
}

export { splice }
