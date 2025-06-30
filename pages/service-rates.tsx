import { NextPage } from 'next'
import Head from 'next/head'

const ServiceRates: NextPage = () => {
  const services = [
    'AC Repair',
    'LED/LCD TV Repair',
    'Smart TV Repair',
    'Microwave Repair',
    'Washing Machine Repair',
    'Refrigerator Repair',
    'Water Purifier Repair',
    'Dishwasher Repair',
    'Other Appliances'
  ]

  return (
    <>
      <Head>
        <title>Service Rates - Varsha Enterprise</title>
        <meta name="description" content="Service rates for appliance repairs at Varsha Enterprise" />
      </Head>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Service Rates</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Flat service charge of ₹350 for all appliance repairs
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Service Coverage</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Our standard service charge covers basic diagnosis and minor repairs. Additional charges may apply for parts and major repairs.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">What's included</h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {services.map((service) => (
                  <li key={service} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Standard Service Charge</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">₹350</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">INR</span>
                  </p>
                  <a
                    href="tel:9414456385"
                    className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceRates 