const busStops = {
    210: ["05:55","06:10","06:26","06:44","06:50","07:04","07:15","07:30","07:45","08:04","08:20","08:35","08:50","09:05","09:35","10:05","10:35","11:05","11:35","12:05","12:35","13:05","13:35","14:05", "14:35","15:05","15:35","15:50","16:05","16:50","17:35","18:05", "18:20"],
    222: ["05:55","06:10","06:26","06:44","06:50","07:04","07:15","07:30","07:45","08:04","08:20","08:35","08:50","09:05","09:35","10:05","10:35","11:05","11:35","12:05","12:35","13:05","13:35","14:05", "14:35","15:05","15:35","15:50","16:05","16:50","17:35","18:05", "18:20"],
    502: ["05:55","06:10","06:26","06:44","06:50","07:04","07:15","07:30","07:45","08:04","08:20","08:35","08:50","09:05","09:35","10:05","10:35","11:05","11:35","12:05","12:35","13:05","13:35","14:05", "14:35","15:05","15:35","15:50","16:05","16:50","17:35","18:05", "18:20"],
    201: ["05:55","06:10","06:26","06:44","06:50","07:04","07:15","07:30","07:45","08:04","08:20","08:35","08:50","09:05","09:35","10:05","10:35","11:05","11:35","12:05","12:35","13:05","13:35","14:05", "14:35","15:05","15:35","15:50","16:05","16:50","17:35","18:05", "18:20"],
    106: ["05:55","06:10","06:26","06:44","06:50","07:04","07:15","07:30","07:45","08:04","08:20","08:35","08:50","09:05","09:35","10:05","10:35","11:05","11:35","12:05","12:35","13:05","13:35","14:05", "14:35","15:05","15:35","15:50","16:05","16:50","17:35","18:05", "18:20"],
    308: ["05:55","06:10","06:26","06:44","06:50","07:04","07:15","07:30","07:45","08:04","08:20","08:35","08:50","09:05","09:35","10:05","10:35","11:05","11:35","12:05","12:35","13:05","13:35","14:05", "14:35","15:05","15:35","15:50","16:05","16:50","17:35","18:05", "18:20"],
    314: ["05:55","06:10","06:26","06:44","06:50","07:04","07:15","07:30","07:45","08:04","08:20","08:35","08:50","09:05","09:35","10:05","10:35","11:05","11:35","12:05","12:35","13:05","13:35","14:05", "14:35","15:05","15:35","15:50","16:05","16:50","17:35","18:05", "18:20"],
    209: ["05:55","06:10","06:26","06:44","06:50","07:04","07:15","07:30","07:45","08:04","08:20","08:35","08:50","09:05","09:35","10:05","10:35","11:05","11:35","12:05","12:35","13:05","13:35","14:05", "14:35","15:05","15:35","15:50","16:05","16:50","17:35","18:05", "18:20"],
  };
  
  const busStopSelect = document.getElementById("busStop");
  const checkScheduleButton = document.getElementById("checkSchedule");
  const scheduleInfoDiv = document.getElementById("scheduleInfo");
  
  checkScheduleButton.addEventListener("click", () => {
    const selectedStopp = busStopSelect.value;
    const schedules = busStops[selectedStopp];
  
    if (schedules) {
      scheduleInfoDiv.innerHTML = `<h2>Horários ${selectedStopp}:</h2>`;
      schedules.forEach(schedulebus => {
        scheduleInfoDiv.innerHTML += `<p>${schedulebus}</p>`;
      });
    } else {
      scheduleInfoDiv.innerHTML = "<p>Parada de ônibus inválida</p>";
    }
  });

  const busTravel = {
    210: ["Av.Docin","Av.Avenida","Av.Vinte"],
    222: ["Av.Docin","Av.Avenida","Av.Vinte"],
    502: ["Av.Docin","Av.Avenida","Av.Vinte"],
    201: ["Av.Docin","Av.Avenida","Av.Vinte"],
    106: ["Av.Docin","Av.Avenida","Av.Vinte"],
    308: ["Av.Docin","Av.Avenida","Av.Vinte"],
    314: ["Av.Docin","Av.Avenida","Av.Vinte"],
    209: ["Av.Docin","Av.Avenida","Av.Vinte"],
  };
  
  const busTravelSelect = document.getElementById("busTravel");
  const checkScheduleTravelButton = document.getElementById("checkScheduleTravel");
  const scheduleInfoTravelDiv = document.getElementById("scheduleInfoTravel");
  
  checkScheduleTravelButton.addEventListener("click", () => {
    const selectedStop = busTravelSelect.value;
    const schedules = busTravel[selectedStop];
  
    if (schedules) {
      scheduleInfoTravelDiv.innerHTML = `<h2>Rotas ${selectedStop}:</h2>`;
      schedules.forEach(schedule => {
        scheduleInfoTravelDiv.innerHTML += `<p>${schedule}</p>`;
      });
    } else {
      scheduleInfoTravelDiv.innerHTML = "<p>Parada de ônibus inválida</p>";
    }
  });
  
