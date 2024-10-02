import Layout from './components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Welcome to PMSSS</h1>
      <p className="mb-4">This is the digital system for managing the Prime Minister's Special Scholarship Scheme.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">For Students</h2>
          <p className="mb-2">Submit your scholarship application and track its status.</p>
          <Link href="/student/apply" className="text-blue-600 hover:underline">Apply Now</Link>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">For Administrators</h2>
          <p className="mb-2">Manage and review scholarship applications.</p>
          <Link href="/admin/dashboard" className="text-green-600 hover:underline">Admin Dashboard</Link>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">For SAG Members</h2>
          <p className="mb-2">Verify documents and process applications.</p>
          <Link href="/sag/dashboard" className="text-yellow-600 hover:underline">SAG Dashboard</Link>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">For Finance Team</h2>
          <p className="mb-2">Process payments and manage financial aspects.</p>
          <Link href="/finance/dashboard" className="text-purple-600 hover:underline">Finance Dashboard</Link>
        </div>
      </div>
    </Layout>
  );
}