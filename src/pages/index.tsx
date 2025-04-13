import { HiMenu } from 'react-icons/hi';
import Button from '../components/Button';
import Col from '../components/Col';
import DashboardLayout from '../components/DashboardLayout';

const Home = () => {
  const imageItems = [
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
          alt=""
        />
      ),
    },
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
          alt=""
        />
      ),
    },
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
          alt=""
        />
      ),
    },
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
          alt=""
        />
      ),
    },
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
          alt=""
        />
      ),
    },
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
          alt=""
        />
      ),
    },
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
          alt=""
        />
      ),
    },
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
          alt=""
        />
      ),
    },
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
          alt=""
        />
      ),
    },
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
          alt=""
        />
      ),
    },
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
          alt=""
        />
      ),
    },
    {
      content: (
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
          alt=""
        />
      ),
    },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      <p className="my-4">This is the main content of the dashboard.</p>

      <div className="flex gap-x-4">
        <Button color="primary" onClick={() => {}}>
          Primary Button
        </Button>

        <Button color="secondary" onClick={() => {}}>
          Secondary Button
        </Button>

        <Button color="light" onClick={() => {}} rounded={true}>
          <HiMenu size={20} />
        </Button>
      </div>

      <Col col="col-6" className="my-5">
        <div className="flex items-center justify-center bg-orange-400 px-2">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
        <div className="flex items-center justify-center bg-yellow-200">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
        <div className="flex items-center justify-center bg-orange-400 px-2">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
        <div className="flex items-center justify-center bg-yellow-200">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
        <div className="flex items-center justify-center bg-yellow-200">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
        <div className="flex items-center justify-center bg-yellow-200">
          <p className="p-2 text-sm">
            Column spanning will change on <code>md</code>
          </p>
        </div>
      </Col>

      {/* Gunakan Col dengan layout masonry */}
      <Col col="masonry-4" items={imageItems} />
    </DashboardLayout>
  );
};

export default Home;
