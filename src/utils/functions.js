import myFirebaseApp from "../auth/firebase";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import { toastSuccessNotify, toastWarnNotify } from "../helpers/toastNotify";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ADD BLOG

export const addBlog = (infoBlog, navigate) => {
  const db = getDatabase(myFirebaseApp);

  const blogRef = ref(db, "blogs/");
  const newBlogRef = push(blogRef);

  set(newBlogRef, {
    title: infoBlog.title,
    imageURL: infoBlog.imageURL,
    content: infoBlog.content,
    author: infoBlog.author,
    date: infoBlog.date,
  });

  toastSuccessNotify("Your blog added !!");
  navigate("/");
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

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! GET BLOG BY ID

export const useFetchById = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogList, setBlogList] = useState();
  useEffect(() => {
    const db = getDatabase(myFirebaseApp);
    const userRef = ref(db, `blogs/${id}`);

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();

      setBlogList(data);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, blogList };
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! DELETE BLOG

export const deleteBlog = (id, navigate) => {
  const db = getDatabase(myFirebaseApp);

  remove(ref(db, "blogs/" + id));
  toastWarnNotify("Your blog has been deleted !!");
  navigate("/");
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!! UPDATE BLOG

export const updateBlog = (info, id) => {
  const db = getDatabase(myFirebaseApp);

  const updates = {};
  updates[`blogs/${id}`] = info;

  return update(ref(db), updates);
};
