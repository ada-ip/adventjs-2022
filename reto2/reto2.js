const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays); // 2 días -> 4 horas extra en el año

function countHours(year, holidays) {
	let hours = 0;

	// Para cada fecha se crea un objeto Date para poder saber si el festivo cae en lunes-viernes o no
	holidays.forEach((holiday) => {
		let month = parseInt(holiday.substring(0, holiday.indexOf("/")));
		let day = parseInt(holiday.substring(holiday.indexOf("/") + 1));
		let holidayDate = new Date(year, month - 1, day);
		if (holidayDate.getDay() > 0 && holidayDate.getDay() < 6) {
			hours += 2;
		}
	});

	return hours;
}
