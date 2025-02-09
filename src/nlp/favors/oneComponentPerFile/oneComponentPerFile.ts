import askFavor from '../../askFavor';

const oneComponentPerFile = async () => {
  const favor =
    'There should only be 1 JSX component per file. If there are multiple, please separate them into their own files.';

  const code = `
    import React from 'react';

    const Child = () => {
      return <div>Component1</div>;
    };

    const Parent = () => {
      return <div>Component2</div>;
    };

    export default Parent;
  `;

  const newCode = await askFavor({ code, favor });
  console.log(newCode);
};

export default oneComponentPerFile;
