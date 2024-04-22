import { useState } from 'react';
import './App.css';
import Label from './components/Label';
import DefaultTextField from './components/DefaultTextField';
import deleteIcon from './assets/icon/black_x_icon.svg';

function App() {
  const [isError, setIsError] = useState(false);
  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id="email"
        placeholder="이메일을 입력하세요."
        value=""
        errorMessage="이메일을 확인해주세요."
        isError={isError}
        iconPath={deleteIcon}
        iconAlt="delete"
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <div className="my-20" />
      <Label htmlFor="address">주소</Label>
      <DefaultTextField
        id="address"
        placeholder="주소를 입력하세요."
        value=""
        errorMessage="주소를 확인해주세요."
        isError={isError}
        iconPath={deleteIcon}
        iconAlt="delete"
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <button onClick={() => setIsError((prev) => !prev)}>에러 토글</button>
    </>
  );
}

export default App;
