import{j as e}from"./app-CA6_zjF1.js";import{F as i}from"./ChevronLeftIcon-DSJ0Sx97.js";import{f as r}from"./format-Dt71a7ij.js";const n=({log:t})=>{console.log("Log data: ",t);const s={date:t.departure_date,bookingCode:t.trip.booking.booking_code,bus:{name:"Shuttle Bus Tripin",plateNumber:t.trip.schedule.vehicle.license_plate},payment:{method:"Gopay",total:24e4},passengers:{count:t.trip.booking.seat_total,seats:`Seat ${t.trip.booking.seat_number.join(", ")}`},journey:{duration:"2 h 45 m",from:{city:t.trip.origin,time:t.trip.schedule.departure_time},to:{city:t.trip.schedule.location.name,time:t.trip.schedule.arrival_time}}};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"lg:flex lg:justify-center",children:e.jsxs("div",{className:"flex flex-col min-h-screen bg-primary lg:w-[400px]",children:[e.jsxs("div",{className:"flex items-center p-7 text-white relative",children:[e.jsx(i,{className:"size-6 absolute top-1/2 -translate-y-1/2 left-3 cursor-pointer",onClick:()=>history.back()}),e.jsx("span",{className:"flex-1 text-center text-xl font-medium",children:r(new Date(s.date),"dd MMM yyyy")})]}),e.jsxs("div",{className:"flex-1 bg-white rounded-t-xl p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("span",{className:"text-black font-semibold",children:"Booking Code"}),e.jsx("span",{className:"font-semibold",children:s.bookingCode})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-4 mb-6 flex items-center gap-4 border border-gray-100",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:"/shuttle_icon.svg",className:"size-10 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:s.bus.name}),e.jsx("p",{className:"text-gray-600 text-sm",children:s.bus.plateNumber})]})]}),e.jsx("h3",{className:"font-medium p-1 mb-2",children:"Detail Order"}),e.jsxs("div",{className:"bg-white rounded-md shadow-md border border-gray-100 mb-6",children:[e.jsxs("div",{className:"flex items-center p-4 border-b border-gray-100",children:[e.jsx("img",{src:"/gopay_icon.svg",className:"h-7 mr-3"}),e.jsx("span",{children:s.payment.method})]}),e.jsxs("div",{className:"flex items-center p-4 border-b border-gray-100",children:[e.jsx("img",{src:"/Passenger.svg",className:"w-6 h-6 text-blue-400 mr-3 ml-1"}),e.jsxs("span",{children:[s.passengers.count," Passenger"]})]}),e.jsxs("div",{className:"flex items-center p-4 border-b border-gray-100",children:[e.jsx("img",{src:"/Seat.svg",className:"w-6 h-6 text-blue-400 mr-3 ml-1"}),e.jsx("span",{children:s.passengers.seats})]}),e.jsxs("div",{className:"flex justify-between items-center p-4",children:[e.jsx("span",{className:"font-bold",children:"Total Payment"}),e.jsxs("span",{className:"font-bold",children:["Rp",s.payment.total.toLocaleString()]})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-100",children:[e.jsx("div",{className:"flex justify-between items-center mb-4",children:e.jsx("h3",{className:"font-medium",children:"TRAVEL ITINERARY"})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4",children:[e.jsx("div",{className:"text-sm text-gray-500 mb-2",children:"Departure"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold",children:s.journey.from.city}),e.jsx("div",{className:"text-sm text-gray-600",children:s.bus.name})]}),e.jsx("div",{className:"text-lg font-medium text-primary",children:s.journey.from.time.split(":").slice(0,2).join(":")})]})]}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 shadow-sm",children:[e.jsx("div",{className:"text-sm text-gray-500 mb-2 ",children:"Arrival"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold",children:s.journey.to.city}),e.jsx("div",{className:"text-sm text-gray-600",children:s.bus.name})]}),e.jsx("div",{className:"text-lg font-semibold text-primary",children:s.journey.to.time.split(":").slice(0,2).join(":")})]})]})]})]}),e.jsx("button",{className:"w-full bg-primary2 text-white py-4 rounded-lg font-medium",children:"Boarding Ticket"})]})]})})})};export{n as default};
