function scroll_to(element_id) {
	document.getElementById(element_id).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
};


function showNotification() {
	const notification_area = document.getElementById('notification-menu')
	const body = document.body
	notification_area.style.right = '0px'
	body.style.touchAction = 'none'
}

function hideNotification() {
	const body = document.body
	const notification_area = document.getElementById('notification-menu')
	notification_area.style.right = '-400px'
	body.style.touchAction = 'initial'
}
