import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout.jsx';
import CreateTeam from './routes/CreateTeam.jsx';
import TeamGallery from './routes/TeamGallery.jsx';
import UpdateTeam from './routes/UpdateTeam.jsx';
import TeamDetails from './routes/TeamDetails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} path="/" element={<App />} />
          <Route index={false} path="/CreateTeam" element={<CreateTeam />} />
          <Route index={false} path="/TeamGallery" element={<TeamGallery />} />
          <Route index={false} path="/UpdateTeam/:index" element={<UpdateTeam />} />
          <Route index={false} path="/TeamDetails/:id" element={<TeamDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
