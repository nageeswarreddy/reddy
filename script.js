const seatContainer = document.querySelector('.seats');
const count = document.getElementById('count');
const total = document.getElementById('total');
const ticketPrice = 150;

function createSeats() {
  for (let i = 0; i < 48; i++) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    if (Math.random() < 0.2) seat.classList.add('occupied');
    seat.addEventListener('click', () => {
      if (!seat.classList.contains('occupied')) {
        seat.classList.toggle('selected');
        updateCount();
      }
    });
    seatContainer.appendChild(seat);
  }
}

function updateCount() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * ticketPrice;
}

function bookNow() {
  const selected = document.querySelectorAll('.seat.selected');
  if (selected.length === 0) {
    alert('Please select at least one seat.');
    return;
  }
  selected.forEach(seat => {
    seat.classList.remove('selected');
    seat.classList.add('occupied');
  });
  updateCount();
  alert('Tickets booked successfully!');
}

createSeats();
updateCount();
