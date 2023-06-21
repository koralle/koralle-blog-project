import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '../../app/_components/Header';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Header />,
};
