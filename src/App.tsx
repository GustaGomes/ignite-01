import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'


export function App() {
  return (
    <>
      <h1>Subindo Git </h1>
      <Header />
      <TaskList />
    </>
  )
}