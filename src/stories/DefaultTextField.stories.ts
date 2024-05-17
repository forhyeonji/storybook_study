import type { Meta, StoryObj } from '@storybook/react';
import DefaultTextField from '../components/DefaultTextField';
import { fn } from '@storybook/test';
import deleteIcon from '../assets/icon/close.svg';

const meta = {
  title: 'TextFields/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: '텍스트 필드의 id',
      defaultValue: ''
    },
    iconPath: { control: 'text', description: '이미지의 경로' },
    iconAlt: { control: 'text', description: '이미지의 alt' },
    onIconClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    placeholder: {
      control: 'text',
      description: '텍스트의 placeholder',
      defaultValue: '텍스트를 입력해주세요.'
    },
    onChange: { action: 'changed', description: '텍스트 필드 값 변경 이벤트' },
    value: {
      control: 'text',
      description: '텍스트 필드의 값',
      defaultValue: ''
    },
    errorMessage: {
      control: 'text',
      description: '텍스트 필드의 에러메세지',
      defaultValue: ''
    },
    isError: {
      control: 'boolean',
      description: '에러 상태 여부',
      defaultValue: false
    }
  },
  args: { onIconClick: fn(), onChange: fn() }
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'email',
    iconAlt: 'icon',
    iconPath: deleteIcon,
    placeholder: '텍스트를 입력해주세요',
    value: '',
    errorMessage: '텍스트를 확인해주세요',
    isError: false,
    id: 'email'

    // 💖 public
    // iconPath: '/ic-public-delete-dark.svg'

    // 💖 assets
    // src 폴더 밑에 있는 svg 파일은 component 처럼 import 해와서 써야함
    // import deleteIcon from '../assets/icons/ic-asset-delete-dark.svg'
    // iconPath: deleteIcon
  }
};
