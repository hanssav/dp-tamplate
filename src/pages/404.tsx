import DashboardLayout from '../components/DashboardLayout';

const NotFoundPage = () => {
  return (
    <DashboardLayout>
      <div className="flex h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="mt-4 text-2xl font-semibold">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
        >
          Go Home
        </a>
      </div>
    </DashboardLayout>
  );
};

export default NotFoundPage;
