let mouseImage = document.querySelectorAll('.mouse-image');
let mouseImageArr = [...mouseImage];
let threshold = 350; //When will the image flip to top of mouse
let clientHeight = document.documentElement.clientHeight;
let maxHeight = clientHeight - threshold;

document.addEventListener('mousemove', function (e) {
	if (e.clientY > maxHeight) {
		mouseImageArr.forEach((item) => {
			item.style.top = e.clientY - item.clientHeight + 'px';
			item.style.left = e.clientX + 20 + 'px';
		});
	} else {
		mouseImageArr.forEach((item) => {
			item.style.top = e.clientY + 'px';
			item.style.left = e.clientX + 20 + 'px';
		});
	}
});
