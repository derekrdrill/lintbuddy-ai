import askFavor from '../../askFavor';

const classNamesToStyledComponents = async () => {
  const favor =
    'Convert classNames implementation to styled-components with twin macro (styled object format)';
  const code = `
        import classNames from 'classnames';

        const [isActive, setIsActive] = useState(false);

        return <h1 className={classNames({ 
            'font-bold text-2xl': isActive 
            'font-normal text-lg': !isActive
        })}>
            {data.title}
        </h1>
    `;

  const newCode = await askFavor({ code, favor });
  console.log(newCode);
};

export default classNamesToStyledComponents;
