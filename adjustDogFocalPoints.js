// Focal Point Adjustment Script for Dog Profile Images
// Run this in your browser console on the dogs page to adjust all focal points

// Helper function to set focal points
function setFocalPoint(mediaKey, x, y) {
  const focalPoints = JSON.parse(localStorage.getItem('gem-project-focal-points') || '{}');
  focalPoints[mediaKey] = { x, y };
  localStorage.setItem('gem-project-focal-points', JSON.stringify(focalPoints));
  console.log(`Set focal point for ${mediaKey}: x=${x}, y=${y}`);
}

// ADOPTABLE DOGS - Focal Point Adjustments
console.log('Adjusting ADOPTABLE DOG focal points...');

// Alex - shift left so his face is visible (move focal point left)
setFocalPoint('alex_main', 0.3, 0.4);

// Chandra - shift down so her face is visible (move focal point up)
setFocalPoint('chandra_main', 0.5, 0.3);

// Daisy - shift right so her face is visible (move focal point right)
setFocalPoint('daisy_main', 0.7, 0.4);

// Max - shift down so his face is visible (move focal point up)
setFocalPoint('max_main', 0.5, 0.3);

// Ruth - shift down so her face is visible (move focal point up)
setFocalPoint('ruth_main', 0.5, 0.3);

// Fifi - shift slightly right so her entire face is visible
setFocalPoint('fifi_main', 0.6, 0.4);

// Foxy - shift down slightly so her face is in the image (move focal point up)
setFocalPoint('foxy_main', 0.5, 0.3);

// Hazel - shift down so her face is in the image (move focal point up)
setFocalPoint('hazel_main', 0.5, 0.3);

// FOREVER SANCTUARY DOGS - Focal Point Adjustments
console.log('Adjusting FOREVER SANCTUARY DOG focal points...');

// Casper - shift right so his full face is displayed
setFocalPoint('casper_main', 0.7, 0.4);

// Jerry - shift down so his full face is displayed (move focal point up)
setFocalPoint('jerry_main', 0.5, 0.3);

// Jesse - shift left so his full face is displayed (move focal point left)
setFocalPoint('jesse_main', 0.3, 0.4);

// Simba - shift up so his full face is displayed (move focal point down)
setFocalPoint('simba_main', 0.5, 0.6);

// Ruby - shift left so her full face is displayed (move focal point left)
setFocalPoint('ruby_main', 0.3, 0.4);

// Pretty - shift left so his full face is displayed (move focal point left)
setFocalPoint('pretty_main', 0.3, 0.4);

console.log('All dog focal points have been adjusted!');
console.log('Refresh the page to see the changes.');

// Optional: Show current focal points for verification
const currentFocalPoints = JSON.parse(localStorage.getItem('gem-project-focal-points') || '{}');
console.log('Current focal points:', currentFocalPoints);