interface LoaderProps {}

const Loader = (props: LoaderProps) => (
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

export default Loader;
