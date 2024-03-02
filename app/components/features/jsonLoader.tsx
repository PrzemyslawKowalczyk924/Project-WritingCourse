

/* export function loader() {
    return fetch('../../../db_Literature/Góra Wezwania JSON.json')
        .then(response => response.json())
        .then(data => {
            return { json: { data } };
        })
        .catch(error => {
            console.error('Błąd pobierania pliku JSON:', error);
            return { json: { error: 'Błąd pobierania pliku JSON' } };
        });
} */


export default function JsonViewer({ data, error }) {
  try {
    if(data) {
      //console.log(data[0].content);
      const paragraphs = data[0].content.split('\n');
      console.log(paragraphs)
      const contentElements = paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));

      return <div>{contentElements}</div>;
    }
    return <pre>{JSON.stringify(data, null, 2)}</pre> 
  } catch (error) {
    console.log("Błąd renderowania JASON:", error)
  }
  return <p>{error}</p>
}
