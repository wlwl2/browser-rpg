// Waits for all the images etc. to load, then runs the step function.
// function assetLoader () {
//   const images = document.querySelectorAll('img')
//   if (images.length === 0) return
//   const imageListLength = images.length
//   // console.log(imageListLength)
//   let loadedImagesCounter = 0
//   for (var i = 0; i < imageListLength; i++) {
//     images[i].addEventListener('load', function (event) {
//       loadedImagesCounter += 1
//       // console.log(loadedImagesCounter)
//       if (imageListLength === (loadedImagesCounter + 1)) {
//         // console.log('all done')
//         step()
//       }
//     }, false)
//   }
// }
