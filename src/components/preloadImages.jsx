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