import { render, screen, fireEvent } from '@testing-library/react';
import { StopWatch } from './UseRef';

describe('testing StopWatch component', () => {
  test('render stop watch', () => {
    render(<StopWatch/>)
    const startButton = screen.getByText('Start')
    const stopButton = screen.getByText('Stop')
    const time = parseFloat(screen.getByText(/(\d+\.)/).textContent)

    fireEvent.click(startButton)
  
    expect(time).toBeCloseTo(0,2)

    fireEvent.click(stopButton)

    expect(time).toBeCloseTo(0,1)
  })
})

