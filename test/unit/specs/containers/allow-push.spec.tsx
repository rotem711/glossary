/**
 * @jest-environment jsdom
 */
import React from 'react'

import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'

import AllowPush from '@/containers/AllowPush'

const requestPermission = jest.fn()

jest.mock('@/sw/fcm', () => ({
  requestPermission: (): jest.Mock => requestPermission,
  isPermission: (): string => 'default'
}))

let wrapper: RenderResult
beforeEach(() => {
  wrapper = render(<AllowPush />)
})
afterEach(cleanup)

test('Click `allow-push-ok` will call `requestPermission` and close snack bar', () => {
  expect(wrapper.container.querySelector('div')).not.toBeNull()

  fireEvent.click(wrapper.getByTestId('allow-push-ok'))

  setTimeout(() => {
    expect(requestPermission).toBeCalled()
    expect(wrapper.container.querySelector('div')).toBeNull()
  }, 1000)
})

test('Click `allow-push-close` will close snack bar', () => {
  expect(wrapper.container.querySelector('div')).not.toBeNull()

  fireEvent.click(wrapper.getByTestId('allow-push-close'))

  setTimeout(() => {
    expect(requestPermission).not.toBeCalled()
    expect(wrapper.container.querySelector('div')).toBeNull()
  }, 1000)
})

test('Match the snapshot', () => {
  expect(wrapper.asFragment()).toMatchSnapshot()
})
