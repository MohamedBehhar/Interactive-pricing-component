var sliderRange = document.getElementById('slider-range');
var selector = document.getElementById('selector');
var value = document.getElementById('value');
var progresBar = document.getElementById('progress-bar');

sliderRange.oninput = function (){
	let total = parseInt(this.value) * 32 / 100;
	selector.style.left = this.value + '%';
	value.innerHTML = '$' +  total.toFixed(0) + '.00';
	progresBar.style.width = this.value + '%';
}
