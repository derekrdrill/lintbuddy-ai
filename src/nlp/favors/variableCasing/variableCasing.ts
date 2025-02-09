import askFavor from '../../askFavor';

const variableCasing = async () => {
  const favor = 'Ensure all variables are camel case and constants are snake case';

  const code = `
    const myConstantVariable = 10;
    const mappedData = data.map((item) => item);
    let my_variable = 10;
    let ANOTHER_VARIABLE = 20;
    let SomeVariable = 30;
  `;

  const newCode = await askFavor({ code, favor });
  console.log(newCode);
};

export default variableCasing;
