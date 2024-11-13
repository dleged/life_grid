import './App.css'
import LifeGrid from './components/LifeGrid';
import dailyPlanDb from './db/dailyPlan';
// import usePromise from './hooks/use-promise';

// await db.execute('INSERT INTO ...');

dailyPlanDb.updateData().then(console.log)

function App() {
  // const data = usePromise(dailyPlanDb.updateData());

  return (
    <div className="App">
      {/* {data} */}
      <h1 className="text-center text-2xl font-bold my-4">人生 900 宫格</h1>
      <LifeGrid />
    </div>
  );
}

export default App;
