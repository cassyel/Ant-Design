import { Route, Routes, } from 'react-router-dom';

import {
  Customers,
  Dashboard,
  Inventory,
} from '../../pages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/inventario' element={<Inventory />}></Route>
      <Route path='/clientes' element={<Customers />}></Route>
    </Routes>
  );
}
