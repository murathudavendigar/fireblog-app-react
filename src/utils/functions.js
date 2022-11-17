import myFirebaseApp from "../auth/firebase";
import { getDatabase, push, ref, set } from "firebase/database";

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
