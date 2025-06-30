import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    name: 'AC Service & Repair',
    description: 'Expert AC repair and maintenance services for all major brands',
    icon: '❄️',
  },
  {
    name: 'LED TV Repair',
    description: 'Professional LED TV repair and installation services',
    icon: '📺',
  },
  {
    name: 'Washing Machine Repair',
    description: 'Reliable washing machine repair and maintenance',
    icon: '🧺',
  },
  {
    name: 'Refrigerator Service',
    description: 'Comprehensive refrigerator repair and maintenance',
    icon: '❄️',
  },
  {
    name: 'Microwave Repair',
    description: 'Expert microwave oven repair services',
    icon: '🔥',
  },
  {
    name: 'Water Purifier Service',
    description: 'RO, UV & water purifier maintenance services',
    icon: '💧',
  },
]

const brands = [
  'Samsung', 'LG', 'Whirlpool', 'Voltas', 'Daikin', 'Godrej', 
  'Haier', 'Panasonic', 'Hitachi', 'IFB', 'Blue Star', 'Carrier'
]

const Home: NextPage = () => {
  return (
    <Layout>
      <NextSeo
        title="Varsha Enterprise - Home Appliance Service Center in Ajmer"
        description="Expert repair and service center for AC, LED TV, Washing Machine, Refrigerator and other home appliances in Ajmer. Authorized service for all major brands."
        canonical="https://www.varshaenterprise.com/"
        openGraph={{
          url: 'https://www.varshaenterprise.com/',
          title: 'Varsha Enterprise - Home Appliance Service Center in Ajmer',
          description: 'Expert repair and service center for home appliances in Ajmer',
          images: [
            {
              url: 'https://www.varshaenterprise.com/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Varsha Enterprise',
            },
          ],
        }}
      />

      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Expert Home Appliance Services in Ajmer
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Professional repair and maintenance services for all your home appliances. 
                  Authorized service center for major brands with experienced technicians.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/contact"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Book Service
                  </Link>
                  <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                    View Services <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Professional Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All Your Appliance Care Needs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide comprehensive repair and maintenance services for all major home appliances
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <span className="text-2xl">{service.icon}</span>
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <Link href="/services" className="text-sm font-semibold leading-6 text-blue-600">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Authorized Service</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Brands We Service
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Authorized service center for all major appliance brands
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
              {brands.map((brand) => (
                <div key={brand} className="text-center">
                  <p className="text-lg font-semibold text-gray-900">{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need appliance repair service?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Book a service appointment today and get expert repair service at your doorstep
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Book Now
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home 