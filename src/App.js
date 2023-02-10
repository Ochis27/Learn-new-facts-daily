import "./styles.css";

function App(){
        return  (<header className="header">
                    <div className="logo">
                       <img src="logo.png" alt="Today I Learned Logo" width="68px" height="68px"/>
                       <h1>Today I Learned!</h1>
                    </div>
                  <button className="btn btn-large btn-open">Share a fact</button>
                </header>);
}


export default App;