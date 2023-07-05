// utils.js
import { db } from '../../firebase';

export async function getServerSideProps() {
  // Fetch the programs data from your database or API
  const snapshot = await db.collection('programs').get();
  const programsArray = snapshot.docs.map((doc) => ({
    ID: doc.id,
    ...doc.data(),
  }));

  // Pass the programs data as props to the component
  return {
    props: {
      programs: programsArray,
    },
  };
}
