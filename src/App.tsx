import * as React from 'react';

import { useAppDispatch, useAppSelector } from "./redux/app/hooks"
import { dataAsync, selectData } from "./redux/counter/dataSlice"

export interface DataItem {
  id: number;
  title: string

}

const { useEffect } = React
function App() {
  const { data, loading } = useAppSelector(selectData);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(dataAsync())
  }, [dispatch])

  if (loading) {
    return <h1>loading...</h1>
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          data.map(item => {
            const { id, title } = item as DataItem
            return (
              <h4 key={id}>{title}</h4>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
