import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryClient } from './shared/ReactQuery/QueryClient';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './modules/auth/AuthContext'
import { ConfigProvider } from 'antd'
import App from './modules/app/App';
import { PalletteEnum } from './shared/pallete/PalleteEnum';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={ReactQueryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ConfigProvider theme={{ token: { colorPrimary: PalletteEnum.primary } }}>
            <App />
          </ConfigProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);