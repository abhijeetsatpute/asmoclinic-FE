import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import TelegramButton from "../components/TelegramButton";
import Loader from "../components/Loader";
import AdminDashboard from "../components/Pages/AdminDashboard";
import DoctorAdd from "../components/Doctor/DoctorAdd";
import AllDoctors from "../components/Doctor/AllDoctors";
import DeleteDoctor from "../components/Doctor/DeleteDoctor";
import AllResults from "../components/Results/AllResults";
import AddResult from "../components/Results/AddResult";
import DeleteResult from "../components/Results/DeleteResult";
import DoctorDetail from "../components/Doctor/DoctorDetail";

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
        { path: "team/:id", element: <DoctorDetail /> }, // Add route for TeamPage
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
        // { element: <Overview />, index: true },
        { path: "doctors/add", element: <DoctorAdd /> }, // Add route for TeamPage
        { path: "doctors/all", element: <AllDoctors /> }, // Add route for TeamPage
        { path: "doctors/delete", element: <DeleteDoctor /> }, // Add route for TeamPage
        // { path: "blog", element: <BlogView /> }, // Add route for GalleryPage
        { path: "results/all", element: <AllResults /> },
        { path: "results/add", element: <AddResult /> },
        { path: "results/delete", element: <DeleteResult /> },
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
      <Loader />
      <NavigationBar />
      {children}
      <Footer />
      <TelegramButton />
    </div>
  );
}
