import{j as e}from"./app-2DLxi_6_.js";import{F as r}from"./ChevronLeftIcon-C7XJILlr.js";import{f as i}from"./format-BzRktsyD.js";const d=({log:t})=>{const s={date:t.departure_date,bookingCode:t.trip.booking.booking_code,bus:{name:"Shuttle Bus Tripin",plateNumber:t.trip.schedule.vehicle.license_plate},payment:{method:"Dana",total:new Intl.NumberFormat("id-ID").format(t.trip.booking.price)},passengers:{count:t.trip.booking.seat_total,seats:`Seat ${t.trip.booking.seat_number.join(", ")}`},journey:{duration:"2 h 45 m",from:{city:t.trip.origin,time:t.trip.schedule.departure_time},to:{city:t.trip.schedule.location.name,time:t.trip.schedule.arrival_time}}};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"lg:flex lg:justify-center",children:e.jsxs("div",{className:"flex min-h-screen flex-col bg-primary lg:w-[400px]",children:[e.jsxs("div",{className:"relative flex items-center p-7 text-white",children:[e.jsx(r,{className:"absolute left-3 top-1/2 size-6 -translate-y-1/2 cursor-pointer",onClick:()=>history.back()}),e.jsx("span",{className:"flex-1 text-center text-xl font-medium",children:i(new Date(s.date),"dd MMM yyyy")})]}),e.jsxs("div",{className:"flex-1 rounded-t-xl bg-white px-6 py-12",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between px-1",children:[e.jsx("span",{className:"font-medium text-black",children:"Booking Code :"}),e.jsx("span",{className:"font-semibold text-primary2",children:s.bookingCode})]}),e.jsxs("div",{className:"mb-6 flex items-center gap-4 rounded-lg border bg-white p-4 shadow-md",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:"/shuttle_icon.svg",className:"size-10 text-white"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:s.bus.name}),e.jsx("p",{className:"text-sm text-gray-600",children:s.bus.plateNumber})]})]}),e.jsx("h3",{className:"mb-2 p-1 font-medium",children:"Order Detail"}),e.jsxs("div",{className:"mb-6 rounded-md border-2 bg-white shadow-md",children:[e.jsxs("div",{className:"flex items-center border-b border-gray-100 p-4",children:[e.jsx("img",{src:"/gopay_icon.svg",className:"mr-3 h-7"}),e.jsx("span",{children:s.payment.method})]}),e.jsxs("div",{className:"flex items-center border-b border-gray-100 p-4",children:[e.jsx("img",{src:"/Passenger.svg",className:"ml-1 mr-3 h-6 w-6 text-blue-400"}),e.jsxs("span",{children:[s.passengers.count," Passenger"]})]}),e.jsxs("div",{className:"flex items-center border-b border-gray-100 p-4",children:[e.jsx("img",{src:"/Seat.svg",className:"ml-1 mr-3 h-6 w-6 text-blue-400"}),e.jsx("span",{children:s.passengers.seats})]}),e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsx("span",{className:"font-bold",children:"Total Payment"}),e.jsxs("span",{className:"font-bold",children:["Rp",s.payment.total.toLocaleString()]})]})]}),e.jsxs("div",{className:"mb-6 rounded-lg border-2 bg-white p-6 shadow-md",children:[e.jsx("div",{className:"mb-4 flex items-center justify-between",children:e.jsx("h3",{className:"font-medium",children:"TRAVEL ITINERARY"})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"rounded-lg border-2 bg-gray-50 p-4",children:[e.jsx("div",{className:"mb-2 border-b text-sm text-gray-500",children:"Departure"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold",children:s.journey.from.city}),e.jsx("div",{className:"text-sm text-gray-600",children:s.bus.name})]}),e.jsx("div",{className:"text-lg font-medium text-primary",children:s.journey.from.time.split(":").slice(0,2).join(":")})]})]}),e.jsxs("div",{className:"rounded-lg border-2 bg-gray-50 p-4 shadow-sm",children:[e.jsx("div",{className:"mb-2 border-b text-sm text-gray-500",children:"Arrival"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-semibold",children:s.journey.to.city}),e.jsx("div",{className:"text-sm text-gray-600",children:s.bus.name})]}),e.jsx("div",{className:"text-xl font-semibold text-primary2",children:s.journey.to.time.split(":").slice(0,2).join(":")})]})]})]})]})]})]})})})};export{d as default};
