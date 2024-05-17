import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '../components/IconButton';
import { fn } from '@storybook/test';
import deleteIcon from '../assets/icon/close.svg';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    alt: {
      control: 'text',
      description: '이미지의 alt 속성',
      defaultValue: ''
    },
    iconPath: { control: 'text', description: '이미지의 경로' },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'icon',
    iconPath: deleteIcon

    // 💖 public
    // iconPath: '/ic-public-delete-dark.svg'

    // 💖 assets
    // src 폴더 밑에 있는 svg 파일은 component 처럼 import 해와서 써야함
    // import deleteIcon from '../assets/icons/ic-asset-delete-dark.svg'
    // iconPath: deleteIcon
  }
};
