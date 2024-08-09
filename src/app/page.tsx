import React from 'react';
import Login from '../components/Login';
import Onebox from '../components/Onebox';
import Reply from '../components/Reply';
import TextEditor from '../components/TextEditor';

const Page = () => {
  return (
    <div>
      <Login />
      <Onebox />
      <Reply />
      <TextEditor />
    </div>
  );
};

export default Page;
