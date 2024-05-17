import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from '../components/PrimaryButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    )
  ],
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['dark', 'light', 'social', 'text']
      },
      description: '버튼 테마',
      defaultValue: 'dark'
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
      defaultValue: false
    },
    children: {
      control: 'text',
      description: '버튼 text',
      defaultValue: ''
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    theme: 'dark',
    children: 'Button',
    disabled: false
  }
};

export const Light: Story = {
  args: {
    theme: 'light',
    children: 'Button',
    disabled: false
  }
};

export const Social: Story = {
  args: {
    theme: 'social',
    children: 'Button',
    disabled: false
  }
};

export const Text: Story = {
  args: {
    theme: 'text',
    children: 'Button',
    disabled: false
  }
};

export const Disalbed: Story = {
  args: {
    theme: 'dark',
    children: 'Button',
    disabled: true
  }
};
