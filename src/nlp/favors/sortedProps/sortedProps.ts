import askFavor from '../../askFavor';

const sortedProps = async () => {
  const favor = 'Alphabetize ALL prop instantiations';
  const code = `
        import React from 'react';

        type Props = {
            title: string;
            description: string;
            isActive?: boolean;
            isDisabled?: boolean;
            maxChars?: number;
            hasError?: boolean;
        }

        const Component = ({ title, description, isActive, isDisabled, maxChars, hasError }: Props) => {
            return (
                <>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </>
            )
        }
    `;

  const newCode = await askFavor({ code, favor });
  console.log(newCode);
};

export default sortedProps;
