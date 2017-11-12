// function assetsLoaded () {
//   const images = document.querySelectorAll('img')
//   if (images.length === 0) return
//   const imageListLength = images.length
//   console.log(imageListLength)
//   let loadedImagesCounter = 0
//   for (var i = 0; i < imageListLength; i++) {
//     images[i].addEventListener('load', function (event) {
//       loadedImagesCounter += 1
//       if (imageListLength === (loadedImagesCounter + 1)) {
//         // console.log('all done')
//         return true
//       }
//     }, false)
//   }
// }
//
// export default assetsLoaded
