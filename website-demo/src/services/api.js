const API_KEY = "AIzaSyBQW2FjT12iaW0LEw4Q9-WX_VHMM7j00sA"
const BASE_URL = "https://www.googleapis.com/calendar/v3/calendars/"
const calendarId = "uicwics@gmail.com"

// export type CalendarEvent = gapi.client.calendar.Event;
// export type CalendarEventDateTime = gapi.client.calendar.EventDateTime;
// export type CalendarEventsResponse = gapi.client.calendar.Events;


export const getEvent = async () => {
    const response = await fetch("${BASE_URL}${calendarId}/events?key=${API_KEY}") // sends network request 
    const data = await response.json() // async operaiton 
    return data.results
};


export const searchEvent = async (query) => {
    const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/uicwics@gmail.com/events?key=${API_KEY}') // sends network request 
    const data = await response.json() // async operaiton 
    return data.results
};
