if (window.screen.width >= 769){
	document.addEventListener('mousemove', e => {
		Object.assign(document.documentElement, {
			style: `
			--move-x: ${(e.clientX - window.innerWidth / 2) * -0.004}deg;
			--move-y: ${(e.clientY - window.innerHeight / 2) * -0.009}deg;
			`
		})
	})
} else if(window.screen.width <= 769){
	if (window.DeviceMotionEvent) {
		window.addEventListener('devicemotion', motion_hook, false);
		
	}
	else {
		// DeviceMotionEvent не поддерживается
		console.log('DeviceMotionEvent не поддерживается')
	}
	
	// Обработчик события DeviceMotionEvent
	function motion_hook(event) {
		console.log('Accelerometer: '
			+ 'X=' + event.accelerationIncludingGravity.x
			+ 'Y=' + event.accelerationIncludingGravity.y
			+ 'Z=' + event.accelerationIncludingGravity.z
		);
		Object.assign(document.documentElement, {
			style: `
			--move-x: ${(event.accelerationIncludingGravity.x) * 4}deg;
			--move-y: ${(event.accelerationIncludingGravity.y) * 4}deg;
			`
		})
	}
	motion_hook()
}

