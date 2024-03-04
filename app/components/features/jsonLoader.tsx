interface JsonViewerProps {
  data: Record<string, any>[] | null;
  error: string | null;
}

const JsonViewer: React.FC<JsonViewerProps> = ({ data, error }) => {
  try {
    if (data) {

      console.log('data[0].date', data[0]);
      const paragraphs = data[0].content
        .split('\n')
        .map((paragraph: string, index: number) => {
          const startsWithDigit = /^\d/.test(paragraph);
          const paragraphStyle = startsWithDigit ? 'text-center' : 'text-justify';
          return (
            <div className={paragraphStyle} key={index}>
              <span className="ml-10">{paragraph}</span>
            </div>
          );
        });

      return (
        <article className="p-10 max-h-screen overflow-y-scroll">
          <h3 className="text-2xl mb-10">{data[0].author}</h3>
          <h1 className="text-4xl mb-10">{data[0].title}</h1>
          {paragraphs}
          <h4 className="mt-10 font-light">{data[0].date}</h4>
        </article>
      );
    }
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  } catch (error) {
    console.log("Błąd renderowania JSON:", error);
    return <p>{error as React.ReactNode}</p>;
  }
}

export default JsonViewer;
