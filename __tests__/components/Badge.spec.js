import React from 'react'
import Badge from 'components/Badge'

describe('Badge component', () => {
  it('should render without error', () => {
    const { getByTestId } = renderWithRedux(<Badge number={5} />)
    const badgeComponent = getByTestId('badge-component')
    expect(badgeComponent).toBeDefined()
  })

  it('should render correct number', () => {
    const { getByText } = renderWithRedux(<Badge number={5} />)
    const badgeText = getByText('5')
    expect(badgeText).not.toBeNull()
  })

  it('should not render when number is null', () => {
    const { queryByTestId } = renderWithRedux(<Badge />)
    const badgeComponent = queryByTestId('badge-component')
    expect(badgeComponent).toBeNull()
  })
})
