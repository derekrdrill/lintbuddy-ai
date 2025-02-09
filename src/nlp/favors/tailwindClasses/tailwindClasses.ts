import askFavor from '../../askFavor';

const tailwindClasses = async () => {
  const favor = 'Sort tailwind classes by breakpoint and alphabetically';
  const code = `
        import React from 'react';

        return <>
          <h1 className='z-1 lg:font-semibold hover:underline font-bold lg:p-8 mx-2 xl:p-6 p-4 h-12 absolute'>{data.title}</h1>
        </>;
    `;

  const newCode = await askFavor({ code, favor });
  console.log(newCode);
};

export default tailwindClasses;
