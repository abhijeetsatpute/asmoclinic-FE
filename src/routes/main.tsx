import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import TelegramButton from "../components/TelegramButton";
import { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";
import AdminDashboard from "../components/Pages/AdminDashboard";

export const HomePage = lazy(() => import("../components/Pages/Home"));
export const TeamPage = lazy(() => import("../components/Pages/Team"));
export const GalleryPage = lazy(() => import("../components/Pages/Gallery"));
export const LoginPage = lazy(() => import("../components/Pages/Login"));
export const ResultPage = lazy(() => import("../components/Pages/Result"));
export const AboutPage = lazy(() => import("../components/Pages/About"));
// export const Page404 = lazy(() => import('../components/Pages/PageNotFound'));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<></>}>
          <DefaultLayout>
            {/* Use the DefaultLayout for default route */}
            <Outlet />
          </DefaultLayout>
        </Suspense>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: "team", element: <TeamPage /> }, // Add route for TeamPage
        { path: "gallery", element: <GalleryPage /> }, // Add route for GalleryPage
        { path: "results", element: <ResultPage /> },
        { path: "gallery", element: <GalleryPage /> },
        { path: "about", element: <AboutPage /> },
      ],
    },
    {
      path: "admin",
      element: (
        <Suspense fallback={<></>}>
          <AdminDashboard>
            {/* Use the DefaultLayout for default route */}
            <Outlet />
          </AdminDashboard>
        </Suspense>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: "team", element: <TeamPage /> }, // Add route for TeamPage
        { path: "gallery", element: <GalleryPage /> }, // Add route for GalleryPage
        { path: "results", element: <ResultPage /> },
        { path: "gallery", element: <GalleryPage /> },
        { path: "about", element: <AboutPage /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    // {
    //   path: '404',
    //   element: <Page404 />,
    // },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}

// Default Layout for routes other than /admin
function DefaultLayout({ children }: any) {
  return (
    <div>
      <Toaster
        containerStyle={{
          bottom: 100,
        }}
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            // border: "1px solid #713200",
            padding: "16px",
            // color: "#713200",
            fontWeight: 600,
            height: "20%",
            width: "20%",
          },
        }}
      />
      <Loader />
      <NavigationBar />
      {children}
      <Footer />
      <TelegramButton />
    </div>
  );
}
