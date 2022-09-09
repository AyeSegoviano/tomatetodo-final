import { getDocs, collection, query, where } from "firebase/firestore";
import { database } from ".";

export const getDrinks = (categoryId) => {
    const collectionRef = !categoryId
      ? collection(database, "cocktails")
      : query(
          collection(database, "cocktails"),
          where("category", "==", categoryId)
        );

    return getDocs(collectionRef)
      .then((response) => {
        console.log(response);
        const cocktailsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        return cocktailsAdapted;
      })
      .catch((error) => {
        return error;
      });
};

