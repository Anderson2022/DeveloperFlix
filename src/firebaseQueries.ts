import { getFirestore, collection, getDocs, type DocumentData } from 'firebase/firestore';
import { app } from './firebaseConfig';


export async function getVideosCollection() {
  const db = getFirestore(app);
  const videosCollection = collection(db, 'videos');

  try {
    const querySnapshot = await getDocs(videosCollection);
    const videos: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      videos.push(doc.data());
    });
    return videos;
  } catch (error) {
    console.error('Erro ao consultar a coleção de vídeos:', error);
    throw error;
  }
}
