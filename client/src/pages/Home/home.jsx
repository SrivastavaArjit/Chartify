import "./styles.css";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="wrapper">
          <div className="home-header">
            <h1 className="heading">Chartify: Visualize Your Data</h1>
            <p className="intro">
              Welcome to Chartify a data visualization website powered by{" "}
              <span>Chart.js!</span> This platform is designed to help you
              easily visualize JSON data using intuitive charts and graphs. This
              website was designed to provide you with the flexibility to
              explore and interpret your data in a meaningful way.
            </p>
          </div>
          <div className="home-body">
            <h2>Feature List</h2>
            <ul className="features-list">
              <li>
                <h3>Interactive Charts</h3>
                <p>
                  This Website offers a variety of chart types, including bar
                  charts, line charts, line charts, pie charts, and more.
                </p>
              </li>
              <li>
                <h3>Real-time Updates</h3>
                <p>
                  Stay up-to-date with the latest changes in your dataset with a
                  just a refresh.
                </p>
              </li>
              <li>
                <h3>Interactive Charts</h3>
                <p>
                  Hover over the charts to enable basic interactivity, such as
                  tooltips to display data values.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
