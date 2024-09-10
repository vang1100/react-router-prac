import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from "../About/About.jsx";

function App() {
    return (
        <div className="App">
            <header>
                <h1>GitHub Student List</h1>
                {/* Nice spot for a nav, eh? */}
            </header>
            <StudentForm />
            <StudentList />
            
            <nav>
                <Router>
                    <Link to="/">Main</Link> < br/>
                    <Link to="/Home">Home</Link> < br/>
                    <Link to="/About">About</Link> < br/>
                    <Link to="/Students">Students</Link> < br/>
                   
                   
                    <Route path="/Home">
                        <StudentForm/>
                    </Route>
                   
                    <Route path="/About">
                        <About />
                    </Route>
                    
                    <Route path="/Students">
                        <StudentList />
                    </Route>

                </Router>
            </nav>
        </div>
    );
}


export default App;
