import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-xl mx-auto">
            <App />
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </AuthProvider>
  </>
);
