import { NextPage } from 'next'
import Head from 'next/head'
import { PhoneIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Varsha Enterprise</title>
        <meta name="description" content="Contact Varsha Enterprise for appliance repair services" />
      </Head>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Get in touch with us for quick and reliable appliance repair services
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <PhoneIcon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                Phone
              </dt>
              <dd className="inline">
                <a href="tel:9414456385" className="ml-2 text-blue-600 hover:text-blue-500">
                  +91 94144 56385
                </a>
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg className="absolute left-1 top-1 h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828z" clipRule="evenodd" />
                </svg>
                WhatsApp
              </dt>
              <dd className="inline">
                <a href="https://wa.me/919352214113" target="_blank" rel="noopener noreferrer" className="ml-2 text-green-600 hover:text-green-500">
                  +91 93522 14113
                </a>
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <ClipboardDocumentListIcon className="absolute left-1 top-1 h-5 w-5 text-red-600" aria-hidden="true" />
                Register Complaint
              </dt>
              <dd className="inline">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfYqjvF4Z7blgcO9CQMp4--PS50D7Aga-uXC_WZOblbXfMkfQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-red-600 hover:text-red-500"
                >
                  Online Form
                </a>
              </dd>
            </div>
          </div>

          <div className="mt-16 rounded-lg bg-gray-50 py-10 sm:py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Quick Response Time</h2>
              <p className="mt-4 text-lg leading-6 text-gray-600">
                We aim to respond to all service requests within 2-4 hours during business hours. For urgent repairs, please call us directly.
              </p>
              <div className="mt-8 flex justify-center gap-x-4">
                <a
                  href="tel:9414456385"
                  className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919352214113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.828z" clipRule="evenodd" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact 