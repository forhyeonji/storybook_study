import type { Meta, StoryObj } from '@storybook/react';
import Label from '../components/Label';

const meta = {
  title: 'Text/Label',
  component: Label,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { controls: 'text', description: 'label의 for 속성' },
    children: { controls: 'text', description: 'label의 내용' }
  }
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: 'username',
    children: '유저이름'
  }
};