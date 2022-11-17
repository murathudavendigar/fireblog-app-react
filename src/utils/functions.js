import myFirebaseApp from "../auth/firebase";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ADD BLOG

export const addBlog = (infoBlog) => {
  const db = getDatabase(myFirebaseApp);

  const blogRef = ref(db, "blogs/");
  const newBlogRef = push(blogRef);

  set(newBlogRef, {
    title: infoBlog.title,
    imageURL: infoBlog.imageURL,
    content: infoBlog.content,
    author: infoBlog.author,
  });
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! GET BLOG

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogList, setBlogList] = useState();
  useEffect(() => {
    const db = getDatabase(myFirebaseApp);
    const userRef = ref(db, "blogs/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const blogArray = [];

      for (let id in data) {
        blogArray.push({ id, ...data[id] });
      }
      setBlogList(blogArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, blogList };
};
