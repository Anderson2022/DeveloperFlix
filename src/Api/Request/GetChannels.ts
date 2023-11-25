import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../Config/firebaseConfig';
import axios from 'axios';

const COLLECTION_NAME = 'channels';

export async function GetChannels(searchTerm: string): Promise<void> {
  try {
    // Obter a data atual
    const currentDate = new Date();
    console.log(currentDate);

    if (currentDate) {
      console.log('Realizando nova consulta ao YouTube.');
      const apiKey = 'AIzaSyDViicTaQsHcADHx8KI1Vz5Xe70E2BZ8tI';

      const channelId = 'UCefqHZGWIr5I0Wm1KtC9SGQ';
      const temporaryData = [];

      // Fazer a chamada à API do YouTube e obter os dados.
      const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
        params: {
          part: 'snippet,contentDetails,statistics',
          key: apiKey,
          id: channelId,
        },
      });

      // Suponha que "response.data.items" contenha os dados do canal do YouTube.
      const channelData = response.data.items[0];
      console.log(channelData);

      // Adicione os dados ao array temporário
      temporaryData.push({
        title: channelData.snippet.title,
        description: channelData.snippet.description,
        Id: channelData.id,
        URL: channelData.snippet.thumbnails.default.url,
        // Outros campos que você desejar salvar.
      });

      // Criar uma instância do Firestore.
      // const db = getFirestore(app);

      // Iterar pelos dados temporários e salvá-los no Firestore (comentado por enquanto)
      // const promises = temporaryData.map(async (data) => {
      //   const docRef = await addDoc(collection(db, COLLECTION_NAME), data);
      //   console.log('Documento adicionado com ID:', docRef.id);
      // });

      // Salvar a data da última consulta (comentado por enquanto)
      // await setDoc(lastQueryDateRef, { date: currentDate.toDateString() });

      console.log('Dados do YouTube obtidos com sucesso.');
    } else {
      console.log('Não é necessário fazer uma nova consulta hoje.');
    }
  } catch (error) {
    console.error('Erro ao buscar ou salvar dados do YouTube:', error);
  }
}
