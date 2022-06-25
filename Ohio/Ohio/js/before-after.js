//Before After Image Effect
$("#compare-slider").on("input change", (e)=>{
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.foreground-img').css('width', `calc(${sliderPos}% - 4px)`)
  // Update the position of the slider button
  $('.slider-button').css('left', `calc(${sliderPos}% - 32px)`)
});