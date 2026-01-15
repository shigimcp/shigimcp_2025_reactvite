import React, { Suspense } from "react";

const cache = new Map();

function createResource(asyncFn) {
  // we start defining our resource is on a pending status
  let status = "pending";
  // and we create a variable to store the result
  let result;
  // then we immediately start running the `asyncFn` function
  // and we store the resulting promise
  const promise = asyncFn().then(
    (r) => {
      // once it's fulfilled we change the status to success
      // and we save the returned value as result
      status = "success";
      result = r;
    },
    (e) => {
      // once it's rejected we change the status to error
      // and we save the returned error as result
      status = "error";
      result = e;
    }
  );
  // lately we return an error object with the read method
  return {
    read() {
      // here we will check the status value
      switch (status) {
        case "pending":
          // if it's still pending we throw the promise
          // throwing a promise is how Suspense know our component is not ready
          throw promise;
        case "error":
          // if it's error we throw the error
          throw result;
        case "success":
          // if it's success we return the result
          return result;
      }
    },
  };
}

function loadResource(src, type) {
  let resource = cache.get(src);
  if (resource) return resource;
  resource = createResource(
    () =>
      new Promise((resolve, reject) => {
        if (type === "image") {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
          img.onerror = () => reject(new Error(`Failed to load image ${src}`));
        } else if (type === "video") {
          const video = document.createElement("video");
          video.src = src;
          video.onloadeddata = () => resolve(src);
          video.onerror = () =>
            reject(new Error(`Failed to load video ${src}`));
        } else if (type === "pdf") {
          // Simulate PDF fetch (e.g., via fetch API)
          fetch(src)
            .then((response) => response.blob())
            .then((blob) => resolve(URL.createObjectURL(blob)))
            .catch(() => reject(new Error(`Failed to load PDF ${src}`)));
        }
      })
  );
  cache.set(src, resource);
  return resource;
}

function ResourceComponent({ src, type }) {
  const loadedSrc = loadResource(src, type).read();

  if (type === "image") {
    return <img width="500px" src={loadedSrc} />;
  }

  if (type === "video") {
    return <video src={loadedSrc} controls />;
  }

  if (type === "pdf") {
    return <iframe src={loadedSrc} title="PDF viewer" />;
  }
}

// const App = () => (
const preloadImages = () => (
  <div>
    <Suspense fallback={<div>Loading image...</div>}>
      <ResourceComponent
        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
        type="image"
      />
    </Suspense>
    <Suspense fallback={<div>Loading video...</div>}>
      <ResourceComponent
        src="https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        type="video"
      />
    </Suspense>
    <Suspense fallback={<div>Loading PDF...</div>}>
      <ResourceComponent
        src="https://www.princexml.com/samples/icelandic/dictionary.pdf"
        type="pdf"
      />
    </Suspense>
  </div>
);

// export default App;
export default preloadImages;