import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Layout from '../../components/Layout'
import Link from 'next/link'

const services = [
  {
    name: 'AC Service & Repair',
    slug: 'ac',
    description: 'Expert AC repair and maintenance services for all major brands',
    icon: '❄️',
  },
  {
    name: 'LED TV Repair',
    slug: 'led-tv',
    description: 'Professional LED TV repair and installation services',
    icon: '📺',
  },
  {
    name: 'Washing Machine Repair',
    slug: 'washing-machine',
    description: 'Reliable washing machine repair and maintenance',
    icon: '🧺',
  },
  {
    name: 'Refrigerator Service',
    slug: 'refrigerator',
    description: 'Comprehensive refrigerator repair and maintenance',
    icon: '❄️',
  },
  {
    name: 'Microwave Repair',
    slug: 'microwave',
    description: 'Expert microwave oven repair services',
    icon: '🔥',
  },
  {
    name: 'Water Purifier Service',
    slug: 'water-purifier',
    description: 'RO, UV & water purifier maintenance services',
    icon: '💧',
  },
  {
    name: 'Geyser Repair',
    slug: 'geyser',
    description: 'Professional geyser and water heater repair services',
    icon: '🔥',
  },
]

const brands = [
  'Samsung', 'LG', 'Whirlpool', 'Voltas', 'Daikin', 'Godrej',
  'Haier', 'Panasonic', 'Hitachi', 'IFB', 'Blue Star', 'Carrier'
]

const ServicesPage: NextPage = () => {
  return (
    <Layout>
      <NextSeo
        title="Home Appliance Repair Services in Ajmer"
        description="Expert repair and maintenance services for AC, LED TV, Washing Machine, Refrigerator and other home appliances in Ajmer. Authorized service for all major brands."
        canonical="https://www.varshaenterprise.com/services"
      />

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional repair and maintenance services for all your home appliances.
              We are an authorized service center for major brands.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="relative flex flex-col rounded-2xl border border-gray-200 p-8 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center gap-x-4">
                    <span className="text-3xl">{service.icon}</span>
                    <h2 className="text-xl font-semibold leading-8 text-gray-900">
                      {service.name}
                    </h2>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold text-gray-900">
                      Available for brands:
                    </h3>
                    <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                      {brands.slice(0, 4).map((brand) => (
                        <li key={brand}>
                          <Link
                            href={`/services/${brand.toLowerCase()}/${service.slug}`}
                            className="hover:text-blue-600"
                          >
                            {brand}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <span className="text-gray-400">and more...</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brands Section */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-center text-gray-900 sm:text-3xl">
              Brands We Service
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="flex items-center justify-center px-4 py-6 border rounded-lg hover:border-blue-500 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24">
            <div className="bg-blue-600 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 rounded-3xl">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Need appliance repair service?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                  Book a service appointment today and get expert repair service at your doorstep
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="tel:+919414456385"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Call Now: 9414456385
                  </a>
                  <Link
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Contact Us <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage 