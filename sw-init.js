if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw.js')
  .then(function() {
    console.log("Installed Service Worker");
  })

  .catch(function() {
    console.log("Didn't installed Service Worker")
  })
}

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('sw.js')
//       .then(reg => {
//         console.log('service worker is registered', reg)
//       })
//       .catch(err => {
//         console.log('service worker is not registered', err)
//       })
//   })
// }

