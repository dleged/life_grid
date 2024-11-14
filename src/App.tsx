import './App.css'
import Calendar from './components/Calendar';
// import usePromise from './hooks/use-promise';

// await db.execute('INSERT INTO ...');


function App() {
  // const data = usePromise(dailyPlanDb.updateData());

  return (
    <div className="App">
      {/* {data} */}
      {/* <h1 className="text-center text-2xl font-bold my-4">人生 900 宫格</h1> */}
      <Calendar></Calendar>
    </div>
  );
}

export default App;
