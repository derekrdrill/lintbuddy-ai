const parseOpenAIData = ({ data }: { data: string }) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to parse structured rule:', error);
    return null;
  }
};

export default parseOpenAIData;
