import { render, screen } from '@testing-library/react';
import { UserProfile } from '../InstagramPost/UserProfile';


describe('testing UserProfile component', () => {
  test('user profile', () => {
    render(<UserProfile />)
    
    expect(screen.getByAltText('Profile')).toBeInTheDocument()
    expect(screen.getByAltText('Profile')).toHaveAttribute('src', 'profile.png')

  })
})
