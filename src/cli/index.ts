import { Command } from 'commander';
import askFavor from '../nlp/askFavor';

const program = new Command();

program
  .version('1.0.0')
  .description('AI-Powered Linting Tool')
  .requiredOption('--favor <favor>', 'Linting rule in plain English')
  .requiredOption('--code <code>', 'Code to lint')
  .option('--remember <remember>', 'Print additional logs')
  .action(async (options) => {
    try {
      const { favor, code, remember } = options;
      const finalCode = await askFavor({ favor, code });
      console.log('Final Accepted Code:\n', finalCode);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });

program.parse(process.argv);
