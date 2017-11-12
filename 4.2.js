// @flow

// Before
function getProcessedDate(day: number, month: number, year: number): string {
  return `Day ${day}. Month: ${month}. Year: ${year}`;
}

getProcessedDate(1, 1, 1970);

// After
const dateObject: {
  day: number,
  month: number,
  year: number,
} = {
  day: 1,
  month: 1,
  year: 1970,
}

function getProcessedDateAfter(date): string {
  const { day, month, year } = date;

  return `Day ${day}. Month: ${month}. Year: ${year}`;
}

getProcessedDateAfter(dateObject);
