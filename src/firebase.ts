import { getFirestore, collection, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { app } from './firebaseConfig';
import axios from 'axios';

const COLLECTION_NAME = 'videos';

export async function fetchAndSaveYouTubeDataDaily(searchTerm: string, apiKey: string): Promise<void> {
  try {
    // Criar uma referência para a data da última consulta
    const lastQueryDateRef = doc(getFirestore(app), COLLECTION_NAME, 'lastQueryDate');
    const lastQueryDateDoc = await getDoc(lastQueryDateRef);

    // Obter a data atual
    const currentDate = new Date();
    console.log(currentDate);

    if (!lastQueryDateDoc.exists() || currentDate.toDateString() !== lastQueryDateDoc.data().date) {
      console.log('Realizando nova consulta ao YouTube.');

      // Fazer a chamada à API do YouTube e obter os dados.
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: searchTerm,
          type: 'video',
          key: apiKey,
          maxResults: 30,
        },
      });

      // Suponha que "response.data.items" contenha os dados dos vídeos do YouTube.
      const videos = response.data.items;
      

      // Criar uma instância do Firestore.
      const db = getFirestore(app);

      // Iterar pelos vídeos e salvá-los no Firestore.
      const promises = videos.map(async (video: { snippet: { title: any; description: any; thumbnails: { default: { url: any; }; }; }; id: { videoId: any; }; }) => {
        const videoData = {
          title: video.snippet.title,
          description: video.snippet.description,
          videoId: video.id.videoId,
          URL: video.snippet.thumbnails.default.url,
          // Outros campos que você desejar salvar.
        };

        const docRef = await addDoc(collection(db, COLLECTION_NAME), videoData);
      });

      // Salvar a data da última consulta
      await setDoc(lastQueryDateRef, { date: currentDate.toDateString() });

      console.log('Dados do YouTube atualizados com sucesso no Firestore.');
    } else {
      console.log('Não é necessário fazer uma nova consulta hoje.');
    }
  } catch (error) {
    console.error('Erro ao buscar ou salvar dados do YouTube:', error);
  }
}

