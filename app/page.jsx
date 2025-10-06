export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          AI Automation Pro - Your Professional Automation Partner
        </h1>
        
        <p className="text-2xl mb-8 text-gray-700">
          Hire us for AI-driven tasks and intelligent automation services
        </p>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-12 shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-700 mb-6">
            We specialize in delivering cutting-edge AI automation solutions tailored to your business needs.
            From workflow automation to intelligent data processing, we transform your operations with AI-powered efficiency.
          </p>
          <ul className="text-left text-lg text-gray-700 space-y-3 max-w-2xl mx-auto">
            <li>✓ Custom AI automation solutions</li>
            <li>✓ Workflow optimization and integration</li>
            <li>✓ Intelligent data processing and analysis</li>
            <li>✓ Process automation consulting</li>
            <li>✓ AI-powered business solutions</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-4">
            Ready to automate your business with AI? Contact us to discuss your project.
          </p>
          <p className="text-xl font-semibold text-blue-600">
            <a href="mailto:contact@ai-automation-pro.com" className="hover:underline">
              contact@ai-automation-pro.com
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
