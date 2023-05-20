import Layout from './components/Layout';
import './App.scss';
import Engine from '../engine/Engine';

export default function App() {
  new Engine();

  return (
    <Layout />
  );
}
