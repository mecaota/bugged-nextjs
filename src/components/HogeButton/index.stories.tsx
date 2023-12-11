import type { Meta, StoryObj } from '@storybook/react';
import { HogeButton } from '.';
type Story = StoryObj<typeof HogeButton>;

export default {
  component: HogeButton,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof HogeButton>;

export const Default: Story = {};
