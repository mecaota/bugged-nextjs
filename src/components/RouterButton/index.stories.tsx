import type { Meta, StoryObj } from '@storybook/react';
import { RouterButton } from '.';

type Story = StoryObj<typeof RouterButton>;

export default {
  component: RouterButton,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof RouterButton>;

export const Default: Story = {};
