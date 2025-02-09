import askFavor from '../../askFavor';

const unusedImports = async () => {
  const favor = 'Remove unused imports';
  const code = `
        import { ChatOpenAI } from '@langchain/openai';
        import parseOpenAIData from './parseOpenAIData';

        const model = new ChatOpenAI({ test });

        const [data, setData] = useState(null);

        useEffect(() => {
          setData(model.data);
        }, [model]);

        return <>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </>;
    `;

  const newCode = await askFavor({ code, favor });
  console.log(newCode);
};

export default unusedImports;
