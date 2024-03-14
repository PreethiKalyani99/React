import { render, screen } from '@testing-library/react';
import { SingleDayForecast } from './WeatherApp/SingleDayForecast';

describe('tesing SingleDayForecast Component', () => {
  test('Thursday weather', () => {
    const weatherData = {
      dt_txt: '2024-03-14 09:00:00',
      main: { temp: 282.38 },
      weather: [{ description: 'light rain' }],
    }
    render(<SingleDayForecast weatherData={weatherData}/>)
    expect(screen.getByText('Thursday')).toBeInTheDocument()
    expect(screen.getByText('March 14th, 9:00AM')).toBeInTheDocument()
  }),
  test('Friday weather', () => {
    const weatherData = {
      dt_txt: '2024-03-15 09:00:00',
      main: { temp: 282.38 },
      weather: [{ description: 'light rain' }],
    }
    render(<SingleDayForecast weatherData={weatherData}/>)
    expect(screen.getByText('Friday')).toBeInTheDocument()
    expect(screen.getByText('March 15th, 9:00AM')).toBeInTheDocument()
  })
})